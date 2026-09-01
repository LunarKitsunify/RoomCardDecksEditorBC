const requiredLevelColor = "#FF5733";
const fameTextColor = "#3357FF";
const moneyTextColor = "#006400";

/**
 * Creates a mini card for the selected cards panel.
 * @param {ClubCard} card - ClubCard from BC.
 * @returns {HTMLElement} The created mini card element.
 */
export function createSelectedCardMini(card) {
    const cardElement = document.createElement("div");

    const level = card.RequiredLevel == null || card.RequiredLevel <= 1
        ? 1
        : card.RequiredLevel;

    cardElement.classList.add(
        "selected-card-mini",
        `selected-card-mini-level-${level}`
    );

    const cardText = card.Text?.replace("<F>", "") ?? "";

    if (cardText) {
        cardElement.addEventListener("mouseenter", () => { ShowSelectedCardTooltip(cardElement, cardText); });
        cardElement.addEventListener("mouseleave", () => { HideSelectedCardTooltip(); });
    }
    
    if (card.Reward) cardElement.classList.add("selected-card-mini-reward");
    
    // Values
    const valuePanel = createSelectedCardValuesPanel(card);
    cardElement.appendChild(valuePanel);

    // Card name
    const cardNameTextElement = document.createElement("div");
    cardNameTextElement.classList.add("selected-card-mini-name");
    cardNameTextElement.textContent = card.Name;

    cardElement.appendChild(cardNameTextElement);


    return cardElement;
}

/**
 * Creates the values panel for a selected mini card.
 */
function createSelectedCardValuesPanel(card) {
    const valueCardPanel = document.createElement("div");
    valueCardPanel.classList.add("selected-card-mini-values");

    const metaUrl =
        typeof import.meta !== "undefined"
            ? import.meta.url
            : document.currentScript?.src || window.location.href;

    const basePath = new URL(".", metaUrl).href;

    // Liability
    if (card.Group && card.Group.includes("Liability")) {
        const liabilityIcon = document.createElement("img");

        liabilityIcon.src =
            new URL("../src/Images/Liability.png", basePath).href;

        liabilityIcon.classList.add("selected-card-mini-icon");

        valueCardPanel.appendChild(liabilityIcon);
    }

    // Fame per turn
    if (card.FamePerTurn != null) {
        const fameBoard = createSelectedCardStatBoard(
            "Screens/MiniGame/ClubCard/Bubble/Fame.png",
            card.FamePerTurn,
            fameTextColor
        );

        valueCardPanel.appendChild(fameBoard);
    }

    // Money per turn
    if (card.MoneyPerTurn != null) {
        const moneyBoard = createSelectedCardStatBoard(
            "Screens/MiniGame/ClubCard/Bubble/Money.png",
            card.MoneyPerTurn,
            moneyTextColor
        );

        valueCardPanel.appendChild(moneyBoard);
    }

    // Revealed
    if (card.Revealed != null) {
        const revealedIcon = document.createElement("img");

        revealedIcon.src =
            "Screens/MiniGame/ClubCard/Bubble/Revealed.png";

        revealedIcon.classList.add("selected-card-mini-icon");

        valueCardPanel.appendChild(revealedIcon);
    }

    // Event
    if (card.Type == "Event") {
        const eventIcon = document.createElement("img");

        if (card.Reward)
            eventIcon.src = new URL("../src/Images/GoldLightning.png", basePath).href;
        else
            eventIcon.src = new URL("../src/Images/BlackLightning.png", basePath).href;

        eventIcon.classList.add("selected-card-mini-icon");

        valueCardPanel.appendChild(eventIcon);
    }

    return valueCardPanel;
}

/**
 * Creates an icon with a value for a selected mini card.
 */
function createSelectedCardStatBoard(iconSrc, textContent, textColor) {
    const statBoard = document.createElement("div");
    statBoard.classList.add("selected-card-mini-board");

    const icon = document.createElement("img");
    icon.classList.add("selected-card-mini-board-icon");
    icon.src = iconSrc;

    const textElement = document.createElement("div");
    textElement.classList.add("selected-card-mini-board-text");
    textElement.textContent = textContent;
    textElement.style.color = textColor;

    statBoard.appendChild(icon);
    statBoard.appendChild(textElement);

    return statBoard;
}

/**
 * Shows the selected card text tooltip.
 */
function ShowSelectedCardTooltip(cardElement, cardText) {

    HideSelectedCardTooltip();

    const tooltip = document.createElement("div");
    tooltip.classList.add("selected-card-tooltip");

    tooltip.innerHTML = cardText;

    document.body.appendChild(tooltip);

    const cardRect = cardElement.getBoundingClientRect();

    const tooltipLeft =
        cardRect.left - tooltip.offsetWidth - 8;

    let tooltipTop = cardRect.top;

    // Prevent the tooltip from going below the screen.
    if (tooltipTop + tooltip.offsetHeight > window.innerHeight)
        tooltipTop = window.innerHeight - tooltip.offsetHeight - 8;

    // Prevent the tooltip from going above the screen.
    if (tooltipTop < 0)
        tooltipTop = 8;

    tooltip.style.left = `${tooltipLeft}px`;
    tooltip.style.top = `${tooltipTop}px`;
}

/**
 * Removes the selected card text tooltip.
 */
function HideSelectedCardTooltip() {

    const tooltip =
        document.querySelector(".selected-card-tooltip");

    if (tooltip)
        tooltip.remove();
}