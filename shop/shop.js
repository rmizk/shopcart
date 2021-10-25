console.log(document);
// console.log(document.querySelectorAll('.btn-cont'));

var btncont = document.querySelectorAll('.btn-cont');
// console.log(btncont);
var btnplus = document.querySelectorAll('.plus');
console.log(btnplus)




// PLUS BUTTON
var unitprice = document.querySelectorAll('.price');


for (let i = 0; i < btnplus.length; i++) {
    // const element = array[i];

    btnplus[i].addEventListener('click', incc);
    unitprice[i].addEventListener('click',total);
    
}

// convtar = Number(document.querySelector('p').innerHTML);
// console.log(convtar);

// var unitprice = document.querySelectorAll('.price');


// for (let i = 0; i < unitprice.length; i++) {
//     // const element = array[i];
//     unitprice[i].addEventListener('click',incc)
// }


function incc(event){

    var tar = event.target;
    // var x = tar.position;
    // console.log(x);
    var parent = tar.parentElement
    // console.log(value);
    
    var convtar = Number(parent.querySelector('p').innerHTML);
    convtar++;
    parent.querySelector('p').innerHTML=convtar;

    // **********************************************
    // CALCUL PRICE

    var grandparent = parent.parentElement;
    var tab = grandparent.parentElement;

    var pp=0;
    var pricee = Number(tab.querySelector('.price').innerHTML);
    var unitt = Number(tab.querySelector('.unitPrice').innerHTML);
    pp = unitt * convtar;
    tab.querySelector('.price').innerHTML=pp;

    // CALCUL TOTAL

    // var tot = Number(document.getElementById('total').innerHTML);
    // // console.log(tot);
    // tot=pp;

    // document.getElementById('total').innerHTML=tot;

    total();
}


// function total(event){

//     var tar = event.target;

//     var pp = 0;
//     var pricee = Number(document.querySelector('.price').innerHTML);
//     var unitt = Number(document.querySelector('.unitPrice').innerHTML);
//     var quant = Number(document.querySelector('p').innerHTML);
//     pp = unitt * incc ;
//     console.log(pp);
//     document.querySelector('.price').innerHTML= pp ;

// }








// MINUS BUTTON

var btnminus = document.querySelectorAll('.minus');


for (let i = 0; i < btnminus.length; i++) {
    // const element = array[i];
    btnminus[i].addEventListener('click', decc);
    
}

for (let i = 0; i < unitprice.length; i++) {
    // const element = array[i];
    unitprice[i].addEventListener('click',decc)
}



function decc(event){

    var tar = event.target;
    // console.log(tar)
    var parent = tar.parentElement
    // console.log(parent)
    
    var convtar = Number(parent.querySelector('p').innerHTML);
    if (convtar>=1){
        convtar--;
    }
    
    parent.querySelector('p').innerHTML=convtar;

    // **********************************************
    // CALCUL PRICE

    var grandparent = parent.parentElement;
    var tab = grandparent.parentElement;

    var pp=0;
    var pricee = Number(tab.querySelector('.price').innerHTML);
    var unitt = Number(tab.querySelector('.unitPrice').innerHTML);

    pp = unitt * convtar;
    tab.querySelector('.price').innerHTML=pp;

    // CALCUL TOTAL

    // var tot = Number(document.getElementById('total').innerHTML);
    // // console.log(tot);
    // tot=pp;

    // document.getElementById('total').innerHTML=tot;

    total();
    

}







// var unitprice = document.querySelectorAll('.price');
// console.log(unitprice);

// var pricee = Number(document.querySelector('.price').innerHTML);
// console.log(pricee);

// var unitt = Number(document.querySelector('.unitPrice').innerHTML);
// console.log(unitt);


// for (let i = 0; i < unitprice.length; i++) {
//     // const element = array[i];
//     unitprice[i].addEventListener('click',total)
// }

// function total (tot){

//     var tar = tot.target;
//     var pricee = Number(document.querySelector('.price').innerHTML);
//     var unitt = Number(document.querySelector('.unitPrice').innerHTML);
//     var quant = Number(document.querySelector('p').innerHTML);

//     pricee = unitt * quant;
//     console.log(pricee);
// }








// LIKE BUTTON BEGIN

var likebtn = document.querySelectorAll('.like');
var delbtn = document.querySelectorAll('.delete');
// console.log(likebtn);



for (let i = 0; i < likebtn.length; i++) {
    // const element = array[i];
    likebtn[i].addEventListener('click', fnlike);
    
    
}

function fnlike (ev){

    var tarrr = ev.target;
    // console.log(tarrr);
    var parent = tarrr.parentElement;
    // console.log(parent);


    var redbtn = parent.querySelector('.fa-heart');
    // console.log(redbtn);
    if(redbtn.style.color != "red"){
        redbtn.style.color = "red";
    }
    else{
        redbtn.style.color = "#424242";
    }

}


// LIKE BUTTON END


// DELETE BUTTON BEGIN

var delbtn = document.querySelectorAll('.delete');
console.log(delbtn);

for (let i = 0; i < delbtn.length; i++) {
    // const element = array[i];
    delbtn[i].addEventListener('click', fndel);
}

function fndel (evv){

    var tarrr = evv.target;
    // console.log(tarrr);
    var parent = tarrr.closest('tr');
    // console.log(parent);
    var delbtn = Number(parent.querySelector('.fa-heart').innerHTML);
    // console.log(redbtn);
    del1 = 0
    parent.querySelector('.price').innerHTML = del1
    parent.querySelector('p').innerHTML = 0
    
    total()

}

// DELETE BUTTON END



var priceee = document.querySelectorAll('.price');
console.log(priceee)

function total(){
    var tot = 0;
    for (let i = 0; i < priceee.length; i++) {

        tot+= Number(priceee[i].innerHTML);
        console.log(tot)
        

    }
    document.getElementById('total').innerHTML=tot;
}