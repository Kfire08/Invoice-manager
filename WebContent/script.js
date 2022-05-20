
//-------------------------------------------------------Edit Modal Script-------------------------------------------------------.
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}


//---------------------------------------------------------------End Edit Modal---------------------------------------------------------------


// ----------------------------------------Add Modal Script ------------------------------------------------------------
const openAddModalButtons = document.querySelectorAll('[data-modal-target]')
const closeAddModalButtons = document.querySelectorAll('[data-close-button]')
const addOverlay = document.getElementById('addoverlay')

openAddModalButtons.forEach(button => {
button.addEventListener('click', () => {
  const modal = document.querySelector(button.dataset.modalTarget)
  openModal(modal)
})
})

addOverlay.addEventListener('click', () => {
const modals = document.querySelectorAll('.modal.active')
modals.forEach(modal => {
  closeModal(modal)
})
})

closeAddModalButtons.forEach(button => {
button.addEventListener('click', () => {
  const modal = button.closest('.modal')
  closeModal(modal)
})
})

function openModal(modal) {
if (modal == null) return
modal.classList.add('active')
addOverlay.classList.add('active')
}

function closeModal(modal) {
if (modal == null) return
modal.classList.remove('active')
addOverlay.classList.remove('active')
}


// ----------------------------------------Add Modal Script End ------------------------------------------------------------

// ----------------------------------------Delete Modal Script ------------------------------------------------------------
const openDeleteModalButtons = document.querySelectorAll('[data-modal-target]')
const closeDeleteModalButtons = document.querySelectorAll('[data-close-button]')
const deleteOverlay = document.getElementById('deleteoverlay')

openDeleteModalButtons.forEach(button => {
button.addEventListener('click', () => {
  const modal = document.querySelector(button.dataset.modalTarget)
  openModal(modal)
})
})

deleteOverlay.addEventListener('click', () => {
const modals = document.querySelectorAll('.modal.active')
modals.forEach(modal => {
  closeModal(modal)
})
})

closeDeleteModalButtons.forEach(button => {
button.addEventListener('click', () => {
  const modal = button.closest('.modal')
  closeModal(modal)
})
})

function openModal(modal) {
if (modal == null) return
modal.classList.add('active')
deleteOverlay.classList.add('active')
}

function closeModal(modal) {
if (modal == null) return
modal.classList.remove('active')
deleteOverlay.classList.remove('active')
}


// ----------------------------------------Delete Modal Script End ------------------------------------------------------------

// ----------------------------------------search Modal Script ------------------------------------------------------------
const closeSearchModalButtons = document.querySelectorAll('[data-close-button]')
closeSearchModalButtons.forEach(button => {
button.addEventListener('click', () => {
  const modal = button.closest('.modal')
  closeDeleteModal(modal)
})
})

function openSearchModal(modal) {
if (modal == null) return
modal.classList.add('active')
}

function closeDeleteModal(modal) {
if (modal == null) return
modal.classList.remove('active')
}


// ---------------------------------------------------------search Modal Script End ------------------------------------------------------------

//----------------------------------------------------------checkAll implementation----------------------
		function Check()
			{
				var checker = document.getElementsByName("chk");
				if(document.getElementById("allchk").checked ==true){
				for (i = 0; i < checker.length; i++)
					checker[i].checked = true ;
					}else{
				for (i = 0; i < checker.length; i++)
					checker[i].checked = false ;
		}
	}
//-------------------------------------------------end checkall implementation-------------------------------------------------------

//-----------------------------------------------------------Enable/disable buttons------------------------------------------------------

function activateButton(){
	var checkCount = 0;
 			for(var i=0;i<data.length;i++){
 				if(document.getElementById(data[i].Invoice_id).checked){        // Invoice_id is our primary key
 					checkCount++;
 				}
 			}
 			if(checkCount == 0)
 				{
					document.getElementById("add").style.border = "1px solid #14AFF1";
					document.getElementById("add").disabled = false;
 				}
			else{
					document.getElementById("add").style.border = "1px solid #97A1A9";
					document.getElementById("add").disabled = true;
			}
			
			if(checkCount == 1)
 				{
					document.getElementById("edit").style.border = "1px solid #14AFF1";
					document.getElementById("edit").disabled = false;
 				}
			else{
					document.getElementById("edit").style.border = "1px solid #97A1A9";
					document.getElementById("edit").disabled = true;
			}
			
			if(checkCount == 0)
 				{
					document.getElementById("delete").style.border = "1px solid #97A1A9";
					document.getElementById("delete").disabled = true;
 				}
			else{
					document.getElementById("delete").style.border = "1px solid #14AFF1";
					document.getElementById("delete").disabled = false;
			}
			}

