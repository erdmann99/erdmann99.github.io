const STORAGE_KEY = "erdmaennchen-operation-geburtstagskaefer";

const foodTypes = {
  bug: { label: "Kaefer", color: "#2f7a4b" },
  coffee: { label: "Kaffee", color: "#7b4f36" },
  cake: { label: "Kuchen", color: "#f2c34a" },
  energy: { label: "Riegel", color: "#3167b1" },
  seed: { label: "Kern", color: "#e6cf55" },
  puck: { label: "Puck", color: "#171b20" },
};

const rooms = {
  sleep: {
    title: "Schlafkammer",
    text: "Ein kleines, warmes Nest. Hier werden Bugs nur im Traum gegessen.",
  },
  server: {
    title: "Serverraum",
    text: "Byte hat den Serverraum freigeschaltet. Die Logs riechen nach Kaffee und vorsichtigem Optimismus.",
  },
  hockey: {
    title: "Hockey-Hoehle",
    text: "Pucki hat den Schalter getroffen. An der Wand steht: Kaefertor oben rechts.",
  },
  storage: {
    title: "Vorratskammer",
    text: "Sentinel hat den Eingang markiert. Bestand: Kerne stabil, Kuchenbestand weiterhin kritisch.",
  },
  birthday: {
    title: "Geburtstagskammer",
    text: "Kruemel hat die Kolonie zusammengerufen. Konfetti wurde ordnungsgemaess im Sand verteilt.",
  },
  family: {
    title: "Familienkammer",
    text: "Professor Buddel zeigt auf die Karte: Der Weg zur Geheimkammer ist kein Geruecht mehr.",
  },
  secret: {
    title: "Mission abgeschlossen.",
    text:
      "Alle Erdmaennchen sind satt. Alle Bugs wurden gegessen. Alle Pucks wurden versenkt. Und die ganze Kolonie ist sich einig: Alles Gute zum Geburtstag!",
  },
};

const meerkatConfigs = [
  {
    id: "byte",
    name: "Byte",
    special: true,
    room: "server",
    favorites: ["coffee"],
    x: 0.19,
    y: 0.72,
    accent: "#5e7e8e",
    reaction: "Bug gefressen. Issue geschlossen.",
  },
  {
    id: "pucki",
    name: "Pucki",
    special: true,
    room: "hockey",
    favorites: ["puck", "energy"],
    x: 0.42,
    y: 0.7,
    accent: "#3167b1",
    reaction: "GOOOAL! Snack sauber angenommen.",
  },
  {
    id: "sentinel",
    name: "Sentinel",
    special: true,
    room: "storage",
    favorites: ["seed"],
    x: 0.63,
    y: 0.68,
    accent: "#1f7a83",
    reaction: "Lagebericht: Snackquelle gesichert.",
  },
  {
    id: "kruemel",
    name: "Kruemel",
    special: true,
    room: "birthday",
    favorites: ["cake"],
    x: 0.78,
    y: 0.73,
    accent: "#f4c542",
    reaction: "Kolonie-Alarm: Lieblingsmensch hat Geburtstag!",
  },
  {
    id: "professor",
    name: "Prof. Buddel",
    special: true,
    room: "family",
    favorites: ["bug"],
    x: 0.1,
    y: 0.76,
    accent: "#d94f43",
    reaction: "Hypothese bestaetigt: lecker.",
  },
  {
    id: "pixel",
    name: "Spatz",
    special: false,
    room: "sleep",
    favorites: ["coffee", "bug"],
    x: 0.28,
    y: 0.8,
    size: 0.82,
    accent: "#5e7e8e",
    reaction: "Kleiner Snack, grosse Zoomies.",
  },
  {
    id: "flitzi",
    name: "John of Us",
    special: false,
    room: "sleep",
    favorites: ["bug", "seed"],
    x: 0.52,
    y: 0.78,
    size: 0.78,
    accent: "#2f7a4b",
    reaction: "Weggesnackt und weitergeflitzt.",
  },
  {
    id: "motte",
    name: "Frodo",
    special: false,
    room: "sleep",
    favorites: ["cake"],
    x: 0.69,
    y: 0.79,
    size: 0.76,
    accent: "#f4c542",
    reaction: "Kuchenkrümel gesichert.",
  },
  {
    id: "goalie",
    name: "Arthur Dent",
    special: false,
    room: "hockey",
    favorites: ["puck", "energy"],
    x: 0.86,
    y: 0.68,
    size: 0.84,
    accent: "#3167b1",
    reaction: "Snack gehalten. Fangquote 100 Prozent.",
  },
  {
    id: "nuss",
    name: "Nuss",
    special: false,
    room: "storage",
    favorites: ["seed"],
    x: 0.34,
    y: 0.66,
    size: 0.74,
    accent: "#e6cf55",
    reaction: "Kern archiviert.",
  },
  {
    id: "tango",
    name: "Marvin",
    special: false,
    room: "birthday",
    favorites: ["cake", "energy"],
    x: 0.58,
    y: 0.64,
    size: 0.8,
    accent: "#d94f43",
    reaction: "Snack gegessen, Tanzschritt geladen.",
  },
  {
    id: "kompass",
    name: "Kompass",
    special: false,
    room: "family",
    favorites: ["bug"],
    x: 0.12,
    y: 0.66,
    size: 0.78,
    accent: "#1f7a83",
    reaction: "Snackposition vermerkt.",
  },
  {
    id: "bohne",
    name: "Bohne",
    special: false,
    room: "server",
    favorites: ["coffee"],
    x: 0.46,
    y: 0.82,
    size: 0.72,
    accent: "#7b4f36",
    reaction: "Kaffee wirkt. Sehr.",
  },
];

const tunnelNodes = [
  { x: 0.16, y: 0.16 },
  { x: 0.36, y: 0.28 },
  { x: 0.52, y: 0.28 },
  { x: 0.82, y: 0.16 },
  { x: 0.18, y: 0.56 },
  { x: 0.42, y: 0.58 },
  { x: 0.66, y: 0.58 },
  { x: 0.82, y: 0.62 },
  { x: 0.5, y: 0.82 },
];

function defaultState() {
  return {
    selectedFood: "bug",
    specials: [],
    unlockedRooms: ["sleep"],
  };
}

let state = loadState();
let canvas;
let ctx;
let stage;
let tunnelCanvas;
let tunnelCtx;
let tunnelWidth = 1;
let tunnelHeight = 1;
let dpr = 1;
let width = 1;
let height = 1;
let lastTime = performance.now();
let foodId = 1;
let grabbedFood = null;
let selectedGhost = null;

const sim = {
  foods: [],
  crumbs: [],
  pops: [],
  partyStartedAt: 0,
  meerkats: [],
  raptor: {
    active: false,
    mode: "idle",
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    rotation: 0,
    direction: 1,
    targetX: 0,
    nextAt: performance.now() + 9000,
    alarmUntil: 0,
  },
};

const specialCount = document.querySelector("#special-count");
const roomCount = document.querySelector("#room-count");
const reactionText = document.querySelector("#reaction-text");
const roomPanel = document.querySelector("#room-panel");
const tunnelStage = document.querySelector(".tunnel-stage");
const welcomeModal = document.querySelector("#welcome-modal");
const startCardButton = document.querySelector("#start-card");
const foodButtons = document.querySelectorAll(".food-button[data-food]");
const roomButtons = document.querySelectorAll(".room");

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return {
      ...defaultState(),
      ...stored,
      specials: Array.isArray(stored?.specials) ? stored.specials : [],
      unlockedRooms: Array.isArray(stored?.unlockedRooms)
        ? stored.unlockedRooms
        : ["sleep"],
    };
  } catch {
    return defaultState();
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Local file previews can disable storage; the game keeps working in memory.
  }
}

function init() {
  canvas = document.querySelector("#game-canvas");
  stage = document.querySelector(".enclosure-stage");
  ctx = canvas.getContext("2d");
  tunnelCanvas = document.querySelector("#tunnel-canvas");
  tunnelCtx = tunnelCanvas.getContext("2d");

  sim.meerkats = meerkatConfigs.map((config, index) => ({
    ...config,
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    mood: "wandert",
    targetX: 0,
    targetY: 0,
    targetFood: null,
    talk: "",
    talkUntil: 0,
    eatUntil: 0,
    wanderAt: 0,
    location: "surface",
    nextBurrowAt: performance.now() + 3500 + index * 2200,
    undergroundUntil: 0,
    tunnelX: 0,
    tunnelY: 0,
    tunnelTargetX: 0,
    tunnelTargetY: 0,
    tunnelExit: "left",
    stride: Math.random() * 10,
  }));

  resizeCanvas();
  wireEvents();
  updateUi();
  showRoom("sleep");
  updateScrollMode();
  showWelcomeModal();
  requestAnimationFrame(loop);
}

