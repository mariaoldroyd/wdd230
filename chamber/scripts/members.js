document.addEventListener('DOMContentLoaded', () => {
    const membersContainer = document.getElementById('membersContainer');
    const gridViewButton = document.getElementById('gridView');
    const listViewButton = document.getElementById('listView');

    console.log('Fetching JSON file from: chamber/data/members.json');
  
    fetch('data/members.json')
      .then(response => response.json())
      .then(data => {
        membersContainer.innerHTML = data.map(member => `
          <div class="member-card">
            <img src="images/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><a href="${member.website}" target="_blank">Website</a></p>
            <p>Membership Level: ${member.membershipLevel}</p>
          </div>
        `).join('');
      });
  
    gridViewButton.addEventListener('click', () => {
    
      membersContainer.classList.add('grid-view');
      membersContainer.classList.remove('list-view');
    });
  
    listViewButton.addEventListener('click', () => {
        console.log('List view button clicked'); 
      membersContainer.classList.add('list-view');
      membersContainer.classList.remove('grid-view');
    });
  });
  