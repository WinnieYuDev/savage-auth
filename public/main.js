var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var thumbDown = document.getElementsByClassName("fa-thumbs-down");
var trash = document.getElementsByClassName("fa-trash");

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const counter = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        fetch('messages/thumbUp', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'counter':counter
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

//added thumbs down feature
Array.from(thumbDown).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText //name
        const msg = this.parentNode.parentNode.childNodes[3].innerText //msg
        const counter = parseFloat(this.parentNode.parentNode.childNodes[5].innerText) //counter
        fetch('messages/thumbDown', { // give information from click to server.js app.put('/messages/down')
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({ //sending to app.put('/messages/down') in key:value pairs
            'name': name, //Winnie
            'msg': msg, //Hello
            'counter': counter //18
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log("Thumbs Down", data)
          window.location.reload(true)
        })
      });
});

Array.from(trash).forEach(function(element) {   console.log('DELETE route hit');
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'msg': msg
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
