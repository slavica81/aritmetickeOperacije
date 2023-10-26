        var prviBroj = prompt("Unesite prvi broj: "); 
        var operacija = prompt("Unesite znak operacije: "); 
        var drugiBroj = prompt("Unesite drugi broj: ");


        var rezultat_1 = parseInt(prviBroj) + parseInt(drugiBroj);
        var rezultat_2 = parseInt(prviBroj) - parseInt(drugiBroj);
        var rezultat_3 = parseInt(prviBroj) * parseInt(drugiBroj);
        var rezultat_4 = parseInt(prviBroj) / parseInt(drugiBroj);

        if (operacija == "+") {
            alert("Rezultat je: " + rezultat_1);
        } else if (operacija == "-") {
            alert("Rezultat je: " + rezultat_2);
        } else if (operacija == "*") {
            alert("Rezultat je: " + rezultat_3);
        } else if (operacija == "/") {
            alert("Rezultat je: " + rezultat_4);
        }
