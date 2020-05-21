
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









if (localStorage["user"])
{
    var user = localStorage["user"] ;
    document.getElementById("user").value = user ;
    
}
else
{
    document.getElementById("user").placeholder = "" ;
    console.log(name);
}


document.getElementById("save").addEventListener
{
    $(this).click(function ()
    {
        var user = document.getElementById("user").value ;
        localStorage.setItem("user", user) ;
       
    });
}









// document.getElementById("delete").addEventListener
// {
//     $(this).click(function ()
//     {
//         var user = document.getElementById("user").value ;
//         //localStorage["user"] = user ;
//         localStorage.removeItem("user", user) ;
       
//     });
// }

















// var save = ("save");
// var text = ("text");

// $("save").click(function() {
    
// });




// $('.oquote').click(function() { 
//     $('#replyBox').slideDown('slow', function() {
//     var quote = $('.container').text();   
//        $('#replyBox').val($('#replyBox').val()+quote);   
//       // Animation complete.
//     });    
//   });
