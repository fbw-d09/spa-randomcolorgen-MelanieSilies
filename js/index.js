document.addEventListener('DOMContentLoaded', function() {
    createColorCards(3); // Beim Laden der Seite drei Farbkarten erstellen
  });
  
  const addButton = document.querySelector('#addButton');

  addButton.addEventListener('click', function() {
    const inputNumber = document.querySelector('#inputNumber');
    const numberOfNewCards = parseInt(inputNumber.value);
    createColorCards(numberOfNewCards); // Farbkarten nach anzahl vom input erstellen
  });
  
  function createColorCards(numberOfNewCards) {
    const colorSection = document.querySelector('#colorSection');
  
    for (let i = 0; i < numberOfNewCards; i++) {
      const colorCardContainer = document.createElement('div');
      colorCardContainer.classList.add('colorCardContainer');
      colorSection.appendChild(colorCardContainer);
  
      const colorCard = document.createElement('div');
      colorCard.classList.add('colorCard');
      colorCardContainer.appendChild(colorCard);
  
      const colorNameTag = document.createElement('h2');
      colorNameTag.classList.add('colorNameTag');
      colorCard.appendChild(colorNameTag);
  
      const closeButton = document.createElement('button');
      closeButton.classList.add('closeButton');
      closeButton.innerText = 'x';
      colorCardContainer.appendChild(closeButton);
  
      const randomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
          // *16, weil letters 16 elemente hat
        }
        return color;
      };
  
      const cardColor = randomColor();
      colorCard.style.backgroundColor = cardColor;
      colorNameTag.innerText = cardColor;
  
      closeButton.addEventListener('click', function() {
        colorSection.removeChild(colorCardContainer); // Farbkarte entfernen, wenn der Schließen-Button geklickt wird
      });
    }
  }
  