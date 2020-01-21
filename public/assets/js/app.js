console.log("test");

$(".read-me").on("click",function(e) {
    e.preventDefault();

    $.ajax({
        type: "PUT",
        url: "/api/books/"+$(this).data('id'),
        data: { isRead: 1 }
    }).then(data => {
        console.log(data);
        location.reload();
    });

});

$(".delete-me").on("click",function(e) {
    e.preventDefault();
    $.ajax({
        type: "DELETE",
        url: "/api/books/"+$(this).data('id')
    }).then(data => {
        console.log(data);
        location.reload();
    });
});

$('#addNewBook').on("click",function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "/api/books",
        data: {
            name: $('#bookName').val().trim(),
            link: $('#bookLink').val().trim()
        }
    }).then(data => location.reload());
});

$(".read-me-again").on("click", function(e) {
    e.preventDefault();
    $.ajax({
        type: "PUT",
        url: "/api/books/"+$(this).data('id'),
        data: { isRead: 0 }
    }).then(data => {
        location.reload();
    });
});

var classes = ["red","blue","yellow","purple","teal"];
var i = 0;
$('.book').each(function(book) { 
    if (i === classes.length) i = 0;
    $(this).addClass(classes[i]);
    i++;
});