const currency = "UAH";
const exact_date = "10.09.2024";

const url = new URL("https://bank.gov.ua/");
url.pathname = "/NBU_ovdp";

url.searchParams.set("date", exact_date);
url.searchParams.set("val_code", currency);
url.searchParams.set("mode", "AuctionDate");
url.searchParams.set("ord", "asc");
url.searchParams.append("json", "");

console.log(url.toString());