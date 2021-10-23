const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// question 1

const cat = {
    complain: "Meow!",
    catComplaint: function (){
        console.log(this.complain);
    }
};

cat.catComplaint();

// question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

// question 3

heading.style.fontSize = "2em";

// question 4

//heading.innerHTML = `<div class="subheading"></div>`;

// question 5

const paragraph = document.querySelectorAll("p");

for (let i = 0; i < paragraph.length; i++){
  paragraph[i].style.color = "red";
}

// question 6

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

// question 7

function catList (list){
    for (let i = 0; i < list.length; i++){
        console.log(list[i].name)
    }
}

catList(cats);

// question 8

function createCats (threeCats){

    let html = "";

    for (let i = 0; i < threeCats.length; i++){

        let ageMissing = "“Age unknown”";

        if (threeCats[i].age){
            ageMissing = threeCats[i].age;
        }
        
        html += `<div class="cat">
                    <h5>${threeCats[i].name}</h5>
                    <p>${threeCats[i].age}</p>
                </div>`
    }

    return html;
}

const individualCats = createCats(cats)

const catContainer = document.querySelector(".cat-container")

catContainer.innerHTML = individualCats;