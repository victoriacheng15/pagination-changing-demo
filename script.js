const pageContainer = document.querySelector('[data-pages]')
const buttons = document.querySelectorAll('button')
let currentPage = 1
let totalPages = 5
let startIdexPage = 0
let endIdxPage = 5

function createPages () {
  const getPages = new Array(21+1).keys()
  const setPage = [...getPages].slice(1)
  return setPage
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if(button.dataset.type === 'next') {
      if(currentPage <= Math.floor(totalPages/2)) {
        currentPage += 1
        startIdexPage = 0
        endIdxPage = 5
      } else {
        currentPage = currentPage >= 21 ? 21 : currentPage += 1
        startIdexPage = startIdexPage >= 16 ? 16 : startIdexPage += 1
        endIdxPage = endIdxPage >= 21 ? 21 : endIdxPage += 1
      }
    }
    if(button.dataset.type === 'prev') {
      const condition = currentPage >= 19
      if(condition) {
        currentPage = currentPage - 1
        startIdexPage = condition ? 16 : startIdexPage -= 1
        endIdxPage = condition ? 21 : endIdxPage -= 1
      } else {
        currentPage = currentPage < 0 ? 1 : currentPage -= 1
        startIdexPage = startIdexPage <= 0 ? 0 : startIdexPage -= 1
        endIdxPage = endIdxPage <= 5 ? 5 : endIdxPage -= 1
      }
    }

    const check = Math.floor(totalPages/2)
    pageContainer.innerHTML = ''
    displayPagination(startIdexPage,endIdxPage)
    console.log({currentPage, check, startIdexPage, endIdxPage});
  })
})

function displayPagination(start,end) {
  const arr = createPages()
  arr.slice(start, end).forEach(num => {
    const span = document.createElement('span')
    span.classList.add('page')
    span.textContent = num
    if(num === currentPage) {
      span.classList.add('current-page')
      span.textContent = num
    }
    pageContainer.appendChild(span)
  })
}



displayPagination(startIdexPage,endIdxPage)