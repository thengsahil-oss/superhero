// Database of all character information (All using exact .png filenames)
const characters = {
    'spiderman': {
        titleFirst: 'IRON', titleSecond: 'SPIDER', 
        synopsis: 'Following the events of the Infinity War, Peter Parker must step up and take on new responsibilities. Equipped with the high-tech Iron Spider armor designed by Tony Stark, his capabilities are enhanced with mechanical spider-arms and advanced targeting systems.',
        image: '/static/spiderman_cutout.png', 
        poster: '/static/spiderman_thumbnail.png',
        history: 'Peter Parker gained his powers after being bitten by a radioactive spider on a high school field trip. \n\nLearning that "With great power comes great responsibility" after the tragic death of his Uncle Ben, he dedicated his life to fighting crime in New York City.',
        combat: 'STRENGTH: 8/10\nSPEED: 9/10\nDURABILITY: 7/10\nINTELLIGENCE: 9/10',
        abilities: '- Danger-warning Spider-Sense\n- Superhuman strength and agility\n- Wall-crawling\n- Web-shooters (Stark Tech Upgraded)',
        theme: 'theme-spiderman'
    },
    'captain_america': {
        titleFirst: 'CAPTAIN', titleSecond: 'AMERICA',
        synopsis: 'Steve Rogers, the first Avenger, was frozen in ice for decades before waking up in the modern world. He serves as the moral compass and tactical leader of the Avengers. Captain America wields his virtually indestructible vibranium shield to defend freedom.',
        image: '/static/cap_cutout.png',
        poster: '/static/cap_thumbnail.png',
        history: 'Born in 1918, Steve Rogers was a scrawny fine arts student who desperately wanted to fight in WWII. Rejected due to health issues, he volunteered for Project Rebirth.\n\nThe serum transformed him into the pinnacle of human perfection.',
        combat: 'STRENGTH: 7/10\nSPEED: 7/10\nDURABILITY: 8/10\nINTELLIGENCE: 8/10',
        abilities: '- Master Martial Artist & Tactician\n- Enhanced human physiology\n- Indestructible Vibranium Shield',
        theme: 'theme-captain_america'
    },
    'iron_man': {
        titleFirst: 'IRON', titleSecond: 'MAN',
        synopsis: 'After a life-threatening incident, Tony Stark creates a mechanized suit of armor to save his own life and escape captivity. He continues to refine his technology, fighting foes in a high-tech suit equipped with advanced flight capabilities.',
        image: '/static/ironman_cutout.png',
        poster: '/static/ironman_thumbnail.png',
        history: 'Anthony Edward Stark inherited Stark Industries from his father, Howard Stark. After being captured by the Ten Rings terrorist group, he built the Mark I armor to escape.\n\nRealizing his weapons were falling into the wrong hands, he shut down weapon manufacturing.',
        combat: 'STRENGTH: 9/10\nSPEED: 10/10\nDURABILITY: 9/10\nINTELLIGENCE: 10/10',
        abilities: '- Genius-level intellect\n- Powered Exoskeleton\n- Repulsor Blasts & Unibeam',
        theme: 'theme-iron_man'
    },
    'thor': {
        titleFirst: 'THOR', titleSecond: 'ODINSON',
        synopsis: 'Banished to Earth to learn a lesson in humility, Thor Odinson must prove himself worthy to wield his power. Stripped of his legendary hammer, Mjolnir, Thor learns what it truly means to be a hero.',
        image: '/static/thor_cutout.png', 
        poster: '/static/thor_thumbnail.png',
        history: 'Thor is the God of Thunder, son of Odin, the All-Father of Asgard. Originally arrogant and reckless, his banishment to Midgard (Earth) taught him humility.\n\nHe is a founding member of the Avengers.',
        combat: 'STRENGTH: 10/10\nSPEED: 8/10\nDURABILITY: 10/10\nINTELLIGENCE: 6/10',
        abilities: '- Immortality and Asgardian Physiology\n- Manipulation of Weather and Lightning',
        theme: 'theme-thor'
    },
    'hulk': {
        titleFirst: 'THE', titleSecond: 'HULK',
        synopsis: 'A brilliant scientist exposed to a massive dose of gamma radiation, Bruce Banner struggles to control the beast within. When provoked, he transforms into the Hulk—the angrier he gets, the stronger he becomes.',
        image: '/static/hulk_cutout.png',
        poster: '/static/hulk_thumbnail.png',
        history: 'While working on recreating the Super Soldier Serum for the US Military, Dr. Bruce Banner subjected himself to intense Gamma Radiation.\n\nThe experiment failed catastrophically.',
        combat: 'STRENGTH: 10/10\nSPEED: 8/10\nDURABILITY: 10/10\nINTELLIGENCE: 10/10',
        abilities: '- Virtually limitless physical strength\n- Regenerative Healing Factor',
        theme: 'theme-hulk'
    },
    'scarlet_witch': {
        titleFirst: 'SCARLET', titleSecond: 'WITCH',
        synopsis: 'Starting out as an antagonist manipulated by Hydra, Wanda eventually joins the Avengers to fight for humanity. Her devastating powers allow her to alter reality, manipulate energy, cast hexes, and employ advanced telekinesis.',
        image: '/static/scarlet_witch_cutout.png',
        poster: '/static/scarlet_witch_thumbnail.png',
        history: 'Wanda and her twin brother Pietro volunteered for Hydra experiments using the Mind Stone. The stone unlocked Wanda\'s latent magical abilities.',
        combat: 'STRENGTH: 4/10\nSPEED: 5/10\nDURABILITY: 5/10\nMAGIC: 10/10',
        abilities: '- Chaos Magic manipulation\n- Telekinesis & Telepathy\n- Reality Warping',
        theme: 'theme-scarlet_witch'
    },
    'black_widow': {
        titleFirst: 'BLACK', titleSecond: 'WIDOW',
        synopsis: 'Natasha Romanoff, formerly trained in the lethal "Red Room" program, is one of the world\'s deadliest spies. After defecting from the KGB and joining S.H.I.E.L.D., she uses her unmatched expertise in espionage to protect the world.',
        image: '/static/black_widow_cutout.png',
        poster: '/static/black_widow_thumbnail.png',
        history: 'Natasha was recruited as a child into the Red Room, where she was conditioned into a master assassin. Haunted by her past, she sought redemption through S.H.I.E.L.D.',
        combat: 'STRENGTH: 5/10\nSPEED: 8/10\nDURABILITY: 5/10\nINTELLIGENCE: 9/10',
        abilities: '- Expert Martial Artist & Marksman\n- Master Spy & Infiltrator',
        theme: 'theme-black_widow'
    },
    'dr_strange': {
        titleFirst: 'DOCTOR', titleSecond: 'STRANGE',
        synopsis: 'After a horrific car accident ends his surgical career, Stephen Strange searches for a cure in the mystic arts. He discovers a world of hidden dimensions and ancient magic as the Sorcerer Supreme.',
        image: '/static/dr_strange_cutout.png',
        poster: '/static/dr_strange_thumbnail.png',
        history: 'Dr. Stephen Strange was a world-renowned but arrogant neurosurgeon. After losing the use of his hands, his desperation led him to Kamar-Taj.',
        combat: 'STRENGTH: 4/10\nSPEED: 6/10\nDURABILITY: 6/10\nMAGIC: 10/10',
        abilities: '- Master of the Mystic Arts\n- Reality & Dimension Manipulation',
        theme: 'theme-dr_strange'
    },
    'loki': {
        titleFirst: 'LOKI', titleSecond: 'LAUFEYSON',
        synopsis: 'Loki, the Prince of Lies, has walked the line between hero and villain for centuries. Seeking validation and power, he has caused chaos across the Nine Realms, yet often finds himself reluctantly aiding those he once opposed.',
        image: '/static/loki_cutout.png',
        poster: '/static/loki_thumbnail.png',
        history: 'Born a Frost Giant, Loki was adopted by Odin and raised alongside Thor. Feeling perpetually in his brother\'s shadow, he turned to mischief.',
        combat: 'STRENGTH: 6/10\nSPEED: 7/10\nDURABILITY: 7/10\nINTELLIGENCE: 9/10',
        abilities: '- Master Illusionist & Shapeshifter\n- Expert Combatant & Dagger Wielder',
        theme: 'theme-loki'
    },
    'hawkeye': {
        titleFirst: 'CLINT', titleSecond: 'BARTON',
        synopsis: 'Clint Barton, known as Hawkeye, is a founding member of the Avengers with a unique set of skills. His unparalleled accuracy with a bow and arrow, combined with his tactical mind, makes him a valuable asset.',
        image: '/static/hawkeye_cutout.png',
        poster: '/static/hawkeye_thumbnail.png',
        history: 'Clint grew up in a traveling circus, honing his aim. He was recruited by S.H.I.E.L.D. after being sent to eliminate Natasha Romanoff.',
        combat: 'STRENGTH: 5/10\nSPEED: 7/10\nDURABILITY: 5/10\nINTELLIGENCE: 8/10',
        abilities: '- Master Marksman & Archer\n- Expert Tactical Combatant\n- Versatile Trick Arrows',
        theme: 'theme-hawkeye'
    },
    'thanos': {
        titleFirst: 'MAD', titleSecond: 'TITAN',
        synopsis: 'Thanos is a ruthless conqueror who seeks to bring balance to the universe by wiping out half of all life. Driven by a distorted sense of purpose, he searches for the six Infinity Stones to fulfill his vision.',
        image: '/static/thanos_cutout.png',
        poster: '/static/thanos_thumbnail.png',
        history: 'Born on the dying planet Titan, Thanos witnessed his race\'s extinction due to overpopulation. He swore to prevent this fate from befalling the rest of the universe.',
        combat: 'STRENGTH: 10/10\nSPEED: 7/10\nDURABILITY: 10/10\nINTELLIGENCE: 9/10',
        abilities: '- Superhuman Strength & Durability\n- Master Tactician & Combatant\n- Mastery of the Infinity Gauntlet',
        theme: 'theme-thanos'
    }
};

