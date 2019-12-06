var model = {
    board_name: "",
    boards: [{
        name: "자유게시판",
        group: "A",
        link: "board_food.html",
    }, {
        name: "비밀게시판",
        group: "A",
        link: "board_food.html",
    }, {
        name: "질문게시판",
        group: "A",
        link: "board_food.html",
    }, {
        name: "음식",
        group: "A",
        link: "board_food.html",
    }, {
        name: "훈련",
        group: "A",
        link: "board_food.html",
    }, {
        name: "건강",
        group: "A",
        link: "board_food.html",
    }]
}

var clist = new Vue({
    el: "#exmaple",
    data: model,
    computed: {
        filtered: function() {
            var cname = this.board_name.trim();
            return this.boards
                .filter(function(item, index) {
                    if (item.name.indexOf(cname) > -1) {
                        return true;
                    }
                });
        }
    }
});