// your code here:

// OBJECTIVE: Make it work

// Part A: Exercise 1
    var $list = $('.list');
    var $topList = $('#todo');
        console.log($list);
        console.log($topList);
    var $button = $('.btn');

    //On click, add #todo to top of list on button click
    $button.on("click", function(evt){
        evt.preventDefault();
        $list.prepend($topList);
        console.log('New chore added!');
    });