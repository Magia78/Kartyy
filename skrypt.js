
let licznik = 0;
function zmienDane(){
    event.preventDefault();
    const imie = document.getElementById("imie").value;
    const wiek = document.getElementById("wiek").value;
    const tlo = document.getElementById("kolorT").value;
    const czcionka = document.getElementById("kolorC").value;
    const wzrost = document.getElementById("wzrost").value;

    document.getElementById("p1").innerHTML = "Imię :" + imie;
    document.getElementById("p2").innerHTML = "Wiek :" + wiek;
    document.getElementById("p3").innerHTML = "Wzrost :" + wzrost;
    document.getElementById("karta").style.backgroundColor = tlo;
    document.getElementById("panel").style.backgroundColor = tlo;
    document.getElementById("licznik").style.backgroundColor = tlo;
    document.getElementById("obraz").src = document.getElementById("obrazek").value;
    licznik++;
    document.getElementById("licznik").innerHTML = "Licznik zmiany kart: " + licznik;
    document.body.style.color = czcionka;
}