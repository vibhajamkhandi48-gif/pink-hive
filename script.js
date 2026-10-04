/* LOGIN */

function openLogin() {
    document.getElementById("loginModal").classList.add("active");
}

function closeLogin() {
    document.getElementById("loginModal").classList.remove("active");
}

function login() {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please enter your email and password.");
        return;
    }

    // Save login status
    localStorage.setItem("pinkHiveLoggedIn", "true");
    localStorage.setItem("pinkHiveUserEmail", email);

    alert("Welcome to Pink Hive 🐝💗");

    // Directly open dashboard after login
    window.location.href = "dashboard.html";
}

function signup() {
    alert("Signup page coming soon! 💗");
}


/* WORKSPACE */

function startWorkspace() {
    window.location.href = "dashboard.html";
}


/* FEATURES */

function showFeature(feature) {

    alert(
        feature +
        " is ready for your team! 💗"
    );

}


/* MEETING */

function startMeeting() {

    alert(
        "🎥 Hive Meeting\n\n" +
        "Camera and microphone permissions would be requested here."
    );

}


/* SCROLL */

function scrollToFeatures() {

    document
        .getElementById("features")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* AI CHAT */

function openChat() {

    document
        .getElementById("chatBox")
        .classList.add("active");

}

function closeChat() {

    document
        .getElementById("chatBox")
        .classList.remove("active");

}


function handleChat(event) {

    if (event.key === "Enter") {
        sendMessage();
    }

}


function sendMessage() {

    const input =
        document.getElementById("chatInput");

    const message =
        input.value.trim();

    if (!message) {
        return;
    }


    const messages =
        document.getElementById("chatMessages");


    /* USER MESSAGE */

    const userMessage =
        document.createElement("div");

    userMessage.className =
        "user-message";

    userMessage.innerText =
        message;

    messages.appendChild(userMessage);


    input.value = "";


    /* AI RESPONSE */

    setTimeout(() => {

        const botMessage =
            document.createElement("div");

        botMessage.className =
            "bot-message";

        botMessage.innerText =
            getAIResponse(message);

        messages.appendChild(botMessage);

        messages.scrollTop =
            messages.scrollHeight;

    }, 600);

}


function getAIResponse(message) {

    const text =
        message.toLowerCase();


    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey")
    ) {

        return "Heyyy! 🐝💗 How can I help you today?";

    }


    if (
        text.includes("meeting") ||
        text.includes("call")
    ) {

        return "You can start a Hive Meeting 🎥 from the Meetings section. Make sure your camera and microphone permissions are enabled.";

    }


    if (
        text.includes("task") ||
        text.includes("project")
    ) {

        return "Try breaking the project into smaller tasks 📋. Assign each task to a teammate and add a deadline.";

    }


    if (
        text.includes("problem") ||
        text.includes("stuck") ||
        text.includes("help")
    ) {

        return "Don't worry! 💗 Tell me what you're stuck on and I'll try to guide you step-by-step.";

    }


    if (
        text.includes("team")
    ) {

        return "You can invite your teammates to the Hive 👥 and keep your chats, meetings and tasks together.";

    }


    return "I'm HiveHelp 🤖💗. I can help with meetings, tasks, projects, teamwork and general questions. Tell me what's going on!";

}


/* CLOSE MODAL WHEN CLICKING OUTSIDE */

document
    .getElementById("loginModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {
            closeLogin();
        }

    });