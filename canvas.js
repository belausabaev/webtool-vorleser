let playing = false;
Tone.getContext().rawContext.suspend();



let audioFile = "";

const audioBuffer = new Tone.ToneBufferSource(audioFile, () => {
    console.log('loaded');
    grainBuffer.buffer = audioBuffer.buffer;
}).toDestination();

//var resourceKey ="d49b04f4c7c349efa12a8bc81c872521";

// status fields and start button in UI
var phraseDiv;
var resultDiv;

// subscription key and region for speech services.
var resourceKey = null;
var resourceRegion = "germanywestcentral";
var authorizationToken;
var SpeechSDK;
var synthesizer;

var phrase = "all good men must come to the aid"
var queryString = null;
var skript_text = "";
var prompt = "";

var audioType = "audio/mpeg";
var serverSrc = "/text-to-speech";

var number;

var inhalt = true;
var koord = false;
var sz = false;
var info = false;
var ergebnis = false;

var voice = "de-DE-KillianNeural";

let video;

//document.getElementById('serverAudioStream').disabled = true;
//document.getElementById('serverAudioFile').disabled = true;
document.getElementById('clientAudioAzure').disabled = true;

/*
const webcamElement = document.getElementById('webcam');
const canvasElement = document.getElementById('canvas');
const snapSoundElement = document.getElementById('snapSound');
const webcam = new Webcam(webcamElement, 'user', canvasElement, snapSoundElement);

webcam.start()
   .then(result =>{
      console.log("webcam started");
   })
   .catch(err => {
       console.log(err);
   });



   if(this._facingMode == 'user'){
    this._webcamElement.style.transform = "scale(-1,1)";
}
*/

//const btnInhalt = document.getElementById(".inhalt").value;




/*
const btnKoord = document.querySelector(".koordinaten");
const btnSZ = document.querySelector(".sz");
const btnInfo = document.querySelector(".info");


btnInhalt.onclick = () => {
    if (inhalt) {
        inhalt = false;
        toggleBtnColorDeact(btnInhalt);
    }
    else {
        inhalt = true;
        toggleBtnColorActive(btnInhalt);
    }
}


toggleBtnColorActive = (btnName) => {
    btnName.style.color = "blue";
};

toggleBtnColorDeact = (btnName) => {
    btnName.style.color = "yellow";
};

// same as toggle sound above
btnInhalt.addEventListener("click", function () {
    if (inhalt) {
        inhalt = false;
        toggleBtnColorDeact(btnInhalt);
    }
    else {
        inhalt = true;
        toggleBtnColorActive(btnInhalt);
    }
});
*/

