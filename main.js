let filter=document.getElementById("filter");

filter.addEventListener("keyup",filterItems);

//filterItem 
function filterItems(e){
    let text=e.target.value.toLowerCase();
    let items=document.getElementsByTagName("li");
   Array.from(items).forEach(function(item){
   let itemName=item.textContent;
   if(itemName.toLowerCase().indexOf(text)!=-1){
    item.style.display = "block";
   }else{
    item.style.display="none";
   }
   });
}