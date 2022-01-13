document.querySelector(".process-btn").addEventListener("click", addPipes);

function addPipes() {
    let text = document.querySelector(".input-text").value;
    processed_text = text.split('').map(x => "||" + x + "||").join('');
    document.querySelector(".output-text").innerHTML = processed_text;
    
}