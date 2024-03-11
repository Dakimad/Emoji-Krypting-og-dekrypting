<?php
// Aktiver feilmeldinger for feilsøking
// Fjern eller endre disse innstillingene i produksjon
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Database tilkoblingsdetaljer
$dbhost = '172.20.128.78:3306';
$dbuser = 'adminusr';
$dbpass = 'Skole123';
$dbname = 'login';

// Opprett en ny MySQLi-tilkobling
$conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname);

// Sjekk om tilkoblingen er vellykket
if ($conn->connect_error) {
    die('Tilkobling mislyktes: ' . $conn->connect_error);
}

// Variabel for å lagre feil- eller suksessmeldinger
$message = '';

// Sjekk om forespørselsmetoden er POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Unngå SQL-injeksjon ved å sikre brukerinput
    $input_username = $conn->real_escape_string($_POST['username']);
    $input_password = $conn->real_escape_string($_POST['password']);

    // Modifisert for å bruke forberedte uttalelser for forbedret sikkerhet
    $sql = $conn->prepare("SELECT usr, pas FROM login WHERE usr = ?");
    $sql->bind_param("s", $input_username);
    $sql->execute();
    
    // Få resultatet av spørringen
    $result = $sql->get_result();

    // Sjekk for feil i spørringen
    if (!$result) {
        die('Feil i SQL-spørring: ' . $conn->error);
    }

    // Sjekk om det finnes en matchende bruker
    if ($result->num_rows > 0) {
        // Hent radedata
        $row = $result->fetch_assoc();
        $stored_password = $row['pas']; // Anta at 'pas' er kolonnen for passord

        // Sjekk om det angitte passordet samsvarer med det lagrede passordet
        if ($input_password === $stored_password) {
            // Omdiriger til 'website.php' hvis legitimasjonen er gyldig
            echo "<script>window.location.href = 'website.php';</script>";
            exit();
        } else {
            // Vis feilmelding hvis passordet er feil
            $message = "Ugyldig brukernavn eller passord. Prøv igjen.";
        }
    } else {
        // Vis feilmelding hvis ingen matchende bruker er funnet
        $message = "Ugyldig brukernavn eller passord. Prøv igjen.";
    }

    // Lukk forberedt uttalelse
    $sql->close();
}

// Lukk databaseforbindelsen
$conn->close();
?>
