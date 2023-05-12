
import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine un route
 */
export class Eau extends AbstractForm {
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

 // Dessin de la eau
    ctx.fillStyle = 'skyblue';
    ctx.fillRect(0, 350, 10000, 50000);
    

ctx.restore()

  }



  static buildForms() {
    const myEau = new Eau(0,350,10000,100,"","",1,true)
    const forms = [myEau]
    return forms
  }

}
    



