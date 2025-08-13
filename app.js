function counting(){let getWord = document.getElementById('input').value;
getWord = getWord.toLowerCase();
    let letter = document.getElementById('requirement').value;
    letter = letter.toLowerCase();
    let display = document.getElementById('heading');
    getWord = getWord.split('');
    let target = getWord.filter((item)=>{ return item === letter})
    display.textContent = `${target.length} time`
}