var validator = true
var active = false

document.getElementById('back').addEventListener('click',() => {
  if(validator === false && active === true){
    document.getElementById('back').style.visibility = "hidden"
    document.getElementById('back').style.position = "absolute"
    document.getElementById('back').style.opacity = "0"
    move_left()
    active = false
  }
})

function move_animation(){
  document.getElementById('controller').addEventListener('click',() =>{
    if(validator === true && active === false){
      active = true
      move_right()
    }

    if(validator === false && active === true){
      move_left()
      active = false
    }
  })
}

move_animation()

function move_left(){
  let div = document.getElementById("scroll")
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
      div.style.width = x + "%"
    }else{
      window.clearInterval(i_1)
    }
  },0.1)
}

function move_right(){
  let div = document.getElementById("scroll")
  let x = 0
  let i_1 = setInterval(()=>{
    if(x <= 99.5){
      x = x + 0.5
      div.style.width = x + "%"
    }
    if(x == 100){
      text_draw()
      validator = false
      window.clearInterval(i_1)
    }
  },0.1)
}

function text_draw(){
  let back = document.getElementById('back')
  back.style.visibility = "visible"
  let element_array = [document.getElementById('p1'),document.getElementById('p2'),document.getElementById("video1")]
  element_array.forEach(i => {
    i.style.position = "relative"
    i.style.visibility = "visible"
  })
  let x = 0
  let i_2 = setInterval(()=>{
    x = x + 0.1
    back.style.opacity = x
    element_array.forEach(i => i.style.opacity = x)
    if(x >= 1){
      window.clearInterval(i_2)
    }
  },60)
}

/*Comment to try the python script*/