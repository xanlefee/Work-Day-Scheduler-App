

let savedMessage = document.getElementsByClassName('.savedmessage');




// today's date

const today = dayjs().format('DD-MM-YYYY');




//colour-change function

let currenttime = dayjs().format('H'); //0-23 

$('.time-block').each(function () {

    $(this) //on each loop this would be individual time block elelemt

    const elementHour = $(this).attr('data-hour')

    if (elementHour < currenttime) {


        $(this).css({ 'background-color': '#8a3a8a', color: '#d9e9e9' });


    }

    else if (elementHour > currenttime) {
        $(this).css({ 'background-color': '#6a9a1a', color: '#d9e9e9' });

    }

});

//localStorage.getItem('data');


// display current day in fancy way


const todayfancy = dayjs().format('dddd D MMMM YYYY');

$("#currentDay").text(todayfancy);


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

        let data9am = todayData.data[9];
        let data10am = todayData.data[10];
        let data11am = todayData.data[11];
        let data12pm = todayData.data[12];
        let data1pm = todayData.data[13];
        let data2pm = todayData.data[14];
        let data3pm = todayData.data[15];
        let data4pm = todayData.data[16];
        let data5pm = todayData.data[17];


        // checks if button clicked corresponds with the textarea Id, if so, logs the data
        // and brings up message saying it's been logged



        if (whichButton === "button-9" && $("#9")) {
            console.log("9");

            $('#9').val(data9am);
            localStorage.setItem("data", JSON.stringify(localstoragedata));
            $(".savedmessage").css({ "visibility": "visible" });
            setTimeout(() => {
                $(".savedmessage").css({ "visibility": "hidden" });
            }, 3000)
        }

        else if (whichButton === "button-10" && $("#10")) {
            console.log("10");
            $('#10').val(data10am);
            localStorage.setItem("data", JSON.stringify(localstoragedata));
            $(".savedmessage").css({ "visibility": "visible" });
            setTimeout(() => {
                $(".savedmessage").css({ "visibility": "hidden" });
            }, 3000)

        }

        else if (whichButton === "button-11" && $("#11")) {
            console.log("11");
            $('#11').val(data11am);
            localStorage.setItem("data", JSON.stringify(localstoragedata));
            $(".savedmessage").css({ "visibility": "visible" });
            setTimeout(() => {
                $(".savedmessage").css({ "visibility": "hidden" });
            }, 3000)

        }

        else if (whichButton === "button-12" && $("#12")) {
            console.log("12");
            $('#12').val(data12pm);
            localStorage.setItem("data", JSON.stringify(localstoragedata));
            $(".savedmessage").css({ "visibility": "visible" });
            setTimeout(() => {
                $(".savedmessage").css({ "visibility": "hidden" });
            }, 3000)
        }

        else if (whichButton === "button-13" && $("#13")) {
            console.log("13");
            $('#13').val(data1pm);
            localStorage.setItem("data", JSON.stringify(localstoragedata));
            $(".savedmessage").css({ "visibility": "visible" });
            setTimeout(() => {
                $(".savedmessage").css({ "visibility": "hidden" });
            }, 3000)

        }

        else if (whichButton === "button-14" && $("#14")) {
            console.log("14");
            $('#14').val(data2pm);
            localStorage.setItem("data", JSON.stringify(localstoragedata));
            $(".savedmessage").css({ "visibility": "visible" });
            setTimeout(() => {
                $(".savedmessage").css({ "visibility": "hidden" });
            }, 3000)

        }

        else if (whichButton === "button-15" && $("#15")) {
            console.log("15");
            $('#15').val(data3pm);
            localStorage.setItem("data", JSON.stringify(localstoragedata));
            $(".savedmessage").css({ "visibility": "visible" });
            setTimeout(() => {
                $(".savedmessage").css({ "visibility": "hidden" });
            }, 3000)

        }

        else if (whichButton === "button-16" && $("#16")) {
            console.log("16");
            $('#16').val(data4pm);
            localStorage.setItem("data", JSON.stringify(localstoragedata));
            $(".savedmessage").css({ "visibility": "visible" });
            setTimeout(() => {
                $(".savedmessage").css({ "visibility": "hidden" });
            }, 3000)

        }

        else if (whichButton === "button-17" && $("#17")) {
            console.log("17");
            $('#17').val(data5pm);
            localStorage.setItem("data", JSON.stringify(localstoragedata));
            $(".savedmessage").css({ "visibility": "visible" });
            setTimeout(() => {
                $(".savedmessage").css({ "visibility": "hidden" });
            }, 3000)
        };

    })
});


//retrieving local storage data on reload
let scheduledata = [];

scheduledata = JSON.parse(localStorage.getItem("data")) || [];


$('#9').val(scheduledata[0].data[9]);
$('#10').val(scheduledata[0].data[10]);
$('#11').val(scheduledata[0].data[11]);
$('#12').val(scheduledata[0].data[12]);
$('#13').val(scheduledata[0].data[13]);
$('#14').val(scheduledata[0].data[14]);
$('#15').val(scheduledata[0].data[15]);
$('#16').val(scheduledata[0].data[16]);
$('#17').val(scheduledata[0].data[17]);


