const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooks"
);

const bookSeed = [
    {
        authors: [ "Rupi Kaur"],
        description: "Divided into five chapters and illustrated by Kaur, the sun and her flowers is a journey of wilting, falling, rooting, rising, and blooming. A celebration of love in all its forms. this is the recipe of life said my mother as she held me in her arms as i wept think of those flowers you plant in the garden each year they will teach you that people too must wilt fall root rise in order to bloom",
        image: "http://books.google.com/books/content?id=6yEsDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        link: "https://play.google.com/store/books/details?id=6yEsDwAAQBAJ&source=gbs_api",
        title: "The Sun and Her Flowers",
        date: new Date(Date.now())
    },
    {
        authors: ["Suzanne Collins"],
        description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
        image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
        title: "The Hunger Games",
        date: new Date(Date.now())
    },
    {
        authors: [ "Erin Benzakein" ],
        description: "Learn how to buy, style, and present seasonal flower arrangements for every occasion. With sections on tools, flower care, and design techniques, Floret Farm's A Year in Flowers presents all the secrets to arranging garden-fresh bouquets.",
        image: "http://books.google.com/books/content?id=GxXGDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE721ruevkuvwviysnJbCOZL24tpMuiyAqJnIUP0MUzCqJsh5S7IgOg-jqeSpJJCTwB9KmHPxV5BdDXHoYMmXGmo8uRmvcflWlbfSD2hutkSNWLRdKtLbQZU1aEb3q8b9ixP8BNzv&source=gbs_api",
        link: "https://play.google.com/store/books/details?id=GxXGDwAAQBAJ&source=gbs_api",
        title: "Floret Farm's A Year in Flowers",
        date: new Date(Date.now())
    },
    {
        authors: ["Johanna Basford"],
        description: "A fantastic floral adventure and the latest sensational coloring book from bestselling artist Johanna Basford This book invites you to travel the world and beyond into fantastical realms, discovering exotic blooms and extraordinary plants along the way. From floating gardens of water poppies in South Africa to delicate cosmos in Japan, and from fanciful toadstools to enchanted fairytale gardens, an abundance of fascinating florals awaits, ready for you to bring to life in color. Join \"colorist queen\" (New York Magazine) Johanna Basford in her World of Flowers on a dazzling floral adventure of fantasy and imagination, filled with countless new blooms and blossoms to discover.",
        image:  "http://books.google.com/books/content?id=lD9wDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        link:  "http://books.google.com/books?id=lD9wDwAAQBAJ&dq=flowers&hl=&source=gbs_api",
        title: "World of Flowers",
        date: new Date(Date.now())
    },
    {
        authors: ["Gail Saunders-Smith"],
        description: "Simple text and photographs depict the parts of flowers and their pollination.",
        image: "http://books.google.com/books/content?id=ogs_KDUQLSsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        link: "http://books.google.com/books?id=ogs_KDUQLSsC&dq=flowers&hl=&source=gbs_api",
        title: "Flowers",
        date: new Date(Date.now())
    },
    {
        authors: ["Holly Lachappell"],
        description: "Are you exhausted in this journey called life? Do you need a fresh dose of God's presence and promises? Come and take a break as we walk through the three gardens of Jesus' life: Eden, Gethsemane and The Tomb. There, He teaches His promises as they are whispered on the wind. He teaches of patience in the quiet hurry of a hummingbird, grace through the Monarch butterfly and joy in the small finches flying.",
        image: "http://books.google.com/books/content?id=uM5CME-ZdREC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        link: "http://books.google.com/books?id=uM5CME-ZdREC&dq=flowers&hl=&source=gbs_api",
        title: "Flowers of Grace",
        date: new Date(Date.now())
    },

];

db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });