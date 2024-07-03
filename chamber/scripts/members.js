document.addEventListener('DOMContentLoaded', () => {
    const membersContainer = document.getElementById('membersContainer');
    const gridViewButton = document.getElementById('gridView');
    const listViewButton = document.getElementById('listView');
    const spotlightsContainer = document.getElementById('spotlights');

    console.log('Fetching JSON file from: data/members.json');

    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            if (!Array.isArray(data)) {
                console.error('Fetched data is not an array:', data);
                return;
            }

            const members = data;

            // Only proceed if membersContainer exists
            if (membersContainer) {
                const gridContainer = document.createElement('div');
                gridContainer.classList.add('grid');
                const listContainer = document.createElement('div');
                listContainer.classList.add('list');

                members.forEach(member => {
                    const memberCard = createMemberCard(member);
                    const memberListItem = createMemberListItem(member);
                    gridContainer.appendChild(memberCard);
                    listContainer.appendChild(memberListItem);
                });

                membersContainer.appendChild(gridContainer);
                membersContainer.appendChild(listContainer);

                // Show grid view by default
                listContainer.style.display = 'none';

                gridViewButton.addEventListener('click', () => {
                    gridContainer.style.display = 'flex';
                    listContainer.style.display = 'none';
                });

                listViewButton.addEventListener('click', () => {
                    gridContainer.style.display = 'none';
                    listContainer.style.display = 'block';
                });
            }

            // Only populate spotlights if spotlightsContainer exists
            if (spotlightsContainer) {
                populateSpotlights(members);
            }
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });

    function createMemberCard(member) {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');
        const memberInfo = `
            <h3>${member.name || 'No Name'}</h3>
            <img src="${member.image || 'default-image.jpg'}" alt="${member.name || 'No Name'}">
            <p>${member.description || 'No Description'}</p>
            <p><strong>Phone:</strong> ${member.phone || 'N/A'}</p>
            <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website || 'N/A'}</a></p>
            <p><strong>Address:</strong> ${member.address || 'N/A'}</p>
            <p><strong>Membership Level:</strong> ${member.membershipLevel || 'N/A'}</p>
        `;
        memberCard.innerHTML = memberInfo;
        return memberCard;
    }

    function createMemberListItem(member) {
        const memberListItem = document.createElement('div');
        memberListItem.classList.add('member-list-item');
        const memberInfo = `
            <h3>${member.name || 'No Name'}</h3>
            <img src="${member.image || 'default-image.jpg'}" alt="${member.name || 'No Name'}">
            <p>${member.description || 'No Description'}</p>
            <p><strong>Phone:</strong> ${member.phone || 'N/A'}</p>
            <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website || 'N/A'}</a></p>
            <p><strong>Address:</strong> ${member.address || 'N/A'}</p>
            <p><strong>Membership Level:</strong> ${member.membershipLevel || 'N/A'}</p>
        `;
        memberListItem.innerHTML = memberInfo;
        return memberListItem;
    }

    function populateSpotlights(members) {
        const spotlightMembers = getRandomMembers(members, 3);

        spotlightMembers.forEach(member => {
            const spotlightCard = createMemberCard(member);
            spotlightsContainer.appendChild(spotlightCard);
        });
    }

    function getRandomMembers(members, count) {
        // Shuffle the members array using the Fisher-Yates algorithm
        for (let i = members.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [members[i], members[j]] = [members[j], members[i]];
        }
        return members.slice(0, count);
    }
});
