<template>
<div id="app">
    <h1>회원 선택</h1>
    <div id="container">
        <div class="doctor">
            <router-link :to="{name:'sign_up_doctor'}"> <img src="../../public/images/doctor.svg" id="doc">
            </router-link>
            <button type="button">가입하기</button>
        </div>
        <p></p>
        <div class="user">
            <router-link :to="{name:'sign_up_user'}"> <img src="../../public/images/user.svg" id="doc"></router-link>
            <button type="button">가입하기</button>
        </div>
    </div>
</div>
</template>

<script>
</script>

<style scoped>
*{
    text-align: center;
}


.doctor{ 
    width:              200px;
  height:             200px;
  margin:             10px;   
}

.user{
    width:              200px;
  height:             200px;
  margin:             10px;   
}
#container{
    display:         flex;
  flex-wrap:       wrap;
  justify-content: center;
  
}
.doctor > button {
    width:100px;
    height: 25px;
    border: none;
    background: #3273b7;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    line-height: 21px;
    outline: none;
    cursor: pointer;
}
.user > button {
    width:100px;
    height: 25px;
    border: none;
    background:pink;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    line-height: 21px;
    outline: none;
    cursor: pointer;
}
@media(max-width:768px){
	body{
		width: 100%;
		float:none;
	}
	.container{
		height: 160px;
		width: 100%;
    }
    .doctor{
        margin-top: 10%;
    }
    .user{
        margin-top: 10%;
    }
}
</style>