$(document).ready(function(){
	$(".file_add_button").click(function(event){
		
		var deleteButton = "<span class=\"badge\"><span class=\"glyphicon glyphicon-remove\"></span></span>";
		var editButton = "<span class=\"badge\"><span class=\"glyphicon glyphicon-pencil\"></span></span>";
		var twoButtons = deleteButton + editButton;
		var template=$("#add_templatebox").val();
		var existsName=new Array();

		 $(".list-group-item").each(function(){

		 	existsName.push($(this).children('a').text());
		 });
		 if($.inArray(template, existsName)!=-1){
			alert(template+" is exist!");
		}
		else{
			if(template!="" && $.trim(template)!=""){
			$("ul#listTemplate").append(" <li class=\"list-group-item\">" + twoButtons +  "<a href=\"#\" title=\"\">"+template+ "</a></li>");
			}
		}
		
		$("#add_templatebox").val('');
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
				$(	"<li><a href=\""+"#"+">"+newCatalogName+"</a></li>"
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




});



