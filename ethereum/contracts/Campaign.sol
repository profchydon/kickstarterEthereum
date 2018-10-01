pragma solidity ^0.4.17;

contract CampaignFactory {

    address[] public deployedCampaigns;

    function createCampaign (uint minimum) public {
        address newCampaign = new Campaign(minimum , msg.sender);
        deployedCampaigns.push(newCampaign);
    }

    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}

contract Campaign {

    struct Request {
        string description;
        uint value;
        address recepient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }

    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;

    constructor(uint minimum , address creator) public {
        manager = creator;
        minimumContribution = minimum;
        approversCount = 0;
    }

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function contribute() public payable {
        require(msg.value > minimumContribution);
        approvers[msg.sender] = true;
        approversCount++;
    }

    function createRequest(string description, uint value, address recepient) public restricted {
        Request memory newRequest = Request({
            description : description,
            value : value,
            recepient : recepient,
            complete : false,
            approvalCount : 0
        });

        requests.push(newRequest);
    }

    function approveRequest(uint index) public {
        Request storage request = requests[index];
        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);
        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];
        require(!request.complete);
        require(request.approvalCount > (approversCount / 2));
        request.recepient.transfer(request.value);
        request.complete = true;
    }
}
