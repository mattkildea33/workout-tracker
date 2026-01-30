// Get references to DOM elements
const addWorkoutBtn = document.getElementById("addWorkoutBtn");
const workoutNameInput = document.getElementById("workoutName");
const workoutTypeSelect = document.getElementById("workoutType");
const workoutList = document.getElementById("workoutList");

// Add workout button click handler
addWorkoutBtn.addEventListener("click", () => {
  const workoutName = workoutNameInput.value.trim();
  const workoutType = workoutTypeSelect.value;

  // Basic validation (lightweight on purpose)
  if (workoutName === "" || workoutType === "") {
    alert("Please enter a workout name and select a type.");
    return;
  }

  // Create workout card
  const workoutCard = document.createElement("div");
  workoutCard.className = "card mb-3";

  workoutCard.innerHTML = `
    <div class="card-body">
      <h5 class="card-title">${workoutName}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${workoutType}</h6>

      <p class="card-text">
        Exercises: 
        1. Bench Press - 3 sets of 10 reps<br>
        2. Squats - 3 sets of 12 reps<br>
        3. Deadlifts - 3 sets of 8 reps
      </p>

      <button class="btn btn-success btn-sm me-2 complete-btn">
        Complete
      </button>
      <button class="btn btn-danger btn-sm delete-btn">
        Delete
      </button>
    </div>
  `;

  workoutList.appendChild(workoutCard);

  // Clear inputs
  workoutNameInput.value = "";
  workoutTypeSelect.value = "";
});

// Handle complete and delete actions using event delegation
workoutList.addEventListener("click", (event) => {
  const target = event.target;
  const card = target.closest(".card");

  if (!card) return;

  // Mark workout as completed
  if (target.classList.contains("complete-btn")) {
    card.classList.toggle("bg-light");
    card.classList.toggle("text-muted");

    const title = card.querySelector(".card-title");
    title.classList.toggle("text-decoration-line-through");
  }

  // Delete workout
  if (target.classList.contains("delete-btn")) {
    card.remove();
  }
});
