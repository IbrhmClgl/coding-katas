function filterApiData(apiData, mandatoryKeys) {
  return apiData.filter((obj) =>
    mandatoryKeys.every((key) => obj.hasOwnProperty(key))
  );
}

const data = [{ id: 1, price: 100 }, { price: 50 }];
const data2 = [
  { id: 1, price: 100 },
  { id: 2, title: "" },
  { id: 3, price: 50 },
];
const filteredData = filterApiData(data, ["id"]);
console.log(filteredData);
