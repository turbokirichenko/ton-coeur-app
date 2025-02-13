import { User } from "./user.svelte";
import { BlackBox } from "../../Shared/Plugins/blackbox";
import { Validator } from "../../Shared/Plugins/validator";
import { Crypto } from "../../Shared/Plugins/crypto";
import { Store } from "../../Shared/Plugins/store";
import { Register } from "../../Shared/Plugins/register";

const validator = new Validator();
const crypto = new Crypto();
const blackbox = new BlackBox(crypto, validator);
const store = new Store();

async function test() {
    const token = await crypto.generateKey();
    const exportToken = await crypto.exportKey(token);
    const data = crypto.pack(exportToken);
    const register = new Register(data, crypto);
    const signature = await register.payment({
        genesis: "12345678",
        snapshot: "12345678",
        from: '@collusioner',
        to: '@shurochka1396',
        key: 4
    });
    const paymentData = await register.validate(signature);
    console.log(signature, paymentData);
}
export const userData = new User(blackbox, store);

test();