//-----------------------------------------------------------end Enable/disable buttons-------------------------------------------------

// -------------------------------------------------Backend Integration starts here-----------------------------------------------------
		var pageNumber = 1;
 		loadData(0, 10);
 		var data;
		var curr_start = 0;
		
//-------------------------------------------fetch data-------------------------------------------------------------------------------

 		function loadData(start, limit) {
			if(start == 0){
				document.getElementById("prev").style.background = "#39495E";
			}
			else{
				document.getElementById("prev").style.background = " #14AFF1 0% 0% no-repeat padding-box";
			}
			curr_start = start;
 			var xhttp = new XMLHttpRequest();
 			xhttp.open("GET","http://localhost:8080//H2HBABBA1055//fetch?start="+start+"&limit="+limit, false);
 			xhttp.send();
 			data = JSON.parse(xhttp.responseText);
 			var stringRows = "";
				stringRows+="<tr><th><input type=\"checkbox\" id=\"allchk\" class=\"check\" value=\"yes\" onClick=\"Check()\" onchange=\"activateButton()\"/></th><th>"+'Customer Name'+"</th><th>"+'Customer #'+"</th><th>"+'Invoice #'+"</th><th>"+'Invoice Amount'+"</th><th>"+'Due Date'+"</th><th>"+'predicted payment date'+"</th><th>"+'Notes'+"</th></tr>";
 			for(var i=0;i<data.length;i++){
 				var row = "<tr>";
 				row+="<td><input onchange=\"activateButton()\" id="+data[i].Invoice_id+" type=\"checkbox\" name=\"chk\"/></td><td>"+data[i].Customer_Name+"</td><td>"+data[i].Customer_no+"</td><td>"+data[i].Invoice_id+"</td><td>"+data[i].Invoice_Amount+"</td><td>"+data[i].Due_Date+"</td><td>"+data[i].Predicted_Payment_Date+"</td><td>"+data[i].Notes+"</td></tr>";
 				stringRows+=row;
 			}
 			document.getElementById("invoice_table").innerHTML = stringRows;
 		}

