// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

//Promises in Javascript
//Tasks to do
//WALK THE DOG
//CLEAN THE KITCHEN
//TAKE OUT THE TRASH

function walkTheDog(){
    return new Promise (( resolve, reject) => {
            setTimeout(() => {
                 const walkTheDog = true;
                 if(walkTheDog){
                    resolve("Dog walked")
                }
                else{
                    reject("DID NOT WALKED THE DOG");
                }
                }, 2500);
        })
         
    }


function cleanTheKitchen(){
    return new Promise ((resolve, reject) => {
         setTimeout(() => {
         const cleanedKitchen = true;
                 if(cleanedKitchen){
                    resolve("Kitchen Cleaned")
                }
                else{
                    reject("DID NOT cleaned");
                }
    }, 3500)
    })
   
}

function takeOutTheTrash(){
    return new Promise (( resolve, reject) => {
        setTimeout(() => {
        const trashOut = false;
                 if(trashOut){
                    resolve("Trash Out")
                }
                else{
                    reject("DID NOT TAKE THE TRASH OUT");
                }
    }, 500)
    })
}

// Promise.all([walkTheDog(), cleanTheKitchen(), takeOutTheTrash() ])
// .then(res=>{
//         console.log(results[0]); // "Dog walked"
//         console.log(results[1]); // "Kitchen cleaned"
//         console.log(results[2]); }
//         )
//          .catch(err => {
//         console.log(err); // Logs the error from the first rejected promise
//     });

walkTheDog().then(res => {console.log(res); return cleanTheKitchen()})
            .then(res => {console.log(res); return takeOutTheTrash()})
            .catch(err => console.log(err))
