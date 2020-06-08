# WebRTC相关文档

## 一、浏览器支持检测
```js
//判断浏览器是否支持这些 API
if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
  console.log("enumerateDevices() not supported.")
}
```

## 二、检测硬件设备列表
```js
navigator.mediaDevices.enumerateDevices().then(list => {
  console.log(list)
})
```

## 三、获取摄像头、音频
```js
// video标签元素
const view = document.getElementById('view')
let promise = navigator.mediaDevices.getUserMedia({
    video: true, // 是否抓取视频
    audio:true //是否抓取音频
});
promise.then((stream) => {
  // 使用video标签播放视频流，注意video必须设置autoplay，否则需要手动调用play方法
  view.srcObject = stream;
})
```

## 四、录制视频流
```js
// var mediaRecorder = new MediaRecorder(stream[, options]);
/*
stream，通过 getUserMedia 获取的本地视频流或通过 RTCPeerConnection 获取的远程视频流。
options，可选项，指定视频格式、编解码器、码率等相关信息，如 mimeType: 'video/webm;codecs=vp8'。
MediaRecorder 对象还有一个特别重要的事件，即 ondataavailable 事件。
当 MediaRecoder 捕获到数据时就会触发该事件。通过它，我们才能将音视频数据录制下来。
*/
```

## 五、抓取桌面
```js
// view 为video元素容器
navigator.mediaDevices.getDisplayMedia({
  video: true, // 是否抓取视频
  audio:true //是否抓取音频
}).then(stream => {
  view.srcObject = stream;
})
```

## 六、WebRTC核心api
```js
var pcConfig = null;
var pc = new RTCPeerConnection(pcConfig);

//呼叫方创建 Offer
pc.createOffer(setLocalAndSendMessage, handleCreateOfferError);

function setLocalAndSendMessage(sessionDescription) { 
  pc.setLocalDescription(sessionDescription); 
  sendMessage(sessionDescription); 
}

// 被呼叫方收到 Offer
socket.on('message', function(message) { 
 if (message.type === 'offer') { 
   pc.setRemoteDescription(new RTCSessionDescription(message)); 
   doAnswer(); 
 }
})

// 被呼叫方创建 Answer
function doAnswer() { 
  pc.createAnswer().then( setLocalAndSendMessage, onCreateSessionDescriptionError ); 
}

// 呼叫方收到 Answer
socket.on('message', function(message) { 
 if (message.type === 'answer') { 
   pc.setRemoteDescription(new RTCSessionDescription(message));
 }
})
```
