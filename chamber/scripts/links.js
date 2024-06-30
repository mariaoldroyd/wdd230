const baseURL = "https://mariaoldroyd.github.io/wdd230/";
const linksURL = "https://mariaoldroyd.github.io/wdd230/data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched data:', data);
        if (Array.isArray(data)) {
            displayLinks(data);
        } else {
            console.error('Fetched data is not an array:', data);
        }
    } catch (error) {
        console.error('Error fetching links:', error);
    }
}


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
getLinks();