const box = document.querySelector('#box')
const chao = document.querySelector('.chao')

function geraRondom(min, max) {
    return Math.floor(Math.random()*(max - min) + min);
}

const criaVaca = (num)=>{
    for(let contador = 1;contador<=num; contador++){
        const rondom = geraRondom(0,900)
        const vaca = document.createElement('div')
        vaca.setAttribute('class','vaca '+contador)
        vaca.setAttribute('style','left:'+rondom+'px;')
        chao.appendChild(vaca)
    }
}

criaVaca(7)

let boxTop = 200;
let boxLeft = 200;

const atualizaNave = (tecla)=>{
    if(tecla === 'w') boxTop -=10
    if(tecla === 's') boxTop +=10
    if(tecla === 'a') boxLeft -=10
    if(tecla === 'd') boxLeft +=10
}

const movimentaNave = (boxTop,boxLeft)=>{
    box.style.top = boxTop + "px";
    box.style.left = boxLeft + "px";
}

const atirar = ()=>{
    box.appendChild(document.createElement('div')).classList.add('laser')
    setTimeout(()=>{
        const laser = document.querySelector('.laser')
        laser.remove()
    },100)
    
}

document.addEventListener('keydown',event =>{
    const tecla = event.key
    atualizaNave(tecla)
    movimentaNave(boxTop,boxLeft)
})

document.addEventListener('click', () =>{
    atirar()
})


const atualisaVaca = (item) =>{

    const escolheMovimento = geraRondom(0,2)
    const positionAtual = item.offsetLeft
    const movimento = [positionAtual+30,positionAtual-30]
    
    if(movimento<0)movimento+30
    if(movimento>900)movimento-30

    item.style.left = movimento[escolheMovimento]+'px'
}

const vacas = document.querySelectorAll('.vaca')
setInterval(()=>{
    vacas.forEach(item=>{
        atualisaVaca(item)
    })
},2000)

    







