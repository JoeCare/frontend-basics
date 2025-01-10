

function spinReels() {
    // const reel1El = document.getElementById("reel1");
    // const reel2El = document.getElementById("reel2");
    // const reel3El = document.getElementById("reel3");
    const reels = document.querySelectorAll(".reel");
    // const messageEl = document.getElementById("message");
    

    // messageEl.textContent = "";
    // [reel1El, reel2El, reel3El].forEach((reel) => reel.classList.add("spinning"));
    reels.forEach((reel) => reel.classList.add("spinning"));

    setTimeout(() => {
        // [reel1El, reel2El, reel3El].forEach((reel) => reel.classList.remove("spinning"));
        reels.forEach((reel) => reel.classList.remove("spinning"));

        reels.forEach((reel) => {
            const symbols = reel.querySelectorAll(".symbol");
            const randInd = Math.floor(Math.random() * symbols.length);

            reel.style.transform = `translateY(${-randInd * 70}px)`;
        });
    }, 1000);
}
