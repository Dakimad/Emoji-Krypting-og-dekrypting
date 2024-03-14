**Dekryptering og Brukervennlighetstesting Skjema**

**Hav gjør nettsiden**

1. **MD5-kryptering av passord**:
Det har en funksjon (`encryptWithMD5`) som tar inn et passord og utfører MD5-kryptering på det.

2. **Kryptering**:
Når brukeren trykker på "Krypter" -knappen, hentes passordet og teksten fra input-feltet. Teksten konverteres deretter til en rekke emojis, og dette krypterte resultatet vises på nettsiden. Den krypterte teksten lagres også i `localStorage` sammen med passordet for senere dekryptering.

3. **Dekryptering**:
Når brukeren trykker på "Dekrypter" -knappen, hentes den krypterte teksten og det angitte passordet. Deretter utføres MD5-kryptering på det angitte passordet for sammenligning med lagrede krypterte passord. Hvis passordene stemmer overens, dekodes den krypterte teksten tilbake til den opprinnelige teksten og vises på nettsiden.

4. **Knappehåndtering**:
   Det er knapper for å bytte mellom krypterings- og dekrypteringsmodus. Disse knappene endrer visningen på nettsiden basert på hvilken modus som er valgt.

**Logg inn**

1. **Feilmeldinger aktiveres for feilsøking**:
Det første skriptet gjør er å aktivere visning av feilmeldinger for å lette feilsøking under utvikling. Dette bør fjernes eller endres i produksjonsmiljøet for sikkerhetsformål.

2. **Database tilkoblingsdetaljer**:
Det definerer detaljer for å koble til databasen, inkludert vertsadresse, brukernavn, passord og databaseskjema.

3. **Opprettelse av MySQLi-tilkobling**:
Deretter opprettes en tilkobling til databasen ved hjelp av MySQLi-objektet. Hvis tilkoblingen mislykkes, vil skriptet avslutte med en feilmelding.

4. **Behandling av forespørsel**:
Skriptet sjekker om forespørselsmetoden er POST. Dette antyder at data er sendt fra et skjema, for eksempel et påloggingsformular.

5. **Sikring av brukerinput**:
Brukerinndata, i dette tilfellet brukernavn og passord, blir sikret mot SQL-injeksjon ved å bruke `real_escape_string`-funksjonen.

6. **Utføring av spørring**:
En forberedt spørring blir utført for å hente data fra databasen basert på det oppgitte brukernavnet.

7. **Behandling av resultat**:
Resultatet av spørringen blir sjekket for å se om det finnes en matchende bruker. Hvis et samsvar blir funnet, blir det lagrede passordet sammenlignet med det innsendte passordet.

8. **Omdirigering ved vellykket pålogging**:
Hvis legitimasjonen er vellykket, omdirigeres brukeren til en annen side, for eksempel en innloggede side.

9. **Visning av feilmelding ved ugyldige legitimasjonsopplysninger**:
Hvis passordet ikke samsvarer med det lagrede passordet, vises en feilmelding.

10. **Lukking av databaseforbindelsen**:
Til slutt lukkes databaseforbindelsen for å frigjøre ressurser.

**Introduksjon:**
- Prosjektnavn: Dekrypteringsplattform
- Dato for testing: 04.03.2023

**Generell informasjon:**
- Testdeltakerens navn: Ellen
- Alder: 47
- Yrkesbakgrunn: Prosjektleder
- Tidligere erfaring med dekrypteringssystemer: Lite erfaring

**Oppgaver:**

**a. Utforske Hjemmesiden:**
- Instruksjon: Utforsk hjemmesiden og vurder navigasjonen, fargevalget, og lesbarheten av teksten.
- Observasjoner: Testdeltakeren likte fargevalget; rolige farger gjorde opplevelsen behagelig. Navigasjonen ble oppfattet som enkel og intuitiv, og teksten var lett leselig.

**b. Sjekke Krypteringseffektivitet:**
- Instruksjon: Utfør en krypteringsprosess og sjekk om teksten forblir lett leselig. Vurder også brukermanualen og informasjonssiden for veiledning.
- Observasjoner: Krypteringen fungerte som forventet, og teksten forble lett leselig. Brukermanualen ble oppfattet som informativ og enkel å følge.

**Brukertesting Skjema:**

