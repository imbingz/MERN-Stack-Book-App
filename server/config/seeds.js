const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooks"
);

const bookSeed = [
    {
        id: "6yEsDwAAQBAJ",
        authors: ["Rupi Kaur"],
        description: "Divided into five chapters and illustrated by Kaur, the sun and her flowers is a journey of wilting, falling, rooting, rising, and blooming. A celebration of love in all its forms. this is the recipe of life said my mother as she held me in her arms as i wept think of those flowers you plant in the garden each year they will teach you that people too must wilt fall root rise in order to bloom",
        image: "http://books.google.com/books/content?id=6yEsDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        infoLink: "https://play.google.com/store/books/details?id=6yEsDwAAQBAJ&source=gbs_api",
        title: "The Sun and Her Flowers",
        date: new Date(Date.now())
    },
    {
        id: "OP8C9mKQxAMC",
        authors: ["J. S. Kenny"],
        description:  "Caring for Cut Flowers shows florists and growers how to make cut flowers last longer. While proper postharvest techniques will not magically transform poor quality flowers into first class material, a few basic, inexpensive techniques can maximise the vase life of good quality material.",
        image: "http://books.google.com/books/content?id=Pv1eUCKdP-QC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        infoLink: "http://books.google.com/books?id=Pv1eUCKdP-QC&dq=flowers&hl=&source=gbs_api",
        title: "Caring for Cut Flowers",
        date: new Date(Date.now())
    },
    {
        id: "GxXGDwAAQBAJ",
        authors: ["Erin Benzakein"] ,
        description: "Learn how to buy, style, and present seasonal flower arrangements for every occasion. With sections on tools, flower care, and design techniques, Floret Farm's A Year in Flowers presents all the secrets to arranging garden-fresh bouquets.",
        image: "http://books.google.com/books/content?id=GxXGDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE721ruevkuvwviysnJbCOZL24tpMuiyAqJnIUP0MUzCqJsh5S7IgOg-jqeSpJJCTwB9KmHPxV5BdDXHoYMmXGmo8uRmvcflWlbfSD2hutkSNWLRdKtLbQZU1aEb3q8b9ixP8BNzv&source=gbs_api",
        infoLink: "https://play.google.com/store/books/details?id=GxXGDwAAQBAJ&source=gbs_api",
        title: "Floret Farm's A Year in Flowers",
        date: new Date(Date.now())
    },
    {
        id: "fiBbdJ1sdA8C",
        authors: ["Johanna Basford"],
        description: "The author traces the phenomenon of ascribing sentimental meaning to floral imagery from its beginnings in Napoleonic France through its later transformations in England and America. At the heart of the book is a depiction of what the three most important flower books from each of the countries divulge about the period and the respective cultures.",
        image:  "http://books.google.com/books/content?id=fiBbdJ1sdA8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        infoLink:  "https://play.google.com/store/books/details?id=fiBbdJ1sdA8C&source=gbs_api",
        title: "The Language of Flowers",
        date: new Date(Date.now())
    },
    {
        id: "ogs_KDUQLSsC",
        authors: ["Gail Saunders-Smith"],
        description: "Simple text and photographs depict the parts of flowers and their pollination.",
        image: "http://books.google.com/books/content?id=ogs_KDUQLSsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        infoLink: "http://books.google.com/books?id=ogs_KDUQLSsC&dq=flowers&hl=&source=gbs_api",
        title: "Flowers",
        date: new Date(Date.now())
    },
    {
        id: "uM5CME-ZdREC",
        authors: ["Holly Lachappell"],
        description: "Are you exhausted in this journey called life? Do you need a fresh dose of God's presence and promises? Come and take a break as we walk through the three gardens of Jesus' life: Eden, Gethsemane and The Tomb. There, He teaches His promises as they are whispered on the wind. He teaches of patience in the quiet hurry of a hummingbird, grace through the Monarch butterfly and joy in the small finches flying.",
        image: "http://books.google.com/books/content?id=uM5CME-ZdREC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        infoLink: "http://books.google.com/books?id=uM5CME-ZdREC&dq=flowers&hl=&source=gbs_api",
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