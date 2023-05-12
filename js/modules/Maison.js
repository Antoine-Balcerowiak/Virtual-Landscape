
import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine un Maison
 */
export class Maison extends AbstractForm {
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
    for (let i = 0; i < 1400; i=i+200) {
      let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
      // Dessiner le toit de la maison
      ctx.beginPath();
      ctx.moveTo(i, 250);
      ctx.lineTo(i + 50, 202);
      ctx.lineTo(i + 100, 250);
      ctx.closePath();
      ctx.fillStyle = 'rgb('+r+','+g+','+b+')';
      ctx.fill();
      // Dessiner du carré de la maison
      ctx.fillStyle = 'rgb('+r+','+g+','+b+')';
      ctx.fillRect(i, 250, 100, 100);
      // Dessiner la porte
      ctx.fillStyle = "#cc6600";
      ctx.fillRect(i + 25, 300, 50, 50);
      // Dessiner la fenêtre
      ctx.fillStyle = "white";
      ctx.fillRect(i + 10, 260, 30, 30);
      // Dessiner la croix sur la fenêtre centrée
      ctx.beginPath();
      ctx.moveTo(i + 10, 275);
      ctx.lineTo(i + 40, 275);
      ctx.moveTo(i + 25, 260);
      ctx.lineTo(i + 25, 290);
      ctx.strokeStyle = "black";
      ctx.stroke();
      // Dessiner la poignée de porte
      ctx.beginPath();
      ctx.arc(i + 40, 325, 5, 0, Math.PI * 2);
      ctx.fillStyle = "#000000";
      ctx.fill();
    }
ctx.restore()

  }
  static buildForms() {
    const myMaison = new Maison(0,350,10000,100,"","",1,true)
    const forms = [myMaison]
    return forms
  }

}
    




