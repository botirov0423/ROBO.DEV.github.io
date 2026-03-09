// --- 1. Internationalization (i18n) System ---
const translations = {
    en: {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.projects": "Projects",
        "nav.skills": "Skills",
        "nav.contact": "Contact",
        "hero.greeting": "Greetings, I am",
        "hero.title": "Robotics & Software Developer",
        "hero.subtitle": "Robotics Instructor specializing in ESP32, Arduino, and EV3 systems. Bridging the gap between engineering and education.",
        "hero.cta_projects": "View Projects",
        "hero.cta_cv": "Download CV",
        "about.title": "Who I Am",
        "about.heading": "Dostonbek Botirov",
        "about.description": "I am a Robotics Instructor and Computer Engineering student with a deep passion for hardware-software integration. I specialize in C++, embedded systems (Arduino, ESP32), and LEGO robotics (EV3). Currently pursuing my Master's Degree while teaching the next generation of engineers.",
        "about.projects_count": "Robotic Systems",
        "about.years_exp": "Academic Years",
        "projects.title": "Technical Portfolio",
        "projects.subtitle": "Engineering & Development",
        "projects.filter_all": "All",
        "projects.filter_robotics": "Robotics",
        "projects.filter_web": "Software",
        "projects.label_robotics": "Robotic Systems",
        "projects.label_web": "Software Dev",
        "projects.label_mobile": "Embedded IoT",
        "experience.title": "Career & Education",
        "experience.subtitle": "My Professional Journey",
        "experience.job1_title": "Robotics Instructor",
        "experience.job1_company": "Creative School named after Muhammad Rizo Ogahiy",
        "experience.job1_desc": "Teaching Robotics (EV3, Arduino, ESP32) and 3D printing. guiding students in building smart devices and competitive robotic systems.",
        "experience.job2_title": "Master's in Computer Engineering",
        "experience.job2_company": "Urgench State University",
        "experience.job2_desc": "Currently pursuing advanced studies in computer systems and engineering at USU.",
        "experience.job3_title": "Bachelor's in Computer Engineering",
        "experience.job3_company": "TUIT Urgench Branch",
        "experience.job3_desc": "Graduated with honors, focusing on computer systems, networks, and automated information processing.",
        "skills.title": "Technical Arsenal",


        "skills.description": "My toolkit for solving complex problems across different domains of technology.",
        "contact.title": "Start a Project",
        "contact.subtitle": "Have an idea? Let's build it together.",
        "contact.name": "Name",
        "contact.email": "Email",
        "contact.message": "Your Message",
    },
    uz: {
        "nav.home": "Bosh Sahifa",
        "nav.about": "Men Haqimda",
        "nav.projects": "Loyihalar",
        "nav.skills": "Ko'nikmalar",
        "nav.contact": "Aloqa",
        "hero.greeting": "Salom, men",
        "hero.title": "Robototexnika va Dasturiy Ta'minot Injeniri",
        "hero.subtitle": "ESP32, Arduino va EV3 tizimlari bo'yicha Robototexnika o'qituvchisi. Muhandislik va ta'lim o'rtasidagi ko'prikni quraman.",
        "hero.cta_projects": "Loyihalarni Ko'rish",
        "hero.cta_cv": "CV Yuklash",
        "about.title": "Men haqimda",
        "about.heading": "Dostonbek Botirov",
        "about.description": "Men Robototexnika o'qituvchisi va Kompyuter Injiniringi yo'nalishi magistrantiman. C++, embedded tizimlar (Arduino, ESP32) va LEGO robototexnika (EV3) bo'yicha ixtisoslashganman. Kelajak muhandislariga dars berish bilan birga o'z ustimda ishlayman.",
        "about.projects_count": "Robotik Tizimlar",
        "about.years_exp": "O'quv Yillari",
        "projects.title": "Texnik Portfolio",
        "projects.subtitle": "Muhandislik va Ishlanmalar",
        "projects.filter_all": "Hammasi",
        "projects.filter_robotics": "Robototexnika",
        "projects.filter_web": "Dasturiy Ta'minot",
        "projects.label_robotics": "Robotik Tizimlar",
        "projects.label_web": "Dasturlash",
        "projects.label_mobile": "Embedded IoT",
        "experience.title": "Karyera va Ta'lim",
        "experience.subtitle": "Mening Professional Yo'lim",
        "experience.job1_title": "Robototexnika O'qituvchisi",
        "experience.job1_company": "Muhammad Rizo Ogahiy nomidagi ijod maktabi",
        "experience.job1_desc": "Robototexnika (EV3, Arduino, ESP32) va 3D bosib chiqarishdan dars berish, o'quvchilarga aqlli qurilmalar yaratishda rahbarlik qilish.",
        "experience.job2_title": "Kompyuter Injiniringi (Magistratura)",
        "experience.job2_company": "Urganch Davlat Universiteti",
        "experience.job2_desc": "Hozirgi vaqtda UrDUda kompyuter tizimlari va muhandislik bo'yicha magistraturada tahsil olmoqdaman.",
        "experience.job3_title": "Kompyuter Injiniringi (Bakalavr)",
        "experience.job3_company": "TATU Urganch Filiali",
        "experience.job3_desc": "Kompyuter tizimlari, tarmoqlar va ma'lumotlarni avtomatlashtirilgan qayta ishlash bo'yicha bakalavr bosqichini tamomlaganman.",
        "skills.title": "Texnik Qurol-yarog'",
        "skills.description": "Muammolarni hal qilish uchun foydalanadigan texnik vositalarim majmuasi.",
        "contact.title": "Loyiha Boshlash",
        "contact.subtitle": "G'oyangiz bormi? Birga quramiz.",
        "contact.name": "Ism",
        "contact.email": "Email",
        "contact.message": "Xabar matni",

    }
};

