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
        // const nuovoDiv = document.createElement('div');
        // nuovoDiv.classList.add('container-row-down');
        // document.body.appendChild(nuovoDiv);
    // creo div counter figlio
    const counter=createChildSibling('div','counter',nuovoDiv)
        //const counter=document.createElement('div');
        //counter.classList.add('counter');
        //nuovoDiv.appendChild(counter);
    // creo div display figlio
       const display= createChildSibling('div','display',counter);
       display.textContent=number;
        // const display=document.createElement('div');
        // display.classList.add('display');
        // display.textContent=number;
        // counter.appendChild(display);
    // creo div row-button fratello di display
    const rowButton=createChildSibling('div','row-button',counter)
    // const rowButton= document.createElement('div');
    // rowButton.classList.add('row-button');
    // counter.appendChild(rowButton);

    // creo bottoni figli e fratelli fra loro
    const btnP=createChildSibling('button','#plus',rowButton);
    // const btnP=document.createElement('button');
    // btnP.id='plus';
    btnP.textContent='+';
    // rowButton.appendChild(btnP);
    // funzione aggiungi numero
    btnP.addEventListener('click',()=>{
        number++;
        display.textContent=number;
     });
     //creo bottone meno 
    const btnM=createChildSibling('button','#minus',rowButton);
    // btnM.id='minus';
    btnM.textContent='-';
    // rowButton.appendChild(btnM);
    // funzione sottrai numero
    btnM.addEventListener('click', ()=>{
        number--;
        display.textContent=number;
    });
    // creo riga per colori 
    const rowSpan=createChildSibling('div','row-color',nuovoDiv);
    // const rowSpan= document.createElement('div');
    // rowSpan.classList.add('row-color');
    // nuovoDiv.append(rowSpan);
    
   
    
    
    // creo 3 span per colori
    const span1=createChildSibling('span','color-selected',rowSpan);
    // const span1=document.createElement('span');
    // span1.classList.add('color-selected');
    span1.textContent= 'Colore 1'
    // rowSpan.appendChild(span1);

    // span1.addEventListener('click',()=>{
    //     counter.className= 'counter';
    //     span1.className='color-selected'
    //     span2.className='color'
    //     span3.className='color'

    // });
    const span2=createChildSibling('span','color',rowSpan);
    // const span2=document.createElement('span');
    // span2.classList.add('color');
    span2.textContent= 'Colore 2';
    // rowSpan.appendChild(span2);
    // span2.addEventListener('click',()=>{
    //     counter.className= 'counter-2'
    //     span1.className='color'
    //     span2.className='color-selected'
    //     span3.className='color'
    // });
    const span3=createChildSibling('span','color',rowSpan);
    // const span3=document.createElement('span');
    // span3.classList.add('color');
    span3.textContent= 'Colore 3'
    // rowSpan.appendChild(span3);
    // span3.addEventListener('click',()=>{
    //     counter.className= 'counter-3'
    //     span1.className='color'
    //     span2.className='color'
    //     span3.className='color-selected'
    // });
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