function updateField(a, b) {


    console.log(a + " " + b + " " + prompt);

    var z = "";
    var ee = "";
    if (b == 2) {
        z = "zeile1";
        ee = "ein1";
    }
    else if (b == 3) {
        z = "zeile2";
        ee = "ein2";
    }
    else if (b == 4) {
        z = "zeile3";
        ee = "ein3";
    }
    else if (b == 5) {
        z = "zeile4";
        ee = "ein4";
    }
    else if (b == 6) {
        z = "zeile5";
        ee = "ein5";
    }
    else if (b == 7) {
        z = "zeile6";
        ee = "ein6";
    }

    //  console.log(z + " "+ee);

    const zeile = document.getElementById(z);
    const einZ1 = document.getElementById(ee);

    if (prompt.trim() == "") {
        prompt = "leer";
        tabelle_excel[a][b] = prompt;

        //  einZ1.innerHTML = '<td id="'+ee+'" onclick="getSpeechFromAzure_modus('+a+","+b+')"></td>';
        einZ1.innerHTML = '<td id="' + ee + '"></td>';
    }
    else {
        tabelle_excel[a][b] = prompt;
        // einZ1.innerHTML = '<td id="'+ee+'" onclick="getSpeechFromAzure_modus('+a+","+b+')">' + prompt + '</td>';
        einZ1.innerHTML = '<td id="' + ee + '">' + prompt + '</td>';
    }


    einZ1.classList.add("list-item");
    // einZ1.setAttribute("onclick", 'getSpeechFromAzure_modus('+a+","+b+')');
    zeile.appendChild(einZ1);
}
/*
function updatePrompt(a, b) {
    prompt = document.getElementById('ein').innerHTML;

    console.log("in update prompt " + prompt);
}
*/
function getPrompt(a, b) {
    var z = "";
    var ee = "";
    if (b == 2) {
        z = "zeile1";
        ee = "ein1";
    }
    else if (b == 3) {
        z = "zeile2";
        ee = "ein2";
    }
    else if (b == 4) {
        z = "zeile3";
        ee = "ein3";
    }
    else if (b == 5) {
        z = "zeile4";
        ee = "ein4";
    }
    else if (b == 6) {
        z = "zeile5";
        ee = "ein5";
    }
    else if (b == 7) {
        z = "zeile6";
        ee = "ein6";
    }
    console.log(z + " " + ee);
    const zeile = document.getElementById(z);
    const einZ1 = document.getElementById(ee);

    //  let txt = document.getElementById("ein1").innerText;
    //  einZ1.innerHTML =  '<textarea style="display: inline-block;width:100px;height:50px" maxlength="50"></textarea>'

    //einZ1.innerHTML = '<input type="text" name="formel" onfocusout="updateField(' + a + ',' + b+')">';
    einZ1.innerHTML = '<input type="text" name="formel">';
    zeile.appendChild(einZ1);



    //const zelleEinnahmen = document.getElementById("einnahmengebaeck");
    // add classes
    // zelleEinnahmen.classList.add("list-item");
    // zelleEinnahmen.className.add("textarea");
    // add attributes
    //   einZ1.classList.add("input");

    //   einZ1.setAttribute("id", ee);
    /*
    einZ1.setAttribute("onclick", "getSpeechFromAzure_modus("+a+","+b+")");
    einZ1.setAttribute("ondblclick", "getPrompt("+a+","+b+")");
    einZ1.setAttribute("onblur", "updatePrompt("+a+","+b+")");
    */

    /*
    const nodeZeile = document.getElementById(z);
    const nodeEingabe = document.getElementById(ee);
    */
    einZ1.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            console.log(event.key);
            updateField(a, b);
        }
    });


    einZ1.addEventListener('input', (event) => {
        console.log(event.target.value);
        prompt = event.target.value;
        console.log(event.target);
    });
    /*
        einZ1.onblur = (event) => {console.log(event)};
    
        einZ1.addEventListener('blur', (event) => {
            console.log("prompt is "+ event);
        });
       */
    /*
        einZ1.addEventListener('blur', (event) => {
            
            prompt = this.select();
            console.log(event.target);
            tabelle_excel[a][b] = prompt;
            //console.log();
            //getSpeechFromAzure(phrase);
        });
        */


    // 


    // zelleEinnahmen.innerText = "tts outputtt"+"i";

    //   tabelle_excel[a][b] = "tts outputtt"+"i"

    /*
    // add events
    zelleEinnahmen.addEventListener("click", () => {
        getSpeechFromAzure_modus(a,b);
    });


    // add events
    zelleEinnahmen.addEventListener("dblclick", () => {
        getPrompt(a,b);
    });
    */

}


function setVoice(v) {
    if (v == 'moritz') {
        voice = "de-DE-KillianNeural";
    }
    else if (v == 'maxi') {
        voice = "de-DE-ElkeNeural";
    }
}

function setMode(n) {
    if (n == 1) {

        inhalt = true;
        koord = false;
        sz = false;
        info = false;
        ergebnis = false;
    }
    else if (n == 2) {
        inhalt = false;
        koord = true;
        sz = false;
        info = false;
        ergebnis = false;

    }
    else if (n == 3) {
        inhalt = false;
        koord = false;
        sz = true;
        info = false;
        ergebnis = false;
    }
    else if (n == 4) {
        inhalt = false;
        koord = false;
        sz = false;
        info = true;
        ergebnis = false;
    }
    else if (n == 5) {
        inhalt = false;
        koord = false;
        sz = false;
        info = false;
        ergebnis = true;
    }
}

// update src URL query string for Express.js server
function updateSrc2() {

    // input values
    resourceKey = document.getElementById('resourceKey').value.trim();
    resourceRegion = resourceRegion;

    console.log("in update src phrase: " + phrase);

}

function setInputTxt(number) {
    console.log(number);
    console.log(skript[number]);
    skript_text = skript[number];
    phrase = skript[number];
    console.log(phrase);
    //var clientAudioAzureControl = document.getElementById('clientAudioAzure');
    //clientAudioAzureControl.disabled = false;
    //  document.getElementById('phraseDiv').innerHTML = skript_text;
    //phrase = skript[number];
}



