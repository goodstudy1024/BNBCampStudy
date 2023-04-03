// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.4;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract Demo is Initializable {
    uint256 public a;

    function initialize(uint256 _a) public initializer {
        a = _a;
    }

    function increaseA() external {
        ++a;
    }
}