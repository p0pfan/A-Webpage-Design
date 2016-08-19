$(document).ready(function(){
	$(".file_add_button").click(function(event){
		var template=$("#add_templatebox").val();
		var deleteButton = "<span class=\"badge\" role=\"button\" id=\""+template+"-"+"delBtn\"><span class=\"glyphicon glyphicon-remove\"></span></span>";
		var editButton = "<span class=\"badge\" role=\"button\" id=\""+template+"-"+"editBtn\"><span class=\"glyphicon glyphicon-pencil\"></span></span>";
		var twoButtons = deleteButton + editButton;
		
		var existsName=new Array();

		 $(".list-group-item").each(function(){

		 	existsName.push($(this).children('a').text());
		 });
		 if($.inArray(template, existsName)!=-1){
			alert(template+" is exist!");
		}
		else{
			if(template!="" && $.trim(template)!=""){
			$("ul#listTemplate").append(" <li class=\"list-group-item\">" + twoButtons +  '<a href="#" id="'+template+"\">"+template+ "</a></li>");
			}
		}
		
		$("#add_templatebox").val('');
		
		// $("#"+template+"-editBtn").click(function(){
		// 	$("#listTemplate").trigger("renameEvent",[template]);
		// });
	});

	$('ul.nav > li').click(function (e) {
		e.preventDefault();
		$('ul.nav > li').removeClass('active');
		$(this).addClass('active');
		var selectedId=$(this).attr("id")
		if(selectedId!="editCatalog" && selectedId!="createTemplate"){
			$('#templatefileNav li:first').text($(this).text());

		}
	});

	$('#addCatalogBtn').click(function(e){
		e.preventDefault();
		var newCatalogName=$("#catalog-name").val();
		var existsName=new Array();
		$('ul#catalogs > li').each(function() {
			if($(this).children().length>1)
				return false;
			else{
				existsName.push($(this).children().text());
			}
		});
		if($.inArray($.trim(newCatalogName), existsName)!=-1){
			alert(newCatalogName+" is exist!");
		}else{
			if(newCatalogName!="" && $.trim(newCatalogName)!=""){
				$(	'<li><a href="#" id="'+newCatalogName+'">'+newCatalogName+'</a></li>'
				).insertBefore('#editCatalog');
			}
		}
	});
	
	$('#deleteCatalog').on('show.bs.modal', function (e) {
		var existsName=new Array();
		$('ul#catalogs > li').each(function() {
			if($(this).children().length>1)
				return false;
			else{
				existsName.push($(this).children().text());
			}
		});
			
		var tag1='<input type="checkbox" />';
		var tag2="<label></label><br>";
		$.each(existsName, function(index, val) {
			var new1=$(tag1).attr({"id": val});
			new1.appendTo('#existsCatalog');
			var new2=$(tag2).attr('for', val);
			new2.text(val);
			new2.appendTo('#existsCatalog');		
		}); 
	});

	$('#deleteCatalog').on('hidden.bs.modal', function (e) {
		$('#existsCatalog').empty();
	});


	$("#listTemplate").on("click","li > a",function(){
		alert(event.target.id);

	});	


	// })
	$("#listTemplate").on("renameEvent",function(e,template){
		alert(template);
		
		var editWindow='<div class="input-group"><input type="text" class ="form-control" id="add_templatebox" name="Item" value='+template+'><span class="input-group-addon">.vm</span><div class="input-group-btn"><button  type="submit" class="btn btn-primary file_add_button">OK</button></div>';
		
			$($("#listTemplate").children('li')).each(function(){
				if($.trim($(this).text())==template){
					$(this).empty();
					$(this).replaceWith(editWindow);
				}

			})
		
		
        //$('li>[id|="'+template+'"]').replace(editWindow);

        // $(editWindow).replaceAll('li>[id|="'+template+'"]');

	});	

	$('#listTemplate').on("click",'li > span[id$="delBtn"]',function(){
		var text = "delete is not surpported!";
		var type = "error";
		delayToasts(type,text);


	});

	$('#listTemplate').on("click",'li > span[id$="editBtn"]',function(){
		var text = "Do you want to rename?";
		var button ='<br /><br /><button type="button" class="btn btn-warning clear">Yes</button>'
		toastr.options.timeOut = 0;
		// it should add a if to check;
		toastr.options.preventDuplicates = true;
		delayToasts("warning",text+button);

	});


	toastr.options.positionClass = 'toast-top-center';
    toastr.options.extendedTimeOut = 0; //1000;
    toastr.options.preventDuplicates= false;
    toastr.options.fadeOut = 250;
    toastr.options.showEasing = "swing";
   

 

})
function delayToasts(type,msg) {
         toastr[type](msg);
}



