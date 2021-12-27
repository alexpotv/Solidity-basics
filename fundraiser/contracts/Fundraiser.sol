pragma solidity >0.4.23;

import "openzeppelin-solidity/contracts/access/Ownable.sol";

contract Fundraiser is Ownable {
    string public name;
    string public website_url;
    string public image_url;
    string public description;

    address payable public beneficiary;

    constructor(string memory _name, string memory _website_url,
        string memory _image_url, string memory _description, address payable _beneficiary, address _custodian) public {
        name = _name;
        website_url = _website_url;
        image_url = _image_url;
        description = _description;

        beneficiary = _beneficiary;
        _transferOwnership(_custodian);
    }

    function setBeneficiary(address payable _beneficiary) public onlyOwner {
        beneficiary = _beneficiary;
    }
}
