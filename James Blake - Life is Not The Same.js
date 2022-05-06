const self = new Human()
let you = new Human(self)
  
let life = new Life(self, you)
const lifeID = life._id

const isMilesAway = who => {
  const xAxisDiff = self.x - who.x
  const yAxisDiff = self.y - who.y
  const distanceFromWho = 
        Math.sqrt(Math.pow(xAxisDiff, 2) + Math.pow(yAxisDiff, 2));
  return distanceFromWho.toMiles() > 1
}

self.diveIn()
self.smile()
  
if(isMilesAway(you)){
  life = new Life(self, null)
}

const lifeIsNotTheSame = lifeID !== life._id
