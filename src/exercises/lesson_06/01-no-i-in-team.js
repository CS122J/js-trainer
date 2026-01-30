const myArray = ["Dodgers", "Padres", "Giants", "Rockies", "Diamondbacks"]

function getTeamsWithNoI() {
  myArray.forEach(team => {
    if (!team.includes("i")) {
      console.log(team);
    }
  });

  return null
}

/** EXPORT - DO NOT MODIFY **/
export const answer = getTeamsWithNoI()
