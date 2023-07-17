$(document).ready(function(){
    function modelSpecs(){

        $engine = $('input[name="engine"]:checked + label').text();
        $transmission = $('input[name="transmission"]:checked + label').text();
        $package = $('input[name="package"]:checked + label').text();

        $text = (`${$engine}, ${$transmission}, ${$package}.`)
        $modelSpecs = $("#modelSpecs");
        $modelSpecs.text($text);

    }
    modelSpecs();
    $("#autoForm input").on("change", function(){
        modelSpecs();
    })
});