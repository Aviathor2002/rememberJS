// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);

// const hotelName = prompt("Please enter desired hotel name");
// console.log(hotelName);

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// function checkForSpam(message) {
//   let result;
//   // Change code below this line

//   messageLow = message.toLowerCase();

//   result = messageLow.includes("spam") || messageLow.includes("sale");

//   //   result =
//   //     message.toUpperCase().includes("SPAM") ||
//   //     message.toUpperCase().includes("SALE");

//   // Change code above this line
//   return result;
// }

// console.log(checkForSpam("Latest technology news"));
// console.log(checkForSpam("Get best sale offers now!"));

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line

//   if (totalSpent >= 50000) {
//     return GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent < 50000) {
//     return SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent < 2000) {
//     return BRONZE_DISCOUNT;
//   } else {
//     return BASE_DISCOUNT;
//   }

//   // Change code above this line
//   return discount;
// }

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   // if (ordered > available) {
//   //   message = "Not enough goods in stock!";
//   // } else {
//   //   message = "The order is accepted, our manager will contact you";
//   // }

//   const order = ordered > available;

//   message = order
//     ? "Not enough goods in stock!"
//     : "The order is accepted, our manager will contact you";

//   // Change code above this line
//   return message;
// }

// console.log(checkStorage(100, 50));

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
//   message =
//     password === ADMIN_PASSWORD
//       ? "Access is allowed"
//       : "Access denied, wrong password!";
//   // Change code above this line
//   return message;
// }

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line

//   // if (password === null) {
//   //   message = "Canceled by user!";
//   // } else if (password === ADMIN_PASSWORD) {
//   //   message = "Welcome!";
//   // } else {
//   //   message = "Access denied, wrong password!";
//   // }

//   switch (password) {
//     case null:
//       message = "Canceled by user!";
//       break;

//     case ADMIN_PASSWORD:
//       message = "Welcome!";
//       break;

//     default:
//       message = "Access denied, wrong password!";
//   }

//   // Change code above this line
//   return message;
// }

// console.log(checkPassword("mangohackzor"));

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }

// console.log(getNameLength("Poly"));

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   if (message.length > maxLength) {
//     result = message.slice(0, maxLength) + "...";
//   } else {
//     result = message;
//   }
//   /// Change code above this line
//   return result;
// }

// console.log(formatMessage("Curabitur ligula sapien", 16));

function checkForSpam(message) {
  let result;
  // Change code below this line
  result =
    message.toLowerCase().includes("spam") ||
    message.toLowerCase().includes("sale");
  // Change code above this line
  return result;
}

console.log(checkForSpam("Latest technology news"));
