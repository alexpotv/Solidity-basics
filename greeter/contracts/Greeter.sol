pragma solidity >= 0.4.0;

contract Greeter {
    // The string of the greeting to send
    string private _greeting;
    // The address of the contract owner
    address private _owner;

    constructor() {
        _owner = msg.sender;
        _greeting = "Hello, World!";
    }

    modifier onlyOwner() {
        require(
            msg.sender == _owner,
            "Ownable: caller is not the owner"
        );
        _;
    }

    function greet() external view returns(string memory) {
        // Returns current contract greeting
        return _greeting;
    }

    function setGreeting(string calldata greeting) external onlyOwner {
        // Sets current contract greeting
        _greeting = greeting;
    }

    function owner() public view returns(address) {
        // Returns current contract owner address
        return _owner;
    }
}
