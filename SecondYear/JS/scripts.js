function FSubmit() {
    alert("Thank you, your answer has been submited.");
};

$(document).ready(function () {
    $("#NoDog").hide();
    $("#MyDog").hide();

    $("#AddDog, #NoDog").click(function () {
        $("#MyDog").toggle("slow");
        $("#AddDog").toggle();
        $("#NoDog").toggle();
    });
});
