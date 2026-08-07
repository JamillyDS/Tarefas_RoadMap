function formatName(firstName, lasteName) {
    return ` ${firstName} ${lasteName}`
}

function getGreeting(timeOfDay) {
  if (timeOfDay === 'morning') {
    return 'Good morning';
  }

  if (timeOfDay === 'afternoon') {
    return 'Good afternoon';
  }

  return 'Good evening';
}

function createGreeting(firstName, lasteName, timeOfDay) {
    const greeting = getGreeting(timeOfDay)
    const name = formatName(firstName, lasteName)

    return `${greeting} ${name}`
}

console.log(createGreeting('Ava', 'Stone', 'morning'));
console.log(createGreeting('Noah', 'Kim', 'evening'));
console.log(createGreeting('Mina', 'Patel', 'afternoon'));