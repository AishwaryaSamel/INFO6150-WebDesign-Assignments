//path to load json file
const contentPath = 'data/taskList.json';

let rowCtr = 1;


//populate table
const populate = (content, parent) => {
    const taskTable = document.getElementById('taskListTable');
    let row, col, mainDiv, inProgress, divDesc, doneBtn;
    content.forEach(task => {

        //add row
        row = document.createElement('tr');
        row.id = ""+rowCtr;

        // add in progress and done icon to column one
        col = document.createElement('td');
        inProgress = document.createElement('img')
        inProgress.id = "inProgress" + rowCtr;
        inProgress.src = "Images/inprogress.svg";
        col.appendChild(inProgress);
        row.appendChild(col);

        //add to do desc to column two
        col = document.createElement('td');
        mainDiv = document.createElement('div');
        //title
        mainDiv.innerHTML = task.Title;
        mainDiv.id = "title" + rowCtr;
        col.appendChild(mainDiv);

        //to do desc
        divDesc = document.createElement('div');
        divDesc.id = "divDesc" + rowCtr;
        console.log(divDesc.id);
        divDesc.innerHTML = "<i>Description:</i> " + task.Description + "<br><i>Due Date:</i> " + task.DueDate + " <br><i>Time:</i> " + task.Time;
        divDesc.hidden = true;
        col.appendChild(divDesc);

        //task completed
        doneBtn = document.createElement('button');
        doneBtn.innerHTML = "Mark as Completed";
        doneBtn.id = "doneBtn" + rowCtr;

        //on button click
        doneBtn.onclick = function(){
            inProgress = document.getElementById("inProgress"+this.parentElement.parentElement.id)
            inProgress.src = "Images/done.svg";
            this.hidden = true;
        }
        doneBtn.hidden = true;
        col.appendChild(doneBtn);
        row.appendChild(col);

        //show more , show less icon in column three
        col = document.createElement('td');
        mainDiv = document.createElement("img");
        mainDiv.src="Images/showmore.svg";

        //show less icon display on clicking show more
        mainDiv.onclick = function(){
            showDesc(this);
            this.src = "Images/showless.svg"; 
        };
        col.appendChild(mainDiv);
        row.appendChild(col);
        taskTable.appendChild(row);
        rowCtr++;
    });
}

//add to do item
let addMore = document.getElementById('add-btn');
addMore.addEventListener("click", () => {
    const taskTable = document.getElementById('taskListTable');
    let addRow, col, mainDiv, inProgress, divDesc, doneBtn;
    
    //add row
    addRow = document.createElement('tr');
    addRow.id = ""+rowCtr;

    // add in progress and done icon to column one
    col = document.createElement('td');
    inProgress = document.createElement('img')
    inProgress.id = "inProgress" + rowCtr;
    inProgress.src = "Images/inprogress.svg";
    col.appendChild(inProgress);
    addRow.appendChild(col);

    //add to do desc to column two
    col = document.createElement('td');

    //title
    mainDiv = document.createElement('div');
    mainDiv.innerHTML = document.getElementById('title').value;
    mainDiv.id = "title" + rowCtr;
    col.appendChild(mainDiv);

    //to do desc
    divDesc = document.createElement('div');
    divDesc.id = "divDesc" + rowCtr;
    console.log(divDesc.id);
    let data = document.getElementById('desc').value;
    divDesc.innerHTML = "<i>Description:</i> " + data;
    data =document.getElementById('date').value;
    divDesc.innerHTML += "<br><i>Due Date:</i> " + data;
    data = document.getElementById('time').value;
    divDesc.innerHTML += "<br><i>Time:</i> " + data;
    divDesc.hidden = true;
    col.appendChild(divDesc);

    //task completed
    doneBtn = document.createElement('button');
    doneBtn.innerHTML = "Mark as Completed";
    doneBtn.id = "doneBtn" + rowCtr;

    //on button click
    doneBtn.onclick = function(){
        inProgress = document.getElementById("inProgress"+this.parentElement.parentElement.id)
        inProgress.src = "Images/done.svg";
        this.hidden = true;
    }
    doneBtn.hidden = true;
    col.appendChild(doneBtn);
    addRow.appendChild(col);

    //show more , show less icon in column three
    col = document.createElement('td');
    mainDiv = document.createElement("img");
    mainDiv.src="Images/showmore.svg";

    //show less icon display on clicking show more
    mainDiv.onclick = function(){
        showDesc(this);
        this.src = "Images/showless.svg"; 
    };

    col.appendChild(mainDiv);
    addRow.appendChild(col);
    taskTable.appendChild(addRow);
    rowCtr++;
});

//load data from json in the file
const showBtn = document.getElementById('show-task-btn');
showBtn.addEventListener('click',() => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET',contentPath);
    xhr.addEventListener('load', (evt) =>{
        const content= JSON.parse(evt.target.responseText);
        populate(content);
    });
    xhr.send();
    showBtn.hidden = true;
});

//show more icon click action
function showDesc(rowNo){
    //extract the row number
    let rowNumber = rowNo.parentElement.parentElement.id;
    let divDesc = document.getElementById("divDesc"+rowNumber);
    let doneBtn, title;
    //check if the description is already shown
    if(divDesc.hidden == true) {
        title = document.getElementById("title"+rowNumber);
        //change the font weight for the title
        title.className = "title-style";
        divDesc.hidden = false;
        doneBtn = document.getElementById("doneBtn"+ rowNumber);
        doneBtn.hidden = false;
    }else{
        //if open then hide the details
        divDesc.hidden = true;
        title = document.getElementById("title"+rowNumber);
        //change back the font weight
        title.className = "";
        doneBtn = document.getElementById("doneBtn" + rowNumber);
        doneBtn.hidden = true;
    }
}


// get modal, button and close from html
let modal = document.getElementById("modal");
let btn = document.getElementById('add-task-btn');
let close = document.getElementsByClassName("close")[0];

// close the modal pop up
close.onclick = function() {
    modal.style.display = "none";
}
//open the modal pop up
btn.onclick = function() {
    modal.style.display = "block";
}

