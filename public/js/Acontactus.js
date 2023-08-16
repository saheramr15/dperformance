$(document).ready(function() {
    $("#contactForm").submit(function(event) {
       event.preventDefault();
             const  data = { 
              name:  $('#name').val(),
              address: $('#address').val(),
              email: $('#email').val(),
              phone: $('#phone').val(),
              company: $('#company').val(),
              mes: $('#req').val()
         };
         let c=0;
             $.ajax({
                 url: '/contactus',
                 method: 'POST',
           
                 data:   data  ,
                 success: function (response) {
     
                   if(response=='true'){
                      $.ajax({
                          url: '/',
                          method: 'GET',
                          success: function (response) {
               
                              window.location.href = '/contactus';
 
                          },
                          error:function(err){
                          }
                      });
                  }else if(response=='error'){
                   const error=document.getElementById('error');
                   error.innerHTML='كل البيانات مطلوبه';
                  }else{
                    const error=document.getElementById('error');
                    error.innerHTML='من فضلك ادخل بريد الكترونى صحيح';
                  }
                 },
                 error:function(err){
                 }
             });
         });
     
     
 });
 