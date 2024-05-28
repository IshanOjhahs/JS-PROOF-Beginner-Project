/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT ({name, description, creator, rarity, yearCreated}) {
    const NFT = {
        "name": name,
        "description": description,
        "creator": creator,
        "rarity": rarity,
        "yearCreated": yearCreated
    }
    NFTs.push(NFT);
    console.log("Minted: " + name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0; i< NFTs.length; i++){
        console.log("\nID: \t\t\t" + (i + 1));
        console.log("Name: \t\t\t" + NFTs[i]["name"]);
        console.log("Description: \t" + NFTs[i]["description"]);
        console.log("Creator: \t\t" + NFTs[i]["creator"]);
        console.log("Rarity: \t\t" + NFTs[i]["rarity"]);
        console.log("Year Created: \t" + NFTs[i]["yearCreated"]);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log( "\n" + NFTs["length"]);
}

// call your functions below this line
mintNFT({
    name: "Stellar Dragon",
    description: "A magnificent dragon that soars through the stars.",
    creator: "Celestial Artisans",
    rarity: "Legendary",
    yearCreated:  "2024"
});
mintNFT({
    name: "Forest Sprite",
    description: "A whimsical sprite that protects forest.",
    creator: "Nature Studios",
    rarity: "Rare",
    yearCreated:  "2023"
});
mintNFT({
    name: "Cyber Samurai",
    description: "A samurai from the future with cybernetic enhancements.",
    creator: "Future Forge",
    rarity: "Epic",
    yearCreated:  "2025"
});
mintNFT({
    name: "Shadow Assasin",
    description: "A silent assasin moving through the shadows.",
    creator: "Celestial Artisans",
    rarity: "Epic",
    yearCreated:  "2022"
});
listNFTs();
getTotalSupply();
