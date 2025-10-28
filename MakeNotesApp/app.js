// Initialize the application and show existing notes
shownotes();

let addbtn = document.getElementById('addBtn');

addbtn.addEventListener("click", function (e) {
    try {
        let addtxt = document.getElementById('addText');
        if (!addtxt || !addtxt.value.trim()) {
            alert('Please enter a valid note');
            return;
        }

        let notesobj = [];
        let stateobj = [];

        try {
            const notes = localStorage.getItem("notes");
            if (notes) {
                notesobj = JSON.parse(notes);
            }
        } catch (error) {
            console.error('Error reading notes from localStorage:', error);
            notesobj = [];
        }

        try {
            const state = localStorage.getItem("state");
            if (state) {
                stateobj = JSON.parse(state);
            }
        } catch (error) {
            console.error('Error reading state from localStorage:', error);
            stateobj = [];
        }

        notesobj.push(addtxt.value);
        stateobj.push(1);

        try {
            localStorage.setItem("notes", JSON.stringify(notesobj));
            localStorage.setItem("state", JSON.stringify(stateobj));
        } catch (error) {
            console.error('Error saving to localStorage:', error);
            alert('Failed to save note. Please try again.');
            return;
        }

        addtxt.value = '';
        shownotes();
    } catch (error) {
        console.error('Unexpected error:', error);
        alert('An unexpected error occurred. Please try again.');
    }

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
    try {
        // Get current state from localStorage
        let stateArray = [];
        try {
            const state = localStorage.getItem("state");
            if (state) {
                stateArray = JSON.parse(state);
            }
        } catch (error) {
            console.error('Error reading state:', error);
            return;
        }

        // Toggle the state for the specific note
        if (!stateArray[id] && stateArray[id] !== 0) {
            stateArray[id] = 1;
        } else {
            stateArray[id] = stateArray[id] === 1 ? 0 : 1;
        }

        // Save updated state
        try {
            localStorage.setItem("state", JSON.stringify(stateArray));
        } catch (error) {
            console.error('Error saving state:', error);
            alert('Failed to update note status. Please try again.');
            return;
        }

        // Update UI
        const noteCards = document.getElementsByClassName('notecard');
        const element = noteCards[id];
        if (!element) return;

        const button = element.getElementsByTagName("button")[1];
        if (!button) return;

        // Apply consistent styling based on state
        if (stateArray[id] === 1) {
            button.innerText = "𝙉𝙤𝙩 𝙄𝙢𝙥𝙤𝙧𝙩𝙖𝙣𝙩";
            button.className = "btn btn-success my-3";
            element.style.background = "#7bff00";
        } else {
            button.innerText = "𝙄𝙢𝙥𝙤𝙧𝙩𝙖𝙣𝙩";
            button.className = "btn btn-danger my-3";
            element.style.background = "white";
        }
        element.style.color = "black";
    } catch (error) {
        console.error('Unexpected error:', error);
        alert('An error occurred while updating the note. Please try again.');
    }
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


// Handle note search functionality
const search = document.getElementById('searchTxt');
const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, delay);
    };
};

search.addEventListener("input", debounce(function () {
    try {
        const inputVal = search.value.toLowerCase().trim();
        const noteCards = document.getElementsByClassName('notecard');
        
        Array.from(noteCards).forEach(function (element) {
            const cardTxt = element.getElementsByTagName("p")[0]?.innerText.toLowerCase() || '';
            element.style.display = cardTxt.includes(inputVal) ? "block" : "none";
        });
    } catch (error) {
        console.error('Error during search:', error);
    }
}, 300));

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
