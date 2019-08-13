const functionName = cheese => {
  const container = document.getElementById('container')
  cheese.forEach(e => {
    let li = document.createElement('li')
    let url = karin('a', 'link', e.name)
    url.href = e.html_url
    li.appendChild(url)
    li.appendChild(karin('p', 'date', moment(e.created_at).format('DD/MM/YYYY')))
    li.appendChild(karin('p', 'desc', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et maximus dolor. Nulla posuere quam vitae nulla elementum bibendum. Mauris at enim turpis.'))
    container.appendChild(li)
  })
}

const karin = (elem, cssclass, content) => {
  let thing = document.createElement(elem)
  thing.innerText = content
  thing.classList.add(cssclass)
  return thing
}

const initialize = () => fetch('https://api.github.com/users/adasextagen/repos')
  .then(response => response.json())
  .then(response => functionName(response))