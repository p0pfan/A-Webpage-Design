CKEDITOR.plugins.add('imageupload', {
	icons : 'imageupload',
	init : function(editor) {
		editor.addCommand('imageupload', {
			exec : function(editor) {
				var fileSelector = $('<input type="file" multiple />');
				fileSelector.click();
				fileSelector.on("change", function(evt) {
					var hasValid = false;
					var html = '';
					var error = '';
					var j = 0;
					// editor.showMask();
					$.each(evt.target.files,
							function(i, file) {
								var valid = file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png'
										|| file.type === 'image/gif';
								if (valid) {
									hasValid = true;
									console.log(file.type + ' ' + valid);
									var formdata = new FormData();
									formdata.append('image', file);
									
									$.ajax({
										
										url : editor.config.filebrowserImageUploadUrl,
										cache:false,
										type : "POST",
										data : formdata,
										processData : false,
										contentType : false,
										success : function(resStr) {
											var res = JSON.parse(resStr);
											j++;
											if (!res.success) {
												
												error += 'Error when uploading ' + file.name + ': ' + res.msg + '\n';
												$("#dialog-confirm").html(error);
												   
											    // Define the Dialog and its properties.
											    $("#dialog-confirm").dialog({
											    	dialogClass: "no-close",
											        resizable: true,
											        modal: false,
											        height: 250,
											        width: 400,
											        buttons: {
											            "OK": function () {
											                $(this).dialog('close');
											            }
											        }
											    });
											} else {
												html += '<img alt="" src="' + res.link + '"/>';
											}
											if (j === evt.target.files.length) {
												// editor.hideMask();
												editor.insertHtml(html);
												if (error !== '') {
													$("#dialog-confirm").html(error);
													   
												    // Define the Dialog and its properties.
												    $("#dialog-confirm").dialog({
												    	dialogClass: "no-close",
												        resizable: true,
												        modal: false,
												        height: 250,
												        width: 400,
												        buttons: {
												            "OK": function () {
												                $(this).dialog('close');
												            }
												        }
												    });
												}
											}
										}
									});
								}
							});
					if (!hasValid) {
						Ext.MessageBox.alert('Alert', 'Only JPEG, PNG, GIF images are accepted.');
					}
				})
			}
		});
		editor.ui.addButton('ImageUpload', {
			label : 'Insert Image',
			command : 'imageupload',
			toolbar : 'insert,10'
		});
	}
});