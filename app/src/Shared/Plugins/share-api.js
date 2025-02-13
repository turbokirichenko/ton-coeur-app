export function share(link, title, text) {
    if (navigator.share) {
        navigator
            .share({
                title,
                text,
                url: link,
            })
            .then(() => {})
            .catch((error) => console.error("Error sharing", error));
    } else {
        alert("Share not supported on this browser, do it the old way.");
    }
}