/* ============================================================
   PERSONALIZATION
============================================================ */

const birthdayData = {

    /*
       ========================================================
       EDIT THIS SECTION
       ========================================================
    */

    name: "Novera Saeed",

    /*
       ADD AS MANY NAMES / NICKNAMES AS YOU WANT
       The website will use these in different places.
    */

    names: [
        "My Queen",
        "My Pancake",
        "My Sweetheart",
        
    ],

    birthdayMessage:
        "Today, We celebrate the beautiful soul that you are.",


    reasons: [

        {
            title: "YOU SMILE",
            message:
                "There’s something about your smile—a kind of quiet magic—that makes even the most ordinary moments feel worth remembering."

        },

        {
            title: "YOUR HAPPINESS",
            message:
                "Your happiness is contagious; seeing you genuinely happy somehow makes my day perfect too."
        },

        {
            title: "YOUR EYES",
            message:
                "I could spend forever looking into your eyes and still find something new to admire and There’s a whole world in your eyes, and somehow, I never mind getting lost in it."
        },

        {
            title: "YOUR HEART",
            message:
                "You carry so much warmth in your heart, and I hope you always know how special that is."
        },

        {
            title: "YOUR HABITS",
            message:
                "It’s the little things you do without thinking that somehow became some of my favorite things about you."
        },

        {
            title: "AND LASTLY YOU",
            message:
                "There are beautiful things in this world that words can describe. And then there’s you. And You’re the kind of person who makes me believe some things are simply meant to be felt, not explained. ♡"
        }

    ],


    story: {

        beginning:
            "It started with ordinary days in class 5, and somehow, even after our classes changed, I never stopped looking for you. Years passed, and those quiet glances slowly became something neither of us needed words to understand. ♡",

        love:
            "It began with a confession, then slowly grew through simple conversations and shared moments. Somewhere along the way, we realized our hearts had already chosen each other. Through every high and low, we kept choosing trust, patience, and love. And somehow, it only kept growing. ♡",

        future:
            "Today, we’re still growing, caring, and finding our way through every up and down. We know the road ahead won’t always be easy, but we know what we’re working toward. So we’ll keep becoming better versions of ourselves, building the future we dream of. And someday, we hope all these chapters lead us to the forever we’ve always imagined. ♡"

    },


    letter:
`I don't think I'll ever have enough words to explain how much you mean to me.

I'm grateful for every conversation, every laugh, every little moment and every memory we've shared.

You have brought so much warmth and happiness into my life, and I hope you always remember how incredibly special you are.

This birthday is just the beginning of another beautiful year for you.

Happiest 18th Birthday, My Darling. ❤️



`

};


/* ============================================================
   NAME SYSTEM
============================================================ */

let nameIndex = 0;


/*
   Get the next name in order.

   Example:

   1st call → names[0]
   2nd call → names[1]
   3rd call → names[2]
   4th call → names[3]

   When we reach the end, it starts again from the beginning.
*/

function getDifferentName() {

    const names = birthdayData.names;

    if (!names || names.length === 0) {
        return birthdayData.name;
    }

    const name = names[nameIndex];

    nameIndex =
        (nameIndex + 1) % names.length;

    return name;
}


/*
   Get a specific name by its position.

   This is useful for things like the reason cards.
*/

function getName(index) {

    const names = birthdayData.names;

    if (!names || names.length === 0) {
        return birthdayData.name;
    }

    return names[
        index % names.length
    ];
}


/*
   Replace [name] with the NEXT name in the sequence.
*/

function personalizeText(text) {

    if (!text) {
        return "";
    }

    return text.replace(
        /\[name\]/gi,
        () => getDifferentName()
    );
}
//    Get a specific name by position.

//    Example:

//    getName(0)
//    getName(1)
//    getName(2)
// */

function getName(index) {

    const names =
        birthdayData.names;


    if (
        !names ||
        names.length === 0
    ) {

        return birthdayData.name;

    }


    return names[
        index % names.length
    ];

}


/*
   Replace [name] inside any text with
   a different nickname.

   Example:

   "Happy birthday, [name]!"

   becomes:

   "Happy birthday, Beautiful!"
*/

function personalizeText(text) {

    if (!text) {
        return "";
    }


    return text.replace(
        /\[name\]/gi,
        getDifferentName()
    );

}


/* ============================================================
   ELEMENTS
============================================================ */

const scenes =
    document.querySelectorAll(".scene");

const nextButtons =
    document.querySelectorAll(".next");

const musicToggle =
    document.getElementById("musicToggle");

const stars =
    document.getElementById("stars");

const floatingHearts =
    document.getElementById("floatingHearts");

