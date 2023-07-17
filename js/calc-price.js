$formatter = null;
$totalPrice = 0;
$(document).ready(function(){
    function calcPrice(){
        $engine = $('input[name="engine"]:checked').val();
        $transmission = $('input[name="transmission"]:checked').val();
        $package = $('input[name="package"]:checked').val();
        $engine = parseFloat($engine);
        $transmission = parseFloat($transmission);
        $package = parseFloat($package);

        $totalPrice = (`${$engine + $transmission + $package}`);

        $modelPrice = $("#modelPrice");
        
        $formatter = new Intl.NumberFormat("ru");

        $modelPrice.text(`${$formatter.format($totalPrice)} руб.`);
    }
    calcPrice();

    $("#autoForm input").on("change", function(){
        calcPrice();
    })

});