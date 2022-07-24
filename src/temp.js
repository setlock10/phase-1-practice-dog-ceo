const testString='acoustic';
//console.log(testString.slice(0,1));


document.addEventListener("DOMContentLoaded", () => {
 
    fetchBreeds();
    fetchImages();

    //CHALLENGE 3
    var ul=document.getElementById('dog-breeds');
    var li=document.createElement('li');

    ul.addEventListener('click',(e)=>{
        //console.log(e.target);
        li=e.target;
        li.style.color='blue';
    });

    //Challenge 4
    var sel=document.createElement('select');
    sel=document.getElementById('breed-dropdown');
    //console.log(sel.value);

    sel.addEventListener('change',(e)=>{
        console.log('new '+sel.value);
        //console.log(ul.childElementCount);
        ul.remove();
        
        //ul=document.createElement('ul',{is:'dog-breeds'});
        //document.querySelector('body').appendChild(document.createElement('ul',{is:'dog-breeds'}));
       // console.log(document);
        //fetchBreeds();


   
    //     for(let i=0;i<ul.childElementCount;i++){
    //        ul.childNodes[i].remove();
    //    }
       
       // console.log(lists.length);
      //  ul.remove();
       // var sel=document.createElement('select');

       // ul.removeChild(li);
       //ul.replaceChildren(fetchBreedsFiltered(sel.value));

       // fetchBreedsFiltered(sel.value);

    });
});





// CHALLENGE 4 - Continued
function fetchBreedsFiltered(filter){
    fetch ("https://dog.ceo/api/breeds/list/all")
    .then ((resp)=>resp.json())
    .then ((json)=>{
        for (const key in json.message ){

            const li=document.createElement('li');
            const ul=document.getElementById('dog-breeds');
            //console.log(ul);
    
            if (json.message[key].length==0){
                // console.log(key);
                li.textContent=key;
                ul.appendChild(li);
            }
            else{
                for (let i=0; i<json.message[key].length;i++){
                // console.log(key+ " " +json.message[key][i]);
                li.textContent=json.message[key][i]+ " "+key;
                ul.appendChild(li);
                }
            }
        }   
    });

}


// CHALLENGE 2
function fetchBreeds(){
    fetch ("https://dog.ceo/api/breeds/list/all")
    .then ((resp)=>resp.json())
    .then ((json)=>{
        for (const key in json.message ){

            const li=document.createElement('li');
            const ul=document.getElementById('dog-breeds');
            //console.log(ul);
    
            if (json.message[key].length==0){
                // console.log(key);
                li.textContent=key;
                ul.appendChild(li);
            }
            else{
                for (let i=0; i<json.message[key].length;i++){
                // console.log(key+ " " +json.message[key][i]);
                li.textContent=json.message[key][i]+ " "+key;
                ul.appendChild(li);
                }
            }
        }   
    });

}


// CHHALLENGE 1

//Use fetch to grab the links to the images
function fetchImages(){
    return fetch ("https://dog.ceo/api/breeds/image/random/4")
    .then ((resp)=>resp.json())
    .then ((json)=>{
  
        for (let i=0;i<json.message.length;i++){
         const div = document.getElementById('dog-image-container');
         const img=document.createElement('img');
         img.src=json.message[i];
         div.append(img);
    }
});
}


   

