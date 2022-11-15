export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => {
        if (!response.ok) {
          throw `${response.status}: ${response.statusText}`
        } else {
          return response.json()
        }
      })
}

export const postUrls = (newURL) => {
  return fetch(`http://localhost:3001/api/v1/urls`, {
    method: "POST",
    headers: { "Content-Type" : "application/json"},
    body: JSON.stringify(newURL)
  })
  .then(response => {
    if (!response.ok) {
      throw `${response.status}: ${response.statusText}`
    } else {
      return response.json()
    }
  })
}