// update src URL query string for Express.js server
function updateSrc() {

    // input values
    resourceKey = document.getElementById('resourceKey').value.trim();
    resourceRegion = document.getElementById('resourceRegion').value.trim();
    phrase = document.getElementById('phraseDiv').value.trim();

    //  console.log("in update src ++ phrase " + phrase);
    /*
    // server control - by file
    var serverAudioFileControl = document.getElementById('serverAudioFile');
    queryString += `%file=true`;
    const fileQueryString = `file=true&region=${resourceRegion}&key=${resourceKey}&phrase=${phrase}`;
    serverAudioFileControl.src = `${serverSrc}?${fileQueryString}`;
    console.log(serverAudioFileControl.src)
    serverAudioFileControl.type = "audio/mpeg";
    serverAudioFileControl.disabled = false;
 
    // server control - by stream
    var serverAudioStreamControl = document.getElementById('serverAudioStream');
    const streamQueryString = `region=${resourceRegion}&key=${resourceKey}&phrase=${phrase}`;
    serverAudioStreamControl.src = `${serverSrc}?${streamQueryString}`;
    console.log(serverAudioStreamControl.src)
    serverAudioStreamControl.type = "audio/mpeg";
    serverAudioStreamControl.disabled = false;
    */
    // client control
    var clientAudioAzureControl = document.getElementById('clientAudioAzure');
    clientAudioAzureControl.disabled = false;

}



function DisplayError(error) {
    window.alert(JSON.stringify(error));
}

// Client-side request directly to Azure Cognitive Services
function getSpeechFromAzure() {


    // authorization for Speech service
    var speechConfig = SpeechSDK.SpeechConfig.fromSubscription(resourceKey, resourceRegion);
    speechConfig.speechSynthesisVoiceName = voice;

    // new Speech object
    synthesizer = new SpeechSDK.SpeechSynthesizer(speechConfig);

    synthesizer.speakTextAsync(
        phrase,
        function (result) {

            // Success function

            // display status
            if (result.reason === SpeechSDK.ResultReason.SynthesizingAudioCompleted) {

                // load client-side audio control from Azure response
                audioElement = document.getElementById("clientAudioAzure");
                const blob = new Blob([result.audioData], { type: "audio/mpeg" });
                const url = window.URL.createObjectURL(blob);

            } else if (result.reason === SpeechSDK.ResultReason.Canceled) {
                // display Error
                throw (result.errorDetails);
            }

            // clean up
            synthesizer.close();
            synthesizer = undefined;
        },
        function (err) {

            // Error function
            throw (err);
            audioElement = document.getElementById("audioControl");
            audioElement.disabled = true;

            // clean up
            synthesizer.close();
            synthesizer = undefined;
        });

}


// Client-side request directly to Azure Cognitive Services
function getSpeechFromAzure(phrase) {


    console.log(phrase);
    // authorization for Speech service
    var speechConfig = SpeechSDK.SpeechConfig.fromSubscription(resourceKey, resourceRegion);
    speechConfig.speechSynthesisVoiceName = voice;

    // new Speech object
    synthesizer = new SpeechSDK.SpeechSynthesizer(speechConfig);

    synthesizer.speakTextAsync(
        phrase,
        function (result) {

            // Success function

            // display status
            if (result.reason === SpeechSDK.ResultReason.SynthesizingAudioCompleted) {

                // load client-side audio control from Azure response
                audioElement = document.getElementById("clientAudioAzure");
                const blob = new Blob([result.audioData], { type: "audio/mpeg" });
                const url = window.URL.createObjectURL(blob);

            } else if (result.reason === SpeechSDK.ResultReason.Canceled) {
                // display Error
                throw (result.errorDetails);
            }

            // clean up
            synthesizer.close();
            synthesizer = undefined;
        },
        function (err) {

            // Error function
            throw (err);
            audioElement = document.getElementById("audioControl");
            audioElement.disabled = true;

            // clean up
            synthesizer.close();
            synthesizer = undefined;
        });

}



