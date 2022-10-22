// Завершите функцию/метод, чтобы он возвращал URL-адрес с чем-либо после удаления привязки (#).

function removeUrlAnchor(url){
    // TODO: complete
  return url.substring(0,url.indexOf('#'))
}

console.log(removeUrlAnchor("www.codewars.com#about"))