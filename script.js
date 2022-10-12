const btnCopy = document.querySelectorAll('.btn-copy');
const txtCopy = document.querySelectorAll('.link');

console.log(btnCopy)

btnCopy.forEach(btnCopy_f => {

    btnCopy_f.addEventListener('click', function (index) {


        console.log('Se presiono el' + index )



        // btnCopy_f.clipboard.writeText(txtCopy.innerText);

    })

});

txtCopy.forEach(function (element, index, array) {
  console.log("element = " + element, "index = " + index, "array = " + array);
  
});