// Global variable to hold the trailer link (Defaults to Iron Man)
let currentTrailerUrl = "https://www.youtube.com/watch?v=8ugaeA-nMTc"; 

// =========================================================================
// CHARACTER DATABASE (Updated with Trailers & Real Names)
// =========================================================================
const characters = {
    'spiderman': {
        titleFirst: 'SPIDER-', titleSecond: 'MAN', realName: 'PETER PARKER',
        synopsis: 'Following the events of the Infinity War, Peter Parker must step up and take on new responsibilities. Equipped with the high-tech Iron Spider armor designed by Tony Stark, his capabilities are enhanced with mechanical spider-arms and advanced targeting systems.',
        image: '/static/spiderman_cutout.png', 
        poster: '/static/spiderman_thumbnail.png',
        history: 'Peter Parker gained his powers after being bitten by a radioactive spider on a high school field trip. \n\nLearning that "With great power comes great responsibility" after the tragic death of his Uncle Ben, he dedicated his life to fighting crime in New York City.',
        combat: 'STRENGTH: 8/10\nSPEED: 9/10\nDURABILITY: 7/10\nINTELLIGENCE: 9/10',
        abilities: '- Danger-warning Spider-Sense\n- Superhuman strength and agility\n- Wall-crawling\n- Web-shooters (Stark Tech Upgraded)',
        theme: 'theme-spiderman',
        trailer: 'https://www.youtube.com/watch?v=t06RUxPbp_c'
    },
    'captain_america': {
        titleFirst: 'CAPTAIN', titleSecond: 'AMERICA', realName: 'STEVE ROGERS',
        synopsis: 'Steve Rogers, the first Avenger, was frozen in ice for decades before waking up in the modern world. He serves as the moral compass and tactical leader of the Avengers. Captain America wields his virtually indestructible vibranium shield to defend freedom.',
        image: '/static/cap_cutout.png',
        poster: '/static/cap_thumbnail.png',
        history: 'Born in 1918, Steve Rogers was a scrawny fine arts student who desperately wanted to fight in WWII. Rejected due to health issues, he volunteered for Project Rebirth.\n\nThe serum transformed him into the pinnacle of human perfection.',
        combat: 'STRENGTH: 7/10\nSPEED: 7/10\nDURABILITY: 8/10\nINTELLIGENCE: 8/10',
        abilities: '- Master Martial Artist & Tactician\n- Enhanced human physiology\n- Indestructible Vibranium Shield',
        theme: 'theme-captain_america',
        trailer: 'https://www.youtube.com/watch?v=7SlILk2WMTI'
    },
    'iron_man': {
        titleFirst: 'IRON', titleSecond: 'MAN', realName: 'TONY STARK',
        synopsis: 'After a life-threatening incident, Tony Stark creates a mechanized suit of armor to save his own life and escape captivity. He continues to refine his technology, fighting foes in a high-tech suit equipped with advanced flight capabilities.',
        image: '/static/ironman_cutout.png',
        poster: '/static/ironman_thumbnail.png',
        history: 'Anthony Edward Stark inherited Stark Industries from his father, Howard Stark. After being captured by the Ten Rings terrorist group, he built the Mark I armor to escape.\n\nRealizing his weapons were falling into the wrong hands, he shut down weapon manufacturing.',
        combat: 'STRENGTH: 9/10\nSPEED: 10/10\nDURABILITY: 9/10\nINTELLIGENCE: 10/10',
        abilities: '- Genius-level intellect\n- Powered Exoskeleton\n- Repulsor Blasts & Unibeam',
        theme: 'theme-iron_man',
        trailer: 'https://www.youtube.com/watch?v=8ugaeA-nMTc'
    },
    'thor': {
        titleFirst: 'THOR', titleSecond: 'ODINSON', realName: 'GOD OF THUNDER',
        synopsis: 'Banished to Earth to learn a lesson in humility, Thor Odinson must prove himself worthy to wield his power. Stripped of his legendary hammer, Mjolnir, Thor learns what it truly means to be a hero.',
        image: '/static/thor_cutout.png', 
        poster: '/static/thor_thumbnail.png',
        history: 'Thor is the God of Thunder, son of Odin, the All-Father of Asgard. Originally arrogant and reckless, his banishment to Midgard (Earth) taught him humility.\n\nHe is a founding member of the Avengers.',
        combat: 'STRENGTH: 10/10\nSPEED: 8/10\nDURABILITY: 10/10\nINTELLIGENCE: 6/10',
        abilities: '- Immortality and Asgardian Physiology\n- Manipulation of Weather and Lightning',
        theme: 'theme-thor',
        trailer: 'https://www.youtube.com/watch?v=v7MGUNV8MxU'
    },
    'hulk': {
        titleFirst: 'THE', titleSecond: 'HULK', realName: 'BRUCE BANNER',
        synopsis: 'A brilliant scientist exposed to a massive dose of gamma radiation, Bruce Banner struggles to control the beast within. When provoked, he transforms into the Hulk—the angrier he gets, the stronger he becomes.',
        image: '/static/hulk_cutout.png',
        poster: '/static/hulk_thumbnail.png',
        history: 'While working on recreating the Super Soldier Serum for the US Military, Dr. Bruce Banner subjected himself to intense Gamma Radiation.\n\nThe experiment failed catastrophically.',
        combat: 'STRENGTH: 10/10\nSPEED: 8/10\nDURABILITY: 10/10\nINTELLIGENCE: 10/10',
        abilities: '- Virtually limitless physical strength\n- Regenerative Healing Factor',
        theme: 'theme-hulk',
        trailer: 'https://www.youtube.com/watch?v=xbqNb2PFKKA'
    },
    'scarlet_witch': {
        titleFirst: 'SCARLET', titleSecond: 'WITCH', realName: 'WANDA MAXIMOFF',
        synopsis: 'Starting out as an antagonist manipulated by Hydra, Wanda eventually joins the Avengers to fight for humanity. Her devastating powers allow her to alter reality, manipulate energy, cast hexes, and employ advanced telekinesis.',
        image: '/static/scarlet_witch_cutout.png',
        poster: '/static/scarlet_witch_thumbnail.png',
        history: 'Wanda and her twin brother Pietro volunteered for Hydra experiments using the Mind Stone. The stone unlocked Wanda\'s latent magical abilities.',
        combat: 'STRENGTH: 4/10\nSPEED: 5/10\nDURABILITY: 5/10\nMAGIC: 10/10',
        abilities: '- Chaos Magic manipulation\n- Telekinesis & Telepathy\n- Reality Warping',
        theme: 'theme-scarlet_witch',
        trailer: 'https://www.youtube.com/watch?v=aISqHAApXk0'
    },
    'black_widow': {
        titleFirst: 'BLACK', titleSecond: 'WIDOW', realName: 'NATASHA ROMANOFF',
        synopsis: 'Natasha Romanoff, formerly trained in the lethal "Red Room" program, is one of the world\'s deadliest spies. After defecting from the KGB and joining S.H.I.E.L.D., she uses her unmatched expertise in espionage to protect the world.',
        image: '/static/black_widow_cutout.png',
        poster: '/static/black_widow_thumbnail.png',
        history: 'Natasha was recruited as a child into the Red Room, where she was conditioned into a master assassin. Haunted by her past, she sought redemption through S.H.I.E.L.D.',
        combat: 'STRENGTH: 5/10\nSPEED: 8/10\nDURABILITY: 5/10\nINTELLIGENCE: 9/10',
        abilities: '- Expert Martial Artist & Marksman\n- Master Spy & Infiltrator',
        theme: 'theme-black_widow',
        trailer: 'https://www.youtube.com/watch?v=Fp9pNPdNwjI'
    },
    'dr_strange': {
        titleFirst: 'DOCTOR', titleSecond: 'STRANGE', realName: 'STEPHEN STRANGE',
        synopsis: 'After a horrific car accident ends his surgical career, Stephen Strange searches for a cure in the mystic arts. He discovers a world of hidden dimensions and ancient magic as the Sorcerer Supreme.',
        image: '/static/dr_strange_cutout.png',
        poster: '/static/dr_strange_thumbnail.png',
        history: 'Dr. Stephen Strange was a world-renowned but arrogant neurosurgeon. After losing the use of his hands, his desperation led him to Kamar-Taj.',
        combat: 'STRENGTH: 4/10\nSPEED: 6/10\nDURABILITY: 6/10\nMAGIC: 10/10',
        abilities: '- Master of the Mystic Arts\n- Reality & Dimension Manipulation',
        theme: 'theme-dr_strange',
        trailer: 'https://www.youtube.com/watch?v=h7gvFravm4Q'
    },
    'loki': {
        titleFirst: 'LOKI', titleSecond: 'LAUFEYSON', realName: 'GOD OF MISCHIEF',
        synopsis: 'Loki, the Prince of Lies, has walked the line between hero and villain for centuries. Seeking validation and power, he has caused chaos across the Nine Realms, yet often finds himself reluctantly aiding those he once opposed.',
        image: '/static/loki_cutout.png',
        poster: '/static/loki_thumbnail.png',
        history: 'Born a Frost Giant, Loki was adopted by Odin and raised alongside Thor. Feeling perpetually in his brother\'s shadow, he turned to mischief.',
        combat: 'STRENGTH: 6/10\nSPEED: 7/10\nDURABILITY: 7/10\nINTELLIGENCE: 9/10',
        abilities: '- Master Illusionist & Shapeshifter\n- Expert Combatant & Dagger Wielder',
        theme: 'theme-loki',
        trailer: 'https://www.youtube.com/watch?v=nW948Va-l10'
    },
    'hawkeye': {
        titleFirst: 'CLINT', titleSecond: 'BARTON', realName: 'HAWKEYE',
        synopsis: 'Clint Barton, known as Hawkeye, is a founding member of the Avengers with a unique set of skills. His unparalleled accuracy with a bow and arrow, combined with his tactical mind, makes him a valuable asset.',
        image: '/static/hawkeye_cutout.png',
        poster: '/static/hawkeye_thumbnail.png',
        history: 'Clint grew up in a traveling circus, honing his aim. He was recruited by S.H.I.E.L.D. after being sent to eliminate Natasha Romanoff.',
        combat: 'STRENGTH: 5/10\nSPEED: 7/10\nDURABILITY: 5/10\nINTELLIGENCE: 8/10',
        abilities: '- Master Marksman & Archer\n- Expert Tactical Combatant\n- Versatile Trick Arrows',
        theme: 'theme-hawkeye',
        trailer: 'https://www.youtube.com/watch?v=5VYb3B1ETlk'
    },
    'thanos': {
        titleFirst: 'MAD', titleSecond: 'TITAN', realName: 'THANOS',
        synopsis: 'Thanos is a ruthless conqueror who seeks to bring balance to the universe by wiping out half of all life. Driven by a distorted sense of purpose, he searches for the six Infinity Stones to fulfill his vision.',
        image: '/static/thanos_cutout.png',
        poster: '/static/thanos_thumbnail.png',
        history: 'Born on the dying planet Titan, Thanos witnessed his race\'s extinction due to overpopulation. He swore to prevent this fate from befalling the rest of the universe.',
        combat: 'STRENGTH: 10/10\nSPEED: 7/10\nDURABILITY: 10/10\nINTELLIGENCE: 9/10',
        abilities: '- Superhuman Strength & Durability\n- Master Tactician & Combatant\n- Mastery of the Infinity Gauntlet',
        theme: 'theme-thanos',
        trailer: 'https://www.youtube.com/watch?v=6ZfuNTqbHE8'
    }
};

