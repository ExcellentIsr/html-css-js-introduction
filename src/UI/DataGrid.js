export default class DataGrid {
    #idBodyElement;
    #keys;
    constructor(fromFormData, parentId, columns) {
        //columns array of objects {field: <name of key>, headerName: <column name>}
        this.#keys = columns.map(item => item.field);
        this.#bildTable(parentId, columns.map(item => item.headerName), fromFormData);
    }
    fillDate(rowsData) {
        this.#idBodyElement.innerHTML =
            rowsData.map(element => `<tr>
                                        ${this.#keys.map(item => `<td>${element[item]}</td>`).join('')}
                                    </tr>`).join('');
    }
    #bildTable(parentId, columnNames, fromFormData) {
        const tableSectionElement = document.getElementById(parentId);
        tableSectionElement.innerHTML =
            `<h1>Weather for city of ${fromFormData.city} from ${fromFormData.startDate} to ${fromFormData.endDate}. Time [${fromFormData.hourFrom}-${fromFormData.hourTo}]</h1>
            <table id="metio">
                <theader>
                    <tr>
                        ${columnNames.map(hName => `<th>${hName}</th>`).join('')}
                    </tr>
                </theader>
                <tbody id="${parentId}-table">

                </tbody>
            </table>`;
        this.#idBodyElement = document.getElementById(parentId + "-table");
    }
}