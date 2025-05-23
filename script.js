const cards = [
  {
    name: "Дурень",
    description: "Початок нової подорожі, наївність, спонтанність.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg"
  },
  {
    name: "Маг",
    description: "Сила волі, майстерність, ініціатива.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg"
  },
  {
    name: "Верховна Жриця",
    description: "Інтуїція, підсвідомість, таємниці.",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg"
  }
  // Додамо ще більше карт пізніше
];

document.getElementById("drawCard").addEventListener("click", () => {
  const card = cards[Math.floor(Math.random() * cards.length)];
  document.getElementById("cardImage").src = card.image;
  document.getElementById("cardName").textContent = card.name;
  document.getElementById("cardDescription").textContent = card.description;
  document.getElementById("cardDisplay").classList.remove("hidden");
});