// =========================================================================
// UI UPDATES & TAB SWITCHING
// =========================================================================
function selectCharacter(id) {
    const char = characters[id];
    if (!char) return;

    // 1. Update text elements
    if (document.getElementById('title-first')) document.getElementById('title-first').innerText = char.titleFirst;
    if (document.getElementById('title-second')) document.getElementById('title-second').innerText = char.titleSecond;
    if (document.getElementById('realName')) document.getElementById('realName').innerText = char.realName;
    if (document.getElementById('detail-synopsis')) document.getElementById('detail-synopsis').innerText = char.synopsis;
    if (document.getElementById('detail-history')) document.getElementById('detail-history').innerText = char.history;
    if (document.getElementById('detail-combat')) document.getElementById('detail-combat').innerText = char.combat;
    if (document.getElementById('detail-abilities')) document.getElementById('detail-abilities').innerText = char.abilities;
    if (document.getElementById('detail-poster')) document.getElementById('detail-poster').src = char.poster;
    
    // 2. Update Cinematic Background & Trailer
    currentTrailerUrl = char.trailer; 
    const cinematicBg = document.getElementById('cinematic-bg');
    if (cinematicBg) cinematicBg.style.backgroundImage = `url('${char.image}')`;

    // 3. Update older image elements (Safeguarded in case they still exist in other tabs)
    const featureImg = document.getElementById('feature-image');
    const centerImg = document.getElementById('center-image');
    
    if(featureImg) { featureImg.style.opacity = 0; featureImg.style.transform = 'scale(0.95)'; }
    if(centerImg) { centerImg.style.opacity = 0; centerImg.style.transform = 'scale(0.95)'; }

    setTimeout(() => {
        if(featureImg) { featureImg.src = char.poster; featureImg.style.opacity = 1; featureImg.style.transform = 'scale(1)'; }
        if(centerImg) { centerImg.src = char.image; centerImg.style.opacity = 1; centerImg.style.transform = 'scale(1)'; }
    }, 300);

    // 4. Update the Page Theme
    document.body.className = char.theme;

    // 5. Update Sidebar Active State
    document.querySelectorAll('.thumb-item').forEach(t => t.classList.remove('active'));
    document.getElementById('thumb-' + id).classList.add('active');

    // 6. Force switch back to Portada tab when a new character is clicked
    if(document.getElementById('v-nav-portada')) document.getElementById('v-nav-portada').click();
    if(document.getElementById('master-portada')) document.getElementById('master-portada').scrollTo(0, 0); 
}

