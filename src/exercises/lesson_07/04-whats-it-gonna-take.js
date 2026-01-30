const myCar = {
  makeModel: "Honda Civic",
  year: 2020,
  style: "Sport Sedan CVT",
  price: 20480,
  mileage: 64199,
  color: { interior: "Black", exterior: "Black" },
  histNotes: ["no accidents", "1 owner", "personal use"],
  VIN: "2HGFC2F82LH509888",
  mpg: { highway: 38, city: 30 },
  engine: "2.0L Inline-4 Gas",
  driveType: "FWD",
  transmission: "automatic",
}

// Update the parameters to use destructuring instead
function createAd({ year, makeModel, style, price, mileage }) {
  let myPost;
  try {
    myPost = `Hey, everyone! I'm selling a ${year} ${makeModel} ${style} for just $${price}! It has just ${mileage} miles and is in great condition. So, my question is, "What's it gonna take to get you into this car?"`;
  } catch (e) {
    return `Oops! You have an error. ${e}`;
  }

  return myPost;
}


/** EXPORT - DO NOT MODIFY **/
export const answer = createAd(myCar)
