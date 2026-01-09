/* THEME TOGGLE */
const toggle = document.getElementById("themeToggle");
const body = document.body;

if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
  toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
  body.classList.toggle("light");
  const isLight = body.classList.contains("light");
  toggle.textContent = isLight ? "☀️" : "🌙";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

/* SCROLL PROGRESS */
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  document.getElementById("progressBar").style.width =
    (scrollTop / height) * 100 + "%";
});

/* SCROLL REVEAL */
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

/* CURSOR GLOW */
const glow = document.querySelector(".cursor-glow");
window.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

/* PROJECT MODAL */
const modal = document.getElementById("projectModal");
const title = document.getElementById("modalTitle");
const desc = document.getElementById("modalDesc");
const closeBtn = document.querySelector(".close");

const projectData = {
  confession: {
    title: "Confession Wall Application",
    desc: " Built a full-stack application using Java 17, Spring Boot,Hibernate (JPA), and MySQL enabling anonymous posts withimage/video uploads. Designed RESTful APIs for content moderation, JWT-based admin authentication, and role-based access. Optimized database queries and pagination to improve performance and ensure secure, scalable content management.",
    github: "https://github.com/asha1834/AnonymousConfessionWall.git",
  },
  iot: {
    title: "IoT Fire Extinguishing Robot",
    desc: "Designed and developed an autonomous fire-response robot using ESP32, flame/smoke sensors, and motor control systems. Implemented real-time fire detection, obstacle navigation, and automated water-based suppression. Integrated Blynk IoT for live monitoring and alerts, improving safety response through remote visibility and automation.",
    github: "https://github.com/asha1834/FireExtinguishingRobot.git",
  },
  vision: {
    title: "Real Time Object Detection",
    desc: "Built a computer vision system using Python, OpenCV, YOLOv3, and MobileNet-SSD to detect objects in images, videos, and live webcam feeds. Applied confidence filtering and Non-Maximum Suppression (NMS) to enhance detection accuracy. Optimized inference pipelines with FPS monitoring for real-time performance in production-like environments.",
    github: "https://github.com/asha1834/ObjectDetection.git",
  },
  tracker: {
    title: "Smart Grocery Expense Tracker",
    desc: " Developed a Java-based inventory and expense management system using JSP, Servlets, JDBC, and MySQL with full CRUD functionality. Implemented MVC architecture and DAO pattern for clean code structure and maintainability. Added features such as search, sorting, and expiry tracking to improve data accuracy and user efficiency",
    github: "https://github.com/asha1834/GroceryExpenseTracker.git",
  },
};

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", () => {
    const data = projectData[card.dataset.project];
    title.textContent = data.title;
    desc.textContent = data.desc;

    const githubBtn = document.getElementById("githubLink");

    githubBtn.href = data.github;
    githubBtn.style.display = data.github ? "inline-block" : "none";

    modal.style.display = "flex";
  });
});

closeBtn.onclick = () => (modal.style.display = "none");
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};
