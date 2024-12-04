let tabelle = [

    {
        "position":
            [
                1, 2, 3, 4, 5, 6
            ]
    },
    {
        "gebaecksorte":
            [
                "Zwetschgenmännle",
                "Reiterle",
                "Elise Pflaume-Zimt",
                "Südliche Elise",
                "Mandel Schoko-Traum",
                "Bio-Christstollen"
            ]
    },
    {
        "menge":
            [
                120, 98, 130, 100, 103, 55
            ]
    },
    {
        "einzelpreis":
            [
                5.00, 3.00, 9.50, 9.50, 9.50, 10
            ]
    },
    {
        "sorge gesamt":
            [
                null, null, null, null, null, null
            ]
    }
]

let untertabelle = [
    {
        "Zwischensumme": null
    },
    {
        "Steuersatz": 19
    },
    {
        "Mehrwertsteuer": null
    },
    {
        "Gesamt": null
    }

]


let x = [
    "0", "A", "B", "C", "D", "E"
]

let y = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"
]


var skript = {
    1: "Tabellenzelle B zwei",
    2: "Tabellenzelle B drei",
    3: "Tabellenzelle B vier",
    4: "Tabellenzelle B fünf",
    5: "Tabellenzelle B sechs",
    6: "Tabellenzelle B sieben",
    7: "Tabellenzelle E zwei",
    8: "Wie berechne ich die Einnahmen für Bio-Christstollen?"
}



// Maxis Skript
var tz = "Tabellenzelle ";
let e = "die Einnahmen ";
let wbi = "wie berechne ich ";



let gebaecksorten =
    [
        "Zwetschgenmännle",
        "Reiterle",
        "Elise Pflaume-Zimt",
        "Südliche Elise",
        "Mandel Schoko-Traum",
        "Bio-Christstollen"
    ];

let menge =
    [
        120, 98, 130, 100, 103, 55
    ];


let einzelpreis =
    [
        5.00, 3.00, 9.50, 9.50, 9.50, 10
    ];


let steuersatz = 0.19;


let tabelle_excel = [

    [
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"
    ],
    [
        "A", "Position", "eins", "zwei", "drei", "vier", "fünf", "sechs"
    ],
    [
        "B",
        "Gebaecksorte",
        "Zwetschgenmännle",
        "Reiterle",
        "Elise Pflaume-Zimt",
        "Südliche Elise",
        "Mandel Schoko-Traum",
        "Bio-Christstollen"
    ],
    [
        "C", "Menge", "120", "98", "130", "100", "103", "55"
    ],
    [
        "D", "Einzelpreis", "5 Euro", "3 Euro", "9 Euro 50", "9 Euro 50", "9 Euro 50", "10 Euro"
    ],
    [
        "E", "Einnahmen", "leer", "leer", "leer", "leer", "leer", "leer"
    ]
]

let berechnung = ["600 Euro","294 Euro","1235 Euro","950 Euro","978.50 Euro","550 Euro"];

let berechnung2 = { 
    "Zwetschgenmännle" : 600, 
    "Reiterle": 294, 
    "Elise Pflaume-Zimt": 1235, 
    "Südliche Elise": 950, 
    "Mandel Schoko-Traum": 978.50, 
    "Bio-Christstollen": 550,
    "Zwischensumme": 4607.50,
    "Mehrwertsteuer": 875.425,
    "Gesamtsumme": 5482.925
};


let wo = [ "Wo trage ich das Ergebnis ein?"];
let wzeile = ["In welche Zeile?"];
let wspalte = ["In welche Spalte?"];

let zleer = ["Zelle ist leer"];
let zfull = ["Zelle ist beschrieben"];
let neufrage =["Möchtest du den Wert überschreiben?"]; 
let woneu =["Wähle die Tabellenzelle durch Doppeltippen für die Eingabe aus"];
let neudrin =["Ergebnis in Tabellenzelle eingetragen"];

let links = ["linke Hand"];
let rechts = ["rechte Hand"];

let skript_0 = [ "[nach einer wo Frage]", "Möchtest du zu dieser Tabellenzelle navigieren?"];

let skript_8 = [ "Berechne ... mal ...", "[Berechnung machen und fragen] Wo trage ich das Ergebnis ein?", "Wo trage ich das Ergebnis ein?"];

let skript_9_1 = [ "Trage es ein in .../Hier", "[Zelle ist leer]", "Tabellenzelle ist leer, Sorte [Zwetschgenmännle] gesamt ist ...,  Eintrag in Tabellenzelle E2"];
let skript_9_2 = [ "Trage es ein in .../Hier", "[Zelle ist leer]", "Tabellenzelle ist leer, Sorte [Reiterle] gesamt ist ...,  Eintrag in Tabellenzelle E3"];
let skript_9_3 = [ "Trage es ein in .../Hier", "[Zelle ist leer]", "Tabellenzelle ist leer, Sorte [Elise Pflaume-Zimt] gesamt ist ...,  Eintrag in Tabellenzelle E4"];
let skript_9_4 = [ "Trage es ein in .../Hier", "[Zelle ist leer]", "Tabellenzelle ist leer, Sorte [Südliche Elise] gesamt ist ...,  Eintrag in Tabellenzelle E5"];
let skript_9_5 = [ "Trage es ein in .../Hier", "[Zelle ist leer]", "Tabellenzelle ist leer, Sorte [Mandel Schoko-Traum] gesamt ist ...,  Eintrag in Tabellenzelle E6"];
let skript_9_6 = [ "Trage es ein in .../Hier", "[Zelle ist leer]", "Tabellenzelle ist leer, Sorte [Bio-Christstollen] gesamt ist ...,  Eintrag in Tabellenzelle E7"];

