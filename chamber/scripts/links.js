const baseURL = "https://mariaoldroyd.github.io/wdd230/";
const linksURL = "https://mariaoldroyd.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    //console.log(data);
    displayLinks(data);
  }
  
  getLinks();

  function displayLinks(weeks) {
    const main = document.querySelector('main');
    weeks.forEach(week => {
        let section = document.createElement('section');
        let heading = document.createElement('h2');
        heading.textContent = 'Lesson${week.lesson}';
        section.appendChild(heading);
        week.links.forEach(link => {
            let linkElement = document.createElement('a');
            linkElement.href = `${baseURL}${link.url}`;
            linkElement.textContent = link.title;
            section.appendChild(linkElement);

            let br = document.createElement('br');
            section.appendChild(br);
        });

        main.appendChild(section);
    });
}