// -------------------------- DOM ELEMNT -------------------------- //
const number = document.querySelector(`.number`);
// -------------------------- button + / - / reset -------------------------- //
const plusButton = document.querySelector(`.btn-plus`);
const minusButton = document.querySelector(`.btn-minus`);
const resetButton = document.querySelector(`.btn-reset`);

// -------------------------- defNumber -------------------------- //
let defNumber = 0;

/* -------------------------- Animation -------------------------- */
const checkNum = () => {
    if(number.classList[1] === "jump") number.classList.remove("jump"); // Hentikan Animasi

    if(defNumber % 5 !== 0) return // keluar function jika bukan kelipatan 5

    number.classList.add("jump") // apabila defNumber kelipatan 5 jalankan animasi
}


/* -------------------------- Events -------------------------- */

plusButton.addEventListener('click',() =>{
    defNumber +=  1; 

    number.innerHTML = defNumber;

    checkNum();
})

minusButton.addEventListener('click',() =>{
    defNumber -=  1;

    number.innerHTML = defNumber;
    
    checkNum();
})

resetButton.addEventListener('click',() =>{
    defNumber = 0;

    number.innerHTML = defNumber; 
})



// -------------------------- Input -------------------------- //
const inputNumber = document.querySelector('.input'),
      buttonInput = document.querySelector('.btn-input');

buttonInput.addEventListener('click', () =>{
    if(
        isNaN(
            parseInt(
                inputNumber.value
                )
            )
        ) return

        defNumber +=  parseInt(inputNumber.value);
        number.innerHTML = defNumber;

        checkNum();
})


