import { User } from "./user.svelte";
import { BlackBox } from "../../Shared/Plugins/blackbox";
import { Validator } from "../../Shared/Plugins/validator";
import { Crypto } from "../../Shared/Plugins/crypto";
import { Store } from "../../Shared/Plugins/store";

const validator = new Validator();
const crypto = new Crypto();
const blackbox = new BlackBox(crypto, validator);
const store = new Store();
export const userData = new User(blackbox, store);