const color = [
  '#6F98A8',
  '#2B8EAD',
  '#2F454E',
  '#2B8EAD',
  '#2F454E',
  '#BFBFBF',
  '#BFBFBF',
  '#6F98A8',
  '#2F454E',
];
const gridSize = 9;
const gridInstance = document.querySelector('.grid');
const node = document.getElementsByClassName('list-item');

window.onload = () => sortGrid();
window.addEventListener('resize', () => renderUI());

const renderUI = () => {
  if (window.innerWidth <= 767) {
    for (let i = 0; i < node.length; i++) {
      node[i].style.backgroundColor = '#EFEFEF';
      node[i].style.borderLeft = `10px solid ${color[i]}`;
    }
  } else {
    for (let i = 0; i < node.length; i++) {
      node[i].style.backgroundColor = color[i];
    }
  }
};

const shuffle = () => {
  for (let i = gridInstance.children.length; i >= 0; i--) {
    gridInstance.appendChild(gridInstance.children[(Math.random() * i) | 0]);
  }
};

const sortGrid = () => {
  gridInstance.innerHTML = '';
  for (let i = 0; i < gridSize; i++) {
    gridInstance.appendChild(createNode(i + 1));
  }
  renderUI();
};

const createNode = (val) => {
  let div = document.createElement('div');
  div.className = 'list-item';
  div.textContent = val;
  return div;
};
