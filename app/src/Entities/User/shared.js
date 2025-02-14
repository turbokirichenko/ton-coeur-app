import { User } from "./user.svelte";
import { BlackBox } from "../../Shared/Plugins/blackbox";
import { Validator } from "../../Shared/Plugins/validator";
import { SnapshotParser } from "../../Shared/Plugins/parser";
import { Crypto } from "../../Shared/Plugins/crypto";
import { Store } from "../../Shared/Plugins/store";
import { Register } from "../../Shared/Plugins/register";

const token = import.meta.env.VITE_SHARE_TOKEN;
const crypto = new Crypto();
var store = new Store();
const parser = new SnapshotParser();
const validator = new Validator(parser);
const blackbox = new BlackBox(crypto, validator, parser);
const register = new Register(token, crypto, parser);
export const userData = new User(blackbox, register, store);

async function testSignature() {
    const sign = await userData.gift('@collusioner', '@detka229');
    if (sign) {
        const data = await userData.validate(sign);
    }
    const [genesis, snapshot] = await blackbox.genesis();
    const signed = register.payment({
        genesis,
        snapshot,
        from: '@collusioner',
        to: '@shurochka1396',
        key: 7,
    });
    console.log('sogned', signed);
}

testSignature();