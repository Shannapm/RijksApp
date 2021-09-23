Uitleg Applicatie

- bovenin zie je een button met een zoekfunctie, wanneer je hierop klikt kun je een zoekterm invoeren, dat kan vanalles zijn.
- De applicatie geeft 3 afbeeldingen van de eerste 30 resultaten weer. waar je dooreen kan bladeren met behulp van pijltjes.
- wanneer je over de afbeelding heen scrollt zie je van wie het kunstwerk is en de titel ervan.
- wanneer er in de zoekresultaten een opject zit zonder afbeelding, wordt deze overgeslagen.

Wat goed ging :

- Ik vond het een erg leerzame en leuke opdracht!
- het bedenken van een layout, en die ook kunnen verwezelijken .
- er zijn een aantal dingen die heel soepel en snel gingen

Wat nog niet (helemaal) gelukt is/ niet goed ging:

_ de afbeeldingen laden heel langzaam, waardoor het soms lijkt of er een paar dubbel bij zitten. Ik zou niet weten hoe ik dat moet oplossen
- Detail content creeren, en weer laten verdwijnen in de footer, wanneer er op een afbeelding geklikt wordt. Ik weet niet precies waarom niet, ik heb een functie gemaakt die het objectnummer in de data opzoekt en daar de passende informatie bij. toch laat hij elke keer dezelde tekst zien.
  Ik heb mijn code daarvan laten staan, ik hoop er feedback en misschihen een oplossing op te kunnen krijgen..
- Niet genoeg tijd gehad om alles responsive te maken en achteraf beseft dat ik dat misschien beter vanaf het begin had kunnen doen.
- Ik heb nog nooit met React of een andere framework gewerkt. Ik wil dit zeker gaan leren maar doordat ik voor deze opdracht maar een paar dagen de tijd had, heb ik besloten om het zonder framework te doen.

Wat ik nog aan de opdracht zou willen doen:

- Zou nog een mooiere transitie tussen afbeeldingen willen maken als je naar links of rechts drukt
- kleur van achttergrond veranderen naar Main kleur van artwork
- Wil mijn code duidelijker en korter kunnen maken -->

Eerste opdracht:

let getAnagrams = (words) => {
let anagrams = {}
let collectedAnagrams = []

words.forEach(word => {
let letters = word.toLowerCase().split('').sort().join('')

    anagrams[letters] = anagrams[letters] || []

    anagrams[letters].push(word)

})

for(let key in anagrams){

collectedAnagrams.push(anagrams[key])
}

return collectedAnagrams
}
