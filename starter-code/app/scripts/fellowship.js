console.log('Linked.')

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
]

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
]

var lands = ['The Shire', 'Rivendell', 'Mordor']
var body = document.querySelector('body')

// Part 1

function makeMiddleEarth () {
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body

  var middleEarth = document.createElement('section')
  middleEarth.id = 'middle-earth'

  lands.forEach(function (land) {
    var landArticle = document.createElement('article')
    var landTitle = document.createElement('h1')
    landTitle.textContent = land
    landArticle.appendChild(landTitle)
    middleEarth.appendChild(landArticle)
  })
  body.appendChild(middleEarth)
}

makeMiddleEarth()

// Part 2

function makeHobbits () {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit

  var shireArticle = body.querySelector('article')
  var ulShire = document.createElement('ul')

  shireArticle.appendChild(ulShire)
  hobbits.forEach(function (hobbit) {
    var shireList = document.createElement('li')
    shireList.textContent = hobbit
    ulShire.appendChild(shireList)
    shireList.className = 'hobbit'
  })
}

makeHobbits()

// Part 3

function keepItSecretKeepItSafe () {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo

  var ringDiv = document.createElement('div')
  ringDiv.id = 'the-ring'
  ringDiv.className = 'magic-imbued-jewelry'
  ringDiv.addEventListener('click', nazgulScreech)
  var Frodo = body.querySelector('.hobbit')
  Frodo.appendChild(ringDiv)
}
keepItSecretKeepItSafe()

// Part 4

function makeBuddies () {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell

  var asideTag = document.createElement('aside')
  var ulBuddies = document.createElement('ul')
  asideTag.appendChild(ulBuddies)
  ulBuddies.id = 'buddId'
  buddies.forEach(function (buddy) {
    var buddyList = document.createElement('li')
    buddyList.textContent = buddy
    buddyList.className = 'budd'
    ulBuddies.appendChild(buddyList)
    var landArticle = document.querySelectorAll('article')[1]
    landArticle.appendChild(ulBuddies)
  })
}

makeBuddies()

// Part 5

function beautifulStranger () {
  // change the 'Strider' textnode to 'Aragorn'
  var exStrider = document.querySelectorAll('.budd')[3]

  exStrider.textContent = 'Aragorn'
}

beautifulStranger()

// Part 6

function leaveTheShire () {
  // assemble the hobbits and move them to Rivendell
  var hobbit1 = document.querySelectorAll('.hobbit')

  for (var i = 0; i < 4; i++) {
    var join = document.querySelector('#buddId')
    join.appendChild(hobbit1[i])
  }
}
// }

leaveTheShire()

// Part 7

function forgeTheFellowShip () {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  var rivenArticle = document.querySelectorAll('article')[1]
  var thefellowhsip = document.createElement('div')
  thefellowhsip.className = 'goodman'
  var newbuddList = document.querySelector('#buddId')
  rivenArticle.appendChild(thefellowhsip)

  thefellowhsip.appendChild(newbuddList)
}

forgeTheFellowShip()

// Part 8

function theBalrog () {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  var gandArticle = document.querySelector('.budd')
  gandArticle.textContent = 'Gandalf the White'
  gandArticle.style.background = 'White'
  gandArticle.style.border = '3px solid grey'
}

theBalrog()

// Part 9

function hornOfGondor () {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
// alert('horn of gondor has been blown')
  var Boro = document.querySelectorAll('.budd')[4]
  Boro.style.textDecoration = 'line-through'
  var theList = document.querySelector('#buddId')
  theList.removeChild(Boro)
}

hornOfGondor()

// Part 10

function itsDangerousToGoAlone () {
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  var Frodo = document.querySelectorAll('.hobbit')[0]
  var Sam = document.querySelectorAll('.hobbit')[1]
  var Mod = document.querySelectorAll('article')[2]

  Mod.appendChild(Frodo)
  Mod.appendChild(Sam)
}
itsDangerousToGoAlone()
// Part 11

function weWantsIt () {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  var Doom = document.createElement('div')
  Doom.id = 'Mount-Doom'
  var goll = document.createElement('div')
  goll.id = 'gollum'

  console.log(goll)
  var Mod = document.querySelectorAll('article')[2]
  Mod.appendChild(goll)
  var dRing = document.querySelector('#the-ring')
  goll.appendChild(dRing)
  Mod.appendChild(Doom)
  Doom.appendChild(goll)
}
weWantsIt()
// Part 12

function thereAndBackAgain () {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
  var Doom = document.querySelector('#Mount-Doom')
  var goll = document.querySelector('#gollum')
  Doom.removeChild(goll)
  var ul1 = document.querySelector('ul')

  for (var i = 0; i < 4; i++) {
    var hobClass = document.querySelectorAll('.hobbit')[i]
    ul1.appendChild(hobClass)
  }
}

thereAndBackAgain()
