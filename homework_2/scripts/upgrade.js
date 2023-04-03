async function main() {
    // 这里的地址为前面部署的代理合约地址
    const proxyAddress = '0xE7DcC9125a5064C216f301eF1a40D12e43712384';

    const Demo = await ethers.getContractFactory("Demo2");
    console.log("Preparing upgrade...");
    // 升级合约
    await upgrades.upgradeProxy(proxyAddress, Demo);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });