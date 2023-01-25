let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let count = 0

function incrementHomeOne() {
    count += 1
    homeScore.textContent = count
}

function incrementHomeTwo() {
    count += 2
    homeScore.textContent = count
}

function incrementHomeThree() {
    count += 3
    homeScore.textContent = count
}

function incrementGuestOne() {
    count += 1
    guestScore.textContent = count
}

function incrementGuestTwo() {
    count += 2
    guestScore.textContent = count
}

function incrementGuestThree() {
    count += 3
    guestScore.textContent = count
}