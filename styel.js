// how to know window size you can see the my maximazing and minimizing

function bom1(){
   
    let sizes = window.innerWidth
    
    
     document.getElementById("bom1").innerHTML = sizes
    }
    
    
    // here is to show screen width and height of your screen and it doesn't change
    
    function bom2(){
    
        let heights = screen.width
        document.getElementById("bom2").innerHTML = heights
        
    
    }
    

    // here is to close the whole window
    function closes(){
    
        let closes= window.close()
       document.getElementById("clo").innerHTML = closes
    }
    
// here is to redirect to new path

function clod(){
    let lol =  window.location.assign("index2.html") //this will keep you to the google
    document.getElementById("clod").innerHTML = lol
}