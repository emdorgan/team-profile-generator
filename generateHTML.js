// this js file handles generating the HTML file using template literals

// <h5 class="card-title">${element.name}</h5>
// <h5 class="card-title custom-role">${element.getRole()}</h5>

function renderSpecialTrait(){

}

function renderIcon(){

};

function renderCards(data){
    let cards ="";
    data.forEach(element => {
        cards = cards.concat(
            `<div class="card custom-card" style="width: 18rem;">
            <div class="card-body custom-cb">
                <h5 class="card-title">${element.name}</h5>
                <h5 class="card-title custom-role">${element.getRole()}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Vestibulum at eros</li>
            </ul>
        </div>
        `);
    })
    return cards;
}

function generateHTML(data){
    console.log(data);
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <!-- This is a SAMPLE HTML file, used to determine the CSS and the card template which will be rendered in javascript -->
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