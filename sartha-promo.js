const promos = [
  {
    text: "🎓 SARTHA Counselling – Personal Mentor",
    btn: "Apply",
    link: "https://wa.me/91XXXXXXXXXX"
  },
  {
    text: "🔥 NEET 2026 Counselling Started",
    btn: "Join",
    link: "https://wa.me/91XXXXXXXXXX"
  }
];

let ad = promos[Math.floor(Math.random() * promos.length)];

document.getElementById("sarthaAdContainer").innerHTML = `
  <div class="sartha-bar">
    <div class="sartha-text">${ad.text}</div>
    <a href="${ad.link}" class="sartha-btn">${ad.btn}</a>
  </div>
`;
