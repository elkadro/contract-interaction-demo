import {Router} from "express";
import {ethers} from 'ethers';

const router = Router();

router.post('/view', async (req,res)=> {
    const address = "0x7eed379bf00005CfeD29feD4009669dE9Bcc21ce";
    const abi = [{
        "constant": true,
        "inputs":[],
        "name":"latestAnswer",
        "outputs": [{
            "name": "answer",
            "type": "int256"
        }],
        "payable": false,
        "stateMutabilitiy": "view",
        "type": "function"
    }];
    const functionName = "latestAnswer";
    const args: any = [];
    const network = "ethereum";
    try {
    const provider = new ethers.AlchemyProvider('homestead', process.env.ALCHEMY_API)
    const privateKey = process.env.PRIVATE_KEY || "";
    if(!privateKey) throw Error("Private key not found")
    const signer = new ethers.Wallet(privateKey,provider)
    const contract = new ethers.Contract(address, abi, provider)
    const result = await contract[functionName].apply(contract, args)
    console.log("result: ", result.toString())
    res.json({status: false, data: result.toString()})
    } catch (error:any) {
        console.error(error)
        res.status(500).json({status: false, data: error.message})
    }

})

export default router;