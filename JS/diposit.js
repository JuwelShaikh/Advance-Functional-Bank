document.getElementById('btn-dipo').addEventListener('click',function(){
    const newDipo = getInputValueById('dipo-input');
    const prevDipo = getInnerTextById('dipo-field'); 
    const dipoTotal = prevDipo + newDipo
    setTheAmmountById('dipo-field',dipoTotal);  
    
    const prevBal = getInnerTextById('balance-Field')
    const totalBal = prevBal + newDipo;
    setTheAmmountById('balance-Field', totalBal);
    
})