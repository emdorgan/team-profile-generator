// this js file handles generating the HTML file using template literals
// https://github.com/emdorgan

// Each role has one 'special' feature that the others don't, so this function figures out the role of the object comming in
// and renders that category
function renderSpecialTrait(employee){
    if(employee.getRole() === "Manager"){
        return `Office Number: ${employee.getOfficeNumber()}`;
    }
    else if(employee.getRole() === "Engineer"){
        const git = employee.getGithub()
        return `GitHub: <a href="https://github.com/${git}" target="_blank">${git}</a>`;
    }
    else if(employee.getRole() === "Intern"){
        return `School: ${employee.getSchool()}`;
    }
}
// there are three icons for each employee type. This simple function figures out the role and assigns the appropriate icon
function renderIcon(employee){
    if(employee.getRole() === "Manager"){
        return `<i class="fas fa-mug-hot"></i>`;
    }
    else if(employee.getRole() === "Engineer"){
        return `<i class="fas fa-cogs"></i>`;
    }
    else if(employee.getRole() === "Intern"){
        return `<i class="fas fa-user-graduate"></i>`;
    }
};

// iteratively builds the cards, takes in the array of objects as data and uses a forEach, uses renderIcon and renderSpecialTrait since those two depend on the employee type
function renderCards(data){
    let cards ="";
    data.forEach(element => {
        cards = cards.concat(
            `<div class="card custom-card" style="width: 18rem;">
            <div class="card-body custom-cb">
                <h5 class="card-title">${element.getName()}</h5>
                <h5 class="card-title custom-role">${renderIcon(element)} ${element.getRole()}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${element.getId()}</li>
                <li class="list-group-item">email: <a href="mailto:${element.getEmail()}">${element.getEmail()}</a></li>
                <li class="list-group-item">${renderSpecialTrait(element)}</li>
            </ul>
        </div>
        `);
    })
    return cards;
}
// the rest of the HTML page, which never changes, and has all the stylesheet and comments
function generateHTML(data){
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <!-- Your HTML has been generated -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- link to a reset stylesheet in this directory -->
    <link rel="stylesheet" type="text/css" href="./reset.css" />
    <!-- Font Awesome stylesheet link -->
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" 
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    <!-- Bootstrap stylesheet link -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" 
        integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
        <!-- link to stylesheet in this directory -->
    <link rel="stylesheet" type="text/css" href="./style.css" />
</head>
<body>
    <nav class="navbar navbar-light custom-nav">
        <span class="navbar-brand mb-0 h1 custom-header">My Team</span>
    </nav>
    <div class="container-custom">
        ${renderCards(data)}
    </div>
    <!-- Bootstrap script link -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
</body>
</html>`
}

module.exports = generateHTML;