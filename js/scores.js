function loadScores() {
    let scores = [];
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
        scores = JSON.parse(scoresText);
    }

    const tableBodyElement = document.querySelector('#scores');

    if (scores.length) {
        for (const [i, score] of scores.entries()) {
            const positionTdElement = document.createElement('td');
            const nameTdElement = document.createElement('td');
            const scoreTdElement = document.createElement('td');
            const dateTdElement = document.createElement('td');

            positionTdElement.textContent = i + 1;
            nameTdElement.textContent = score.name;
            scoreTdElement.textContent = score.score;
            dateTdElement.textContent = score.date + " " + score.time;

            const rowElement = document.createElement('tr');
            rowElement.appendChild(positionTdElement);
            rowElement.appendChild(nameTdElement);
            rowElement.appendChild(scoreTdElement);
            rowElement.appendChild(dateTdElement);

            tableBodyElement.appendChild(rowElement);
        }
    } else {
        tableBodyElement.innerHTML = '<tr><td colSpan=4>No scores yet!</td></tr>'
    }
}

loadScores();