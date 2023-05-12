import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine un Homme
 */
export class Homme extends AbstractForm {
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

 // Variables pour la position de l'homme
var x = 50;
var y = 2700;

// Dessiner la tête
ctx.beginPath();
ctx.arc(100 + x, 100 + y, 50, 0, 2 * Math.PI);
ctx.fillStyle = "#ffe0bd";
ctx.fill();
ctx.stroke();

// Dessiner le corps
ctx.beginPath();
ctx.rect(75 + x, 150 + y, 50, 100);
ctx.fillStyle = "#ffe0bd";
ctx.fill();
ctx.stroke();

// Dessiner les bras
ctx.beginPath();
ctx.rect(30 + x, 150 + y, 90, 20);
ctx.fillStyle = "#ffe0bd";
ctx.fill();
ctx.stroke();

// Dessiner les jambes
ctx.beginPath();
ctx.rect(75 + x, 250 + y, 20, 100);
ctx.rect(105 + x, 250 + y, 20, 100);
ctx.fillStyle = "#ffe0bd";
ctx.fill();
ctx.stroke();

// Dessiner la tête
ctx.beginPath();
ctx.arc(100 + x, 100 + y, 50, 0, 2 * Math.PI);
ctx.fillStyle = "#ffe0bd";
ctx.fill();
ctx.stroke();

// Dessiner les yeux
ctx.beginPath();
ctx.moveTo(75 + x, 85 + y);
ctx.lineTo(85 + x, 95 + y);
ctx.moveTo(85 + x, 85 + y);
ctx.lineTo(75 + x, 95 + y);
ctx.moveTo(115 + x, 85 + y);
ctx.lineTo(125 + x, 95 + y);
ctx.moveTo(125 + x, 85 + y);
ctx.lineTo(115 + x, 95 + y);
ctx.strokeStyle = "black";
ctx.stroke();

// Dessiner la bouche
ctx.beginPath();
ctx.moveTo(80 + x, 110 + y);
ctx.quadraticCurveTo(100 + x, 130 + y, 120 + x, 110 + y);
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.stroke();

// Dessiner un rectangle gris en bas des jambes
ctx.beginPath();
ctx.rect(70 + x, 350 + y, 60, -50);
ctx.fillStyle = "grey";
ctx.fill();
ctx.stroke();

ctx.restore()

  }



  static buildForms() {
    const myHomme = new Homme(0,350,10000,100,"","",1,true)
    const forms = [myHomme]
    return forms
  }

}
    



