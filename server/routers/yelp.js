import { Router } from "express";
import axios from "axios";

const router = Router();

router.get("/restaurants/:location", async (request, response) => {
  try {
    const location = request.params.location;
    axios
      .get(
        `https://api.yelp.com/v3/businesses/search?location=${location}&sort_by=best_match&limit=20&term=restaurants&radius=10000`,
        {
          headers: {
            Authorization: `Bearer ${process.env.YELP_API_KEY}`
          }
        }
      )
      .then(yelpResponse => {
        response.json(yelpResponse.data.businesses);
      })
      .catch(error => {
        console.log("It puked", error);
        response.status(500).json(error);
      });
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

export default router;
