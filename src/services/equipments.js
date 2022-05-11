import axios from "axios";

export async function getEquipments(params) {
  const url = "https://amu-lab.herokuapp.com/api/equipos/"
  return await axios
  .get(url)
  .then((res) => {
  return res.data
  })
  .catch((err) => {
    console.log(err);
    this.setState({
      loading: false,
      error: true,
    });
  });
}

export async function getEquipmentWithVariables(id) {
  const url = "https://amu-lab.herokuapp.com/api/variablesxequipo/" + id
  return await axios
  .get(url)
  .then((res) => {
  return res.data
  })
  .catch((err) => {
    console.log(err);
  });
}