function switchRightTab(event, masterId) {
    document.querySelectorAll('.v-nav-item').forEach(item => item.classList.remove('active-v-nav'));
    event.currentTarget.classList.add('active-v-nav');

    document.querySelectorAll('.master-tab').forEach(tab => tab.classList.remove('active-master'));
    const targetTab = document.getElementById('master-' + masterId);
    if (targetTab) targetTab.classList.add('active-master');
}

function toggleMusic() {
    const audio = document.getElementById('theme-song');
    const btn = document.getElementById('music-btn');
    if (!audio || !btn) return;

    if (audio.paused) {
        audio.play(); 
        btn.innerText = "🔊 PAUSE THEME"; 
        btn.classList.add("playing");
    } else {
        audio.pause(); 
        btn.innerText = "🎵 PLAY THEME"; 
        btn.classList.remove("playing");
    }
}

// =========================================================================
// TRAILER LOGIC
// =========================================================================
document.addEventListener("DOMContentLoaded", () => {
    const playTrailerBtn = document.getElementById('playTrailerBtn');
    if (playTrailerBtn) {
        playTrailerBtn.addEventListener('click', () => {
            if (currentTrailerUrl && currentTrailerUrl !== "") {
                window.open(currentTrailerUrl, '_blank');
            } else {
                alert("Trailer coming soon for this character!");
            }
        });
    }
});

