$(document).ready(function() {

    // var nameinput = $("#name").val().trim();
    // var usernameinput = $("#username").val().trim();
    // var emailinput = $("#email").val().trim();
    // var passwordinput = $("#password").val().trim();
    // var aboutinput = $("#aboutme").val().trim();


    var pasteit = $("#pasteit");
 

//   $(document).on("#submit", insertuser);
  $("#submit").on("click", insertuser)

  var profiles = [];

  getprofiles();

  function initializeRows() {
    pasteit.empty();
    var rowsToAdd = [];
    for (var i = 0; i < profiles.length; i++) {
      rowsToAdd.push(infoscreen(profiles[i]));
    }
    pasteit.prepend(rowsToAdd);
  }


  function getprofiles() {
    $.get("/api/profile", function(data) {
      profiles = data;
      initializeRows();
    });
  }



  function infoscreen(profile) {
    var newinfo = $(
      [
        "<li class='list-group-item todo-item'>",
        "<span>",
        // profile.username,
        "</span>",
        // "<input type='text' class='edit' style='display: none;'>",
        // "<button class='delete btn btn-default'>x</button>",
        // "<button class='complete btn btn-default'>✓</button>",
        "</li>"
      ].join("")
    );
// console.log(newinfo);
    // newinfo.find("button.delete").data("id", profile.id);
    // newinfo.find("input.edit").css("display", "none");
    newinfo.data("profile", profile);
    if (profile.complete) {
      newinfo.find("span").css("text-decoration", "line-through");
    }
    return newinfo;
  }



  function insertuser(event) {
    event.preventDefault();

    var nameinput = $("#name").val().trim();
    var usernameinput = $("#username").val().trim();
    var emailinput = $("#email").val().trim();
    var passwordinput = $("#password").val().trim();
    var beardinput = $("#userbeard").val();
    var aboutinput = $("#aboutme").val().trim();
    var checker = $("#checker");

    var profile = {
        name: nameinput,
        username: usernameinput,
        email: emailinput,
        password: passwordinput,
        beardStatus: beardinput,
        aboutMe: aboutinput
      
    };

    //validation code ****************
    if ((passwordinput.length <6) || (nameinput.length =0) || (usernameinput.length<6)){
      alert("Please properly fill out fields");
    }
    if (!(checker).prop('checked')){
      alert("Please agree!");
    }
    else{
    //*************************
    $.post("/api/profile", profile, getprofiles);
    // nameinput.val("");
    // usernameinput.val("");
    // emailinput.val("");
    // passwordinput.val("");
    // aboutMe.val("");
    // window.location = "/";

  }
}






});