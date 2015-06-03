//Example by www.extjs-tutorial.com
//http://www.extjs-tutorial.com/extjs/ext-application
//http://docs.sencha.com/extjs/4.2.2/#!/api/Ext.app.Application
var store = Ext.create('Ext.data.TreeStore', {
    root: {
        expanded: true,
        children: [
            { text: "detention", leaf: true },
            { text: "homework", expanded: true, children: [
                { text: "book report", leaf: true },
                { text: "algebra", leaf: true}
            ] },
            { text: "buy lottery tickets", leaf: true }
        ]
    }
});

Ext.application({
    name : 'extjs-tutorial.com',
    
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
				height: 150,
				minHeight: 75,
				maxHeight: 250,
				html: 'Footer content'
			},{
				title: 'Navigation',
				region:'west',
				floatable: false,
				margins: '5 0 0 0',
				width: 175,
				minWidth: 100,
				maxWidth: 250,
				items:[{
					title: 'Simple Tree',
					width: 200,
					height: 150,
					store: store,
					rootVisible: false,
					renderTo: Ext.getBody()
							}]
			},{
				title: 'Main Content',
				collapsible: false,
				region: 'center',
				margins: '5 0 0 0',
				layout: 'absolute',
				items:[{
					title: 'Panel 1',
					x: 50,
					y: 50,
					html: 'Positioned at x:50, y:50'
				}]
			}]
        });
        
    }
});







