const resetParty = $('#addBtn')
const roll = $('#roll')
const hold = $('#hold')
const plr1 = $('#plr1')
const plr2 = $('#plr2')
const currentPly1 = $('#currentPly1')
const currentPly2 = $('#currentPly2')

const holdScorePly1 = $('#holdScorePly1')
const holdScorePly2 = $('#holdScorePly2')

const currentScorePlyr1 = $('#currentScorePly1')
const currentScorePlyr2 = $('#currentScorePly2')
let test = 2
const resetEl = () => {
    holdScorePly1.text(0)
    holdScorePly2.text(0)
    currentScorePlyr1.text(0)
    currentScorePlyr2.text(0)
}
// switch player function
let currentPlayer = 0;
const switchPly = () => {
    if (currentPlayer !== 0) {
        currentPly2.show()
        currentPly1.removeAttr('style').hide()
        return currentPlayer++;
    } else {
        currentPly2.removeAttr('style').hide();
        currentPly1.show();
        return currentPlayer--;
    }
};

// current score function
let curr1
let curr2
const currentScore = (value) => {
    if (value !== 1) {
        if (currentPlayer !== 0) {
            curr1 = value;
            currentScorePlyr1.text(curr1)
            return curr1;
        } else {
            curr2 = value;
            currentScorePlyr2.text(curr2)

            return curr2;
        }
    } else {
        if (currentPlayer !== 0) {
            curr1 = 0;
            currentScorePlyr1.text(1)
            return curr1;
        } else {
            curr2 = 0;
            currentScorePlyr2.text(1)

            return curr2;
        }
    }
};

// function total
let tot1 = 0
let tot2 = 0

const total = () => {
    // if (curr1 === 1) {
    //     tot1 += 0
    //     return tot1
    // }
    // if (curr2 === 1) {
    //     tot2 += 0
    //     return tot2
    // }
    if (currentPlayer !== 0) {
        tot1 += curr1
        holdScorePly1.text(tot1)
        return tot1
    } else {
        tot2 += curr2
        holdScorePly2.text(tot2)
        return tot2
    }
}
$(document).ready(() => {
    console.log('jquery inclut');
    resetEl()
    switchPly()

})
const bindBtn = () => {
    roll.unbind('click').one('click', function (e) {
        let diceVal = Math.floor(Math.random() * (7 - 1) + 1)
        currentScore(diceVal)
        console.log(diceVal);
    })
}

bindBtn()

hold.on('click', function () {
    bindBtn()
    total()
    currentScorePlyr1.text(0)
    currentScorePlyr2.text(0)
    switchPly()
})
