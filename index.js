function scuberGreetingForFeet(){}
  // Write your code here!
function scuberGreetingForFeet(figure){
  if(figure < 400) {
    return 'This one is on me!'
  } 
  else if (figure >= 400 && figure < 2000) {
    return 'That will be twenty bucks.';
  } 
  else if (figure > 2000 && figure <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } 
  else if(figure > 2500) {
    return 'No can do.';
  }
}

function ternaryCheckCity(){}
  // Write your code here!
function ternaryCheckCity(city){
  return (city === "NYC" ? "Ok, sounds good." : "No go.");
}

function switchOnCharmFromTip(){}
  // Write your code here!
function switchOnCharmFromTip(tip){
  switch(tip) {
    case "generous": 
      return 'Thank you so much.';
    case "not as generous":
      return 'Thank you.';
    default: 
      return "Bye.";
  }


} 