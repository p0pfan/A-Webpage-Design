$(document).ready(function(){

    toastr.options.positionClass = 'toast-top-center';
    toastr.options.extendedTimeOut = 0; //1000;
    toastr.options.preventDuplicates= false;
    toastr.options.fadeOut = 250;
    toastr.options.showEasing = "swing";
    $('#tryMe').click(function () {
        
        var type = "warning";
        var msg = "demo demo"
        
        delayToasts(type,msg);

    });

    

    function delayToasts(type,msg) {
         toastr[type](msg);
       
    }
})
