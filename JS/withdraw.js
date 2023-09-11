document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdraw = getInputValueById('withdraw-input');
    const prevWithdraw = getInnerTextById('withdraw-feild');
    const totalWithdraw = prevWithdraw + newWithdraw;
    setTheAmmountById('withdraw-feild', totalWithdraw);

    const prevBal = getInnerTextById('balance-Field')
    const totalBal = prevBal - newWithdraw;
    setTheAmmountById('balance-Field', totalBal);

})