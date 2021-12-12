(function ($) {
    'use strict';
    /*==================================================================
        [ Daterangepicker ]*/
    try {
        $('.js-datepicker').daterangepicker({
            "singleDatePicker": true,
            "showDropdowns": true,
            "autoUpdateInput": false,
            locale: {
                format: 'YYYY-MM-DD'
            },
        });
    
        var myCalendar = $('.js-datepicker');
        var isClick = 0;
    
        $(window).on('click',function(){
            isClick = 0;
        });
    
        $(myCalendar).on('apply.daterangepicker',function(ev, picker){
            isClick = 0;
            $(this).val(picker.startDate.format('YYYY-MM-DD'));
    
        });
    
        $('.js-btn-calendar').on('click',function(e){
            e.stopPropagation();
    
            if(isClick === 1) isClick = 0;
            else if(isClick === 0) isClick = 1;
    
            if (isClick === 1) {
                myCalendar.focus();
            }
        });
    
        $(myCalendar).on('click',function(e){
            e.stopPropagation();
            isClick = 1;
        });
    
        $('.daterangepicker').on('click',function(e){
            e.stopPropagation();
        });
    
    
    } catch(er) {console.log(er);}
    /*[ Select 2 Config ]
        ===========================================================*/
    
    try {
        var selectSimple = $('.js-select-simple');
    
        selectSimple.each(function () {
            var that = $(this);
            var selectBox = that.find('select');
            var selectDropdown = that.find('.select-dropdown');
            selectBox.select2({
                dropdownParent: selectDropdown
            });
        });
    
    } catch (err) {
        console.log(err);
    }

})(jQuery);



function getBirthDay()
{
    
        let firstname = document.getElementById('firstname').value;
        let lastname = document.getElementById('lastname').value;
        let birthDate = document.getElementById('birthdate').value;
        let gender = document.getElementById('gender').value;
        let email = document.getElementById('email').value;
        let phoneNumber = document.getElementById('phonenumber').value;
        
        const birthDaydate = new Date(birthDate);
        const year = birthDaydate.getUTCFullYear();
        const month = (birthDaydate.getUTCMonth()) + 1;
        const day = birthDaydate.getUTCDate();
        const yeartoString =  year.toString();
        const CC = parseInt(yeartoString.substring(0, 2));
        const YY = parseInt(yeartoString.substring(2,4));
        let dayName = "";

        dayOfTheWeek =Math.floor(( ((CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(month+1)/10)) + day ) % 7);
        
        switch (dayOfTheWeek) {
            case 1:
                dayName = "Sunday";
                break;
            case 2:
                dayName = "Monday";
                break;
            case 3:
                dayName = "Tuesday";
                break;
            case 4:
                dayName = "Wednesday";
                break;
            case 5:
                dayName = "Thursday";
                break;
            case 6:
                dayName = "Friday";
                break;
            case 0:
                dayName = "Saturday";
                break;
            default:
               console.log(`Sorry, Please check your input data.`);
          }

        ghanianName = generateAkanNames(dayName,gender);
        alert("Hi " + firstname + " "+ lastname + " You were born on "+ dayName +" And Your Ghanian Name is " + ghanianName);

        // console.log({
        //     birthDate,
        //     birthDaydate,
        //     dayOfTheWeek,
        //     year,
        //     month,
        //     day,
        //     CC,
        //     YY
        // });

    
}


function generateAkanNames(dayName,gender)
{
    
      // an object to hold and return the ghanian day names
      ghanianDayNames = {
          Male:
          {
            Sunday: "Kwasi",
            Monday: "Kwadwo",
            Tuesday: "Kwabena",
            Wednesday: "Kwaku",
            Thursday:  "Yaw",
            Friday: "Kofi",
            Saturday: "Kwame"

          },
          Female:
          {

            Sunday: "Akosua",
            Monday: "Adwoa",
            Tuesday: "Abenaa",
            Wednesday: "Akua",
            Thursday:  "Yaa",
            Friday: "Afua",
            Saturday: "Ama"
              
          }
      }

      return ghanianDayNames[gender][dayName];
    
}