// =========================================================================
// CLOUD CART LOGIC (Supabase + LocalStorage Fallback)
// =========================================================================
let cart = []; 

document.addEventListener("DOMContentLoaded", async () => {
    await fetchCloudCart();
    checkLoginStatus();
});

async function fetchCloudCart() {
    const token = localStorage.getItem('token');
    if (!token) {
        cart = JSON.parse(localStorage.getItem('marvelCart')) || [];
        updateCartCountDisplay();
        return;
    }

    try {
        const response = await fetch('/api/cart', {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token }
        });

        if (response.ok) {
            const dbCart = await response.json();
            cart = dbCart.map(item => ({ name: item.item_name, price: item.item_price }));
            updateCartCountDisplay();
        }
    } catch (err) {
        console.error("Critical issue syncing state with Cloud Storage database:", err);
    }
}

async function addToCart(itemName, itemPrice, event) {
    const token = localStorage.getItem('token');
    
    cart.push({ name: itemName, price: itemPrice });
    updateCartCountDisplay();

    const buttonElement = event.target;
    const originalLabel = buttonElement.innerText;
    buttonElement.innerText = "ADDED ✓";
    buttonElement.style.borderColor = "#39ff14"; 
    buttonElement.style.color = "#39ff14";
    
    setTimeout(() => {
        buttonElement.innerText = originalLabel;
        buttonElement.style.borderColor = "rgba(255, 255, 255, 0.5)";
        buttonElement.style.color = "white";
    }, 1500);

    if (token) {
        await fetch('/api/cart', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token 
            },
            body: JSON.stringify({ name: itemName, price: itemPrice })
        });
    } else {
        localStorage.setItem('marvelCart', JSON.stringify(cart));
    }
}

