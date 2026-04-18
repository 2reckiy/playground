# Game Design Document: _The Vertical Hub_

## 1. Executive Summary

_The Vertical Hub_ is a minimalist, incremental management game where the player builds a megastructure reaching 100,000+ floors. The player transitions from a manual elevator operator to a system architect, managing automated "Sky Lobby" networks and teleportation grids to maximize the "Monthly Living Fee" collected from residents.

---

## 2. Core Gameplay Loop

1.  **Transport:** Move residents to their target floors to keep satisfaction high.
2.  **Collect:** Every 30 days, collect the "Living Fee" based on total floors and average satisfaction.
3.  **Expand:** Spend currency to build new floors, attract more residents, and add elevator shafts.
4.  **Optimize:** Buy automation, logic sensors, and specialized hubs to handle the "Big Numbers" scaling problem.

---

## 3. Mechanics & Features

### 3.1. The Elevator Entity (Data-Driven)

- **Physics Stats:** `Speed`, `Acceleration`, `Capacity`, and `Cable Strength`.
- **The Command Buffer:** In the early game, elevators follow a manual queue. Later, they follow "Rulesets."
- **Upgrades:**
  - _Weight Dampeners:_ Increases capacity.
  - _Overclocked Motor:_ Increases max speed/acceleration.
  - _AI Dispatcher:_ Enables auto-calling and multi-stop logic.

### 3.2. The Resident & Patience System

- **Patience Decay:** A non-linear timer. Decay speed increases based on the resident’s "Tier" (e.g., Luxury residents have 50% less patience).
- **The Multiplier:** \* **High Patience:** Full rent + Tip + Building Reputation.
  - **Low Patience:** Reduced rent.
  - **Zero Patience:** Resident leaves (Vacancy penalty).

### 3.3. Phase-Based Automation (1.5 Logic Pilot)

- **Stage 1 (Manual):** Player clicks Floor 0 to call, and then clicks the Target Floor once the resident enters.
- **Stage 2 (Semi-Auto):** `Destination Sensor` allows the elevator to automatically move to the resident's target floor once they board.
- **Stage 3 (Full Auto):** `Hallway Radar` allows the elevator to seek out waiting passengers independently.

### 3.4. Scaling Features (The Big Numbers Solution)

- **Sky Lobbies:** Massive transfer floors placed every 500–1,000 floors. They act as "Checkpoints" for logistics.
- **Sector Management:** The building is split into "Sectors." High-speed Express Elevators move between Sectors; Local Elevators move within them.
- **Teleportation Pads:** High-cost, instant transport between lobbies. Replaces physical cables in the late game to solve travel-time lag.

---

## 4. Economic Systems

### 4.1. The Monthly Living Fee

The primary income source.

- **Base Rent:** Calculated per floor type (e.g., Studio, Office, Penthouse).
- **Satisfaction Modifier:** Rent is multiplied by the average patience of that floor’s residents over the month.
- **Operating Costs:** Monthly deductions for electricity (per trip) and cable maintenance.

### 4.2. Building Reputation

A meta-currency earned by "Perfect Deliveries."

- **Unlocks:** High Reputation is required to unlock advanced tech (Teleporters, Sector Logic).
- **Penalty:** Low Reputation increases vacancy rates and slows down spawn intervals.

---

## 5. Technical & Visual Architecture

### 5.1. Performance Strategy

- **Chunked Rendering:** Only floors in the current "Viewport" are rendered. Off-screen floors are simulated mathematically (Time-to-Arrival estimates).
- **Semantic Zoom:** \* _Macro:_ A sidebar heatmap showing the 100k-floor building as a single line.
  - _Micro:_ Detailed view of 20 floors with cable physics and passenger icons.

### 5.2. Visual Style

- **Minimalist Schematic:** High-contrast lines, dark background, glowing elevators.
- **Tactile Physics:** Visible cable tension, "bounce" on stops, and particle effects for teleportation.

---

## 6. Progression Tiers

| Tier                | Floor Range | Primary Mechanic  | Goal                                  |
| :------------------ | :---------- | :---------------- | :------------------------------------ |
| **I. The Ground**   | 1–50        | Manual Clicks     | Buy first "Auto-Call" button.         |
| **II. The Spine**   | 50–500      | Multi-Shaft Logic | Manage 3+ elevators efficiently.      |
| **III. The Clouds** | 500–5,000   | Sky Lobbies       | Implement the first Transfer Hub.     |
| **IV. The Orbit**   | 5k–100k+    | Teleportation     | Replace cables with a Networked Grid. |
