document.addEventListener('DOMContentLoaded', () => {
    // Data for the chart (mocked for now)
    const years = ['2018', '2019', '2020', '2021', '2022'];
    const dataValues = [1200, 1250, 1300, 1280, 1350]; // Number of children with disabilities

    // Chart rendering
    const ctx = document.getElementById('disabilitiesChart').getContext('2d');
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
            responsive: true,
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

    // Form submission logic
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(form);

        try {
            const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    service_id: 'service_5bviupm',  // Replace with your service ID
                    template_id: 'template_djow30r',  // Replace with your template ID
                    user_id: 'AAi49bahWOT7-W6zp',  // Replace with your user ID
                    template_params: {
                        name: formData.get('name'),
                        email: formData.get('email'),
                        message: formData.get('message')
                    }
                })
            });

            if (response.ok) {
                alert("Mesaj trimis cu succes!");
                form.reset();
            } else {
                throw new Error("Eroare la trimiterea mesajului.");
            }
        } catch (error) {
            alert(error.message);
        }
    });
});
