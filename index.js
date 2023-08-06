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

    
    
    