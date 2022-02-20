function FormatUrl(arr) {
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
  export default FormatUrl;