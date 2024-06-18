// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract Twitter {
    mapping(address => string) public tweets; // String as a tweet

    function createTweet(string memory _tweet) public {
        tweets[msg.sender] = _tweet; // Your account address is the key of the tweet thats you create
    }

    function getTweet(address _owner) public view returns (string memory) {
        return tweets[_owner];
    }
}
