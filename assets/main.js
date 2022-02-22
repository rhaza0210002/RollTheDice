const resetParty = $('#addBtn')
const roll = $('#rollBtn')
const hold = $('#holdBtn')
const plr1 = $('#plr1')
const plr2 = $('#plr2')
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
$(document).ready(() => {
    console.log('jquery inclut');
    resetEl()
    
})
