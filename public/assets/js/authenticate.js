{/* <script src="https://www.gstatic.com/firebasejs/4.8.0/firebase.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> */}


// *******************************************************************
    // firebase account info. fuzbuzcode@gmail.com password:bootcamp


    
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyAeQJwkVH-GGNljxlOtq5Zc5KnkPNwZ44Q",
            authDomain: "fuzbuzproject.firebaseapp.com",
            databaseURL: "https://fuzbuzproject.firebaseio.com",
            projectId: "fuzbuzproject",
            storageBucket: "fuzbuzproject.appspot.com",
            messagingSenderId: "519972404805"
          };
        firebase.initializeApp(config);


        var auth = firebase.auth();

        //allows an existing user to sign in
        // auth.signInWithEmailAndPassword(email,pass);

        //allows someone to create a user and log them in
        // auth.createUserWithEmailAndPassword(email,pass);

        //this will monitor the authentication state everytime a user logs in or out
        // auth.onAuthStateChanged(firebaseuser => {});


        //the code below is for storing a database of the user info in firebase****************
        var database = firebase.database();

        


        //*************************************************************************

        //Get elements
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const name = document.getElementById('name');
        const login = document.getElementById('loginbtn');
        const signup = document.getElementById('submit');
        const logout = document.getElementById('logoutbtn');




        //Add Login Event
        login.addEventListener('click', e => {
            event.preventDefault();
            //Get email and pass
            
            const eemail = email.value;
            const ppassword = password.value;
            const auth = firebase.auth();
            //sign in
            const promise = auth.signInWithEmailAndPassword(eemail, ppassword);

            promise.catch(e => console.log(e.message));

            $(".typedInfo").val("");
        });


        //add a signup event  
        signup.addEventListener('click', e => {
            event.preventDefault();
            //Get email and pass
            const nname = name.value;
            const eemail = email.value;
            const ppassword = password.value;
            const auth = firebase.auth();
            //sign in
            const promise = auth.createUserWithEmailAndPassword(eemail, ppassword);

            promise.catch(e => console.log(e.message));

            database.ref().push({
            nname: nname,
            eemail: eemail,
        
      });

            $(".typedInfo").val("");
        });



        //log out function
        logout.addEventListener('click', e => {
            firebase.auth().signOut();
        });

        //add a realtime authentication listener
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                console.log(firebaseUser);
                $("#logcolor").attr("style", "color:red");

                var user = firebase.auth().currentUser;

                database.ref().on("value", function(snapshot) {
                    $("#logintitle").text(snapshot.val().nname);
                    console.log(snapshot.val().nname);
                    console.log(snapshot.val().eemail);
                });
                res.redirect("/");

        //*************************the code below will send the user a verification email

        // user.sendEmailVerification().then(function () {
        //     // Email sent.
        // }).catch(function (error) {
        //     // An error happened.
        // });

        //******************************************************************************

            } else {
                console.log("not logged in");


            }
            //the code below is for displaying the current user's email on the page ********
            var user = firebase.auth().currentUser;
            var email;

            // if (user != null) {

            //     email = user.email;
            //     console.log((email));
            //     $("#status").text("Hello " + email);
            // }

            if (user != null) {
                email = user.email;
                console.log((email));
                $("#status").text("Hello " + email);

                // if (window.location ="/profile"){
                //     windows.location="/";
                // };
                // window.location = "/";
    //   res.redirect("/");
                // code below is for showing the user's name on the page
                database.ref().on("value", function (snapshot) {
                    $("#logintitle").text("hello" + snapshot.val().email);
                });
              }
              else {
                  // window.location = "index.html";
                }

        });
