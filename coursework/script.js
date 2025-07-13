document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });

document.getElementById("contactForm").addEventListener("submit", (e) => {
                e.preventDefault();
                alert("Дзякуй за ваша паведамленне! Мы звяжамся з вамі ў бліжэйшы час.");
                e.target.reset();
            });

document.getElementById("bsu").addEventListener("click", function() {
    window.location.href = "https://bsu.by/"; 
});   

document.getElementById("bsuir").addEventListener("click", function() {
    window.location.href = "https://bsuir.by/"; 
});   

document.getElementById("bch").addEventListener("click", function() {
    window.location.href = "https://www.rw.by/"; 
}); 

document.getElementById("belinvest").addEventListener("click", function() {
    window.location.href = "https://www.belinvestbank.by/individual"; 
});


function createChart(canvasId, data) {
var ctx = document.getElementById(canvasId).getContext("2d");
new Chart(ctx, {
        type: "doughnut",
        data: {
            datasets: [{
                data: data,
                backgroundColor: ["#ffc600", "rgba(0, 0, 0, 0.1)"]
            }]
        }, 
        options: {
            plugins: {
                tooltip: {
                    enabled: false 
                }
            }
        }
    });
}

    createChart("chart1", [92, 8]);
    createChart("chart2", [87, 13]);
    createChart("chart3", [2, 12]);
    createChart("chart4", [75, 25]);

    
    