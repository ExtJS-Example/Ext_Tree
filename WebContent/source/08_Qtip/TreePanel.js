/**
 * 给节点增加提示信息很简单, 只需要在TreeNode中增加qtip属性就可以了
 */
 
Ext.BLANK_IMAGE_URL="../../ext3/resources/images/default/s.gif";

Ext.onReady(function() {
	
	// 开启悬浮提示
	Ext.QuickTips.init();
	
	// 不用启动项目, 本地即可查看
	var treePanel = new Ext.tree.TreePanel({
		title: '读取Servlet数据',
		renderTo: 'tree',
		width: 500,
		autoHeight: true,	// 如果不指名高度, 设置此项自动计算高度
		frame: true,		// 使面板主体颜色与主题一致
		autoScroll: true,
		userArrows: true,	// 在树中使用Vista样式箭头, 默认为false. 个人感觉毫无区别
		animate: true,		// 折叠 展开是具有动画效果
		enableDD: true,		// 节点是否可拖拽
		containerScroll: true,
		rootVisible: true,	// 根节点可见, 默认为true
		dataUrl: '../../qtip',	// 自动创建TreeLoader
		root: {
			id: '0',
			text: '全部好友',
			icon: '../../images/tickets.png',
			nodeType: 'async'	// 异步(等同于Ext.tree.AsyncTreeNode)
		}
	});
	// 自动展开根节点
	treePanel.getRootNode().expand();
	
	var contextMenu = new Ext.menu.Menu({
		id: 'TreeContextMenu',
		items: [{
			text: '查看',
			handler: function() {
				Ext.Msg.alert('提示', '你单击了'+cth.node.id);
			}
		}]
	});
	
	var cth = function() {};
//	var cth;
	
	treePanel.on('contextmenu', function(node, e) {
		e.preventDefault();		// 阻止弹出默认右键菜单
		node.select();			// 选中节点
		cth.node = node;		// 赋给cth, 这样在菜单事件中就可以使用了
		contextMenu.showAt(e.getXY());
	});
});