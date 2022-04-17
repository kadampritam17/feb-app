const movies = [
    { title: `A New Hope`, body:`After Princess Leia, the leader of the Rebel Alliance, is held hostage by Darth Vader, Luke and Han Solo must free her and destroy the powerful weapon created by the Galactic Empire.`},
    { title: `The Empire Strikes Back`, body: `Darth Vader is adamant about turning Luke Skywalker to the dark side. Master Yoda trains Luke to become a Jedi Knight while his friends try to fend off the Imperial fleet.` },
/*     { title: `36th chamber of Shaolin`, body: `kung fu school movie  turning Luke Skywalker to the dark side. Master Yoda trains Luke to become a Jedi Knight while his friends try to fend off the Imperial fleet.` } */
]

function getMovies(){
setTimeout(() => {
    movies.forEach((movie, index) => {
        console.log(movie.title)
    })
}, 1000);
}

function createMovies(movie){
return new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if(movies.length <3)
            movies.push(movie);
        else
          error = true;

        if(!error){
            resolve("OK ALL");
        }
        else{
            reject('Error: Something went wrong!')
        }
    }, 2000);
})
}

async function init(){
    try{
   var resolvedVal =await createMovies({ title: `Pushpa`, body:`jhukega nahi theme`});
console.log(resolvedVal)
    }catch{
        console.log("Only 3 movies are allowed in this pack")
    }
getMovies(); 

}

init()

