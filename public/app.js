var validator = true

function move_animation(){
  let event_array = [document.getElementById('m-1'),document.getElementById('controller')].forEach(el => el.addEventListener('click',() =>{
    if(validator){
      move_right()
    }else{
      move_left()
    }
  }))
}

move_animation()

function move_left(){
  let div = document.getElementById("scroll")
  let line_1 = document.getElementById("m-1")
  let p1 = document.getElementById('p1')
  let p2 = document.getElementById('p2')
  let video = document.getElementById("video1")

  p1.style.visibility = "hidden"
  p2.style.visibility = "hidden"
  video.style.visibility = "hidden"

  p1.style.position = "absolute"
  p2.style.position = "absolute"
  video.style.position = "absolute"

  p1.style.opacity = "0"
  p1.style.opacity = "0"
  p2.style.opacity = "0"
  video.style.opacity = "0"

  validator = true
  let x = 100
  let i_1 = setInterval(()=>{
    if(x >= 0){
      x = x - 0.5
      line_1.style.left = x + "%"
      div.style.width = x + "%"
    }
    if(x <= 0){
      line_1.style.left = "-1%"
      window.clearInterval(i_1)
    }
  },0.1)
}


function move_right(){
  let div = document.getElementById("scroll")
  let line_1 = document.getElementById("m-1")
  let x = 0
  let i_1 = setInterval(()=>{
    if(x <= 99.5){
      x = x + 0.5
      line_1.style.left = x + "%"
      div.style.width = x + "%"
    }
    if(x == 100){
      line_1.style.left = "95%"
      text_draw()
      validator = false
      window.clearInterval(i_1)
    }
  },0.1)
}

function text_draw(){
  let p1 = document.getElementById('p1')
  let p2 = document.getElementById('p2')
  let video = document.getElementById("video1")
  p1.style.position = "relative"
  p2.style.position = "relative"
  video.style.position = "relative"
  p1.style.visibility = "visible"
  p2.style.visibility = "visible"
  video.style.visibility = "visible"
  let x = 0
  let i_2 = setInterval(()=>{
    x = x + 0.1
    p1.style.opacity = x
    p2.style.opacity = x
    video.style.opacity = x
      if(x >= 1){
        window.clearInterval(i_2)
      }
  },60)
}