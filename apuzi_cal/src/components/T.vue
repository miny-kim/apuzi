<template>
  <div>
  <span>
            검색 :
            <select v-model="selected" id="selected">
                    <option value="title">제목</option>
                    <option value="writer">작성자</option>
            </select> 
            <input type="text" v-model="text_name" placeholder="검색" />
        </span> 
        <input type="button" value="글쓰기" v-on:click="addContact">
     
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
    
                <!--router-link :to="{name:'board_idx', params:{idx: item.idx}}"></router-link-->
  </div>
</template>


<script>
export default {
  name: 'T',
  data () {
    return {
        text_name: '',
      texts: [{
          idx:1,
          title:"1111",
          writer:"miny",
          time:"09",
          view:1, 
          like:3,
      }],
      selected:"title",
    }
  },
   created () {
       let idx = this.$route.params.idx;
    this.$http.get(`/board/${idx}`)
    .then((response) => {
      this.texts = response.data;
      console.log(this.texts[0]);
    })
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

        }

  }
}


</script>

<style scoped>
.movie {
    height: 300px;
    width: 300px;
    border: 3px solid;
    margin: auto;
    padding: 10px;
}

img {
    width: 200px;
    height: 200px;
}

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
    width: 70%;
    float: right;
}

#table {
    width: 90%;
}
</style>