**Introduksjon:**
- Hjemmesiden og dekrypteringsplattformen har som formål å tilby en sikker og brukervennlig tjeneste for kryptering og dekryptering av meldinger.

**a. Generell Erfaring:**
- Hva likte testdeltakeren best med hjemmesiden og dekrypteringsplattformen?
  - Svar: Jeg likte fargevalget; rolige farger gjorde opplevelsen behagelig.
- Hva fant testdeltakeren mest utfordrende eller forvirrende?
  - Svar: Jeg var bekymret for å glemme hvordan jeg brukte krypteringen.

**b. Navigasjon og Fargevalg:**
- Hvordan vurderer testdeltakeren navigasjonen på hjemmesiden?
  - Svar: Navigasjonen oppleves som enkel og intuitiv.
- Var fargevalget behagelig og passende for plattformens formål?
  - Svar: Ja, fargevalget ble oppfattet som behagelig og passende.

**c. Kryptering og Lesbarhet:**
- Hvordan opplevde testdeltakeren krypteringsprosessen?
  - Svar: Krypteringen fungerte som forventet og var enkel å utføre.
- Var teksten lett leselig etter kryptering?
  - Svar: Ja, teksten forble lett leselig etter kryptering.

**d. Brukermanual og Informasjonsside:**
- Hvordan vurderte testdeltakeren brukermanualens klarhet og nyttighet?
  - Svar: Brukermanualen ble oppfattet som klar og nyttig.
- Ga informasjonssiden tilstrekkelig veiledning om plattformens funksjoner og formål?
  - Svar: Ja, informasjonssiden ga tilstrekkelig veiledning om plattformens funksjoner og formål.

**Tilbakemeldinger:**
- Hva likte testdeltakeren best med dekrypteringsplattformen?
  - Svar: Jeg likte fargevalget; rolige farger gjorde opplevelsen behagelig.
- Hva var mest utfordrende eller forvirrende for testdeltakeren?
  - Svar: Jeg var bekymret for å glemme hvordan jeg brukte krypteringen.
- Eventuelle forslag til forbedringer eller endringer?
  - Svar: Jeg ønsker en funksjon som lar meg hoppe mellom brukermanualen og krypteringen, slik at jeg kan referere til instruksjonene når jeg trenger det uten å forlate skjemaet.
    
Før:
<img width="1440" alt="Screenshot 2024-03-06 at 13 08 20" src="https://github.com/Dakimad/Emoji-Krypting-og-dekrypting/assets/104507449/467b9df7-5416-44d1-92e8-f01be9c22ee1">

Etter:
<img width="1439" alt="Screenshot 2024-03-06 at 13 08 54" src="https://github.com/Dakimad/Emoji-Krypting-og-dekrypting/assets/104507449/929329ae-1323-40c9-85a5-05849fe822a1">



**Brukertesting 2:**

**Generell informasjon:**
- Testdeltakerens navn: Daniel
- Alder: 32
- Kjønn: Mann
- Yrkesbakgrunn: Dataingeniør

**a. Generell Erfaring:**
- Hva likte testdeltakeren best med hjemmesiden og dekrypteringsplattformen?
  - Svar: Jeg er imponert over hvor enkelt og intuitivt systemet er å bruke. Det gjorde hele krypteringsprosessen problemfri.
- Hva synes testdeltakeren var mest imponerende eller overraskende?
  - Svar: Jeg ble positivt overrasket over hvor raskt jeg kunne lære å bruke plattformen, selv med begrenset erfaring med lignende systemer.

**b. Navigasjon og Fargevalg:**
- Hvordan vurderer testdeltakeren navigasjonen på hjemmesiden?
  - Svar: Navigasjonen var enkel, og jeg fant raskt det jeg trengte uten problemer.
- Var fargevalget behagelig og passende for plattformens formål?
  - Svar: Fargevalget var moderne og passende, det skapte en positiv brukeropplevelse.

**c. Kryptering og Lesbarhet:**
- Hvordan opplevde testdeltakeren krypteringsprosessen?
  - Svar: Krypteringen var enkel å utføre, og det var tydelig at plattformen var designet med brukervennlighet i tankene.
- Var teksten lett leselig etter kryptering?
  - Svar: Ja, teksten forble klart synlig, selv etter kryptering.

