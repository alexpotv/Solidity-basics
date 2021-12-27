pragma solidity >0.4.23;

contract Fundraiser {
    string public name;
    string public website_url;
    string public image_url;
    string public description;

    constructor(string memory _name, string memory _website_url,
        string memory _image_url, string memory _description) public {
        name = _name;
        website_url = _website_url;
        image_url = _image_url;
        description = _description;
    }
}
