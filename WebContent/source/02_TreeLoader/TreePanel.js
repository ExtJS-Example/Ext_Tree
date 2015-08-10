/**
 * Ext.tree.TreeLoader可以利用后台数据动态生成一棵树.
 * 我们只需要提供数据, TreeLoader完成转换盒装配节点的操作
 */
 
Ext.BLANK_IMAGE_URL="../../ext3/resources/images/default/s.gif";

Ext.onReady(function() {
	
	// 使用Ajax读取数据生成树, 需启动项目
	var treePanel = new Ext.tree.TreePanel({
		title: 'Async TreeNode',
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
		loader: new Ext.tree.TreeLoader({
			dataUrl: '../../data/asyncTreeNode.txt'	// 从这里获取数据生成树节点
		}),
		root: {
			text: 'Country',	// 根节点
			nodeType: 'async'	// 异步(等同于Ext.tree.AsyncTreeNode)
		}
	});
	
	treePanel.render();
	
});