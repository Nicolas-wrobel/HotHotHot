toHistoricEntry() {
    let tempEntry = document.importNode(Temperature.historicEntryTemplate.content, true)
        .querySelector('button');

    let cells = tempEntry.querySelectorAll('td');

    cells[0].innerText = this._val + '°C';
    cells[1].innerText = this._sensor;
    cells[2].innerText = this._date.toLocaleString();

    Temperature.historicTableBody.append(tempEntry);
};