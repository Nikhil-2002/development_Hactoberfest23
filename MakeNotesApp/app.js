console.log('welcome to the project');
shownotes();// whwn the page get refreshed it will show the saved notes
//if user add notes then add it to local storage

let addbtn = document.getElementById('addBtn');

addbtn.addEventListener("click", function (e) {

    let addtxt = document.getElementById('addText');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let state = localStorage.getItem("state");
    let stateobj;
    if (state == null) {
        stateobj = [];
    }
    else {
        stateobj = JSON.parse(state);
    }
    notesobj.push(addtxt.value);
    stateobj.push(1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    localStorage.setItem("state", JSON.stringify(stateobj));
    addtxt.value = "";//needs to clear the text area
    shownotes();

});

// function to show the added notes 
function shownotes() {

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let state = localStorage.getItem("state");
    if (state == null) {
        stateobj = [];
    }
    else {
        stateobj = JSON.parse(state);
    }
    let html = "";
    notesobj.forEach(function (element, id) {

        if (stateobj[id] == 1) {
            html += `
        <div class="notecard  mx-2 my-2 card" style="width: 21rem;">

                <div class="card-body markclass" >
                    <h5 class="card-title">Note ${id + 1}</h5>
                    <p class="card-text">${element}</p>
                    
                    <button id="${id}" onclick="deletenotes(this.id)" class="btn btn-primary">𝘿𝙚𝙡𝙚𝙩𝙚 𝙉𝙤𝙩𝙚</button>
                   <button id="ugt" onclick="markugt(${id})" class="btn btn-success  my-3">𝙄𝙢𝙥𝙤𝙧𝙩𝙖𝙣𝙩</button>
                </div>
            </div>
        `}
        else {
            html += `
        <div class="notecard  mx-2 my-2 card" style="width: 21rem;">

                <div class="card-body markclass" >
                    <h5 class="card-title">Note ${id + 1}</h5>
                    <p class="card-text">${element}</p>
                    
                    <button id="${id}" onclick="deletenotes(this.id)" class="btn btn-primary">𝘿𝙚𝙡𝙚𝙩𝙚 𝙉𝙤𝙩𝙚</button>
                   <button id="ugt" onclick="markugt(${id})" class="btn btn-danger  my-3">𝙉𝙤𝙩 𝙄𝙢𝙥𝙤𝙧𝙩𝙖𝙣𝙩</button>
                </div>
            </div>
        `
        }

        // localStorage.setItem("state",JSON.stringify(arrobj));
    });



    let noteselem = document.getElementById("notes");
    if (notesobj.length != 0) {
        noteselem.innerHTML = html;

    }
    else {

        noteselem.innerHTML = `No Notes! click on +𝘼𝙙𝙙 𝙉𝙤𝙩𝙚 to add.`;
    }
    let noteCards = document.getElementsByClassName('notecard');
    Array.from(noteCards).forEach(function (element, idd) {
        // let cardTxt = element.getElementsByTagName("button")[1];
        if (stateobj[idd] == 1) {



            //cardTxt.innerText =
            // "𝙉𝙤𝙩 𝙄𝙢𝙥𝙤𝙧𝙩𝙖𝙣𝙩";
            element.style.background = "#7bff00";
            element.style.color = "black";

            //val.innerText="𝙉𝙤𝙩 𝙄𝙢𝙥𝙤𝙧𝙩𝙖𝙣𝙩";
        }
        else {

            // cardTxt.innerText = "𝙄𝙢𝙥𝙤𝙧𝙩𝙖𝙣𝙩";
            element.style.background = "white";
            element.style.color = "black";

        }


    });


};
// function to 𝘿𝙚𝙡𝙚𝙩𝙚 the notes
function deletenotes(id) {

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(id, 1);//𝘿𝙚𝙡𝙚𝙩𝙚 element from index id to length 1
    localStorage.setItem("notes", JSON.stringify(notesobj));
    let state = localStorage.getItem("state");
    if (state == null) {
        stateobj = [];
    }
    else {
        stateobj = JSON.parse(state);
    }
    stateobj.splice(id, 1);//𝘿𝙚𝙡𝙚𝙩𝙚  element from index id to length 1
    localStorage.setItem("state", JSON.stringify(stateobj));
    shownotes();

};
function markugt(id) {

    console.log(id);
    // let val=document.getElementById("ugt");
    //let el=document.getElementById("flip");

    // let obj=val.getElementById("ugt")[id];
    // console.log(val);
    let noteCards = document.getElementsByClassName('notecard');
    let arr = localStorage.getItem("state");
    if (arr == null) { arrobj = []; }
    else {
        arrobj = JSON.parse(arr);
    }
    Array.from(noteCards).forEach(function (element, idd) {
        let cardTxt = element.getElementsByTagName("button")[1];
        if (idd == id) {

            /* if (cardTxt.innerText == "𝙄𝙢𝙥𝙤𝙧𝙩𝙖𝙣𝙩") {
                
                 cardTxt.innerText =
                     "𝙉𝙤𝙩 𝙄𝙢𝙥𝙤𝙧𝙩𝙖𝙣𝙩";
                     element.style.background="#7bff00";
                     element.style.color="black";
 
                 //val.innerText="𝙉𝙤𝙩 𝙄𝙢𝙥𝙤𝙧𝙩𝙖𝙣𝙩";
             }
             else {
 
                 cardTxt.innerText = "𝙄𝙢𝙥𝙤𝙧𝙩𝙖𝙣𝙩";
                 element.style.background="white";
                 element.style.color="black";
 
             }*/
            if (arrobj[id] == 1) {
                cardTxt.innerText =
                    "𝙉𝙤𝙩 𝙄𝙢𝙥𝙤𝙧𝙩𝙖𝙣𝙩";
                element.style.background = "#7bff00";
                element.style.color = "black";
                arrobj[id] = 0;
            }
            else {

                cardTxt.innerText = "𝙄𝙢𝙥𝙤𝙧𝙩𝙖𝙣𝙩";
                element.style.background = "white";
                element.style.color = "black";
                arrobj[id] = 1;
            }

        }
        // localStorage.setItem("state",JSON.stringify(arrobj));
    });
    localStorage.setItem("state", JSON.stringify(arrobj));
    shownotes();
    //let cardTxt = element.getElementsByTagName("button")[1].innerText;
    // console.log(cardTxt);});

    /*if(val.innerText=="𝙄𝙢𝙥𝙤𝙧𝙩𝙖𝙣𝙩")
    {
        el.innerHTML=` 
        <div id="flip"><button id="ugt" onclick="markugt(${id})" class="btn btn-secondary my-3">𝙉𝙤𝙩 𝙄𝙢𝙥𝙤𝙧𝙩𝙖𝙣𝙩</button>
    </div>`
        //val.innerText="𝙉𝙤𝙩 𝙄𝙢𝙥𝙤𝙧𝙩𝙖𝙣𝙩";
    }
    else{

        el.innerHTML=`  <div id="flip"><button id="ugt" onclick="markugt(${id})" class="btn btn-danger my-3">𝙄𝙢𝙥𝙤𝙧𝙩𝙖𝙣𝙩</button>
        </div>`
        //val.innerText="𝙄𝙢𝙥𝙤𝙧𝙩𝙖𝙣𝙩";*/
}


let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

    let inputVal = search.value.toLowerCase();
    console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('notecard');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
            // element.style.background="red";
            // element.style.background="white";
        }
        else {
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})

/*
Further Features:
1. Add Title
2. Mark a note as 𝙄𝙢𝙥𝙤𝙧𝙩𝙖𝙣𝙩
3. Separate notes by user
4. Sync and host to web server
*/
//adding a div which is editable
/*let edittxt=document.getElementById("edittext");
console.log(edittxt);
edittxt.addEventListener('click',function(){
    let store=localStorage.getItem("text");

    let repeat=document.getElementsByClassName("textarea").length;
    console.log(repeat);
    let html;
    if(store==null)
    { html=document.getElementById("edittext").innerText;}
    else{
        html=store;
    }
    if(repeat==0)

    {let remove=document.getElementById("edittext");
    remove.innerHTML=`<textarea class="textarea form-control" id="textarea" >${html}</textarea>`}
   let textarea=document.getElementById("textarea");
   textarea.addEventListener('blur',function(){

    edittext.innerHTML=textarea.value;
    localStorage.setItem('text',textarea.value);
   })

});*/
