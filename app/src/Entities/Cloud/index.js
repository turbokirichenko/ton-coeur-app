import { store } from "../../Shared/Lib/store";

/** increase balance
 * 
 * @param { { userId } } clickOptions - there are params to increase the balance
 * @returns {Promise<object>}
 */
async function click(clickOptions) {
    const { userId } = clickOptions;
    var a = store.get(userId) ?? 0;
    a = a + 1;
    store.set(userId, a);
    return { status: 200, message: 'ok', data: { count: a } };
}

/** send gift to the user
 * 
 * @param {object} sendToOptions - there are
 */
async function sendTo(sendToOptions) {
    return { status: 200, message: 'ok' }
}

/** get gift parameters
 * 
 * @param {{ userFromId, userToId }} openOptions - there are params that neccessary to get the information about the gift
 */
async function openGift(openOptions) {
    const { userFromId, userToId } = openOptions;
    return {
        status: 200,
        message: 'ok',
        data: {
            fromName: '@collusioner',
            toName: '@sashamoya',
            giftType: '@redheart',
            touchNumber: 14723,
        }
    }
}


export const clicker = {
    click,
    sendTo,
    openGift,
}

export const cloudFactory = () => {
    return {
        click,
        sendTo,
        openGift,
    }
}