const head = document.getElementById("navbar");
head.classList.add(
  "bg-blue-600",
  "py-3",
  "px-6",
  "flex",
  "items-center",
  "justify-between",
  "flex-wrap"
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

// Create menu button (hamburger icon)
const createMenuBtn = document.createElement("button");
createMenuBtn.innerHTML = "☰"; // Unicode hamburger menu
createMenuBtn.classList.add(
  "text-white",
  "text-3xl",
  "md:hidden",
  "focus:outline-none"
);

// Create <nav> element
const createNav = document.createElement("nav");
createNav.classList.add(
  "hidden", // Initially hidden on mobile
  "w-full",
  "md:flex",
  "md:space-x-6",
  "md:w-auto",
  "flex-col",
  "md:flex-row",
  "items-center"
);

// Toggle menu function
createMenuBtn.addEventListener("click", () => {
  createNav.classList.toggle("hidden");
});

// Function to create links
function createNavLink(text, href) {
  const link = document.createElement("a");
  link.innerHTML = text;
  link.href = href;
  link.classList.add("hover:text-black", "text-white", "transition-all");
  return link;
}

// Add navigation links
createNav.appendChild(createNavLink("Home", "#"));
createNav.appendChild(createNavLink("About", "#"));
createNav.appendChild(createNavLink("Services", "#"));
createNav.appendChild(createNavLink("Contact", "#"));

// Create a div for the login & signup buttons
const createDivBtn = document.createElement("div");
createDivBtn.classList.add("flex", "space-x-4", "mt-4", "md:mt-0");

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

// Create Sign Up button
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

// Append elements
head.appendChild(createLogo);
head.appendChild(createMenuBtn); // Append hamburger button
head.appendChild(createNav);
createNav.appendChild(createDivBtn);
