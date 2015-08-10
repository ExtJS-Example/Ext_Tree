/**
 * 我们主要看看这几种事件: 展开(expandnode), 折叠(collapsenode), 单击(click), 双击(dbclick)
 */
 
Ext.BLANK_IMAGE_URL="../../ext3/resources/images/default/s.gif";

Ext.onReady(function() {
	
	// 不用启动项目, 本地即可查看
	var treePanel = new Ext.tree.TreePanel({
		title: '读取Servlet数据',
		el: 'tree',
		width: 500,
		autoHeight: true,	// 如果不指名高度, 设置此项自动计算高度
		frame: true,		// 使面板主体颜色与主题一致
		autoScroll: true,
		userArrows: true,	// 在树中使用Vista样式箭头, 默认为false. 个人感觉毫无区别
		animate: true,		// 折叠 展开是具有动画效果
		enableDD: true,		// 节点是否可拖拽
		containerScroll: true,
		rootVisible: true,	// 根节点可见, 默认为true
//		dataUrl: 'localhost:8080/Ext_Tree/tree',	// 自动创建TreeLoader
		dataUrl: '../../tree',	// 自动创建TreeLoader
		root: {
			id: '0',
			text: '全部好友',
			nodeType: 'async'	// 异步(等同于Ext.tree.AsyncTreeNode)
		}
	});
	treePanel.render();
	
	// 自动展开根节点
	treePanel.getRootNode().expand();
	
	// 展开事件
	treePanel.on('expandnode', function(node) {
		console.log(node.id + '展开了');
	});
	
	// 折叠事件
	treePanel.on('collapsenode', function(node) {
		console.log(node.id + '被折叠了');
	});
	
	// 单击事件
	treePanel.on('collapsenode', function(node) {
		console.log('单击' + node.id);
	});
	
	// 双击事件
	treePanel.on('collapsenode', function(node) {
		console.log('双击' + node.id);
	});
});