var app = new Vue({
    el: '#app',
    directives: {
        focus: {
            // 紐ついている要素がDOMに挿入される
            inserted: function(el) {
                el.fucus()
            }
        }
    }
})