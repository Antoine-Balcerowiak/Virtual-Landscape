
import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine un smiley
 */
export class Smiley extends AbstractForm {
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

let smiley=Math.floor(Math.random() * 3)+1
if (smiley==1){
  this.smiley1(ctx,this.x,this.y)
}
if (smiley==2){
  this.smiley2(ctx,this.x,this.y)
}
if (smiley==3){
  this.smiley3(ctx,this.x,this.y)
}



ctx.restore()

  }




    
smiley1 (ctx,dx,dy){
    let ox = dx
    let oy = dy
    
    ctx.beginPath();
                ctx.arc(ox + 50, oy + 50, 50, 0, Math.PI * 2, true);  // Cercle extérieur
                ctx.moveTo(ox + 15, oy + 55);
                ctx.arc(ox + 50, oy + 55, 35, 0, Math.PI, false);  // Bouche (sens horaire)
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(ox + 25, oy + 25);
                ctx.arc(ox + 30, oy + 20, 5, 0, Math.PI * 2, true);  // Oeil gauche
                ctx.moveTo(ox + 60, oy + 25);
                ctx.arc(ox + 65, oy + 40, 5, 0, Math.PI * 2, true);  // Oeil droite
                ctx.fill();

                // oeil
                ctx.beginPath();
                ctx.arc(ox + 30, oy + 30, 15, 0, Math.PI * 2, true); // contour oeil gauche
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(ox + 65, oy + 30, 15, 0, Math.PI * 2, true); // contour oeil droit
                ctx.stroke();

    
  }

  smiley2 (ctx,dx,dy){
    let ox = dx
    let oy = dy
    
    ctx.beginPath();
                ctx.fillStyle = 'pink';
                ctx.arc(ox + 50, oy + 50, 50, 0, Math.PI * 2, true);  // Cercle extérieur
                ctx.fill();

                ctx.beginPath();
                ctx.fillStyle = 'black';
                ctx.arc(ox + 50, oy + 70, 25, 0, Math.PI*2, true);  // Bouche (sens horaire)
                ctx.fill();

                ctx.beginPath();
                ctx.fillStyle = 'red';
                ctx.arc(ox + 50, oy + 85, 10, 0, Math.PI*2, true);  // langue (sens horaire)
                ctx.fill();

                ctx.beginPath();
                ctx.fillStyle = '#87CEEB';
                ctx.moveTo(ox + 25, oy + 25);
                ctx.arc(ox + 30, oy + 25, 5, 0, Math.PI * 2, true);  // Oeil gauche
                ctx.moveTo(ox + 60, oy + 25);
                ctx.arc(ox + 65, oy + 25, 5, 0, Math.PI * 2, true);  // Oeil droite
                ctx.fill();

                // chapeau
                ctx.fillStyle = 'green';
                ctx.beginPath();
                ctx.moveTo(ox + 25, oy + 5);
                ctx.lineTo(ox + 50, oy - 35);
                ctx.lineTo(ox + 75, oy + 5);
                ctx.fill();

                ctx.beginPath();
                ctx.fillStyle = 'red';
                ctx.arc(ox + 50, oy + -35, 10, 0, Math.PI*2, true);  // ponpon
                ctx.fill();

    
  }


  smiley3 (ctx,dx,dy){
    let ox = dx
    let oy = dy
    
    ctx.beginPath();
    ctx.beginPath();
    ctx.fillStyle = 'yellow';
    ctx.arc(ox + 50, oy + 50, 50, 0, Math.PI * 2, true);  // Cercle extérieur
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.moveTo(ox + 15, oy + 55);
    ctx.arc(ox + 50, oy + 55, 35, 0, Math.PI, false);  // Bouche (sens horaire)  // Bouche (sens horaire)
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.moveTo(ox + 45, oy + 25);
    ctx.arc(ox + 50, oy + 25, 10, 0, Math.PI * 2, true);  // Oeil  
    ctx.fill();

    
  }




 /**
   * get array of instances of this classe 
   * @return {[smiley,...]}
   */
  
    static buildForms() {
      
      
      let max = Math.floor(Math.random() * 4) +1// max in [1..5]
      
      let forms = []
      for (let i = 0; i < max; i++) {
        forms.push(
          new Smiley(
            ~~(Math.random() * 1000  ),
            ~~(Math.random() * 550 ),

            
            
          )
        )
      }
      // retourne un tableau d'objets de type Smiley
      return forms
    }
}