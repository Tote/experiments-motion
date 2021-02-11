export default class CanvasAnimation extends HTMLElement{

    constructor(){
        super()
        this.shadow     = this.attachShadow({mode: 'open'})

        this.canvas     = document.createElement('canvas')
        this.ctx        = this.canvas.getContext('2d')
        
        this.height     = 0
        this.width      = 0
        
        this.shadow.appendChild(this.canvas)
        
        this.t = 0
    }

    snapTo(element){
        this.canvas.width  = element.clientWidth
        this.canvas.height = element.clientHeight
        this.width  = element.clientWidth
        this.height = element.clientHeight
    }

    runLoop(){
        this.canvas.width = this.width
        this.loop()
        window.requestAnimationFrame( this.runLoop.bind(this) )
    }

    loop(){

        this.ctx.fillRect(10,this.t++,10,10)

    }
}