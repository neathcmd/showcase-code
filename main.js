// Create the About section
const aboutSection = document.createElement("section");
aboutSection.id = "aboutSection";
aboutSection.classList.add(
  "w-full",
  "h-screen",
  "flex",
  "items-center",
  "justify-center",
  "font-bold",
  "text-2xl"
);

// Create the heading
const aboutHeading = document.createElement("h1");
aboutHeading.innerHTML = "This is About page";
aboutSection.appendChild(aboutHeading);

// Append the section into the body
document.body.appendChild(aboutSection);
