// Get all seat elements
const seats = document.querySelectorAll(".grid-cols-4 > div");

// Add click event listener to each seat
seats.forEach((seat) => {
  seat.addEventListener("click", () => {
    // Toggle background color
    seat.classList.toggle("bg-green-400");

    mouseClick();
  });
});

function mouseClick() {
  const currentSeat = getTextElementValueById("current-seat");
  const updatedSeat = currentSeat - 1;
  setTextElementValueById("current-seat", updatedSeat);

  const totalSeat = getTextElementValueById("added-seat");
  const updatedSeatCount = totalSeat + 1;
  setTextElementValueById("added-seat", updatedSeatCount);
}
