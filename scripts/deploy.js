import hre from "hardhat";

const currentTimestampInSeconds = Math.round(Date.now() / 1000);
const unlockTime = currentTimestampInSeconds + 60;

const lockedAmount = hre.ethers.parseEther("0.001");

const lock = await ethers.deployContract("Lock", [unlockTime], {
  value: lockedAmount,
});

await lock.waitForDeployment();

console.log(
  `Lock with ${ethers.formatEther(
    lockedAmount
  )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
);