let currentLang = 'en';

function applyTranslations() {
    const elements = document.querySelectorAll('[data-t]');
    elements.forEach(el => {
        const key = el.getAttribute('data-t');
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });

    const placeholders = document.querySelectorAll('[data-t-placeholder]');
    placeholders.forEach(el => {
        const key = el.getAttribute('data-t-placeholder');
        if (translations[currentLang][key]) {
            el.placeholder = translations[currentLang][key];
        }
    });

    document.getElementById('lang-switch').textContent = currentLang === 'en' ? 'UZ' : 'EN';
}

document.getElementById('lang-switch').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'uz' : 'en';
    applyTranslations();
});

// --- 2. Background Animation (Canvas Particles) ---
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
    }
    draw() {
        ctx.fillStyle = 'rgba(0, 243, 255, 0.4)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw subtle grid
    ctx.strokeStyle = 'rgba(0, 243, 255, 0.03)';
    ctx.lineWidth = 1;
    for (let i = 0; i < canvas.width; i += 40) {
        ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, canvas.height); ctx.stroke();
    }
    for (let i = 0; i < canvas.height; i += 40) {
        ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(canvas.width, i); ctx.stroke();
    }

    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animate);
}
animate();

// --- 3. GSAP Animations ---
gsap.registerPlugin(ScrollTrigger);

// Hero Entrance
gsap.to('.slide-up-gsap', {
    y: 0,
    opacity: 1,
    duration: 1.2,
    stagger: 0.2,
    ease: "power4.out",
    delay: 0.5
});

// In-view reveals
document.querySelectorAll('.reveal-gsap').forEach(section => {
    gsap.to(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 85%",
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out"
    });
});

// Skill progress bars
document.querySelectorAll('.skill-progress').forEach(bar => {
    gsap.from(bar, {
        scrollTrigger: {
            trigger: bar,
            start: "top 95%",
        },
        scaleX: 0,
        duration: 1.5,
        ease: "expo.out"
    });
});

// --- 4. Logic & Widgets ---

