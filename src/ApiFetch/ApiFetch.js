import imageData from '../imageData'
import { url } from '../utilsData'

export const fetchAreas = async () => {
    try {
        let areasData = [];
        const response = await fetch(url + '/api/v1/areas')
        const areas = await response.json()
        areas.areas.forEach(async (area) => {
          const response2 = await fetch(url + area.details)
          const areaDetails = await response2.json()
          const areaObject = {
            ...areaDetails,
            area: area.area,
          };
          areasData.push(areaObject)
        });
        return areasData
      } catch (e) {
        console.log(e)
      }
}

export const fetchListings = async (listings) => {
        const listingsPromises = listings.map((listing) => {
            const images = Object.entries(imageData).find((item) => {
            return (item[0] === listing.split('').splice(17).join('')) && item[1]
            });
            return fetch(url + listing)
            .then((response) => response.json())
            .then((listing) => {
                return {
                favorite: false,
                ...listing,
                img: images[1],
                }
            })
        })
        return Promise.all(listingsPromises)
        .catch((err) => console.error(err))
}
