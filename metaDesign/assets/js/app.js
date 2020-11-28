function saveVisit() {
  // Prevent from reloading page
  event.preventDefault();

  // Submitted form data
  var visitDate = document.getElementById("visitDate").value;
  var fullName = document.getElementById("fullName").value;
  var nickName = document.getElementById("nickName").value;

  // Reset form field
  document.getElementById("bookVisit").reset();

  // Get the length of total book visit
  var itemCount = document.querySelectorAll(".saved-item").length;
  itemCount = parseInt(itemCount);

  // Create book visit id as visitId
  var visitId = itemCount + 1;
  visitId = "visitId" + visitId;

  var targetDiv = document
    .getElementById("itemWrap")
    .querySelectorAll("#" + visitId);

  if (targetDiv.length == 1) {
    var randomNumber = Math.floor(Math.random() * 100000 + 1);
    visitId = itemCount + randomNumber;
    visitId = "visitId" + visitId;
  }

  // Creating saved item element
  var saveItemWrap = document.createElement("div");
  saveItemWrapId = saveItemWrap.setAttribute("id", visitId);
  saveItemWrapClass = saveItemWrap.setAttribute("class", "saved-item");

  // Append first saved item to itemWrap
  var savedItem = document.getElementById("itemWrap");
  savedItem = savedItem1 = savedItem.appendChild(saveItemWrap);
  //   console.log(visitId);

  //   Create and append left side div
  var leftSide = document.createElement("div");
  leftSideClass = leftSide.setAttribute("class", "left-side");
  savedItem = savedItem.appendChild(leftSide);

  //   Create and append Fullname
  var h4 = document.createElement("h4");
  h4Data = h4.innerText = fullName;
  savedItem = savedItem.appendChild(h4);

  //   Create and append visit date
  var dateVisit = document.createElement("span");
  dateData = dateVisit.innerText = visitDate;
  savedItem = leftSide.appendChild(dateVisit);

  //   Create and append separator
  var separator = document.createElement("span");
  separatorData = separator.setAttribute("class", "mx-2");
  separatorData = separator.innerText = "|";
  savedItem = leftSide.appendChild(separator);

  //   Create and append Nickname
  var nickNam = document.createElement("span");
  nickData = nickNam.innerText = nickName;
  savedItem = leftSide.appendChild(nickNam);

  //   Create and append right side div
  var rightSide = document.createElement("div");
  rightSideClass = rightSide.setAttribute("class", "right-side");
  savedItem = saveItemWrap.appendChild(rightSide);

  //   Create and append circle check in right side
  var circleCheck = document.createElement("span");
  circleCheckClass = circleCheck.setAttribute("class", "circle-check d-none");
  savedItem = rightSide.appendChild(circleCheck);

  // Create and append circle icon
  var circleIcon = document.createElement("i");
  circleIconClass = circleIcon.setAttribute("class", "fas fa-check");
  savedItem = circleCheck.appendChild(circleIcon);

  // Create and append dropdown
  var dropdown = document.createElement("div");
  dropdownClass = dropdown.setAttribute("class", "dropdown");
  savedItem = rightSide.appendChild(dropdown);

  //   Create and append dropdown button
  var dropButton = document.createElement("button");
  Object.assign(dropButton, {
    className: "btn dropdown-toggle",
    id: "dropdownMenuButton" + visitId,
    type: "button",
    ariaHasPopup: "true",
    ariaExpanded: "false",
  });
  dropButtonFun = dropButton.setAttribute("data-toggle", "dropdown");
  savedItem = dropdown.appendChild(dropButton);

  // Create and append ellipsis icon
  var ellipsisIcon = document.createElement("i");
  ellipsisIconClass = ellipsisIcon.setAttribute(
    "class",
    "fas fa-ellipsis-v fa-2x"
  );
  savedItem = dropButton.appendChild(ellipsisIcon);

  //   Create and append dropdown menu
  var dropdownMenu = document.createElement("div");
  dropdownMenuClass = dropdownMenu.setAttribute(
    "class",
    "dropdown-menu dropdown-menu-right"
  );
  dropdownMenuClass = dropdownMenu.setAttribute(
    "aria-labelledby",
    "dropdownMenuButton" + visitId
  );
  savedItem = dropdown.appendChild(dropdownMenu);

  //   Create and append mark as done
  var dropdownItem = document.createElement("a");
  dropdownItemClass = dropdownItem.setAttribute("class", "dropdown-item");
  dropdownItemClass = dropdownItem.setAttribute("id", "done" + visitId);
  dropdownItemClass = dropdownItem.setAttribute("href", "#");
  dropdownItemClass = dropdownItem.setAttribute("onclick", "markDone(this.id)");
  dropdownItemText = dropdownItem.innerText = "Mark as Done";
  savedItem = dropdownMenu.appendChild(dropdownItem);

  //   Create and append delete button
  var dropdownItem2 = document.createElement("a");
  dropdownItemClass2 = dropdownItem2.setAttribute("class", "dropdown-item");
  dropdownItemClass2 = dropdownItem2.setAttribute("id", "delete" + visitId);
  dropdownItemClass2 = dropdownItem2.setAttribute("href", "#");
  dropdownItemClass2 = dropdownItem2.setAttribute(
    "onclick",
    "deleteVisit(this.id)"
  );
  dropdownItemText2 = dropdownItem2.innerText = "Delete";
  savedItem = dropdownMenu.appendChild(dropdownItem2);
}

// Mark Done Book Visit
function markDone(doneId) {
  // Match Id and mark done visit
  let cardId = doneId.slice(4);
  let targetCard = document
    .getElementById(cardId)
    .getElementsByClassName("circle-check")[0];
  // Add Circle Check
  targetCard.classList.remove("d-none");
}

// Delete Book Visit
function deleteVisit(deleteId) {
  // Match Id and delete visit
  let cardId = deleteId.slice(6);
  // Remove visit card
  document.getElementById(cardId).remove();
}