async function clearCart() {
    const token = localStorage.getItem('token');
    cart = [];
    updateCartCountDisplay();
    renderCartViewModal();

    if (token) {
        await fetch('/api/cart', {
            method: 'DELETE',
            headers: { 'Authorization': 'Bearer ' + token }
        });
    } else {
        localStorage.removeItem('marvelCart');
    }
}

function updateCartCountDisplay() {
    const countBadge = document.getElementById('cart-count');
    if (countBadge) countBadge.innerText = cart.length;
}

function toggleCartModal(show) {
    const modal = document.getElementById('cart-modal');
    if (modal) {
        modal.style.display = show ? 'flex' : 'none';
        if (show) renderCartViewModal();
    }
}

function renderCartViewModal() {
    const container = document.getElementById('cart-items-container');
    const totalEl = document.getElementById('cart-total-price');
    
    if (!container || !totalEl) return;
    
    container.innerHTML = ''; 
    let totalAmount = 0;

    if (cart.length === 0) {
        container.innerHTML = '<p style="color: #a0aabf; font-style: italic;">Your armory is currently empty. Visit the shop to add gear.</p>';
    } else {
        cart.forEach(item => {
            totalAmount += item.price;
            container.innerHTML += `
                <div class="cart-item-row" style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                    <span class="cart-item-name">${item.name}</span>
                    <span class="cart-item-price">₹${item.price}</span>
                </div>
            `;
        });
        
        container.innerHTML += `
            <button onclick="clearCart()" style="background: transparent; color: #ff4d4d; border: none; cursor: pointer; padding: 8px 0; margin-top: 8px; font-weight: bold; font-family: 'Oswald', sans-serif;">Empty Cart</button>
        `;
    }
    
    totalEl.innerText = '₹' + totalAmount;
}

function checkoutCart() {
    if (cart.length === 0) {
        alert("Your cart is empty! Go add some gear first.");
        return;
    }
    let totalAmount = cart.reduce((sum, item) => sum + item.price, 0);
    toggleCartModal(false);
    initiatePayment(totalAmount);
}

// =====================================
// PHONEPE PAYMENT LOGIC
// =====================================
async function initiatePayment(amount) {
    try {
        const response = await fetch('/create-order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: amount })
        });
        
        const data = await response.json();

        if (data.url) {
            window.location.href = data.url; 
        } else {
            alert("Error creating order: " + (data.error || "Unknown error"));
        }
    } catch (err) {
        alert("Could not connect to PhonePe.");
        console.error(err);
    }
}

// =====================================
// LOGIN CHECK
// =====================================
async function checkLoginStatus() {
    const token = localStorage.getItem('token');
    const authBtn = document.getElementById('auth-btn');

    if (token && authBtn) {
        authBtn.href = "#"; 
        authBtn.innerText = "MY ACCOUNT"; 

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

        authBtn.onclick = function(e) {
            e.preventDefault();
            if(confirm("Would you like to log out?")) {
                localStorage.removeItem('token'); 
                window.location.reload(); 
            }
        };
    }
}