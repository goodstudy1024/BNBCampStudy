async function main() {
    const Demo = await ethers.getContractFactory("Demo");
    console.log("Deploying Demo...");
    // initializer 后面的参数为初始化函数的名字，这里为 initialize
    // 中括号的参数为初始化函数的参数
    const demo = await upgrades.deployProxy(Demo, [101], { initializer: 'initialize' });
    // 这里打印的地址为代理合约的地址
    console.log("Demo deployed to:", demo.address);
  }
  
  // 这里也可以简化为 main()，后面的都省略也可以
  main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });