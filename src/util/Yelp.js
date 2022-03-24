const apiKey =
  '9nK6XAJ4ku4e-lcPJZl-M8ejICT6EjS0zJNPJYsZlwqmIT6JXbXBth17dAXWANlFTYzmKeRtPKlU2qgO375O6m7PVMPM6HJFdV4X9sMez5haI6obugJkMCBKZtClXXYx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }
    )
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address,
            city: business.location.city,
            state: business.location.state_code,
            zipCode: business.location.zip_code,
            category: business.categories.title,
            rating: business.rating,
            reviewCount: business.review_count
          }));
        }
      });
  }
};

export default Yelp;
