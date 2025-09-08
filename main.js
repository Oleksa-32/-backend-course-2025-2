const currency = 'JPY';
const exact_date = '20240127';

const base = new URL('https://bank.gov.ua/');
const url = new URL('/NBUStatService/v1/statdirectory/exchange', base);

url.searchParams.set('valcode', currency);
url.searchParams.set('date', exact_date);
url.searchParams.set('json', '');

console.log(url.href);