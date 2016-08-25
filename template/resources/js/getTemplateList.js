$(document).ready(function() {
	$('ul.nav > li').click(function(e){
		e.preventDefault();
		var selectedId = $(this).attr("id");
		if (selectedId != "editCatalog") {
			$('ul.nav > li').removeClass('active');
			$(this).addClass('active');
		}
		$('#add_templatebox').removeAttr("disabled");
		$('#mainlist > div > div > button').removeAttr("disabled");
		$('#add_templatebox').attr("placeholder","Input an template name");
		
		if ($('#templatefileNav li:first').text() == '...'||
				$('#templatefileNav li:nth-child(2)').text() == '...') {
			$('#saveBtn').attr("disabled","disabled");
		}
		var category;
		if (selectedId != "editCatalog"
				&& selectedId != "createTemplate") {
			category = $(this).children('a').text()
			$.ajax({
				url : basePath
						+ '/templates/showTemplates/'
						+ category,
				type : 'GET',
				dataType : 'json',
				data : {},
				success : function(data) {
					if (data.status == "success") {
						addTemplate(data.list);
					} else {
						console.log(data.message);
						var text = data.message;
						var type = "error";
						delayToasts(type,text);
					}
				}
			});
		}
	});
})

function addTemplate(templateList) {
	var templateListLocale = document.getElementById("listTemplate");

	$("ul#listTemplate").empty();
	for (var i = 0; i < templateList.length; i++) {
		console.log(templateList[i]);
		var templateid = templateList[i].split('.')[0];

		var templateName = '<a role="button" id=' + templateid + '>'
				+ templateList[i] + '</a>';
		var deleteButton = "<span class=\"badge\" role=\"button\" id=\""
				+ templateid
				+ "-"
				+ "delBtn\" data-toggle=\"tooltip\" title=\"delete\" data-placement=\"right\"><span class=\"glyphicon glyphicon-remove\" ></span></span>";
		var editButton = "<span class=\"badge\" role=\"button\" id=\""
				+ templateid
				+ "-"
				+ "editBtn\" data-toggle=\"tooltip\" title=\"rename\"><span class=\"glyphicon glyphicon-pencil\" ></span></span>";
		var template = '<li class="list-group-item ">' + deleteButton + editButton
				+ templateName + '</li>';
		$("ul#listTemplate").append(template);
		
	}

	

}
