// D:\Tasks\PROJECT\NEW_PROJECT_112312312312312312\
// Имеется путь, и максимальная длина этого пути. Необходимо обрезать каждый элемент пути таким образом, что бы весь путь вмещался в максимальную длину. 
// Название диска остаёться как есть.  
// А так же поставить для каждого обрезанного элемента пути в конце "...", включительно для максимальной ширины.
// Обрезать все вложенные элементы нужно пропорционально, что бы все были одного размера, если элемент влезает с текущей шириной, то его не нужно обрезать.
// Количество вложенностей пути может быть какая угодно.

// const path = 'D:\\Tasks\\PROJECT_PROJECT_PROJECT_PROJECT_PROJECT_PROJECT\\'
const path = 'D:\\Tasks\\PROJECT_PROJECT_PROJECT_PROJECT_PROJECT_PROJECT\\NEW_PROJECT_112312312312312312\\NEW_PROJECT_112312312312312312\\'

function slicedPath(path, maxWidth) { 

  if(path.length <= maxWidth) return path 

  let tempAddedSize = 0;
  const pathArray = path.split('\\').filter(el => el)
  const countPathElement = pathArray.length - 1
  const minimalSize = Math.floor(maxWidth / countPathElement) - 2

  const longedPathCounter = pathArray.reduce((acc, curr, index) => {
    if(curr.length > minimalSize) acc += 1
    return acc
  },0)

  return pathArray.reduce((acc, curr, index, arr) => {
    if(curr.length > minimalSize) {
      acc += curr.slice(0, (minimalSize + tempAddedSize) - 3) + '...'
    } else {
      if (index) {
        tempAddedSize = Math.round((minimalSize - curr.length) / longedPathCounter)
        console.log('tempAddedSize', tempAddedSize);
      }
      acc += curr
    }
    return acc + '\\'
  },'')
}


console.log(slicedPath(path, 49));
console.log(slicedPath(path, 49).length);