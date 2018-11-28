console.log('JS Loaded')

// var $lastLi = $('li:last-child');
// console.log($lastLi);

var $li = $('li');
// // var $lastLi = $li[$li.length-1];
// // console.log($lastLi);

// $li.fadeOut()
// $li.fadeIn()

var li = $li[0];

var $el = $(li);
$el.fadeOut();
$(li).fadeIn();

$el.hide();
$el.show();
$el.toggle(function() {
    console.log('toggled');
});

