    //inizializzo variabile iniziale counter
let number=0; 

    //funzione per creare elementi figli/fratelli con controllo classe/id
function createChildSibling(type,classId,parent){ //crea elementi (elemento html, classe o id, elemento padre)
    const e= document.createElement(type);
    if(classId.startsWith('#')){
        e.id= classId.substring(1);
    }else{
        e.classList.add(classId);
    }
    parent.appendChild(e);
    return e;
}
const generate= document.querySelector('#generate');
generate.addEventListener('click', ()=>{
        // controllo per vedere se la finestra esiste gia
    if(!document.querySelector('.container-row-down')){
        // creo div container figlio
    const nuovoDiv=createChildSibling('div','container-row-down',document.body);
        // creo div counter figlio
    const counter=createChildSibling('div','counter',nuovoDiv)
         // creo div display figlio
    const display= createChildSibling('div','display',counter);
    display.textContent=number;       
        // creo div row-button fratello di display
    const rowButton=createChildSibling('div','row-button',counter)
        // creo bottoni figli e fratelli fra loro
    const btnP=createChildSibling('button','#plus',rowButton);    
    btnP.textContent='+';
        // funzione aggiungi numero
    btnP.addEventListener('click',()=>{
        number++;
        display.textContent=number;
     });
        //creo bottone meno 
    const btnM=createChildSibling('button','#minus',rowButton);
        // btnM.id='minus';
    btnM.textContent='-';
    btnM.addEventListener('click', ()=>{
        number--;
        display.textContent=number;
    });
        // creo riga per colori 
    const rowSpan=createChildSibling('div','row-color',nuovoDiv);
        // creo 3 span per colori
    const span1=createChildSibling('span','color-selected',rowSpan);
    span1.textContent= 'Colore 1'
    const span2=createChildSibling('span','color',rowSpan);
    span2.textContent= 'Colore 2';
    const span3=createChildSibling('span','color',rowSpan);
    span3.textContent= 'Colore 3'
        //creo event-delegation su row-span
    rowSpan.addEventListener('click', (e)=>{
        if(e.target=== span2){
            counter.className= 'counter-2';
            span1.className='color'
            span2.className='color-selected'
            span3.className='color'
        }else if(e.target=== span3){
            counter.className= 'counter-3';
            span1.className='color'
            span2.className='color'
            span3.className='color-selected'
        }else if(e.target=== span1){
            counter.className= 'counter';
            span1.className='color-selected'
            span2.className='color'
            span3.className='color'
        }
    })
    }else{
        alert('Counter già creato!');
    }
})  