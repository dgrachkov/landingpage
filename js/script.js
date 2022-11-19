const clients = [
  {
    img: 'clients-img',
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.',
    price: '120 000',
    producer: 'Завод “Hlobalkhim”',
    address: 'г. Москва, проспект Кутузовский, д. 12 стр. 1 этаж, пом. 1',
    rating: '5',
    clientName: 'Коваль Иван Борисович',
    clientSpecialty: 'Руководитель отдела поставок',
    clientPhone: '+ 7 (495) 765 33 22'
  },
  {
    img: 'clients-img',
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.',
    price: '50 000',
    producer: 'Даниловский строительный завод',
    address: 'Москва, Даниловская наб., д. 8 стр. 1 этаж, пом. 2',
    rating: '4',
    clientName: 'Лубен Валерий Вячеславович',
    clientSpecialty: 'Руководитель отдела поставок',
    clientPhone: '+ 7 (495) 765 33 22'
  },
  {
    img: 'clients-img',
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.',
    price: '120 000',
    producer: 'Завод “Hlobalkhim”',
    address: 'г. Москва, проспект Кутузовский, д. 12 стр. 1 этаж, пом. 1',
    rating: '5',
    clientName: 'Коваль Иван Борисович',
    clientSpecialty: 'Руководитель отдела поставок',
    clientPhone: '+ 7 (495) 765 33 22'
  },
];

let clientsTable = document.querySelector('#clients-table');

for (const client of clients) {
  let tr = document.createElement('tr');
  tr.classList.add('clients_row');
  tr.innerHTML = 
  `<tr>
    <td class="clients_cell"><img src="img/${client.img}.png"></td>
    <td class="clients_cell">
      <div class="clients_cell_name">${client.name}</div>
      <div class="clients_cell_price">${client.price} руб.</div>
    </td>
    <td class="clients_cell">
      <div class="clients_cell_producer">${client.producer}</div>
      <div class="clients_cell_address">${client.address}</div>
      <div id="stars">
        <img src="img/icons/star-yellow.svg">
        <img src="img/icons/star-yellow.svg">
        <img src="img/icons/star-yellow.svg">
        <img src="img/icons/star-yellow.svg">
        <img src="img/icons/star-yellow.svg">
      </div>
    </td>
    <td class="clients_cell">
      <div class="clients_cell_client_name">${client.clientName}</div>
      <div class="clients_cell_client_specialty">${client.clientSpecialty}</div>
      <div class="clients_cell_client_phone">${client.clientPhone}</div>
    </td>
  </tr>`

  clientsTable.appendChild(tr);
}


