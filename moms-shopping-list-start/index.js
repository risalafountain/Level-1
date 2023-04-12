const form = document.addItem
const ul = document.getElementById("list")

form.addEventListener("submit", function (event){
    event.preventDefault()
    const item = form.title.value
    form.title.value = ""

   const li = document.createElement('li')
   ul.append(li)

   const div = document.createElement('div')
   div.textContent = item
   li.append(div)

})

