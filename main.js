$(document).ready(function() {
  String.prototype.scan = function(regex) {
    if (!regex.global) throw "regex must have 'global' flag set";
    var r = [];
    this.replace(regex, function() {
      r.push(Array.prototype.slice.call(arguments, 1, -2));
    });
    return r;
  };
  getBible("tamilBible", "./tamil.xml");
  getBible("nkjvBible", "./nkjv.xml");
  window.bibleRef = [
    { book_number: 1, english_name: "Genesis", tamil_name: "ஆதியாகமம்" },
    { book_number: 2, english_name: "Exodus", tamil_name: "யாத்திராகமம்" },
    { book_number: 3, english_name: "Leviticus", tamil_name: "லேவியராகமம்" },
    { book_number: 4, english_name: "Numbers", tamil_name: "எண்ணாகமம்" },
    { book_number: 5, english_name: "Deuteronomy", tamil_name: "உபாகமம்" },
    { book_number: 6, english_name: "Joshua", tamil_name: "யோசுவா" },
    { book_number: 7, english_name: "Judges", tamil_name: "நியாயாதிபதிகள்" },
    { book_number: 8, english_name: "Ruth", tamil_name: "ரூத்" },
    { book_number: 9, english_name: "1 Samuel", tamil_name: "1 சாமுவேல்" },
    { book_number: 10, english_name: "2 Samuel", tamil_name: "2 சாமுவேல்" },
    { book_number: 11, english_name: "1 Kings", tamil_name: "1 இராஜாக்கள்" },
    { book_number: 12, english_name: "2 Kings", tamil_name: "2 இராஜாக்கள்" },
    { book_number: 13, english_name: "1 Chronicles", tamil_name: "1 நாளாகமம்" },
    { book_number: 14, english_name: "2 Chronicles", tamil_name: "2 நாளாகமம்" },
    { book_number: 15, english_name: "Ezra", tamil_name: "எஸ்றா" },
    { book_number: 16, english_name: "Nehemiah", tamil_name: "நெகேமியா" },
    { book_number: 17, english_name: "Esther", tamil_name: "எஸ்தர்" },
    { book_number: 18, english_name: "Job", tamil_name: "யோபு" },
    { book_number: 19, english_name: "Psalms", tamil_name: "சங்கீதம்" },
    { book_number: 20, english_name: "Proverbs", tamil_name: "நீதிமொழிகள்" },
    { book_number: 21, english_name: "Ecclesiastes", tamil_name: "பிரசங்கி" },
    {
      book_number: 22,
      english_name: "Song of Solomon",
      tamil_name: "உன்னதப்பாட்டு"
    },
    { book_number: 23, english_name: "Isaiah", tamil_name: "ஏசாயா" },
    { book_number: 24, english_name: "Jeremiah", tamil_name: "எரேமியா" },
    { book_number: 25, english_name: "Lamentations", tamil_name: "புலம்பல்" },
    { book_number: 26, english_name: "Ezekiel", tamil_name: "எசேக்கியேல்" },
    { book_number: 27, english_name: "Daniel", tamil_name: "தானியேல்" },
    { book_number: 28, english_name: "Hosea", tamil_name: "ஓசியா" },
    { book_number: 29, english_name: "Joel", tamil_name: "யோவேல்" },
    { book_number: 30, english_name: "Amos", tamil_name: "ஆமோஸ்" },
    { book_number: 31, english_name: "Obadiah", tamil_name: "ஒபதியா" },
    { book_number: 32, english_name: "Jonah", tamil_name: "யோனா" },
    { book_number: 33, english_name: "Micah", tamil_name: "மீகா" },
    { book_number: 34, english_name: "Nahum", tamil_name: "நாகூம்" },
    { book_number: 35, english_name: "Habakkuk", tamil_name: "ஆபகூக்" },
    { book_number: 36, english_name: "Zephaniah", tamil_name: "செப்பனியா" },
    { book_number: 37, english_name: "Haggai", tamil_name: "ஆகாய்" },
    { book_number: 38, english_name: "Zechariah", tamil_name: "சகரியா" },
    { book_number: 39, english_name: "Malachi", tamil_name: "மல்கியா" },
    { book_number: 40, english_name: "Matthew", tamil_name: "மத்தேயு" },
    { book_number: 41, english_name: "Mark", tamil_name: "மாற்கு" },
    { book_number: 42, english_name: "Luke", tamil_name: "லூக்கா" },
    { book_number: 43, english_name: "John", tamil_name: "யோவான்" },
    {
      book_number: 44,
      english_name: "Acts",
      tamil_name: "அப்போஸ்தலருடைய நடபடிகள்"
    },
    { book_number: 45, english_name: "Romans", tamil_name: "ரோமர்" },
    {
      book_number: 46,
      english_name: "1 Corinthians",
      tamil_name: "1 கொரிந்தியர்"
    },
    {
      book_number: 47,
      english_name: "2 Corinthians",
      tamil_name: "2 கொரிந்தியர்"
    },
    { book_number: 48, english_name: "Galatians", tamil_name: "கலாத்தியர்" },
    { book_number: 49, english_name: "Ephesians", tamil_name: "எபேசியர்" },
    { book_number: 50, english_name: "Philippians", tamil_name: "பிலிப்பியர்" },
    { book_number: 51, english_name: "Colossians ", tamil_name: "கொலோசெயர்" },
    {
      book_number: 52,
      english_name: "1 Thessalonians",
      tamil_name: "1 தெசலோனிக்கேயர்"
    },
    {
      book_number: 53,
      english_name: "2 Thessalonians",
      tamil_name: "2 தெசலோனிக்கேயர்"
    },
    { book_number: 54, english_name: "1 Timothy", tamil_name: "1 தீமோத்தேயு" },
    { book_number: 55, english_name: "2 Timothy", tamil_name: "2 தீமோத்தேயு" },
    { book_number: 56, english_name: "Titus", tamil_name: "தீத்து" },
    { book_number: 57, english_name: "Philemon", tamil_name: "பிலேமோன்" },
    { book_number: 58, english_name: "Hebrews", tamil_name: "எபிரெயர்" },
    { book_number: 59, english_name: "James", tamil_name: "யாக்கோபு" },
    { book_number: 60, english_name: "1 Peter", tamil_name: "1 பேதுரு" },
    { book_number: 61, english_name: "2 Peter", tamil_name: "2 பேதுரு" },
    { book_number: 62, english_name: "1 John", tamil_name: "1 யோவான்" },
    { book_number: 63, english_name: "2 John", tamil_name: "2 யோவான்" },
    { book_number: 64, english_name: "3 John", tamil_name: "3 யோவான்" },
    { book_number: 65, english_name: "Jude", tamil_name: "யூதா" },
    {
      book_number: 66,
      english_name: "Revelation",
      tamil_name: "வெளிப்படுத்தின விசேஷம்"
    }
  ];
  $(".verse-input").on("keypress", inputHandle);
});

