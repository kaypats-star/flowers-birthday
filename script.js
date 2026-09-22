// Function to switch between screens smoothly
function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });
    
    const target = document.getElementById(screenId);
    if (target) {
        target.classList.add('active');
        // Auto-reset scrolling to the exact top
        if (target.classList.contains('scroll-view')) {
            target.scrollTop = 0;
        }
    }
}

// Sparkle Generation
function createStars() {
    const container = document.getElementById('stars-container');
    const starCount = 60;

    for (let i = 0; i < starCount; i++) {
        let star = document.createElement('div');
        star.classList.add('star');
        
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        let size = Math.random() * 3 + 1;
        let duration = Math.random() * 3 + 1.5;

        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDuration = `${duration}s`;

        container.appendChild(star);
    }
}

// Natural Birthday Balloon Generation (Now in Elegant Silvers)
function launchBalloons() {
    const container = document.getElementById('balloon-container');
    const colors = [
        'rgba(245, 245, 245, 0.85)', // Bright White-Silver
        'rgba(224, 224, 224, 0.85)', // Light Silver
        'rgba(192, 192, 192, 0.85)', // Standard Silver
        'rgba(169, 169, 169, 0.85)', // Dark Gray/Silver
        'rgba(211, 211, 211, 0.85)'  // Soft Gray
    ];
    
    // Release 25 celebratory silver balloons
    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            const balloon = document.createElement('div');
            const string = document.createElement('div');
            
            balloon.classList.add('balloon');
            string.classList.add('balloon-string');
            balloon.appendChild(string);
            
            const color = colors[Math.floor(Math.random() * colors.length)];
            balloon.style.backgroundColor = color;
            balloon.style.borderBottomColor = color;
            balloon.style.boxShadow = `inset -5px -5px 10px rgba(0,0,0,0.15), 0 5px 10px rgba(0,0,0,0.2)`;
            
            const randomSize = Math.random() * 20 + 40; 
            balloon.style.width = `${randomSize}px`;
            balloon.style.height = `${randomSize * 1.3}px`;
            
            balloon.style.left = `${Math.random() * 100}vw`;
            
            const duration = Math.random() * 6 + 7;
            balloon.style.animationDuration = `${duration}s`;
            
            container.appendChild(balloon);
            
            setTimeout(() => {
                balloon.remove();
            }, duration * 1000);
            
        }, i * 280); 
    }
}

// Play background audio and open the envelope
function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    envelope.classList.add('open');
    
    // Play Background Audio
    const music = document.getElementById('bg-music');
    if (music) {
        music.play().catch(error => {
            console.log("Browser safety blocked autoplay audio, wait for first click: ", error);
        });
    }

    // Launch silver balloons
    launchBalloons();
    
    // Change screens smoothly
    setTimeout(() => {
        showScreen('menu-screen');
    }, 1200);
}

// Generate the 23 Reasons
function populateReasons() {
    const grid = document.getElementById('reasons-grid');
    
    const reasonsList = [
        "You make me feel safe and included.",
        "How you remember the smallest details and memories.",
        "You always try to make everyone around you feel valued.",
        "The room you give me to be myself.",
        "How supportive you are to those you care about.",
        "The fact that you show up even when it feels impossible.",
        "The sense of calm you bring when my world gets chaotic.",
        "The way you aren't afraid to have the hard conversations.",
        "How handsome and well sculpted you are.",
        "The way you claim me infont of everyone unapologetically.",
        "You always find a way to make me laugh, even when I am upset.",
        "The way you hold me and kiss me.",
        "Your generous heart and how deeply you care for people.",
        "The confidence and determination you exude.",
        "Your patience and understanding when it comes to my emotions.",
        "How you challenge me to be the best version of myself.",
        "Your passion and how hard you work for what you want.",
        "You hear me, not just listen to me.",
        "Your willingness to try new things out.",
        "Your social and emotional intelligence.",
        "The love and grace you continue to show me.",
        "The care you put into your craft and yourself.",
        "Just being the most amazing person ever!"
    ];

    reasonsList.forEach((reason, index) => {
        let card = document.createElement('div');
        card.classList.add('reason-card');
        
        card.innerHTML = `
            <div class="reason-number">${index + 1}</div>
            <div class="reason-text">${reason}</div>
        `;
        grid.appendChild(card);
    });
}

window.onload = () => {
    createStars();
    populateReasons();
};