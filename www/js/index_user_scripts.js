/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  Materi */
    
    
        /* button  Soal */
    
    
        /* button  Materi */
    
    
        /* button  Soal */
    
    
        /* button  Materi */
    
    
        /* button  Soal */
    
    
        /* button  Kembali */
    
    
        /* button  Kembali */
    
    
        /* button  Soal */
    
    
        /* button  Soal */
    
    
        /* button  Materi */
    
    
        /* button  Materi */
    
    
        /* button  Soal */
    
    
        /* button  Kembali */
    $(document).on("click", ".uib_w_7", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#uib_page_1"); 
         return false;
    });
    
        /* button  Kembali */
    $(document).on("click", ".uib_w_10", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#uib_page_1"); 
         return false;
    });
    
        /* button  Materi */
    
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
