# Biblioteca Virtuala - Aplicatie Angular

## Autor
Chelaru Denisa-Camelia, grupa 4LF301A

## Descriere

Aceasta aplicatie este o Biblioteca Virtuala dezvoltata folosind Angular. Ofera utilizatorilor posibilitatea de a cauta si vizualiza carti disponibile, de a adauga carti noi in biblioteca si de a gestiona continutul bibliotecii.

## Caracteristici

- **Autentificare si Inregistrare:** Utilizatorii trebuie sa se autentifice sau sa-si creeze un cont pentru a avea acces la functionalitatile aplicatiei.
- **Pagina Principala:** Afiseaza o lista de carti disponibile, evidentiind detalii precum titlul, autorul si categoria fiecarei carti.
- **Detalii Carti:** La selectarea unei carti din lista, utilizatorul poate vedea mai multe informatii despre acea carte, cum ar fi numarul de pagini, anul aparitiei si o descriere detaliata.
- **Gestionare Carti:** Utilizatorii autentificati pot sterge carti din biblioteca.
- **Adaugare de Carti:** Posibilitatea de a adauga noi carti in biblioteca prin completarea unui formular cu informatii despre carte.

## Tehnologii folosite

- **Angular:** Platforma principala pentru dezvoltarea aplicatiei web.
- **HTML & CSS:** Utilizate pentru structurarea si stilizarea interfetei aplicatiei.
- **JSON Server:** Pentru simularea unui server API pentru stocarea si gestionarea datelor despre utilizatori si carti.

## Configurare si Rulare

1. **Instalare:** Dupa descarcarea arhivei, dezarhivati fisierul proiectului. Deschideti linia de comanda, navigati in fisierul proiectului si dati comanda `npm install` pentru a instala dependentele.
2. **Rulare:** Porniti aplicatia din linia de comanda cu instructiunea `ng serve`. Deschideti un alt terminal si porniti serverele de simulare JSON cu `json-server --watch db.json` si `json-server --watch db_books.json --port 4000`.
3. **Acces:** Accesati aplicatia in browser la adresa `http://localhost:4200` si serverele json la adresele `http://localhost:3000/user`, respectiv `http://localhost:4000/books`.
