let balance = 0;
let budget = 0;
let expTitle ='';
let expAmount = 0;
let totalExpense = 0;
let temp= '';
let table= '';
counter= 0;

// add budget
function budgetAdd(){
    budget=amount_income.value

    balance=budget
    if(budget <= 0){
        alert("value connot be empty or negative")
    }
    else{
        document.getElementById("amount_earned").innerHTML=`${budget}`
        document.getElementById("amount_available").innerHTML=`${budget}`

    }
}


function reset(){
    window.location="index.html"
}


// adding expense
function addExpense(){
    expTitle=description.value
    expAmount=amount.value;
        if(budget < 0){
            alert("add the budget amount");
        }

        else{

            if(expAmount <= 0){
                alert("Vlaue cannot be empty or negative");

            }
            else{
                expAmount = parseFloat(expAmount);
                balance -= expAmount;
                document.getElementById("amount_available").innerHTML=`${balance}`
                balance = parseFloat(balance).toFixed(2)
                totalExpense += expAmount;
                document.getElementById("amount_spent").innerHTML=`${totalExpense}`
                temp = table

                table =`<tr>
                <td class=" pt-2 text-center" >${expTitle}</td>
                <td class=" pl-5 pt-2 text-center text-success">₹ ${expAmount}</td>
                <td onclick="del(this)"class=" pl-5 pt-2 text-center material-symbols-outlined text-danger" style=" cursor: pointer;" name="${expAmount}">delete</td>
                </tr>`;
               


               

            table += temp
            console.log(temp);

                
            document.getElementById('table_exp').innerHTML = table;
            document.getElementById("amount_spent").innerHTML = `${totalExpense}`;
            document.getElementById("amount_available").innerHTML = `${balance}` ;
        }
    }
        
            



}

function del(r){

    
     
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table_exp").deleteRow(i);


    
        let delData = r.getAttribute("name");
        totalExpense -= delData;
        balance = budget;
        balance -= totalExpense;
        document.getElementById("amount_spent").innerHTML = `${totalExpense}`;
        document.getElementById("amount_available").innerHTML = `${balance}`;
    
        


}




               


               

            

