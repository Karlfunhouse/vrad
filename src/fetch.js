
export const fetchAreas = () => {
  const areaEndpoint = 'https://vrad-api.herokuapp.com'
  fetch(areaEndpoint + '/api/v1/areas')
  .then(response => response.json())
  .then(areaData => {
    const areaPromises = areaData.areas.map(area => {
      return fetch(areaEndpoint + area.details)
      .then(response => response.json())
      .then(details => {
        return {
          area: area,

        }
      })
    })
    Promise.all(areaPromises)
    .then(areaPromises => {
      let areasInfo = areaPromises[0]
      return areasInfo
    })
  })
}
