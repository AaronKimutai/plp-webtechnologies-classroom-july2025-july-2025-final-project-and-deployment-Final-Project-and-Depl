//  Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {

  //  Home button alert
  const homeButton = document.querySelector(".home button");
  if (homeButton) {
    homeButton.addEventListener("click", () => {
      alert("Redirecting to our collection!");
    });
  }

  //  Footer year update
  const footer = document.querySelector("footer p");
  if (footer) {
    const year = new Date().getFullYear();
    footer.textContent = `© ${year} Fashion Collection. All rights reserved.`;
  }

  //  Highlight current nav link
  const links = document.querySelectorAll("nav a");
  links.forEach(link => {
    if (link.href === window.location.href) {
      link.style.textDecoration = "underline";
    }
  });

  //  Product carousel
  const productCards = document.querySelectorAll(".product-card");
  let currentIndex = 0;

  if (productCards.length > 0) {
    productCards.forEach((card, i) => {
      if (i !== 0) card.style.display = "none";
    });

    function showNextCard() {
      productCards[currentIndex].style.opacity = 1;
      productCards[currentIndex].style.display = "none";
      currentIndex = (currentIndex + 1) % productCards.length;
      const nextCard = productCards[currentIndex];
      nextCard.style.display = "block";
      nextCard.style.opacity = 0;

      let opacity = 0;
      const fadeIn = setInterval(() => {
        opacity += 0.05;
        if (opacity >= 1) {
          opacity = 1;
          clearInterval(fadeIn);
        }
        nextCard.style.opacity = opacity;
      }, 50);
    }

    setInterval(showNextCard, 3000);
  }

});
