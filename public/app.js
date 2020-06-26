var validator = true
let tarjeta = document.getElementById('m-1').addEventListener('click',()=>{
  if(validator){
    validator = false
    div()
  }else{
    div_reverse()
  }
})

let boton = document.getElementById('controller').addEventListener('click',()=>{
  if(validator){
    validator = false
    div()
  }else{
    div_reverse()
  }
})

function div_reverse(){
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
    let y = 100
    let inter = setInterval(()=>{
      y = y - 0.5
      if(y >= 0){
        line_1.style.left = y + "%"
      }

    if(x >= 0){
      x = x - 0.5
      let cadena = x.toString()
      div.style.width = cadena + "%"
    }
    if(x == 0){
      line_1.style.left = "-1%%"
      inter2_reverse()
      window.clearInterval(inter)
    }
  },0.1)

}

function inter2_reverse(){
}

/* PAgina 1*/
function div(){
  let div = document.getElementById("scroll")
  let line_1 = document.getElementById("m-1")
  let x = 0
  let y = 0
  let inter = setInterval(()=>{
    y = y + 0.5
    if(y <= 100){
      line_1.style.left = y + "%"
    }

    if(x <= 99.5){
      x = x + 0.5
      let cadena = x.toString()
      div.style.width = cadena + "%"
    }
    if(x == 100){
      line_1.style.left = "95%"
      inter2()
      window.clearInterval(inter)
    }
  },0.1)
}

function inter2(){
  let p1 = document.getElementById('p1')
  let p2 = document.getElementById('p2')
  let video = document.getElementById("video1")

  p1.style.position = "relative"
  p2.style.position = "relative"
  video.style.position = "relative"

  p1.style.visibility = "visible"
  p2.style.visibility = "visible"
  video.style.visibility = "visible"

  console.log("llegaste hasta aqui")
  let x = 0
  let inter2 = setInterval(()=>{
    x = x + 0.1
    let cadena = x.toString()
    p1.style.opacity = cadena
    p2.style.opacity = cadena
    video.style.opacity = cadena
      if(x >= 1){
        window.clearInterval(inter2)
      }
  },60)
}


/*
  OTRA FUNCION
*/





