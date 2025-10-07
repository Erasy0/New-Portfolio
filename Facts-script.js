const facts = [
  "I’m learning blender but I don't know where it will lead me 🎨",
  "I believe in discipline and growth 💪",
  "I enjoy working on creative projects 💡",
  "My goal is to become a great software developer 👨‍💻",
  "When I am busy with work I listen to movie/anime soundtracks 😂",
  "Favorite football team is Chelsea FC 💙💙 ",
  "My favorite projects to work on is designing Sport posters ⚽",
  "I love milk tarts 🥧",
  "I don't like my veggies bruh especially lettuce & cucumbers 🤮",
  "I love reading books especially sci-fi or Supernatural 📚",
  "Football Manager is life bruh 😋",
  "Best anime I have watched is Attack on Titan 🧱"
];

let index = 0;
const factElement = document.getElementById("Facts-txt");

function showFact() {
  factElement.style.opacity = 0; // fade out

  setTimeout(() => {
    factElement.textContent = facts[index];
    factElement.style.opacity = 1; // fade in
    index = (index + 1) % facts.length; // move to next fact
  }, 1000); // delay before showing next fact
}

// show the first fact and repeat every 4 seconds
showFact();
setInterval(showFact, 5000);