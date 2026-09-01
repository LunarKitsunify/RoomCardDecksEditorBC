const requiredLevelColor = "#FF5733";
const fameTextColor = "#3357FF";
const moneyTextColor = "#006400";

/** 
 * function to draw a card
 * @param {ClubCard} card - ClubCard from BC. 
 * @returns {HTMLElement} The created card element. 
 */
export function createCard(card) {
    //#region fix card null parameter
    let Level = card.RequiredLevel == null || card.RequiredLevel <= 1
                ? 1
                : card.RequiredLevel;
    if (card.Type == null) card.Type = "Member";
    //#endregion

    const cardButton = document.createElement('button');
    cardButton.classList.add('card-button');
    cardButton.style.backgroundColor = ClubCardColor[Level];

    if (card.Reward) cardButton.style.border = "3px solid gold";
    else cardButton.style.border = "3px solid black";

    const cardImage = document.createElement('img');
    cardImage.classList.add('card-image');
    cardImage.loading = "lazy";
    cardImage.decoding = "async";
    cardImage.src = `Screens/MiniGame/ClubCard/${card.Type}/${card.Name}.png`;
    cardButton.appendChild(cardImage);

    const imgSelected = document.createElement("img");
    imgSelected.classList.add("img-selected");
    imgSelected.src = "Screens/MiniGame/ClubCardBuilder/Selected.png";
    cardButton.appendChild(imgSelected); 

    const { nameElement, bottomContainer , cardGroupTextElement , cardDescriptionTextElement } = createCardText(card);
    cardButton.appendChild(nameElement);
    cardButton.appendChild(bottomContainer);

    const valuePanel = createCardValuesPanel(card);
    cardButton.appendChild(valuePanel);

    const cardController = {
        cardButton: cardButton,
        titleName: nameElement,
        valuePanel: valuePanel,
        cardGroupTextElement: cardGroupTextElement,
        cardDescriptionTextElement: cardDescriptionTextElement,
        showSelected: () => {
            imgSelected.style.display = "block";
            cardButton.style.border = "3.5px solid #40E0D0";
        },
        hideSelected: () => {
            imgSelected.style.display = "none";
            if (card.Reward) cardButton.style.border = "3px solid gold";
            else cardButton.style.border = "3px solid black";
        },
    }

    return cardController;
}

/**
 * @param {Object} card - The card object containing information for creating the panel.
 * @returns {Object} - Object containing the `nameElement` and `bottomContainer`.
 */
function createCardText(card) {

    // Create the card name element
    const cardNameTextElement = document.createElement("div");
    cardNameTextElement.classList.add("card-name");
    cardNameTextElement.textContent = card.Name;

    // Create the bottom container for groups and description
    const bottomContainer = document.createElement("div");
    bottomContainer.classList.add("card-bottom-div");

    // Group text
    let groupText = ClubCardGetGroupText(card.Group);
    if (groupText != "") {
        if (card.RewardMemberNumber && groupText.includes(ClubCardTextGet("GroupPlayer"))) {
            var playerText = ClubCardTextGet("GroupPlayer");
            groupText = groupText.replace(playerText, `${playerText} #${card.RewardMemberNumber}`);
        }
    }

    const cardGroupTextElement = document.createElement("div");
    cardGroupTextElement.classList.add("card-group");
    cardGroupTextElement.textContent = groupText;

    // Card description text
    const isItalic = card.Text.includes("<F>");
    const cardDescriptionTextElement = document.createElement("div");
    cardDescriptionTextElement.classList.add("card-description");
    cardDescriptionTextElement.innerHTML = card.Text.replace("<F>", "");
    cardDescriptionTextElement.style.fontStyle = isItalic ? "italic" : "normal";
    cardDescriptionTextElement.style.fontWeight = isItalic ? "normal" : "bold";

    // Append group and description to the bottom container
    bottomContainer.appendChild(cardGroupTextElement);
    bottomContainer.appendChild(cardDescriptionTextElement);

    // Return the created elements as an object
    return {
        nameElement: cardNameTextElement,
        bottomContainer: bottomContainer,
        cardGroupTextElement: cardGroupTextElement,
        cardDescriptionTextElement: cardDescriptionTextElement
    };
}

