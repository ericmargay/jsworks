const btnCopy = document.querySelectorAll('.btn-copy');
const txtCopy = document.querySelectorAll('.link');

btnCopy.forEach((btnCopy_f, index) => {
	btnCopy_f.addEventListener('click', function handleClick() {
		console.log(index);
		console.log(txtCopy.innerText);





        // btnCopy_f.clipboard.writeText(txtCopy.innerText[index]);


	})
});




// btnCopy.forEach(box => {
//   box.addEventListener('click', function handleClick(event) {
//     console.log('box clicked', event);

//     box.setAttribute('style', 'background-color: salmon;');
//   });
// });


// const btnCopy = document.querySelectorAll('.btn-copy');
// 

// console.log(btnCopy)

// btnCopy.forEach(btnCopy_f => {

//     btnCopy_f.addEventListener('click', function (index) {


//         console.log('Se presiono el' + index.target)




//     })

// });



// txtCopy.forEach(function (element, index, array) {
//   console.log("element = " + element, "index = " + index, "array = " + array);
  
// });