const uploaderMobile1 = new Uploader({
  el:document.getElementById("upload-button-mobile1"), // 用于触发上传选择的元素
  // headers: {},
  env: 'mobile', // pc 端 mobile 移动端
  limit: 3, // 最大上传数量
  chunkSize: 1024 * 2, //2kb的分片，默认分片大小为5M
  path: '/backend/storage/upload/prepare', // 服务器上传地址，请配置相关代理
  accept: 'image/*', // 接收的可上传的文件类型
  multiple:true, // 是否可进行多选
  getDetail:true // 是否获取文件详情
})
// loaded 上传的文件对应的进度百分比(0--100) number类型
uploaderMobile1.$on('progress', (loaded, file, index) => {
  console.log('progress',loaded, file, index)
})
uploaderMobile1.$on('md5', (files) => {
  console.log('md5', files)
})
// 上传完成
uploaderMobile1.$on('success', (file, index) => {
  console.log('success', file, index)
})
// 上传暂停
uploaderMobile1.$on('pause', (file, index) => {
  console.log('pause', file, index)
})

// 获取文件上传成功后的详细信息，需要设置getDetail为true才会触发此事件
uploaderMobile1.$on('detail', (fileDetail, index) => {
  console.log('detail', fileDetail, index)
})