**d. Brukermanual og Informasjonsside:**
- Hvordan vurderte testdeltakeren brukermanualens klarhet og nyttighet?
  - Svar: Brukermanualen var informativ og hjalp meg å raskt forstå systemets funksjoner.
- Ga informasjonssiden tilstrekkelig veiledning om plattformens funksjoner og formål?
  - Svar: Ja, informasjonssiden var en nyttig ressurs for å forstå de ulike funksjonene på plattformen.

**Tilbakemeldinger:**
- Hva likte testdeltakeren best med dekrypteringsplattformen?
  - Svar: Jeg likte den enkle og brukervennlige designen som gjorde hele prosessen glatt og effektiv.
- Hva var mest imponerende eller overraskende for testdeltakeren?
  - Svar: Jeg ble imponert over hvor raskt jeg kunne tilpasse meg plattformen, selv uten mye erfaring.
- Egen detalie: jeg syns det var lit rart at det var hvit i hjørene på navigasjons baren på krypteringsnettsiden

Før:
      <img width="1439" alt="Screenshot 2024-03-06 at 13 08 54" src="https://github.com/Dakimad/Emoji-Krypting-og-dekrypting/assets/104507449/633c2c78-63cb-4d12-95c9-a7faab1bb43e">

Etter:
      <img width="1440" alt="Screenshot 2024-03-07 at 19 47 18" src="https://github.com/Dakimad/Emoji-Krypting-og-dekrypting/assets/104507449/f7e772be-6860-48ff-9f03-36771321ec67">



**Brukertesting 3:**

**Generell informasjon:**
- Testdeltakerens navn: Tina
- Alder: 19
- Kjønn: Kvinne
- Utdanning: Student innen informatikk

**a. Generell Erfaring:**
- Hva likte testdeltakeren best med hjemmesiden og dekrypteringsplattformen?
  - Svar: Jeg elsket den moderne designen og brukervennligheten. Som student innen informatikk, følte jeg meg hjemme og fant alt veldig intuitivt.
- Hva synes testdeltakeren var mest imponerende eller overraskende?
  - Svar: Jeg ble imponert over hvor lett jeg kunne bruke plattformen til å kryptere og dekryptere meldinger, spesielt med tanke på at jeg er ganske ny innenfor dette feltet.

**b. Navigasjon og Fargevalg:**
- Hvordan vurderer testdeltakeren navigasjonen på hjemmesiden?
  - Svar: Navigasjonen var enkel å forstå, og jeg kunne raskt finne det jeg lette etter.
- Var fargevalget behagelig og passende for plattformens formål?
  - Svar: Jeg elsket fargevalget; det gjorde hele opplevelsen mer engasjerende og tiltalende.

**c. Kryptering og Lesbarhet:**
- Hvordan opplevde testdeltakeren krypteringsprosessen?
  - Svar: Krypteringen var en lek! Jeg kunne enkelt følge prosessen uten å føle meg overveldet.
- Var teksten lett leselig etter kryptering?
  - Svar: Ja, teksten forble like klar og leselig som før krypteringen.

**d. Brukermanual og Informasjonsside:**
- Hvordan vurderte testdeltakeren brukermanualens klarhet og nyttighet?
  - Svar: Brukermanualen var informativ og lettlest, noe som gjorde det enkelt å forstå plattformens funksjoner.
- Ga informasjonssiden tilstrekkelig veiledning om plattformens funksjoner og formål?
  - Svar: Absolutt! Informasjonssiden var en flott ressurs for å få oversikt over plattformens funksjoner og formål.

**Tilbakemeldinger:**
- Hva likte testdeltakeren best med dekrypteringsplattformen?
  - Svar: Jeg likte den moderne designen og enkelheten som gjorde det enkelt for selv en student som meg å bruke plattformen.
- Hva var mest imponerende eller overraskende for testdeltakeren?
  - Svar: Jeg ble positivt overrasket over hvor raskt jeg kunne mestre plattformen, til tross for min begrensede erfaring innenfor dette feltet.



**Serveroppsett**

**Bakgrunn:**
Jeg tok initiativ til å konfigurere to containere på en Core med Ubuntu-serveren min. En container skulle være for kjøring av nettsiden, mens den andre skulle være for MySQL-databaser.

**Trinnene i Serveroppsettet:**

