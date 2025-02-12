import { User } from "./user.svelte";
import { BlackBox } from "../../Shared/Plugins/blackbox";
import { Validator } from "../../Shared/Plugins/validator";
import { Crypto } from "../../Shared/Plugins/crypto";

const validator = new Validator();
const crypto = new Crypto();
const blackbox = new BlackBox(crypto, validator);
export const userData = new User(blackbox);