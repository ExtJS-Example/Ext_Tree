/**
 * 在拖放完成之后会触发nodedrop事件
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
	
	/**
	 * 判断拖放的目标
	 * 有一个参数，携带有这些属性：tree,target,data,point,source,rawEvent,dropNode，
	 * 使用这些属性，我们就知道拖放源，拖放目标，拖放方式等等
	 */
	treePanel.on('nodedrop', function(e){
//		Ext.Msg.show({
//			title: '提示',
//			msg: e.dropNode.text + '被拖放到' + e.target.text + "上了， 拖放方式为" + e.point
//		});
		
		/**
		 * 我们将被拖放的节点ID，拖放的目标节点Id等参数传递给后台，后台就可以修改数据库了。
		 * 这里作为演示，只是使用Ajax与后台通信，将参数传递给后台并返回提示信息。
		 */
		 var item = {
		 	dropNode: e.dropNode.id,	//被拖放的节点
		 	target: e.target.id,	// 目标节点
		 	point: e.point			//拖放方式
		 };
		 Ext.Ajax.request({
		 	url: '../../nodeDrop',
		 	method: 'POST',
		 	params: item,
		 	success: function(response, options) {
		 		var msg = response.responseText;
		 		Ext.Msg.show({
		 			title: '提示',
		 			msg: msg
		 		});
//		 		Ext.Msg.alert('提示', msg);
		 	},
		 	failure: function(response, options) {
		 		Ext.Msg.show({
		 			title: '错误',
		 			msg: '网络不可达！',
		 			buttons: Ext.Msg.OK,
		 			icon: Ext.MessageBox.ERROR
		 		});
		 	}
		 });
	});
});