let input = document.querySelectorAll(".one-letter-per-box");

function changeInputColor(id) {
 
    if(input[id] === document.activeElement) {
    input[id].style.border = "2px solid #4E49B9";
    
} 
}