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

const pricingData = {
  "rentalTypes": [
      {
          "type": "Honda Metro Scooter",
          "maxPersons": 1     
       
      },
      {
          "type": "Honda Dio Scooter",
          "maxPersons": 2
       
      },
      {
          "type": "Honda PCX150 Scooter",
          "maxPersons": 2
          
      },
      {
          "type": "Honda Pioneer ATV",
          "maxPersons": 4
         
      },
      {
          "type": "Jeep Wrangler - 4 door with A/C",
          "maxPersons": 5
          
      },
      {
          "type": "Jeep Wrangler - 2 door",
          "maxPersons": 4
         
      }
  ]
};

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