// get element id of each product type
function GetCardBoxID(id) {
    const CardBoxid = document.getElementById(id);
    const cardboxtext = CardBoxid.innerText;
    return cardboxtext;

}
// add list item for each product type
function AddItemList(itemname, itemprice) {
    const itemlist = document.getElementById('ItemList');
    const count = itemlist.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = `${count + 1} ${'.'} ${itemname}`;
    p.classList.add('font-medium', 'bg-base-100', 'text-2xl');
    itemlist.appendChild(p);
}