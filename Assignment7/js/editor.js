const container = document.getElementsByClassName('container').item(0);
//content editable on load
Rx.Observable  
    .fromEvent(window, 'load')
    .subscribe(() => {
        container.setAttribute('contenteditable', 'true');
        
});

//font-size drop down
const sizecontainer = document.getElementsByClassName('size-container').item(0);
let fontsize1 = document.createElement('select');
fontsize1.id = "fsize-id";
// const fsize = [10,14,18,22,26];
let fsize = ["1","2","3","4","5","6","7"];
let sizeoption;

fsize.forEach((size) => {
    sizeoption = document.createElement('option');
    sizeoption.textContent = size;
    fontsize1.appendChild(sizeoption);
});
sizecontainer.appendChild(fontsize1);

//font style drop down 
const stylecontainer = document.getElementsByClassName('style-container').item(0);
let fontstyle = document.createElement('select');
fontstyle.id = "fstyle-id";
const fstyle = ["Times","Verdana","Bookman","Fantasy","cursive"];
let styleoption;

fstyle.forEach((style) => {
    styleoption = document.createElement('option');
    styleoption.value = style;
    styleoption.textContent = style;
    fontstyle.appendChild(styleoption);
});
stylecontainer.appendChild(fontstyle);

//bold button
const boldContainer = document.getElementsByClassName('bold-container').item(0);
let boldBtn = document.createElement('button');
let boldBtnText = document.createTextNode("Bold");
boldBtn.appendChild(boldBtnText);
boldContainer.appendChild(boldBtn);

let bcount = 0;
let bclick$ = Rx.Observable  
    .fromEvent(boldBtn, 'click')

bclick$.subscribe(() => {
    bcount++;
    format('bold');
});
bclick$.subscribe(() => changeBtn(bcount,boldBtn));

//italic button
const italicContainer = document.getElementsByClassName('italic-container').item(0);
let italicBtn = document.createElement('button');
let italicBtnText = document.createTextNode("Italic");
italicBtn.appendChild(italicBtnText);
italicContainer.appendChild(italicBtn);

let icount = 0;
let iclick$ = Rx.Observable  
    .fromEvent(italicBtn, 'click')
iclick$.subscribe(() => {
    icount++;
    format('italic');        
});
iclick$.subscribe(() => changeBtn(icount,italicBtn));


//underline button
const underlineContainer = document.getElementsByClassName('underline-container').item(0);
let underlineBtn = document.createElement('button');
let underlineBtnText = document.createTextNode("U");
underlineBtn.appendChild(underlineBtnText);
underlineContainer.appendChild(underlineBtn);

let ucount = 0;
let uclick$ = Rx.Observable  
    .fromEvent(underlineBtn, 'click')
uclick$.subscribe(() => {
    ucount++;
    format('underline');        
});
uclick$.subscribe(() => changeBtn(ucount,underlineBtn));

//font style 
Rx.Observable  
    .fromEvent(fontstyle, 'change')
    .subscribe(() => {
        let fstylearr = document.getElementById('fstyle-id');
        let fstyleEle = fstylearr.options[fstylearr.selectedIndex].value;
        format("fontname",fstyleEle);
});

//list button
const listContainer = document.getElementsByClassName('list-container').item(0);
let listBtn = document.createElement('button');
listBtn.setAttribute("background-color","lightgray");
let listBtnText = document.createTextNode("List");
listBtn.appendChild(listBtnText);
listContainer.appendChild(listBtn);

let lcount = 0;
let lclick$ = Rx.Observable  
    .fromEvent(listBtn, 'click')
lclick$.subscribe(() => {
    lcount++;
    format("insertunorderedlist");        
});
lclick$.subscribe(() => changeBtn(lcount,listBtn));

//font style 
Rx.Observable  
    .fromEvent(fontstyle, 'change')
    .subscribe(() => {
        let fstylearr = document.getElementById('fstyle-id');
        let fstyleEle = fstylearr.options[fstylearr.selectedIndex].value;
        format("fontname",fstyleEle);
});


//font size 
Rx.Observable.fromEvent(fontsize1 ,'change')
.subscribe(() => {
        let fsizearr = document.getElementById('fsize-id');
        let fsizeEle = fsizearr.options[fsizearr.selectedIndex].value;
        console.log(typeof fsizeEle);
        format("fontSize",fsizeEle);
});


//check if selected text is bold or italic
mclick$ = Rx.Observable  
    .fromEvent(container, 'mouseup')

mclick$.subscribe(() => {
      
        if(document.queryCommandState('bold')){
            boldBtn.style.backgroundColor = "yellow";
        }
        else{
            boldBtn.style.backgroundColor = "lightgray";
        }
        if(document.queryCommandState('italic')){
            italicBtn.style.backgroundColor = "yellow";
        }
        else{
            italicBtn.style.backgroundColor = "lightgray";
        }
        if(document.queryCommandState('underline')){
            underlineBtn.style.backgroundColor = "yellow";
        }
        else{
            underlineBtn.style.backgroundColor = "lightgray";
        }
        if(document.queryCommandState('insertunorderedlist')){
            listBtn.style.backgroundColor = "yellow";
        }
        else{
            listBtn.style.backgroundColor = "lightgray";
        }

});

//change font dropdown according to selected text
mclick$.subscribe(() => {
        if(document.queryCommandValue('fontname') == 'Times'){
            fontstyle.options[0].selected = true;
        }
        if(document.queryCommandValue('fontname') == 'Verdana'){
            fontstyle.options[1].selected = true;
        }
        if(document.queryCommandValue('fontname') == 'Bookman'){
            fontstyle.options[2].selected = true;
        }
        if(document.queryCommandValue('fontname') == 'fantasy'){
            fontstyle.options[3].selected = true;
        }
        if(document.queryCommandValue('fontname') == 'cursive'){
            fontstyle.options[4].selected = true;
        }

});

//change font size dropdown according to selected text
mclick$.subscribe(() => {
    if(document.queryCommandValue('fontSize') == "1"){
        fontsize1.options[0].selected = true;
    }
    if(document.queryCommandValue('fontSize') == "2"){
        fontsize1.options[1].selected = true;
    }
    if(document.queryCommandValue('fontSize') == "3"){
        fontsize1.options[2].selected = true;
    }
    if(document.queryCommandValue('fontSize') == "4"){
        fontsize1.options[3].selected = true;
    }
    if(document.queryCommandValue('fontSize') == "5"){
        fontsize1.options[4].selected = true;
    }
    if(document.queryCommandValue('fontSize') == "6"){
        fontsize1.options[5].selected = true;
    }
    if(document.queryCommandValue('fontSize') == "7"){
        fontsize1.options[6].selected = true;
    }
});

//execCommand
function format(command, value) {
    document.execCommand(command, false, value);
 }

 //button highlight
 function changeBtn(count,btn){
     if(count%2 == 0){
        btn.style.backgroundColor = "lightgray";
     }
     else{
        btn.style.backgroundColor = "yellow";
     }
 }



















