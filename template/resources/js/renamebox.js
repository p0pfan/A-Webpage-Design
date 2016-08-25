 $(document).ready(function () {
    
    $('#listTemplate').on('click','li>span[id$="editBtn"]',function(){
    	var buttonId = $(this).attr("id");
    	var templateId = buttonId.split('-')[0];
    	var editWindow = '<div class="input-group" id="' + templateId + '"><input type="text" class ="form-control" name="Item" value="'+templateId+'"><span class="input-group-addon" >.vm</span><span class="input-group-addon btn btn-success" role="button">&#10004;</span><span class="input-group-addon btn btn-danger">&#10008;</span></div>';
        $($("#listTemplate").children('li')).each(function(){
            if($.trim($(this).text()) == templateId+".vm"){ 
                $(this).empty();
                $(this).replaceWith(editWindow);
            }

        })
    });	
    
    $('#listTemplate').on('click','div > span.input-group-addon.btn.btn-success',function(){
    	
    	var divId = $(this).parent().attr('id');
    	var valueChanged = $('#' + divId + ' > input').val();
		var category=$('#category > li.active').text();
		if(valueChanged==''){
			var text = "No name was input";
			var type = "warning";
			delayToasts(type,text);
			return;
		}
    	if(valueChanged == divId){
    		
    		var tb = getTemplateBar(divId);
    		$('#'+divId).empty();
			$('#'+divId).replaceWith(tb);
			
			
    	}else{
    		$.ajax({
    			url : basePath
    			+ '/templates/renamefile',
    			type : 'POST',
    			dataType : 'json',
    			data : {
    				category : category,
    				templateName : divId,
    				newTemplateName : valueChanged,
    			},
    			success : function(data){
    				if(data.status == 'success'){
    					var tb = getTemplateBar(valueChanged);
    		    		$('#'+divId).empty();
    					$('#'+divId).replaceWith(tb);valueChanged
    					if($('#templatefileNav li:first').text() == category &&
    							$('#templatefileNav li:nth-child(2)').text() == divId + ".vm"){
    						$('#templatefileNav li:nth-child(2)').text(valueChanged + ".vm");
    					}
    					
    					var text = divId + '.vm' +' was renamed to '+ valueChanged + '.vm' + ' successfully';
    					var type = "success";
    					delayToasts(type,text);
    				}else{
    					var text = data.message;
    					var type = "error";
    					delayToasts(type,text);
    				}
    			}
    		});
    	}
    	
    	
    });
    
    $('#listTemplate').on('click','div > span.input-group-addon.btn.btn-danger',function(){
    	var divId = $(this).parent().attr('id');
    	var valueChanged = $('#' + divId + ' > input').val();
    	
    	var tb = getTemplateBar(divId);
    	$('#'+divId).empty();
    	$('#'+divId).replaceWith(tb);
    	
    });
    
    $('#listTemplate').on('click','li>span[id$="delBtn"]',function(){
    	var text = "Delete is not surpported!";
		var type = "error";
		delayToasts(type,text);
   
   });

    

})

function getTemplateBar(tid){
 	var deleteButtonPre = "<span class=\"badge\" role=\"button\" id=\"";
	var deleteButtonPost ="-delBtn\" data-toggle=\"tooltip\" title=\"delete\" data-placement=\"right\"><span class=\"glyphicon glyphicon-remove\" ></span></span>";
	var editButtonPre = '<span class=\"badge\" role=\"button\" id=\"'
	var editButtonPost = '-editBtn\" data-toggle=\"tooltip\" title=\"rename\"><span class=\"glyphicon glyphicon-pencil\" ></span></span>';
	
	var templateBar = '<li class=\"list-group-item\">' + deleteButtonPre + tid + 
	deleteButtonPost + editButtonPre + tid + editButtonPost + '<a role="button" id="' + tid +
	'">'+ tid+'.vm'+"</a></li>"
	return templateBar;

	
 }
 


