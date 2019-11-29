<template>
  <div>
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
                        <tr v-for="item in texts" v-bind:key="item.idx">
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
      texts: [{
          idx:1,
          title:"1111",
        writer:"soadif;asdl",
         time:"09",
          view:1, 
          like:3,
      }],
      selected:"",
    }
  },
  /* created () {
       let idx = this.$route.params.idx;
    this.$http.get(`http://localhost:3000/api/board/${idx}`)
    .then((response) => {
      this.texts = response.data;
      console.log(this.texts[0]);
    })
  },*/
  computed:{

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
