
$(function () {



$("#div1").css({
    backgroundColor: "yellow" ,
    border : '2px solid red',
    width : 300,
    height : 300
})




$("#drag").draggable({
   
    revert : "invalid"
})

$("#div1").droppable({

    accept: "#drag",
    drop: function(event) {   
        $(this).css({
            backgroundColor:"gray" ,
            border :'2px solid blue'
        });
    }
});

  
})