function selectCharacter(id) {
    const char = characters[id];
    if (!char) return;

    // 1. Update text fields across all tabs
    document.getElementById('title-first').innerText = char.titleFirst;
    document.getElementById('title-second').innerText = char.titleSecond;
    document.getElementById('detail-synopsis').innerText = char.synopsis;
    document.getElementById('detail-history').innerText = char.history;
    document.getElementById('detail-combat').innerText = char.combat;
    document.getElementById('detail-abilities').innerText = char.abilities;
    document.getElementById('detail-poster').src = char.poster;
    
    // 2. Animate and swap ALL three images on the long-scroll page
    const heroImg = document.getElementById('detail-image');
    const featureImg = document.getElementById('feature-image');
    const centerImg = document.getElementById('center-image');
    
    heroImg.style.opacity = 0; heroImg.style.transform = 'scale(0.95) translateX(20px)';
    featureImg.style.opacity = 0; featureImg.style.transform = 'scale(0.95)';
    centerImg.style.opacity = 0; centerImg.style.transform = 'scale(0.95)';

    setTimeout(() => {
        heroImg.src = char.image;
        featureImg.src = char.poster; // Using poster for the feature block
        centerImg.src = char.image;
        
        heroImg.style.opacity = 1; heroImg.style.transform = 'scale(1) translateX(0)';
        featureImg.style.opacity = 1; featureImg.style.transform = 'scale(1)';
        centerImg.style.opacity = 1; centerImg.style.transform = 'scale(1)';
    }, 300);

    // 3. Update the global theme colors
    document.body.className = char.theme;

    // 4. Update the active state in the left thumbnail sidebar
    document.querySelectorAll('.thumb-item').forEach(t => t.classList.remove('active'));
    document.getElementById('thumb-' + id).classList.add('active');

    // 5. Instantly jump back to the top of the Portada tab if they switched characters
    document.getElementById('v-nav-portada').click();
    document.getElementById('master-portada').scrollTo(0, 0); 
}

