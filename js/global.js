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

 /*on click submit button process the ghanian name
        ===========================================================*/
$("#submit-button").click(function(event) {
    

    event.preventDefault();
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let birthDate = document.getElementById('birthdate').value;
    let gender = document.getElementById('gender').value;
    const birthDaydate = new Date(birthDate);
    const dayOfTheWeek = birthDaydate.getDay();
    let dayName = "";
        
    switch (dayOfTheWeek) {
        case 0:
            dayName = "Sunday";
            break;
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        default:
           console.log(`Sorry, Please check your input data.`);
           break;
      }
    
        
        if((firstname !== "") && (lastname !== "") && (dayName !== ""))
        {
            
            //get the ghanian name
            let ghanianName = generateAkanNames(dayName,gender);
            swal({
                title: "Success !",
                text: "Hi Mr/Mrs"+ firstname + " " +lastname +" You were born on "+ dayName +" And Your Ghanian Name is " + ghanianName,
                icon: "success",
            });
        }
        else
        {
            
            swal({
                title: "Error !",
                text: "Hi "+ firstname + " " +lastname +" Please Enter correct details",
                icon: "error",
            });
        }
        


});


})(jQuery);





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


