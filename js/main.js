// Recipes

let recipes = [

    {
        name: "Beef Tacos",

        description:
            "Flavorful Mexican tacos with seasoned ground beef",

        image: "images/beef tacos.jpg",

        level: "Easy",

        category: "American",

        rating: "4.6",

        reviews: "(278 reviews)",

        prep: "15 min",

        cook: "20 min",

        servings: "4 people",

        alert: false,

        ingredients: [
            "500g ground beef",
            "8 taco shells",
            "1 onion, diced",
            "2 tablespoons taco seasoning",
            "Shredded lettuce",
            "Diced tomatoes",
            "Shredded cheddar cheese",
            "Sour cream",
            "Salsa"
        ],

        instructions: [
            "Heat a large skillet over medium-high heat. Cook ground beef until browned.",
            "Add diced onion and cook until softened.",
            "Add taco seasoning and cook for 10 minutes.",
            "Warm taco shells according to package directions.",
            "Fill each shell with beef and add your favorite toppings."
        ],

        nutrition: [
            ["Calories", "420 kcal"],
            ["Protein", "26g"],
            ["Carbohydrates", "32g"],
            ["Fat", "20g"],
            ["Fiber", "4g"],
            ["Sodium", "780mg"]
        ],

        tips: [
            "Drain excess fat from beef for healthier tacos",
            "Warm shells in oven for better texture",
            "Prepare all toppings before cooking beef",
            "Use ground turkey for a lighter option"
        ]
    },


    {
        name: "Margherita Pizza",

        description:
            "Classic Italian pizza with fresh mozzarella and basil",

        image: "./images/pizza.jpg",

        level: "Intermediate",

        category: "Italian",

        rating: "4.9",

        reviews: "(512 reviews)",

        prep: "90 min",

        cook: "12 min",

        servings: "2 people",

        alert: true,

        ingredients: [
            "300g pizza dough",
            "200g crushed tomatoes",
            "250g fresh mozzarella",
            "Fresh basil leaves",
            "2 tablespoons olive oil",
            "2 cloves garlic, minced",
            "Salt and pepper to taste",
            "Parmesan cheese for topping"
        ],

        instructions: [

            
"Let pizza dough come to room temperature and rest for 1 hour.",


"Preheat oven to maximum temperature (usually 250°C/480°F).",


"Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.",


"Roll out dough on a floured surface to desired thickness.",


"Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.",
           
        ],

        nutrition: [
            ["Calories", "580 kcal"],
            ["Protein", "24g"],
            ["Carbohydrates", "68g"],
            ["Fat", "22g"],
            ["Fiber", "4g"],
            ["Sodium", "920mg"]
        ],

        tips: [
            "Use a pizza stone for crispier crust",
            "Don't overload with toppings - less is more",
            "Add basil after baking to keep it fresh",
            "Let dough rest properly for best texture"
        ]
    },


    {
        name: "Chicken Stir-Fry",

        description:
            "Quick and healthy stir-fry with colorful vegetables",

        image: "./images/Chicken Stir-Fry1.jpg",

        level: "Easy",

        category: "Asian",

        rating: "4.5",

        reviews: "(324 reviews)",

        prep: "15 min",

        cook: "15 min",

        servings: "4 people",

        alert: false,

        ingredients: [
            "500g chicken breast, sliced",
            "2 bell peppers, sliced",
            "1 broccoli head, florets",
            "2 carrots, julienned",
            "3 tablespoons soy sauce",
            "2 tablespoons oyster sauce",
            "1 tablespoon sesame oil",
            "2 cloves garlic, minced",
            "Fresh ginger, grated"
        ],

        instructions: [

"Mix soy sauce, oyster sauce, and sesame oil for the sauce.",


"Heat wok over high heat with oil. Cook chicken until golden, remove and set aside.",


"Add more oil if needed. Stir-fry garlic and ginger for 30 seconds.",


"Add vegetables, starting with hardest ones (carrots, broccoli). Cook for 3-4 minutes.",


"Return chicken to wok, add bell peppers and sauce. Toss for 2 minutes.",


"Serve immediately over steamed rice or noodles.",

    
        ],

        nutrition: [
            ["Calories", "320 kcal"],
            ["Protein", "34g"],
            ["Carbohydrates", "18g"],
            ["Fat", "12g"],
            ["Fiber", "5g"],
            ["Sodium", "840mg"]
        ],

        tips: [
            "Cut all ingredients before starting to cook",
            "Keep heat high for authentic stir-fry texture",
            "Don't overcrowd the wok or vegetables will steam",
            "Add cashews or peanuts for extra crunch"
        ]
    }

];



