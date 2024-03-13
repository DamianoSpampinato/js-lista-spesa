const list = [
    'Latte',
    'Cacao',
    'Insalata',
    'Carote',
    'Pomodori',
    'Piatti pronti'
];
let thisContainer = document.querySelector('#container'); 

for(let i = 0; i < list.length; i++){
const listItemDiv = document.createElement('div');
listItemDiv.innerHTML = list[i];
thisContainer.append(listItemDiv);
}