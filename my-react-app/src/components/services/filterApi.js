
import Api from "./api";

export default async function filterUnwantedIngredients(queries) {
  try {
    const res = await Api.get(`/filter${formatUrl(queries)}`);
    console.log('get:', queries);
    return res.data
  } catch (err) {
    return err.message;
  }
}
// export async function searchWantedIngrients(queries) {
//   try {
//     await Api.get('/search', formatUrl(queries));
//   } catch (err) {
//     return err.message;
//   }
// }
export  function formatUrl(arr) {
  let lista = arr.split(' ')
  console.log('e:', lista);
  let params = ['?']

  for (let i = 0; lista.length > i; i++) {
    if (i == (lista.length - 1)) {
      params.push(`${i}=${lista[i]}`)
    } else {
      params.push(`${i}=${lista[i]}&`)
    }
  }
  return params.join('')
}