function inputHandle(e) {
  if (e.keyCode == 13) {
    var input = $(".verse-input").val();
    appendVerse(input);
    var input = $(".verse-input").val("");
  }
}

function appendVerse(str) {
  var matches = str.scan(/(\w+\s?\w+?) (\d+):(\d+)/g)[0];
  var bookRow = window.bibleRef.find(row =>
    new RegExp(matches[0], "g").test(row["english_name"])
  );
  var bookName = bookRow["english_name"];
  var nkjvName = bookRow["english_name"];
  var tamilName = bookRow["tamil_name"];
  var bookNumber = bookRow["book_number"];
  var chapterNumber = matches[1];
  var verseNumber = matches[2];

  var tamilCss = `b[n='${bookNumber}'] c[cnumber='${chapterNumber}'] v[vnumber='${verseNumber}']`;
  var nkjvCss = `b[n='${bookName}'] c[n='${chapterNumber}'] v[n='${verseNumber}']`;
  var tamilVerse = window.tamilBible.querySelector(tamilCss).textContent;
  var nkjvVerse = window.nkjvBible.querySelector(nkjvCss).textContent;

  $(".verse-container").append("<p>" + tamilName + " " + nkjvName + " " + chapterNumber + ":" + verseNumber + "</p>");
  $(".verse-container").append("<p>" + tamilVerse + "</p>");
  $(".verse-container").append("<p>" + nkjvVerse + "</p>");
}

function getBible(varName, path) {
  $.ajax({
    type: "GET",
    url: path,
    dataType: "xml",

    error: function(e) {
      alert("An error occurred while processing XML file");
      console.log("XML reading Failed: ", e);
    },

    success: function(response) {
      window[varName] = response;
    }
  });
}

// make sure the ul is empty
// before appending data inot it
// $("ul").children().remove();

// $(response).find("food").each(function () {
//     var _name = 'Name: ' + $(this).find('name').text();
//     console.log(_name);

//     var _price = 'Price: ' + $(this).find('price').text();
//     var _calories = 'Calories: ' + $(this).find('calories').text();
//     var _description = 'Description: ' + $(this).find('description').text();

//     // add content to the HTML
//     $("ul").append('<li>' + _name + '</li>');
//     $("ul").append('<li>' + _price + '</li>');
//     $("ul").append('<li>' + _calories + '</li>');
//     $("ul").append('<li>' + _description + '</li>');
// });
