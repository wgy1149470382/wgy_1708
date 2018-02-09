require.config({
    paths:{
        'jquery':'js/jquery-3.2.1',
        'ajax':'js/lx.ajax',
        'common':'js/common',
        'banner':'js/banner',
        'list':'js/list',
        'member':'js/member',
        'zoom':'../lib/jquery.gdsZoom/jquery.gdsZoom'
    },
    shim:{
        'list':['ajax'],
        'member':['ajax'],
        'zoom':['jquery']
    }

})

