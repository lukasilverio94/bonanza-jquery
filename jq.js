//Data for our Random Quote
const quotes = [
  {
    quote:
      "Learning to program is like learning a new language; the best way to become fluent is through practice and persistence.",
    author: "Anonymous",
  },
  {
    quote:
      "Programming is not about what you know; it's about what you can figure out.",
    author: "Chris Pine",
  },
  {
    quote: "The best coders are those who never stop learning.",
    author: "Ralph Fasano",
  },
  {
    quote: "Programming is the closest thing we have to superpowers.",
    author: "Drew Houston",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "Programming is not about typing, it's about thinking.",
    author: "Rich Hickey",
  },
  {
    quote: "The only source of knowledge is experience.",
    author: "Albert Einstein",
  },
  {
    quote: "Every programmer is an author.",
    author: "S. Fowler",
  },
  {
    quote: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "Learning never exhausts the mind.",
    author: "Leonardo da Vinci",
  },
  {
    quote:
      "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
    author: "Dr. Seuss",
  },
  {
    quote:
      "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    author: "Albert Schweitzer",
  },
  {
    quote:
      "Programmers are not made, they are grown with passion and patience.",
    author: "Anonymous",
  },
  {
    quote: "The expert in anything was once a beginner.",
    author: "Helen Hayes",
  },
  {
    quote: "Code is like humor. When you have to explain it, it's bad.",
    author: "Cory House",
  },
];

//Slide toggle div
$("#slide-btn").click(() => {
  $("#slide-div").slideToggle();
});

//FadeIn and fadeOut (fadeToggle)
function fadeImg() {
  $("#shrek-card-img").fadeToggle(1000, () => {});
}
function changeColor() {
  $("#paragraph-change-color").toggleClass("text-danger");
}

// append elements
$("#append-btn").click(() => {
  $("#append-text").append(
    "<p>Appended element with a class to center it!</p>"
  );
  //add class to text-center:
  $("#append-text").addClass("text-center text-info small");
});

//Input, use val() to get value:
$("#getValueBtn").click(() => {
  const inputValue = $("#myInput").val();
  $("#result").text("The input value is: " + inputValue);
  $("#result").addClass("text-danger fw-semibold");
  //clear input
  $("#myInput").val("");
});

// Quote Generator (Used html() and text() from jquery)
const $quoteBtn = $("#quote-btn");

function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  $("#quote").html(quotes[randomIndex].quote);
  $("#author").text("by - " + quotes[randomIndex].author);
}

$quoteBtn.click(displayRandomQuote);
displayRandomQuote();

// Show or Hide Quote Container
$("#show-quote").click(() => {
  $("#random-quotes").show();
});

$("#hide-quote").click(() => {
  $("#random-quotes").hide();
});
