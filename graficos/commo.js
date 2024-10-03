const getCSS = (variavel)=> {
    return getComputedStyle(documento.body).getPropertyValue(variavel)
}

const tickConfig = {
    color: getCSS('--primary-color')
    size: 16,
    family: getCSS('--font')
}

function criarGrafico(data, laytout) {
    const grafico = document.createElement('div')
    grafico.className = 'grafico'
}