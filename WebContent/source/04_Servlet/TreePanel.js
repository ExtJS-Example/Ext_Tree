/**
 * 将根节点的id设置为0, 后台根据id判断当前正在展开的节点时哪个, 然后提供相应的子节点的数据
 * 
 * 相对路径: js文件在使用时最终都是被实际页面所引用，而相对路径是以当前页面为起点
 * 当时花了好长时间..., Ajax的url
 * 1: 'tree'		--		http://localhost:8080/Ext_Tree/source/04_Servlet/tree 
 * 2: '/tree'		--		http://localhost:8080/tree
 * 3: '../tree'		--		http://localhost:8080/Ext_Tree/source/tree 
 * 4: '/../tree'	--		http://localhost:8080/tree 
 * 5: '../../tree'	--		http://localhost:8080/Ext_Tree/tree
 * 
 * 经过实际测试, 第5种情况符合情况.
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
});