function resizeCanvas() {
  const rect = stage.getBoundingClientRect();
  const tunnelRect = tunnelStage.getBoundingClientRect();
  width = Math.max(320, rect.width);
  height = Math.max(420, rect.height);
  tunnelWidth = Math.max(320, tunnelRect.width);
  tunnelHeight = Math.max(520, tunnelRect.height);
  dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);
  tunnelCanvas.width = Math.floor(tunnelWidth * dpr);
  tunnelCanvas.height = Math.floor(tunnelHeight * dpr);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  tunnelCanvas.style.width = `${tunnelWidth}px`;
  tunnelCanvas.style.height = `${tunnelHeight}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  tunnelCtx.setTransform(dpr, 0, 0, dpr, 0, 0);

  sim.meerkats.forEach((meerkat, index) => {
    if (!meerkat.x || !meerkat.y) {
      meerkat.x = meerkatConfigs.find((item) => item.id === meerkat.id).x * width;
      meerkat.y = groundTop() + meerkatConfigs.find((item) => item.id === meerkat.id).y * playableHeight();
      setRandomWander(meerkat, performance.now());
    } else {
      constrainMeerkat(meerkat);
    }
  });
}

function wireEvents() {
  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("scroll", updateScrollMode, { passive: true });

  foodButtons.forEach((button) => {
    button.addEventListener("click", () => selectFood(button.dataset.food));
    button.addEventListener("pointerdown", (event) => {
      if (allowsFoodDrag(event)) {
        startFoodDrag(event, button.dataset.food);
      }
    });
  });

  canvas.addEventListener("pointerdown", onCanvasPointerDown);
  canvas.addEventListener("pointermove", onCanvasPointerMove);
  canvas.addEventListener("pointerup", onCanvasPointerUp);
  canvas.addEventListener("pointercancel", onCanvasPointerUp);

  roomButtons.forEach((button) => {
    button.addEventListener("click", () => showRoom(button.dataset.room));
  });

  document.querySelector("#reset-progress").addEventListener("click", resetGame);
  startCardButton?.addEventListener("click", closeWelcomeModal);
  welcomeModal?.addEventListener("click", (event) => {
    if (event.target === welcomeModal) {
      closeWelcomeModal();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && welcomeModal && !welcomeModal.classList.contains("is-hidden")) {
      closeWelcomeModal();
    }
  });
}

function showWelcomeModal() {
  if (!welcomeModal) return;
  document.body.classList.add("modal-open");
  welcomeModal.classList.remove("is-hidden");
  startCardButton?.focus();
}

function closeWelcomeModal() {
  if (!welcomeModal) return;
  welcomeModal.classList.add("is-hidden");
  document.body.classList.remove("modal-open");
  foodButtons[0]?.focus();
}

function selectFood(type) {
  state.selectedFood = type;
  saveState();
  updateUi();
  reactionText.textContent = `${foodTypes[type].label} ausgewaehlt. Tippe ins Gehege, um es abzulegen.`;
}

function allowsFoodDrag(event) {
  return !isCompactCanvas() && event.pointerType === "mouse";
}

function startFoodDrag(event, type) {
  event.preventDefault();
  selectFood(type);
  selectedGhost = document.createElement("div");
  selectedGhost.className = "drag-ghost";
  selectedGhost.innerHTML = `<span class="food-icon ${type}-icon"></span>`;
  document.body.appendChild(selectedGhost);
  moveGhost(event.clientX, event.clientY);

  const move = (moveEvent) => moveGhost(moveEvent.clientX, moveEvent.clientY);
  const up = (upEvent) => {
    document.removeEventListener("pointermove", move);
    document.removeEventListener("pointerup", up);
    selectedGhost?.remove();
    selectedGhost = null;
    const point = clientToCanvas(upEvent.clientX, upEvent.clientY);
    if (point) {
      dropFood(type, point.x, point.y, true);
    }
  };

  document.addEventListener("pointermove", move);
  document.addEventListener("pointerup", up, { once: true });
}

function moveGhost(x, y) {
  if (!selectedGhost) return;
  selectedGhost.style.left = `${x}px`;
  selectedGhost.style.top = `${y}px`;
}

function onCanvasPointerDown(event) {
  const point = eventToCanvas(event);
  if (hitRaptor(point)) {
    knockDownRaptor(performance.now());
    return;
  }

  grabbedFood = allowsFoodDrag(event) ? findFoodAt(point.x, point.y) : null;
  if (grabbedFood) {
    canvas.setPointerCapture(event.pointerId);
    grabbedFood.dragging = true;
    grabbedFood.claimedBy = null;
    grabbedFood.vx = 0;
    grabbedFood.vy = 0;
    return;
  }

  dropFood(state.selectedFood, point.x, point.y, true);
}

function onCanvasPointerMove(event) {
  if (!grabbedFood) return;
  const point = eventToCanvas(event);
  grabbedFood.x = clamp(point.x, 22, width - 22);
  grabbedFood.y = clamp(point.y, groundTop() + 22, playBottom());
}

function onCanvasPointerUp(event) {
  if (!grabbedFood) return;
  grabbedFood.dragging = false;
  grabbedFood = null;
  try {
    canvas.releasePointerCapture(event.pointerId);
  } catch {
    // The pointer can already be released when the drag ends outside the canvas.
  }
}

function clientToCanvas(clientX, clientY) {
  const rect = canvas.getBoundingClientRect();
  if (
    clientX < rect.left ||
    clientX > rect.right ||
    clientY < rect.top ||
    clientY > rect.bottom
  ) {
    return null;
  }
  return {
    x: clientX - rect.left,
    y: clientY - rect.top,
  };
}

function eventToCanvas(event) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
}

function dropFood(type, x, y, announce) {
  const food = {
    id: foodId++,
    type,
    x: clamp(x, 24, width - 24),
    y: clamp(y, groundTop() + 24, playBottom()),
    vx: 0,
    vy: 0,
    age: 0,
    claimedBy: null,
    dragging: false,
  };
  sim.foods.push(food);
  sim.pops.push({ x: food.x, y: food.y, age: 0, color: foodTypes[type].color });
  if (announce) {
    reactionText.textContent = `${foodTypes[type].label} liegt im Gehege. Mal sehen, wer es bemerkt.`;
  }
  wakeInterestedMeerkats(food);
}

function wakeInterestedMeerkats(food) {
  sim.meerkats.forEach((meerkat) => {
    if (meerkat.favorites.includes(food.type)) {
      if (isRaptorDanger()) {
        return;
      }
      if (meerkat.location === "entering") {
        meerkat.location = "surface";
      }
      if (meerkat.location === "tunnel") {
        meerkat.undergroundUntil = performance.now() + 900;
      }
      meerkat.targetFood = food;
      meerkat.mood = "sprintet";
      meerkat.talk = "!";
      meerkat.talkUntil = performance.now() + 900;
    }
  });
}

function findFoodAt(x, y) {
  for (let index = sim.foods.length - 1; index >= 0; index -= 1) {
    const food = sim.foods[index];
    if (distance(x, y, food.x, food.y) < 28) {
      return food;
    }
  }
  return null;
}

function loop(now) {
  const dt = Math.min((now - lastTime) / 1000, 0.033);
  lastTime = now;
  update(dt, now);
  draw(now);
  drawTunnel(now);
  requestAnimationFrame(loop);
}

function update(dt, now) {
  updateRaptor(dt, now);

  sim.foods.forEach((food) => {
    food.age += dt;
    food.x = clamp(food.x, 18, width - 18);
    food.y = clamp(food.y, groundTop() + 18, playBottom());
  });

  sim.pops = sim.pops.filter((pop) => {
    pop.age += dt;
    return pop.age < 0.65;
  });
  sim.crumbs = sim.crumbs.filter((crumb) => {
    crumb.age += dt;
    crumb.y += crumb.vy * dt;
    crumb.x += crumb.vx * dt;
    return crumb.age < 0.9;
  });

  inviteHungryTunnelMeerkats(now);
  sim.meerkats.forEach((meerkat) => updateMeerkat(meerkat, dt, now));
}

function inviteHungryTunnelMeerkats(now) {
  if (isRaptorDanger()) {
    return;
  }

  sim.meerkats.forEach((meerkat) => {
    if (meerkat.location !== "tunnel" && meerkat.location !== "entering") {
      return;
    }

    const food = findBestFoodFor(meerkat);
    if (!food) {
      return;
    }

    meerkat.targetFood = food;
    if (meerkat.location === "tunnel") {
      meerkat.undergroundUntil = now - 1;
    } else {
      meerkat.location = "surface";
    }
  });
}

function updateMeerkat(meerkat, dt, now) {
  if (isRaptorDanger() && meerkat.location === "surface") {
    sendToBurrow(meerkat, now, true);
  }

  if (meerkat.location === "tunnel") {
    updateTunnelMeerkat(meerkat, dt, now);
    return;
  }

  if (meerkat.eatUntil > now) {
    meerkat.stride += dt * 8;
    return;
  }

  if (!meerkat.targetFood || !sim.foods.includes(meerkat.targetFood)) {
    meerkat.targetFood = nearestFavoriteFood(meerkat);
  }

  let targetX = meerkat.targetX;
  let targetY = meerkat.targetY;
  let speed = 52;

  if (meerkat.targetFood) {
    targetX = meerkat.targetFood.x;
    targetY = meerkat.targetFood.y + 4;
    speed = meerkat.special ? 245 : 170;
    const pickupDistance = isCompactCanvas() ? 72 : 58;
    if (distance(meerkat.x, meerkat.y, targetX, targetY) < pickupDistance) {
      eatFood(meerkat, meerkat.targetFood, now);
      return;
    }
  } else {
    meerkat.mood = "wandert";
    if (meerkat.location === "surface" && now > meerkat.nextBurrowAt) {
      sendToBurrow(meerkat, now);
    }
    if (now > meerkat.wanderAt || distance(meerkat.x, meerkat.y, targetX, targetY) < 18) {
      setRandomWander(meerkat, now);
    }
  }

  if (meerkat.location === "entering") {
    const entrance = nearestBurrow(meerkat.x);
    targetX = entrance.x;
    targetY = entrance.y;
    speed = meerkat.mood === "alarm" ? 310 : 220;
    if (distance(meerkat.x, meerkat.y, targetX, targetY) < 50) {
      enterTunnel(meerkat, now, entrance.id);
      return;
    }
  }

  const dx = targetX - meerkat.x;
  const dy = targetY - meerkat.y;
  const length = Math.max(Math.hypot(dx, dy), 1);
  let ax = (dx / length) * speed;
  let ay = (dy / length) * speed;

  sim.meerkats.forEach((other) => {
    if (other === meerkat) return;
    const gap = distance(meerkat.x, meerkat.y, other.x, other.y);
    if (gap > 0 && gap < 58) {
      ax += ((meerkat.x - other.x) / gap) * 82;
      ay += ((meerkat.y - other.y) / gap) * 42;
    }
  });

  meerkat.vx += (ax - meerkat.vx) * Math.min(1, dt * 3.5);
  meerkat.vy += (ay - meerkat.vy) * Math.min(1, dt * 3.5);
  meerkat.x += meerkat.vx * dt;
  meerkat.y += meerkat.vy * dt;
  meerkat.stride += dt * Math.hypot(meerkat.vx, meerkat.vy) * 0.07;
  constrainMeerkat(meerkat);
}

function nearestFavoriteFood(meerkat) {
  if (isRaptorDanger()) {
    return null;
  }
  const best = findBestFoodFor(meerkat);
  if (best) {
    meerkat.mood = "sprintet";
  }
  return best;
}

function findBestFoodFor(meerkat) {
  let best = null;
  let bestDistance = Infinity;
  sim.foods.forEach((food) => {
    if (!meerkat.favorites.includes(food.type)) return;
    if (food.dragging) return;
    const specialOwner = sim.meerkats.find(
      (candidate) => candidate.special && candidate.favorites.includes(food.type),
    );
    if (!meerkat.special && specialOwner && !state.specials.includes(specialOwner.id)) {
      return;
    }
    const gap = distance(meerkat.x, meerkat.y, food.x, food.y);
    if (gap < bestDistance) {
      best = food;
      bestDistance = gap;
    }
  });
  if (best) {
    meerkat.mood = "sprintet";
  }
  return best;
}

function eatFood(meerkat, food, now) {
  const completedBefore = isBirthdayComplete();
  sim.foods = sim.foods.filter((item) => item !== food);
  meerkat.targetFood = null;
  meerkat.eatUntil = now + 900;
  meerkat.talk = meerkat.reaction;
  meerkat.talkUntil = now + 2800;
  meerkat.nextBurrowAt = now + random(6500, 15000);
  sim.pops.push({ x: food.x, y: food.y, age: 0, color: foodTypes[food.type].color });
  for (let i = 0; i < 12; i += 1) {
    sim.crumbs.push({
      x: food.x,
      y: food.y,
      vx: (Math.random() - 0.5) * 140,
      vy: -Math.random() * 100,
      age: 0,
      color: foodTypes[food.type].color,
    });
  }

  if (meerkat.special && !state.specials.includes(meerkat.id)) {
    state.specials.push(meerkat.id);
    unlockRoom(meerkat.room);
  }

  saveState();
  updateUi();
  reactionText.textContent =
    !completedBefore && isBirthdayComplete()
      ? "Party im Gehege: Happy Birthday Christian!"
      : `${meerkat.name}: ${meerkat.reaction}`;
}

function unlockRoom(room) {
  if (!state.unlockedRooms.includes(room)) {
    state.unlockedRooms.push(room);
  }
  if (
    state.specials.length === specialMeerkatCount() &&
    !state.unlockedRooms.includes("secret")
  ) {
    state.unlockedRooms.push("secret");
    sim.partyStartedAt = performance.now();
    reactionText.textContent = "Party im Gehege: Happy Birthday Christian!";
    showRoom("secret");
  }
}

function setRandomWander(meerkat, now) {
  if (meerkat.location === "entering") {
    const entrance = nearestBurrow(meerkat.x);
    meerkat.targetX = entrance.x;
    meerkat.targetY = entrance.y;
    meerkat.wanderAt = now + 1200;
    return;
  }
  meerkat.targetX = random(48, width - 48);
  meerkat.targetY = random(groundTop() + 54, playBottom());
  meerkat.wanderAt = now + random(1800, 4200);
}

function constrainMeerkat(meerkat) {
  meerkat.x = clamp(meerkat.x, 42, width - 42);
  meerkat.y = clamp(meerkat.y, groundTop() + 54, playBottom());
}

function groundTop() {
  return height * (isCompactCanvas() ? 0.38 : 0.47);
}

function playBottom() {
  return isCompactCanvas() ? height - 96 : height - 44;
}

function isCompactCanvas() {
  return width < 560;
}

function playableHeight() {
  return playBottom() - groundTop() - 30;
}

function draw(now) {
  ctx.clearRect(0, 0, width, height);
  drawScene();
  drawRaptor(now);
  sim.foods.sort((a, b) => a.y - b.y).forEach(drawFood);
  sim.meerkats
    .filter((meerkat) => meerkat.location !== "tunnel")
    .sort((a, b) => a.y - b.y)
    .forEach((meerkat) => drawMeerkat(meerkat, now));
  sim.crumbs.forEach(drawCrumb);
  sim.pops.forEach(drawPop);
  drawBirthdayParty(now);
}

function isBirthdayComplete() {
  return state.specials.length >= specialMeerkatCount();
}

function drawBirthdayParty(now) {
  if (!isBirthdayComplete()) {
    return;
  }

  const startedAt = sim.partyStartedAt || now - 4800;
  const age = Math.max(0, now - startedAt);
  drawPartyStreamers(now);
  drawPartyConfetti(now, age);
  drawPartyBalloons(now);
  drawBirthdayBanner(age);
}

function drawPartyStreamers(now) {
  const colors = ["#d94f43", "#f4c542", "#1f7a83", "#3167b1"];
  const top = isCompactCanvas() ? 118 : 130;
  ctx.save();
  ctx.lineWidth = isCompactCanvas() ? 3 : 4;
  ctx.lineCap = "round";
  for (let strand = 0; strand < 3; strand += 1) {
    const y = top + strand * (isCompactCanvas() ? 24 : 30);
    ctx.beginPath();
    for (let x = 0; x <= width; x += 26) {
      const waveY = y + Math.sin(x / 42 + now / 520 + strand) * 9;
      if (x === 0) {
        ctx.moveTo(x, waveY);
      } else {
        ctx.lineTo(x, waveY);
      }
    }
    ctx.strokeStyle = colors[strand % colors.length];
    ctx.globalAlpha = 0.58;
    ctx.stroke();

    for (let x = 28 + strand * 11; x < width; x += isCompactCanvas() ? 74 : 92) {
      ctx.globalAlpha = 0.9;
      ctx.fillStyle = colors[(strand + Math.floor(x / 90)) % colors.length];
      ctx.beginPath();
      ctx.arc(x, y + Math.sin(x / 42 + now / 520 + strand) * 9, isCompactCanvas() ? 5 : 7, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.restore();
  ctx.globalAlpha = 1;
}

function drawPartyConfetti(now, age) {
  const colors = ["#d94f43", "#f4c542", "#1f7a83", "#3167b1", "#ffffff", "#e6cf55"];
  const count = isCompactCanvas() ? 72 : 130;
  const activeBurst = age < 7000;

  ctx.save();
  for (let i = 0; i < count; i += 1) {
    const seed = (i * 9301 + 49297) % 233280;
    const xBase = ((seed / 233280) * (width + 120)) - 60;
    const speed = 42 + (i % 9) * 13;
    const delay = (i % 17) * 120;
    const fall = activeBurst ? Math.max(0, age - delay) : now + i * 91;
    const y = ((fall / 1000) * speed + (i * 37) % height) % (height + 80) - 40;
    const x = xBase + Math.sin(now / 430 + i) * (14 + (i % 5) * 3);
    const size = 5 + (i % 4) * 2;

    ctx.globalAlpha = activeBurst ? clamp((age - delay) / 500, 0, 1) : 0.82;
    ctx.fillStyle = colors[i % colors.length];
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(now / 360 + i);
    ctx.fillRect(-size / 2, -size / 2, size, Math.max(3, size * 0.55));
    ctx.restore();
  }
  ctx.restore();
  ctx.globalAlpha = 1;
}

function drawPartyBalloons(now) {
  const ground = groundTop();
  const balloons = [
    { x: width * 0.1, y: ground + 70, color: "#d94f43", phase: 0 },
    { x: width * 0.9, y: ground + 92, color: "#3167b1", phase: 1.8 },
    { x: width * 0.2, y: ground + 142, color: "#f4c542", phase: 3.2 },
    { x: width * 0.78, y: ground + 155, color: "#1f7a83", phase: 4.4 },
  ];

  ctx.save();
  balloons.forEach((balloon) => {
    const bob = Math.sin(now / 520 + balloon.phase) * 7;
    const x = balloon.x + Math.sin(now / 760 + balloon.phase) * 5;
    const y = balloon.y + bob;
    const scale = isCompactCanvas() ? 0.72 : 1;

    ctx.strokeStyle = "rgba(65, 43, 28, 0.38)";
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.moveTo(x, y + 27 * scale);
    ctx.bezierCurveTo(x - 12 * scale, y + 58 * scale, x + 10 * scale, y + 88 * scale, x - 3 * scale, y + 116 * scale);
    ctx.stroke();

    ctx.fillStyle = balloon.color;
    ctx.beginPath();
    ctx.ellipse(x, y, 18 * scale, 23 * scale, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "rgba(255,255,255,0.45)";
    ctx.beginPath();
    ctx.ellipse(x - 6 * scale, y - 8 * scale, 5 * scale, 8 * scale, -0.35, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "rgba(65, 43, 28, 0.32)";
    ctx.beginPath();
    ctx.moveTo(x - 5 * scale, y + 21 * scale);
    ctx.lineTo(x + 5 * scale, y + 21 * scale);
    ctx.lineTo(x, y + 30 * scale);
    ctx.closePath();
    ctx.fill();
  });
  ctx.restore();
}

function drawBirthdayBanner(age) {
  const compact = isCompactCanvas();
  const bannerWidth = Math.min(width - 24, compact ? 352 : 720);
  const bannerHeight = compact ? 86 : 112;
  const x = width / 2 - bannerWidth / 2;
  const targetY = compact ? 16 : 18;
  const intro = clamp(age / 900, 0, 1);
  const eased = 1 - Math.pow(1 - intro, 3);
  const y = targetY - (1 - eased) * 110 + Math.sin(age / 260) * (intro < 1 ? 2 : 1.2);
  const ropeY = y + (compact ? 13 : 17);

  ctx.save();
  ctx.strokeStyle = "rgba(78, 49, 30, 0.72)";
  ctx.lineWidth = compact ? 4 : 5;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(Math.max(0, x - 32), ropeY);
  ctx.bezierCurveTo(x + bannerWidth * 0.25, ropeY - 24, x + bannerWidth * 0.75, ropeY + 24, Math.min(width, x + bannerWidth + 32), ropeY);
  ctx.stroke();

  ctx.shadowColor = "rgba(44, 28, 16, 0.28)";
  ctx.shadowBlur = 18;
  ctx.shadowOffsetY = 10;
  const bannerGradient = ctx.createLinearGradient(x, y, x, y + bannerHeight);
  bannerGradient.addColorStop(0, "#fff7dc");
  bannerGradient.addColorStop(0.5, "#fff0bb");
  bannerGradient.addColorStop(1, "#f0c45a");
  ctx.fillStyle = bannerGradient;
  ctx.beginPath();
  ctx.moveTo(x + 16, y + 10);
  ctx.lineTo(x + bannerWidth - 16, y + 10);
  ctx.quadraticCurveTo(x + bannerWidth - 4, y + bannerHeight * 0.5, x + bannerWidth - 16, y + bannerHeight - 6);
  ctx.lineTo(x + bannerWidth * 0.56, y + bannerHeight - 1);
  ctx.quadraticCurveTo(x + bannerWidth * 0.5, y + bannerHeight - 12, x + bannerWidth * 0.44, y + bannerHeight - 1);
  ctx.lineTo(x + 16, y + bannerHeight - 6);
  ctx.quadraticCurveTo(x + 4, y + bannerHeight * 0.5, x + 16, y + 10);
  ctx.closePath();
  ctx.fill();
  ctx.shadowColor = "transparent";

  ctx.fillStyle = "rgba(255,255,255,0.34)";
  for (let i = 0; i < 7; i += 1) {
    const stripeX = x + 22 + i * (bannerWidth / 7);
    ctx.beginPath();
    ctx.moveTo(stripeX, y + 13);
    ctx.lineTo(stripeX + 18, y + 12);
    ctx.lineTo(stripeX - 6, y + bannerHeight - 8);
    ctx.lineTo(stripeX - 24, y + bannerHeight - 7);
    ctx.closePath();
    ctx.fill();
  }

  ctx.strokeStyle = "#d94f43";
  ctx.lineWidth = compact ? 5 : 7;
  ctx.lineJoin = "round";
  ctx.beginPath();
  ctx.moveTo(x + 18, y + 13);
  ctx.lineTo(x + bannerWidth - 18, y + 13);
  ctx.quadraticCurveTo(x + bannerWidth - 7, y + bannerHeight * 0.5, x + bannerWidth - 18, y + bannerHeight - 9);
  ctx.lineTo(x + 18, y + bannerHeight - 9);
  ctx.quadraticCurveTo(x + 7, y + bannerHeight * 0.5, x + 18, y + 13);
  ctx.closePath();
  ctx.stroke();

  const colors = ["#d94f43", "#f4c542", "#1f7a83", "#3167b1"];
  const flagCount = compact ? 8 : 14;
  for (let i = 0; i < flagCount; i += 1) {
    const flagX = x + 22 + i * ((bannerWidth - 44) / Math.max(1, flagCount - 1));
    ctx.fillStyle = colors[i % colors.length];
    ctx.beginPath();
    ctx.moveTo(flagX - 9, y + bannerHeight - 2);
    ctx.lineTo(flagX + 9, y + bannerHeight - 2);
    ctx.lineTo(flagX, y + bannerHeight + (compact ? 16 : 21));
    ctx.closePath();
    ctx.fill();
  }

  const pinY = y + 16;
  ctx.fillStyle = "#1f7a83";
  [x + 24, x + bannerWidth - 24].forEach((pinX) => {
    ctx.beginPath();
    ctx.arc(pinX, pinY, compact ? 6 : 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#fff9ea";
    ctx.beginPath();
    ctx.arc(pinX - 2, pinY - 2, compact ? 2 : 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#1f7a83";
  });

  ctx.fillStyle = "#20242a";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = compact ? "900 30px Inter, system-ui, sans-serif" : "900 52px Inter, system-ui, sans-serif";
  ctx.fillText("Happy Birthday", width / 2, y + (compact ? 40 : 50));
  ctx.fillStyle = "#d94f43";
  ctx.font = compact ? "900 23px Inter, system-ui, sans-serif" : "900 36px Inter, system-ui, sans-serif";
  ctx.fillText("Christian", width / 2, y + (compact ? 66 : 84) + 5);
  ctx.restore();
}

function sendToBurrow(meerkat, now, alarm = false) {
  meerkat.location = "entering";
  meerkat.targetFood = null;
  meerkat.mood = alarm ? "alarm" : "wandert";
  meerkat.talk = alarm ? "ALARM!" : "bin kurz unten";
  meerkat.talkUntil = now + (alarm ? 1100 : 1400);
}

function enterTunnel(meerkat, now, entranceId) {
  const start = tunnelEntrancePoint(entranceId);
  meerkat.location = "tunnel";
  meerkat.tunnelExit = entranceId;
  meerkat.tunnelX = start.x;
  meerkat.tunnelY = start.y;
  meerkat.undergroundUntil = now + (meerkat.mood === "alarm" ? random(4200, 7600) : random(6500, 13000));
  meerkat.mood = "wandert";
  setRandomTunnelTarget(meerkat);
}

function updateRaptor(dt, now) {
  const raptor = sim.raptor;
  if (isBirthdayComplete()) {
    raptor.active = false;
    raptor.mode = "idle";
    raptor.nextAt = Infinity;
    raptor.alarmUntil = 0;
    return;
  }

  if (!raptor.active && now > raptor.nextAt) {
    startRaptor(now);
  }
  if (!raptor.active) {
    return;
  }

  if (raptor.mode === "falling") {
    raptor.vy += 780 * dt;
    raptor.x += raptor.vx * dt;
    raptor.y += raptor.vy * dt;
    raptor.rotation += raptor.direction * dt * 5.4;
    if (raptor.y > height + 150) {
      raptor.active = false;
      raptor.mode = "idle";
      raptor.nextAt = now + random(19000, 33000);
      raptor.alarmUntil = 0;
    }
    return;
  }

  raptor.x += raptor.vx * dt;
  raptor.y += Math.sin(now / 180) * 0.35;
  if (
    (raptor.direction > 0 && raptor.x >= raptor.targetX) ||
    (raptor.direction < 0 && raptor.x <= raptor.targetX)
  ) {
    raptor.x = raptor.targetX;
    raptor.vx = 0;
    raptor.mode = "hovering";
    raptor.alarmUntil = Infinity;
  }
}

function hitRaptor(point) {
  const raptor = sim.raptor;
  if (!raptor.active || raptor.mode === "falling" || isBirthdayComplete()) {
    return false;
  }
  return Math.abs(point.x - raptor.x) < 145 && Math.abs(point.y - raptor.y) < 78;
}

function knockDownRaptor(now) {
  const raptor = sim.raptor;
  if (!raptor.active || raptor.mode === "falling") {
    return;
  }

  raptor.mode = "falling";
  raptor.vx = raptor.direction * 70;
  raptor.vy = 80;
  raptor.alarmUntil = now + 650;
  reactionText.textContent = "Greifvogel vertrieben. Die Erdmännchen kommen zurück!";

  sim.meerkats.forEach((meerkat) => {
    if (meerkat.location === "tunnel") {
      meerkat.undergroundUntil = Math.min(meerkat.undergroundUntil, now + random(600, 1400));
    }
    if (meerkat.location === "entering") {
      meerkat.location = "surface";
      meerkat.targetFood = nearestFavoriteFood(meerkat);
      setRandomWander(meerkat, now);
    }
  });
}

function startRaptor(now) {
  if (isBirthdayComplete()) {
    return;
  }
  const raptor = sim.raptor;
  raptor.active = true;
  raptor.mode = "flying";
  raptor.direction = Math.random() > 0.5 ? 1 : -1;
  raptor.x = raptor.direction > 0 ? -150 : width + 150;
  raptor.y = random(58, Math.max(86, groundTop() - 80));
  raptor.vx = raptor.direction * random(185, 260);
  raptor.vy = 0;
  raptor.rotation = 0;
  raptor.targetX = width * random(0.32, 0.68);
  raptor.alarmUntil = Infinity;

  const sentinel = sim.meerkats.find((meerkat) => meerkat.id === "sentinel") || sim.meerkats[0];
  sentinel.talk = "GREIFVOGEL!";
  sentinel.talkUntil = now + 2500;
  reactionText.textContent = "Sentinel schlägt Alarm: Tippe den Greifvogel an!";

  sim.meerkats.forEach((meerkat) => {
    if (meerkat.location === "surface" || meerkat.location === "entering") {
      sendToBurrow(meerkat, now, true);
    }
  });
}

function isRaptorDanger() {
  const raptor = sim.raptor;
  return (
    !isBirthdayComplete() &&
    ((raptor.active && raptor.mode !== "falling") || performance.now() < raptor.alarmUntil)
  );
}

function updateTunnelMeerkat(meerkat, dt, now) {
  if (!isRaptorDanger()) {
    const food = nearestFavoriteFood(meerkat);
    if (food) {
      meerkat.targetFood = food;
      meerkat.undergroundUntil = now - 1;
    }
  }

  if (now > meerkat.undergroundUntil) {
    const entrance = surfaceEntrancePoint(meerkat.tunnelExit);
    meerkat.location = "surface";
    meerkat.x = entrance.x;
    meerkat.y = entrance.y;
    meerkat.vx = 0;
    meerkat.vy = 0;
    meerkat.nextBurrowAt = now + random(9000, 17000);
    setRandomWander(meerkat, now);
    return;
  }

  if (distance(meerkat.tunnelX, meerkat.tunnelY, meerkat.tunnelTargetX, meerkat.tunnelTargetY) < 24) {
    setRandomTunnelTarget(meerkat);
  }

  const dx = meerkat.tunnelTargetX - meerkat.tunnelX;
  const dy = meerkat.tunnelTargetY - meerkat.tunnelY;
  const length = Math.max(Math.hypot(dx, dy), 1);
  const speed = 72;
  meerkat.tunnelX += (dx / length) * speed * dt;
  meerkat.tunnelY += (dy / length) * speed * dt;
  meerkat.stride += dt * 5;
}

function setRandomTunnelTarget(meerkat) {
  const node = tunnelNodes[Math.floor(Math.random() * tunnelNodes.length)];
  meerkat.tunnelTargetX = node.x * tunnelWidth;
  meerkat.tunnelTargetY = node.y * tunnelHeight;
}

function nearestBurrow(x) {
  const left = surfaceEntrancePoint("left");
  const right = surfaceEntrancePoint("right");
  return Math.abs(x - left.x) < Math.abs(x - right.x) ? left : right;
}

function surfaceEntrancePoint(id) {
  return {
    id,
    x: id === "left" ? width * 0.18 : width * 0.78,
    y: isCompactCanvas() ? playBottom() + 4 : height - 54,
  };
}

function tunnelEntrancePoint(id) {
  return {
    x: id === "left" ? tunnelWidth * 0.16 : tunnelWidth * 0.82,
    y: tunnelHeight * 0.15,
  };
}

function drawScene() {
  const ground = groundTop();
  ctx.fillStyle = "#9dd7ed";
  ctx.fillRect(0, 0, width, ground);
  ctx.fillStyle = "#d7ed9c";
  ctx.fillRect(0, ground - 8, width, 12);
  ctx.fillStyle = "#e8bf72";
  ctx.fillRect(0, ground, width, height - ground);

  drawSun(width - 95, 72);
  drawCloud(width * 0.15, 92, 1);
  drawCloud(width * 0.56, 138, 0.75);
  drawBurrow(width * 0.18, isCompactCanvas() ? playBottom() + 36 : height - 16, 72);
  drawBurrow(width * 0.78, isCompactCanvas() ? playBottom() + 38 : height - 18, 58);
  drawGoal(width - 120, ground + 68);

  for (let i = 0; i < 20; i += 1) {
    const x = ((i * 173) % Math.floor(width + 120)) - 60;
    const y = ground + 38 + ((i * 31) % Math.max(80, height - ground - 84));
    drawPebble(x, y, i);
  }
  drawGrass(70, isCompactCanvas() ? playBottom() + 10 : height - 88);
  drawGrass(width - 145, ground + 155);
  drawGrass(width * 0.46, isCompactCanvas() ? playBottom() + 18 : height - 76);
}

function drawMeerkat(meerkat, now) {
  const baseScale = isCompactCanvas()
    ? clamp(width / 640, 0.52, 0.68)
    : clamp(width / 980, 0.74, 1.05);
  const scale = baseScale * (meerkat.size || 1);
  const facing = meerkat.vx < -8 ? -1 : 1;
  const walk = Math.sin(meerkat.stride);
  const eating = meerkat.eatUntil > now;
  const partying = isBirthdayComplete();
  ctx.save();
  ctx.translate(meerkat.x, meerkat.y);
  ctx.scale(facing * scale, scale);
  if (partying) {
    ctx.translate(0, Math.sin(now / 130 + meerkat.x * 0.03) * 5);
  }

  ctx.fillStyle = "rgba(43, 28, 18, 0.22)";
  ellipse(0, 25, 48, 13);
  ctx.rotate(
    partying
      ? Math.sin(now / 180 + meerkat.x * 0.02) * 0.09
      : eating ? Math.sin(now / 90) * 0.04 : walk * 0.035,
  );

  ctx.fillStyle = "#755037";
  ctx.beginPath();
  ctx.moveTo(23, -22);
  ctx.quadraticCurveTo(55, -18, 70, -10);
  ctx.quadraticCurveTo(55, -5, 29, -8);
  ctx.quadraticCurveTo(21, -12, 23, -22);
  ctx.fill();

  ctx.fillStyle = "#a56f45";
  ctx.beginPath();
  ctx.moveTo(-34, -26);
  ctx.bezierCurveTo(-44, 8, -31, 37, -10, 45);
  ctx.bezierCurveTo(2, 50, 20, 43, 30, 20);
  ctx.bezierCurveTo(42, -10, 31, -55, 10, -66);
  ctx.bezierCurveTo(-10, -75, -27, -56, -34, -26);
  ctx.fill();

  ctx.fillStyle = "rgba(55, 35, 22, 0.18)";
  ctx.beginPath();
  ctx.moveTo(-26, -30);
  ctx.bezierCurveTo(-33, -3, -27, 28, -13, 40);
  ctx.bezierCurveTo(-20, 10, -17, -16, -8, -55);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(24, -28);
  ctx.bezierCurveTo(32, -1, 24, 30, 10, 42);
  ctx.bezierCurveTo(20, 12, 17, -18, 7, -57);
  ctx.fill();

  ctx.fillStyle = "#e6bd83";
  ctx.beginPath();
  ctx.ellipse(0, 5, 19, 39, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "rgba(255,255,255,0.12)";
  ctx.beginPath();
  ctx.ellipse(-6, -1, 6, 32, 0.1, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = "#6f472d";
  ctx.lineWidth = 7;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(-25, -13);
  ctx.quadraticCurveTo(-35, 2, -31, 20 + walk * 3);
  ctx.moveTo(25, -13);
  ctx.quadraticCurveTo(35, 1, 31, 18 - walk * 3);
  ctx.stroke();
  ctx.strokeStyle = "#2b1d15";
  ctx.lineWidth = 1.6;
  ctx.beginPath();
  ctx.moveTo(-33, 20 + walk * 3);
  ctx.lineTo(-39, 26 + walk * 3);
  ctx.moveTo(-30, 21 + walk * 3);
  ctx.lineTo(-32, 29 + walk * 3);
  ctx.moveTo(33, 18 - walk * 3);
  ctx.lineTo(39, 24 - walk * 3);
  ctx.moveTo(30, 19 - walk * 3);
  ctx.lineTo(32, 27 - walk * 3);
  ctx.stroke();

  ctx.fillStyle = "#8d5b39";
  ctx.beginPath();
  ctx.ellipse(-21, -65, 10, 13, -0.35, 0, Math.PI * 2);
  ctx.ellipse(21, -65, 10, 13, 0.35, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#3a281e";
  ctx.beginPath();
  ctx.ellipse(-21, -65, 5, 7, -0.35, 0, Math.PI * 2);
  ctx.ellipse(21, -65, 5, 7, 0.35, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#c78a58";
  ctx.beginPath();
  ctx.moveTo(0, -75);
  ctx.bezierCurveTo(-25, -71, -34, -52, -26, -36);
  ctx.bezierCurveTo(-17, -18, 17, -18, 26, -36);
  ctx.bezierCurveTo(34, -53, 25, -71, 0, -75);
  ctx.fill();

  ctx.fillStyle = "#e0ad75";
  ctx.beginPath();
  ctx.moveTo(0, -65);
  ctx.bezierCurveTo(-14, -59, -18, -43, -10, -32);
  ctx.bezierCurveTo(-4, -25, 4, -25, 10, -32);
  ctx.bezierCurveTo(18, -43, 14, -59, 0, -65);
  ctx.fill();

  ctx.fillStyle = "rgba(42, 29, 21, 0.72)";
  ctx.beginPath();
  ctx.ellipse(-10, -51, 8, 12, -0.35, 0, Math.PI * 2);
  ctx.ellipse(10, -51, 8, 12, 0.35, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#0f0d0b";
  ctx.beginPath();
  ctx.ellipse(-9, -51, 3.2, 4.2, 0, 0, Math.PI * 2);
  ctx.ellipse(9, -51, 3.2, 4.2, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#fff7e7";
  ctx.beginPath();
  ctx.arc(-8, -53, 1.1, 0, Math.PI * 2);
  ctx.arc(10, -53, 1.1, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#efd0a0";
  ctx.beginPath();
  ctx.moveTo(0, -48);
  ctx.bezierCurveTo(-9, -44, -11, -35, -5, -30);
  ctx.bezierCurveTo(-2, -27, 2, -27, 5, -30);
  ctx.bezierCurveTo(11, -35, 9, -44, 0, -48);
  ctx.fill();
  ctx.fillStyle = "#1f1712";
  ctx.beginPath();
  ctx.ellipse(0, -37, 4.4, 3.2, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#5f3b28";
  ctx.lineWidth = 1.4;
  ctx.beginPath();
  ctx.moveTo(0, -34);
  ctx.lineTo(0, -30);
  ctx.moveTo(-5, -29);
  ctx.quadraticCurveTo(0, -26, 5, -29);
  ctx.stroke();

  ctx.strokeStyle = "rgba(60, 39, 25, 0.32)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(-12, -24);
  ctx.quadraticCurveTo(0, -18, 12, -24);
  ctx.stroke();

  drawMeerkatAccessory(meerkat);
  drawPartyMeerkatAccessory(meerkat, now);

  ctx.restore();
  drawNameTag(meerkat.x, meerkat.y + 38 * scale, meerkat.name);
  if (now < meerkat.talkUntil) {
    drawSpeech(meerkat.x, meerkat.y - 92 * scale, meerkat.talk);
  }
}

function drawRaptor(now) {
  const raptor = sim.raptor;
  if (!raptor.active) {
    return;
  }

  const wing = Math.sin(now / 90) * 18;
  ctx.save();
  ctx.translate(raptor.x, raptor.y);
  ctx.rotate(raptor.rotation || 0);
  ctx.scale(raptor.direction, 1);
  ctx.fillStyle = "rgba(38, 26, 20, 0.18)";
  ctx.beginPath();
  ctx.ellipse(8, 38, 86, 14, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#4b3326";
  ctx.beginPath();
  ctx.moveTo(-12, 0);
  ctx.quadraticCurveTo(-76, -32 - wing, -132, -4);
  ctx.quadraticCurveTo(-72, 16 + wing * 0.25, -14, 12);
  ctx.quadraticCurveTo(8, 24, 36, 10);
  ctx.quadraticCurveTo(86, -18 - wing, 132, 0);
  ctx.quadraticCurveTo(78, 18 + wing * 0.25, 18, 13);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#76513a";
  ctx.beginPath();
  ctx.ellipse(0, 4, 32, 15, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#f0c45a";
  ctx.beginPath();
  ctx.moveTo(28, 0);
  ctx.lineTo(47, 6);
  ctx.lineTo(28, 12);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = "#111";
  ctx.beginPath();
  ctx.arc(18, -4, 3, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawMeerkatAccessory(meerkat) {
  if (meerkat.id === "byte") {
    ctx.strokeStyle = "#1f242a";
    ctx.lineWidth = 2;
    ctx.strokeRect(-19, -55, 13, 10);
    ctx.strokeRect(6, -55, 13, 10);
    ctx.beginPath();
    ctx.moveTo(-6, -50);
    ctx.lineTo(6, -50);
    ctx.stroke();
    ctx.fillStyle = "#35444f";
    roundRect(-45, -2, 31, 22, 4);
    ctx.fill();
  }
  if (meerkat.id === "pucki") {
    ctx.fillStyle = "#3167b1";
    roundRect(-27, -73, 54, 24, 14);
    ctx.fill();
    ctx.strokeStyle = "#4b2f1d";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(35, -15);
    ctx.lineTo(46, 30);
    ctx.lineTo(64, 34);
    ctx.stroke();
  }
  if (meerkat.id === "sentinel") {
    ctx.fillStyle = "#1f7a83";
    roundRect(21, -53, 22, 10, 5);
    ctx.fill();
  }
  if (meerkat.id === "kruemel") {
    ctx.fillStyle = "#f4c542";
    ctx.beginPath();
    ctx.moveTo(-22, -72);
    ctx.lineTo(-8, -58);
    ctx.lineTo(0, -76);
    ctx.lineTo(9, -58);
    ctx.lineTo(23, -72);
    ctx.lineTo(23, -54);
    ctx.lineTo(-22, -54);
    ctx.closePath();
    ctx.fill();
  }
  if (meerkat.id === "professor") {
    ctx.strokeStyle = "#1f242a";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(10, -50, 8, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = "#d94f43";
    ctx.beginPath();
    ctx.moveTo(-10, -22);
    ctx.lineTo(0, -15);
    ctx.lineTo(10, -22);
    ctx.lineTo(0, -29);
    ctx.closePath();
    ctx.fill();
  }
}

function drawPartyMeerkatAccessory(meerkat, now) {
  if (!isBirthdayComplete()) {
    return;
  }

  const bounce = Math.sin(now / 190 + meerkat.x * 0.01) * 2;
  const hatColors = ["#d94f43", "#f4c542", "#1f7a83", "#3167b1"];
  const partyIndex = Math.abs(meerkat.id.split("").reduce((sum, letter) => sum + letter.charCodeAt(0), 0));

  if (["professor", "byte", "tango", "kompass"].includes(meerkat.id)) {
    drawPartySunglasses();
  }

  if (["pucki", "kruemel", "nuss", "bohne", "motte", "flitzi", "goalie"].includes(meerkat.id)) {
    drawPartyHat(hatColors[partyIndex % hatColors.length], bounce);
  }

  if (["sentinel", "pixel", "tango", "goalie"].includes(meerkat.id)) {
    drawPartyDrink(34, -2 + bounce, partyIndex % 2 === 0 ? "#1f7a83" : "#d94f43");
  }

  if (["byte", "professor", "nuss"].includes(meerkat.id)) {
    drawPartyBottle(-39, -4 + bounce, partyIndex % 2 === 0 ? "#2f7a4b" : "#3167b1");
  }

  if (["flitzi", "kompass", "bohne", "motte"].includes(meerkat.id)) {
    drawPartyNoisemaker(30, -25 + bounce, hatColors[(partyIndex + 1) % hatColors.length]);
  }

  if (["kruemel", "sentinel", "pucki"].includes(meerkat.id)) {
    drawPartyBowtie(hatColors[(partyIndex + 2) % hatColors.length]);
  }
}

function drawPartySunglasses() {
  ctx.fillStyle = "#111418";
  roundRect(-22, -57, 17, 12, 5);
  ctx.fill();
  roundRect(5, -57, 17, 12, 5);
  ctx.fill();
  ctx.strokeStyle = "#111418";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(-5, -51);
  ctx.lineTo(5, -51);
  ctx.stroke();
  ctx.fillStyle = "rgba(255,255,255,0.28)";
  ctx.fillRect(-18, -55, 5, 2);
  ctx.fillRect(9, -55, 5, 2);
}

function drawPartyHat(color, bounce) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(-18, -68 + bounce);
  ctx.lineTo(0, -100 + bounce);
  ctx.lineTo(18, -68 + bounce);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = "rgba(255,255,255,0.42)";
  ctx.beginPath();
  ctx.moveTo(-8, -72 + bounce);
  ctx.lineTo(0, -91 + bounce);
  ctx.lineTo(8, -72 + bounce);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = "#f4c542";
  ctx.beginPath();
  ctx.arc(0, -102 + bounce, 5, 0, Math.PI * 2);
  ctx.fill();
}

function drawPartyDrink(x, y, color) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(-0.18);
  ctx.strokeStyle = "#6f472d";
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(-7, -2);
  ctx.lineTo(-15, 18);
  ctx.stroke();
  ctx.fillStyle = "rgba(255,255,255,0.86)";
  roundRect(-6, -23, 16, 25, 4);
  ctx.fill();
  ctx.fillStyle = color;
  ctx.fillRect(-4, -8, 12, 8);
  ctx.strokeStyle = "rgba(32,36,42,0.35)";
  ctx.lineWidth = 1.2;
  ctx.strokeRect(-6, -23, 16, 25);
  ctx.restore();
}

function drawPartyBottle(x, y, color) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(0.28);
  ctx.strokeStyle = "#6f472d";
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(8, 2);
  ctx.lineTo(18, 20);
  ctx.stroke();
  ctx.fillStyle = color;
  roundRect(-7, -26, 12, 29, 4);
  ctx.fill();
  ctx.fillStyle = "#f4c542";
  ctx.fillRect(-5, -18, 8, 5);
  ctx.fillStyle = "#d7ed9c";
  ctx.fillRect(-4, -32, 6, 8);
  ctx.restore();
}

function drawPartyNoisemaker(x, y, color) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(-0.15);
  ctx.strokeStyle = "#6f472d";
  ctx.lineWidth = 4;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(-14, 12);
  ctx.lineTo(-4, 2);
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(-2, -2);
  ctx.lineTo(24, -12);
  ctx.lineTo(27, 5);
  ctx.lineTo(-2, 6);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = "#f4c542";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(5, -3);
  ctx.lineTo(8, 4);
  ctx.moveTo(14, -7);
  ctx.lineTo(17, 3);
  ctx.stroke();
  ctx.restore();
}

function drawPartyBowtie(color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(-4, -23);
  ctx.lineTo(-20, -31);
  ctx.lineTo(-20, -15);
  ctx.closePath();
  ctx.moveTo(4, -23);
  ctx.lineTo(20, -31);
  ctx.lineTo(20, -15);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = "#20242a";
  ctx.beginPath();
  ctx.arc(0, -23, 4, 0, Math.PI * 2);
  ctx.fill();
}

function drawFood(food) {
  ctx.save();
  ctx.translate(food.x, food.y);
  const bounce = food.dragging ? 1.22 : 1 + Math.sin(food.age * 8) * 0.03;
  ctx.scale(bounce, bounce);
  ctx.fillStyle = "rgba(43, 28, 18, 0.18)";
  ellipse(0, 12, 18, 5);
  drawFoodIcon(food.type, 0, 0, 1);
  ctx.restore();
}

function drawFoodIcon(type, x, y, scale) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);
  if (type === "bug") {
    ctx.fillStyle = "#2f7a4b";
    ellipse(0, 0, 13, 11);
    ctx.strokeStyle = "#173f2a";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(-9, -4);
    ctx.lineTo(-20, -10);
    ctx.moveTo(9, -4);
    ctx.lineTo(20, -10);
    ctx.stroke();
  }
  if (type === "coffee") {
    ctx.fillStyle = "#7b4f36";
    ellipse(0, 0, 13, 15);
    ctx.strokeStyle = "#4a2d20";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, 0, 7, -0.35 * Math.PI, 0.35 * Math.PI);
    ctx.stroke();
  }
  if (type === "cake") {
    ctx.fillStyle = "#f6d75f";
    roundRect(-14, -6, 28, 20, 4);
    ctx.fill();
    ctx.fillStyle = "#ffeff2";
    roundRect(-14, -14, 28, 10, 4);
    ctx.fill();
    ctx.fillStyle = "#d94f43";
    ctx.fillRect(-14, -3, 28, 5);
  }
  if (type === "energy") {
    ctx.fillStyle = "#3167b1";
    roundRect(-13, -14, 26, 28, 4);
    ctx.fill();
    ctx.fillStyle = "#f4c542";
    ctx.beginPath();
    ctx.moveTo(12, -14);
    ctx.lineTo(-12, 14);
    ctx.lineTo(12, 14);
    ctx.closePath();
    ctx.fill();
  }
  if (type === "seed") {
    ctx.fillStyle = "#e6cf55";
    ctx.beginPath();
    ctx.ellipse(0, 0, 12, 15, 0.6, 0, Math.PI * 2);
    ctx.fill();
  }
  if (type === "puck") {
    ctx.fillStyle = "#11161c";
    ellipse(0, 4, 14, 7);
    ctx.fillStyle = "#20242a";
    ellipse(0, -2, 14, 7);
  }
  ctx.restore();
}

function drawNameTag(x, y, text) {
  ctx.save();
  ctx.font = "800 12px system-ui, sans-serif";
  const metrics = ctx.measureText(text);
  const boxWidth = metrics.width + 16;
  ctx.fillStyle = "rgba(32,36,42,0.82)";
  roundRect(x - boxWidth / 2, y, boxWidth, 20, 5);
  ctx.fill();
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, x, y + 10);
  ctx.restore();
}

function drawSpeech(x, y, text) {
  const shortText = text.length > 34 ? `${text.slice(0, 33)}...` : text;
  ctx.save();
  ctx.font = "800 12px system-ui, sans-serif";
  const metrics = ctx.measureText(shortText);
  const boxWidth = Math.min(metrics.width + 18, 235);
  ctx.fillStyle = "#ffffff";
  ctx.strokeStyle = "rgba(32,36,42,0.18)";
  ctx.lineWidth = 2;
  roundRect(x - boxWidth / 2, y - 18, boxWidth, 28, 7);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#20242a";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(shortText, x, y - 4);
  ctx.restore();
}

function drawPop(pop) {
  const progress = pop.age / 0.65;
  ctx.save();
  ctx.globalAlpha = 1 - progress;
  ctx.strokeStyle = pop.color;
  ctx.lineWidth = 3;
  for (let i = 0; i < 8; i += 1) {
    const angle = (Math.PI * 2 * i) / 8;
    const inner = progress * 10;
    const outer = 18 + progress * 34;
    ctx.beginPath();
    ctx.moveTo(pop.x + Math.cos(angle) * inner, pop.y + Math.sin(angle) * inner);
    ctx.lineTo(pop.x + Math.cos(angle) * outer, pop.y + Math.sin(angle) * outer);
    ctx.stroke();
  }
  ctx.restore();
}

function drawCrumb(crumb) {
  ctx.save();
  ctx.globalAlpha = 1 - crumb.age / 0.9;
  ctx.fillStyle = crumb.color;
  circle(crumb.x, crumb.y, 3);
  ctx.restore();
}

function drawSun(x, y) {
  ctx.fillStyle = "rgba(244,197,66,0.22)";
  circle(x, y, 55);
  ctx.fillStyle = "#f4c542";
  circle(x, y, 40);
}

function drawCloud(x, y, scale) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);
  ctx.fillStyle = "rgba(255,255,255,0.76)";
  ellipse(0, 8, 55, 18);
  circle(-18, -4, 20);
  circle(12, -10, 26);
  ctx.restore();
}

function drawBurrow(x, y, radius) {
  ctx.fillStyle = "#8b654b";
  ctx.beginPath();
  ctx.arc(x, y, radius, Math.PI, 0);
  ctx.lineTo(x + radius, y);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = "#231812";
  ctx.beginPath();
  ctx.arc(x, y + 6, radius * 0.62, Math.PI, 0);
  ctx.lineTo(x + radius * 0.62, y + 6);
  ctx.closePath();
  ctx.fill();
}

function drawGoal(x, y) {
  ctx.strokeStyle = "#3167b1";
  ctx.lineWidth = 5;
  ctx.strokeRect(x, y, 92, 70);
  ctx.lineWidth = 2;
  ctx.globalAlpha = 0.45;
  for (let i = 1; i < 4; i += 1) {
    ctx.beginPath();
    ctx.moveTo(x + i * 23, y);
    ctx.lineTo(x + i * 23, y + 70);
    ctx.stroke();
  }
  for (let i = 1; i < 3; i += 1) {
    ctx.beginPath();
    ctx.moveTo(x, y + i * 23);
    ctx.lineTo(x + 92, y + i * 23);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
}

function drawGrass(x, y) {
  ctx.strokeStyle = "#2f7a4b";
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  for (let i = -2; i <= 2; i += 1) {
    ctx.beginPath();
    ctx.moveTo(x, y + 28);
    ctx.lineTo(x + i * 9, y + Math.abs(i) * 4);
    ctx.stroke();
  }
}

function drawPebble(x, y, i) {
  ctx.fillStyle = i % 3 === 0 ? "rgba(128,83,49,0.28)" : "rgba(255,230,178,0.24)";
  ellipse(x, y, 8 + (i % 5), 4 + (i % 3));
}

function drawTunnel(now) {
  const t = tunnelCtx;
  t.clearRect(0, 0, tunnelWidth, tunnelHeight);
  const gradient = t.createLinearGradient(0, 0, 0, tunnelHeight);
  gradient.addColorStop(0, "#815a3e");
  gradient.addColorStop(1, "#34211a");
  t.fillStyle = gradient;
  t.fillRect(0, 0, tunnelWidth, tunnelHeight);

  drawTunnelPath(
    [
      [0.16, 0.16],
      [0.3, 0.28],
      [0.5, 0.28],
      [0.7, 0.28],
      [0.82, 0.16],
    ],
    78,
  );
  drawTunnelPath(
    [
      [0.3, 0.28],
      [0.18, 0.44],
      [0.18, 0.56],
      [0.28, 0.72],
    ],
    64,
  );
  drawTunnelPath(
    [
      [0.5, 0.28],
      [0.5, 0.45],
      [0.42, 0.58],
      [0.5, 0.82],
    ],
    66,
  );
  drawTunnelPath(
    [
      [0.7, 0.28],
      [0.83, 0.42],
      [0.82, 0.62],
      [0.66, 0.58],
    ],
    64,
  );
  drawTunnelPath(
    [
      [0.18, 0.56],
      [0.34, 0.58],
      [0.5, 0.58],
      [0.66, 0.58],
      [0.82, 0.62],
    ],
    72,
  );

  drawTunnelTexture();
  drawTunnelEasterEggs(now);

  sim.meerkats
    .filter((meerkat) => meerkat.location === "tunnel")
    .forEach((meerkat) => drawTunnelMeerkat(meerkat, now));
}

function drawTunnelPath(points, widthPx, glow = "rgba(255, 210, 130, 0.25)") {
  const t = tunnelCtx;
  t.save();
  t.lineCap = "round";
  t.lineJoin = "round";
  t.strokeStyle = "rgba(38, 24, 18, 0.96)";
  t.lineWidth = widthPx;
  t.beginPath();
  points.forEach(([x, y], index) => {
    const px = x * tunnelWidth;
    const py = y * tunnelHeight;
    if (index === 0) {
      t.moveTo(px, py);
    } else {
      t.lineTo(px, py);
    }
  });
  t.stroke();
  t.strokeStyle = glow;
  t.lineWidth = Math.max(10, widthPx * 0.18);
  t.stroke();
  t.restore();
}

function drawTunnelTexture() {
  const t = tunnelCtx;
  for (let i = 0; i < 70; i += 1) {
    const x = ((i * 97) % Math.floor(tunnelWidth + 80)) - 40;
    const y = ((i * 151) % Math.floor(tunnelHeight + 80)) - 40;
    t.fillStyle = i % 2 ? "rgba(255, 226, 168, 0.08)" : "rgba(28, 17, 12, 0.16)";
    t.beginPath();
    t.ellipse(x, y, 8 + (i % 9), 4 + (i % 4), 0, 0, Math.PI * 2);
    t.fill();
  }
}

function drawTunnelRoomGlow(roomId, x, y, w, h) {
  if (!state.unlockedRooms.includes(roomId)) return;
  const t = tunnelCtx;
  const cx = (x + w / 2) * tunnelWidth;
  const cy = (y + h / 2) * tunnelHeight;
  const radius = Math.max(w * tunnelWidth, h * tunnelHeight);
  const gradient = t.createRadialGradient(cx, cy, 5, cx, cy, radius);
  gradient.addColorStop(0, "rgba(244, 197, 66, 0.36)");
  gradient.addColorStop(1, "rgba(244, 197, 66, 0)");
  t.fillStyle = gradient;
  t.fillRect(
    (x - 0.04) * tunnelWidth,
    (y - 0.04) * tunnelHeight,
    (w + 0.08) * tunnelWidth,
    (h + 0.08) * tunnelHeight,
  );
}

function drawTunnelEasterEggs(now) {
  drawTunnelSideRoom(0.2, 0.08, 0.18, 0.15, "rgba(74, 158, 175, 0.22)");
  drawDataCenterEgg(0.29 * tunnelWidth, 0.145 * tunnelHeight, now);

  drawTunnelSideRoom(0.74, 0.08, 0.18, 0.15, "rgba(49, 103, 177, 0.2)");
  drawHockeyEgg(0.83 * tunnelWidth, 0.15 * tunnelHeight);

  drawTunnelSideRoom(0.1, 0.68, 0.2, 0.15, "rgba(244, 197, 66, 0.18)");
  drawBeerCellarEgg(0.2 * tunnelWidth, 0.75 * tunnelHeight);
}

function drawTunnelSideRoom(x, y, w, h, glow) {
  const t = tunnelCtx;
  const px = x * tunnelWidth;
  const py = y * tunnelHeight;
  const pw = w * tunnelWidth;
  const ph = h * tunnelHeight;
  const radius = Math.max(pw, ph);
  const gradient = t.createRadialGradient(px + pw / 2, py + ph / 2, 8, px + pw / 2, py + ph / 2, radius);
  gradient.addColorStop(0, glow);
  gradient.addColorStop(1, "rgba(255, 210, 130, 0)");
  t.fillStyle = gradient;
  t.fillRect(px - pw * 0.25, py - ph * 0.25, pw * 1.5, ph * 1.5);

  t.save();
  t.fillStyle = "rgba(30, 19, 14, 0.72)";
  t.strokeStyle = "rgba(255, 218, 150, 0.18)";
  t.lineWidth = 3;
  roundRectFor(t, px, py, pw, ph, 18);
  t.fill();
  t.stroke();
  t.restore();
}

function drawDataCenterEgg(cx, cy, now) {
  const t = tunnelCtx;
  const rackW = Math.max(24, tunnelWidth * 0.032);
  const rackH = Math.max(58, tunnelHeight * 0.09);
  t.save();
  t.translate(cx, cy);
  for (let i = -1; i <= 1; i += 1) {
    const x = i * (rackW + 8);
    t.fillStyle = "#20242a";
    roundRectFor(t, x - rackW / 2, -rackH / 2, rackW, rackH, 5);
    t.fill();
    t.fillStyle = "#35444f";
    for (let row = 0; row < 5; row += 1) {
      t.fillRect(x - rackW / 2 + 4, -rackH / 2 + 8 + row * 10, rackW - 8, 4);
    }
    for (let led = 0; led < 4; led += 1) {
      t.fillStyle = Math.sin(now / 180 + i * 2 + led) > 0 ? "#79ff9f" : "#1f7a83";
      t.beginPath();
      t.arc(x + rackW / 2 - 7, -rackH / 2 + 9 + led * 13, 2.2, 0, Math.PI * 2);
      t.fill();
    }
  }
  t.strokeStyle = "rgba(121, 255, 159, 0.34)";
  t.lineWidth = 1.5;
  for (let i = -1; i <= 1; i += 1) {
    t.beginPath();
    t.moveTo(i * (rackW + 8), rackH / 2 - 2);
    t.quadraticCurveTo(0, rackH / 2 + 18 + i * 4, -i * 14, rackH / 2 + 26);
    t.stroke();
  }
  t.restore();
}

function drawHockeyEgg(cx, cy) {
  const t = tunnelCtx;
  t.save();
  t.translate(cx, cy);
  t.strokeStyle = "#d7c2a4";
  t.lineWidth = 5;
  t.lineCap = "round";
  t.beginPath();
  t.moveTo(-34, -28);
  t.lineTo(9, 28);
  t.lineTo(31, 20);
  t.moveTo(31, -29);
  t.lineTo(-8, 29);
  t.lineTo(-31, 22);
  t.stroke();
  t.fillStyle = "#111418";
  t.beginPath();
  t.ellipse(0, 33, 19, 7, 0, 0, Math.PI * 2);
  t.fill();
  t.fillStyle = "#3167b1";
  t.fillRect(-37, -32, 13, 7);
  t.fillRect(24, -33, 13, 7);
  t.restore();
}

function drawBeerCellarEgg(cx, cy) {
  const t = tunnelCtx;
  t.save();
  t.translate(cx, cy);
  t.fillStyle = "rgba(28, 17, 12, 0.72)";
  roundRectFor(t, -52, 8, 104, 12, 5);
  t.fill();
  t.fillStyle = "#6d4b36";
  roundRectFor(t, -44, -20, 88, 10, 4);
  t.fill();
  const bottles = [-36, -20, -4, 15, 32];
  bottles.forEach((x, index) => {
    t.fillStyle = index % 2 ? "#2f7a4b" : "#3167b1";
    roundRectFor(t, x - 5, -39, 10, 28, 4);
    t.fill();
    t.fillStyle = "#d7ed9c";
    t.fillRect(x - 3, -47, 6, 9);
    t.fillStyle = "#f4c542";
    t.fillRect(x - 4, -27, 8, 5);
  });
  t.fillStyle = "#f4c542";
  t.beginPath();
  t.ellipse(0, 22, 22, 9, 0, 0, Math.PI * 2);
  t.fill();
  t.fillStyle = "#fff9ea";
  t.beginPath();
  t.arc(9, 17, 5, 0, Math.PI * 2);
  t.fill();
  t.restore();
}

function drawTunnelMeerkat(meerkat) {
  const t = tunnelCtx;
  const bob = Math.sin(meerkat.stride) * 3;
  const sway = Math.sin(meerkat.stride * 0.75) * 0.05;
  t.save();
  t.translate(meerkat.tunnelX, meerkat.tunnelY + bob);
  t.rotate(sway);
  t.fillStyle = "rgba(0,0,0,0.22)";
  t.beginPath();
  t.ellipse(0, 23, 27, 8, 0, 0, Math.PI * 2);
  t.fill();

  t.fillStyle = "#8d5b39";
  t.beginPath();
  t.ellipse(-17, -34, 8, 10, -0.35, 0, Math.PI * 2);
  t.ellipse(17, -34, 8, 10, 0.35, 0, Math.PI * 2);
  t.fill();
  t.fillStyle = "#3a281e";
  t.beginPath();
  t.ellipse(-17, -34, 4, 6, -0.35, 0, Math.PI * 2);
  t.ellipse(17, -34, 4, 6, 0.35, 0, Math.PI * 2);
  t.fill();

  t.fillStyle = "#a56f45";
  t.beginPath();
  t.moveTo(-26, -12);
  t.bezierCurveTo(-32, 14, -21, 37, -5, 40);
  t.bezierCurveTo(10, 43, 26, 25, 27, -2);
  t.bezierCurveTo(29, -27, 15, -45, -1, -46);
  t.bezierCurveTo(-15, -47, -24, -33, -26, -12);
  t.fill();
  t.fillStyle = "rgba(55, 35, 22, 0.2)";
  t.beginPath();
  t.moveTo(-22, -16);
  t.bezierCurveTo(-27, 8, -20, 29, -7, 37);
  t.bezierCurveTo(-12, 12, -10, -12, -2, -42);
  t.fill();
  t.fillStyle = "#e6bd83";
  t.beginPath();
  t.ellipse(1, 9, 14, 26, 0, 0, Math.PI * 2);
  t.fill();

  t.strokeStyle = "#6f472d";
  t.lineWidth = 5;
  t.lineCap = "round";
  t.beginPath();
  t.moveTo(-18, -5);
  t.quadraticCurveTo(-27, 8, -23, 21);
  t.moveTo(18, -5);
  t.quadraticCurveTo(27, 8, 23, 20);
  t.stroke();

  t.fillStyle = "#c78a58";
  t.beginPath();
  t.moveTo(0, -44);
  t.bezierCurveTo(-21, -41, -28, -25, -21, -12);
  t.bezierCurveTo(-13, 2, 13, 2, 21, -12);
  t.bezierCurveTo(28, -26, 21, -41, 0, -44);
  t.fill();
  t.fillStyle = "#e0ad75";
  t.beginPath();
  t.moveTo(0, -36);
  t.bezierCurveTo(-11, -31, -13, -19, -7, -11);
  t.bezierCurveTo(-3, -6, 3, -6, 7, -11);
  t.bezierCurveTo(13, -19, 11, -31, 0, -36);
  t.fill();

  t.fillStyle = "rgba(42, 29, 21, 0.75)";
  t.beginPath();
  t.ellipse(-8, -25, 7, 10, -0.35, 0, Math.PI * 2);
  t.ellipse(8, -25, 7, 10, 0.35, 0, Math.PI * 2);
  t.fill();
  t.fillStyle = "#0f0d0b";
  t.beginPath();
  t.ellipse(-7, -25, 2.6, 3.5, 0, 0, Math.PI * 2);
  t.ellipse(7, -25, 2.6, 3.5, 0, 0, Math.PI * 2);
  t.fill();
  t.fillStyle = "#fff7e7";
  t.beginPath();
  t.arc(-6, -27, 0.9, 0, Math.PI * 2);
  t.arc(8, -27, 0.9, 0, Math.PI * 2);
  t.fill();

  t.fillStyle = "#efd0a0";
  t.beginPath();
  t.moveTo(0, -23);
  t.bezierCurveTo(-7, -20, -8, -13, -4, -9);
  t.bezierCurveTo(-1, -7, 1, -7, 4, -9);
  t.bezierCurveTo(8, -13, 7, -20, 0, -23);
  t.fill();
  t.fillStyle = "#1f1712";
  t.beginPath();
  t.ellipse(0, -14, 3.5, 2.7, 0, 0, Math.PI * 2);
  t.fill();
  t.strokeStyle = "#5f3b28";
  t.lineWidth = 1.1;
  t.beginPath();
  t.moveTo(0, -11);
  t.lineTo(0, -8);
  t.moveTo(-4, -7);
  t.quadraticCurveTo(0, -5, 4, -7);
  t.stroke();

  t.fillStyle = "rgba(32,36,42,0.82)";
  t.font = "800 10px system-ui, sans-serif";
  const text = meerkat.name.replace("Prof. Buddel", "Prof.");
  const metrics = t.measureText(text);
  roundRectFor(t, -metrics.width / 2 - 6, 28, metrics.width + 12, 17, 5);
  t.fill();
  t.fillStyle = "#fff";
  t.textAlign = "center";
  t.textBaseline = "middle";
  t.fillText(text, 0, 36);
  t.restore();
}

function showRoom(roomId) {
  const isUnlocked = state.unlockedRooms.includes(roomId);
  const room = rooms[roomId];
  roomPanel.classList.toggle("is-final", roomId === "secret" && isUnlocked);
  roomPanel.innerHTML = `<h3>${isUnlocked ? room.title : "Kammer verschlossen"}</h3><p>${
    isUnlocked
      ? room.text
      : "Hier liegt noch Sand im Weg. Fuettere das passende Erdmaennchen im Gehege."
  }</p>`;
}

function updateScrollMode() {
  const tunnelTop = document.querySelector("#tunnels-view").getBoundingClientRect().top;
  const inTunnel = tunnelTop < window.innerHeight * 0.45;
  document.body.classList.toggle("viewing-enclosure", !inTunnel);
  document.body.classList.toggle("viewing-tunnels", inTunnel);
}

function updateUi() {
  const unlockedRooms = [...new Set(state.unlockedRooms)];
  specialCount.textContent = `${state.specials.length} / ${specialMeerkatCount()} Spezialreaktionen`;
  roomCount.textContent =
    unlockedRooms.length === 1 ? "1 Kammer" : `${unlockedRooms.length} Kammern`;
  foodButtons.forEach((button) => {
    const foodType = button.dataset.food;
    const isComplete = isFoodComplete(foodType);
    button.classList.toggle("is-selected", button.dataset.food === state.selectedFood);
    button.classList.toggle("is-complete", isComplete);
    button.title = isComplete
      ? `${foodTypes[foodType].label}: erledigt`
      : `${foodTypes[foodType].label} auswaehlen`;
  });
  roomButtons.forEach((button) => {
    button.classList.toggle("is-unlocked", unlockedRooms.includes(button.dataset.room));
  });
  tunnelStage.classList.toggle("has-secret", unlockedRooms.includes("secret"));
  document.body.classList.toggle("party-complete", isBirthdayComplete());
}

function specialMeerkatCount() {
  return meerkatConfigs.filter((meerkat) => meerkat.special).length;
}

function isFoodComplete(type) {
  const matchingSpecials = meerkatConfigs.filter(
    (meerkat) => meerkat.special && meerkat.favorites.includes(type),
  );
  return (
    matchingSpecials.length > 0 &&
    matchingSpecials.every((meerkat) => state.specials.includes(meerkat.id))
  );
}

function resetGame() {
  state = defaultState();
  sim.foods = [];
  sim.crumbs = [];
  sim.pops = [];
  sim.partyStartedAt = 0;
  sim.raptor.active = false;
  sim.raptor.mode = "idle";
  sim.raptor.vx = 0;
  sim.raptor.vy = 0;
  sim.raptor.rotation = 0;
  sim.raptor.nextAt = performance.now() + 9000;
  sim.raptor.alarmUntil = 0;
  sim.meerkats.forEach((meerkat, index) => {
    const config = meerkatConfigs.find((item) => item.id === meerkat.id);
    meerkat.x = config.x * width;
    meerkat.y = groundTop() + config.y * playableHeight();
    meerkat.vx = 0;
    meerkat.vy = 0;
    meerkat.location = "surface";
    meerkat.targetFood = null;
    meerkat.talk = "";
    meerkat.nextBurrowAt = performance.now() + 3000 + index * 1800;
    setRandomWander(meerkat, performance.now());
  });
  saveState();
  updateUi();
  showRoom("sleep");
  updateScrollMode();
  reactionText.textContent = "Fortschritt zurueckgesetzt. Ziehe Futter ins Gehege.";
}

function circle(x, y, radius) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
}

function ellipse(x, y, rx, ry) {
  ctx.beginPath();
  ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
  ctx.fill();
}

function roundRect(x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function roundRectFor(targetCtx, x, y, w, h, r) {
  targetCtx.beginPath();
  targetCtx.moveTo(x + r, y);
  targetCtx.lineTo(x + w - r, y);
  targetCtx.quadraticCurveTo(x + w, y, x + w, y + r);
  targetCtx.lineTo(x + w, y + h - r);
  targetCtx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  targetCtx.lineTo(x + r, y + h);
  targetCtx.quadraticCurveTo(x, y + h, x, y + h - r);
  targetCtx.lineTo(x, y + r);
  targetCtx.quadraticCurveTo(x, y, x + r, y);
  targetCtx.closePath();
}

function distance(x1, y1, x2, y2) {
  return Math.hypot(x2 - x1, y2 - y1);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function random(min, max) {
  return min + Math.random() * (max - min);
}

init();
