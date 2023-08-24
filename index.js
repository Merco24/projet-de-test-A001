//E06 Les Boucles
//Touvre le nombre 8
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

    alert("Bienvenus!! Quels fonctions souhaitez-vous testé ?")
    alert(`Faite un choix: \n 1: Le nombre Aléatoire\n 2: Es un Palindrome\n 3: Moyenne rang\n 4: Ocuurence des mots`)
    const choix = prompt("Entrer votre choix: ") * 1

    switch (choix) {
        
        case 1: //Le nombre aleatoire
            const test = Math.floor(Math.random()*10) //Génération d'un nombre compris entre 0 et 10
            console.log(test)
            alert("Votre objectif est de trouver un nombre compris entre 0 et 10")
            alert("Vous disposez de  trois tentatives!!")
            for(let i=0; i<3; i++){
                num = prompt("Entrer un nombre: ")
                if(num < test){
                alert("Désolé c'est Supérieur!!")
                }
                else if(num > test){
            alert("Désolé c'est Inférieur!!")
            }
            else{
            alert("Félicitation vous avez trouvé le nombre mystère!!")
            break
            }
            }

            break;

        case 2: //Es un Palindrome ?
            alert("Ici nous testerons si vos mots sont des palindromes")
            const word = prompt("Entrer un mot: ")
            isPalindrome(word)
            function isPalindrome(words){
                const letters = words.split('')
                letters.reverse()
                const revertWords = letters.join('')
                if (revertWords.toUpperCase() === words.toUpperCase()) {
                    alert("Ce nombre est un Palindrome!!")
                } else {
                    alert("Ce nombre n'est pas un Palindrome!!")
                }
            }

            break;
        case 3: //Moyenne, Rang élève
            
            const students = [
                {
                    name: 'Stella',
                    notes: [12,8,9,14]
                },
                {
                    name: 'Junior',
                    notes: [13,6,15,8]
                },
                {
                    name: 'Léila',
                    notes: [12,7,14]
                },
                {
                    name: 'Céline',
                    notes: [16,12,7,6]
                },
                {
                    name: 'Alex',
                    notes: [15,5,8,14]
                }
            ]
            const moyenne = (notes) =>{
                let sum = 0
                for (let note of notes) {
                    sum = sum + note
                }
                return sum / notes.length
            }
            const compareStud = (a, b) =>{
                return b.moyenne - a.moyenne
            }
            for(let student of students){
                student.moyenne = moyenne(student.notes)
                student.bestNote = Math.max(...student.notes)
                student.worstNote = Math.min(...student.notes)
            }
            students.sort(compareStud) //Classeement du 1er au dernier
            console.log(students)
            const formatStud = (student) =>{
                return `${student.name} avec une moyenne de ${student.moyenne} meilleure note ${student.bestNote} pire note ${student.worstNote}`
            }
            console.log(`Top 3 des étudiants
            1: ${formatStud(students[0])}
            2: ${formatStud(students[1])}
            3: ${formatStud(students[2])}`)
            //Affichage du Max et du Min

            break;
            
            case 4: //Ocuurence des mots
                const phrase = prompt("Entrer votre texte: ")
                frequence = {}
                const words = phrase.toLowerCase().replaceAll('?','').replaceAll(',','') //Elimination des caractères spéciaux
                .replaceAll('!','').replaceAll('.','').replaceAll(';','').replaceAll(':','').replaceAll("'","").split(' ')
                for(let word of words){ //Calcul des occurrences
                    if(word !== ''){
                        if(frequence[word]){
                            frequence[word]++
                        }
                        else{
                            frequence[word] = 1
                        }
                    }
                }
                const frequenceArray = []
                for(let k in frequence){
                    frequenceArray.push({ //Ajout des paramètres word et count
                        word: k,
                        count: frequence[k]
                    })
                }
                frequenceArray.sort( (a, b) => b.count - a.count )
                console.log(frequenceArray)
                console.log(`Le top trois des mots les plus fréquents sont: 
                "${frequenceArray[0].word} avec ${frequenceArray[0].count} occurrence",
                 "${frequenceArray[1].word} avec ${frequenceArray[1].count} occurrence", 
                 "${frequenceArray[2].word} avec ${frequenceArray[2].count} occurence"`)

                break;
        default:
            alert("Entrer un nombre compris entre 1 et 5")
            break;
    }
    console.log(students)
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

//E09 E010 Les Classes

const e09 = document.querySelector("#e09")
e09.addEventListener("click", function (){
    alert("Bienvenus dans l'onglets Classe")
    alert(`Faite un choix: \n 1. Figure géometrrique\n 2. Bibliothèque`)
    const choix = prompt('Entrer votre choix: ') * 1
    if(choix == 1){
        class Rectangle {
            constructor (width, height) {
                this.width = width
                this.height = height
            }
            
            get perimeter (){
                return (this.width + this.height) * 2
            }
            
            get isValid (){
                return this.height > 0 && this.width > 0
            }
        
            isBiggerThan (object){
                return this.perimeter > object.perimeter
            }
        }

        class Square extends Rectangle{
        
            constructor(width){
                super (width, width)
            }
    
        }
        
        const r = new Rectangle( -10,17)
        console.log(r.perimeter)
        console.log(r.isValid)
        const r2 =new Rectangle(9, 17)
        console.log(r2.perimeter)
        console.log(r2.isValid)
        const c = new Square(12)
        console.log(c.perimeter)
        console.log(c.isValid)
        console.log(r.isBiggerThan(c)) // Es ce que r est supérieur à c
        alert('Finiish')
    }
    else if(choix == 2){
        class Library {
            #books = []
        
            addBook (book){
                this.#books.push(book)
            }
        
            addBooks (books){
                for(let book of books){
                    this.addBook(book)
                }
            }
        
            findBookbyLetter (letter){
                const bookR = []
                for(let book of this.#books){
                    if(book.title[0].toLowerCase() === letter.toLowerCase()){
                        bookR.push(book)
                    }
                }
                return bookR
            }
        }
        class Book {
            #book = 1

            constructor (title, size){
                this.title  = title
                this.size  = size
            }

            get page(){
                return this.#book
            }

            nextPage(){
                if(this.#book < this.size){
                    this.#book++
                }
                else{
                    console.log(`Désolé la dernière page est ${this.size}`)
                }
            }
            close(){
                this.#book = 1
            }
        }
        //Test
        const b1 = new Book("Saison blanche et sèche", 4)
        console.log(b1)
        console.log(b1.page)
        b1.nextPage()
        console.log(b1.page)
        b1.close()
        console.log(b1.page)

        const l1 = new Library()
        l1.addBook(b1)
        l1.addBooks([
            new Book("Seigeur des aneaux", 13),
            new Book("Vrai ou Faux", 20),
            new Book("My Lirics", 8)
        ])
        console.log(l1.findBookbyLetter('S'))
        alert('Finish')
    }
    else {
        console.log("Entrer un nombre compris entre 1 et 2")
    }
    
})