let skript_10_1 = [ "Trage es ein in .../Hier", "[Zelle ist leer]", "Tabellenzelle ist beschrieben mit, Sorte [Zwetschgenmännle] gesamt ist ...,  Möchtest du den Wert überschreiben?"];
let skript_10_2 = [ "Trage es ein in .../Hier", "[Zelle ist leer]", "Tabellenzelle ist beschrieben mit, Sorte [Reiterle] gesamt ist ..., Möchtest du den Wert überschreiben?" ];
let skript_10_3 = [ "Trage es ein in .../Hier", "[Zelle ist leer]", "Tabellenzelle ist beschrieben mit, Sorte [Elise Pflaume-Zimt] gesamt ist ..., Möchtest du den Wert überschreiben?" ];
let skript_10_4 = [ "Trage es ein in .../Hier", "[Zelle ist leer]", "Tabellenzelle ist beschrieben mit, Sorte [Südliche Elise] gesamt ist ..., Möchtest du den Wert überschreiben?" ];
let skript_10_5 = [ "Trage es ein in .../Hier", "[Zelle ist leer]", "Tabellenzelle ist beschrieben mit, Sorte [Mandel Schoko-Traum] gesamt ist ..., Möchtest du den Wert überschreiben?" ];
let skript_10_6 = [ "Trage es ein in .../Hier", "[Zelle ist leer]", "Tabellenzelle ist beschrieben mit, Sorte [Bio-Christstollen] gesamt ist ..., Möchtest du den Wert überschreiben?" ];



let skript_13_1 = [ "Trage die Rechnung ein bei/in Zwetschgenmännle/in der Zeile Zwetschgenmännle in der Spalte [Gesamt/Sorte gesamt]", "Ergebnis für Zwetschgenmännle ... in Tabellenzelle ... "];

let skript_24 = ["Rechne mir das mal Preis von [Gebäcksorte]", "Ich rechne [Vorlesen der genannten Zelle mit Spalte und Zeile Modus] mal Preis von [Gebäcksorte]"];

let skript_25 = ["Rechne mir Menge mal Preis von [Gebäcksorte] hier aus [Tabellenzelle wird berührt]", "Wähle die Tabellenzelle durch Doppeltap für die Eingabe der Berechnung aus"];

let skript_27 = [ "Tabellenzelle [Koordinaten]/Tabellenzelle [Gebäcksorte] gesamt", "[wenn die Zelle leer ist] Zelle [Zellenkoordinaten]ist leer; Ergebnis [Ergebnis] in Zelle [Zellenkoordinaten] eingetragen"];


let skript_18 = [" [Formel wird durch Sprache vorgegeben/eingegeben]", "[Formel wiederholen] ","Wähle die Tabellenzelle für die Eingabe der Formel durch Doppeltippen aus", "In Welche Tabellenzelle kommt die Formel hinein? Wähle die Tabellenzelle für die Eingabe durch Doppeltippen aus"];
let skript_19 = ["Tabellenzelle ausgewählt und Formel wird durch Sprache vorgegeben/eingegeben]", "[Zelleninhalt/Ergebnis vorlesen bzw Formel wiederholen]"];
let skript_20 = [ "Berechne (mir) die Summe/das Produkt", "Summe/Produkt aus was?", "Welche Tabellenzellen rechne ich zusammen?"];
let srkipt_21 = ["Rechne mir das und das zusammen [die Zellen werden durch Berührungsgeste signalisiert/angezeigt]", "[linke|rechnte] Hand auf/über [Zelleninhalt, Zellenkoordinaten/Spalte&Zeile vorlesen]", "hast Du diese Zellen gemeint?"];
let skript_23 = ["Rechne mir Menge mal Preis für [Gebäcksorte], In welcher Tabellenzelle berechne ich Menge mal Preis für [Gebäcksorte]?"];

let skript_32 = [" Validiere die Tabelle/sind meine Eingaben richtig?", "[Nenne die Zellen mit den Fehlern]"];
let skript_16 = ["Was ist das?", "Das ist eine Tabelle mit einer Rechnung für einen Weihnachtsgebäckverkauf"];
let skript_33 = ["Was kann ich (hier) machen?/Sag mir was die Aufgabe ist", "[Info] Die Tabelle enthält die Auflistung von 6 verkauften Weihnachtsgebäcksorten mit jeweils verkaufter Menge und dem Einzelpreis für die Gebäcksorte. Berechne die Zwischensumme; Mehrwertsteuer und die Gesamtsumme des verkauften Weihnachtsgebäcks"];
let skript_34 = ["Sag mir was ich machen soll/kann", "berechne die Gesamtsumme der Einnahmen aus dem Verkauf des Weihnachtsgebäcks; (Ich sage dir wo du was findest und helfe dir als Taschenrechner)"];
let skript_37 = ["Berechne mir die Gesamtsumme in Zelle [Zellenkoordinaten]", "Was brauche ich um die Gesamtsumme zu berechnen?"];

let skript_44 = ["Die Mehrwertsteuer von [Gebäcksorte]", "Die Mehrwertsteuer wird auf die Zwischensumme aller verkauften Gebäcksorten berechnet"];

let skript_78 = ["Was fehlt noch?", "[leere Felder nennen]"];
let skript_79 = ["Was habe ich schon berechnet?/ Was habe ich schon?", "[Aufzählung der ausgefüllten/berechneten Felder]"];