1. **Opprettelse av Containere:**
   - Jeg startet med å lage to containere – en Core med Ubuntu-server for nettsiden og en MySQL-container for databaseoppsett.

    
2. **Minimal Krav**
   - De Minimmale kravene for å sette opp serverene son som jeg har gjort det er: 
<img width="433" alt="Screenshot 2024-03-12 at 13 31 06" src="https://github.com/Dakimad/Emoji-Krypting-og-dekrypting/assets/104507449/9874e947-c09d-450b-9a3d-91d06e50691e">

3. **Klone Github-repositoriet:**
   - For Core-containeren, klonte jeg GitHub-repositoriet rett mot serveren. Dette trinnet var enkelt og raskt utført.

4. **Tilpasninger og Feilretting:**
   - Etter kloneprosessen måtte jeg gjøre noen tilpasninger på grunn av forskjeller mellom min laptop og serveren. Dette inkluderte å justere enkelte filer for å sikre sømløs drift på serveren. For å implementere disse endringene, gikk jeg inn i serverkoden og rettet opp noen småfeil. Dette skyldes at Ubuntu ikke er like tolerant som macOS når det gjelder kodepresisjon. Selv om VS Code tillater bruk av små bokstaver i filnavn, fungerer det ikke som forventet når filnavnet inneholder store bokstaver og jeg refererer til det med små bokstaver i koden. da det viste seg å være en effektiv metode.

5. **Alternativ Tilpasning:**
   - En annen tilpasningsmetode, selv om mer tidkrevende, er å slette alle filene i containeren og deretter klone GitHub-repositoriet på nytt. Dette kan være et alternativ for de som foretrekker en ren start.
  

**Sikkerhet**

1. **SSL-sertifikat (HTTPS):**
   - *Hvorfor:* Kryptering av dataoverføring mellom brukerens nettleser og nettsiden er essensiell for å beskytte sensitiv informasjon som personopplysninger, innloggingsdetaljer og  betalingsinformasjon.

2. **Brannmur:**
   - *Hvorfor:* En brannmur bidrar til å hindre uautorisert tilgang til nettsiden og beskytter mot ulike typer cyberangrep, inkludert DDoS (Distributed Denial of Service) angrep.

3. **Regelmessige sikkerhetsoppdateringer:**
   - *Hvorfor:* Oppdatering av nettsidens programvare og plattform er avgjørende for å tette sikkerhetshull og beskytte mot kjente sårbarheter. Dette gjelder både nettsideprogramvare,   plugins og serverprogramvare.

4. **Sterke autentiseringsmetoder:**
   - *Hvorfor:* Bruk av sterke passord, tofaktorautentisering (2FA) og andre autentiseringsmekanismer hjelper til med å forhindre uautorisert tilgang til brukerkontoer.

5. **Datakryptering:**
   - *Hvorfor:* Kryptering av lagrede data beskytter sensitiv informasjon mot uautorisert tilgang, selv om en inntrenger får tilgang til serveren eller databasen.

6. **Regelmessige sikkerhetskopier:**
   - *Hvorfor:* Sikkerhetskopiering av nettsideinnhold og data er viktig for å kunne gjenopprette informasjon i tilfelle datahavari, angrep eller annen uforutsett hendelse.

7. **Intrusjonsdeteksjonssystemer (IDS) og Intrusjonsforebyggingssystemer (IPS):**
   - *Hvorfor:* Disse systemene overvåker nettverkstrafikk for mistenkelig aktivitet og kan enten varsle eller hindre uautoriserte forsøk på tilgang.

8. **Sikkerhetsrevisjoner og penetrasjonstesting:**
   - *Hvorfor:* Periodiske sikkerhetsrevisjoner og penetrasjonstester hjelper til med å identifisere sårbarheter og svakheter i sikkerheten før potensielle angripere gjør det.

9. **Godkjenningskontroll:**
   - *Hvorfor:* Begrens tilgangen til sensitive områder og funksjoner til kun autoriserte brukere. Dette reduserer risikoen for misbruk og uautorisert tilgang.

10. **Personvern og databeskyttelse:**
    - *Hvorfor:* Overholdelse av personvernlover og implementering av retningslinjer for håndtering av personopplysninger er nødvendig for å beskytte brukernes personvern og unngå  juridiske konsekvenser.


