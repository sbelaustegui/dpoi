import {destruct} from '../utils.js';

(function () {
    const currentDocument = document.currentScript.ownerDocument;

    /**
     * Table
     * This is a table file with different table constructor functions.
     */
    class CustomTable extends HTMLTableElement {

        _id;
        customRows;
        // _actions;

        constructor(id, rows) {
            super();
            // this._id = id;
            // this._rows = rows;
            // this._actions = actions;
        }

        connectedCallback() {
            // Create a Shadow DOM using our template
            const shadowRoot = this.attachShadow({ mode: 'open' });
            const template = currentDocument.querySelector('#custom-table');
            const instance = template.content.cloneNode(true);
            shadowRoot.appendChild(instance);
        }

        get id() {
            return this._id;
        }

        set id(id) {
            this._id = id;
            this.render();
        }

        get customRows() {
            return this._customRows;
        }

        set customRows(rows) {
            this._customRows = rows;
            this.render();
        }

        // get actions() {
        //     return this._actions;
        // }
        //
        // set actions(actions) {
        //     this._actions = actions;
        //     this.render();
        // }

        render() {
            let body = this.shadowRoot.querySelector('tbody');
            body.innerHTML = '';

            this._customRows.forEach(row => {
                const rowElement = this._elementRowGenerator(row);
                // this.addElementActionToRow(rowElement, rowElement.id, actions);
                body.append(rowElement)
            });
        }

        // tableGenerator = (rows, actions) => {
        //     rows.forEach(row => {
        //
        //         const rowElement = this.elementRowGenerator(objValues);
        //         this.addElementActionToRow(rowElement, rowElement.id, actions);
        //         this.rows.append(rowElement)
        //     });
        // };

        _elementRowGenerator = (cells) => {
            const row = currentDocument.createElement('tr');
            cells.forEach(cell => {
                const td = currentDocument.createElement('td');
                td.append(cell);
                row.append(td)
            });
            return row;
        };

        // addElementActionToRow = (row, id, actions) => {
        //     actions.forEach(action => {
        //         const td = currentDocument.createElement('td');
        //         td.className += 'icon';
        //         const iconCell = document.createElement('i');
        //         iconCell.addEventListener('click', action.actionFunction);
        //         id && (iconCell.dataset.id = id);
        //         iconCell.className += action.icon;
        //         td.append(iconCell);
        //         row.append(td);
        //     })
        // };
    }

    customElements.define('custom-table', CustomTable, {extends: "table"});

})();
