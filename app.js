const products = [
  {
    title: "Advanced CCTV Camera",
    category: "Surveillance Systems",
    icon: "fa-solid fa-video",
    image: "images/product-cctv.png",
    summary: "Norden-inspired surveillance range for ports, bases, vessels and secure facilities.",
    description:
      "Advanced CCTV camera solutions for high quality security system supply in Bangladesh, including PTZ, dome, bullet and thermal-ready surveillance planning for critical maritime sites.",
    features: ["IP camera and NVR ecosystem", "Port, vessel and perimeter monitoring", "Suitable for control room integration"],
  },
  {
    title: "Yaesu Radio Communication Set",
    category: "Marine Communication",
    icon: "fa-solid fa-tower-broadcast",
    image: "images/product-radio.png",
    summary: "Reliable radio sets for coordinated maritime, air and land operational teams.",
    description:
      "Yaesu radio communication sets support disciplined voice communication for vessels, field teams, maintenance crews and defence support environments.",
    features: ["Clear voice communication", "Handheld and base-station planning", "Operational accessory sourcing"],
  },
  {
    title: "Garmin GPS",
    category: "Navigation",
    icon: "fa-solid fa-location-crosshairs",
    image: "images/product-gps.png",
    summary: "Trusted GPS solutions for marine navigation, tracking and field movement.",
    description:
      "Garmin GPS devices help marine and field teams maintain accurate positioning, route planning and operational awareness across Bangladesh waterways and land routes.",
    features: ["Marine and handheld GPS options", "Navigation and field tracking support", "Quotation based on mission requirement"],
  },
  {
    title: "HF Marine Grade Antenna",
    category: "Antenna Systems",
    icon: "fa-solid fa-signal",
    image: "images/product-antenna.png",
    summary: "HF antenna supply for long-range marine and defence communication networks.",
    description:
      "Marine grade HF antennas are selected for corrosion resistance, range performance and dependable communication support in harsh maritime conditions.",
    features: ["HF and marine communication planning", "Rugged installation accessories", "Suitable for vessel and shore stations"],
  },
  {
    title: "Furuno GPS",
    category: "Navigation",
    icon: "fa-solid fa-compass",
    image: "images/product-gps.png",
    summary: "Professional Furuno navigation equipment for bridge and vessel operations.",
    description:
      "Furuno GPS and navigation solutions support precise vessel movement, bridge operation and marine technology requirements in Bangladesh.",
    features: ["Bridge operation support", "Marine GPS and chartplotter sourcing", "Global brand reliability"],
  },
  {
    title: "Fire Alarm System",
    category: "Safety Systems",
    icon: "fa-solid fa-fire-extinguisher",
    image: "images/product-fire-alarm.png",
    summary: "Fire detection and alarm systems for facilities, vessels and equipment rooms.",
    description:
      "Fire alarm systems help protect defence facilities, marine installations, control rooms and vessel compartments with dependable detection and response alerts.",
    features: ["Detection and alarm panel options", "Facility and vessel use cases", "Support for compliant safety planning"],
  },
  {
    title: "PA System",
    category: "Public Address",
    icon: "fa-solid fa-bullhorn",
    image: "images/product-pa-system.png",
    summary: "Ship PA, voice announcement and emergency broadcast systems.",
    description:
      "Marine PA systems provide clear operational announcements, emergency paging and organized communication for vessels, bases, ports and secure facilities.",
    features: ["Weatherproof speakers and amplifiers", "Voice alarm and paging design", "Control console and accessory sourcing"],
  },
  {
    title: "Walkie Talkie Air Band",
    category: "Tactical Communication",
    icon: "fa-solid fa-walkie-talkie",
    image: "images/product-walkie-talkie.png",
    summary: "Portable communication sets for aviation support and coordinated field teams.",
    description:
      "Air band walkie talkies support controlled communication among aviation, maritime and field support teams where portable voice coordination is essential.",
    features: ["Portable radio communication", "Air band requirement coordination", "Accessories and battery support"],
  },
  {
    title: "Medical MRI Machine",
    category: "Medical Equipment",
    icon: "fa-solid fa-notes-medical",
    image: "images/product-mri.png",
    summary: "Medical imaging equipment sourcing for institutional healthcare requirements.",
    description:
      "MRI machine supply coordination for hospital, defence medical and institutional projects, with sourcing support aligned to technical and facility requirements.",
    features: ["Requirement-based sourcing", "Hospital and institutional use", "Technical specification coordination"],
  },
  {
    title: "Diesel Generator",
    category: "Power Systems",
    icon: "fa-solid fa-bolt",
    image: "images/product-diesel-generator.png",
    summary: "Backup power supply for critical operations, facilities and marine support sites.",
    description:
      "Diesel generators provide resilient backup power for mission-critical systems, security rooms, communication equipment and operational facilities.",
    features: ["Standby and prime power options", "Facility load planning", "Critical operation continuity"],
  },
  {
    title: "Modular UPS",
    category: "Power Protection",
    icon: "fa-solid fa-car-battery",
    image: "images/product-modular-ups.png",
    summary: "Scalable UPS protection for data, surveillance and control systems.",
    description:
      "Modular UPS solutions protect communication racks, surveillance control rooms, servers and sensitive defence equipment from power interruption.",
    features: ["Scalable modular capacity", "Data and control room protection", "High availability power design"],
  },
  {
    title: "Marine Speed Boat",
    category: "Marine Platform",
    icon: "fa-solid fa-sailboat",
    image: "images/product-speed-boat.png",
    summary: "Speed boat sourcing for patrol, inspection and rapid movement on waterways.",
    description:
      "Marine speed boat supply coordination supports patrol, rescue, inspection and transport duties across Bangladesh maritime and riverine environments.",
    features: ["Patrol and inspection use cases", "Marine-grade configuration planning", "Quotation by size and engine requirement"],
  },
];

