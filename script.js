

let savedMessage = document.getElementsByClassName('.savedmessage');




// today's date

const today = dayjs().format('DD-MM-YYYY');




//colour-change function

let currenttime = dayjs().format('H'); //0-23 
let currentFancyTime = dayjs().format("h:mm A");




$('.time-block').each(function () {

    $(this) //on each loop this would be individual time block elelemt

    const elementHour = $(this).attr('data-hour')

    if (elementHour < currenttime) {


        $(this).addClass('past');

    }

    

    if (elementHour > currenttime) {
        $(this).addClass('future');

    }

    if (elementHour === currenttime) {
        $(this).addClass('present');
    }

});




//localStorage.getItem('data');


// display current day in fancy way


const todayfancy = dayjs().format('dddd D MMMM YYYY');

$("#currentDay").text(todayfancy);

$("#currentTime").text(currentFancyTime);


// local storage data object

const localstoragedata = [{
    date: today,
    data: {
        09: 'text at 9:00',
        10: 'text at 10:00',
        11: 'text at 11:00',
        12: 'text at 12:00',
        13: 'text at 13:00',
        14: 'text at 14:00',
        15: 'text at 15:00',
        16: 'text at 16:00',
        17: 'text at 17:00',
    }
}];



//  creates index of localstoragedata, sets the date as today

const todaydataindex = localstoragedata.findIndex(function (element) {

    return element.date === today;


});

// selects each save button individually
const saveButton = $(".saveBtn");


saveButton.each(function () {
    $(this).on("click", function (event) {

       event.preventDefault();

        let clickedButton = event.target;
        let whichButton = $(clickedButton).attr("id");



        const todayData = localstoragedata[todaydataindex];

        // sets the user input to the value of the corresponding text box




        let userText9 = $('#9').val();
        let userText10 = $('#10').val();
        let userText11 = $('#11').val();
        let userText12 = $('#12').val();
        let userText13 = $('#13').val();
        let userText14 = $('#14').val();
        let userText15 = $('#15').val();
        let userText16 = $('#16').val();
        let userText17 = $('#17').val();


        // then stores the user text in the array

   

        

        todayData.data[9] = userText9;
        todayData.data[10] = userText10;
        todayData.data[11] = userText11;
        todayData.data[12] = userText12;
        todayData.data[13] = userText13;
        todayData.data[14] = userText14;
        todayData.data[15] = userText15;
        todayData.data[16] = userText16;
        todayData.data[17] = userText17;

        
        // stores this new value in a variable

    

        // checks if button clicked corresponds with the textarea Id, if so, logs the data
        // and brings up message saying it's been logged


        // 

        for (i = 0; i < 18; i++) {

            
            
        if (whichButton === "button-"+ i) {
            console.log("Hell yeah");

            $('#'+ i).val(todayData.data[i]);
            localStorage.setItem("data", JSON.stringify(localstoragedata));
            $(".savedmessage").css({ "visibility": "visible" });
            setTimeout(() => {
                $(".savedmessage").css({ "visibility": "hidden" });
            }, 3000)

          
           
        }
        }


    })
   
});


//retrieving local storage data on reload
let scheduledata = [];

scheduledata = JSON.parse(localStorage.getItem("data")) || [];

for (i = 8; i < 18; i++) {
    $('#'+ i).val(scheduledata[0].data[i]);
}





$("#clear").click(function(event) {

   event.preventDefault();
  
localStorage.clear();
location.reload();

});
