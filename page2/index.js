                    
const imgeIcon=localStorage.getItem('userAvatar');
// استرجاع البيانات وعرضها
    const data = JSON.parse(localStorage.getItem('userData'));
    if (data) {
        document.getElementById('displayName').innerText = data.name;
        document.getElementById('displayEmail').innerText = data.email;
        document.getElementById('ticketName').innerText = data.name;
        document.getElementById('ticketGithub').innerText = data.github;
        document.getElementById("ticketAvatar").src=imgeIcon;
    }