/**
 * Ext.tree.TreeSorter是专门用来对树进行排序的，使用它可以轻松实现排序
 * 几个重要的参数：
 * folderSort：是否让叶子节点排在非叶子结点之后，默认为false
 * caseSensitive：排序时是否区分大小写，默认为false
 * dir：排序方式，ASC/DESC
 * leafAttr: 判断叶子节点的标识，默认是leaf，如果节点中存在leaf：true，则认为是叶子节点
 * property：根据哪个属性进行排序，默认text
 */

Ext.onReady(function() {
	var tree = new Ext.tree.TreePanel({
        title:"TreeSorter",
        renderTo: 'treeSorter',
        width:500,
        height:300,
        frame:true,
        containerScroll:true,
        autoScroll:true,
        dataUrl: '../../sort',	// 自动创建TreeLoader
        root:{
            id: '0',
            text:"Root Node(TreePanel3)",
            nodeType:"async"
        }
    });

    var treeSorter = new Ext.tree.TreeSorter(tree, {
   		folder: true		//让所有叶子节点排在非叶子节点后面
    });
    
    /**
     * 返回来的json是[{id:'3', text: '陌生人', leaf: true},{id:'1', text: '我的好友'}, {id:'2', text: '我的同学'}]
     * 应该是“陌生人”在第一个
     * 经过排序后“陌生人”排在非叶子结点后
     */
});