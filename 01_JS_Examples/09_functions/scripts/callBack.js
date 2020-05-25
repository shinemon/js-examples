
function ask(question, yes, no) {
  if (confirm(question)){
    yes()
  }
  else {
    no()
  };
}

ask("Do you agree?", showOk, showCancel);

function showOk() {
  alert( "Ok! Lets proceed" );
}

function showCancel() {
  alert( "Aborted!" );
}