// Mobile Menu
const menuBtn = document.getElementById('mobile-menu-btn');
const navLinksContainer = document.querySelector('.md\\:flex.space-x-8');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    menuOpen = !menuOpen;
    if (menuOpen) {
        navLinksContainer.classList.replace('hidden', 'flex');
        navLinksContainer.classList.add('flex-col', 'absolute', 'top-full', 'left-0', 'w-full', 'bg-black/90', 'p-6', 'space-y-4', 'space-x-0', 'backdrop-blur-xl');
        gsap.from(navLinksContainer.children, { x: -20, opacity: 0, stagger: 0.1 });
    } else {
        navLinksContainer.classList.replace('flex', 'hidden');
        navLinksContainer.classList.remove('flex-col', 'absolute', 'top-full', 'left-0', 'w-full', 'bg-black/90', 'p-6', 'space-y-4', 'space-x-0', 'backdrop-blur-xl');
    }
});

// Project Filtering
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');

        document.querySelectorAll('.project-card').forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                gsap.to(card, { opacity: 1, scale: 1, display: 'block', duration: 0.4 });
            } else {
                gsap.to(card, { opacity: 0, scale: 0.8, display: 'none', duration: 0.4 });
            }
        });
    });
});

// Telegram Widget Logic (Two-Way Chat)
const tgBtn = document.getElementById('tg-btn');
const tgCard = document.getElementById('tg-card');
const closeTg = document.getElementById('close-tg');
const sendTgBtn = document.getElementById('send-tg');
const tgMsgInput = document.getElementById('tg-msg');
const chatHistory = document.getElementById('chat-history');

const BOT_TOKEN = "7752944884:AAGDSnTWYei70WHhH8Ec57Vq6eNZFokZsdQ";
const CHAT_ID = "7626854595";
let lastUpdateId = 0;

// Toggle Chat
tgBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    tgCard.classList.toggle('hidden');
    if (!tgCard.classList.contains('hidden')) {
        gsap.from(tgCard, { y: 20, opacity: 0, duration: 0.4, ease: "back.out(1.7)" });
        tgMsgInput.focus();
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }
});

if (closeTg) closeTg.addEventListener('click', () => tgCard.classList.add('hidden'));
document.addEventListener('click', () => tgCard.classList.add('hidden'));
tgCard.addEventListener('click', (e) => e.stopPropagation());

// Helper to add message to UI
function addMessageToUI(text, type = 'received') {
    const msgDiv = document.createElement('div');
    if (type === 'sent') {
        // Sent messages: Purple glow
        msgDiv.className = 'bg-purple-600/20 border border-purple-500/30 p-3 rounded-xl rounded-tr-none text-xs text-purple-100 max-w-[85%] self-end ml-auto shadow-[0_0_15px_rgba(188,19,254,0.1)]';
    } else {
        // Received messages: Cyan glow
        msgDiv.className = 'bg-cyan-500/15 border border-cyan-500/30 p-3 rounded-xl rounded-tl-none text-xs text-cyan-50 max-w-[85%] self-start shadow-[0_0_15px_rgba(0,243,255,0.1)]';
    }
    msgDiv.textContent = text;
    chatHistory.appendChild(msgDiv);
    chatHistory.scrollTop = chatHistory.scrollHeight;
    gsap.from(msgDiv, { opacity: 0, x: type === 'sent' ? 10 : -10, duration: 0.3 });
}

// Send Message
sendTgBtn.addEventListener('click', () => {
    const msg = tgMsgInput.value.trim();
    if (!msg) return;

    tgMsgInput.value = "";
    addMessageToUI(msg, 'sent');

    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: `🌐 Web Chat:\n${msg}`
        })
    });
});

// Allow Enter to send
tgMsgInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendTgBtn.click();
    }
});

