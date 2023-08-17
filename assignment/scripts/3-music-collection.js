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
    collection.push(album)
    return console.log('This album was added to the collection', album)
}

addToCollection('Distant Worlds: Music from Final Fantasy', 'Nobuo Uematsu', '2007')