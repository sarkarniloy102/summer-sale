// get element id of each product type
function GetCardBoxID(id) {
    const CardBoxid = document.getElementById(id);
    const cardboxtext = CardBoxid.innerText;
    return cardboxtext;

}

// add list of item name for each product type which one will be clicked
function AddItemList(itemname) {
    const itemlist = document.getElementById('ItemListName');
    const count = itemlist.childElementCount;
    const item = document.createElement('p');
    item.innerHTML = `${count + 1} ${'.'} ${itemname}`;
    item.classList.add('font-medium', 'text-2xl');
    itemlist.appendChild(item);
}

// Calculate total price
let Total = 0;
function Calculator(price) {
    Total += price;
    return Total;
}
// // add list of item price for each product type which one will be clicked
function AddItemPrice(itemprice) {

    const purchasebtn = document.getElementById('PurchaseBtn')

    const TotalPrice = Calculator(parseFloat(itemprice));
    if (TotalPrice > 0)
        purchasebtn.disabled = false;
    else
        purchasebtn.disabled = true;

    const itemlistprice = document.getElementById('ItemListPrice');
    itemlistprice.innerHTML = `${"Total price:"} ${TotalPrice.toFixed(2)} ${"TK"}`;
    itemlistprice.classList.add('font-medium', 'text-2xl');

    Discount(TotalPrice, itemlistprice);
}

// Discount & after discount show the total value
function Discount(TotalPrice, itemlistprice) {
    const Couponid = document.getElementById('coupon');
    const couponcode = Couponid.value;
    let price = TotalPrice;
    const couponbtn = document.getElementById('ApplyBtn');

    if (TotalPrice >= 200) {
        couponbtn.disabled = false;

        const totaldiscount = TotalPrice * parseFloat(20 / 100);
        price -= totaldiscount;
        // add discount by creation new element
        const item = document.createElement('p');
        item.innerHTML = `${"Discount: "}  ${totaldiscount.toFixed(2)} ${"TK"}`;
        item.classList.add('font-medium', 'text-2xl');
        itemlistprice.appendChild(item);
        // after getting discount show the total price
        const newtotal = document.createElement('p');
        newtotal.innerHTML = `${"Total:"} ${price.toFixed(2)} ${"TK"}`;
        itemlistprice.appendChild(newtotal);
    }
    else
        couponbtn.disabled = true;

    const GoHome = document.getElementById('HomeBtn');
    GoHome.addEventListener('click', function () {
        window.location.href = "index.html";
    });

}



