$(document).ready(function(){
	$("#listTemplate").on("click","li.list-group-item > a", function(event) {
		var templateName = event.target.id+'.vm';
		var category=$('#category > li.active').text();
		$('#templatefileNav li:first').text(category);
		$('#templatefileNav li:nth-child(2)').text(templateName);
		$('#saveBtn').removeAttr("disabled");
		$.ajax({
				url: basePath+'/templates/showContent',
				type: 'POST',
				dataType: 'json',
				data: {
					templateName:templateName,
					category:category
					},
				success:function(data){
					if(data.status=="success"){					
						CKEDITOR.instances.content.setData(data.content);
//						$('#templatefileNav > button').attr("disabled","");
					}else{
						CKEDITOR.instances.content.setData("");
//						$('#templatefileNav > button').attr("disabled","disabled");
						$('#templatefileNav li:nth-child(2)').text(templateName);
						var text = data.message;
						var type = "error";
						delayToasts(type,text);
					}
				}
			});
    }); 
	
	
})