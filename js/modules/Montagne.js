
import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine un Montagne
 */
export class Montagne extends AbstractForm {
   constructor (
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 2,
    pesenteur = false,
    odreConstruction = 1
  ) {
    super(x,y,width, height, fillColor, strokeColor, strokeWidth, pesenteur, odreConstruction)
  }

 /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  draw (ctx) {
     
    ctx.save()

    this.Montagne(ctx,this.x,this.y)

ctx.restore()

  }

Montagne(ctx,dx,dy) {

let ox = dx
let oy = dy
ctx.beginPath();
ctx.moveTo(ox+0, 350);
ctx.lineTo(ox+150,oy+0);
ctx.lineTo(ox+300, 350);
ctx.fillStyle = "gray";
ctx.fill();
}



  static buildForms() {
    let max = Math.floor(Math.random() * 10) + 60;// max in [60..70]
    let forms = []
      for (let i = 0; i < max; i++) {
        forms.push(
          new Montagne(
            ~~(Math.random() * 1400  ),
            Math.floor(Math.random() * 201)

            
            
          )
        )
      }
    return forms
  }

}
    



