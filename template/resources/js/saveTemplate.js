$(document).ready(function(){
	
	$('#saveBtn').click(function(){
		saveDialog("Do you want to save?");
//		var content=CKEDITOR.instances.content.getData();
//		content = encodeURIComponent(content).toString();
//		var category=$('#templatefileNav li:first').text();
//		var templateName=$('#templatefileNav li:nth-child(2)').text();
//		if(category=="..." || templateName=="..."){
//			alert("Please chose an exsiting template or add a new template");
//			return;
//		}
//		if (!confirm("Are you sure to update the template"))
//			  return;
//		
//		console.log(content);
//		$.ajax({
//          url : basePath+'/templates/savevm',
//          cache:false,
//          type: "POST",
//         data : {
//        	 category:category,
//        	 content: content,
//        	 templateName: templateName,
//        	 isOverride: true,
//          },
//          success:function(res) 
//          {
//        	  var resJson = jQuery.parseJSON(res);
//        	  console.log(res);
//        	  console.log(resJson);
//        	  console.log(resJson.msg);
//              if(resJson.type=='alert') {
//            	  alert(resJson.msg);
//              } else if(resJson.type=='confirm') {
//            	  confirm(resJson.msg);
//              }
//          },
//	});
})

})


function submitForm(isOverride){
	var content=CKEDITOR.instances.content.getData();
	content = encodeURIComponent(content).toString();
	var category=$('#templatefileNav li:first').text();
	var templateName=$('#templatefileNav li:nth-child(2)').text();
		console.log(content);
      $.ajax({
          url : basePath+"/templates/savevm",
          cache:false,
          type: "POST",
         data : { 
        	 category:category,
        	 content: content,
        	 templateName: templateName,
        	 isOverride: isOverride,
          },
          success:function(res) 
          {
        	  var resJson = jQuery.parseJSON(res.message);
        	  console.log(res);
        	  console.log(resJson);
        	  console.log(resJson.msg);
        	  if(res.status=="success"){
        		   
        		   if(resJson.type=='alert') {
        			   var text = resJson.msg;
        			   var type = "success";
        			   delayToasts(type,text);
        		
        			   
        		   } else if(resJson.type=='confirm') {
        			   fnConfirmDialog(resJson.msg);
        		   }
        	  }else{
        		  
        		  var text = resJson.msg;
        		  var type = "error";
        		  delayToasts(type,text);
	      			
        	  }
        	 
          },
      });
  }
function saveDialog(res) {
	 toastr.options.preventDuplicates = true;
	 var text = res+'<div><button type="button" class="btn btn-primary" id="confirm">Yes</button><button type="button" class="btn btn-default" id="close">No</button></div>';
	 var type = "warning";
	 delayToasts(type,text);
	 $('#confirm').click(function(){
		 submitForm(false);
	 });
	 $('#close').click(function(){
		 return;
	 });
}

function fnConfirmDialog(res) {
	 toastr.options.preventDuplicates = true;
	 var text = res+'<div><button type="button" class="btn btn-primary" id="save">Yes</button><button type="button" class="btn btn-default" id="cancel">No</button></div>';
	 var type = "warning";
	 delayToasts(type,text);
	 $('#save').click(function(){
		 submitForm(true);
	 });
	 $('#cancel').click(function(){
		 return;
	 });
}