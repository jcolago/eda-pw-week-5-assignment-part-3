console.log('***** Music Collection *****')
//This will be the basis for our music array.
// We will be adding to this array via the later functions.
const collection=[];

//This function will add an album's title, artist and year published to a new object and then add that object to the collection array.

function addToCollection(title,artist, yearPublished){
    const album={};
    album.title = title;
    album.artist = artist;
    album.yearPublished = yearPublished;
    collection.push(album);
    return console.log('This album was added to the collection', album);
}
//This tests the addToCollection function.
//This section also adds 6 albums to the collection.

addToCollection('Distant Worlds: Music from Final Fantasy', 'Nobuo Uematsu', '2007');
addToCollection('Heroes', 'The Midnight', '2022');
addToCollection('Brand New Eyes', 'Paramour', '2009');
addToCollection('Monsters', 'The Midnight', '2020');
addToCollection('Viva La Vida or Death and All His Friend', 'Coldplay', '2008');
addToCollection('head or heart', 'Christina Perri', '2014');

//This section will log the collection array.
console.log(collection)

function showCollection(Array){
    for (let i=0; i<Array.length; i++){ 
    }
    Array.forEach(({title, artist, yearPublished})=>{console.log(`${title} by ${artist}, published in ${yearPublished}.`)});
}


console.log(showCollection(collection));