const specialGrid =
    document.getElementById("specialGrid");

const envelope =
    document.getElementById("envelope");

const envelopeHint =
    document.getElementById("envelopeHint");

const letterButton =
    document.getElementById("letterButton");

const replayButton =
    document.getElementById("replayButton");

const secretHeart =
    document.getElementById("secretHeart");

const secretMessage =
    document.getElementById("secretMessage");

const confetti =
    document.getElementById("confetti");

const canvas =
    document.getElementById("fireworks");

const ctx =
    canvas.getContext("2d");


/* ============================================================
   PERSONALIZATION
============================================================ */


/*
   Elements with data-name will receive
   different nicknames instead of always
   receiving birthdayData.name.
*/

document
    .querySelectorAll("[data-name]")
    .forEach(element => {

        element.textContent =
            getDifferentName();

    });


/*
   Birthday message
*/

document.getElementById(
    "birthdayMessage"
).textContent =
    personalizeText(
        birthdayData.birthdayMessage
    );


/*
   Story
*/

document.getElementById(
    "storyBeginning"
).textContent =
    personalizeText(
        birthdayData.story.beginning
    );


document.getElementById(
    "storyLove"
).textContent =
    personalizeText(
        birthdayData.story.love
    );


document.getElementById(
    "storyFuture"
).textContent =
    personalizeText(
        birthdayData.story.future
    );


/*
   Letter

   You can now write [name] inside your letter
   and it will automatically become a nickname.
*/

document.getElementById(
    "letterText"
).textContent =
    personalizeText(
        birthdayData.letter
    );


/* ============================================================
   SCENE NAVIGATION
============================================================ */

let currentScene =
    "scene-1";


function showScene(id) {

    const target =
        document.getElementById(id);

    if (!target) {
        return;
    }


    scenes.forEach(scene => {

        scene.classList.remove("active");

    });


    target.classList.add("active");

    currentScene = id;


    if (id === "scene-7") {

        startFinale();

    }

}


/* ============================================================
   NEXT BUTTONS
============================================================ */

nextButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const target =
                button.dataset.next;

            heartBurst(
                window.innerWidth / 2,
                window.innerHeight / 2
            );

            showScene(target);

        }
    );

});


/* ============================================================
   SPECIAL CARDS
============================================================ */

birthdayData.reasons.forEach(
    (reason, index) => {

        const card =
            document.createElement("div");

        card.className =
            "special-card";


        const front =
            document.createElement("div");

        front.className =
            "special-front";


        /*
           Each card gets a different nickname.
        */

        const cardName =
            getName(index);


        front.textContent = reason.title;

        


        const back =
            document.createElement("div");

        back.className =
            "special-back";


        /*
           [name] can also be used
           inside reason messages.
        */

        back.textContent =
            personalizeText(
                reason.message
            );


        card.appendChild(front);

        card.appendChild(back);


        card.addEventListener(
            "click",
            () => {

                card.classList.toggle(
                    "open"
                );


                const rect =
                    card.getBoundingClientRect();


                heartBurst(
                    rect.left +
                    rect.width / 2,

                    rect.top +
                    rect.height / 2
                );

            }
        );


        specialGrid.appendChild(card);

    }
);


/* ============================================================
   ENVELOPE
============================================================ */

let letterOpened =
    false;


function openLetter() {

    if (letterOpened) {
        return;
    }


    letterOpened = true;

    envelope.classList.add("open");


    envelopeHint.textContent =
        "A little something from my heart… but maybe you’ll have to get a little closer to find out ❤️😉";


    heartBurst(
        window.innerWidth / 2,
        window.innerHeight / 2
    );


    setTimeout(() => {

        letterButton.classList.add(
            "visible"
        );

    }, 1100);

}


envelope.addEventListener(
    "click",
    openLetter
);


envelope.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            openLetter();

        }

    }
);


/* ============================================================
   REPLAY
============================================================ */

replayButton.addEventListener(
    "click",
    () => {

        stopFinale();

        letterOpened = false;

        envelope.classList.remove(
            "open"
        );

        letterButton.classList.remove(
            "visible"
        );

        envelopeHint.textContent =
            "Tap the envelope to open your letter";


        /*
           Reset nickname rotation
           when replaying.
        */

        lastNameIndex = -1;


        showScene("scene-1");

    }
);


/* ============================================================
   STARS
============================================================ */

function createStars() {

    const amount =
        window.innerWidth < 600
            ? 65
            : 120;


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const star =
            document.createElement("span");

        star.className =
            "star";


        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";


        const size =
            1 +
            Math.random() * 2;

        star.style.width =
            size + "px";

        star.style.height =
            size + "px";


        star.style.animationDelay =
            Math.random() * 4 + "s";


        stars.appendChild(star);

    }

}