//--------------------------------------------edit data-------------------------------------------------------------------------------
		
 		function editfun(){
 			let amt = document.getElementById("invoiceAmount").value;
			let notes= document.getElementById("editnotes").value;
			console.log(amt,notes);
			let checklist = [];
 			var xhttp = new XMLHttpRequest();
 			for(var i=0;i<data.length;i++){
 				if(document.getElementById(data[i].Invoice_id).checked){        // Invoice_id is our primary key
 					checklist.push(data[i].Invoice_id);
 				}
 			}
 			if(checklist.length == 1)
 				{
 				var xhttp = new XMLHttpRequest();
 				xhttp.open("GET","http://localhost:8080//H2HBABBA1055//edit?amt="+amt+"&notes="+notes+"&id="+checklist[0], false);
 				xhttp.send();
				load_curr_data();
 				}
 		}
	
	
	//-------------------------------------------------delete data-------------------------------------------------------------------------

 		function deletefun(){
 			var xhttp = new XMLHttpRequest();
 			for(var i=0;i<data.length;i++){
 				if(document.getElementById(data[i].Invoice_id).checked){        // Invoice_id is our primary key
 					xhttp.open("GET","http://localhost:8080//H2HBABBA1055//delete?id="+data[i].Invoice_id, false);
 					xhttp.send();
 				}
 			}
		load_curr_data();
 		}
		
		//-----------------------------------------------add data-----------------------------------------------------------------------------
		
 		function addfun(){
 			let name = document.getElementById("cust_name").value;
 			let num = document.getElementById("cust_num").value;
 			let id =  document.getElementById("invoice_no").value;
 			let amt = document.getElementById("amount").value;
 			let due_date = document.getElementById("due_date").value;
			let notes = document.getElementById("notes").value;
 			var xhttp = new XMLHttpRequest();
 			xhttp.open("GET","http://localhost:8080//H2HBABBA1055//add?name="+name+"&num="+num+"&id="+id+"&amt="+amt+"&due_date="+due_date+"&pay_date="+'NA'+"&notes="+notes, false);
 			xhttp.send();
 		}
	
		var search_modal = document.getElementById("search-modal");
		
		//-----------------------------------------------------------search data------------------------------------------------------------------
		
		function searchfun() {
  		const id = document.getElementById("searchbar").value;
  		let xhttp = new XMLHttpRequest();
			xhttp.open("GET","http://localhost:8080//H2HBABBA1055//search?id="+id, false);
			xhttp.send();
			let stringRows="<tr><th><input type=\"checkbox\" id=\"allchk\" class=\"check\" value=\"yes\" onClick=\"Check()\" onchange=\"activateButton()\"/></th><th>"+'Customer Name'+"</th><th>"+'Customer #'+"</th><th>"+'Invoice #'+"</th><th>"+'Invoice Amount'+"</th><th>"+'Due Date'+"</th><th>"+'predicted payment date'+"</th><th>"+'Notes'+"</th></tr>";
			data = JSON.parse(xhttp.responseText);
			if(data[0]!=undefined){
			let row = "<tr><td><input id="+data[0].Invoice_id+" type=\"checkbox\" name=\"chk\" onchange=\"activateButton()\"/></td><td>"+data[0].Customer_Name+"</td><td>"+data[0].Customer_no+"</td><td>"+data[0].Invoice_id+"</td><td>"+data[0].Invoice_Amount+"</td><td>"+data[0].Due_Date+"</td><td>"+data[0].Predicted_Payment_Date+"</td><td>"+data[0].Notes+"</td></tr>";
			stringRows+=row;
			document.getElementById("invoice_table").innerHTML = stringRows;
			}
			else{
				document.getElementById("invoice_table").innerHTML = null;
				openSearchModal(search_modal);
			}
}
		
		//----------------------------------------------------load curr data for returning to current page--------------------------------------------
		
			function load_curr_data(){
				document.getElementById("searchbar").value="";
				loadData(curr_start,8);
			}
			
		//----------------------------------------------------clear add form values-----------------------------------------------------------------------
		
				//----------------------------------------------------reload curr data --------------------------------------------
		
			function reloadData(){
				if(document.getElementById("searchbar").value=="")
				loadData(curr_start,8);
			}
			
		//----------------------------------------------------clear add form values-----------------------------------------------------------------------
		
		function addclear(){
			document.getElementById("cust_name").value="";
 			document.getElementById("cust_num").value="";
 			document.getElementById("invoice_no").value="";
 			document.getElementById("amount").value="";
 			document.getElementById("due_date").value="";
			document.getElementById("notes").value="";
		}
		
		//---------------------------------------------------------reset edit form values---------------------------------------------------------
		
		function reset(){
			document.getElementById("invoiceAmount").value="";
			document.getElementById("editnotes").value="";
		}
		
		//---------------------------------------------------------function to get selected row data in edit form--------------------------------------
		
		function editvalue(){
			let checklist = [];
 			for(var i=0;i<data.length;i++){
 				if(document.getElementById(data[i].Invoice_id).checked){        // Invoice_id is our primary key
 					checklist.push(data[i].Invoice_id);
 				}
 			}
 			if(checklist.length == 1)
 				{
					console.log(checklist[0]);
					for(var i=0;i<data.length;i++){
 						if(data[i].Invoice_id==checklist[0]){
							document.getElementById("invoiceAmount").value=data[i].Invoice_Amount;
							document.getElementById("editnotes").value=data[i].Notes;
							break;
				}
 					}
 				}
		}
		
		//-------------------------------------------------pagination buttons-----------------------------------------------------------
		
 		function prevFunction() {
 			if (pageNumber >= 2) {
 				pageNumber--;
 			}
 			loadData((pageNumber - 1) * 10, 10);
 		}

 		function nextFunction() {
 			pageNumber++;
 			loadData((pageNumber - 1) * 10, 10);
 		}


