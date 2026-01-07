/* function counting(){let getWord = document.getElementById('input').value;
getWord = getWord.toLowerCase();
    let letter = document.getElementById('requirement').value;
    letter = letter.toLowerCase();
    let display = document.getElementById('heading');
    getWord = getWord.split('');
    let target = getWord.filter((item)=>{ return item === letter})
    display.textContent = `${target.length} time`
} */

    function counting(){
        let getWord = document.getElementById('input').value;
        getWord = getWord.toLowerCase();
        let letter = document.getElementById('requirement').value;
        letter = letter.toLowerCase();
        let display  = document.getElementById('heading');
        let count = 0;
        for(let i = 0;i < getWord.length;i++){
            if(getWord[i] == letter){
                count++;
            }
        }
        display.innerHTML = count + ' ' + 'time';
    }