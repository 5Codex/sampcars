var buffalo;
var bullet;
var carros = {'Buffalo':'Modelo1', 'Bullet':'Modelo2'};
sessionStorage.setItem('carros', JSON.stringify(carros));

function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}

function start(){
    $('#buffalo').html(buffalo);
    $('#bullet').html(bullet);

    if ($('#buffalo').click(function(){})) {
    }
}

