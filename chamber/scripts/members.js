document.addEventListener('DOMContentLoaded', () => {
    const membersContainer = document.getElementById('membersContainer');
    const gridViewButton = document.getElementById('gridView');
    const listViewButton = document.getElementById('listView');

    const members = [
        {
            "image": "images/MemLogo_marble line logo.webp",
            "name": "Marble Line",
            "address": "123 McAllister Rd., Brookshire, Tx",
            "phone": "(123)456-7890",
            "website": "http://mline.com",
            "description": "Community Supporter",
            "membershipLevel": "Gold"
        },
        {
            "image": "images/MemLogo_LOGOSanFelipederAustinStHistoricSite072522_250722-021702.webp",
            "name": "San Felipe de Austin Historic Site",
            "address": "220 2nd St., San Felipe, Tx",
            "phone": "(979)885-2161",
            "website": "http://sanfelipehistoricsite.com",
            "description": "New Member",
            "membershipLevel": "Silver"
        },
        {
            "image": "images/MemLogo_TEXAS PREMIER SPORTING ARMS.webp",
            "name": "Texas Premier Sporting Arms",
            "address": "7311 Hwy 36 S, Sealy, Tx",
            "phone": "(713)826-1981",
            "website": "http://texaspremiersportingarms.com",
            "description": "Event Organizer",
            "membershipLevel": "Silver"
        },
        {
            "image": "images/MemLogo_PhenixKnivesLogo.webp",
            "name": "Phenix Knives",
            "address": "305 E. Main St., Bellville, Tx",
            "phone": "(713)724-6813",
            "website": "https://www.phenixknives.com/",
            "description": "Top Fundraiser",
            "membershipLevel": "Gold"
        },
        {
            "image": "images/JandG_Logo_PNG_from_RAO_Company_square.webp",
            "name": "J & G Sales, Inc.",
            "address": "11195 Hwy 159 East, Bellville, Tx",
            "phone": "(979)865-4300",
            "website": "https://jgsalesinc.com/",
            "description": "Community Leader",
            "membershipLevel": "Bronze"
        },
        {
            "image": "images/MemLogo_jail musem.webp",
            "name": "Austin County Jail Museum",
            "address": "36 S. Bell St., Bellville, Tx",
            "phone": "(979)877-5642",
            "website": "https://www.austincounty.com/page/austin.museum",
            "description": "New Member",
            "membershipLevel": "Silver"
        },
        {
            "image": "images/MemLogo_AIG Mirror and Glass Logo.webp",
            "name": "AIG Mirror & Glass",
            "address": "201 w. Front St., Sealy, Tx",
            "phone": "(281)995-3819",
            "website": "https://www.aigmirrorandglass.com/",
            "description": "Volunteer of The Month",
            "membershipLevel": "Bronze"
        },
        {
            "image": "images/HTHardware_LOGO1.webp",
            "name": "Hometown Hardware",
            "address": "513 East Main, Bellville, Tx",
            "phone": "(979)865-3674",
            "website": "https://www.acehardware.com/store-details/08828",
            "description": "New Member",
            "membershipLevel": "Silver"
        }
    ];

    const createMemberCard = (member) => {
        const memberCard = document.createElement('div');
        memberCard.className = 'member-card';
        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h4>${member.name}</h4>
            <p>${member.description}</p>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
            <p><strong>Membership Level:</strong> ${member.membershipLevel}</p>
        `;
        return memberCard;
    };

    const renderMembers = (view) => {
        membersContainer.innerHTML = '';
        members.forEach(member => {
            const memberCard = createMemberCard(member);
            if (view === 'grid') {
                membersContainer.classList.add('grid-view');
                membersContainer.classList.remove('list-view');
            } else {
                membersContainer.classList.add('list-view');
                membersContainer.classList.remove('grid-view');
            }
            membersContainer.appendChild(memberCard);
        });
    };

    gridViewButton.addEventListener('click', () => renderMembers('grid'));
    listViewButton.addEventListener('click', () => renderMembers('list'));

    renderMembers('grid'); // Default view
});

