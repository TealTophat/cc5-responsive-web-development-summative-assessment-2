//Dictionary of videos
const videos = [
    {
        name: "I Survived 100 Hours In An Ancient Temple",
        channel: "MrBeast",
        link: "https://www.youtube.com/watch?v=-4GmbBoYQjE",
        embed: "https://www.youtube.com/embed/-4GmbBoYQjE",
        thumbnail: "https://img.youtube.com/vi/-4GmbBoYQjE/hqdefault.jpg"
    },
    {
        name: "$1 vs $500,000 Experiences!",
        channel: "MrBeast",
        link: "https://www.youtube.com/watch?v=Xj0Jtjg3lHQ",
        embed: "https://www.youtube.com/embed/Xj0Jtjg3lHQ",
        thumbnail: "https://img.youtube.com/vi/Xj0Jtjg3lHQ/hqdefault.jpg"
    },
    {
        name: "Beat Ronaldo, Win $1,000,000",
        channel: "MrBeast",
        link: "https://www.youtube.com/watch?v=0BjlBnfHcHM",
        embed: "https://www.youtube.com/embed/0BjlBnfHcHM",
        thumbnail: "https://img.youtube.com/vi/0BjlBnfHcHM/hqdefault.jpg"
    },
    {
        name: "50 YouTubers Fight For $1,000,000",
        channel: "MrBeast",
        link: "https://www.youtube.com/watch?v=4SNThp0YiU4",
        embed: "https://www.youtube.com/embed/4SNThp0YiU4",
        thumbnail: "https://img.youtube.com/vi/4SNThp0YiU4/hqdefault.jpg"
    },
    {
        name: "I Built Willy Wonka's Chocolate Factory!",
        channel: "MrBeast",
        link: "https://www.youtube.com/watch?v=Hwybp38GnZw",
        embed: "https://www.youtube.com/embed/Hwybp38GnZw",
        thumbnail: "https://img.youtube.com/vi/Hwybp38GnZw/hqdefault.jpg"
    },
    {
        name: "I Blew Up A 24 Story Building",
        channel: "Mark Rober",
        link: "https://www.youtube.com/watch?v=0XgcOz95hTs",
        embed: "https://www.youtube.com/embed/0XgcOz95hTs",
        thumbnail: "https://img.youtube.com/vi/0XgcOz95hTs/hqdefault.jpg"
    },
    {
        name: "I Built a Roller Coaster In My Lab",
        channel: "Mark Rober",
        link: "https://www.youtube.com/watch?v=9IiYOTzJ2uw",
        embed: "https://www.youtube.com/embed/9IiYOTzJ2uw",
        thumbnail: "https://img.youtube.com/vi/9IiYOTzJ2uw/hqdefault.jpg"
    },
    {
        name: "Testing The World's Smartest Crow",
        channel: "Mark Rober",
        link: "https://www.youtube.com/watch?v=tpg3VvoIVfA",
        embed: "https://www.youtube.com/embed/tpg3VvoIVfA",
        thumbnail: "https://img.youtube.com/vi/tpg3VvoIVfA/hqdefault.jpg"
    },
    {
        name: "Egg Drop From Space",
        channel: "Mark Rober",
        link: "https://www.youtube.com/watch?v=BYVZh5kqaFg",
        embed: "https://www.youtube.com/embed/BYVZh5kqaFg",
        thumbnail: "https://img.youtube.com/vi/BYVZh5kqaFg/hqdefault.jpg"
    },
    {
        name: "Playing Card Machine Gun- Card Throwing Trick Shots",
        channel: "Mark Rober",
        link: "https://www.youtube.com/watch?v=GYCI58pMGuQ",
        embed: "https://www.youtube.com/embed/GYCI58pMGuQ",
        thumbnail: "https://img.youtube.com/vi/GYCI58pMGuQ/hqdefault.jpg"
    },
    {
        name: "Iron Lung: Final Trailer",
        channel: "Markiplier",
        link: "https://www.youtube.com/watch?v=IaEtA56pd_w",
        embed: "https://www.youtube.com/embed/IaEtA56pd_w",
        thumbnail: "https://img.youtube.com/vi/IaEtA56pd_w/hqdefault.jpg"
    },
    {
        name: "DON'T BLINK... THIS GAME IS WATCHING YOU | Vigil",
        channel: "Markiplier",
        link: "https://www.youtube.com/watch?v=EXatnflnJKU",
        embed: "https://www.youtube.com/embed/EXatnflnJKU",
        thumbnail: "https://img.youtube.com/vi/EXatnflnJKU/hqdefault.jpg"
    },
    {
        name: "Voices of the Void",
        channel: "Markiplier",
        link: "https://www.youtube.com/watch?v=uCmztwTstc4",
        embed: "https://www.youtube.com/embed/uCmztwTstc4",
        thumbnail: "https://img.youtube.com/vi/uCmztwTstc4/hqdefault.jpg"
    },
    {
        name: "TOO SMART FOR MY OWN GOOD | Blue Prince",
        channel: "Markiplier",
        link: "https://www.youtube.com/watch?v=Z1uVfyVu5Nk",
        embed: "https://www.youtube.com/embed/Z1uVfyVu5Nk",
        thumbnail: "https://img.youtube.com/vi/Z1uVfyVu5Nk/hqdefault.jpg"
    },
    {
        name: "MY NEW FAVORITE HORROR GAME | White Knuckle",
        channel: "Markiplier",
        link: "https://www.youtube.com/watch?v=hLfq42foTPo",
        embed: "https://www.youtube.com/embed/hLfq42foTPo",
        thumbnail: "https://img.youtube.com/vi/hLfq42foTPo/hqdefault.jpg"
    },
    {
        name: "DEAF KEV - Invincible | Glitch Hop | NCS - Copyright Free Music",
        channel: "NoCopyrightSounds",
        link: "https://www.youtube.com/watch?v=J2X5mJ3HDYE",
        embed: "https://www.youtube.com/embed/J2X5mJ3HDYE",
        thumbnail: "https://img.youtube.com/vi/J2X5mJ3HDYE/hqdefault.jpg"
    },
    {
        name: "Warriyo - Mortals (feat. Laura Brehm) | Future Trap | NCS - Copyright Free Music",
        channel: "NoCopyrightSounds",
        link: "https://www.youtube.com/watch?v=yJg-Y5byMMw",
        embed: "https://www.youtube.com/embed/yJg-Y5byMMw",
        thumbnail: "https://img.youtube.com/vi/yJg-Y5byMMw/hqdefault.jpg"
    },
    {
        name: "Cartoon, Jéja - Why We Lose (feat. Coleman Trapp) | DnB | NCS - Copyright Free Music",
        channel: "NoCopyrightSounds",
        link: "https://www.youtube.com/watch?v=zyXmsVwZqX4",
        embed: "https://www.youtube.com/embed/zyXmsVwZqX4",
        thumbnail: "https://img.youtube.com/vi/zyXmsVwZqX4/hqdefault.jpg"
    },
    {
        name: "Lost Sky - Fearless pt.II (feat. Chris Linton) | Trap | NCS - Copyright Free Music",
        channel: "NoCopyrightSounds",
        link: "https://www.youtube.com/watch?v=S19UcWdOA-I",
        embed: "https://www.youtube.com/embed/S19UcWdOA-I",
        thumbnail: "https://img.youtube.com/vi/S19UcWdOA-I/hqdefault.jpg"
    },
    {
        name: "Cartoon, Jéja - On & On (feat. Daniel Levi) | Electronic Pop | NCS - Copyright Free Music",
        channel: "NoCopyrightSounds",
        link: "https://www.youtube.com/watch?v=K4DyBUG242c",
        embed: "https://www.youtube.com/embed/K4DyBUG242c",
        thumbnail: "https://img.youtube.com/vi/K4DyBUG242c/hqdefault.jpg"
    }
];


// Shuffle videos randomly on page load
videos.sort(() => Math.random() - 0.5);

// Get all div containers
const containers = document.querySelectorAll(".video-container");

// Assign videos to divs
containers.forEach((container, index) => {
    if (videos[index]) {
        const video = videos[index];

        container.innerHTML = `
            <a href="${video.link}" target="_blank">
                <img src="${video.thumbnail}" alt="${video.name}">
            </a>
            <div class="info">
                <h3 style="font-size: 1rem;">${video.name}</h3>
                <p>${video.channel}</p>
            </div>
        `;
    }
});



