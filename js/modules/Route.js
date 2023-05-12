
import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine un route
 */
export class Route extends AbstractForm {
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

 // Dessin de la route
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 350 , 100000, 100);
    for (let i = 0; i < 100; i++) {
      ctx.fillStyle = 'yellow';
      ctx.fillRect(100 * i + 50, 400, 50, 10);
    }

ctx.restore()

  }



  static buildForms() {
    const myRoute = new Route(0,350,10000,100,"","",1,true)
    const forms = [myRoute]
    return forms
  }

}
    



