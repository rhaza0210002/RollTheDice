const resetParty = $('#addBtn')
const roll = $('#roll')
const hold = $('#holdBtn')
const plr1 = $('#plr1')
const plr2 = $('#plr2')
const currentPly1 = $('#currentPly1')
const currentPly2 = $('#currentPly2')

const holdScorePly1 = $('#holdScorePly1')
const holdScorePly2 = $('#holdScorePly2')

const currentScorePlyr1 = $('#currentScorePly1')
const currentScorePlyr2 = $('#currentScorePly2')

const resetEl = () => {
    holdScorePly1.text(0)
    holdScorePly2.text(0)
    currentScorePlyr1.text(0)
    currentScorePlyr2.text(0)
}
let currentPlayer = 0;
const switchPly = () => {
    if (currentPlayer === 0) {
        currentPly1.show()
        currentPly2.removeAttr('style').hide()
        return currentPlayer++;
    } else {
        currentPly1.removeAttr('style').hide();
        currentPly2.show();
        return currentPlayer--;
    }
};


$(document).ready(() => {
    console.log('jquery inclut');
    resetEl()
    switchPly()


    const bindBtn = () => {
        $('#roll').unbind('click').one('click', function (e) {
            let diceVal = Math.floor(Math.random() * (7 - 1) + 1)
            console.log(diceVal);
        })
    }

    bindBtn()
    
    $('#hold').on('click', function () {
        bindBtn()

        switchPly()
    })

})