// Handles the Right-Sidebar clicks to show/hide the different Master pages
function switchRightTab(event, masterId) {
    document.querySelectorAll('.v-nav-item').forEach(item => item.classList.remove('active-v-nav'));
    event.currentTarget.classList.add('active-v-nav');

    document.querySelectorAll('.master-tab').forEach(tab => tab.classList.remove('active-master'));
    document.getElementById('master-' + masterId).classList.add('active-master');
}

// Handles the Music button
function toggleMusic() {
    const audio = document.getElementById('theme-song');
    const btn = document.getElementById('music-btn');
    if (audio.paused) {
        audio.play(); btn.innerText = "🔊 PAUSE THEME"; btn.classList.add("playing");
    } else {
        audio.pause(); btn.innerText = "🎵 PLAY THEME"; btn.classList.remove("playing");
    }
}

// Handle adding items to the cart
function addToCart(itemName) {
    alert(itemName + " has been added to your cart!");
    const btn = event.target;
    const originalText = btn.innerText;
    btn.innerText = "ADDED ✓";
    btn.style.borderColor = "#39ff14"; // Turn border green
    btn.style.color = "#39ff14";
    
    setTimeout(() => {
        btn.innerText = originalText;
        btn.style.borderColor = "rgba(255, 255, 255, 0.5)";
        btn.style.color = "white";
    }, 2000);
}

// Handle Razorpay Payment
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
        "key": "YOUR_RAZORPAY_KEY_ID", // Add your real Razorpay key here when ready!
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

// Check Login Status on Page Load
document.addEventListener("DOMContentLoaded", async function() {
    const token = localStorage.getItem('token');
    const authBtn = document.getElementById('auth-btn');

    if (token && authBtn) {
        // Change the button so it doesn't take them to the signup page anymore
        authBtn.href = "#"; 
        authBtn.innerText = "MY ACCOUNT"; 

        // Fetch the actual user's name from your database
        try {
            const response = await fetch('/profile', { 
                method: 'GET',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token 
                }
            });
            
            if (response.ok) {
                const userData = await response.json();
                if (userData.username) {
                    authBtn.innerText = "HI, " + userData.username.toUpperCase();
                }
            }
        } catch (error) {
            console.log("Could not fetch username, using default text.");
        }

        // Add Logout Functionality
        authBtn.onclick = function(e) {
            e.preventDefault();
            if(confirm("Would you like to log out?")) {
                localStorage.removeItem('token'); // Delete the token
                window.location.reload(); // Refresh to show "SIGN UP" again
            }
        };
    }
});