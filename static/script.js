// Database of all character information (All using exact .png filenames)
const characters = {
    'thor': {
        name: 'THOR ODINSON',
        background: 'The Asgardian God of Thunder, wielding the enchanted hammer Mjolnir (and later Stormbreaker). He possesses immense superhuman strength, durability, and the ability to summon lightning.',
        affiliation: 'Avengers, Asgardians',
        image: '/static/thor_thumbnail.png', 
        theme: 'theme-thor'
    },
    'captain_america': {
        name: 'STEVE ROGERS',
        background: 'A frail World War II volunteer who was enhanced to the peak of human physical perfection by the Super Soldier Serum. He wields a vibranium shield.',
        affiliation: 'Avengers',
        image: '/static/cap_thumbnail.png',
        theme: 'theme-captain_america'
    },
    'iron_man': {
        name: 'TONY STARK',
        background: 'Genius, Billionaire, Playboy, Philanthropist. He fights foes in a high-tech suit of armor of his own design equipped with advanced weaponry.',
        affiliation: 'Avengers',
        image: '/static/ironman_thumbnail.png',
        theme: 'theme-iron_man'
    },
    'hulk': {
        name: 'BRUCE BANNER',
        background: 'A brilliant scientist who, after surviving a massive dose of gamma radiation, transforms into a giant, green, rage-fueled behemoth. The angrier he gets, the stronger he becomes.',
        affiliation: 'Avengers',
        image: '/static/hulk_thumbnail.png',
        theme: 'theme-hulk'
    },
    'spiderman': {
        name: 'PETER PARKER',
        background: 'A teenager from Queens who was bitten by a radioactive spider. He gained superhuman strength, agility, the ability to cling to walls, and a precognitive "spider-sense".',
        affiliation: 'Avengers',
        image: '/static/spiderman_thumbnail.png',
        theme: 'theme-spiderman'
    },
    'scarlet_witch': {
        name: 'WANDA MAXIMOFF',
        background: 'A tremendously powerful being capable of harnessing Chaos Magic. Her abilities allow her to alter reality, manipulate energy, and employ advanced telekinesis.',
        affiliation: 'Avengers',
        image: '/static/scarlet_witch_thumbnail.png',
        theme: 'theme-scarlet_witch'
    },
    'black_widow': {
    name: 'NATASHA ROMANOFF',
    titleFirst: 'BLACK',
    titleSecond: 'WIDOW',
    background: 'Natasha Romanoff is a master spy and assassin.',
    synopsis: 'Former KGB operative turned Avenger and one of Earths greatest spies.',
    actor: 'Scarlett Johansson',
    affiliation: 'Avengers, SHIELD',
    trailer: 'https://youtu.be/ybji16u608U?si=QgB1srp68OorlfCs',
    image: '/static/black_widow_cutout.png',
    poster: '/static/black_widow_thumbnail.png',
    history: 'Raised in the Red Room and later joined SHIELD and the Avengers.',
    combat: 'STRENGTH: 6/10\nSPEED: 8/10\nDURABILITY: 7/10\nINTELLIGENCE: 9/10',
    abilities: '- Master Spy\n- Martial Arts\n- Elite Marksman\n- Tactical Combat',
    theme: 'theme-black_widow'
},

'doctor_strange': {
    name: 'STEPHEN STRANGE',
    titleFirst: 'DOCTOR',
    titleSecond: 'STRANGE',
    background: 'Sorcerer Supreme and protector of reality.',
    synopsis: 'A brilliant surgeon who became a master of the mystic arts.',
    actor: 'Benedict Cumberbatch',
    affiliation: 'Masters of the Mystic Arts',
    trailer: 'https://youtu.be/ADb1WHPhYTE?si=FoUxDQkZkUJ---NS',
    image: '/static/doctor_strange_cutout.png',
    poster: '/static/doctor_strange_thumbnail.png',
    history: 'Trained by the Ancient One and became Earths greatest sorcerer.',
    combat: 'MAGIC: 10/10\nINTELLIGENCE: 9/10',
    abilities: '- Time Manipulation\n- Portals\n- Astral Projection\n- Reality Magic',
    theme: 'theme-doctor_strange'
},

'thanos': {
    name: 'THANOS',
    titleFirst: 'MAD',
    titleSecond: 'TITAN',
    background: 'The universe’s most feared conqueror.',
    synopsis: 'Collected all Infinity Stones and wiped out half of life.',
    actor: 'Josh Brolin',
    affiliation: 'Mad Titan',
    trailer: 'https://www.youtube.com/embed/QwievZ1Tx-8',
    image: '/static/thanos_cutout.png',
    poster: '/static/thanos_thumbnail.png',
    history: 'Born on Titan and obsessed with balancing the universe.',
    combat: 'STRENGTH: 10/10\nDURABILITY: 10/10',
    abilities: '- Infinity Gauntlet\n- Cosmic Power\n- Master Strategist',
    theme: 'theme-thanos'
},

'hawkeye': {
    name: 'CLINT BARTON',
    titleFirst: 'HAWK',
    titleSecond: 'EYE',
    background: 'Master archer and Avenger.',
    synopsis: 'A SHIELD agent with unmatched accuracy.',
    actor: 'Jeremy Renner',
    affiliation: 'Avengers, SHIELD',
    trailer: 'https://www.youtube.com/embed/5VYb3B1ETlk',
    image: '/static/hawkeye_cutout.png',
    poster: '/static/hawkeye_thumbnail.png',
    history: 'One of SHIELDs top operatives and a founding Avenger.',
    combat: 'ACCURACY: 10/10\nSPEED: 8/10',
    abilities: '- Expert Archer\n- Swordsman\n- Tactical Combat',
    theme: 'theme-hawkeye'
},

'loki': {
    name: 'LOKI',
    titleFirst: 'LOKI',
    titleSecond: 'ODINSON',
    background: 'God of Mischief.',
    synopsis: 'Master illusionist and adopted son of Odin.',
    actor: 'Tom Hiddleston',
    affiliation: 'Asgardians',
    trailer: 'https://www.youtube.com/embed/nW948Va-l10',
    image: '/static/loki_cutout.png',
    poster: '/static/loki_thumbnail.png',
    history: 'Raised in Asgard but born a Frost Giant.',
    combat: 'MAGIC: 9/10\nINTELLIGENCE: 9/10',
    abilities: '- Illusions\n- Shape Shifting\n- Teleportation\n- Sorcery',
    theme: 'theme-loki'
}
};

