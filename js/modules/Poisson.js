
import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine un route
 */
export class Poisson extends AbstractForm {
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
  draw  (ctx) {
    ctx.save()
    

    this.poisson(ctx,this.x,this.y)

ctx.restore()

  }

poisson(ctx,dx,dy) {
    let ox = dx
    let oy = dy
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    let angle = Math.floor(Math.random() * 180)

    ctx.beginPath();
    // Effectuer une rotation autour du centre du poisson
  ctx.translate(ox, oy);
  ctx.rotate(angle * Math.PI / 180);
  ctx.translate(-ox, -oy);

  // Dessiner le corps du poisson
ctx.beginPath();
ctx.fillStyle = 'rgb('+r+','+g+','+b+')';
ctx.moveTo(ox+25, oy+50);
ctx.quadraticCurveTo(ox+50, oy+25, ox+75, oy+50);
ctx.quadraticCurveTo(ox+50, oy+75, ox+25, oy+50);
ctx.fill();

// Dessiner l'œil du poisson
ctx.beginPath();
ctx.fillStyle = '#ffffff';
ctx.arc(ox+62.5, oy+50, 5, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = '#000000';
ctx.arc(ox+62.5, oy+50, 2.5, 0, 2 * Math.PI);
ctx.fill();

// Dessiner la queue du poisson
ctx.beginPath();
ctx.moveTo(ox+25, oy+50);
ctx.lineTo(ox+20, oy+ 45);
ctx.lineTo(ox+20, oy+55);
ctx.fillStyle = 'rgb('+r+','+g+','+b+')';
ctx.fill();

  // Restaurer la transformation précédente du contexte
  ctx.restore();
}




  static buildForms() {

    let max = Math.floor(Math.random() * 90) +10// max in [10..100]
    let forms = []
      for (let i = 0; i < max; i++) {
        forms.push(
          new Poisson(
            ~~(Math.random() * 1400  ),
            Math.floor(Math.random() * 100) + 500

            
            
          )
        )
      }
    return forms
  }

}
    



