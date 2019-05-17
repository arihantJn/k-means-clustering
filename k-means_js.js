window.onload = function() {
            var dps = []; //dataPoints. 

            var chart = new CanvasJS.Chart("chartContainer", {
                title: {
                    text: "Taking DataPoints from User Input"
                },
                data: [{
                    type: "scatter",
                    dataPoints: dps
                }]
            });

            function plotDataset() {
                xValue = Number(document.getElementById("x_value").value);
                yValue = Number(document.getElementById("y_value").value);
                dps.push({
                    x: xValue,
                    y: yValue
                });
                chart.render();
            }

            var plot = document.getElementById("plot_dataset");
            plot.addEventListener("click", plotDataset);
        }