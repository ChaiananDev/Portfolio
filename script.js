document.addEventListener("DOMContentLoaded", () => {
  // 1. Navbar Scroll Effect
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // 2. Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-links a");

  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    const icon = mobileMenuBtn.querySelector("i");
    if (navLinks.classList.contains("active")) {
      icon.classList.remove("ph-list");
      icon.classList.add("ph-x");
    } else {
      icon.classList.remove("ph-x");
      icon.classList.add("ph-list");
    }
  });

  // Close mobile menu when clicking a link
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("active");
      const icon = mobileMenuBtn.querySelector("i");
      icon.classList.remove("ph-x");
      icon.classList.add("ph-list");
    });
  });
  //Transtate
  document.getElementById("btn-th").addEventListener("click", () => {
    setLanguage("th");
  });

  document.getElementById("btn-en").addEventListener("click", () => {
    setLanguage("en");
  });
  
  const translations = {
    en: {
      welcome: "Hi, I'm",
      firstname: "Chaianan",
      lastname: "Simachai",
    },

    th: {
      welcome: "ยินดีต้อนรับเข้าสู่เว็บไซต์ของชัยอนันต์",
      firstname: "ชัยอนันต์",
      lastname: "สิมาชัย",
    },
  };

  function setLanguage(lang) {
    document.getElementById("welcome").textContent = translations[lang].welcome;
    document.getElementById("firstname").textContent =
      translations[lang].firstname;
    document.getElementById("lastname").textContent =
      translations[lang].lastname;
  }
  setLanguage("en");
});
