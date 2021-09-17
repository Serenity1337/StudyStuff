function swimmer({ name }) {
  return {
    swim: () => console.log(`${name} swam`),
  }
}

function attackerAndWalker({ name }) {
  return {
    attack: () => console.log(`${name} attacked`),
    walk: () => console.log(`${name} walked`),
  }
}

function flyer({ name }) {
  return {
    fly: () => console.log(`${name} flew`),
  }
}

function swimmingMonsterCreator(name) {
  const monster = { name: name }

  return {
    ...monster,
    ...attackerAndWalker(monster),
    ...swimmer(monster),
    ...flyer,
  }
}

const monsterTest1 = swimmingMonsterCreator('nametest1')
console.log(monsterTest1.name)
monsterTest1.attack()
monsterTest1.walk()
monsterTest1.swim()
