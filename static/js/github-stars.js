document.addEventListener("DOMContentLoaded", async () => {
    const counter = document.querySelector("[data-github-stars]");

    if (!counter) {
        return;
    }

    try {
        const response = await fetch("https://api.github.com/repos/glushchenko/fsnotes", {
            headers: { Accept: "application/vnd.github+json" }
        });

        if (!response.ok) {
            return;
        }

        const repository = await response.json();

        if (!Number.isInteger(repository.stargazers_count)) {
            return;
        }

        counter.textContent = new Intl.NumberFormat().format(repository.stargazers_count);
        counter.hidden = false;
    } catch {
        // The GitHub link remains useful when the live count is unavailable.
    }
});
