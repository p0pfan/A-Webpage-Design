/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights
 *          reserved. For licensing, see LICENSE.md or
 *          http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function(config) {
	// Define changes to default configuration here.
	// For complete reference see:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config

	// The toolbar groups arrangement, optimized for a single toolbar row.
	config.toolbarGroups = [ {
		name : 'document',
		groups : [ 'mode', 'document', 'doctools' ]
	}, {
		name : 'clipboard',
		groups : [ 'clipboard', 'undo' ]
	}, {
		name : 'editing',
		groups : [ 'find', 'selection', 'spellchecker' ]
	}, {
		name : 'forms'
	}, {
		name : 'basicstyles',
		groups : [ 'basicstyles', 'cleanup' ]
	}, {
		name : 'paragraph',
		groups : [ 'list', 'indent', 'blocks', 'align', 'bidi' ]
	}, {
		name : 'links'
	}, {
		name : 'insert'
	}, {
		name : 'styles'
	}, {
		name : 'colors'
	}, {
		name : 'tools'
	}, {
		name : 'others'
	}, {
		name : 'about'
	} ];

	// config.enterMode = CKEDITOR.ENTER_DIV;

	// The default plugins included in the basic setup define some buttons that
	// are not needed in a basic editor. They are removed here.
	config.removeButtons = 'Anchor';

	// Dialog windows are also simplified.
	config.removeDialogTabs = 'link:advanced';
	config.extraPlugins = 'font,indentblock,indentlist,colorbutton,justify,table,tabletools,tableresize,quicktable,sourcearea,htmlwriter,specialchar,format,image2,imageupload,scayt';

	config.qtCellSpacing = '0';
	config.qtCellPadding = '5';

	config.qtWidth = '80%';
	config.height = 500;
	config.qtStyle = {
		'font-size' : '14px',
		'font-family' : 'Arial, sans-serif',
		'border-collapse' : 'collapse'
	};

	config.extraAllowedContent = 'p{margin*}[margin*];div{border*,margin*,padding*}[border*,margin*,padding*];*{font-size}[align];img{*}[*]';
	// config.allowedContent = true;

	config.format_tags = 'p;h1;h2;h3;h4;h5;h6;pre;address';

	config.scayt_contextCommands = 'ignore|ignoreall';
	
	config.filebrowserImageUploadUrl = '/email/images';
	
	config.contentsCss = '/email/webres/ckeditor/skins/moono/editor.css';
};