let recipeNumber = 0;



// Show Recipe

function showRecipe() {

    let recipe = recipes[recipeNumber];


    // Main information

    document.getElementById("recipeImage").src =
        recipe.image;

    document.getElementById("recipeImage").alt =
        recipe.name;


    document.getElementById("recipeName").textContent =
        recipe.name;


    document.getElementById("recipeDescription").textContent =
        recipe.description;


    document.getElementById("recipeLevel").textContent =
        recipe.level;


    document.getElementById("recipeCategory").textContent =
        recipe.category;



    // Rating

    document.getElementById("rating").textContent =
        recipe.rating;

    document.getElementById("reviews").textContent =
        recipe.reviews;



    // Time

    document.getElementById("prepTime").textContent =
        recipe.prep;


    document.getElementById("cookTime").textContent =
        recipe.cook;


    document.getElementById("servings").textContent =
        recipe.servings;



    // Alert

    let alertBox =
        document.getElementById("alertBox");


    if (recipe.alert) {

        alertBox.style.display = "flex";

    } else {

        alertBox.style.display = "none";

    }



    // Ingredients

    let ingredientsList =
        document.getElementById("ingredientsList");


    ingredientsList.innerHTML = "";


    for (let i = 0; i < recipe.ingredients.length; i++) {

        ingredientsList.innerHTML += `

            <div class="ingredient">

                <span>${i + 1}</span>

                <p>${recipe.ingredients[i]}</p>

            </div>

        `;

    }



    // Instructions

    let instructionsList =
        document.getElementById("instructionsList");


    instructionsList.innerHTML = "";


    for (let i = 0; i < recipe.instructions.length; i++) {

        instructionsList.innerHTML += `

            <div class="step">

                <span>${i + 1}</span>

                <p>${recipe.instructions[i]}</p>

            </div>

        `;

    }



    // Nutrition

    let nutritionBox =
        document.getElementById("nutritionBox");


    nutritionBox.innerHTML = "";


    let nutritionIcons = [

        "bi-fire",

        "bi-person-fill",

        "bi-bar-chart-fill",

        "bi-droplet-fill",

        "bi-leaf-fill",

        "bi-cup-straw"

    ];


    let nutritionClasses = [

        "calories",

        "protein",

        "carbs",

        "fat",

        "fiber",

        "sodium"

    ];


    for (let i = 0; i < recipe.nutrition.length; i++) {

        nutritionBox.innerHTML += `

            <div class="nutrition-item">

                <div class="nutrition-icon ${nutritionClasses[i]}">

                    <i class="bi ${nutritionIcons[i]}"></i>

                </div>

                <span>
                    ${recipe.nutrition[i][0]}
                </span>

                <strong>
                    ${recipe.nutrition[i][1]}
                </strong>

            </div>

        `;

    }



    // Chef's Tips

    let tipsList =
        document.getElementById("tipsList");


    tipsList.innerHTML = "";


    for (let i = 0; i < recipe.tips.length; i++) {

        tipsList.innerHTML += `

            <div class="tip-item">

                <i class="bi bi-check-circle-fill"></i>

                <p>${recipe.tips[i]}</p>

            </div>

        `;

    }

}



// Tabs

let tabs =
    document.getElementsByClassName("tab");


let contents =
    document.getElementsByClassName("content");


for (let i = 0; i < tabs.length; i++) {

    tabs[i].onclick = function () {


        for (let j = 0; j < tabs.length; j++) {

            tabs[j].classList.remove("active");

        }


        tabs[i].classList.add("active");


        for (let j = 0; j < contents.length; j++) {

            contents[j].style.display = "none";

        }


        let tabName =
            tabs[i].getAttribute("data-tab");


        document.getElementById(tabName).style.display =
            "block";

    };

}



// Save Button

let saveButton =
    document.getElementById("saveButton");


saveButton.onclick = function () {

    if (saveButton.innerHTML.includes("bookmark-fill")) {

        saveButton.innerHTML =
            '<i class="bi bi-bookmark"></i>';

    } else {

        saveButton.innerHTML =
            '<i class="bi bi-bookmark-fill"></i>';

    }

};







let tryButton =
    document.getElementById("tryButton");


tryButton.onclick = function () {

    recipeNumber++;


    if (recipeNumber >= recipes.length) {

        recipeNumber = 0;

    }


    showRecipe();

};



// Show first recipe

showRecipe();