<template>
  <div>
  <div id="head">
        검색 :
        <select v-model="selected" id="selected">
                <option value="title">제목</option>
                <option value="writer">작성자</option>
        </select> 
        <input type="text" v-model="text_name" placeholder="검색" />
         <span id="write">
    <router-link :to="{name:'register', params: {idx:myindex}}"> 
        <input type="button" value="글쓰기">
    </router-link>
  </span>
    </div> 
        
    <div id="text">
        <table id="table">
            <thead>
                <tr>
                    <th>No</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성시간</th>
                    <th>조회수</th>
                    <th>좋아요</th>
                 </tr>
            </thead>
                <tbody id="contents">
                    <tr v-for="item in filtered" v-bind:key="item.idx">
                        <td>{{item.idx}}</td>
                        <td>{{item.title}}</td>
                        <td>{{item.writer}}</td>
                        <td>{{item.time}}</td>
                        <td>{{item.view}}</td>
                        <td>{{item.like}}</td>
                    </tr>
                </tbody>
            </table>
    </div>
    <hr>
            <div class="btn-cover">
            <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">
                이전 
            </button>
            <span class="page-count">{{ pageNum + 1 }}/{{ pageCount }} 페이지</span>
            <button :disabled="pageNum >= pageCount - 1" @click="nextPage" class="page-btn">
                다음
            </button>
        </div>
  </div>
</template>


<script>
export default {
  name: 'T',
  props: ['myindex'],
  data () {
    return {
        myindex:1,
        pageNum: 0,
        pageCount:0,
        text_length:100,
        text_name: '',
        array_text: '',
      texts: [{
          idx:1,
          title:"1111",
          contents: "",
          img:"",
          writer:"miny",
          time:"09",
          view:1, 
          like:3,
      },
      {
          idx:2,
          title:"ss",
          contents: "",
          img:"",
          writer:"miny",
          time:"09",
          view:1, 
          like:3,
      }],
      selected:"title",
    }
  },
   created () { //초기에는 무조건 첫번째 게시판의 1페이지
   let idx = 1;
   let p_id = 1;
    this.$http.get(`/board/${idx}/${p_id}`)
    .then((response) => {
      this.texts = response.data.text;
     this.text_length =response.data.text_length;
      console.log(this.texts[0]);
    })
        console.log("sssssss"+this.myindex);
        let page = Math.floor(this.text_length / 10);
        if (this.text_length  % 10 > 0) page += 1;
        this.pageCount = page;
  },
  computed:{
      filtered(){
            let name = this.text_name;
            console.log(name);
            if (this.selected == "title") {
                return this.texts.filter(txt => {
                    return txt.title.includes(name);
                });
            } 
            else {
                return this.texts.filter(txt => {
                    return txt.title.includes(name);
                });
            }

            return this.texts;

        },
       
  },
  watch: {
    myindex: function(){
        console.log("sssssss"+this.myindex);
        let idx = this.myindex;
        let p_id= 1;
        this.$http.get(`/board/${idx}/${p_id}`)
        .then((response) => {
            this.texts = response.data;
            console.log(this.texts[0]);
            })
      
  },
  pageNum: function(){
      console.log(this.pageNum+"DDD"+this.myindex);
       let idx = this.myindex;
    let p_id= this.pageNum;
    this.$http.get(`/board/${idx}/${p_id}`)
    .then((response) => {
      this.texts = response.data;
      console.log(this.texts[0]);
    })
  }
},
methods: {
       nextPage () {
      this.pageNum += 1;
    },
    prevPage () {
      this.pageNum -= 1;
    }
},
}
</script>

<style scoped>
div {
    text-align: center;
}
#text td,
#text th {
    text-align: center;
    border-collapse: collapse;
    border-bottom: 1px solid #ddd;
    padding: 20px;
}

#text tr td:hover {
    background-color: #f5f5f5;
}

#text thead tr {
    color: black;
}

#text {
    width: 100%;
    float: left;
    padding-left: 10%;
}

#table {
    width: 90%;
}

#write{
    float: right;
}
#head{
    padding-right: 70px;
}
</style>