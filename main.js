let url = "https://opentdb.com/api.php?amount=AMOUNT&category=CATEGORY&difficulty=DIFFICULTY&type=multiple";

var questionNumber = document.getElementById('numofq');
var catagory = document.getElementById('catagory');
var dificulty = document.getElementById('dificulty');
var type = document.getElementById('type');
var button = document.getElementById('submit');
var questionbox = document.getElementById('questionbox');
var qo;

function Get(url){
    let request = new XMLHttpRequest();
    request.open("GET", url,false);
    request.send(null);
    return request.responseText;
}

function getq(){
    var newurl = '';
    newurl = url.replace('AMOUNT', questionNumber.value);
    url = newurl
    newurl = url.replace('CATEGORY', catagory.value);
    url = newurl
    newurl = url.replace('DIFFICULTY', dificulty.value);
    url = newurl
    newurl = url.replace('type', type.value);
    url = newurl
    qo = JSON.parse(Get(url));
    var questions = qo.results;
    for(var i=0;i<questions.length;i++){
        questionbox.innerHTML += '<p>' +questions[i].question +'\n</p> <input id='+i+'> <button onCLick="showanswers('+i+')">Submit</button> \n'
        console.log(i +' ' +questions[i].correct_answer)
    }
}
function showanswers(num){
    var input = document.getElementById(num)
    num.innerHTML = 'aa'
    if(input.value == qo.results[num].correct_answer.toLowerCase()){
        alert('correct')
    }else{
        alert('incorrect')
    }
}

button.addEventListener('click', getq);