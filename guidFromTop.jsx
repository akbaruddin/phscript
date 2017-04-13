// guides to top
function gridsTop(){

    var doc = app.activeDocument; // save refrence of active document to var
    var posH =  Number(prompt ('Enter position pos(px): ', 50));
    
    doc.guides.add(Direction.HORIZONTAL, posH);
    
}

if(app.documents.length != 0){
    // our entire code will go here
    gridsTop();
} else{
    // No active document exists
    
   var t = prompt ('You want to create page(yes/no): ', 'Yes');
   if(t == "Yes" || t == "yes"){
   var docRef = app.documents.add( 1280, 1024 );
    gridsTop();
   docRef = null;
   }
}
