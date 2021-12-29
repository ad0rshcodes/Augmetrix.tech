async function fetchHtml(url) {
  return await (await fetch(url)).text();
}

async function loadComponentAsHtml(id, htmlFile) {
  const targetDiv = document.getElementById(id);
  targetDiv.innerHTML = await fetchHtml(`components/${htmlFile}.html`);
}

loadComponentAsHtml("footer", "footer");
console.log("hi");

const links = [
  {
    name: "Home",
    html: "index.html",
  },
  {
    name: "About us",
    html: "about.html",
  },
  {
    name: "Team",
    html: "team.html",
  },
  {
    name: "Sunday Shots",
    html: "sunday-shots.html",
  },
  {
    name: "Blog",
    html: "blog.html",
  },
  {
    name: "Internship opportunity",
    html: "https://forms.gle/nh1jU1UtoLQE8yYP6",
  },

  {
    name: "Discord Community",
    html: "https://discord.gg/F2ftbbS8GD",
  },
  {
    name: "Contact",
    html: "contact.html",
  },
];
document.getElementById("navbar").innerHTML =
  `<ul>` +
  links.map(
    (link) =>
      `
    <li><a href="${link.html} " ${
        location.pathname.includes(link.html) && 'class="active"'
      }>${link.name}</a></li>
  `
  ) +
  `</ul>`;
