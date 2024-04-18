import Chance from "chance";

export default function handler(request, response) {
  const chance = new Chance();

  const character = {
    twitterName: chance.twitter(),
    geohash: chance.geohash(),
  };

  return response.status(200).json(character);
}
