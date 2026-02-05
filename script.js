// A simple greeting that types itself out
document.addEventListener('DOMContentLoaded', () => {
    console.log("Terminal initialized... Security status: OK");
    alert("Welcome to my digital headquarters.");
});
document.getElementById('contactForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Message Encrypted and Sent. I will reach out shortly.");
});

// Dynamic Terminal Effect
const headerText = document.querySelector('header p');
if(headerText) {
    let text = headerText.innerText;
    headerText.innerText = '';
    let i = 0;
    function type() {
        if (i < text.length) {
            headerText.innerText += text.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    }
    type();
}