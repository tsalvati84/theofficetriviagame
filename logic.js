var questions100 = ["Which character became Jim’s love interest after he moved to the Stamford branch in season three and joined the Scranton office during the merger?",
"What is the exclusive club that Pam, Oscar, and Toby Flenderson establish in the episode, Branch Wars?",
"What substance does Jim put office supplies owned by Dwight into?", "In “Diversity Day” episode what famous comedian’s stand up routine does Michael imitate?",
"What does Michael pretend to fire Pam over in season one?"];
var questions200=["Category 1 for 200", "Category 2 for 200", "Category 3 for 200", "Category 4 for 200", "Category 5 for 300"];
var questions300 = ["Category 1 for 300", "Category 2 for 300", "Category 3 for 300", "Category 4 for 300", "Category 5 for 300"];
var questions400 = ["Category 1 for 400", "Category 2 for 400", "Category 3 for 400", " Category 4 for 400", "Category 5 for 400"];
var questions500 = ["Category 1 for 500", "Category 2 for 500", "Category 3 for 500", "Category 4 for 500", "Category 5 for 500"];
var choices11 = ["Pam", "Karen", "Katy"];
var choices12 = ["Choice 1", "Choice 2", "Choice 3"];
var choices13 = ["Choice 1", "Choice 2", "Choice 3"];
var choices14 = ["Choice 1", "Choice 2", "Choice 3"];
var choices15 = ["Choice 1", "Choice 2", "Choice 3"];
var choices21 = ["The Greater Things Club", "The Finer Things Club", "The Excellent Things Club"];
var choices22 = ["Choice 1", "Choice 2", "Choice 3"];
var choices23 = ["Choice 1", "Choice 2", "Choice 3"]; 
var choices24 = ["Choice 1", "Choice 2", "Choice 3"];
var choices25 = ["Choice 1", "Choice 2", "Choice 3"];
var choices31 = ["Tomato Sauce", "Pudding", "Jello"];
var choices32 = ["Choice 1", "Choice 2", "Choice 3"];
var choices33 = ["Choice 1", "Choice 2", "Choice 3"];
var choices34 = ["Choice 1", "Choice 2", "Choice 3"];
var choices35 = ["Choice 1", "Choice 2", "Choice 3"];
var choices41 = ["Chris Rock", "Jerry Seinfeld", "Richard Pryor"];
var choices42 = ["Choice 1", "Choice 2", "Choice 3"];
var choices43 = ["Choice 1", "Choice 2", "Choice 3"];
var choices44 = ["Choice 1", "Choice 2", "Choice 3"];
var choices45 = ["Choice 1", "Choice 2", "Choice 3"];
var number = 10;
var outOfTime;
var intervalId;
var score = 0;




function timer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    number--;
    $("#timer").html("<h4>" + "TIMER: " + number + "</h4>");
    if (number <= 0) {
        clearInterval(intervalId);
        $("question").empty();
        $("#rightorwrong").append("<span>" + "OUT OF TIME! TRY ANOTHER QUESTION" + "</span>");
        $("#c11").css("background-color", "black");
    }   
}


