/**
 * 如果想让树形的节点可以自由拖放, 在构建TreePanel时将enableDD设置为TRUE就可
 * Ext提供了3种形式的拖放:
 * 1. Appen: 放下去的节点会成为目标节点的子节点, 形成父子关系. 标记是一个绿色的加号图标
 * 2. Above: 放下去的节点与目标节点是兄弟关系, 放下去的节点在前. 标记是一个箭头2个短横线
 * 3. Below: 放下去的节点与目标节点是兄弟关系, 放下去的节点在后. 标记与above相反
 * 
 * 默认情况下，叶子节点是不能append的。主要是通过判断目标节点的leaf属性，如果leaf属性为true，则说明为叶子节点，
 * 就不能append；如果为false，就可以append。
 * 那怎么让叶子节点也能append呢？
 * 我们在“nodedragover”事件中处理，将target.leaf设置为false就可以了
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
		dataUrl: '../../tree',	// 自动创建TreeLoader
		root: {
			id: '0',
			text: '全部好友',
			icon: '../../images/tickets.png',
			nodeType: 'async'	// 异步(等同于Ext.tree.AsyncTreeNode)
		}
	});
	// 自动展开根节点
	treePanel.getRootNode().expand();
	
	// 右键菜单
	var cth = function() {};
	var contextMenu = new Ext.menu.Menu({
		id: 'TreeContextMenu',
		items: [{
			text: '查看',
			handler: function() {
				Ext.Msg.alert('提示', '你单击了'+cth.node.id);
			}
		}]
	});
	treePanel.on('contextmenu', function(node, e) {
		e.preventDefault();		// 阻止弹出默认右键菜单
		node.select();			// 选中节点
		cth.node = node;		// 赋给cth, 这样在菜单事件中就可以使用了
		contextMenu.showAt(e.getXY());
	});
	
	/**
	 * 在将一个节点拖拽到另一个节点上时触发。
	 * 处理流程：如果目标时叶子节点，则leaf设置为false，这样就可以在叶子节点append，这样就可以形成树干（文件夹）
	 */
	treePanel.on('nodedragover', function(dragOverEvent) {
		var target = dragOverEvent.target;
		if(target.leaf) {
			target.leaf = false;
		} 
		return true;
	});
});