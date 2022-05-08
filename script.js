fetch('http://localhost:3001/profile')
.then(profile=>profile.json())
.then(profileObject=>displayText(profileObject));

function displayText(text){
    document.getElementById('display').innerHTML=
    `<b>Profile Details:</b></br>
      username: ${text.username}</br>
      full name: ${text.fullName}</br>
      live in: ${text.city}</br>
      hobies: ${text.hobies} `;    
}