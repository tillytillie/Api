const TronWeb = require('tronweb');
const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider("https://api.trongrid.io");
const solidityNode = new HttpProvider("https://api.trongrid.io");
const eventServer = new HttpProvider("https://api.trongrid.io");
const privateKey = "348c16ec953726b1b7be86cc04c40407c87a3....."; //Compromised Privatekey
const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);
const CONTRACT = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"; //USDT TRC20 Contract address
const ACCOUNT = "TTsNrYpjUcuVLjkYj"; //Your Safe Address

async function main() {
    let {
        transaction,
        result
    } = await tronWeb.transactionBuilder.triggerSmartContract(
        CONTRACT, 'transfer(address,uint256)', {
            feeLimit: 1_000_000,
            callValue: 0
        },
        [{
            type: 'address',
            value: ACCOUNT 
        }, {
            type: 'uint256',
            value: 1000000 //customise 
        }]
    );
    if (!result.result) {
        console.error("error:", result);
        return;
    }
    console.log("transaction =>", JSON.stringify(transaction, null, 2));

    const signature = await tronWeb.trx.sign(transaction.raw_data_hex);
    console.log("Signature:", signature);
    transaction["signature"] = [signature];

    const broadcast = await tronWeb.trx.sendRawTransaction(transaction);
    console.log("result:", broadcast);

    const {
        message
    } = broadcast;
    if (message) {
        console.log("Error:", Buffer.from(message, 'hex').toString());
    }
}

main().then(() => {
        console.log("ok");
    })
    .catch((err) => {
        console.trace(err);
    });