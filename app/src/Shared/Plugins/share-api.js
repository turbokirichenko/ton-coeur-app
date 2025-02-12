export function onclick() {
    if (navigator.share) {
        navigator
        .share({
            title: "Share app",
            text: "Take a look at this spec!",
            url: `${import.meta.env.VITE_BASE_API_URL ?? ""}/`,
        })
        .then(() => {
            console.log("success");
        })
        .catch((error) => console.log("Error sharing", error));
    } else {
        alert("Share not supported on this browser, do it the old way.");
    }
}