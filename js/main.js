let codes = document.getElementById("codes");
let run = document.getElementById("run");
let remove = document.getElementById("remove");
let result = document.getElementById("result");



run.onclick = () => {
    result.innerHTML = codes.value;
    localStorage.setItem("Code", codes.value);
};

remove.onclick = () => {
    result.innerHTML = "";
    codes.value = "";
};

onload = ()=>{
    localStorage.setItem("Code",`
    <html>
    <head>

    </head>

    <body>
        
    </body>
    </html> 
    `);
    codes.value = localStorage.getItem("Code");
};