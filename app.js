// $(function(){
//   $('.box1').slideDown();
//   $('.box1').hide();

// });


    $(function(){
        $('.box1').slideDown(2000,function() {
          // slideDownの後に動作するから中に入れた
            $('.box1').css({
                'background-color': '#0000FF',
                'width': '200px',
                'height': '100px'
            }).slideUp(3000);
        });
    });
