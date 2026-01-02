
document.addEventListener('DOMContentLoaded', function () {
    // Line chart (main)
    const lineCtx = document.getElementById('mainLineChart').getContext('2d');
    new Chart(lineCtx, {
        type: 'line',
        data: {
            labels: ['Lu','Ma','Me','Je','Ve','Sa','Di'],
            datasets: [
                { label: 'Non-haineux', data: [120,150,170,200,220,260,300], borderColor: '#60a5fa', backgroundColor: 'rgba(96,165,250,0.12)', fill: true, tension: 0.3 },
                { label: 'Haineux', data: [30,40,45,60,100,140,190], borderColor: '#f97316', backgroundColor: 'rgba(249,115,22,0.12)', fill: true, tension: 0.3 }
            ]
        },
        options: { responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}}, scales:{y:{beginAtZero:true}} }
    });

    // Donut chart (types)
    const donutCtx = document.getElementById('donutChart').getContext('2d');
    new Chart(donutCtx, {
        type: 'doughnut',
        data: {
            labels: ['Insultes','Haineux','Autres'],
            datasets: [{ data: [38,38,24], backgroundColor: ['#60a5fa','#f97316','#a78bfa'] }]
        },
        options: { responsive:true, maintainAspectRatio:false, cutout: '65%', plugins:{legend:{position:'bottom'}} }
    });

    // Recent messages (sample data)
    const recent = [
        { user: 'Avril Martin', text: "Dégage, retourne d'où tu viens 😡", score: 95, avatar: '' },
        { user: 'leo.ducharme', text: "Les gens comme toi sont tous des idiots #!%$", score: 89, avatar: '' },
        { user: 'Mary89', text: "Tu mérites de crever, sale #!$", score: 91, avatar: '' },
        { user: 'Thomas_R', text: "#$!@* tes messages sont NULS...", score: 87, avatar: '' }
    ];

    const container = document.getElementById('recentMessages');
    recent.forEach(item => {
        const el = document.createElement('div');
        el.className = 'flex items-start gap-3 p-3 bg-white rounded-md shadow-sm';
        el.innerHTML = `
            <div class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-sm font-bold">${(item.user[0]||'A').toUpperCase()}</div>
            <div class="flex-1">
                <div class="flex justify-between items-start">
                    <div>
                        <div class="font-bold">${item.user}</div>
                        <div class="text-sm text-slate-600">${item.text}</div>
                    </div>
                    <div class="bg-orange-500 text-white px-3 py-1 rounded-md font-bold">${item.score}</div>
                </div>
            </div>
        `;
        container.appendChild(el);
    });
});
