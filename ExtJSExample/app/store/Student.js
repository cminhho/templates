Ext.define('School.store.Student', 
{
    extend : 'Ext.data.Store',
    model : 'School.model.Student',
    autoLoad : true,
    autoSync : false,
    storeId : 'Student',
    pageSize: 5
});