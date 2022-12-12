//
// Вы только начали работать в местном кинотеатре, и ваша первая задача — написать функцию, которая возвращает время показа определенного фильма, учитывая его продолжительность. Чтобы облегчить вашу работу, вы будете работать в 24-часовом формате на протяжении всей этой ката.
//
//     Ваша функция получает три параметра, все они являются целыми числами:
//
//     открытым -
//     Часы работы кинотеатра.
//     close - Время закрытия кинотеатра.
//     length - Продолжительность фильма в минутах.
//     Он должен возвращать массив значений времени, каждое из которых имеет формат (часы, минуты). Например, (19, 30) означает 19:30, а (2, 0) — 02:00. Последний сеанс в массиве не может завершиться после закрытия кинотеатра. Также,
//     время в массиве должно быть отсортировано от самого раннего до самого последнего.
//
//     Между окончанием сеанса и началом следующего есть 15-минутное окно, чтобы у пользователей было достаточно времени, чтобы сесть.
//
//     Например, для кинотеатра, который открывается в 13:00 и закрывается в 23:00, показывая 60-минутный фильм,
//     ваша функция должна возвращать следующий массив:
//
//     >>> кино_время(13, 23, 60)
//     [(13, 0), (14, 15), (15, 30), (16, 45), (18, 0), (19, 15), (20, 30), (21, 45)]
// Обратите внимание, что кинотеатр может закрыться в 02:00 или 03:00, то есть такие примеры также должны работать:
//
//     >>> кино_время(16, 3, 75)
//     [(16, 0), (17, 30), (19, 0), (20, 30), (22, 0), (23, 30),
//     (1, 0)]
// ВАЖНО: для языков, отличных от Python, просто верните массив массивов. Дополнительные сведения о том, как вернуть список раз, см. в примерах тестов.
//
//     ПРИМЕЧАНИЕ. Это ката не должно быть слишком сложным, поэтому время начала всех тестов будет 12:00 или позже, а время закрытия всегда будет 6:00 или раньше.
//     ПРИМЕЧАНИЕ 2: В этой ката полночь будет представлена ​​как (0, 0) или 0:00 вместо 24:00.
//
//     Удачи!


function movie_times(open, close, length) {

}

console.log(movie_times(13, 23, 60))