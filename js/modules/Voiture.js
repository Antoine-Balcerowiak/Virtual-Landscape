
import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine un route
 */
export class Voiture extends AbstractForm {
   constructor (
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 2,
    pesenteur = false,
    odreConstruction = 100
  ) {
    super(x,y,width, height, fillColor, strokeColor, strokeWidth, pesenteur, odreConstruction)
  }

 /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  draw (ctx) {
     
    ctx.save()

    this.Voiture(ctx,this.x,this.y)


    

ctx.restore()

  }

Voiture(ctx,dx,dy) {

let ox = dx
let oy = dy

let r = Math.floor(Math.random() * 256)
let g = Math.floor(Math.random() * 256)
let b = Math.floor(Math.random() * 256)
// Dessin de la voiture
ctx.fillStyle = 'rgb('+r+','+g+','+b+')';
ctx.fillRect(20 + ox, oy+330, 120, 40);

ctx.fillStyle = "white";
ctx.fillRect(25 + ox, oy+335, 30, 20);
ctx.fillRect(85 + ox, oy+335, 30, 20);


ctx.beginPath();
ctx.arc(40 + ox, oy+375, 10, 0, Math.PI*2, true);
ctx.arc(100 + ox, oy+375, 10, 0, Math.PI*2, true);
ctx.fillStyle = "gray";
ctx.fill();
}




static buildForms() {

    let max = Math.floor(Math.random() * 9) +1// max in [1..10]
    let forms = []
      for (let i = 0; i < max; i++) {
        forms.push(
          new Voiture(
            ~~(Math.random() * 1400  ),
            Math.floor(Math.random() * 60)

           

            
            
          )
        )
      }
    return forms
  }

}
    




