document.addEventListener("DOMContentLoaded", function () {
  fetch('data/rentalPrices.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      const rentalOptionsSection = document.querySelector('.rental-options');
      const pricingTableBody = document.querySelector('#pricing-table tbody');

      data.Reservation.forEach(item => {
        const rentalDiv = document.createElement('div');
        rentalDiv.classList.add('rental-item');
        
        rentalDiv.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p>Max Persons: ${item['Max Persons']}</p>
          <p>Half Day (3 hrs): ${item['Half Day (3 hrs)']}</p>
          <p>Full Day: ${item['Full Day']}</p>
        `;
        
        rentalOptionsSection.appendChild(rentalDiv);
      });

      data.Walk-In.forEach((item, index) => {
        const reservationItem = data.Reservation[index];

        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${reservationItem.name}</td>
          <td>${reservationItem['Max Persons']}</td>
          <td>${reservationItem['Half Day (3 hrs)']}</td>
          <td>${reservationItem['Full Day']}</td>
          <td>${item.name}</td>
          <td>${item['Max Persons']}</td>
          <td>${item['Half Day (3 hrs)']}</td>
          <td>${item['Full Day']}</td>
        `;
        
        pricingTableBody.appendChild(row);
      });
    })
    .catch(error => console.error('Error fetching data:', error));
});



// Populate pricing table
document.addEventListener('DOMContentLoaded', () => {
  const tableBody = document.getElementById('pricing-table').getElementsByTagName('tbody')[0];
  
  pricingData.rentalTypes.forEach(rental => {
      const row = document.createElement('tr');
      
      const typeCell = document.createElement('td');
      typeCell.textContent = rental.type;
      row.appendChild(typeCell);
      
      const maxPersonsCell = document.createElement('td');
      maxPersonsCell.textContent = rental.maxPersons;
      row.appendChild(maxPersonsCell);
      
      const halfDayCell = document.createElement('td');
      halfDayCell.textContent = `$${rental.halfDay}`;
      row.appendChild(halfDayCell);
      
      const fullDayCell = document.createElement('td');
      fullDayCell.textContent = `$${rental.fullDay}`;
      row.appendChild(fullDayCell);
      
      tableBody.appendChild(row);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const reservationData = {
      "Reservation": [
          {
              "image": "images/2024-pcx-matte_brown_metallic-650x380.webp",
              "name": "~ Honda Metro Scooter",
              "Max Persons": "1",
              "Half Day (3 hrs)": "$20",
              "Full Day": "$30"
          },
          {
              "image": "images/Honda-Dio-Scooter-Mileage.webp",
              "name": "~ Honda Dio Scooter",
              "Max Persons": "2",
              "Half Day (3 hrs)": "$30",
              "Full Day": "$40"
          },
          {
              "image": "images/honda-pcx150-.webp",
              "name": "~ Honda PCX150 Scooter",
              "Max Persons": "2",
              "Half Day (3 hrs)": "$40",
              "Full Day": "$50"
          },
          {
              "image": "images/Honda-Pioneer.webp",
              "name": "Honda Pioneer ATV",
              "Max Persons": "4",
              "Half Day (3 hrs)": "$50",
              "Full Day": "$70"
          },
          {
              "image": "images/yellowjeep(1).webp",
              "name": "Jeep Wrangler 4 door with a/c",
              "Max Persons": "5",
              "Half Day (3 hrs)": "$70",
              "Full Day": "$100"
          },
          {
              "image": "images/tealJeep1.webp",
              "name": "Jeep Wrangler 2 door with a/c",
              "Max Persons": "4",
              "Half Day (3 hrs)": "$60",
              "Full Day": "$85"
          }
      ],
      "Walk-In": [
          {
              "name": "~ Honda Metro Scooter",
              "Max Persons": "1",
              "Half Day (3 hrs)": "$25",
              "Full Day": "$35"
          },
          {
              "name": "~ Honda Dio Scooter",
              "Max Persons": "2",
              "Half Day (3 hrs)": "$35",
              "Full Day": "$45"
          },
          {
              "name": "~ Honda PCX150 Scooter",
              "Max Persons": "2",
              "Half Day (3 hrs)": "$45",
              "Full Day": "$55"
          },
          {
              "name": "Honda Pioneer ATV",
              "Max Persons": "4",
              "Half Day (3 hrs)": "$60",
              "Full Day": "$80"
          },
          {
              "name": "Jeep Wrangler 4 door with a/c",
              "Max Persons": "5",
              "Half Day (3 hrs)": "$85",
              "Full Day": "$125"
          },
          {
              "name": "Jeep Wrangler 2 door with a/c",
              "Max Persons": "4",
              "Half Day (3 hrs)": "$70",
              "Full Day": "$90"
          }
      ]
  };

  const tbody = document.querySelector("#pricing-table tbody");

  reservationData.Reservation.forEach((reservation, index) => {
      const walkIn = reservationData["Walk-In"][index];

      const tr = document.createElement("tr");
      tr.innerHTML = `
          <td>${reservation.name}</td>
          <td>${reservation["Max Persons"]}</td>
          <td>${reservation["Half Day (3 hrs)"]}</td>
          <td>${reservation["Full Day"]}</td>
          <td>${walkIn.name}</td>
          <td>${walkIn["Max Persons"]}</td>
          <td>${walkIn["Half Day (3 hrs)"]}</td>
          <td>${walkIn["Full Day"]}</td>
      `;
      tbody.appendChild(tr);
  });
});