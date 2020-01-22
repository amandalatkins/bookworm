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

// Appends a message to the "Done Pile" if it is empty

if ($('.done-pile').text().trim() === "") {
    console.log("nothing in done pile");

    var names = [];
    $('.book:not(.no-books)').each(function() {
        names.push($(this).data('title'));
    });

    var html = `<div class="col-12 pb-2">`;
    html += `<p class="done-empty-caption">`;

    if (names.length) {
        var randIndex = Math.floor(Math.random() * names.length);
        var randTitle = names[randIndex];
        html += 'Grab a warm blanket, a hot cup of tea, and crack open <strong>'+randTitle+'</strong>! Bonus points if you\'re in a rocking chair.';
    } else {
        html += `Grab a warm blanket, a hot cup of tea, and crack open a book! Bonus points if you're in a rocking chair.`;
    }

    html += "</p></div>";

    $('.done-pile').html(html);

}

// Does the To-Read and Done counts

$('.count.done').text($('.done-pile .book').length);
$('.count.to-read').text($('.read-pile .book:not(.no-books)').length);