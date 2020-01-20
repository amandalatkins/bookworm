console.log("test");

$(".read-me").on("click",function(e) {
    e.preventDefault();
    console.log($(this).data());
});

$(".delete-me").on("click",function(e) {
    e.preventDefault();
    console.log($(this).data());
});