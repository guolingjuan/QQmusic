/**
 * Created by LBBCute on 2017/7/25.
 */
$(function(){
    var text=$("#gc").text();   //获取整体歌词
    var songArr=text.split("[");
    var songHtml="";   //用来动态添加歌词
    for(var i=1;i<songArr.length;i++){
        var timeAndSong=songArr[i].split("]"); //时间和歌词
        var gc=timeAndSong[1];
        var timer=timeAndSong[0].split(".");
        var stime = timer[0].split(":"); //分钟+秒
        var second = stime[0]*60 + stime[1]*1;  //换算成秒
       // console.log(second);


        songHtml += "<p id='"+second+"'>"+gc+"</p>";
    if(songHtml){
       $('#songText').html(songHtml);
    }
        $('#myAudio').get(0).play();
        $('#myAudio').get(0).addEventListener("timeupdate",function(){  //监听事件，监听时间更新
            var timer=this.currentTime; //获取当前播放时间
            // 获取当前播放的时间
            // 通过时间来驱动歌词
            var s = parseInt(timer);
           // console.log(s);
            for(var i = 0; i < s; i++){
                $("#"+i).css("color","red");
            }


        })

    }

});