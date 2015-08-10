/**
 * 读取本地数据是TreeLoader的另类方法, 可以读取本地JavaScript中的Json数据生成树
 * 1. 为TreePanel设置一个参数为空的TreeLoader
 * 2. 设置根节点, 并设置children属性
 */
 
Ext.BLANK_IMAGE_URL="../../ext3/resources/images/default/s.gif";

Ext.onReady(function() {
	
	// 不用启动项目, 本地即可查看
	var treePanel = new Ext.tree.TreePanel({
		title: '读取本地Json数据',
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
		loader: new Ext.tree.TreeLoader(),
		root: {
			text: '国家',	// 根节点
			nodeType: 'async',	// 异步(等同于Ext.tree.AsyncTreeNode)
			children: [{
				text: '中国',
				children: [{
					text: '北京',
					leaf: true
				}, {
					text: '上海',
					leaf: true
				}, {
					text: '广州',
					leaf: true
				}, {
					text: '深圳',
					leaf: true
				}]
			}, {
				text: '美国',
				children: [{
					text: '纽约',
					leaf: true
				}, {
					text: '迈阿密',
					leaf: true
				}, {
					text: '洛杉矶',
					leaf: true
				}, {
					text: '芝加哥',
					leaf: true
				}]
			}, {
				text: '日本',
				children: [{
					text: '东京',
					leaf: true
				}, {
					text: '北海道',
					leaf: true
				}, {
					text: '横滨',
					leaf: true
				}, {
					text: '名古屋',
					leaf: true
				}]
			}]
		}
	});
	
	treePanel.render();
	
});