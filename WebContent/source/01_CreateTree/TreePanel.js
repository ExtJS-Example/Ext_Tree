/**
 * 树的创建很简单
 * 1. 创建一个TreePanel
 * 2. 为TreePanel设置一个根节点(RootNode)
 * 3. 添加子节点(TreeNode)到根节点
 */
 
Ext.BLANK_IMAGE_URL="../../ext3/resources/images/default/s.gif";

Ext.onReady(function() {
	var treePanel = new Ext.tree.TreePanel({
		title: 'My Tree',
		el: 'tree',
		width: 300,
		autoHeight: true,	// 如果不指明高度, 设置此项自动计算高度
		frame: true,		// 使面板主体颜色与主题一致
		autoScroll: true,
		userArrows: true,	// 在树中使用Vista样式箭头, 默认为false. 个人感觉毫无区别
		animate: true,		// 折叠 展开是具有动画效果
		enableDD: true,		// 节点是否可拖拽
		containerScroll: true,
		rootVisible: true	// 根节点可见, 默认为true
	});
	
	var rootNode = new Ext.tree.TreeNode({
		text: '根节点'
	});	
	var node1 = new Ext.tree.TreeNode({
		text: '根节点下的第一个树干'
	});
	var node2 = new Ext.tree.TreeNode({
		text: '根节点下的第一个树叶'
	});
	var node3 = new Ext.tree.TreeNode({
		text: '根节点下的第一个树干下的第1个叶子'
	});
	var node4 = new Ext.tree.TreeNode({
		text: '根节点下的第一个树干下的第2个叶子'
	});
	var node5 = new Ext.tree.TreeNode({
		text: '根节点下的第2个树干'
	});
	var node6 = new Ext.tree.TreeNode({
		text: '根节点下的第2个树干下的第1个叶子'
	});
	
	// 给treePanel设置根节点
	treePanel.setRootNode(rootNode);
	
	node1.appendChild(node3);
	node1.appendChild(node4);
	
	rootNode.appendChild(node1);
	rootNode.appendChild(node2);
	
	node5.appendChild(node6);
	rootNode.appendChild(node5);
	
	treePanel.render();
	
	Ext.get('expandAllNode').on('click', function() {
//		treePanel.expandAll();
		
		// 展开所有节点, 动态展开
		rootNode.expand(true, true);
	});
	
});