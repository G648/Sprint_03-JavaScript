export const dateFormatDbToView = data => {

    data = data.substr(0, 10); //retorna apenas a data 2023-11-10
    data = data.split('-'); //[2023, 11, 10]

    return `${data[2]}/${data[1]}/${data[0]}`;
}