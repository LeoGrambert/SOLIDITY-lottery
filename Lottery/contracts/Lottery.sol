pragma solidity ^0.4.17;

contract Lottery {
    address public manager;
    address[] public players;

    modifier restricted() {
      require(msg.sender == manager);
      _;  
    }

    function Lottery() public {
        manager = msg.sender;
    }

    function random() private view returns (uint256) {
        return uint(keccak256(block.difficulty, now, players));
    }

    function getRandomIndex() private view returns (uint256) {
        return random() % players.length;
    }

    function enter() public payable {
        require(msg.value > .01 ether);
        players.push(msg.sender);
    }

    function pickWinner() public restricted {
        uint256 index = getRandomIndex();
        players[index].transfer(this.balance);
        players = new address[](0);
    }

    function getPlayers() public view returns (address[]) {
        return players;
    }
}