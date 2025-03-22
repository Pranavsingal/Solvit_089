// Sample Menu Data
const menuData = [
    { id: 1, name: "Pizza", description: "Cheesy and delicious", image: "images/pizza.jpg" },
    { id: 2, name: "Burger", description: "Juicy and flavorful", image: "images/burger.jpg" },
    { id: 3, name: "Pasta", description: "Creamy and satisfying", image: "images/pasta.jpg" },
  ];
  
  // Sample Feedback Data
  let feedbackData = [];
  
  // DOM Elements
  const menuSection = document.querySelector(".menu-items");
  const feedbackFormSection = document.getElementById("feedback-form");
  const feedbackForm = document.getElementById("feedbackForm");
  const feedbackDisplaySection = document.querySelector(".feedback-items");
  
  // Render Menu
  function renderMenu() {
    menuSection.innerHTML = menuData
      .map(
        (item) => `
        <div class="menu-item">
          <img src="${item.image}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <button onclick="openFeedbackForm(${item.id})">Rate & Review</button>
        </div>
      `
      )
      .join("");
  }
  
  // Open Feedback Form
  function openFeedbackForm(menuId) {
    feedbackFormSection.classList.remove("hidden");
    feedbackForm.dataset.menuId = menuId;
  }
  
  // Submit Feedback
  feedbackForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const menuId = feedbackForm.dataset.menuId;
    const rating = document.getElementById("rating").value;
    const comment = document.getElementById("comment").value;
  
    // Add feedback to data
    feedbackData.push({ menuId, rating, comment });
  
    // Clear form
    feedbackForm.reset();
    feedbackFormSection.classList.add("hidden");
  
    // Render feedback
    renderFeedback();
  });
  
  // Render Feedback
  function renderFeedback() {
    feedbackDisplaySection.innerHTML = feedbackData
      .map(
        (feedback) => `
        <div class="feedback-item">
          <p><strong>Menu ID:</strong> ${feedback.menuId}</p>
          <p><strong>Rating:</strong> ${feedback.rating}/5</p>
          <p><strong>Comment:</strong> ${feedback.comment}</p>
        </div>
      `
      )
      .join("");
  }
  
  // Initialize
  renderMenu();