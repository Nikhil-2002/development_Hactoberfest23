const projects = [
        {
                name: "Portfolio Builder",
                description: "A simple personal portfolio generator for students.",
                techStack: ["HTML", "CSS", "JS"],
                github: "https://github.com/username/portfolio-builder"
        },
        {
                name: "College Notes App",
                description: "Collaborative note sharing platform for students.",
                techStack: ["Node.js", "MongoDB"],
                github: "https://github.com/username/college-notes-app"
        }
];

function renderProjects() {
        const container = document.getElementById("projects-container");
        projects.forEach(project => {
                const card = document.createElement("div");
                card.className = "project-card";
                card.innerHTML = `
                <h2>${project.name}</h2>
                <p>${project.description}</p>
                <div class="tech-stack">
                ${project.techStack.map(t => `<span>${t}</span>`).join("")}
                </div>
                <p><a href="${project.github}" target="_blank">🔗 View on GitHub</a></p>
                `;
                container.appendChild(card);
        });
}

document.getElementById("theme-toggle").addEventListener("click", () => {
document.body.classList.toggle("dark");
document.getElementById("theme-toggle").textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
});

renderProjects();
      