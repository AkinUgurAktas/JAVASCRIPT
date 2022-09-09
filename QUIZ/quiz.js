
    var q1={
        question:"WHAT IS THE ABBREVIATION of HYPER-TEXT-MARKUP-LANGUAGE",
        a:"HTML",
        b:"CSS",
        c:"JAVASCRIPT",
        d:"C#",
        correct:"a"
        }
    var q2={
            question:"WHAT IS THE ABBREVIATION of 'Cascading Style Sheets'",
            a:"JAVA",
            b:"CSS",
            c:"JAVASCRIPT",
            d:"C#",
            correct:"b"
            }
    var q3={
            question:"Hypertext Transfer Protocol ?",
            a:"XML",
            b:"SSL",
            c:"IP",
            d:"HTTP",
            correct:"d"
            }
    var q4={
            question:"WHICH LANGUAGE IS USED FOR STYLING WEB PAGES ?",
            a:"FORTRAN",
            b:"C",
            c:"CSS",
            d:"JAVA",
            correct:"c"
            }
    var q5={
            question:"WHAT IS THE MEANING OF '//' IN JAVASCRIPT",
            a:"COMMENT LINE",
            b:"FUNCTION",
            c:"LOOP",
            d:"DIVISION",
            correct:"a"
            }
            
        
        
var selected = ""
var lastselect = ""
var index = 0
var quiz_array = {0:q1,1:q2,2:q3,3:q4,4:q5,5:"CONGRATULATIONS !"}
var ans = 0

var _arr = ["a","b","c","d"]



window.onload = function() {
    /* Add your logic here */
   
    description = document.getElementById("description")
    document.getElementById("question").innerHTML = "1.<br>"+q1.question;

}




function get_question(x)
{

    
    document.getElementById("question").innerHTML = (x+1)+". <br>"+quiz_array[x].question;

    
}


function removeItemOnce(arr, value) 
{
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

function describe(x)
{

    description.innerHTML = quiz_array[index][x]  
    
}
function select(x)
{
    
    selected = x
    
    _arr.forEach(item => {
        document.getElementById(item).style = ""
    })
    document.getElementById(selected).style = "background-color:red"

    
   
    

}
function answer(selected)
{
   

    if(quiz_array[index]){
         
    if(selected === quiz_array[index].correct && index == 4)
    {
        ans++   
        document.getElementById("content").innerHTML = "CONGRATULATIONS MY FRIEND ! VISIT : <a href = 'https://github.com/AkinUgurAktas'>THIS</a>"+
        "<h1 style = 'color:red'>"+(ans)+"/5</h1>"
        document.getElementById("question").remove()
        document.getElementById("description").remove()
        document.getElementById("ANSWERS").remove()
        document.getElementById("btn").remove()
        document.getElementById("a").remove()
        document.getElementById("b").remove()
        document.getElementById("c").remove()
        document.getElementById("d").remove()
        
    }
    if(selected != quiz_array[index].correct && index == 4)
    {
         
        
        document.getElementById("content").innerHTML = "CONGRATULATIONS MY FRIEND ! VISIT : <a href = 'https://github.com/AkinUgurAktas'>THIS</a>"+
        "<h1 style = 'color:red'>"+(ans)+"/5</h1>"
        document.getElementById("question").remove()
        document.getElementById("description").remove()
        document.getElementById("ANSWERS").remove()
        document.getElementById("btn").remove()
        document.getElementById("a").remove()
        document.getElementById("b").remove()
        document.getElementById("c").remove()
        document.getElementById("d").remove()
        
    }
 
       

 if(selected === quiz_array[index].correct)
 {

    index=index+1
    ans++
    get_question(index)
    
    document.getElementById("ANSWERS").innerHTML = "TRUE "+ans+"/5"
   
    
    
 }
    else{

      
        index=index+1
        get_question(index)
        document.getElementById("ANSWERS").innerHTML = "TRUE "+ans+"/5"
        
        
    }
    

 }

}

