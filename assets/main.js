const resetParty = $('#resetParty')
const endParty = $('#end-party')
const winner = $('#winner')
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

const resetEl = () => {
    currentPlayer=0
    bindBtn()
    holdBind()
    currentPly1.show()
    currentPly2.removeAttr('style').hide()

    holdScorePly1.text(0)
    holdScorePly2.text(0)
    currentScorePlyr1.text(0)
    currentScorePlyr2.text(0)
}
let currentPlayer = 0;
const switchPly = () => {
    if (currentPlayer !== 0) {
        currentPly1.show()
        currentPly2.removeAttr('style').hide()
         currentPlayer++;
    } else {
        currentPly1.removeAttr('style').hide();
        currentPly2.show();
         currentPlayer--;
    }
};

// current score function
let curr1
let curr2
const currentScore = (value) => {
    if (value !== 1) {
        if (currentPlayer === 0) {
            curr1 = value;
            currentScorePlyr1.text(curr1)
            return curr1;
        } else {
            curr2 = value;
            currentScorePlyr2.text(curr2)

            return curr2;
        }
    } else {
        if (currentPlayer === 0) {
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

// total score function
let tot1 = 0
let tot2 = 0

const total = () => {
    if (currentPlayer === 0) {
        tot1 += curr1
        holdScorePly1.text (tot1)
        return tot1
    } else {
        tot2 += curr2
        holdScorePly2.text(tot2)
        return tot2
    }
}

// control function
const control = () => {
    if (tot1 >= 10) {
        endParty.show()
        winner.text('Player 1')
    } if (tot2 >= 10) {
        endParty.show()
        winner.text('Player 2')
    }

}

$(window).on("load",() => {
    console.log('jquery inclut');
    resetEl()
    endParty.removeAttr('style').hide();
})

// reset party event
resetParty.on('click',() =>{
    resetEl()
    tot1 = 0
    tot2 = 0
})

// roll event
const bindBtn = () => {
    roll.unbind('click').one('click', function (e) {
        let diceVal = Math.floor(Math.random() * (7 - 1) + 1)
        currentScore(diceVal)
        holdBind()
    })
}
bindBtn()

// hold event
const holdBind = () =>{
    hold.unbind('click').one('click',function(){
        bindBtn()
        total()
        switchPly()
        currentScorePlyr1.text(0) 
        currentScorePlyr2.text(0)
        control()
    })
}
holdBind()
