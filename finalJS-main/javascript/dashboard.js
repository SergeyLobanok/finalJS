const fields = ['name', 'company', 'email', 'phone', 'balance', 'registered']; 
// TODO: расширить tableConfig
const tableConfig = [
  {
    header: 'Имя', 
    key: 'name',
  },
  {
      header:'Компания',
      key:'company',
  },
  {
    header:'Почта',
    key:'email',   
  },
  {
    header:'Телефон',
    key:'phone',   
  },
  {
    header:'Регистрация',
    key:'registered',   
  },
  {
    header:'Телефон',
    key:'phone',   
  },
];

const getTHead = () => {
  const tHead = document.createElement('thead');
  tHead.style.color = "white";
  tHead.style.background = "red";
  tableConfig.forEach((cell) => {
    const cellHead = document.createElement('th');
    cellHead.style.padding = "12px";
    cellHead.innerHTML = cell.header;
    tHead.appendChild(cellHead);
  })
  return tHead;
}
const createTable = (data) => {
  const table = document.createElement('table');
  table.style.border = "1px solid";
  table.style.margin = "0 auto";
  const tHead = getTHead();
  table.appendChild(tHead);
  const tBody = document.createElement('tbody');
  if (data) {
    data.forEach(item => {
      const tr = document.createElement('tr');
      tableConfig.forEach((cell) => {
        const td = document.createElement('td');
        td.innerHTML = item[cell.key];
        td.style.padding = "0 50px 0 0";
        td.style.border = "1px solid";
        td.style.padding = "5px";
        tr.appendChild(td);
      });

      tBody.appendChild(tr);
    })
  }
  table.appendChild(tBody);
  document.body.appendChild(table);
};
const getTable = () => {
  const url = 'https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json';
  fetch(url)
    .then(response => response.json())
    .then(response => createTable(response))
    .catch(error => createTable());
}
getTable();