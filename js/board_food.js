var text = {
    text_name: "",
    texts: [{
        no: "1",
        name: "1dafs",
        writer: "A",
        time: "00",
        view: "23",
        like: "1",
    }, {
        no: "1",
        name: "2puwtrhwior",
        writer: "B",
        time: "00",
        view: "23",
        like: "1",
    }, {
        no: "1",
        name: "3oitpqwifl",
        writer: "C",
        time: "00",
        view: "23",
        like: "1",
    }, {
        no: "1",
        name: "4dslknzjx",
        writer: "D",
        time: "00",
        view: "23",
        like: "1",
    }, {
        no: "1",
        name: "5oipjwyrt",
        writer: "E",
        time: "00",
        view: "23",
        like: "1",
    }, {
        no: "1",
        name: "6gf,njkdfn",
        writer: "F",
        time: "00",
        view: "23",
        like: "1",
    }]
}

var clist = new Vue({
    el: "#exmaple",
    data: text,
    computed: {
        filtered: function() {
            let name = this.text_name;
            console.log(name);
            if (document.getElementById("selected").value == "title") {
                return this.texts.filter(txt => {
                    return txt.name.includes(name);
                });
            } else {
                return this.texts.filter(txt => {
                    return txt.writer.includes(name);
                });
            }


        }
    }
});