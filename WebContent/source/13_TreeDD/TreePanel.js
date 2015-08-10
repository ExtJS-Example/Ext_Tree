/**
 * TreePanel中有参数设置只允许Drag和只允许Drop，以及同时允许Drag和Drop，默认情况下设置enableDD表示既可以Drag又可以Drop。
 * 下面的例子中，TreePanel1只允许Drag，TreePanel2只允许Drop，即只允许从TreePanel1拖放到TreePanel2
 */
 
Ext.BLANK_IMAGE_URL="../../ext3/resources/images/default/s.gif";

Ext.onReady(function() {
	// 开启悬浮提示
	Ext.QuickTips.init();
	
	// 树之间的拖放 - Drag
	var tree1 = new Ext.tree.TreePanel({
		title: '只允许Drag',
		renderTo: 'dragTree',
		autoSroll: true,
		width: 500,
		autoHeight: true,
		frame: true,		// 使面板颜色与主题颜色一致
		enableDrag: true,	// 只允许Drag
		containerScroll: true,
		dataUrl: '../../data/drag.txt',
		root: {
			id: 100,
			text: 'Root Node(TreePanel_1)',
			nodeType: 'async'
		}
	});
	// 展开所有节点
	tree1.expandAll();
	
	// 树之间的拖放 - Drop
	var tree1 = new Ext.tree.TreePanel({
		title: '只允许Drop',
		renderTo: 'dropTree',
		autoSroll: true,
		width: 500,
		autoHeight: true,
		frame: true,		// 使面板颜色与主题颜色一致
		enableDrop: true,	// 只允许Drag
		containerScroll: true,
		dataUrl: '../../data/drop.txt',
		root: {
			id: 100,
			text: 'Root Node(TreePanel_2)',
			nodeType: 'async'
		}
	});
	// 展开所有节点
	tree1.expandAll();
});