async function scanURL(){

let url = document.getElementById("url").value;
let result = document.getElementById("result");

let apiKey = "105558086b5c6e773c7addae55800f6fc17cb5bddcb5f75bf3746ed2a876d5af";

result.innerText = "Scanning...";

try{

let response = await fetch("https://www.virustotal.com/api/v3/urls",{
method:"POST",
headers:{
"x-apikey":apiKey,
"Content-Type":"application/x-www-form-urlencoded"
},
body:"url="+encodeURIComponent(url)
});

let data = await response.json();

result.innerText = "Scan submitted successfully.";

}catch(error){

console.log(error);
result.innerText = "Error connecting to VirusTotal API.";

}

}