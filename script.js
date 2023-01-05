var quotes = [
    {
        quote: "Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.",
        writter: "- Dr. Seuss"
        },
        {
        quote: "This too, shall pass.",
        writter: "- Anonymous"
        },
        {
        quote: "Keep your eyes on the stars and your feet on the ground.",
        writter: "- Theodore Roosevelt"
        },
        {
        quote: "The only person you should try to be better than is the person you were yesterday.",
        writter: "- Anonymous"
        },
        {
        quote: "Never be bullied into silence. Never allow yourself to be made a victim. Accept no one's definition of your life; define yourself.",
        writter: "- Harvey Fierstein"
        },
        {
        quote: "Faith is the art of holding on to things your reason has once accepted, in spite of your changing moods.",
        writter: "- C.S. Lewis"
        },
        {
        quote: "A man who flies from his fear may find that he has only taken a shortcut to meet it.",
        writter: "- Sador", 
        },
        {
        quote:  "Life's too mysterious to take too serious.",
       writter: "- Mary Engelbreit"
        },
        {
        quote: "No one can make you feel inferior without your consent.",
        writter: "- Eleanor Roosevelt"
        },
        {
        quote: "The woman who follows the crowd will usually go no further than the crowd. The woman who walks alone is likely to find herself in places no one has been before.",
        writter: "- Albert Einstein"
        },
        {
        quote: "You can't go around building a better world for people. Only people can build a better world for people. Otherwise it's just a cage.",
        writter: "- Terry Pratchett", 
        },
        {
        quote: "There isn't a way things should be. There's just what happens, and what we do.",
        writter: "- Terry Pratchett", 
        },
        {
        quote: "It's not about how hard you can hit; it's about how hard you can get hit and keep moving forward.",
        writter: "- Rocky Balboa",
        },
        {
        quote: "More fuck yeah, less fuck that.",
        writter: "- Anonymous"
        },
        {
        quote: "If you want to go fast, go alone. If you want to go far, go together.",
        writter: "- African proverb"
        },
        {
        quote: "It's OK to not be OK, as long as you don't stay that way.",
        writter: "- Anonymous"
        },
        {
        quote: "I can be changed by what happens to me but I refuse to be reduced by it.",
        writter: "- Maya Angelou"
        },
        {
        quote: "Believe you can and you're halfway there.",
        writter: "- T. Roosevelt"
        },
        {
        quote: "May I never be complete. May I never be content. May I never be perfect.",
        writter: "- Chuck Palahniuk"
        },
        {
        quote: "Nothing in life is to be feared; it is only to be understood. Now is the time to understand more so that we may fear less.",
        writter: "- Marie Curie"
        },
        {
    
        quote: "Those who don't believe in magic will never find it.",
       writter: "- Roald Dahl"
        },
        {
        quote: "There is no elevator to success  you have to take the stairs.",
        writter: "- Anonymous"
        },
        {
        quote: "Plant your garden and decorate your own soul, instead of waiting for someone to bring you flowers.",
        writter: "- Jose Luis Borges"
        },
        {
        quote: "It does not do to dwell on dreams and forget to live.",
        writter: "- Albus Dumbledore", 
        },
        {
        quote: "Don't sweat the petty things and don't pet the sweaty things.",
        writter: "- George Carlin"
        },
        {
        quote: "Do what you feel in your heart to be right, for you'll be criticized anyway.",
        writter: "- Eleanor Roosevelt"
        },
        {
        quote: "Do not set yourself on fire in order to keep others warm.",
        writter: "- Anonymous"
        },
        {
        quote: "The way I see it, every life is a pile of good things and bad things. The good things don't always soften the bad things, but vice versa, the bad things don't always spoil the good things and make them unimportant.",
        writter: "- Doctor Who"
        },
        {
        quote: "It's supposed to be hard. If it were easy, everyone would do it.",
        writter: "- Jimmy Dugan",
        },
        {
        quote: "Ask yourself if what you're doing today will get you closer to where you want to be tomorrow.",
        writter: "- Anonymous"
        },
        {
        quote: "Life may not be the party we hoped for, but while we're here, we should dance.",
        writter: "- Anonymous"
        },
        {
        quote: "Never cowardly or cruel. Never give up, never give in.",
        writter: "- Doctor Who"
        },
        {
        quote: "In 20 years, you probably won't even remember this.",
        writer: "- Anonymous"
        },
        {
        quote: "Love all, trust a few, do wrong to none.",
        writter: "- William Shakespare"
        },
        {
        quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        writter: "- Aristotle"
        }
];

let btn = document.getElementById("Qbtn");
let writter = document.querySelector(".writter");
let quote = document.querySelector(".quote");

btn.addEventListener("click", () =>{
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;

    writter.innerHTML = quotes[random].writter;
})