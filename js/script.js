
$(document).ready(function(){

    $("#contact_modal").validate({
    rules: {
        name_m: {
            required: true
        },
        email_m: {
            required: true,
            email: true
        },
        number_m: {
            required: true,
            minlength: 10,
            maxlength: 10,
            number: true
        },
        select_m:{
            required:true
        },
        message_m:{
            required:true
        },
        
    },
    messages: {
        name_m: {
            required: "Please enter Your Name"
        },
        email_m: {
            required: "Please enter a Valid Email",
            email: "Please enter a Valid Email"
        },
        number_m: {
            required: "Please enter a Valid Mobile Number",
            minlength: "Mobile Number Must be 10 Digit Only",
            maxlength: "Mobile Number Must be 10 Digit Only",
            number: "Kindly Enter Numbers Only."
        },
        select_m:{
            required:"please Select Course"
        },
        message_m:{
            required:"Please text message"
        }
        
    },
    errorPlacement: function(label, element) {
        label.addClass('mt-2 text-danger');
        if (element.parent().hasClass('input-group')) {
            label.insertAfter(element.parent());
        } 
        else if (element.is('select')) {
                label.insertAfter(element);
            }  else {
                label.insertAfter(element);
            }
    },
    highlight: function(element, errorClass) {
        $(element).parent().addClass('has-danger')
        $(element).addClass('form-control-danger')
        $(element).next('label.error').remove()
    },
    unhighlight: function(element) {
        $(element).parent().removeClass('has-danger')
        $(element).addClass('form-control-danger')
        $(element).next('label.error').remove()
    },
    success: function(label, element) {
        $(element).removeClass('text-danger');
    },
    submitHandler: function() {

        $.ajax({
                url: 'ajax/insert-modal.php', 
                type: 'POST',
                dataType: 'json', 
                data: $("#contact_modal").serialize()
            }) // serialize form data

            .done(function(data) {
                
                if(data.success==true){
                    /*alert('Your enquiry has been successfully submitted. We will Contact You Soon');*/
                   var name=$('#name_m').val();
                   var email=$('#email_m').val();
                   var mobile=$('#number_m').val();
                   var subject=$('#select_m').val();
                   var msg=$('#message_m').val();
                    var message="Dear ADMISSION PROVIDER,you have received a new enquiry from  www.admissionproviders.com. Details-Name-"+name+",mobile-"+mobile+",Email-"+email+",subject-"+subject+",message-"+msg+" ";

          var url="http://sms.smsall.in/http-api.php?username=faheemkhan&password=faheem@123&senderid=INQURY&route=1&number=9135800500&message="+message+"";

           var usermsg="Dear "+name+" Thankyou For Contacting Us. We are contacting as soon as possible.";

           var userurl="http://sms.smsall.in/http-api.php?username=faheemkhan&password=faheem@123&senderid=INQURY&route=1&number="+mobile+"&message="+usermsg+"";
           
            window.open(userurl,"theframes");
            
             window.open(url,"theframe");
             $('#contact_modal').trigger('reset');
             $('.alert').show().addClass('alert-success').removeClass('alert-danger').text("Thanks, we will get back to you soon");
             $('.alert').fadeOut(4000);
                    return false;
                }
                else{
                    alert('message no success');
                    return false;
                }
                
            })
            .fail(function(data){
                return false;
            
            })

    }
    });
/*$("#contact_slider").validate({
    rules: {
        name_s: {
            required: true
        },
        email_s: {
            required: true,
            email: true
        },
        phone_s: {
            required: true,
            minlength: 10,
            maxlength: 10,
            number: true
        },
        select_s:{
            required:true
        },
        message_s:{
            required:true
        }
        
    },
    messages: {
        name_s: {
            required: "Please enter Your Name"
        },
        email_s: {
            required: "Please enter a Valid Email",
            email: "Please enter a Valid Email"
        },
        phone_s: {
            required: "Please enter a Valid Mobile Number",
            minlength: "Mobile Number Must be 10 Digit Only",
            maxlength: "Mobile Number Must be 10 Digit Only",
            number: "Kindly Enter Numbers Only."
        },
        select_s:{
            required:"please Select Course"
        },
        message_s:{
            required:"Please text message"
        },
        
    },
    errorPlacement: function(label, element) {
        label.addClass('mt-2 text-danger');
        if (element.parent().hasClass('input-group')) {
            label.insertAfter(element.parent());
        } 
        else if (element.is('select')) {
                label.insertAfter(element);
            }  else {
                label.insertAfter(element);
            }
    },
    highlight: function(element, errorClass) {
        $(element).parent().addClass('has-danger')
        $(element).addClass('form-control-danger')
    },
    unhighlight: function(element) {
        $(element).parent().removeClass('has-danger')
        $(element).addClass('form-control-danger')
    },
    success: function(label, element) {
        $(element).removeClass('text-danger');
    },
    submitHandler: function() {

        $.ajax({
                url: 'gmail.php', 
                type: 'POST',
                dataType: 'json', 
                data: $("#contact_slider").serialize()
            }) // serialize form data

            .done(function(data) {
                if(data.success==true){
                     var name=$('#name_i').val();
                     var email=$('#email_i').val();
                   var mobile=$('#phone_i').val();
                   var subject=$('#course_i').val();
                   var msg=$('#message_i').val();
                    var message="Dear ADMISSION PROVIDER,you have received a new enquiry from  www.admissionproviders.com. Details-Name-"+name+",mobile-"+mobile+",Email-"+email+",subject-"+subject+",message-"+msg+" ";

            var url="http://sms.smsall.in/http-api.php?username=faheemkhan&password=faheem@123&senderid=INQURY&route=1&number=9135800500&message="+message+"";
           var usermsg="Dear "+name+"Thankyou For Contacting Us. We are contacting as soon as possible.";

           var userurl="http://sms.smsall.in/http-api.php?username=faheemkhan&password=faheem@123&senderid=INQURY&route=1&number="+mobile+"&message="+usermsg+"";
            
            window.open(userurl,"theframes");
            
             window.open(url,"theframe");
             $('#contact_index').trigger('reset');
             $('.alert').show().addClass('alert-success').removeClass('alert-danger').text("Thanks, we will get back to you soon");
             $('.alert').fadeOut(4000);

                    return false;
                }
                else{
                    alert('message no success');
                    return false;
                }
                
            })
            .fail(function(data){
                return false;
            
            })

    }
});*/
$("#contact_index").validate({
    rules: {
        name_i: {
            required: true
        },
        email_i: {
            required: true,
            email: true
        },
        phone_i: {
            required: true,
            minlength: 10,
            maxlength: 10,
            number: true
        },
        course_i:{
            required:true
        },
        state_i:{
            required:true
        },
         country_i:{
            required:true
        },
         message_i:{
            required:true
        }

        
    },
    messages: {
        name_i: {
            required: "Please enter Your Name"
        },
        email_i: {
            required: "Please enter a Valid Email",
            email: "Please enter a Valid Email"
        },
        phone_i: {
            required: "Please enter a Valid Mobile Number",
            minlength: "Mobile Number Must be 10 Digit Only",
            maxlength: "Mobile Number Must be 10 Digit Only",
            number: "Kindly Enter Numbers Only."
        },
        course_i:{
            required:"please text Course"
        },
        state_i:{
            required:"Please text state"
        },
        country_i:{
            required:"Please text Country"
        },
        message_i:{
            required:"Please text message"
        }
        
    },
    errorPlacement: function(label, element) {
        label.addClass('mt-2 text-danger');
        if (element.parent().hasClass('input-group')) {
            label.insertAfter(element.parent());
        } 
        else if (element.is('select')) {
                label.insertAfter(element);
            }  else {
                label.insertAfter(element);
            }
    },
    highlight: function(element, errorClass) {
        $(element).parent().addClass('has-danger')
        $(element).addClass('form-control-danger')
    },
    unhighlight: function(element) {
        $(element).parent().removeClass('has-danger')
        $(element).addClass('form-control-danger')
    },
    success: function(label, element) {
        $(element).removeClass('text-danger');
    },
    submitHandler: function() {

        $.ajax({
                url: 'ajax/insert-index.php', 
                type: 'POST',
                dataType: 'json', 
                data: $("#contact_index").serialize()
            }) 

            .done(function(data) {
                
                if(data.success==true){
                    var name=$('#name_i').val();
                     var email=$('#email_i').val();
                   var mobile=$('#phone_i').val();
                   var subject=$('#course_i').val();
                   var msg=$('#message_i').val();
                    var message="Dear ADMISSION PROVIDER,you have received a new enquiry from  www.admissionproviders.com. Details-Name-"+name+",mobile-"+mobile+",Email-"+email+",subject-"+subject+",message-"+msg+" ";

            var url="http://sms.smsall.in/http-api.php?username=faheemkhan&password=faheem@123&senderid=INQURY&route=1&number=9135800500&message="+message+"";
           var usermsg="Dear "+name+"Thankyou For Contacting Us. We are contacting as soon as possible.";

           var userurl="http://sms.smsall.in/http-api.php?username=faheemkhan&password=faheem@123&senderid=INQURY&route=1&number="+mobile+"&message="+usermsg+"";
            
            window.open(userurl,"theframes");
            
             window.open(url,"theframe");
                 
             $('#contact_index').trigger('reset');
             $('.alert').show().addClass('alert-success').removeClass('alert-danger').text("Thanks, we will get back to you soon");
             $('.alert').fadeOut(4000);
                    return false;
                }
                else{
                    alert('message no success');
                    return false;
                }
                
            })
            .fail(function(data){
                return false;
            
            })

    }
});
$("#contact_mobile").validate({
    rules: {
        name_mo: {
            required: true
        },
        email_mo: {
            required: true,
            email: true
        },
        number_mo: {
            required: true,
            minlength: 10,
            maxlength: 10,
            number: true
        },
        course_mo:{
            required:true
        },
        state_mo:{
            required:true
        },
         country_mo:{
            required:true
        },
         message_mo:{
            required:true
        }

        
    },
    messages: {
        name_mo: {
            required: "Please enter Your Name"
        },
        email_mo: {
            required: "Please enter a Valid Email",
            email: "Please enter a Valid Email"
        },
        number_mo: {
            required: "Please enter a Valid Mobile Number",
            minlength: "Mobile Number Must be 10 Digit Only",
            maxlength: "Mobile Number Must be 10 Digit Only",
            number: "Kindly Enter Numbers Only."
        },
        course_mo:{
            required:"please text Course"
        },
        state_mo:{
            required:"Please text state"
        },
        country_mo:{
            required:"Please text Country"
        },
        message_mo:{
            required:"Please text message"
        }
        
    },
    errorPlacement: function(label, element) {
        label.addClass('mt-2 text-danger');
        if (element.parent().hasClass('input-group')) {
            label.insertAfter(element.parent());
        } 
        else if (element.is('select')) {
                label.insertAfter(element);
            }  else {
                label.insertAfter(element);
            }
    },
    highlight: function(element, errorClass) {
        $(element).parent().addClass('has-danger')
        $(element).addClass('form-control-danger')
    },
    unhighlight: function(element) {
        $(element).parent().removeClass('has-danger')
        $(element).addClass('form-control-danger')
    },
    success: function(label, element) {
        $(element).removeClass('text-danger');
    },
    submitHandler: function() {

        $.ajax({
                url: 'ajax/index-mobile.php', 
                type: 'POST',
                dataType: 'json', 
                data: $("#contact_mobile").serialize()
            }) 
            .done(function(data) {
                
                if(data.success==true){
                    /*alert('Your enquiry has been successfully submitted. We will Contact You Soon');*/
                     var name=$('#name_mo').val();
                     var email=$('#email_mo').val();
                   var mobile=$('#number_mo').val();
                   var subject=$('#course_mo').val();
                   var msg=$('#message_mo').val();
                    var message="Dear ADMISSION PROVIDER,you have received a new enquiry from  www.admissionproviders.com. Details-Name-"+name+",mobile-"+mobile+",Email-"+email+",subject-"+subject+",message-"+msg+" ";

            var url="http://sms.smsall.in/http-api.php?username=faheemkhan&password=faheem@123&senderid=INQURY&route=1&number=9135800500&message="+message+"";
           var usermsg="Dear "+name+"Thankyou For Contacting Us. We are contacting as soon as possible.";

           var userurl="http://sms.smsall.in/http-api.php?username=faheemkhan&password=faheem@123&senderid=INQURY&route=1&number="+mobile+"&message="+usermsg+"";
            
            window.open(userurl,"theframes");
            
             window.open(url,"theframe");
             $('#contact_modal').trigger('reset');
             $('.alert').show().addClass('alert-success').removeClass('alert-danger').text("Thanks, we will get back to you soon");
             $('.alert').fadeOut(4000);
                    return false;
                }
                else{
                    alert('message no success');
                    return false;
                }
                
            })
            .fail(function(data){
                return false;
            
            })

    }
});
$("#contact_c").validate({
    rules: {
        name_c: {
            required: true
        },
        email_c: {
            required: true,
            email: true
        },
        phone_c: {
            required: true,
            minlength: 10,
            maxlength: 10,
            number: true
        },
        select_c:{
            required:true
        },
        message_c:{
            required:true
        },
        
    },
    messages: {
        name_c: {
            required: "Please enter Your Name"
        },
        email_c: {
            required: "Please enter a Valid Email",
            email: "Please enter a Valid Email"
        },
        phone_c: {
            required: "Please enter a Valid Mobile Number",
            minlength: "Mobile Number Must be 10 Digit Only",
            maxlength: "Mobile Number Must be 10 Digit Only",
            number: "Kindly Enter Numbers Only."
        },
        select_c:{
            required:"please Select Course"
        },
        message_c:{
            required:"Please text message"
        }
        
    },
    errorPlacement: function(label, element) {
        label.addClass('mt-2 text-danger');
        if (element.parent().hasClass('input-group')) {
            label.insertAfter(element.parent());
        } 
        else if (element.is('select')) {
                label.insertAfter(element);
            }  else {
                label.insertAfter(element);
            }
    },
    highlight: function(element, errorClass) {
        $(element).parent().addClass('has-danger')
        $(element).addClass('form-control-danger')
    },
    unhighlight: function(element) {
        $(element).parent().removeClass('has-danger')
        $(element).addClass('form-control-danger')
    },
    success: function(label, element) {
        $(element).removeClass('text-danger');
    },
    submitHandler: function() {

        $.ajax({
                url: 'ajax/inset-contact.php', 
                type: 'POST',
                dataType: 'json', 
                data: $("#contact_c").serialize()
            })

            .done(function(data) {
                if(data.success==true){
                    /*alert('Your enquiry has been successfully submitted. We will Contact You Soon');*/
                    var name=$('#name_c').val();
                    var email=$('#email_c').val();
                   var mobile=$('#phone_c').val();
                   var subject=$('#select_c').val();
                   var msg=$('#message_c').val();
                    var message="Dear ADMISSION PROVIDER,you have received a new enquiry from  www.admissionproviders.com. Details-Name-"+name+",mobile-"+mobile+",Email-"+email+",subject-"+subject+",message-"+msg+" ";

            var url="http://sms.smsall.in/http-api.php?username=faheemkhan&password=faheem@123&senderid=INQURY&route=1&number=9135800500&message="+message+"";
           var usermsg="Dear "+name+"Thankyou For Contacting Us. We are contacting as soon as possible.";

           var userurl="http://sms.smsall.in/http-api.php?username=faheemkhan&password=faheem@123&senderid=INQURY&route=1&number="+mobile+"&message="+usermsg+"";
            
            window.open(userurl,"theframes");
            
             window.open(url,"theframe");
             $('#contact_c').trigger('reset');
             $('.alert').show().addClass('alert-success').removeClass('alert-danger').text("Thanks, we will get back to you soon");
             $('.alert').fadeOut(4000);
                    return false;
                }
                else{
                    alert('message no success');
                    return false;
                }
                
            })
            .fail(function(data){
                return false;
            
            })

    }
});
$("#contact_all").validate({
    rules: {
        name_all: {
            required: true
        },
        email_all: {
            required: true,
            email: true
        },
        number_all: {
            required: true,
            minlength: 10,
            maxlength: 10,
            number: true
        },
        select_all:{
            required:true
        },
        message_all:{
            required:true
        },
        
    },
    messages: {
        name_all: {
            required: "Please enter Your Name"
        },
        email_all: {
            required: "Please enter a Valid Email",
            email: "Please enter a Valid Email"
        },
        number_all: {
            required: "Please enter a Valid Mobile Number",
            minlength: "Mobile Number Must be 10 Digit Only",
            maxlength: "Mobile Number Must be 10 Digit Only",
            number: "Kindly Enter Numbers Only."
        },
        select_all:{
            required:"please Select Course"
        },
        message_all:{
            required:"Please text message"
        }
        
    },
    errorPlacement: function(label, element) {
        label.addClass('mt-2 text-danger');
        if (element.parent().hasClass('input-group')) {
            label.insertAfter(element.parent());
        } 
        else if (element.is('select')) {
                label.insertAfter(element);
            }  else {
                label.insertAfter(element);
            }
    },
    highlight: function(element, errorClass) {
        $(element).parent().addClass('has-danger')
        $(element).addClass('form-control-danger')
    },
    unhighlight: function(element) {
        $(element).parent().removeClass('has-danger')
        $(element).addClass('form-control-danger')
    },
    success: function(label, element) {
        $(element).removeClass('text-danger');
    },
    submitHandler: function() {

        $.ajax({
                url: 'ajax/all-page-contact.php', 
                type: 'POST',
                dataType: 'json', 
                data: $("#contact_all").serialize()
            })

            .done(function(data) {
                if(data.success==true){
                    
                    var name=$('#name_all').val();
                    var email=$('#email_all').val();
                   var mobile=$('#number_all').val();
                   var subject=$('#select_all').val();
                   var msg=$('#message_all').val();
                    var message="Dear ADMISSION PROVIDER,you have received a new enquiry from  www.admissionproviders.com. Details-Name-"+name+",mobile-"+mobile+",Email-"+email+",subject-"+subject+",message-"+msg+" ";

            var url="http://sms.smsall.in/http-api.php?username=faheemkhan&password=faheem@123&senderid=INQURY&route=1&number=9135800500&message="+message+"";
           var usermsg="Dear "+name+" Thankyou For Contacting Us. We are contacting as soon as possible.";

           var userurl="http://sms.smsall.in/http-api.php?username=faheemkhan&password=faheem@123&senderid=INQURY&route=1&number="+mobile+"&message="+usermsg+"";
           
            window.open(userurl,"theframes");
            
             window.open(url,"theframe");
             $('#contact_all').trigger('reset');
             $('.alert').show().addClass('alert-success').removeClass('alert-danger').text("Thanks, we will get back to you soon");
             $('.alert').fadeOut(4000);
                    return false;
                }
                else{
                    alert('message no success');
                    return false;
                }
                
            })
            .fail(function(data){
                return false;
            
            })

    }
});
$("#contact_registration").validate({
   
    rules: {
        name_reg: {
            required: true
        },
         email_reg: {
            required: true,
            email: true
        },
        number_reg: {
            required: true,
            minlength: 10,
            maxlength: 10,
            number: true
        },
        select_reg:{
            required:true
        },
        message_reg:{
            required:true
        },
        
    },
    messages: {
        name_reg: {
            required: "Please enter Your Name"
        },
        email_reg: {
            required: "Please enter a Valid Email",
            email: "Please enter a Valid Email"
        },
        number_reg: {
            required: "Please enter a Valid Mobile Number",
            minlength: "Mobile Number Must be 10 Digit Only",
            maxlength: "Mobile Number Must be 10 Digit Only",
            number: "Kindly Enter Numbers Only."
        },
        select_reg:{
            required:"please Select Course"
        },
        message_reg:{
            required:"Please text message"
        }
        
    },
    errorPlacement: function(label, element) {
        label.addClass('mt-2 text-danger');
        if (element.parent().hasClass('input-group')) {
            label.insertAfter(element.parent());
        } 
        else if (element.is('select')) {
                label.insertAfter(element);
            }  else {
                label.insertAfter(element);
            }
    },
    highlight: function(element, errorClass) {
        $(element).parent().addClass('has-danger')
        $(element).addClass('form-control-danger')
    },
    unhighlight: function(element) {
        $(element).parent().removeClass('has-danger')
        $(element).addClass('form-control-danger')
    },
    success: function(label, element) {
        $(element).removeClass('text-danger');
    },
    submitHandler: function() {

        $.ajax({
                url: 'ajax/insert-registration.php', 
                type: 'POST',
                dataType: 'json', 
                data: $("#contact_registration").serialize()
            }) // serialize form data

            .done(function(data) {
                if(data.success==true){
                    
                    var name=$('#name_reg').val();
                    var email=$('#email_reg').val();
                   var mobile=$('#number_reg').val();
                   var subject=$('#select_reg').val();
                   var msg=$('#message_reg').val();
                    var message="Dear ADMISSION PROVIDER,you have received a new enquiry from  www.admissionproviders.com. Details-Name-"+name+",mobile-"+mobile+",Email-"+email+",subject-"+subject+",message-"+msg+" ";

            var url="http://sms.smsall.in/http-api.php?username=faheemkhan&password=faheem@123&senderid=INQURY&route=1&number=9135800500&message="+message+"";
           var usermsg="Dear "+name+"Thankyou For Contacting Us. We are contacting as soon as possible.";

           var userurl="http://sms.smsall.in/http-api.php?username=faheemkhan&password=faheem@123&senderid=INQURY&route=1&number="+mobile+"&message="+usermsg+"";
          
            window.open(userurl,"theframes");
           
             window.open(url,"theframe");
             $('#contact_registration').trigger('reset');
             $('.alert').show().addClass('alert-success').removeClass('alert-danger').text("Thanks, we will get back to you soon");
             $('.alert').fadeOut(4000);
              
                    return false;
                }
                else{
                    alert('message no success');
                    return false;
                }
                
            })
            .fail(function(data){
                return false;
            
            })

    }
});
});
    