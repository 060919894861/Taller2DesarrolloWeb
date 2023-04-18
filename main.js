const array = [];

function returnTotal(price, quantity) {
  return price * quantity;
}

function drawRows(arr) {
  const { product_name, price, quantity, total } = arr.pop();
  return (
    "<tr><td><h4> " +
    product_name +
    "</h4></td>\
                    <td> <h4> " +
    price +
    "</h4> </td>\
                    <td> <h4> " +
    quantity +
    "</h4> </td>\
                    <td> <h4> " +
    total +
    "</h4> </td>\
                </tr>;"
  );
}

function getRows() {
  $(document).ready(function () {
    $(".close").on("click", function (e) {
      e.preventDefault();
      $(this).parent().parent().remove();
    });

    $("#submit").click(function () {
      let product_name = $("input[name=product_name]").val();
      let price = $("input[name=price]").val();
      let quantity = $("input[name=quantity]").val();
      let total = returnTotal(price, quantity);
      array.push({ product_name, price, quantity, total });
      let newArr = drawRows(array);
      $("#table tbody").append(newArr);
      $("input[type=text]").val("");
      $("input[type=number]").val("");
      $("input[type=number]").val("");
    });
  });
}

getRows();



const numeros = [];


function llenarArreglo (num1, num2, num3, num4){
  numeros.push(num1);
  numeros.push(num2);
  numeros.push(num3);
  numeros.push(num4);
}

function hasDuplicates(arr) {
  return new Set(arr).size !== arr.length;
}

function getElements() {
  let n1 = document.getElementById("num1");
  let n2 = document.getElementById("num2");
  let n3 = document.getElementById("num3");
  let n4 = document.getElementById("num4");

  btn2.addEventListener("click", function () {    
    llenarArreglo(n1.value,n2.value,n3.value,n4.value);
    if (!hasDuplicates(numeros)) {
      const mayor = Math.max(...numeros);
      const menor = Math.min(...numeros);
      const resultado = numeros.filter(num => num != mayor);
      $("#result").append(`<p>El número mayor es ${mayor}, el número menor es ${menor}, y el arreglo sin el número mayor queda así: [${resultado}]</p>`);
  }
  });
}

getElements();  
 
