function getPilihanComputer() {

    const comp = Math.random()

    if (comp < 0.34) {
        return 'gajah'
    }
    if (comp >= 0.34 && comp < 0.67) {
        return 'orang'
    }
    if (comp >= 0.67) {
        return 'semut'
    }

}

function getResult(comp, player) {
    if (player == comp) {
        return 'SERI!'
    }
    if (player == 'gajah' && comp == 'orang') {
        return 'MENANG!'
    }
    if (player == 'gajah' && comp == 'semut') {
        return 'KALAH!'
    }
    if (player == 'orang' && comp == 'gajah') {
        return 'KALAH!'
    }
    if (player == 'semut' && comp == 'orang') {
        return 'KALAH!'
    }
    if (player == 'semut' && comp == 'gajah') {
        return 'MENANG!'
    }
    if (player == 'orang' && comp == 'semut') {
        return 'MENANG'
    }
}

function putar() {
    const imgComputer = document.querySelector('.img-komputer')
    const gambar = ['gajah', 'semut', 'orang']
    let i = 0

    const waktuMulai = new Date().getTime()

    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval
            return
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png')
        if (i == gambar.length) {
            i = 0
        }
    }, 100)
}

const pilihan = document.querySelectorAll('li img')

pilihan.forEach(function (pil) {
    pil.addEventListener('click', function () {
        const pilihanComputer = getPilihanComputer()
        const pilihanPlayer = pil.className
        const hasil = getResult(pilihanComputer, pilihanPlayer)

        putar()

        setTimeout(function () {
            const imgComputer = document.querySelector('.img-komputer')
            imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')

            const info = document.querySelector('.info')
            info.innerHTML = hasil
        }, 1000)

    })
})