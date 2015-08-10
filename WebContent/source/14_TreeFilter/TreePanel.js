/**
 * 如果树的节点过多，一个个找起来就很麻烦，能不能过滤掉不需要的节点呢？
 * 答案是肯定的，使用Ext.tree.TreeFilter就可实现。
 * 
 * TreeFilter的具体用法详见说明
 */

Ext.onReady(function() {
	var tree3 = new Ext.tree.TreePanel({
        title:"TreePanel2",
        width:500,
        height:300,
        frame:true,
        enableDrop:true, // 只允许Drop
        containerScroll:true,
//        dataUrl:"./data/tree3.txt",
        el:"treefilter",
        autoScroll:true,
        root:new Ext.tree.AsyncTreeNode({
                children: [{
                    id: 'level',
                    text: '用户类型1',
                    children: [{
                        id: 'allLevel',
                        text: '全部1',
                        leaf: true
                    }, {
                        id: 'noSupport',
                        text: '1无支持1234',
                        leaf: true
                    }, {
                        id: 'month',
                        text: 'efa4包月431gf',
                        leaf: true
                    }, {
                        id: 'year',
                        text: '43q包年rqeg4t',
                        leaf: true
                    }, {
                        id: 'always',
                        text: '终身234t45y',
                        leaf: true
                    }]
                }, {
                    id: 'outOfDate',
                    text: '是否过期12',
                    children: [{
                        id: 'allOutOfDate',
                        text: '全部f4345',
                        leaf: true
                    }, {
                        id: 'notOutOfDate',
                        text: 'mn未过期',
                        leaf: true
                    }, {
                        id: 'alreadyOutOfDate',
                        text: 'fwet已过期qe',
                        leaf: true
                    }]
                }, {
                    id: 'report',
                    text: '13统计图表fa',
                    children: [{
                        id: 'levelReport',
                        text: 'ae5按用户类型34d',
                        leaf: true
                    }, {
                        id: 'outOfDateReport',
                        text: 'fa按是否过期fer',
                        leaf: true
                    }]
                }]
            })
//        root:{
//            id:1000,
//            text:"Root Node(TreePanel3)",
//            nodeType:"async"
//        },
    });

    // 我在Div中增加了一个input，如果使用renderTo就会显示到TreePanel外，使用render()就可以显示到一个panel
    tree3.render();
    // 展开所有节点
    tree3.expandAll();

    // 创建一个树形过滤器
    var filter = new Ext.tree.TreeFilter(tree3, {
        clearBlank: true, // 如果输入过滤条件为空，则执行clear()函数。
        autoClear: true// 每次执行过滤前，自动执行clear()函数，否则会从上次过滤的结果上执行查询。
    });

    var hiddenPkgs = []; // 保存没有过滤掉的节点
    
    // 为输入框添加keyup事件，键入内容执行搜索
    Ext.get("treefilterField").on("keyup",function(e) {
        // 过滤条件
        var text = this.dom.value;

        // 没被过滤掉的节点就是符合条件的节点, 遍历这些节点，显示它们。
        Ext.each(hiddenPkgs, function(n){
            n.ui.show();
        });

        // 未输入，则执行clear()，显示所有节点。
        if(!text){
            filter.clear();
//            tree3.collapseAll();
            tree3.getRootNode().expand();
            var children = tree3.getRootNode().childNodes;
            for(var i=0; i<children.length; i++) {
            	var child = children[i];
            	child.collapse();
            }
//            tree3.getRootNode().collapse();
            return;
        }

        // 展开所有节点（未被过滤掉的节点）
        tree3.expandAll();

        // 根据输入构建正则表达式，过滤不区分大小写。
        var re = new RegExp('^' + Ext.escapeRe(text), 'i');
        
        // 使用filterBy()函数过滤
        // 遍历TreePanel中每一个节点，如果不是叶子节点或符合过滤条件都过滤掉。
        filter.filterBy(function(n){
            return !n.isLeaf() || re.test(n.text);
        });
        
        // hide empty packages that weren'tfiltered
        hiddenPkgs = [];

        // 从根节点开始遍历其下的所有子节点，没有过滤掉的节点放入hiddenPkgs
        tree3.root.cascade(function(n){
            if(!n.isLeaf() &&n.ui.ctNode.offsetHeight < 3){
                n.ui.hide();
                hiddenPkgs.push(n);
            }
        });	
    });
});