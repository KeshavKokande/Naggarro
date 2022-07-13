function addItem()
{
    let input=document.querySelector('#item');
    let ul= document.querySelector('ul');
    let item = document.createElement('li');
    item.innerText=input.value;
    let closeBtn = document.createElement('button');
    closeBtn.innerText='X';
    closeBtn.style="margin-left:200px"
    closeBtn.className="close";
    closeBtn.onclick=deleteItem;
    ul.appendChild(item);
    item.appendChild(closeBtn);
    input.value=" ";
}
function deleteItem(e)
{
    let item = e.target.parentElement;
    let ul = document.querySelector('ul');
    ul.removeChild(item);
}