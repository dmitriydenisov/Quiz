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

        document.querySelector(`[data-card="${n}"]`).style.display = ''
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