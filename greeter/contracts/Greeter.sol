pragma solidity >= 0.4.0;

import "openzeppelin-solidity/contracts/access/Ownable.sol";

contract Greeter is Ownable {
    // The string of the greeting to send
    string private _greeting = "Hello, World!";

    function greet() external view returns(string memory) {
        // Returns current contract greeting
        return _greeting;
    }

    function setGreeting(string calldata greeting) external onlyOwner {
        // Sets current contract greeting
        _greeting = greeting;
    }

}
