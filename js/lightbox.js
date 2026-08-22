document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(
        ".hero_visual img, .product_detail img, .ios-screen, .content img"
    );

    if (!images.length) {
        return;
    }

    const lightbox = document.createElement("div");
    lightbox.className = "image_lightbox";
    lightbox.hidden = true;
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.setAttribute("aria-label", "Image preview");
    lightbox.innerHTML = `
        <button class="image_lightbox_close" type="button" aria-label="Close image preview">&times;</button>
        <img alt="">
    `;
    document.body.appendChild(lightbox);

    const preview = lightbox.querySelector("img");
    const closeButton = lightbox.querySelector("button");
    let activeImage = null;

    const close = () => {
        lightbox.hidden = true;
        preview.removeAttribute("src");
        document.body.classList.remove("lightbox_open");
        activeImage?.focus();
        activeImage = null;
    };

    const open = (image) => {
        activeImage = image;
        preview.src = image.currentSrc || image.src;
        preview.alt = image.alt || "FSNotes screenshot";
        lightbox.hidden = false;
        document.body.classList.add("lightbox_open");
        closeButton.focus();
    };

    images.forEach((image) => {
        image.tabIndex = 0;
        image.setAttribute("role", "button");
        image.setAttribute("aria-label", `View larger: ${image.alt || "FSNotes screenshot"}`);

        image.addEventListener("click", () => open(image));
        image.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                open(image);
            }
        });
    });

    closeButton.addEventListener("click", close);
    preview.addEventListener("click", close);
    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            close();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !lightbox.hidden) {
            close();
        }
    });
});
