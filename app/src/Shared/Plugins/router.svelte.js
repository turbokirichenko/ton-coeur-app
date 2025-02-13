/** pop up mode
 * @type {{ route: '' | 'archive' | 'about' | 'share' }}
 */
export const router = $state({
    route: 'about'
})

export const navigate = (route) => {
    router.route = route;
}