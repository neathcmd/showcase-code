// Create the Hero section
const heroSection1 = document.createElement("section");
heroSection1.id = "heroSection"; // Fixed incorrect variable name
heroSection1.classList.add(
  "w-full",
  "h-screen",
  "flex",
  "items-center",
  "justify-center",
  "font-bold",
  "text-2xl"
);

// Create the heading
const heroHeading = document.createElement("h1");
heroHeading.innerHTML = "This is Home page";
heroSection1.appendChild(heroHeading);

// Append the section into the body
document.body.appendChild(heroSection1);
