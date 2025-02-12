web3 = new Web3(web3.currentProvider);
var contract = new web3.eth.Contract(abi, address);
console.log("blockchain connected")

window.addEventListener("load", async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        console.log("Connected:", await web3.eth.getAccounts());
    } else {
        alert("Please install MetaMask!");
    }
});

