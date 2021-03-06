function gridsCreate(){
    
    var space = 10;
    var doc = app.activeDocument; // save refrence of active document to var
    var docWidth = doc.width; // get the width of the document and stores it in "docWidth"
    
    var docXcenter = docWidth / 2;
    
    // Get layout width frokm user. Default to 960px.
    var layoutWidth =  Number(prompt ('Enter layout width: ', 960));
    // This gets number of colums from user. Most appropriately 12, 16, or.
    var cols = Number(prompt ('Enter numbers of columns: ', 12));
    // Gets margins from left right from user. Which will later be doubled.
    var margin = Number(prompt('ENter space between colmuns: ', 10));
    
    var gutter = space * 2;
    // Calculates the horzontal center of the layout and so the center of document 
    var layoutHalf = layoutWidth / 2;
    
    // outer limits that is the layout width;
    var maxLimitOuter = docXcenter + layoutHalf;
    var minLimitOuter = docXcenter - layoutHalf;
    
    // Inner limits for 960gs
    var minLimitInner  = minLimitOuter + space;
    var maxLimitInner = maxLimitOuter  - space;
    
    // columns width
    var colWidth = (layoutWidth - (cols * gutter)) / cols;
    
    doc.guides.add(Direction.VERTICAL, minLimitOuter);
    doc.guides.add(Direction.VERTICAL, maxLimitOuter);
    
    
    for(i = 0; i < cols; i++){
         var guidPos = minLimitInner + ((colWidth + gutter) * i);
         if(guidPos > maxLimitInner){
                break;
             }
         doc.guides.add(Direction.VERTICAL, Number (guidPos));
     }
     var multiply = 1;
     for(j = 0; j < cols; j++){
            if(j == 0){
                       multiply = 0;
                }
            temp_gutter = (gutter * multiply);
            guidPos = ( minLimitOuter - space ) + ( (colWidth + gutter) * (j +1));
            
            if(guidPos > maxLimitInner){
                        break;
                }
            doc.guides.add(Direction.VERTICAL, Number (guidPos));
         }

    
}

preferences.rulerUnits = Units.PIXELS;
if(app.documents.length != 0){
    // our entire code will go here
    gridsCreate();
} else{
    // No active document exists
    
   var t = prompt ('You want to create page(yes/no): ', 'Yes');
   if(t == "Yes" || t == "yes"){
   var docRef = app.documents.add( 1280, 1024 );
    gridsCreate();
   docRef = null;
   }
}

