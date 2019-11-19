var model_1 = {
    board_name: "",
    boards: [{
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

var model_2 = {
    posting_title: "",
    posts: [{

        title: "aaaaaaa",
        board: "음식",
    }, {
        title: "cccccccccc",
        board: "음식",
    }, {
        title: "pppppppppppp",
        board: "건강",
    }]
}

var list_like = new Vue({
    el: "#b1",
    data: model_1,
    computed: {
        list_like: function() {
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

var list_now = new Vue({
    el: "#b2",
    data: model_2,
    computed: {
        list_now: function() {
            var cname_2 = this.posting_title.trim();
            return this.posts
                .filter(function(item, index) {
                    if (item.title.indexOf(cname_2) > -1) {
                        return true;
                    }
                });
        }
    }
});