<template>
  <div class="contact-page">
    <!-- Background Image Layer -->
    <div class="background-layer"></div>

    <!-- Header Section -->
    <header class="contact-header">
      <h1>Contact Us</h1>
    </header>

    <!-- Contact Form Section -->
    <section class="contact-form-section">
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" name="message" placeholder="Write your message"></textarea>
        </div>
        <button type="submit" class="submit-button">Submit</button>
      </form>
    </section>

    <!-- Contact Info Section -->
    <section class="contact-info-section">
      <div class="info-item">
        <span>📧 Email:</span> contact@example.com
      </div>
      <div class="info-item">
        <span>📞 Phone:</span> +123 456 7890
      </div>
      <div class="info-item">
        <span>🌐 Address:</span> 123 Main Street, Anywhere
      </div>
    </section>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "ContactPage",
  mounted() {
    const contactPage = document.querySelector(".contact-page");
    const backgroundLayer = document.querySelector(".background-layer");

    // Background Images
    let bgImages = [
      "url('https://img.freepik.com/free-photo/starry-clear-sky-view-with-nature-landscape_23-2151683073.jpg?t=st=1734638703~exp=1734642303~hmac=45fc99b549ce181eb49377ec2ca281e11eb6ecf12346bbc3875e45dfbfef70d3&w=1060')",
      "url('https://img.freepik.com/free-photo/nature-majesty-display-cliffs-waves-rock-generative-ai_188544-12584.jpg?t=st=1734638784~exp=1734642384~hmac=2884123353896ff5aa7c97960b7324002cb8b1b83b2938d10cf212e35e368626&w=1060')",
    ];

    let index = 0;

    // Function to Change Background Smoothly
    const changeBackground = () => {
      // Transition current opacity to 0
      gsap.to(backgroundLayer, {
        opacity: 0,
        duration: 1.5,
        ease: "power2.inOut",
        onComplete: () => {
          // Change background image
          index = (index + 1) % bgImages.length;
          backgroundLayer.style.backgroundImage = bgImages[index];

          // Transition back opacity to 1
          gsap.to(backgroundLayer, {
            opacity: 1,
            duration: 1.5,
            ease: "power2.inOut",
          });
        },
      });
    };

    setInterval(changeBackground, 3000); // Change background every 3 seconds

    // Header Animation
    gsap.from(".contact-header h1", {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    // Form Animation - No background transition applied here
    gsap.from(".contact-form-section form", {
      x: -200,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
    });

    // Info Section Animation - No background transition applied here
    gsap.from(".contact-info-section .info-item", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      stagger: 0.3,
    });
  },
  methods: {
    handleSubmit() {
      alert("Form submitted!");
    },
  },
};
</script>

<style scoped>
/* General Styles */
.contact-page {
  font-family: Arial, sans-serif;
  padding: 2rem;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

.background-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1; /* Background is behind all other content */
  transition: background-image 1.5s ease-in-out;
}

.contact-header h1 {
  text-align: center;
  font-size: 2.5rem;
  color: #333;
}

/* Form Section */
.contact-form-section form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  margin: 2rem auto;
  z-index: 1; /* Ensure the form stays above the background */
}

.form-group label {
  font-size: 1rem;
  color: #555;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #ff6f61;
  outline: none;
}

.submit-button {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  background-color: #ff6f61;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.submit-button:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(255, 111, 97, 0.3);
}

/* Contact Info Section */
.contact-info-section {
  margin: 2rem auto;
  text-align: center;
  color: #333;
}

.info-item {
  margin: 0.5rem 0;
  font-size: 1.2rem;
}
</style>
