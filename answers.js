//1: lightswitch = boolean
const lightswitch = true;
//2: email address = string
const email = "jtmcmorran@gmail.com"
//3: spaceship = object
const spaceship = {
  hull:10,
  blasters:2,
  tractorBeam:true,
  warpDrive:true
}
//4: list of student names = array of strings
const names = ["Jamie", "Jason H", "Jason T", "Jason C"]
//5: list of student names with locations = array of objects
const names2 = [
  {name:"jamie", location:'Maryland'},
  {name:"jasonH", location: 'insert location here'},
  {name:"jasonT", location:'somewhere'},
  {name:"jasonC", location:'a cool place'}
]
//6:  list of names with locations and favorite shows = array of objects
const names3 = [
  {name:'jamie', location:'Maryland', favoriteShow:'Over the Garden Wall'},
  {name:'jasonH', location:'insert location here',favoriteShow:'arrow'},
  {name:'jasonT', location:'somewhere',favoriteShow:'supergirl'},
  {name:'jasonC', location:'a cool place',favoriteShow:'titans'}
]


//take it easy
//1
const rainbow = ['red','orange','yellow','green','blue','indigo','violet']
//2
console.log(rainbow[4])
//3
const jamie = {
  favoriteFood:'burger',
  hobby:'magic the gathering',
  town:'bethesda',
  favoriteDatatype:'array or object one of the two'
}
//4
console.log(jamie.hobby);

//crazy object
const crazyObject = {
  taco: [{meat: 'steak',
         cheese: ['panela', 'queso', 'chihuahua']},
         {meat: 'chicken',
          salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
        ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [{
      name: "Jeff",
      occupation: "manager"
    },
    {
      name: "funkhauser",
      occupation: "tv dude"
    },
    {
      name: "susie",
      occupation: "jeffs wife",
      favouriteHobby: "Swearing at Larry and Jeff"
    },
    ]
  }
}
//1
console.log(crazyObject.taco[1].salsa[5])
//2
console.log(crazyObject.larry.quotes[0])
//3
console.log(crazyObject.larry.characters[2].favouriteHobby)
//4
console.log(crazyObject.larry.nicknames[1])
//5
console.log(crazyObject.larry.characters[1])
//6
crazyObject.larry.quotes.push("I'm trying to elevate small talk to medium talk.")
console.log(crazyObject.larry.quotes)


//objectception
const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}
inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null
console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo)