$(document).ready(function() {
    $("#startGame").on("click", timer);
    $("#startGame").on("click", decrement);
    

   $("#startGame").on("click", function () {
       $("#question").empty();
       $("#choices").empty();
       
   })


    $("#c11").on("click", function () {
        $("#question").empty();
        $("#choices").empty();
        $("#c11").css("background-color", "white");
        $("#c11").append(timer);
           
        
    
         $("#question").html(questions100[0]);
            $("#choices").append("<button id='button1'>" + choices11[0]);
                $("#choices").append("<button id ='button2'>" + choices11[1]);
                    $("#choices").append("<button id ='button3'>" + choices11[2]);
         
                    
        $("#button2").on("click", function () {
            $("#rightorwrong").html("<span>" + "CORRECT! You Get 100 Points!" + "</span>")
            $("#score").append(one)
            
        })
        $("#button1").on("click", function () {
            
            $("#rightorwrong").html("<span>" + "WRONG! Try Another Question" + "</span>")
        })  
        $("#button3").on("click", function () {
            
            $("#rightorwrong").html("<span>" + "WRONG! Try Another Question" + "</span>")
        })  
        
        


              
    })
 
    $("#c12").on("click", function () {
        $("#question").empty();
        $("#choices").empty();
        $("#c12").css("background-color", "white");
        $("#question").append(questions200[0]);
            $("#choices").append("<button>" + choices12[0]);
                $("#choices").append("<button>" + choices12[0]);
                     $("#choices").append("<button>" + choices12[0]);
        
    })  

    $("#c13").on("click", function () {
        $("#question").empty();
        $("#choices").empty();
        $("#c13").css("background-color", "white");
        $("#question").append(questions300[0]);
            $("#choices").append("<button>" + choices13[0]);
                 $("#choices").append("<button>" + choices13[1]);
                        $("#choices").append("<button>" + choices13[2]);
    })

    $("#c14").on("click", function () {
        $("#question").empty();
        $("#choices").empty();
        $("#c14").css("background-color", "white");
        $("#question").append(questions400[0]);
            $("#choices").append("<button>" + choices14[0]);
                $("#choices").append("<button>" + choices14[1]);
                     $("#choices").append("<button>" + choices14[2]);
    })

    $("#c15").on("click", function () {
        $("#question").empty();
        $("#choices").empty();
        $("#c15").css("background-color", "white");
        $("#question").append(questions500[0]);
            $("#choices").append("<button>" + choices15[0]);
                $("#choices").append("<button>" + choices15[1]);
                     $("#choices").append("<button>" + choices15[2]);
    })
   

    $("#c21").on("click", function () {
        $("#question").empty();
        $("#choices").empty();
        $("#c21").css("background-color", "white");
         $("#question").html(questions100[1]);
            $("#choices").append("<button>" + choices21[0]);
                $("#choices").append("<button>" + choices21[1]);
                    $("#choices").append("<button>" + choices21[2]);
              
    })
    $("#c22").on("click", function () {
        $("#question").empty();
        $("#choices").empty();
        $("#c22").css("background-color", "white");
         $("#question").html(questions200[1]);
            $("#choices").append("<button>" + choices22[0]);
                $("#choices").append("<button>" + choices22[1]);
                    $("#choices").append("<button>" + choices22[2]);
              
    })

    $("#c23").on("click", function () {
        $("#question").empty();
        $("#choices").empty();
        $("#c23").css("background-color", "white");
         $("#question").html(questions300[1]);
            $("#choices").append("<button>" + choices23[0]);
                $("#choices").append("<button>" + choices23[1]);
                    $("#choices").append("<button>" + choices23[2]);
              
    })

    $("#c24").on("click", function () {
        $("#question").empty();
        $("#choices").empty();
        $("#c24").css("background-color", "white");
         $("#question").html(questions400[1]);
            $("#choices").append("<button>" + choices24[0]);
                $("#choices").append("<button>" + choices24[1]);
                    $("#choices").append("<button>" + choices24[2]);
              
    })

    $("#c25").on("click", function () {
        $("#question").empty();
        $("#choices").empty();
        $("#c25").css("background-color", "white");
         $("#question").html(questions500[1]);
            $("#choices").append("<button>" + choices25[0]);
                $("#choices").append("<button>" + choices25[1]);
                    $("#choices").append("<button>" + choices25[2]);
              
    })

    $("#c31").on("click", function () {
        $("#question").empty();
        $("#choices").empty();
        $("#c31").css("background-color", "white");
         $("#question").html(questions100[2]);
            $("#choices").append("<button>" + choices31[0]);
                $("#choices").append("<button>" + choices31[1]);
                    $("#choices").append("<button>" + choices31[2]);
              
    })

    $("#c32").on("click", function () {
        $("#question").empty();
        $("#choices").empty();
        $("#c32").css("background-color", "white");
         $("#question").html(questions200[2]);
            $("#choices").append("<button>" + choices32[0]);
                $("#choices").append("<button>" + choices32[1]);
                    $("#choices").append("<button>" + choices32[2]);
              
    })

    $("#c33").on("click", function () {
        $("#question").empty();
        $("#choices").empty();
        $("#c33").css("background-color", "white");
         $("#question").html(questions300[2]);
            $("#choices").append("<button>" + choices33[0]);
                $("#choices").append("<button>" + choices33[1]);
                    $("#choices").append("<button>" + choices33[2]);
              
    })

    $("#c34").on("click", function () {
        $("#question").empty();
        $("#choices").empty();
        $("#c34").css("background-color", "white");
         $("#question").html(questions400[2]);
            $("#choices").append("<button>" + choices34[0]);
                $("#choices").append("<button>" + choices34[1]);
                    $("#choices").append("<button>" + choices34[2]);
              
    })

    $("#c35").on("click", function () {
        $("#question").empty();
        $("#choices").empty();
        $("#c35").css("background-color", "white");
         $("#question").html(questions500[2]);
            $("#choices").append("<button>" + choices35[0]);
                $("#choices").append("<button>" + choices35[1]);
                    $("#choices").append("<button>" + choices35[2]);
              
    })

    $("#c41").on("click", function () {
        $("#question").empty();
        $("#choices").empty();
        $("#c41").css("background-color", "white");
         $("#question").html(questions100[3]);
            $("#choices").append("<button>" + choices41[0]);
                $("#choices").append("<button>" + choices41[1]);
                    $("#choices").append("<button>" + choices41[2]);
              
    })

    $("#c42").on("click", function () {
        $("#question").empty();
        $("#choices").empty();
        $("#c42").css("background-color", "white");
         $("#question").html(questions200[3]);
            $("#choices").append("<button>" + choices42[0]);
                $("#choices").append("<button>" + choices42[1]);
                    $("#choices").append("<button>" + choices42[2]);
              
    })

    $("#c43").on("click", function () {
        $("#question").empty();
        $("#choices").empty();
        $("#c43").css("background-color", "white");
         $("#question").html(questions300[3]);
            $("#choices").append("<button>" + choices43[0]);
                $("#choices").append("<button>" + choices43[1]);
                    $("#choices").append("<button>" + choices43[2]);
              
    })

    $("#c44").on("click", function () {
        $("#question").empty();
        $("#choices").empty();
        $("#c44").css("background-color", "white");
         $("#question").html(questions400[3]);
            $("#choices").append("<button>" + choices44[0]);
                $("#choices").append("<button>" + choices44[1]);
                    $("#choices").append("<button>" + choices44[2]);
              
    })

    $("#c45").on("click", function () {
        $("#question").empty();
        $("#choices").empty();
        $("#c45").css("background-color", "white");
         $("#question").html(questions500[3]);
            $("#choices").append("<button>" + choices11[0]);
                $("#choices").append("<button>" + choices11[1]);
                    $("#choices").append("<button>" + choices11[2]);
              
    })

    


})