var i = 0;
var txt = 'Miron Sulicz';
var speed = 50;
var titleWaitTime = 1000;

function typeText()
{
    if (i < txt.length)
    {
        document.getElementById("title").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeText, speed);
    }
}

window.onload = function revealTitle()
{
    setTimeout(typeText, titleWaitTime);
}