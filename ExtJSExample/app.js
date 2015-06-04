Ext.application({
    name: 'ClearOne',
    views: ['projects.List', 'templates.Tree'],
    controllers: ['projects.Projects'],
    
    launch : function(){
        
        Ext.create('Ext.container.Viewport', 
        {
            layout : 'border',
            bodyBorder: false,
			defaults: {
				collapsible: true,
				split: true,
				bodyPadding: 15
			},
            items: [{
				title: 'Footer',
				region: 'south',
				height: 0,
				minHeight: 0,
				maxHeight: 0,
				html: 'Footer content'
			},{
				title: 'Navigation',
				region:'west',
				floatable: false,
				margins: '0 0 0 0',
				width: 250,
				minWidth: 100,
				maxWidth: 450,
				bodyPadding: 0,
				items:[{
					xtype: 'Tree',
					ui: 'highlight',
					margins: '0 0 0 0',
					frame: true,
					bodyPadding: 0
				}]
			},{
				collapsible: false,
				region: 'center',
				margins: '5 0 0 0',
				layout: 'absolute',
				bodyPadding: 0,
				items:[{
					xtype: 'List',
					margins: '0 0 0 0',
					bodyPadding: 0
				}]
			}]
        });
        
    }
});
