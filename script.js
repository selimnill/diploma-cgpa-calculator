document.querySelector(".submit").addEventListener("click", () => {
    // get the first gpa input value from user
    let first_gpa =  document.querySelector("#first-gpa").value;
    let first_gpa_percentage = (first_gpa / 100) * 5;
    let first_gpa_result = first_gpa_percentage.toPrecision(3);
    let second_gpa =  document.querySelector("#second-gpa").value;
    let second_gpa_percentage = (second_gpa / 100) * 5;
    let second_gpa_result = second_gpa_percentage.toPrecision(3);
    
    let third_gpa =  document.querySelector("#third-gpa").value;
    let third_gpa_percentage = (third_gpa / 100) * 5;
    let third_gpa_result = third_gpa_percentage.toPrecision(3);

    let fourth_gpa =  document.querySelector("#fourth-gpa").value;
    let fourth_gpa_percentage = (fourth_gpa / 100) * 10;
    let fourth_gpa_result = fourth_gpa_percentage.toPrecision(3);

    let fifth_gpa =  document.querySelector("#fifth-gpa").value;
    let fifth_gpa_percentage = (fifth_gpa / 100) * 15;
    let fifth_gpa_result = fifth_gpa_percentage.toPrecision(3);

    let sixth_gpa =  document.querySelector("#sixth-gpa").value;
    let sixth_gpa_percentage = (sixth_gpa / 100) * 20;
    let sixth_gpa_result = sixth_gpa_percentage.toPrecision(3);

    let seventh_gpa =  document.querySelector("#seventh-gpa").value;
    let seventh_gpa_percentage = (seventh_gpa / 100) * 25;
    let seventh_gpa_result = seventh_gpa_percentage.toPrecision(3);

    let eighth_gpa =  document.querySelector("#eighth-gpa").value;
    let eighth_gpa_percentage = (eighth_gpa / 100) * 15;
    let eighth_gpa_result = eighth_gpa_percentage.toPrecision(3);

    let total = parseFloat(first_gpa_result) + parseFloat(second_gpa_result) + parseFloat(third_gpa_result) + parseFloat(fourth_gpa_result) + parseFloat(fifth_gpa_result) + parseFloat(sixth_gpa_result) + parseFloat(seventh_gpa_result) + parseFloat(eighth_gpa_result);

    
    let total_gpa = total.toPrecision(3);


    document.querySelector(".output").innerHTML = `TOTAL CGPA : ${total_gpa}`;

    document.querySelector(".reset").addEventListener("click", () =>{
        document.querySelector(".output").innerHTML = `TOTAL CGPA : `

        document.querySelector('#first-gpa').value='';
        document.querySelector('#second-gpa').value='';
        document.querySelector('#third-gpa').value='';
        document.querySelector('#fourth-gpa').value='';
        document.querySelector('#fifth-gpa').value='';
        document.querySelector('#sixth-gpa').value='';
        document.querySelector('#seventh-gpa').value='';
        document.querySelector('#eighth-gpa').value='';
    })

})