// Polling for replies (Short Polling)
async function checkForReplies() {
    try {
        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/getUpdates?offset=${lastUpdateId + 1}&timeout=30`);
        const data = await response.json();

        if (data.ok && data.result.length > 0) {
            data.result.forEach(update => {
                lastUpdateId = update.update_id;
                // Only process messages FROM the user (to display them on web)
                if (update.message && update.message.chat.id.toString() === CHAT_ID) {
                    // Check if it's not a message we just sent from the bot prefix
                    if (update.message.text && !update.message.text.startsWith('🌐 Web Chat:')) {
                        addMessageToUI(update.message.text, 'received');
                    }
                }
            });
        }
    } catch (err) {
        console.error("Polling error:", err);
    }
    setTimeout(checkForReplies, 2000); // Poll every 2 seconds
}

// Start polling
checkForReplies();

// Fetch Bot Name
async function fetchBotName() {
    try {
        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/getMe`);
        const data = await response.json();
        if (data.ok && data.result.first_name) {
            const botLabel = document.querySelector('#tg-card p.text-\\[10px\\]');
            if (botLabel) botLabel.textContent = `Connected to @${data.result.username || data.result.first_name}`;
        }
    } catch (err) { console.error("Error fetching bot info:", err); }
}
fetchBotName();

// Experience Card Hover Effects
document.querySelectorAll('#experience .glass').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, { borderColor: 'rgba(0, 243, 255, 0.4)', x: 10, duration: 0.3 });
    });
    card.addEventListener('mouseleave', () => {
        gsap.to(card, { borderColor: 'rgba(169, 14, 14, 0.05)', x: 0, duration: 0.3 });
    });
});

// --- 5. Custom Elastic Cursor (Jelly Effect) ---
const cursor = document.getElementById('custom-cursor');
const cursorGlow = document.getElementById('cursor-glow');

let mouseX = 0, mouseY = 0; // Mouse position
let pos = { x: 0, y: 0 };    // Current cursor position
let vel = { x: 0, y: 0 };    // Velocity
const speed = 0.15;          // Smoothing factor

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    if (cursor.style.opacity === "0") {
        gsap.set([cursor, cursorGlow], { opacity: 1 });
    }
});

function updateCursor() {
    // Distance to target
    const dx = mouseX - pos.x;
    const dy = mouseY - pos.y;
    
    // Update velocity and position (Elastic Lerp)
    vel.x += dx * speed;
    vel.y += dy * speed;
    vel.x *= 0.7; // Friction
    vel.y *= 0.7;
    
    pos.x += vel.x;
    pos.y += vel.y;

    // Calculate velocity magnitude for squash/stretch
    const velocity = Math.sqrt(vel.x * vel.x + vel.y * vel.y);
    const stretch = Math.min(velocity * 0.05, 1);
    const angle = Math.atan2(vel.y, vel.x) * 180 / Math.PI;

    // Apply transformations
    // Scale X increases with velocity, Scale Y decreases (Squash & Stretch)
    gsap.set(cursor, {
        x: pos.x,
        y: pos.y,
        xPercent: -50,
        yPercent: -50,
        rotation: angle,
        scaleX: 1 + stretch,
        scaleY: 1 - stretch * 0.5
    });

    gsap.set(cursorGlow, {
        x: pos.x,
        y: pos.y,
        xPercent: -50,
        yPercent: -50,
    });

    requestAnimationFrame(updateCursor);
}
updateCursor();

// Cursor Hover Effects (Interactive feel)
document.querySelectorAll('a, button, .stats-card, .project-card, .glass, label, input, textarea').forEach(el => {
    el.addEventListener('mouseenter', () => {
        gsap.to(cursor, { 
            width: 40, height: 40, 
            backgroundColor: 'rgba(0, 243, 255, 0.2)', 
            border: '2px solid rgba(0, 243, 255, 0.8)',
            mixBlendMode: 'normal', 
            duration: 0.3 
        });
        gsap.to(cursorGlow, { scale: 0.5, opacity: 0.4, duration: 0.3 });
    });
    el.addEventListener('mouseleave', () => {
        gsap.to(cursor, { 
            width: 12, height: 12, 
            backgroundColor: '#00f3ff', 
            border: '0px solid transparent',
            mixBlendMode: 'difference', 
            duration: 0.3 
        });
        gsap.to(cursorGlow, { scale: 1, opacity: 1, duration: 0.3 });
    });
});

// Initialize Lucide Icons
lucide.createIcons();
applyTranslations();
