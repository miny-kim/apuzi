<template>
    <div id='dmap'>
        <input v-model="myPlace" placeholder="내위치">
        <button v-on:click="find">찾기</button>
        <p></p>
        <div id="map" style='width:100%; height:500px'></div>
    	<br>

    </div>
</template>

<script>
export default {
    name:'dmap',
    data(){
        return{
            myPlace:"",
            map:null,
        }
    },

    mounted(){
        var container = document.getElementById('map');
        
		var options = {
    	    center: new kakao.maps.LatLng(37.282977, 127.046390),
    	    level: 3
        };
        
        var map = new kakao.maps.Map(container, options);
        this.map=map;
        var markers = [];
        const scope = this

        //동물병원
	    var positions = [
    	    {
        	    title: '공감플러스 동물의료센터',
        	    latlng: new kakao.maps.LatLng(37.273885, 127.047829)
	    	},
		
        	{
	            title: '수원종합동물병원',
         	    latlng: new kakao.maps.LatLng(37.274693, 127.044837)
	    	},
		
        	{
            	title: '돌봄동물병원',
	            latlng: new kakao.maps.LatLng(37.274643, 127.043125)
	    	},
		
	        {
        	    title: '오아시스 정형외과 신경외과 동물병원',
        	    latlng: new kakao.maps.LatLng(37.291713, 127.047749)
            },
            {
        	    title: '우리학교',
        	    latlng: new kakao.maps.LatLng(37.282977, 127.046390)
		    },
        ];
        
        // 마커 이미지의 이미지 주소입니다
	    var imageSrc = "http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

	    
    	for (var i = 0; i < positions.length; i++) {

    	    // 마커 이미지의 이미지 크기 입니다
    	    var imageSize = new kakao.maps.Size(24, 35);

        	// 마커 이미지를 생성합니다    
    	    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    	    // 마커를 생성합니다
    	    var marker = new kakao.maps.Marker({
        	    map: map, // 마커를 표시할 지도
        	    position: positions[i].latlng, // 마커를 표시할 위치
        	    title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        	    image: markerImage // 마커 이미지 
    	    });

    	    markers.push(marker)
        }
    
        for (let i = 0; i < markers.length; i++) {
	        kakao.maps.event.addListener(markers[i], 'click', function () {
                scope.$router.push('/map/'+i)
    	    });
        }   
    
    
    },

    methods:{
        find: function(){
            // 장소 검색 객체를 생성합니다
            var ps = new kakao.maps.services.Places(); 
            let map=this.map

            ps.keywordSearch(this.myPlace, placesSearchCB); 
            function placesSearchCB (data, status, pagination) {
                
                if (status === kakao.maps.services.Status.OK) {
                    // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
                    // LatLngBounds 객체에 좌표를 추가합니다
                    
                    var bounds = new kakao.maps.LatLngBounds();

                    for (var i=0; i<data.length; i++) {
                        bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                    }       

                    // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
                    map.setBounds(bounds)
                
                } 
            }
        }
    }

    
    
}
</script>

<style>
   
</style>