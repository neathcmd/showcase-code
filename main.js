const head = document.getElementById("navbar");
head.classList.add(
  "bg-blue-600",
  "py-3",
  "px-6",
  "flex",
  "items-center",
  "justify-between"
);

// Create logo
const createLogo = document.createElement("a");
createLogo.classList.add(
  "text-2xl",
  "font-bold",
  "text-white",
  "hover:text-black",
  "transition-all"
);
createLogo.innerHTML = "My Logo";
createLogo.href = "#";

// Create <nav> element
const createNav = document.createElement("nav");
createNav.classList.add("flex", "space-x-6");

// Add Home link
const createHomeLink = document.createElement("a");
createHomeLink.innerHTML = "Home";
createHomeLink.href = "#";
createHomeLink.classList.add(
  "hover:text-black",
  "text-white",
  "transition-all"
);

createNav.appendChild(createHomeLink);

// Add About link
const createAboutLink = document.createElement("a");
createAboutLink.innerHTML = "About";
createAboutLink.href = "#"; // Fixed typo
createAboutLink.classList.add(
  "hover:text-black",
  "text-white",
  "transition-all"
);

createNav.appendChild(createAboutLink);

// add Service Link
const createServiceLink = document.createElement("a");
createServiceLink.innerHTML = "Services";
createServiceLink.href = "#"; // Fixed typo
createServiceLink.classList.add(
  "hover:text-black",
  "text-white",
  "transition-all"
);

createNav.appendChild(createServiceLink);

// add Contact link
const createContactLink = document.createElement("a");
createContactLink.innerHTML = "Contact";
createContactLink.href = "#";
createContactLink.classList.add(
  "hover:text-black",
  "text-white",
  "transition-all"
);

createNav.appendChild(createContactLink);

// Create a div for the login button
const createDivBtn = document.createElement("div");
createDivBtn.classList.add("flex", "space-x-4");

// Create Login button
const createLoginBtn = document.createElement("button");
createLoginBtn.innerHTML = "Login";
createLoginBtn.classList.add(
  "bg-white",
  "border",
  "border-gray-300",
  "hover:bg-gray-50",
  "text-gray-800",
  "py-2",
  "px-4",
  "rounded",
  "transition-all"
);

createDivBtn.appendChild(createLoginBtn);

// create Dign up button
const createSignUpBtn = document.createElement("button");
createSignUpBtn.innerHTML = "Sign Up";
createSignUpBtn.classList.add(
  "bg-white",
  "border",
  "border-gray-300",
  "hover:bg-gray-50",
  "text-gray-800",
  "py-2",
  "px-4",
  "rounded",
  "transition-all"
);

createDivBtn.appendChild(createSignUpBtn);

// Append elements in the correct order
head.appendChild(createLogo);
head.appendChild(createNav);
head.appendChild(createDivBtn);
