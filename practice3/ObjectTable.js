import {destruct} from "./utils.js";

/**
 * HTTP Web Service
 * This is a service class that uses fetch and promises.
 * // TODO make it a web component
 * @class HTTPService
 */

class ObjectTable {

    /**
     * Generate a Table from objects with optionals actions
     *
     * @param {String} id of the body of the table to render
     * @param {String[]} cols to show from the object
     * @param {Object[]} rows objects to render (Each one must contain a property 'id')
     * @param {Object[]} actions actions to render that will impact to the object
     */
    constructor(id, cols, rows, actions) {
        this.id = id;
        this.rows = rows;
        this.cols = cols;
        this.actions = actions;
        this.render();
    }

    render(){
        this.rows.forEach(obj => {
            this.addRow(obj);
        });
    };

    elementRowGenerator(objects, id){
        const cells = Object.values(objects);
        const rowElement = document.createElement('tr');
        rowElement.id = id;
        cells.forEach(cell => {
            const td = document.createElement('td');
            td.append(cell);
            rowElement.append(td)
        });
        return rowElement;
    };

    addElementActionToRow(row){
        this.actions.forEach(action => {
            const td = document.createElement('td');
            td.className += 'icon';
            const iconCell = document.createElement('i');
            iconCell.className += action.icon;
            iconCell.addEventListener('click', action.function);
            td.append(iconCell);
            row.append(td);
        })
    };

    addRow(obj){
        const tableBody = document.getElementById(this.id);
        const objects = destruct(obj, this.cols);
        const row = this.elementRowGenerator(objects, obj.id);
        this.actions && this.addElementActionToRow(row);
        tableBody.append(row)
    }

    deleteRow(id) {
        const tableBody = document.getElementById(this.id);
        tableBody.rows.namedItem(id).remove();
    }
}

export {ObjectTable}
