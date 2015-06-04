
var store = Ext.create('Ext.data.TreeStore', {
    root: {
        text: 'Project - New Project ',
        expanded: true,
        children: [
            {
                text: 'Child 1',
                leaf: true
            },
            {
                text: 'Child 2',
                leaf: true
            },
            {
                text: 'Child 3',
                expanded: true,
                children: [
                    {
                        text: 'Grandchild',
                        leaf: true,
						href: 'Grandchild'
                    }
                ]
            }
        ]
    }
});
console.log(store.getNodeById(1))
Ext.define('ClearOne.view.templates.Tree', 
{
    extend : 'Ext.tree.Panel',
    alias : 'widget.Tree',
	margins: '0 0 0 0',
    store: store
});