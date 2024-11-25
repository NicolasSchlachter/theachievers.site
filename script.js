document.addEventListener('DOMContentLoaded', () => {
    // Chart rendering logic remains unchanged
    const years = ['2018', '2019', '2020', '2021', '2022'];
    const dataValues = [1200, 1250, 1300, 1280, 1350]; // Number of children with disabilities

    const chartCanvas = document.getElementById('disabilitiesChart');
    const pixelRatio = window.devicePixelRatio || 1;
    const width = 800; // Set desired width
    const height = 400; // Set desired height

    chartCanvas.width = width * pixelRatio; // Multiply by pixel ratio
    chartCanvas.height = height * pixelRatio; // Multiply by pixel ratio
    chartCanvas.style.width = `${width}px`; // Set CSS width
    chartCanvas.style.height = `${height}px`; // Set CSS height

    const ctx = chartCanvas.getContext('2d');
    ctx.scale(pixelRatio, pixelRatio); // Scale the canvas context for higher DPI

    // Render the chart
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: years,
            datasets: [{
                label: 'Children with Disabilities (per 1000 students)',
                data: dataValues,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                tension: 0.4
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: '#333',
                        font: {
                            size: 14
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#333'
                    },
                    title: {
                        display: true,
                        text: 'Number of Students',
                        color: '#555'
                    },
                    grid: {
                        color: '#ddd'
                    }
                },
                x: {
                    ticks: {
                        color: '#333'
                    },
                    title: {
                        display: true,
                        text: 'Year',
                        color: '#555'
                    },
                    grid: {
                        color: '#ddd'
                    }
                }
            }
        }
    });

    // Form submission logic using EmailJS SDK
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);

        // Replace with your EmailJS keys
        const serviceID = 'service_5bviupm';
        const templateID = 'template_djow30r';
        const userID = 'AAi49bahWOT7-W6zp';

        emailjs.send(serviceID, templateID, {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        }, userID)
        .then(() => {
            alert('Mesaj trimis cu succes!');
            form.reset();
        })
        .catch((error) => {
            console.error('Eroare:', error);
            alert('Eroare la trimiterea mesajului. Verificați consola pentru detalii.');
        });
    });
});
