//var csv is the CSV file with headers
const csvJSON = (csv) => {
  console.log(csv);
  var lines = csv.split('\n');

  var result = [];

  // NOTE: If your columns contain commas in their values, you'll need
  // to deal with those before doing the next step
  // (you might convert them to &&& or something, then covert them back later)
  // jsfiddle showing the issue https://jsfiddle.net/
  var headers = lines[0].split(',');

  for (var i = 1; i < lines.length; i++) {
    var obj = {};
    var currentline = lines[i].split(',');

    for (var j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }

    result.push(obj);
  }

  console.log('res', JSON.stringify(result));
  //return result; //JavaScript object
  return JSON.stringify(result); //JSON
};

const ReadCSV = (csv) => {
  let res;
  const freader = new FileReader();
  //   freader.onload = (sender) => {
  //     const data = sender.target.result;

  //     res = csvJSON(data);
  //   };
  freader.readAsText(csv);
  console.log('read ...', csv);
  return res;
};

export default ReadCSV;
