import {createComparison, defaultRules} from "../lib/compare.js";

// @todo: #4.3 — настроить компаратор
const compare = createComparison(defaultRules);

export function initFiltering(elements, indexes) {
    // @todo: #4.1 — заполнить выпадающие списки опциями
    Object.keys(indexes)                                    // Получаем ключи из объекта
      .forEach((elementName) => {                        // Перебираем по именам
        elements[elementName].append(                    // в каждый элемент добавляем опции
            ...Object.values(indexes[elementName])        // формируем массив имён, значений опций
                      .map(name => {                        // используйте name как значение и текстовое содержимое
                               const tag = document.createElement('option');
                               tag.value = name;
                               tag.textContent = name;
                               return tag;                       // @todo: создать и вернуть тег опции
                      })
        )
     })

    return (data, state, action) => {
        // @todo: #4.2 — обработать очистку поля
        // @todo: #4.5 — отфильтровать данные используя компаратор
        console.log("filter ", data.filter(row => {return compare(row, state)}));
        
        return data.filter(row => {
            // let result = compare(row, state);
            // console.log(`Сравнение для ${JSON.stringify(row)} и ${JSON.stringify(state)}: ${result}`);
            return compare(row, state)});
    }
}