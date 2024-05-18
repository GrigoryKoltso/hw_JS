let goods = [
    {id: 1, title: 'Микроволновка', price: 1500, count: 4},
    {id: 2, title: 'Телевизор', price: 2500, count: 1},
    {id: 3, title: 'Тумба', price: 5500, count: 5},
    {id: 4, title: 'Холодильник', price: 200, count: 2},
    {id: 5, title: 'Стол', price: 5600, count: 5},
    {id: 6, title: 'Телефон', price: 1900, count: 12},
    {id: 7, title: 'Компьютер', price: 4200, count: 11},
    {id: 8, title: 'Мангал', price: 250, count: 7},
    {id: 9, title: 'Люстра', price: 300, count: 3},
 ]
 // 1) Отфильтруйте массив таким образом, чтобы там оказались элементы с четным значением ID
//  let products = goods.filter((elem) => elem.id % 2 === 0)
//  console.log(products);
 // 2) Отфильтруйте продукты с количеством менее 5 единиц
//  let products = goods.filter((elem)=>elem.count < 5)
//  console.log(products)
 //3)  Найдите значение элемента массива (продукта), цена которого будет кратна 5
//    let products = goods.find((elem)=> elem.price % 5 === 0)
//   console.log(products);
 // 4) Найдите индекс элемента, count которого будет больше 11
    //  let products = goods.findIndex((elem) => elem.count > 11)
    // console.log(products);
 // 5) Посчитайте количество элементов, count которых является нечетным числом
    // let products = goods.reduce((accu, value) => {
    //         if(value.count % 2 === 1) {
    //             accu+=1
    //         }
    //         return accu
    // },0)

    // console.log(products);
 //6)  Посчитайте количество элементов, имя которых начинается на “Т”
    // let products = goods.reduce((accu, value) => {
    //     if (value.title[0] === 'Т') {
    //         accu+=1
    //     }
    //     return accu
    // },0)

    // console.log(products);
 // 7) Проверьте, есть ли хотя бы один продукт с ценой выше 500.
    // let products = goods.some((elem) => elem.price > 500)
    // console.log(products);
 //8)  Создайте новый массив, элементы которого будут хранить значение цен всех товаров с 35-процентной скидкой (только цены)
    // let products = goods.map((elem)=> elem.price * .65)
    // console.log(products);
 //9)  Создайте новый массив, изменив только 1 сво-во count на значение 0 для всех элементов (учитывая другие  сво-ва)

    // let products = goods.map((elem)=> ({...elem, count : 0}))

    // console.log(products);

 
 
 
 
 


