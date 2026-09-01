<h2 align="center">
  Moon Cards Editor
</h2>

MoonCE is a quality-of-life addon for Bondage Club's ClubCard minigame.

MoonCE expands deck management with 20 additional deck slots, deck codes for importing and exporting decks, and a more convenient way to switch between and manage your decks.

## Features

### Deck Management

- Viewing and editing ClubCard decks in rooms or when starting a game.
- Up to **20 additional secure MoonCE deck slots**.
- Switching between regular ClubCard decks and MoonCE decks.
- Slightly longer deck names than those supported by ClubCard.
- Deck import and export through shareable deck codes.
- Card search and filtering while building a deck.

### Starting a Match

- Improved deck selection window.
- Deck previews before starting a match.
- Switching between MoonCE, Default and ClubCard decks.

### Extras

- MoonCE user indicators in rooms.
- Theme addon compatibility.
- Optional ClubCard match statistics through ClubCard Monitoring.

## Demonstration

<img width="1280" height="640" alt="ClubCard_animation_full_color" src="https://github.com/user-attachments/assets/fc184399-665d-49c9-b210-5769bf415051" />


## ClubCard Statistics

MoonCE can contribute card and match statistics to **ClubCard Monitoring** when you play against another MoonCE user.

Statistics tracking is enabled by default and can be changed at any time with:

- `/moonstats on` — enable statistics tracking.
- `/moonstats off` — disable statistics tracking.

You can view the collected ClubCard statistics here:

[https://clubcardmonitoring.onrender.com/](https://clubcardmonitoring.onrender.com/)

## Commands

- `/moon` — show MoonCE commands and useful links.
- `/moonstats on` — enable ClubCard statistics tracking.
- `/moonstats off` — disable ClubCard statistics tracking.
- `/moonselectedcards on` — enable selected cards view in deck editor.
- `/moonselectedcards off` — disable selected cards view in deck editor.

## Installation

### 1. FUSAM

MoonCE is available through the **FUSAM Addon Manager**.

### 2. Tampermonkey or ViolentMonkey

Install one of these browser extensions:

- [Tampermonkey](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- [ViolentMonkey](https://chromewebstore.google.com/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag)

Then install one of the MoonCE loaders:

**Stable**

[https://lunarkitsunify.github.io/MoonCEBC/MoonCEBCLoader.user.js](https://lunarkitsunify.github.io/MoonCEBC/MoonCEBCLoader.user.js)

**Beta**

[https://lunarkitsunify.github.io/MoonCEBC/MoonCEBCLoaderBeta.user.js](https://lunarkitsunify.github.io/MoonCEBC/MoonCEBCLoaderBeta.user.js)

### 3. Bookmark

**Stable**

```javascript
javascript:(()=>{import("https://lunarkitsunify.github.io/MoonCEBC/MoonCEBC.js")})();
```

**Beta**

```javascript
javascript:(()=>{import("https://lunarkitsunify.github.io/MoonCEBC/MoonCEBCBeta.js")})();
```

## Community & Links

**BC Cards Community** - [https://discord.gg/ZByQXVHm4u](https://discord.gg/ZByQXVHm4u)

**ClubCard Monitoring** - [https://clubcardmonitoring.onrender.com/](https://clubcardmonitoring.onrender.com/)

