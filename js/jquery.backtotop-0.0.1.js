/**
 * 返回顶部
 */

;(function($,NAME){
    var __DEFAULTS__={

    }
    $.fn[NAME]=function(options){
        var option =$.extends({},__DEFAULTS__,options);
        var $this=this;
        add_con($this);
    }
    var add_con=function($this){
        var addCon='<a href="##" class="btn btn-default back-to-top" id="back_to_top"><span class="glyphicon glyphicon-chevron-up"></span>TOP</a>';
        $this.append(addCon);
}
})(jQuery,'backToTop');