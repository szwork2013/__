
// top.injectI('ww')

// document.addEventListener("DOMContentLoaded", function(event) {
//   alert("DOM fully loaded and parsed");
// });
// 如果在 manifest 中设置了 "run_at": "document_end" ，此时已经出发过 DOMContentLoaded 事件
// 可以直接向父页面传消息
parent.postMessage(JSON.stringify({data: 'domReady'}), '*')

// 从父页面接收消息
window.addEventListener('message',function(e) {
  if (e.origin.indexOf('chrome-extension://kflngenhcdbcgiinadgedmfpkgpcgjkc') === 0 && 
  JSON.parse(e.data).data === 'rm_ad') {
    // 接收到来自扩展的命令
    ce.getFileContent(chrome.extension.getURL('/inject.css'), function (content) {
      ce.addStyle(content);
    })
  }
}, false);