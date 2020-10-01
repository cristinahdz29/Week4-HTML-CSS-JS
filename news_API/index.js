//Retrieve elements from html
let newsInformationUl = document.getElementById("newsInformationUl");

//THIS GIVES US THE ARRAY WITHIN THE NEWS OBJECT

let newsArticleArray = news.articles;
//console.log(newsArticleArray) <-- to check if its an array

//Looping through each in array with 'for each' instead of '.map'

//METHOD 1: CREATING EACH ELEMENT WITH JAVASCRIPT, ASSIGNING INNER HTML, AND APPENDING TO PARENT ELEMENT -- THEN WILL LOOP THROUGH ARRAY USING '.FOR EACH' INSTEAD OF '.MAP' (WORKS JUST LIKE MAP, EXCEPT IT WON'T RETURN AN ARRAY); TAKES IN THE SAME FUNCTION USED IN MAP, except now we're not returning anything, we're just appending each element created to the Ul made in HTML

//MORE CODE INVOLVED, BUT ALLOWS YOU TO SEE HOW INDIVIDUAL ELEMENTS ARE CREATED IN JS AND HOW WE CAN ASSIGN INNER HTML VALUES TO THEM AND APPEND TO A PARENT

//WILL CREATE CHILDREN OF LI, THEN APPEND LI AS A CHILD TO UL

newsArticleArray.forEach(function (article) {
  //Creating HTML elements that I will use to add info to
  let li = document.createElement("li");
  li.className = "ArticleInfoLi";

  //These elements will get inner content assigned to them and will be appeneded to li
  let pTitle = document.createElement("p");
  pTitle.className = "title";
  pTitle.innerHTML = article.title;
  li.appendChild(pTitle);

  let pAuthor = document.createElement("p");
  pAuthor.className = "author";
  pAuthor.innerHTML = article.author;
  li.appendChild(pAuthor);

  let pDescription = document.createElement("p");
  pDescription.className = "description";
  pDescription.innerHTML = article.description;
  li.appendChild(pDescription);

  let aImageUrl = document.createElement("a");
  aImageUrl.className = "imageURl";
  aImageUrl.innerHTML = article.url;
  aImageUrl.setAttribute("href", article.url);
  li.appendChild(aImageUrl);

  let img = document.createElement("img");
  img.className = "image";
  img.setAttribute("src", article.urlToImage);
  img.setAttribute("width", 600);
  li.appendChild(img);

  let pPublishedAt = document.createElement("p");
  pPublishedAt.className = "publishedAt";
  pPublishedAt.innerHTML = article.publishedAt;
  li.appendChild(pPublishedAt);

  newsInformationUl.appendChild(li);
});

/*
CHECKING TO SEE HOW I CAN ACCESS SPECIFIC THINGS WITHIN THE NEWS OBJECT; ITS AN OBJECT WITH LISTS INSIDE IT, CONTAINING OTHER OBJECTS

let firstItem = newsArticleArray[0]
console.log(firstItem.author)

*/

//METHOD 2: USING TEMPLATE LITERAL TO DO THE SAME THING; CREATING ELEMENTS WITHIN TEMPLATE LITERAL AND ADDING IT TO UL WE MADE IN HTML
//CAN COMMENT IT BACK IN TO SEE HOW IT WORKS JUST LIKE THE METHOD 1

// now we can use .map because we have a list created on line 6 above

let articleIformation = newsArticleArray.map(function (article) {
  return `
        <li class="ArticleInfoLi">
            <label class="author"> ${article.author} </label>

            <p class="title"> ${article.title} </p>

            <p class="description">${article.description} </p>

            <a class="imageURl" href= ${article.url} </a>

            <img id="image" width:300px src=${article.urlToImage}/>

            <p class="publishedAt"> ${article.publishedAt}</p>

        </li>
    `;
});

// UNCOMMENT THIS AND COMMENT OUT THE ENTIRE FIRST METHOD IF YOU WANT TO SEE IT WORK
// newsInformationUl.insertAdjacentHTML('beforeend', articleIformation.join(""))
