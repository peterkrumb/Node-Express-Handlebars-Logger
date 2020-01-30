$(function() {
    $(".change-state").on("click", function(event) {
        var id = $(this).data("id");
        var newListened = $(this).data("newSong");

        var newListenedState = {
            listened: true
        };

        // Update the song state to "listened"
        $.ajax("/api/songs/" + id, {
            type: "PUT",
            data: newListenedState
        }).then(
            function() {
                console.log("changed listened state to", newListened);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newSong = {
            choice: $("#ipod").val().trim(),
            listened: false
        };

        // Send the POST request.
        $.ajax("/api/songs", {
            type: "POST",
            data: newSong
        }).then(
            function() {
                console.log("created new song");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

})