document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");
});

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}
document.addEventListener("DOMContentLoaded", () => {
    const text = `Jesteśmy klubem piłkarskim z dzielnicy Zaspa,<br>
który z dumą rywalizuje w <u>3. TLO.</u><br>
Skupiamy się na rozwijaniu <u>pasji do futbolu</u>,<br>
a dzięki zaangażowaniu drużyny tworzymy wyjątkowe<br>
<u>sportowe emocje.</u>`;
    
    const typingElement = document.getElementById("typing-text");
    let index = 0;
    let isInsideTag = false; // Flaga do śledzenia, czy jesteśmy w obrębie znacznika HTML

    function typeText() {
        if (index < text.length) {
            // Jeśli napotkano początek znacznika "<", ustaw flagę
            if (text[index] === "<") {
                isInsideTag = true;
            }

            // Jeśli flaga jest ustawiona, przetwarzaj aż do zamknięcia znacznika ">"
            if (isInsideTag) {
                const endIndex = text.indexOf(">", index); // Znajdź koniec znacznika
                typingElement.innerHTML += text.slice(index, endIndex + 1); // Dodaj pełny znacznik
                index = endIndex + 1; // Przesuń wskaźnik za znacznik
                isInsideTag = false; // Zresetuj flagę
            } else {
                // Jeśli nie jesteśmy w znacznika HTML, dodaj normalny znak
                typingElement.innerHTML += text[index];
                index++;
            }

            setTimeout(typeText, 50); // Prędkość pisania: 50 ms
        }
    }

    typeText(); // Rozpocznij animację
});
