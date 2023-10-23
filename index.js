function link(link, code) {
    if (code === 0) {
        window.open(link, '_blank');
    } else {
        window.location = link
    }
}

function openModal(descricion) {
    alert(descricion)
}