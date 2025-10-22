let number=0;
const generate= document.querySelector('#generate');
generate.addEventListener('click', ()=>{
    // controllo per vedere se la finestra esiste gia
    if(!document.querySelector('.container-row-down')){
    // creo div container figlio
    const nuovoDiv = document.createElement('div');
    nuovoDiv.classList.add('container-row-down');
    document.body.appendChild(nuovoDiv);
    // creo div counter figlio
    const counter=document.createElement('div');
    counter.classList.add('counter');
    nuovoDiv.appendChild(counter);
    // creo div display figlio
    const display=document.createElement('div');
    display.classList.add('display');
    display.textContent=number;
    counter.appendChild(display);
    // creo div row-button fratello di display
    const rowButton= document.createElement('div');
    rowButton.classList.add('row-button');
    counter.appendChild(rowButton);
    // creo bottoni figli e fratelli fra loro
    const btnP=document.createElement('button');
    btnP.id='plus';
    btnP.textContent='+';
    rowButton.appendChild(btnP);
    // funzione aggiungi numero
    btnP.addEventListener('click',()=>{
        number++;
        display.textContent=number;
     });   
    const btnM=document.createElement('button');
    btnM.id='minus';
    btnM.textContent='-';
    rowButton.appendChild(btnM);
    // funzione sottrai numero
    btnM.addEventListener('click', ()=>{
        number--;
        display.textContent=number;
    });
    // creo riga per colori
    const rowSpan= document.createElement('div');
    rowSpan.classList.add('row-color');
    nuovoDiv.append(rowSpan);
    // creo 3 span per colori
    const span1=document.createElement('span');
    span1.classList.add('color-selected');
    span1.textContent= 'Colore 1'
    rowSpan.appendChild(span1);
    span1.addEventListener('click',()=>{
        counter.className= 'counter';
        span1.className='color-selected'
        span2.className='color'
        span3.className='color'

    });
    const span2=document.createElement('span');
    span2.classList.add('color');
    span2.textContent= 'Colore 2';
    rowSpan.appendChild(span2);
    span2.addEventListener('click',()=>{
        counter.className= 'counter-2'
        span1.className='color'
        span2.className='color-selected'
        span3.className='color'
    });
    const span3=document.createElement('span');
    span3.classList.add('color');
    span3.textContent= 'Colore 3'
    rowSpan.appendChild(span3);
    span3.addEventListener('click',()=>{
        counter.className= 'counter-3'
        span1.className='color'
        span2.className='color'
        span3.className='color-selected'
    });
    }else{
        alert('Counter già creato!');
    }
})  