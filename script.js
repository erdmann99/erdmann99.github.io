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
    name: "Pixel",
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
    name: "Flitzi",
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
    name: "Motte",
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
    name: "Goalie",
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
    name: "Tango",
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
  meerkats: [],
  raptor: {
    active: false,
    x: 0,
    y: 0,
    vx: 0,
    direction: 1,
    nextAt: performance.now() + 9000,
    alarmUntil: 0,
  },
};

const specialCount = document.querySelector("#special-count");
const roomCount = document.querySelector("#room-count");
const reactionText = document.querySelector("#reaction-text");
const roomPanel = document.querySelector("#room-panel");
const tunnelStage = document.querySelector(".tunnel-stage");
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
    button.addEventListener("pointerdown", (event) => startFoodDrag(event, button.dataset.food));
  });

  canvas.addEventListener("pointerdown", onCanvasPointerDown);
  canvas.addEventListener("pointermove", onCanvasPointerMove);
  canvas.addEventListener("pointerup", onCanvasPointerUp);
  canvas.addEventListener("pointercancel", onCanvasPointerUp);

  roomButtons.forEach((button) => {
    button.addEventListener("click", () => showRoom(button.dataset.room));
  });

  document.querySelector("#reset-progress").addEventListener("click", resetGame);
}

function selectFood(type) {
  state.selectedFood = type;
  saveState();
  updateUi();
  reactionText.textContent = `${foodTypes[type].label} ausgewaehlt. Tippe ins Gehege oder ziehe es hinein.`;
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
  grabbedFood = findFoodAt(point.x, point.y);
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

  reactionText.textContent = `${meerkat.name}: ${meerkat.reaction}`;
  saveState();
  updateUi();
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
  if (!raptor.active && now > raptor.nextAt) {
    startRaptor(now);
  }
  if (!raptor.active) {
    return;
  }

  raptor.x += raptor.vx * dt;
  raptor.y += Math.sin(now / 180) * 0.35;
  if (
    (raptor.direction > 0 && raptor.x > width + 160) ||
    (raptor.direction < 0 && raptor.x < -160)
  ) {
    raptor.active = false;
    raptor.nextAt = now + random(17000, 30000);
    raptor.alarmUntil = now + 1600;
  }
}

function startRaptor(now) {
  const raptor = sim.raptor;
  raptor.active = true;
  raptor.direction = Math.random() > 0.5 ? 1 : -1;
  raptor.x = raptor.direction > 0 ? -150 : width + 150;
  raptor.y = random(58, Math.max(86, groundTop() - 80));
  raptor.vx = raptor.direction * random(185, 260);
  raptor.alarmUntil = now + 4200;

  const sentinel = sim.meerkats.find((meerkat) => meerkat.id === "sentinel") || sim.meerkats[0];
  sentinel.talk = "GREIFVOGEL!";
  sentinel.talkUntil = now + 2500;
  reactionText.textContent = "Sentinel schlägt Alarm: Greifvogel über dem Gehege!";

  sim.meerkats.forEach((meerkat) => {
    if (meerkat.location === "surface" || meerkat.location === "entering") {
      sendToBurrow(meerkat, now, true);
    }
  });
}

function isRaptorDanger() {
  return sim.raptor.active || performance.now() < sim.raptor.alarmUntil;
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
  ctx.save();
  ctx.translate(meerkat.x, meerkat.y);
  ctx.scale(facing * scale, scale);

  ctx.fillStyle = "rgba(43, 28, 18, 0.22)";
  ellipse(0, 25, 48, 13);
  ctx.rotate(eating ? Math.sin(now / 90) * 0.04 : walk * 0.035);

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
  drawTunnelRoomGlow("sleep", 0.08, 0.37, 0.2, 0.18);
  drawTunnelRoomGlow("server", 0.2, 0.07, 0.18, 0.15);
  drawTunnelRoomGlow("hockey", 0.74, 0.07, 0.18, 0.15);
  drawTunnelRoomGlow("storage", 0.09, 0.68, 0.2, 0.15);
  drawTunnelRoomGlow("birthday", 0.42, 0.69, 0.18, 0.15);
  drawTunnelRoomGlow("family", 0.73, 0.69, 0.19, 0.15);
  if (state.unlockedRooms.includes("secret")) {
    drawTunnelPath(
      [
        [0.5, 0.28],
        [0.5, 0.16],
        [0.5, 0.08],
      ],
      46,
      "rgba(255, 214, 85, 0.85)",
    );
    drawTunnelRoomGlow("secret", 0.42, 0.02, 0.16, 0.13);
  }

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
    button.classList.toggle("is-selected", button.dataset.food === state.selectedFood);
  });
  roomButtons.forEach((button) => {
    button.classList.toggle("is-unlocked", unlockedRooms.includes(button.dataset.room));
  });
  tunnelStage.classList.toggle("has-secret", unlockedRooms.includes("secret"));
}

function specialMeerkatCount() {
  return meerkatConfigs.filter((meerkat) => meerkat.special).length;
}

function resetGame() {
  state = defaultState();
  sim.foods = [];
  sim.crumbs = [];
  sim.pops = [];
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
