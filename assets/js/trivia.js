function triviaPlay(){
$(document).ready(function() {
    $('.question-container').hide(); //hide questions and results
    $('.results').hide();

    
    var number = 60; //number of seconds
    var intervalId;
    var correctAns = 0;
    var wrongAns = 0;
    var unanswered = 0;



    
    function showQuestions(){
        
        $('.question-container').show(); //show the questions after paly clicked
        
    }

    
    function countdownTimer(){
            intervalId = setInterval(decrement, 1000);  //countdown timer
    }
   
        
    function decrement(){
        number--;
        $('#timer').html(" " + number + " " + "seconds"); //countdown
        if (number ===1){
            $('#timer').html(" " + number + " " + "second");
        }
        else if(number ===0) {
            stop();
            hide();
            displayResults();
        }
    }

        
    function stop() {
        clearInterval(intervalId); //clear timer
    }

        
    function hide(){
        $('#countdown').hide();              //hide after quixz complete
        $('.question-container').hide();
        $('#submit').hide();
    }

    
    function displayResults(){        //results display
        $('.results').show();
        unanswered = (15-(correctAns+wrongAns));
        $('#correctAns').text("Your correct selection :" + " " + correctAns); 
        $('#wrongAns').text("Your incorrect selections :" + " " + wrongAns); 
        $('#unanswered').text("Did not attempt:" + " " + unanswered); 
    }


    
    $('#play').on('click', function(){ //start game with play clicked
        $('#play').hide();
        showQuestions();
        countdownTimer();
    }); 

    
    $('#submit').on('click', function(){   //complete game on done
        $('#play').hide(); 
        hide();
        displayResults();
    });

    
    $('input[type=radio]').on ('change', function(){       //reading the selections
    correctAns = $('input[value=correct]:checked').length;
    wrongAns = $('input[value=wrong]:checked').length;
    unanswered = (15-(correctAns+wrongAns));
    console.log(unanswered)
    });


});
}