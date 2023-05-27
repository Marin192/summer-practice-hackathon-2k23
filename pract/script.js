//Generate a random 6-digit code
function generateCode() {
    return Math.floor(100000 + Math.random() * 900000);
  }
  
  //Add a new MFA name-code 
  function addMFA(name, code) {
    const table = document.getElementById("mfaTable");
    const row = table.insertRow(-1);

    const nameCell = row.insertCell(0);
    const codeCell = row.insertCell(1);
    const actionCell = row.insertCell(2);
  
    nameCell.textContent = name;
    codeCell.textContent = code;
  
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.addEventListener("click", function() {
      deleteMFA(row);
    });
  
    actionCell.appendChild(deleteButton);
  }
  
  //Delete an existing MFA name-code 
  function deleteMFA(row) {
    const table = document.getElementById("mfaTable");
    table.deleteRow(row.rowIndex);
  }

  // List all the available MFA name-code 
  document.getElementById("mfaForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const nameInput = document.getElementById("mfaName");
    const codeInput = document.getElementById("mfaCode");
  
    const name = nameInput.value.trim();
    const code = generateCode();
  
    addMFA(name, code);
  
    nameInput.value = "";
    codeInput.value = code;
  
    return false;
  });
  
  window.setInterval()