const slides = [...document.querySelectorAll(".hero-slide")];
const dotsContainer = document.querySelector(".hero-dots");
const header = document.querySelector(".site-header");
const navLinks = document.querySelector(".nav-links");
const menuToggle = document.querySelector(".menu-toggle");
const blogSection = document.querySelector("#blog");
const insightToggles = document.querySelectorAll("[data-insights-toggle]");
let slideIndex = 0;
let slideTimer;

function showSlide(nextIndex) {
  slideIndex = (nextIndex + slides.length) % slides.length;
  slides.forEach((slide, index) => slide.classList.toggle("is-active", index === slideIndex));
  [...dotsContainer.children].forEach((dot, index) => dot.classList.toggle("is-active", index === slideIndex));
}

function startCarousel() {
  clearInterval(slideTimer);
  slideTimer = setInterval(() => showSlide(slideIndex + 1), 6200);
}

slides.forEach((_, index) => {
  const dot = document.createElement("button");
  dot.type = "button";
  dot.className = `hero-dot${index === 0 ? " is-active" : ""}`;
  dot.setAttribute("aria-label", `Show slide ${index + 1}`);
  dot.addEventListener("click", () => {
    showSlide(index);
    startCarousel();
  });
  dotsContainer.appendChild(dot);
});

document.querySelectorAll(".hero-arrow").forEach((button) => {
  button.addEventListener("click", () => {
    showSlide(slideIndex + Number(button.dataset.dir));
    startCarousel();
  });
});

startCarousel();

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

function toggleInsights(event) {
  event.preventDefault();
  const shouldOpen = blogSection.hidden;
  blogSection.hidden = !shouldOpen;
  insightToggles.forEach((toggle) => {
    toggle.setAttribute("aria-expanded", String(shouldOpen));
    if (toggle.classList.contains("insights-tab-button")) {
      toggle.innerHTML = shouldOpen
        ? '<i class="fa-solid fa-newspaper"></i> Hide SEO Insights'
        : '<i class="fa-solid fa-newspaper"></i> Open SEO Insights';
    }
  });
  if (shouldOpen) {
    blogSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

insightToggles.forEach((toggle) => toggle.addEventListener("click", toggleInsights));

window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
});

const grid = document.querySelector("#productGrid");
const modal = document.querySelector("#productModal");
const modalIcon = document.querySelector("#modalIcon");
const modalImage = document.querySelector("#modalImage");
const modalCategory = document.querySelector("#modalCategory");
const modalTitle = document.querySelector("#modalTitle");
const modalDescription = document.querySelector("#modalDescription");
const modalFeatures = document.querySelector("#modalFeatures");

products.forEach((product, index) => {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "product-card reveal";
  card.style.transitionDelay = `${(index % 4) * 70}ms`;
  card.innerHTML = `
    <span class="product-media"><img src="${product.image}" alt="${product.title}" loading="lazy"></span>
    <span class="product-icon"><i class="${product.icon}"></i></span>
    <h3>${product.title}</h3>
    <p>${product.summary}</p>
    <span class="product-tag">View details <i class="fa-solid fa-arrow-right"></i></span>
  `;
  card.addEventListener("click", () => openProduct(product));
  grid.appendChild(card);
});

function openProduct(product) {
  modalIcon.innerHTML = `<i class="${product.icon}"></i>`;
  modalImage.src = product.image;
  modalImage.alt = product.title;
  modalCategory.textContent = product.category;
  modalTitle.textContent = product.title;
  modalDescription.textContent = product.description;
  modalFeatures.innerHTML = product.features.map((feature) => `<li>${feature}</li>`).join("");
  modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
}

modal.querySelectorAll("[data-close-modal]").forEach((item) => item.addEventListener("click", closeModal));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) closeModal();
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));
