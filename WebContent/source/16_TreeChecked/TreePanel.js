/**
 * 很多时候我们需要用到带checkbox的树，实现带checkbox的树也很简单，只需要在返回的数据上加上checked：false/true就可以了。
 * 
 * 1.实现选中父结点，子节点级联选中效果。
 * 	 TreePanel中有一个checkchange事件，当你选择或取消选择checkbox时触发。携带两个参数：node，checked。
 * TreeNode.ui.isChecked()用来判断某个节点的选中状态。那么我们使用TreeNode.cascade()从根节点开始遍历，判断是否选中就可以了
 */

Ext.onReady(function() {
	var tree = new Ext.tree.TreePanel({
        title:"TreeChecked",
        el: 'treeChecked',
        width:500,
        height:300,
        frame:true,
        containerScroll:true,
        autoScroll:true,
        dataUrl: '../../checked',	// 自动创建TreeLoader
        root:{
            id: '0',
            text:"全部好友（带复选框）",
            checked: true,
            nodeType:"async"
        }
    });
    tree.render();
  
    // 子节点的选中状态随父节点的选中状态改变
    tree.on('checkchange', function(node, checked){
    	// 展开节点
    	node.expand();
    	
    	// 改变节点的选中状态
    	node.attributes.checked = checked;
    	
    	// 遍历所有子节点，改变子节点的选中状态
    	node.eachChild(function(child) {
    		child.ui.toggleCheck(checked);
    		child.attributes.checked = checked;
    		
    		// 触发子节点的checkchange事件，改变子节点选中状态（递归）
    		child.fireEvent('checkchange',child,checked);
    	});
    });
 
    // 显示选中的节点信息
    Ext.get('showCheckedNode').on('click', function() {
    	var checkedNodesText = "";
    	
    	// 从根节点开始遍历所有子节点，获取选中的节点
    	tree.root.cascade(function(node) {
    		if(node.ui.isChecked) {
    			checkedNodesText += node.text + ",";
    		}
    	});
    	checkedNodesText = checkedNodesText.substring(0, checkedNodesText.length-1);
    	
    	Ext.Msg.show({
    		title: '提示',
    		msg: '选中的节点: ' + checkedNodesText,
    		buttons: Ext.Msg.OK,
    		icon: Ext.Msg.INFO
    	});
    });
});