/**
   * Creates a board element with an icon and text, appends it to the specified parent container,
   * and returns the created board element.
   *
   * @param {string} iconSrc - The source path of the icon image.
   * @param {string|number} textContent - The text content to display in the board.
   * @param {string} textColor - The color of the text.
   * @param {string} textFontSize - The text font size
   * @returns {HTMLElement} The created board element.
   */
function createCardStatBoard(iconSrc, textContent, textColor) {
    const statBoard = document.createElement("div");
    statBoard.classList.add("board");

    const textElement = document.createElement("div");
    textElement.classList.add("board-text");
    textElement.textContent = textContent;
    textElement.style.color = textColor;

    const icon = document.createElement("img");
    icon.classList.add("board-icon");
    icon.src = iconSrc;

    statBoard.appendChild(icon);
    statBoard.appendChild(textElement);

    return statBoard;
}

/**
 * Creates a value card panel with the specified attributes and appends it to the parent element.
 * 
 * @param {Object} card - The card object containing information for creating the panel.
 * @returns {HTMLElement} The created ValuesPanel element.
 */
function createCardValuesPanel(card) {
    // Create the main panel
    const valueCardPanel = document.createElement("div");
    valueCardPanel.classList.add("value-card-panel");

    const metaUrl = typeof import.meta !== 'undefined' ? import.meta.url : document.currentScript?.src || window.location.href;
    const basePath = new URL('.', metaUrl).href;

    // Add Liability Icon if applicable
    if (card.Group && card.Group.includes("Liability")) {
        const liabilityIcon = document.createElement("img");
        liabilityIcon.src = new URL("../src/Images/Liability.png", basePath).href;
        liabilityIcon.classList.add("value-card-icon");
        valueCardPanel.appendChild(liabilityIcon);
    }

    // Add Level Board if applicable
    if (card.RequiredLevel > 1) {
        const levelBoard = createCardStatBoard(
            "Screens/MiniGame/ClubCard/Bubble/Level.png",
            card.RequiredLevel,
            requiredLevelColor
        );
        valueCardPanel.appendChild(levelBoard);
    }

    // Add Fame Board if applicable
    if (card.FamePerTurn != null) {
        const fameBoard = createCardStatBoard(
            "Screens/MiniGame/ClubCard/Bubble/Fame.png",
            card.FamePerTurn,
            fameTextColor
        );
        valueCardPanel.appendChild(fameBoard);
    }

    // Add Money Board if applicable
    if (card.MoneyPerTurn != null) {
        const moneyBoard = createCardStatBoard(
            "Screens/MiniGame/ClubCard/Bubble/Money.png",
            card.MoneyPerTurn,
            moneyTextColor
        );
        valueCardPanel.appendChild(moneyBoard);
    }
    // Add Revealed Icon if applicable
    if (card.Revealed != null) {
        const revealedIcon = document.createElement("img");
        revealedIcon.src = "Screens/MiniGame/ClubCard/Bubble/Revealed.png";
        revealedIcon.classList.add("value-card-icon");
        valueCardPanel.appendChild(revealedIcon);
    }
    
    if (card.Type == "Event") {
        const eventIcon = document.createElement("img");
        if (card.Reward) eventIcon.src = new URL("../src/Images/GoldLightning.png", basePath).href;
        else eventIcon.src = new URL("../src/Images/BlackLightning.png", basePath).href;
        eventIcon.classList.add("value-card-icon");
        valueCardPanel.appendChild(eventIcon);
    }


    return valueCardPanel;
}


/**
 * Creates a grid layout for a parent container, dividing it into equal parts.
 * The grid is based on the specified number of rows and total cells.
 * Returns an array of all created cells.
 * 
 * @param {HTMLElement} parent - The parent container to which the grid will be appended.
 * @param {number} cellsCount - The total number of cells to create.
 * @returns {Array} - An array of all created cell elements.
 */
export function createGridLayout(parent, cellsCount = 30) {
    // Create the grid container
    const gridContainer = document.createElement("div");
    gridContainer.id = "CardsCollectionsId";

    // Append the grid container to the parent
    parent.appendChild(gridContainer);

    // Array to store the created cells
    const cellArray = [];

    // Create the cells
    for (let i = 0; i < cellsCount; i++) {
        const cell = document.createElement("div");
        cell.classList.add("card-cell");

        gridContainer.appendChild(cell);
        cellArray.push(cell);
    }

    // Return the array of created cells
    return cellArray;
}