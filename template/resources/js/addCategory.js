$(document).ready(
		function() {
			$('#addCatalogBtn').click(
					function(e) {
						var newCategory = $("#catalog-name").val();
						var existsName = new Array();
						$('ul#catalogs > li').each(function() {
							if ($(this).children().length > 1)
								return false;
							else {
								existsName.push($(this).children().text());
							}
						});
						
						var newCatalogCode = "<li><a href=>"
												+ newCategory + "</a></li>";

										$(newCatalogCode).insertBefore(
												'#editCatalog');
						// $.ajax({
						// 	url : basePath + '/templates/addCategory',
						// 	type : "POST",
						// 	data : {
						// 		newCategory : newCategory,
						// 	},
						// 	success : function(data) {
						// 		if (data.status == "success") {
						// 			if (newCategory != ""
						// 					&& $.trim(newCategory) != "") {
						// 				var newCatalogCode = "<li><a href=>"
						// 						+ newCategory + "</a></li>";

						// 				$(newCatalogCode).insertBefore(
						// 						'#editCatalog');
						// 			}
						// 			$("#catalog-name").val("");
									
						// 		}else{
						// 			var text = data.status+ '<br>' +data.message;
						// 			var type = "error";
						// 			delayToasts(type,text);
									
						// 		}
						// 	}
						// })

					});
		})