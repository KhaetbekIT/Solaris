$(document).ready(function(){
    $("#colorsSelector .colorItem").on("click", function(){
        $srcPath = $(this).attr("data-img-path");
        $("#imgHolder img").attr("src", $srcPath);

        // alert($srcPath);
    });
});