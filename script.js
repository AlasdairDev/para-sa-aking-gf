// Unlock function
function unlock() {
    const codeInput = document.getElementById('code-input').value;
    const lockScreen = document.getElementById('lock-screen');
    const timeline = document.getElementById('memory-timeline');
    const message = document.getElementById('lock-message');

    if (codeInput === '2306') {
        window.location.href = 'Memories.html';
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

// Skip if it's the envelope
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
        "First Time We Talked 💬": "Helluur! The guy my friend forced classic line that made me laugh. But I can say the first time we properly talked, it was amazing. We talked for four hours straight, not just about uGroup and what was said, but really getting to know each other. Sadly, it ended on a sour note.",
        "First Time We Met 🥹": "I was pretty nervous, shaking in my boots, but walking side by side with you at the botanical garden was great. Feeding off your energy was amazing. I was scared I was going to ruin the date because I thought I was boring, but I was so glad to see you happy when you jumped on top of your friend.",
        "Our First Kiss 💋": "On a cold winter night, after giving you food to enjoy, it just happened in the moment. I won't lie, it wasn't the most romantic place for a first kiss. But one thing I know for sure: I still hate that place. Not because of what happened, but because it made me sweat and overthink everything. My heart was racing, not just from the cold… but from you",
        "Our First Date 🍽️": "After church, you grilled me in front of your friend. I wanted to go somewhere else, but I chose to take us to a place you once said you hated. We ended up getting milkshakes. It turned out to be amazing Wimpy was empty, and it felt like the whole place belonged to just us. I'm honestly so grateful that you enjoyed it and had a great time… because I did too.",
        "Church Moments ⛪": "Sitting with you for the first time at church being right beside you as we praise and worship God filled my heart with warmth. Seeing the joy and happiness it brings you touches me deeply. It's a moment I'll never forget.",
        "Bible Study 📖": "Also, I'll never forget that winter afternoon when you decided we should go to DC Café. I'm not going to lie it was amazing. The way we sat there, reading and talking about the Word of God... it gave me chills. Literally.",
        "Sunset Walk 🌇": "On a late spring afternoon, after spending time by the river one of my favorite things to do I loved walking back just in time to catch the sunset. Watching you glow in the golden hour light, I was struck by how breathtakingly majestic you looked. It was like the sun itself paused to admire you too.",
        "Sitting by the River 🌊": "After your exams showed you flames or maybe after mine did you always had one thing to say: Lets go chill at the river. It never got old. Every single time felt like magic. Just us, listening to the stream, holding each other close. The peace it brings… the way it fills you up with quiet joy, like your whole day suddenly got turned up to a hundred. And of course shoutout to the cow tongue picture. A classic, forever.",
        "Your Birthday 🎂": "After a long three months, I finally got to see you again on your birthday, of all days. Just being able to spend that time with you felt like something out of a dream. Seeing you after so long… getting to hug you, kiss you, hold you close it all felt so real, so overwhelming in the most beautiful way. I missed you more than words can ever explain.",
        "Long Distance 💻✈️": "Yes, we're kilometers apart, and it truly hurt when I officially realized we're in a long-distance relationship. But even through all the hardships, you've made me feel deeply loved and cared for. And even when your back is against the wall, you're still here supporting me, holding me up, never letting me feel alone.",
        "Online Games 🎮": "After letting me win every single time, I can finally say you're the true gamer in this relationship. You always have the upper hand, and losing to you feels inevitable but maybe I'm just a hopelessly stubborn lover who's stuck on you..",
        "Movie Nights 🎬": "From the times we laugh and smile, to when we pause the movie because we're eating or someone's falling asleep—movie nights are our special ritual, the one thing I always look forward to. Just us, chilling together, watching a movie feels like the perfect blockbuster moment in my heart.",
        "Sleepovers 😴": "From our accidental sleepover to our digital one, watching you sleep peacefully and then waking up next to you always brings a smile to my face.",
        "First Celebrate Together 🎉": "As we lifted our voices to praise the Lord and declared the power of His name in the face of the enemy, my heart was overflowing. I was finally, truly happy to be at Celebrate34 with you. Thank you for making sure I could be there. You have no idea how much that meant to me. You're truly God-sent, and I'm so grateful for you.",
        "Lunch, Dinner, Pizza Dates 🍕": "For all the times I cooked for you, and you cooked for me. Before evening service, after evening service, On a quiet Tuesday, or while baking a pizza side by side... I'm just so happy we get to share a meal, together."
    };

    return descriptions[title] || "A moment we'll never forget 💖";
        }