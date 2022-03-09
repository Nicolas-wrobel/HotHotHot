class Temperature {
    static historicEntryTemplate = document.getElementById('entry-template');
    static historicTableBody = document.getElementById('historic').querySelector('tbody');

    constructor(val, sensor, date) {
        this._val = val;
        this._sensor = sensor;
        if (date !== undefined) {
            this.#initHistEntryPart(date);
        }
    };

    #initHistEntryPart() {
        this._date = date;
    }

    get val() {
        return this._val;
    }

    get sensor() {
        return this._sensor;
    }

    get date() {
        return this._date;
    }
}