
let time = moment().hours()
console.log(time)
function initialize(){
$("tbody .textarea").each(function(){
    let hours=parseInt($(this).attr("id"));
   if(hours<time){
    $(this).addClass("past");
    $(this).removeClass("future", "present");
    
   }
   else if(hours===time){
       $(this).addClass("present");
       $(this).removeClass("future", "past");
   }
   else {
    $(this).addClass("future");
    $(this).removeClass("present", "past");
   }
   
});
}
initialize();








$("input").each(function(index, value) {
    var value = ("input");
    var myJSON = JSON.stringify(value);
    document.getElementById("input");
    console.log(value);
});








if (localStorage["user1"])
{
    var user = localStorage["user1"] ;
    document.getElementById("user1").value = user ;
    
}
else
{
    document.getElementById("user1").placeholder = "" ;
    console.log(name);
}

document.getElementById("save").addEventListener
{
    $(this).click(function ()
    {
        var user = document.getElementById("user1").value ;
        localStorage.setItem("user1", user) ;
       
    });
}


if (localStorage["user2"])
{
    var user = localStorage["user2"] ;
    document.getElementById("user2").value = user ;
    
}
else
{
    document.getElementById("user2").placeholder = "" ;
    console.log(name);
}

document.getElementById("save").addEventListener
{
    $(this).click(function ()
    {
        var user = document.getElementById("user2").value ;
        localStorage.setItem("user2", user) ;
       
    });
}

if (localStorage["user3"])
{
    var user = localStorage["user3"] ;
    document.getElementById("user3").value = user ;
    
}
else
{
    document.getElementById("user3").placeholder = "" ;
    console.log(name);
}

document.getElementById("save").addEventListener
{
    $(this).click(function ()
    {
        var user = document.getElementById("user3").value ;
        localStorage.setItem("user3", user) ;
       
    });
}

if (localStorage["user4"])
{
    var user = localStorage["user4"] ;
    document.getElementById("user4").value = user ;
    
}
else
{
    document.getElementById("user4").placeholder = "" ;
    console.log(name);
}

document.getElementById("save").addEventListener
{
    $(this).click(function ()
    {
        var user = document.getElementById("user4").value ;
        localStorage.setItem("user4", user) ;
       
    });
}

if (localStorage["user5"])
{
    var user = localStorage["user5"] ;
    document.getElementById("user5").value = user ;
    
}
else
{
    document.getElementById("user5").placeholder = "" ;
    console.log(name);
}

document.getElementById("save").addEventListener
{
    $(this).click(function ()
    {
        var user = document.getElementById("user5").value ;
        localStorage.setItem("user5", user) ;
       
    });
}

if (localStorage["user6"])
{
    var user = localStorage["user6"] ;
    document.getElementById("user6").value = user ;
    
}
else
{
    document.getElementById("user6").placeholder = "" ;
    console.log(name);
}

document.getElementById("save").addEventListener
{
    $(this).click(function ()
    {
        var user = document.getElementById("user6").value ;
        localStorage.setItem("user6", user) ;
       
    });
}


if (localStorage["user7"])
{
    var user = localStorage["user7"] ;
    document.getElementById("user7").value = user ;
    
}
else
{
    document.getElementById("user7").placeholder = "" ;
    console.log(name);
}

document.getElementById("save").addEventListener
{
    $(this).click(function ()
    {
        var user = document.getElementById("user7").value ;
        localStorage.setItem("user7", user) ;
       
    });
}

if (localStorage["user8"])
{
    var user = localStorage["user8"] ;
    document.getElementById("user8").value = user ;
    
}
else
{
    document.getElementById("user8").placeholder = "" ;
    console.log(name);
}

document.getElementById("save").addEventListener
{
    $(this).click(function ()
    {
        var user = document.getElementById("user8").value ;
        localStorage.setItem("user8", user) ;
       
    });
}


if (localStorage["user9"])
{
    var user = localStorage["user9"] ;
    document.getElementById("user9").value = user ;
    
}
else
{
    document.getElementById("user9").placeholder = "" ;
    console.log(name);
}

document.getElementById("save").addEventListener
{
    $(this).click(function ()
    {
        var user = document.getElementById("user9").value ;
        localStorage.setItem("user9", user) ;
       
    });
}







