var validator = true
var active = false

function move_animation(){
  let event_array = [document.getElementById('m-1'),document.getElementById('controller')].forEach(el => el.addEventListener('click',() =>{
    if(validator === true && active === false){
      active = true
      move_right()
    }

    if(validator === false && active === true){
      move_left()
      active = false
    }
  }))
}

move_animation()

function move_left(){
  let div = document.getElementById("scroll")
  let line_1 = document.getElementById("m-1")
  let element_array = [document.getElementById('p1'),document.getElementById('p2'),document.getElementById("video1")].forEach(i => {
    i.style.visibility = "hidden"
    i.style.position = "absolute"
    i.style.opacity = "0"
  })
  validator = true
  let x = 100
  let i_1 = setInterval(()=>{
    if(x > 0){
      x = x - 0.5
      line_1.style.left = x + "%"
      div.style.width = x + "%"
    }else{
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
  let element_array = [document.getElementById('p1'),document.getElementById('p2'),document.getElementById("video1")]
  element_array.forEach(i => {
    i.style.position = "relative"
    i.style.visibility = "visible"
  })
  let x = 0
  let i_2 = setInterval(()=>{
    x = x + 0.1
    element_array.forEach(i => i.style.opacity = x)
    if(x >= 1){
      window.clearInterval(i_2)
    }
  },60)
}