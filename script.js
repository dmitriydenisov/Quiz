const data = {
    currentCardNumber: 4,
    question2: null,
    question3: [],
    question4: null,
    question5: {
        name: '',
        email: '',
        confirm: false
    }
}
ShowCard (data.currentCardNumber)

document
    .querySelector('[data-start]')
    .addEventListener('click', () => {
        data.currentCardNumber = 2
        ShowCard(2)
    })

document
    .querySelector('[data-back]')
    .addEventListener('click', () => {
        --data.currentCardNumber
        ShowCard(data.currentCardNumber)
    })

document
    .querySelector('[data-next]')
    .addEventListener('click', () => {
        data.currentCardNumber++
        ShowCard(data.currentCardNumber)
    })

document
    .querySelector('[data-card="2"]')
    .addEventListener('click', event => {
        const liElement = event.target.closest('li')

        if(!liElement) {
            return
        }

        const inputElement = liElement.querySelector('input')
        data.question2 = inputElement.value

        ShowCard(data.currentCardNumber)
    })

document
    .querySelector('[data-card="4"]')
    .addEventListener('click', event => {
        const liElement = event.target.closest('li')

        if(!liElement) {
            return
        }

        const inputElement = liElement.querySelector('input')
        data.question4 = inputElement.value

        ShowCard(data.currentCardNumber)
    })    

function ShowCard (n){
    if(n === 1 || n === 6){      
        hideFooter()
        hideHeader()
    } else{
        showFooter()
        showHeader()
    }

    document
        .querySelectorAll('[data-card]')
        .forEach(x => x.style.display = 'none')

    const cardElement = document.querySelector(`[data-card="${n}"]`)
    cardElement.style.display = ''

    const nextButton = document.querySelector('[data-next]')
    nextButton.setAttribute('disabled', true)

    if( n === 2) {
        cardElement
            .querySelectorAll('input')
            .forEach(inputElement => {
                inputElement.removeAttribute('checked')

                if ( inputElement.value === data.question2) {
                    inputElement.setAttribute('checked', true)
                }
            })
        if(data.question2) {
            nextButton.removeAttribute('disabled')
        }
    }

    if( n === 4) {
        cardElement
            .querySelectorAll('input')
            .forEach(inputElement => {
                inputElement.removeAttribute('checked')

                if ( inputElement.value === data.question4) {
                    inputElement.setAttribute('checked', true)
                }
            })
        if(data.question4) {
            nextButton.removeAttribute('disabled')
        }
    }
}

function showFooter() {
    document.querySelector('[data-footer]').style.display = ''
}
function hideFooter() {
    document.querySelector('[data-footer]').style.display = 'none'
}

function showHeader() {
    document.querySelector('[data-header]').style.display = ''
}
function hideHeader() {
    document.querySelector('[data-header]').style.display = 'none'
}