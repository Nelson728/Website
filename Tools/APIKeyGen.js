import crypto from "crypto";

const userName = process.argv[2]
const time = Math.floor(Date.now() / 1000);

if (!userName || userName == "") {
    console.log("Unexpected format:\nExpected: node APIKeyGen.js <\"name\">");
} else if (process.argv.some(e => e =="-p")) {
    console.log("Functionality not added yet.\nPlease add permissions manually.");
} else {
    let key = Buffer.from(crypto.getRandomValues(new Uint8Array(32))).toString("hex")
    let uuid =  crypto.randomUUID();
    let output = {
        "key": crypto.createHash("sha256").update(key).digest("hex"),
        "UUID": uuid,
        "permissions": {
            "all": true
        },
        "info": {
            "created": time,
            "expires": 1000000000 + time,
            "is_active": true,
            "owner": userName,
            "last_used": time
        }
    }
    console.log(output)
    console.log(`UUID: ${uuid}\nAPI Key: ${key}`)
}

