let anonceDate = document.getElementsByClassName("news-date")[0];
let ukrDate = anonceDate.innerHTML.split(" ");
let result;
console.log(anonceDate);
let ukrMonths = [
  "січня",
  "лютого",
  "березня",
  "квітня",
  "травня",
  "червня",
  "липня",
  "серпня",
  "вересня",
  "жовтня",
  "листопада",
  "грудня"
];
let engMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

for (let i = 0; i < engMonths.length; i++) {
  if (engMonths[i] === ukrDate[0]) {
    ukrDate[0] = ukrMonths[i];
    result = [ukrDate[1].slice(0, -1), ukrDate[0], ukrDate[2], ukrDate[3]].join(
      " "
    );
    // console.log(result);
  }
}
anonceDate.innerHTML = result;
