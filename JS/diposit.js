document.getElementById('btn-dipo').addEventListener('click',function(){
    const newDipo = getInputValueById('dipo-input');
    const prevDipo = getInnerTextById('dipo-field'); 
    const dipoTotal = prevDipo + newDipo;
    
    setTheAmmountById('dipo-field',newDipo);    
     
})