let productCount = 0;
let tableId = document.getElementById("productTable");
let productArr = [];
let resultArr = [];
let resultStr = "";
let inputChange = 0;
function addProduct(product) {
    if (product == ""){
        return -1;
    }else {
        productArr.push(product);
        productCount++;
        display(productArr);
        document.getElementById("newProduct").value = "";
    }
}
function display(product,inputEdit,indexChange) {
    resultStr = "";
    resultArr = [];
    let col1 = "";
    let col2 = "";
    let col3 = "";
    for (let i = 0; i < product.length; i++) {
        if(indexChange == i) {
            col1 = `<tr><td>${product[i]}<br>${inputEdit}</td>`;
        }else {
            col1 = `<tr><td>${product[i]}</td>`;
        }
        col2 = '<td><button onclick="editProduct('+i+',true)">Edit</button></td>';
        col3 = `<td><button id='${i}' onclick="deleteProduct(this.id)">Delete</button></td></tr>`;
        resultArr.push(col1 + col2 + col3);
        resultStr += resultArr[i];
    }
    document.getElementById("productCount").innerHTML = "Product " + productCount;
    tableId.innerHTML = resultStr;
}

function deleteProduct(index) {
    productArr.splice(index,1);
    productCount--;
    display(productArr);

}

function editProduct(index,isEdit) {
    inputChange = index;
    let inputEdit
    if (isEdit) {
        inputEdit = `<input type='text' id='input${index}' oninput="inputArea(this,this.value)" placeholder="Enter change or leave blank">`
    }else {
        inputEdit ='';
    }
    display(productArr,inputEdit,index);
}
function inputArea(inputElement,inputValue) {
    inputElement.addEventListener("keyup",function (){
        console.log(inputChange)
        //console.log(inputValue);
        if (event.keyCode === 13){
            if (inputValue !=""){
                // console.log("Enter");
                // console.log(inputValue+" inputValue "+inputChange)
                productArr.splice(inputChange,1,inputValue);
                console.log(productArr);
                editProduct(-1);
            }else {
                editProduct(-1);
            }
        }
    })
}