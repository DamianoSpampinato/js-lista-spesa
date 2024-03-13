const list = [
    'Latte',
    'Cacao',
    'Insalata',
    'Carote',
    'Pomodori',
    'Piatti pronti'
];
let thisContainer = document.querySelector('#container'); 
let i = 0;
while(i < list.length){
    const listItemDiv = document.createElement('div');
    listItemDiv.innerHTML = list[i];
    thisContainer.append(listItemDiv);
    i++;
}
