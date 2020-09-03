const element = document.getElementById("tbody");
axios
  .get("http://127.0.0.1:3000/pets")
  .then(function (response) {
    var i = 1;
    response.data.map((item) => {
      const trElement = document.createElement("tr");
      trElement.innerHTML += `<td>${i}</td>`;
      trElement.innerHTML += `<td>${item.type}</td>`;
      trElement.innerHTML += `<td>${item.name}</td>`;
      trElement.innerHTML += `<td>${item.gender}</td>`;
      trElement.innerHTML += `<td>${item.breed}</td>`;
      trElement.innerHTML += `<td>${item.shape}</td>`;
      trElement.innerHTML += `<td>${item.age}</td>`;
      element.append(trElement);
      i = i + 1;
    });
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
