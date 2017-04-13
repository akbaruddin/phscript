// guides to Bottom
function gridsBottom(){

    var doc = app.activeDocument; // save refrence of active document to var
    var docHeight = doc.height;
    var posH =  Number(prompt ('Enter position pos(px): ', 50));
    
    doc.guides.add(Direction.HORIZONTAL, docHeight - posH);
    
}

if(app.documents.length != 0){
    // our entire code will go here
    gridsBottom();
} else{
    // No active document exists
    
   var t = prompt ('You want to create page(yes/no): ', 'Yes');
   if(t == "Yes" || t == "yes"){
   var docRef = app.documents.add( 1280, 1024 );
   gridsBottom();
   docRef = null;
   }
}
