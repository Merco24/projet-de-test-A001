//nombre mistere = 8
const e06 = document.querySelector("#e06");
e06.addEventListener("click", function () {
    let num = 8
     let chiffre
     while(chiffre !== num){
        chiffre=prompt('Votre chiffre: ') * 1
        if(chiffre > num){
            alert('Désolé cest moins')
        }
        else if(chiffre < num){
            alert('désolé cest Plus')
        }
     }
     alert('Bravo! Félicitation')

     });
     /*
      do{
        let num = prompt("Enter the mystery number: ") * 1;
    if(num === 8){
        console.log("Félicitation vous avez trouvez le nombre mystere !!");
    }
    else{
        console.log("Desolé vous n'avez pas trouvez le nombre mystere!! Réessayer");
    }
    }while(num ==8);*/


    //E07 Les fonctions

const e07 = document.querySelector("#e07");
e07.addEventListener("click", function () {
    
    const test = Math.floor(Math.random()*10)
    console.log(test)
    for(let i=0; i<3; i++){
    num = prompt("Enter the number: ")
    if(num < test){
        alert("Sorry! It's Superior")
    }
    else if(num > test){
        alert("Sorry! It's Inferior")
    }
    else{
        alert("Congratulation! It's true")
        break
    }
    }

});    
/* Programme de test de nombre Premier
function isPremier(n){
    if(n<2){
        return false
    }
    for(let i=n-1; i>1; i--){
        if( n%i === 0){
            return false
        }
    }
    return true
}
console.log(isPremier(0))
console.log(isPremier(1))
console.log(isPremier(5))
console.log(isPremier(19))
console.log(isPremier(7))
console.log(isPremier(7))
console.log(isPremier(10))
*/
