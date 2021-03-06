
// Ikke rør!!
showView();
function showView() {
    let liste = model.viewArray;
    let html = '<div id="frameDiv">';
    for (let i = 0; i < liste.length; i++) {
        pictureDivInnerHtml(i);
        html += `<div id="pictureDiv${liste[i].num}" class="pictureDivs" onclick="challenge${liste[i].num}(${i})">${model.viewArray[i].picture}</div>`;
    }
    html += '</div>'
    html += explanation();


    document.getElementById('app').innerHTML = html;
}
function pictureDivInnerHtml(i) {
    let liste = model.viewArray[i];
    if (liste.picture == '<img src="bilder/rightPicture'+liste.num+'.jpg" style="width: 100%; height: 100%;">' || liste.picture == 'Klikk og se om du klarte <br>Challenge '+liste.num) {
    } 
    else if (liste.picture == '<img src="bilder/wrongPicture'+model.viewArray[i-1].num+'.jpg" style="width: 100%; height: 100%;">') {
        setTimeout(function() {
            model.viewArray[i].picture = 'Klikk og se om du klarte <br>Challenge '+liste.num;
            showView();
        },3000);
    }
    else {
        setTimeout(function() {
            model.viewArray[i].picture = 'Klikk og se om du klarte <br>Challenge '+liste.num;
            showView();
        },3000);
        model.viewArray[i].picture = 'Her er det noe galt, prøv igjen:)'
    }
}

function explanation() {
    let html = `
    <div id="explanation">
        <h2>Litt forklaring</h2>
        <p>
            Poenget med denne oppgaven er å jobbe med å manuvrere i modellen og bli litt tryggere på denne måten en modell er laget. Du skal bruke if-setninger og løkker.<br><br>Din oppgave er å skrive 9 controller funksjoner som finner fram til et bilde i modellen. <br><br>I controlleren er funksjonene klare med navn osv. <br>Det du skal gjøre er å finne riktig bilde i modellen og lage controller funksjoner som setter variablen "picture" til det riktige bildet i modellen. <br>
            Modellen er delt opp i challengeOne til challengeNine. Navnene passer til hver controllerfunksjon sitt navn. <br><br>
            Lager du en fungerende controllerfunksjon så vil det når du trykker på samsvarende rute i nettleseren komme fram en bit av et større bilde. Hvis funksjonen finner fram til feil bilde. Vil et søtt dyr vise seg, og så forsvinne. <br><br><br>
            <b>Litt Regler:</b><br>
            De eneste sidene du trenger er controller.js for å skrive funksjoner i og modellen for å finne fram i.
            <b>Det eneste du skal endre på er controller.js.</b><br>
            Det er viktig at du <b>ikke</b> manuelt skriver inn indexen i et array. foreksempel myArray[2]. Du har heller ikke lov å sette 2 til en variabel og så bruke den variablen som index.<br><br>
            Lykke til!
            <br><br>
            ps. Hvis du sitter skikkelig fast så er det løsninger i controllerSolution.js<br>
            <br>
            ps ps. <b>Kun</b> hvis du står skikkelig fast. 
        </p>
    </div>
    `;
    return html;
}