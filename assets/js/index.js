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
    name: "Blog",
    html: "blog.html",
  },
  {
    name: "Contact",
    html: "contact.html",
  },
  {
    name: "Sunday Shots",
    html: "sunday-shots.html",
  },
  {
    name: "Our Discord Community",
    html: "https://discord.gg/F2ftbbS8GD",
  },
];
document.getElementById("navbar").innerHTML =
  `<ul>` +
  links.map(
    (link) =>
      `
    <li><a href="${link.html}" ${
        location.pathname.includes(link.html) && 'class="active"'
      }>${link.name}</a></li>
  `
  ) +
  `</ul>`;
