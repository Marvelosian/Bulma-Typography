var weights= "has-text-weight-light has-text-weight-normal has-text-weight-medium has-text-weight-semibold has-text-weight-bold";
var transforms= "is-capitalized is-lowercase is-uppercase is-italic";

//transforms
$('#capitalized').on('click', function(){
    $('.title,.subtitle').removeClass(transforms);
    $('.title,.subtitle').toggleClass("is-capitalized");
    console.log("is-capitalized");
});
$('#lowercase').on('click', function(){
    $('.title,.subtitle').removeClass(transforms);
    $('.title,.subtitle').toggleClass("is-lowercase");
    console.log("is-lowercase");
});
$('#uppercase').on('click', function(){
    $('.title,.subtitle').removeClass(transforms);
    $('.title,.subtitle').toggleClass("is-uppercase");
    console.log("is-uppercase");
});
$('#italic').on('click', function(){
    $('.title,.subtitle').removeClass(transforms);
    $('.title,.subtitle').toggleClass("is-italic");
    console.log("is-italic");
});
/* 
is-capitalized	Transforms the first character of each word to uppercase
is-lowercase	Transforms all characters to lowercase
is-uppercase	Transforms all characters to uppercase
is-italic	Transforms all characters to italic
*/

//weights 
$('#light').on('click', function(){
    $('.title,.subtitle').removeClass(weights);
    $('.title,.subtitle').toggleClass("has-text-weight-light");
    console.log("has-text-weight-light");
});
$('#normal').on('click', function(){
    $('.title,.subtitle').removeClass(weights);
    $('.title,.subtitle').toggleClass("has-text-weight-normal");
    console.log("has-text-weight-normal");
});
$('#medium').on('click', function(){
    $('.title,.subtitle').removeClass(weights);
    $('.title,.subtitle').toggleClass("has-text-weight-medium");
    console.log("has-text-weight-medium");
});

$('#semibold').on('click', function(){
    $('.title,.subtitle').removeClass(weights);
    $('.title,.subtitle').toggleClass("has-text-weight-semibold");
    console.log("has-text-weight-semibold");
});

$('#bold').on('click', function(){
    $('.title,.subtitle').removeClass(weights);
    $('.title,.subtitle').toggleClass("has-text-weight-bold");
    console.log("has-text-weight-bold");
});

/* 
has-text-weight-light	Transforms text weight to light
has-text-weight-normal	Transforms text weight to normal
has-text-weight-medium	Transforms text weight to medium
has-text-weight-semibold	Transforms text weight to semi-bold
has-text-weight-bold	Transforms text weight to bold
*/



/*
is-family-sans-serif	Sets font family to $family-sans-serif
is-family-monospace	Sets font family to $family-monospace
is-family-primary	Sets font family to $family-primary
is-family-secondary	Sets font family to $family-secondary
is-family-code	Sets font family to $family-code
*/