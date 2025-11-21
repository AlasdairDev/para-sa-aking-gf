// Unlock function
function unlock() {
    const codeInput = document.getElementById('code-input').value;
    const lockScreen = document.getElementById('lock-screen');
    const timeline = document.getElementById('memory-timeline');
    const message = document.getElementById('lock-message');

    // ✅ Set specifically to 1120
    if (codeInput === '1120') { 
        lockScreen.classList.remove('active');
        timeline.classList.add('active');
    } else {
        message.textContent = 'Wrong code 😢 Try again.';
    }
}

// Show letter
function showLetter() {
    document.getElementById('memory-timeline').classList.remove('active');
    document.getElementById('love-letter').classList.add('active');
}

// Close modal
function closeModal() {
    document.getElementById('memory-modal').style.display = 'none';
}

// Memory click listeners
const memories = document.querySelectorAll('.memory');
const modal = document.getElementById('memory-modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-description');

memories.forEach(memory => {
    memory.addEventListener('click', () => {

        // Skip if it's the envelope button
        if (memory.querySelector('button')) return;

        const title = memory.textContent.trim();
        const description = getMemoryDescription(title);
        modalTitle.textContent = title;
        modalDesc.textContent = description;
        modal.style.display = 'flex';
    });
});

function getMemoryDescription(title) {
    const descriptions = {
        "First Time We Talked 💬": "Do you remember how it started? Just random chats that turned into hours of conversation. I knew right then that you were someone I wanted to keep talking to everyday.",
        
        "Late Night Discord Calls 🎧": "From talking about random nonsense to falling asleep on call. Even if we aren't physically together, hearing your breathing on the other line makes me feel safe. These calls are my lifeline.",
        
        "That Awkward First Gig 🎸": "The music was loud, the crowd was chaotic, and we were both so shy! Haha. But honestly? That was the moment I knew. Amidst all the noise and distortion, seeing you there made everything feel calm.",
        
        "First \"I Love You\" 🥺": "My heart was racing when those words finally came out. It wasn't just a phrase; it was my promise to you. Since that day, saying 'I love you' has been my favorite routine.",
        
        "Valorant Duos 🎮": "Whether we win, lose, or ikaw na naman ang bottom frag (okay lang, buhat naman kita 😉), playing with you is always the highlight of my day. You're my favorite teammate—in game and in real life.",
        
        "Shared Playlists 🎵": "From Shoegaze tracks to love songs. Sharing music with you feels like sharing a piece of my soul. Every song on our playlist reminds me of you now.",
        
        "LDR Movie Nights 🎬": "Thank God for Discord screen share. Counting down '3, 2, 1, Play!' and reacting to scenes together makes the distance feel a little smaller. I love our virtual movie dates.",
        
        "My Pahinga 🤍": "College is stressful, coding is tiring, and life gets loud... but you? You are my quiet place. My rest. My pahinga. Thank you for being the peace I come home to every single day.",
        
        "1 Year & Counting ♾️": "365 days down, a lifetime to go. This is just the intro track of our album, love. I'm so excited for everything else we're going to do together. Happy 1st Anniversary!"
    };

    return descriptions[title] || "A moment we'll never forget 💖";
}
