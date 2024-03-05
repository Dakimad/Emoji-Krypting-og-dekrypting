// Henter referanser til HTML-elementer
const text = document.querySelector("#textmsg"); // Referanse til tekstfeltet for input
const password = document.querySelector('#password'); // Referanse til passordfeltet
const result = document.querySelector("#result"); // Referanse til resultatfeltet for visning av kryptert/avkryptert tekst

// Initialiserer variabler for bruk i kryptering og dekryptering
var clutter = ""; // Variabel for å lagre kryptert tekst
var parinam = ""; // (Ikke brukt for øyeblikket)

// Funksjon for å utføre MD5-kryptering på passordet
function encryptWithMD5(pass) {
  const md5 = new SparkMD5.ArrayBuffer();
  md5.append(pass);
  return md5.end();
}

// Funksjon for kryptering
function encryption() {
  // Legger til en event-lytter på krypteringsknappen
  document.querySelector("#encrypt-btn").addEventListener("click", function () {
    // Henter passordet
    var pass = document.getElementById("password").value;
    console.log(pass);

    // Utfører MD5-kryptering på passordet
    var encryptedPass = encryptWithMD5(pass);

    // Henter teksten fra input-feltet
    var input = document.getElementById("textmsg").value;
    console.log(input);

    // Konverterer teksten til en rekke emojis
    var str = input.split("");
    str.forEach((element) => {
      clutter += `&#128${element.charCodeAt()} `;
    });

    // Viser resultatet på nettsiden
    document.querySelector("#result").innerHTML = clutter;

    // Lagrer kryptert tekst i localStorage for senere dekryptering
    var dataarr = [];
    if (JSON.parse(localStorage.getItem("data1"))) {
      dataarr = JSON.parse(localStorage.getItem("data1"));
      console.log(dataarr);
      dataarr.push({
        pass: encryptedPass,
        input: input,
        clutter: clutter,
      });
    } else {
      dataarr = [{ pass: encryptedPass, input: input, clutter: clutter }];
    }
    localStorage.setItem(`data1`, JSON.stringify(dataarr));
  });
}

// Funksjon for dekryptering
function decryption() {
  document.querySelector("#decrypt-btn").addEventListener("click", function () {
    var clutter2 = '';
    var input2 = document.querySelector("#emojimsg").value
    var finalPass = document.querySelector("#finalpassword").value
    var user = JSON.parse(localStorage.getItem('data1'))
    console.log(user)
    var str2 = input2.split(" ")
    str2.forEach(element => {
        clutter2 += `&#${(element.codePointAt(0))} `
    });
    console.log(clutter2)
    var found;
    for(let i of user){
        // Utfører MD5-kryptering på det angitte passordet for sammenligning
        var encryptedFinalPass = encryptWithMD5(finalPass);

        // Sammenligner MD5-krypterte passord for dekryptering
        if (i.pass === encryptedFinalPass && i.clutter == clutter2) {
            found = i;
            console.log(i);
            break;
        }
    }
    if (found && found.clutter === clutter2) {
        console.log("jay ho");
        document.querySelector("#result").style.display = `block`;
        document.querySelector("#result").style.color = `#eee`;

        document.querySelector("#result").innerHTML = found.input;
    } else {
        document.querySelector("#result").style.display = `block`;
        document.querySelector("#result").style.color = `red`;
        document.querySelector("#result").innerHTML = "Feil passord!";
    }
  })
}

// Funksjon for å håndtere knappeklikk og navigasjon
function btnClicking() {
  document.querySelector("button").addEventListener("click", function () {
    document.querySelector("#result").style.display = "block";
  })

  // Bytter til dekrypteringsmodus
  document.querySelector("#dec-btn").addEventListener("click", function () {
    document.querySelector("#result").style.display = "none";
    document.querySelector("#dekryptering").style.display = "block";
    document.querySelector("#kryptering").style.display = "none";
    document.querySelector("#dec-btn").style.backgroundColor = "#333";
    document.querySelector("#enc-btn").style.backgroundColor = "#222";
    document.querySelector("#main>h1 span img").style.rotate = '270deg';
  })

  // Bytter til krypteringsmodus
  document.querySelector("#enc-btn").addEventListener("click", function () {
    document.querySelector("#dekryptering").style.display = "none";
    document.querySelector("#result").style.display = "none";
    document.querySelector("#kryptering").style.display = "block";
    document.querySelector("#dec-btn").style.backgroundColor = "#222";
    document.querySelector("#enc-btn").style.backgroundColor = "#333";
    document.querySelector("#main>h1 span img").style.rotate = '90deg';
  })
}

// Kaller funksjonene for kryptering, dekryptering og knappehåndtering
encryption();
decryption();
btnClicking();
