document.addEventListener('DOMContentLoaded', () => {
    const membersContainer = document.getElementById('membersContainer');
    const gridViewButton = document.getElementById('gridView');
    const listViewButton = document.getElementById('listView');

    const members = [
        { image: 'path/to/image1.jpg', name: 'Member 1', description: 'Description for Member 1' },
        { image: 'path/to/image2.jpg', name: 'Member 2', description: 'Description for Member 2' },
        { image: 'path/to/image3.jpg', name: 'Member 3', description: 'Description for Member 3' },
        { image: 'path/to/image4.jpg', name: 'Member 4', description: 'Description for Member 4' },
        { image: 'path/to/image5.jpg', name: 'Member 5', description: 'Description for Member 5' },
        { image: 'path/to/image6.jpg', name: 'Member 6', description: 'Description for Member 6' }
    ];

    const createMemberCard = (member) => {
        const memberCard = document.createElement('div');
        memberCard.className = 'member-card';
        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h4>${member.name}</h4>
            <p>${member.description}</p>
        `;
        return memberCard;
    };

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    const renderMembers = (view) => {
        membersContainer.innerHTML = '';
        shuffleArray(members);
        const selectedMembers = members.slice(0, 3);
        selectedMembers.forEach(member => {
            const memberCard = createMemberCard(member);
            if (view === 'grid') {
                memberCard.classList.add('grid-view');
            } else {
                memberCard.classList.add('list-view');
            }
            membersContainer.appendChild(memberCard);
        });
    };

    gridViewButton.addEventListener('click', () => renderMembers('grid'));
    listViewButton.addEventListener('click', () => renderMembers('list'));

    renderMembers('grid'); // Default view
});
