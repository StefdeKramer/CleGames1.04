/**
 * Utils
 */
class Utils {
    //
    // kijk of twee objecten elkaar raken
    // dit moeten objecten zijn die een public x, y, width en height hebben
    // met overerving kunnen we gaan zorgen dat je hier ook andere objecten behalve ball en paddle aan kan geven
    //
    isOverlap(pad:Paddle, rec:Ball): boolean {
      // return !(c2.posX > c1.posX + c1.width || c2.posX + c2.width < c1.posX || c2.posY > c1.posY + c1.height || c2.posY + c2.height < c1.posY);
        
        // this   pad
        
         return (pad.posX < rec.posX + rec.width && pad.posX + pad.width > rec.posX && pad.posY < rec.posY + rec.height && pad.height + pad.posY > rec.posY);
    }
}