function extractClassName(sessionTitle) {
  const months = [
    ["Januar", "01"],
    ["Februar", "02"],
    ["März", "03"],
    ["Maerz", "03"],
    ["April", "04"],
    ["Mai", "05"],
    ["Juni", "06"],
    ["Juli", "07"],
    ["August", "08"],
    ["September", "09"],
    ["Oktober", "10"],
    ["November", "11"],
    ["Dezember", "12"],
  ];
  let arr = sessionTitle.split(" ").slice(-2);
  console.log(arr);
  // ['2022', 'September']

  for (let i = 0; i < months.length; i++) {
    if (arr[0].length === 4 && arr[1] === months[i][0]) {
      return `${arr[0]}-${months[i][1]}`;
    } else if (arr[0].length !== 4) {
      return null;
    }
  }
}

extractClassName("Live-Session Class 2022 September"); // "2022-09"
