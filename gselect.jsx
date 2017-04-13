// guides to Select Object or Layer
function guidSelect(){

    var doc = app.activeDocument; // save refrence of active document to var
    var posH =  Number(prompt ('Enter position pos(px): ', 50));
    var sLayer = app.activeDocument.activeLayer;
    var y = sLayer.bounds[1];
    var objH = sLayer.bounds[3]-sLayer.bounds[1];
    doc.guides.add(Direction.HORIZONTAL, y + objH + posH);
    
}

if(app.documents.length != 0){
    // our entire code will go here
    guidSelect();
} else{
    // No active document exists
    
   var t = prompt ('You want to create page(yes/no): ', 'Yes');
   if(t == "Yes" || t == "yes"){
   var docRef = app.documents.add( 1280, 1024, 72 );
   guidSelect();
   docRef = null;
   }
}
