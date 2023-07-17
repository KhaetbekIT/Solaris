$usdRate = 0;
$(document).ready(function(){
    $urlValuets = "https://www.cbr-xml-daily.ru/daily_json.js"
    console.log($urlValuets);
    $.ajax({
        url : $urlValuets,
        chache : false,
        success : function(data){
            // console.log(data);
            $usdRate = JSON.parse(data).Valute.USD.Value;
            
            calcPriceUSD($totalPrice, $usdRate);

            
            
        }
    });
    function calcPriceUSD(totalPrice, usdRate){
        $totalPriceUSD = totalPrice / usdRate;
    
        $totalPriceUSD = $totalPriceUSD.toFixed(2);
    
        // 
        $modelPriceUSD = $("#modelPriceUSD");
        $modelPriceUSD.text(`$ ${$formatter.format($totalPriceUSD)}`);
    }
    $("#autoForm input").on("change", function(){
        calcPriceUSD($totalPrice, $usdRate);
    });
});



