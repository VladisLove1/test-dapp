pragma solidity ^0.4.0;

import 'zeppelin-solidity/contracts/token/ERC20/StandardToken.sol';

contract TestToken is StandardToken {

    string public name = 'TestToken';
    string public symbol = 'TT';
    uint8 public decimals = 18;
    uint public INITIAL_SUPPLY = 1000;

    function TestToken() {
        totalSupply_ = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;
    }
}
