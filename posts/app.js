// for (let index = 0; index < speakers.length; index++) {    let speaker = speakers[index]    speakerItem = `                <li>         <b>${speaker.name}</b>                  <i>${speaker.category}</i>                </li>    `    speakerListUL.insertAdjacentHTML('beforeend',speakerItem)    //speakerListUL.innerHTML += speakerItem} 

let postsListUL = document.getElementById("postListUL")
let postItems = posts.map(function(post){
    return `
        <li>
           <b>${post.title}</b>
            <p>${post.body}</p> 
        </li>
    `
})

postsListUL.insertAdjacentHTML('beforeend', postItems.join(""))

// for (let  index = 0; index <posts.length; index++) {
//     let post = posts[index]

//     const postItem = `
//         <li>
//             <b>${post.title}</b>
//             <p>${post.body}</p>
//         </li>
//     `
//     postsListUL.insertAdjacentHTML("beforeend",postItem)
// }

//array helpers --> functions
//only  works on array

 let numbers = [1, 2, 3, 4]
 let doubleNumbers = []

 for (let index = 0; index < numbers.length; index++){
     let number = numbers[index]
     doubleNumbers.push(number* 2)
 }

//MAP = helps to transform your array; takes in argument --> a function, function takes in argument and returns whatever we want

let result = numbers.map(function(no){
    return no * 2
})

//Filter
//used to filter out items

let someNumbers = [3, 4, 5, 7, -1, -2]

let positiveNumbers = someNumbers.filter(function(no){
    return no > 0
})