function findResult(inputQ1, inputQ2, inputQ3, inputQ4, inputQ5) {
  let aTotal = 0
  let bTotal = 0
  let cTotal = 0
  if (inputQ1 === "a") {
    aTotal ++;
  } else if (inputQ1 === "b") {
    bTotal ++;
  } else if (inputQ1 === "c") {
    cTotal ++;
  }
  
  if (inputQ2 === "a") {
    aTotal ++;
  } else if (inputQ2 === "b") {
    bTotal ++;
  } else if (inputQ2 === "c") {
    cTotal ++;
  }
  
  if (inputQ3 === "a") {
    aTotal ++;
  } else if (inputQ3 === "b") {
    bTotal ++;
  } else if (inputQ3 === "c") {
    cTotal ++;
  }

  if (inputQ4 === "a") {
    aTotal ++;
  } else if (inputQ4 === "b") {
    bTotal ++;
  } else if (inputQ4 === "c") {
    cTotal ++;
  }

  if (inputQ5 === "a") {
    aTotal ++;
  } else if (inputQ5 === "b") {
    bTotal ++;
  } else if (inputQ5 === "c") {
    cTotal ++;
  }
  return Math.max(aTotal, bTotal, cTotal);
}


$(document).ready(function() {
  $("#quiz").sumbit(function(event) {
    event.preventDefault();
    const inputName = $("#name").val();
    const inputQ1 = $("input:radio[name=move-in]:checked").val();
    const inputQ2 = $("input:radio[name=planner]:checked").val();
    const inputQ3 = $("input:radio[name=job]:checked").val();
    const inputQ4 = $("input:radio[name=recipe]:checked").val();
    const inputQ5 = $("input:radio[name=stuck]:checked").val();

  })
})