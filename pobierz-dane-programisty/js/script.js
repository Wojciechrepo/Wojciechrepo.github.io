console.log('Pobieranie danych programisty');

// $(document).ready(function() {

function getData () {
    let container = document.createElement('div');
    $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
    .done(function(data) {
        console.log(data);
        console.log(data.imie);
        console.log(data.nazwisko);
        console.log(data.zawod);
        console.log(data.firma);

        
        let imie = document.createElement('p');
        let nazwisko = document.createElement('p');
        let zawod = document.createElement('p');
        let firma = document.createElement('p');

        imie.innerText = data.imie;
        nazwisko.innerText = data.nazwisko;
        zawod.innerText = data.zawod;
        firma.innerText = data.firma;

        container.setAttribute('id', 'dane-programisty');

        let element =  document.getElementById('dane-programisty');
        if (typeof(element) != 'undefined' && element != null)
        {
            // Exists.
        
            element.appendChild(imie);
            element.appendChild(nazwisko);
            element.appendChild(zawod);
            element.appendChild(firma);

        } else {
            container.appendChild(imie);
            container.appendChild(nazwisko);
            container.appendChild(zawod);
            container.appendChild(firma);
            document.body.appendChild(container);
        }
    
    })
    .fail(function(error) {
        console.error(error);
    })

}
  
// });

let btnGetData = document.getElementById('get-data');

let daneProgramisty = document.getElementById('dane-programisty');

btnGetData.addEventListener(`click`, getData);


/* Stwórz stronę zawierającą przycisk pt. "Pobierz dane"

Po kliknięciu przycisku pobierz dane o programiście w formacie JSON z internetu za pomocą Javascript lub jQuery:

https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php

Pobrane dane wyświetl poniżej przycisku w nowym, stworzonym DIVie o id="dane-programisty".

Zadanie domowe zrób za pomocą GitHub Pages.

Podpowiedź przed wysłaniem zadania do sprawdzenia:
- pracując z mechanizmem AJAX używaj wbudowanych funkcji jQuery */