function selectCharacter(id) {
    const char = characters[id];
    
    if (!char) {
        console.error("Character data missing for: " + id);
        return; 
    }

    // Update HTML with character data
    document.getElementById('detail-name').innerText = char.name;
    document.getElementById('detail-bg').innerText = char.background;
    document.getElementById('detail-group').innerText = char.affiliation;
    document.getElementById('detail-image').src = char.image;

    // Update CSS Theme color
    document.body.className = ''; 
    document.body.classList.add(char.theme); 

    // Swap views
    document.getElementById('carousel-view').classList.add('hidden');
    document.getElementById('detail-view').classList.remove('hidden');
}

function goBack() {
    // Swap the views back
    document.getElementById('detail-view').classList.add('hidden');
    document.getElementById('carousel-view').classList.remove('hidden');
    
    // Clear theme
    document.body.className = ''; 
}
function toggleModal(show) {
    const modal = document.getElementById('auth-modal');
    modal.style.display = show ? 'flex' : 'none';
}

// Attach this to your button in your navbar
// <button onclick="toggleModal(true)">SIGN IN</button>

async function initiatePayment(amount) {
    // 1. Get Order ID from your Flask backend
    const response = await fetch('/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: amount })
    });
    const order = await response.json();

    // 2. Configure Razorpay options
    const options = {
        "key": "YOUR_RAZORPAY_KEY_ID",
        "amount": order.amount,
        "currency": "INR",
        "order_id": order.id,
        "handler": function (response) {
            alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
            // Redirect or update UI here
        }
    };
    const rzp = new Razorpay(options);
    rzp.open();
}
async function initiatePayment(amount) {
    // 1. Get Order ID from your Flask backend
    const response = await fetch('/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: amount })
    });
    const order = await response.json();

    // 2. Configure Razorpay options
    const options = {
        "key": "YOUR_RAZORPAY_KEY_ID",
        "amount": order.amount,
        "currency": "INR",
        "order_id": order.id,
        "handler": function (response) {
            alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
            // Redirect or update UI here
        }
    };
    const rzp = new Razorpay(options);
    rzp.open();
}