createStars();


/* ============================================================
   FLOATING HEARTS
============================================================ */

function createFloatingHeart() {

    const heart =
        document.createElement("div");

    heart.className =
        "floating-heart";

    heart.textContent =
        Math.random() > 0.5
            ? "♡"
            : "♥";


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        10 +
        Math.random() * 14 +
        "px";


    heart.style.animationDuration =
        5 +
        Math.random() * 4 +
        "s";


    floatingHearts.appendChild(
        heart
    );


    setTimeout(
        () => heart.remove(),
        14000
    );

}


setInterval(
    createFloatingHeart,
    400
);

for (let i = 0; i < 15; i++) {
    setTimeout(
        createFloatingHeart,
        i * 300
    );
}


/* ============================================================
   HEART BURST
============================================================ */

function heartBurst(x, y) {

    for (
        let i = 0;
        i < 9;
        i++
    ) {

        const heart =
            document.createElement("div");

        heart.textContent =
            i % 2 === 0
                ? "♥"
                : "♡";


        heart.style.position =
            "fixed";

        heart.style.left =
            x + "px";

        heart.style.top =
            y + "px";

        heart.style.zIndex =
            "200";

        heart.style.pointerEvents =
            "none";

        heart.style.color =
            i % 2 === 0
                ? "#ff78b1"
                : "#ffc1db";

        heart.style.fontSize =
            12 +
            Math.random() * 12 +
            "px";


        document.body.appendChild(
            heart
        );


        const angle =
            Math.random() *
            Math.PI *
            2;

        const distance =
            50 +
            Math.random() * 80;


        const xMove =
            Math.cos(angle) *
            distance;

        const yMove =
            Math.sin(angle) *
            distance;


        heart.animate(

            [
                {
                    transform:
                        "translate(-50%, -50%) scale(.5)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${xMove}px),
                            calc(-50% + ${yMove}px)
                        )
                        scale(1.1)`,
                    opacity: 0
                }

            ],

            {
                duration: 850,
                easing:
                    "cubic-bezier(.2,.8,.3,1)"
            }

        );


        setTimeout(
            () => heart.remove(),
            900
        );

    }

}


/* ============================================================
   SECRET HEART
============================================================ */

secretHeart.addEventListener(
    "click",
    () => {

        secretMessage.classList.add(
            "show"
        );


        const rect =
            secretHeart.getBoundingClientRect();


        heartBurst(
            rect.left,
            rect.top
        );


        setTimeout(
            () => {

                secretMessage.classList.remove(
                    "show"
                );

            },
            4000
        );

    }
);


/* ============================================================
   BUILT-IN SOFT MUSIC
============================================================ */

let audioContext = null;

let musicTimer = null;

let musicPlaying = false;

let musicStarted = false;


const melody = [

    261.63,
    329.63,
    392.00,
    329.63,

    293.66,
    349.23,
    440.00,
    349.23,

    261.63,
    329.63,
    392.00,
    523.25,

    440.00,
    392.00,
    329.63,
    293.66

];


function playNote(
    frequency,
    duration = 1.7
) {

    if (!audioContext) {
        return;
    }


    const oscillator =
        audioContext.createOscillator();

    const gain =
        audioContext.createGain();


    oscillator.type =
        "sine";

    oscillator.frequency.value =
        frequency;


    oscillator.connect(gain);

    gain.connect(
        audioContext.destination
    );


    const now =
        audioContext.currentTime;


    gain.gain.setValueAtTime(
        0,
        now
    );

    gain.gain.linearRampToValueAtTime(
        0.015,
        now + 0.05
    );

    gain.gain.exponentialRampToValueAtTime(
        0.004,
        now + duration
    );


    oscillator.start(now);

    oscillator.stop(
        now + duration
    );

}


function startMusic() {

    if (musicStarted) {

        if (
            audioContext &&
            audioContext.state === "suspended"
        ) {

            audioContext.resume();

        }

        musicPlaying = true;

        musicToggle.textContent =
            "♫ Music on";

        return;

    }


    try {

        audioContext =
            new (
                window.AudioContext ||
                window.webkitAudioContext
            )();


        let index = 0;


        function playNext() {

            if (!musicPlaying) {
                return;
            }


            playNote(
                melody[index],
                1.8
            );


            index =
                (index + 1) %
                melody.length;


            musicTimer =
                setTimeout(
                    playNext,
                    620
                );

        }


        musicStarted = true;

        musicPlaying = true;

        musicToggle.textContent =
            "♫ Music on";


        playNext();

    } catch (error) {

        console.log(
            "Music is not supported.",
            error
        );

    }

}


function stopMusic() {

    musicPlaying = false;

    clearTimeout(
        musicTimer
    );

    musicToggle.textContent =
        "♫ Music off";

}


/* ============================================================
   MUSIC BUTTON
============================================================ */

musicToggle.addEventListener(
    "click",
    () => {

        if (!musicStarted) {

            startMusic();

            return;

        }


        if (musicPlaying) {

            stopMusic();

        } else {

            startMusic();

        }

    }
);


/*
   FIRST NAVIGATION BUTTON STARTS MUSIC
*/

document
    .querySelectorAll(".next")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                if (!musicStarted) {

                    startMusic();

                }

            },
            { once: true }
        );

    });


/* ============================================================
   CONFETTI
============================================================ */

function createConfetti() {

    confetti.innerHTML = "";


    const amount =
        window.innerWidth < 600
            ? 65
            : 120;


    const colors = [
        "#ff78b1",
        "#ffc1db",
        "#bda3f2",
        "#ffffff",
        "#ffd166"
    ];


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const piece =
            document.createElement("div");

        piece.className =
            "confetti-piece";


        piece.style.left =
            Math.random() * 100 + "%";


        piece.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        piece.style.animationDuration =
            3 +
            Math.random() * 4 +
            "s";


        piece.style.animationDelay =
            Math.random() * 2 +
            "s";


        confetti.appendChild(
            piece
        );

    }

}


/* ============================================================
   FIREWORKS
============================================================ */

let particles = [];

let fireworksRunning = false;

let animationFrame = null;


function resizeCanvas() {

    const ratio =
        window.devicePixelRatio || 1;


    canvas.width =
        window.innerWidth *
        ratio;

    canvas.height =
        window.innerHeight *
        ratio;


    canvas.style.width =
        window.innerWidth +
        "px";

    canvas.style.height =
        window.innerHeight +
        "px";


    ctx.setTransform(
        ratio,
        0,
        0,
        ratio,
        0,
        0
    );

}


resizeCanvas();


window.addEventListener(
    "resize",
    resizeCanvas
);


class Particle {

    constructor(
        x,
        y,
        angle,
        speed
    ) {

        this.x = x;
        this.y = y;

        this.vx =
            Math.cos(angle) *
            speed;

        this.vy =
            Math.sin(angle) *
            speed;

        this.life = 1;

    }


    update() {

        this.x += this.vx;

        this.y += this.vy;

        this.vy += 0.025;

        this.vx *= 0.985;

        this.vy *= 0.985;

        this.life -= 0.018;

    }


    draw() {

        ctx.globalAlpha =
            Math.max(
                this.life,
                0
            );


        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            1.5,
            0,
            Math.PI * 2
        );


        ctx.fillStyle =
            "#ffc1db";

        ctx.fill();

    }

}


function createFirework() {

    const x =
        80 +
        Math.random() *
        (window.innerWidth - 160);


    const y =
        70 +
        Math.random() *
        (window.innerHeight * 0.45);


    const amount =
        window.innerWidth < 600
            ? 55
            : 90;


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const angle =
            Math.PI *
            2 *
            i /
            amount;


        const speed =
            1.5 +
            Math.random() * 2.5;


        particles.push(
            new Particle(
                x,
                y,
                angle,
                speed
            )
        );

    }

}


function animateFireworks() {

    if (!fireworksRunning) {
        return;
    }


    ctx.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
    );


    particles.forEach(
        particle => {

            particle.update();

            particle.draw();

        }
    );


    particles =
        particles.filter(
            particle =>
                particle.life > 0
        );


    ctx.globalAlpha = 1;


    animationFrame =
        requestAnimationFrame(
            animateFireworks
        );

}


function startFinale() {

    createConfetti();

    fireworksRunning = true;

    particles = [];


    if (animationFrame) {

        cancelAnimationFrame(
            animationFrame
        );

    }


    animateFireworks();


    let count = 0;


    const interval =
        setInterval(
            () => {

                if (
                    currentScene !== "scene-7" ||
                    count >= 30
                ) {

                    clearInterval(
                        interval
                    );

                    return;

                }


                createFirework();

                count++;

            },
            450
        );

}


function stopFinale() {

    fireworksRunning = false;

    particles = [];


    if (animationFrame) {

        cancelAnimationFrame(
            animationFrame
        );

        animationFrame = null;

    }


    ctx.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
    );


    confetti.innerHTML = "";

}


/* ============================================================
   START
============================================================ */

showScene("scene-1");