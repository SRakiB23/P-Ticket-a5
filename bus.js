// // Get all seat elements
// const seats = document.querySelectorAll(".grid-cols-4 > div");

// // Add click event listener to each seat
// seats.forEach((seat) => {
//   seat.addEventListener("click", () => {
//     // Toggle background color
//     seat.classList.toggle("bg-green-400");

//     mouseClick();
//   });
// });

// function mouseClick() {
//   const currentSeat = getTextElementValueById("current-seat");
//   const updatedSeat = currentSeat - 1;
//   setTextElementValueById("current-seat", updatedSeat);

//   const totalSeat = getTextElementValueById("added-seat");
//   const updatedSeatCount = totalSeat + 1;
//   setTextElementValueById("added-seat", updatedSeatCount);
// }

// function handleSeatSelection(seatId) {
//   const seatNumber = seatId.toUpperCase();
//   const classType = "Economy";
//   const price = "550";

//   document.getElementById("seat").textContent = seatNumber;
//   document.getElementById("class").textContent = classType;
//   document.getElementById("price").textContent = price;
// }

let totalPrice = 0;

function handleSeatSelection(seatId) {
  const seatNumber = seatId.toUpperCase();
  const classType = "Economy";
  const price = 550; // Store price as a number for calculation

  // Create a new row
  const newRow = document.createElement("tr");

  // Create three cells for seat, class, and price
  const seatCell = document.createElement("td");
  seatCell.textContent = seatNumber;

  const classCell = document.createElement("td");
  classCell.textContent = classType;

  const priceCell = document.createElement("td");
  priceCell.textContent = price;

  // Append cells to the new row
  newRow.appendChild(seatCell);
  newRow.appendChild(classCell);
  newRow.appendChild(priceCell);

  // Append the new row to the tbody
  document.getElementById("seatList").appendChild(newRow);

  // Update total price
  totalPrice += price;
  document.getElementById(
    "totalPrice"
  ).textContent = `Total Price: ${totalPrice}`;

  const btn = document.getElementById("apply-btn");
  btn.addEventListener("click", function () {
    const couponElement = document.getElementById("input-field-coupon").value;
    const couponCode = couponElement.split(" ").join("").toUpperCase();

    if (couponCode === "NEW15") {
      const discountAmount1 = totalPrice * 0.15;
      const remainingTotal = document.getElementById("total");
      const grandTotal = totalPrice - discountAmount1.toFixed(2);
      remainingTotal.innerText = "Grand Total: " + grandTotal.toFixed(2);
      hideCouponSection();
    } else if (couponCode === "COUPLE20") {
      const discountAmount2 = totalPrice * 0.2;
      const remainingTotal = document.getElementById("total");
      const grandTotal = totalPrice - discountAmount2.toFixed(2);
      remainingTotal.innerText = "Grand Total: " + grandTotal.toFixed(2);
      hideCouponSection();
    } else {
      alert("Invalid Code!");
    }
  });
}

function hideCouponSection() {
  const couponSection = document.getElementById("coupon-section");
  couponSection.style.display = "none";
}

let maxSeatsReached = false; // Flag to track maximum seats reached

// Function to handle seat click event
function handleSeatClick(seat) {
  if (!maxSeatsReached) {
    // Toggle background color
    seat.classList.toggle("bg-green-400");

    // Call function to update seat information in the table
    handleSeatSelection(seat.id);

    // Call function to update seat count
    updateSeatCount();
  }
}

// Function to update seat count
function updateSeatCount() {
  const totalSeat = getTextElementValueById("added-seat");
  const updatedSeatCount = totalSeat + 1;
  setTextElementValueById("added-seat", updatedSeatCount);

  if (updatedSeatCount === 4) {
    alert("You Have Reached Maximum Number of Tickets");
    maxSeatsReached = true; // Update flag
  }
}

const seats = document.querySelectorAll(".grid-cols-4 > div");

seats.forEach((seat) => {
  seat.addEventListener("click", () => {
    handleSeatClick(seat);
  });
});
