export function share(link, title, text) {
    console.log({
        url: link,
        title: title,
        text: text
    })
        if (navigator.share) {
            navigator
                .share({
                    title,
                    text,
                    url: link,
                })
                .then(() => {})
                .catch((error) => console.log("Error sharing", error));
        } else {
            alert("Share not supported on this browser, do it the old way.");
        }
}