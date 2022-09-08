$(document).ready(function () {

    var countdownEl = document.getElementById("countdown");
    var seconds = 60;
    var timerInterval;
    var q1 = "This class is challenging as hell";
    var q2 = "dropping out is an option";
    $("#start-button").click(function (e) {
        e.preventDefault();

        $("#qtitle").html(q1);
        $("#qactions").html("<button id='q1-correct' type='button' class='btn btn-info btn-lg'>True</button> <button id='q1-incorrect' type='button' class='btn btn-info btn-lg'>False</button>");
        updateCountdown()


        $("#q1-correct").click(function (e) {
            e.preventDefault();
            console.log(e)
            $("#qtitle").html(q2);
            $("#qactions").html("<button id='q2-correct' type='button' class='btn btn-info btn-lg'>True</button> <button id='q2-incorrect' type='button' class='btn btn-info btn-lg'>False</button>");
            
            $("#q2-incorrect").click(function (e) {
                e.preventDefault();
                console.log(e)
               gameOver()
            });
        });
    });

    function updateCountdown() {
        timerInterval = setInterval(function () {
            seconds--;
            countdownEl.textContent = seconds;

            if (seconds <= 0) {
                // Stops execution of action at set interval
                clearInterval(timerInterval);
                // Calls function that ends game
                gameOver()

            }

        }, 1000);


    }
    function gameOver() {
        console.log("gameOverFunction");
        $("#qtitle").html("GAME OVER");
        $("#qactions").html("")
    }
});

