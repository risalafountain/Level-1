const form = document.addItem
const ul = document.getElementById("list")

form.addEventListener("submit", function (event){
    event.preventDefault()
    const item = form.title.value
    form.title.value = ""

   const li = document.createElement('li')
   ul.appendChild(li)

   const div = document.createElement('div')
   div.textContent = item
   li.appendChild(div)

   const editBtn = document.createElement('button');
   editBtn.innerHTML = "edit";
   li.appendChild(editBtn)
   
   const delBtn = document.createElement('button');
   delBtn.textContent = 'X' 
   li.appendChild(delBtn)
   delBtn.addEventListener('click', function ( ){
    li.remove ()
   })
})


