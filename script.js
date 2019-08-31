// console.log('validation!');
function validator(){
    var message = $("#message");
    message.innerHTML = "";
    var IS_JSON = true;
    try{
        var json = JSON.parse($("#text-area").val());
    }
    catch(err){
        IS_JSON = false;
        console.log("This is not a JSON");
        $("#message").html("This is not a JSON");
    }
    if (IS_JSON == true){
        message.innerHTML = "This is a JSON";
        console.log("This is a JSON");
        $("#message").html("This is a JSON");
    }
}