// Client-side request directly to Azure Cognitive Services
function getSpeechFromAzure_modus(x, y) {
    // console.log("inhalt "+inhalt +" koord "+koord+" info "+info+" sz "+sz);
    if (x != undefined && y != undefined) {

        if (ergebnis && (x == 5)) {
            if (y == 2) {
                getSpeechFromAzure('"' + berechnung[0] + '"');
            } else if (y == 3) {
                getSpeechFromAzure('"' + berechnung[1] + '"');
            } else if (y == 4) {
                getSpeechFromAzure('"' + berechnung[2] + '"');
            } else if (y == 5) {
                getSpeechFromAzure('"' + berechnung[3] + '"');
            } else if (y == 6) {
                getSpeechFromAzure('"' + berechnung[4] + '"');
            }

        }

        if (inhalt) {
            //  console.log("x: " + x + " y: " + y + " " + tabelle_excel[x][y]);

            getSpeechFromAzure(tabelle_excel[x][y]);


        }
        else if (koord) {
            if (x == 0) {
                getSpeechFromAzure("Tabellenzeile " + y);
            }
            else if (y == 0) {
                getSpeechFromAzure("Tabellenspalte " + tabelle_excel[x][0]);
            }
            else {
                getSpeechFromAzure(tabelle_excel[x][y] + " Tabellenzelle " + tabelle_excel[x][0] + " " + tabelle_excel[0][y]);
            }
        }
        else if (info) {
            if (x == 0) {
                getSpeechFromAzure("Tabellenzeile " + y);
            }
            else if (y == 0) {
                getSpeechFromAzure("Tabellenspalte " + tabelle_excel[x][0]);
            }
            else {
                getSpeechFromAzure("Tabellenzelle " + tabelle_excel[x][0] + " " + tabelle_excel[0][y]);
            }
        }

        else if (sz) {
            if (x == 2 && y != 1) {
                getSpeechFromAzure(tabelle_excel[x][1] + " " + tabelle_excel[x][y]);
            }
            else if (y == 1) {
                getSpeechFromAzure("Überschrift Spalte " + tabelle_excel[x][1]);
            }
            else if (y == 0) {
                getSpeechFromAzure("Tabellenspalte " + tabelle_excel[x][0]);
            }
            else {
                getSpeechFromAzure(tabelle_excel[2][y] + " " + tabelle_excel[x][1] + " " + tabelle_excel[x][y]);
            }
        }

    }
}





// Client-side request directly to Azure Cognitive Services
function getSpeechFromAzure_empty(x, y) {
    // console.log("inhalt "+inhalt +" koord "+koord+" info "+info+" sz "+sz);
    if (x != undefined && y != undefined) {


        if (inhalt) {
            //  console.log("x: " + x + " y: " + y + " " + tabelle_excel[x][y]);

            if (x == 0 || y == 0) {
                getSpeechFromAzure(tabelle_excel[x][y]);
            }
            else {
                getSpeechFromAzure('leer');
            }



        }
        else if (koord) {
            if (x == 0) {
                getSpeechFromAzure("Tabellenzeile " + y);
            }
            else if (y == 0) {
                getSpeechFromAzure("Tabellenspalte " + tabelle_excel[x][0]);
            }

          //  if (x == 0 || y == 0) {
          //      getSpeechFromAzure(tabelle_excel[x][y] + " Tabellenzelle " + tabelle_excel[x][0] + " " + tabelle_excel[0][y]);
          //  }
            else {
                getSpeechFromAzure('leer' + " Tabellenzelle " + tabelle_excel[x][0] + " " + tabelle_excel[0][y]);
            }

        }
        else if (info) {
            getSpeechFromAzure("Tabellenzelle " + tabelle_excel[x][0] + " " + tabelle_excel[0][y]);

        }

        else if (sz) {
            if (x == 0) {
                getSpeechFromAzure("Tabellenzeile " + y);
            }
            else if (y == 0) {
                getSpeechFromAzure("Tabellenspalte " + tabelle_excel[x][0]);
            }

           
 
        }

    }
}




// Initialization
document.addEventListener("DOMContentLoaded", function () {

    var clientAudioAzureControl = document.getElementById("clientAudioAzure");
    var resultDiv = document.getElementById("resultDiv");

    resourceKey = document.getElementById('resourceKey').value;
    resourceRegion = document.getElementById('resourceRegion').value;
    phrase = document.getElementById('phraseDiv').value;
    //   skript_text = document.getElementById('text').value;

    prompt = document.getElementById("einnahmegebaeck").value;


    if (!!window.SpeechSDK) {
        SpeechSDK = window.SpeechSDK;
        clientAudioAzure.disabled = false;

        document.getElementById('content').style.display = 'block';
    }
});


