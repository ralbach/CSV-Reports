const form = document.getElementById('form');
const csv = document.getElementById('csv');
const request = (event) => {
  event.preventDefault();
  let reader = new FileReader();
  let file = event.target.children[0].files[0];

  reader.onload = (file) => {
    fetch('/submit', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify({data: file.currentTarget.result})
    }).then((response) => {
      return response.json();
    }).then((data) => {
      let brk = document.createElement("br");
      csv.append(brk)
      csv.append(brk)
      csv.append(brk)
      data.data.forEach((line) => {
        let brk = document.createElement("br");
        let ele = document.createElement("div");
        ele.textContent = line;

        csv.append(line);
        csv.append(brk);
      })
    }).catch((err) => {
      console.log(err)
    })
  }
  reader.readAsText(file);
}

form.addEventListener('submit', request);