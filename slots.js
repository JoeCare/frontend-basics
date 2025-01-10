const symbols = ["🍒", "🍋", "⭐", "🔔", "🍉"];

function getRandomSymbol() {
    const randInd = Math.floor(Math.random() * symbols.length);
    console.log(randInd);
    return symbols[randInd];
}

function spinReels() {
    const reel1El = document.getElementById("reel1");
    const reel2El = document.getElementById("reel2");
    const reel3El = document.getElementById("reel3");
    const messageEl = document.getElementById("message");
    

    messageEl.textContent = "";
    [reel1El, reel2El, reel3El].forEach((reel) => reel.classList.add("spinning"));

    setTimeout(() => {
        [reel1El, reel2El, reel3El].forEach((reel) => reel.classList.remove("spinning"));
    })

        const reel1 = getRandomSymbol();
        const reel2 = getRandomSymbol();
        const reel3 = getRandomSymbol();

        reel1El.textContent = reel1;
        reel2El.textContent = reel2;
        reel3El.textContent = reel3;

        if (reel1 === reel2 && reel2 === reel3) {
            messageEl.textContent = `🎉 You win! You got ${reel1}${reel2}${reel3}`;
            messageEl.style.color = "green";
        } else {
            messageEl.textContent = "You lose. Try again.";
            messageEl.style.color = "red";
        }
    }
}
