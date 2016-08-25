$(document).ready(function(){
	$(".file_add_button").click(function(event){
		
		var template=$("#add_templatebox").val();

		var deleteButton = "<span class=\"badge\" role=\"button\" id=\""+template+"-"+"delBtn\" data-toggle=\"tooltip\" title=\"delete\" data-placement=\"right\"><span class=\"glyphicon glyphicon-remove\" ></span></span>";
		var editButton = "<span class=\"badge\" role=\"button\" id=\""+template+"-"+"editBtn\" data-toggle=\"tooltip\" title=\"rename\"><span class=\"glyphicon glyphicon-pencil\" ></span></span>";
		var twoButtons = deleteButton + editButton;
		
		
		var category=$('#category > li.active').text();
		if(template==''){
			var text = "No name was input";
			var type = "warning";
			delayToasts(type,text);
			return;
		}
		
		$("ul#listTemplate").append(" <li class=\"list-group-item\">" + twoButtons + '<a role="button" id="'+
	 	        				  template+'">'+ template+'.vm'+"</a></li>");
	    $("#add_templatebox").val('');
	        		   
		// $.ajax({
	 //          url : basePath+'/templates/newTemplate',
	 //          cache:false,
	 //          type: "POST",
	 //          data : {
	 //        	 category:category,
	 //        	 templateName: template,
	 //        	 content:"",
	 //        	 isOverride: true,
	 //          },
	 //          success:function(res) 
	 //          {
	 //        	  var resJson = jQuery.parseJSON(res.message);
	 //        	  console.log(res);
	 //        	  console.log(resJson);
	 //        	  console.log(resJson.msg);
	 //        	  if(res.status=="success"){
	        		   
	 //        		   if(resJson.type=='alert') {
	 //        			   var text = resJson.msg;
	 //        			   var type = "success";
	 //        			   delayToasts(type,text);
	 //        			   $("ul#listTemplate").append(" <li class=\"list-group-item\">" + twoButtons + '<a role="button" id="'+
	 // 	        				  template+'">'+ template+'.vm'+"</a></li>");
	 //        			   $("#add_templatebox").val('');
	 //        		   }

	 //        	  }else{	  
	 //        		  var text = resJson.msg;
	 //        		  var type = "error";
	 //        		  delayToasts(type,text);
		      			
	 //        	  }
	 //          },
	          
		// });
	});
})



