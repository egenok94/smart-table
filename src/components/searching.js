import {rules, createComparison} from "../lib/compare.js";


export function initSearching(searchField) {
    // @todo: #5.1 — настроить компаратор

    console.log(searchField);

    const standardRules = ['skipEmptyTargetValues',];
    const customRules = [rules.searchMultipleFields(searchField, ['date', 'customer', 'seller'], false)];
    const compare = createComparison(standardRules, customRules);

    return (data, state, action) => {
        return data.filter(row => compare(row, state));
    }
}