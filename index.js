function writeCards(name, event) {
       const cards = []
    for (let i = 0; i < name.length; i++) {
       cards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return cards;
}

function countDown(int) {
    while (int >= 0) {
        console.log(int);
        int--
    }
}