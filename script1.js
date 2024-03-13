 // Initial player data goes here.
 let data = [
    {
        fisrtName:'Rohit',
        lastName:'Sharma',
        counrty:'India',
        playerScore:120
    },
    {
        fisrtName:'Virat',
        lastName:'Kohli',
        counrty:'India',
        playerScore:100
    },
    {
        fisrtName:'Akhil',
        lastName:'Sharma',
        counrty:'India',
        playerScore:265
    }
]

// Function to add a new player

let fName = document.querySelector('.fName');
let lName = document.querySelector('.lName');
let pCountry = document.querySelector('.country');
let pScore = document.querySelector('.number');
let btn = document.querySelector('button');

btn.addEventListener('click',(e)=>{
    //  to avoid autosubmit of form
    e.preventDefault();

    if(fName.value===""||lName.value===""||pCountry.value===""||pScore===""){
        alert('Please fill all fields!');
    }
    else {
        // Check if the firstName already exists in the data array
        const isDuplicate = data.findIndex(player => player.lastName === lName.value && player.fisrtName===fName.value) !== -1;

        if (isDuplicate) {
            alert('Player with the same first name already exists. Please choose a different name.');
            fName.value = "";
            lName.value = "";
            pCountry.value = "";
            pScore.value = "";
        } else {
            let playerObj = {
                fisrtName: fName.value,
                lastName: lName.value,
                counrty: pCountry.value,
                playerScore: Number(pScore.value)
            };

            data.push(playerObj);
            updateData();

            fName.value = "";
            lName.value = "";
            pCountry.value = "";
            pScore.value = "";
        }
    }
    
});


// Function to update the leaderboard UI

let section2 = document.querySelector('.section2');

function updateData() {
    data.sort((p1, p2) => {
      return p2.playerScore - p1.playerScore;
    });
  
    let innerHTML = "";
  
    data.forEach((item) => {
      innerHTML += `
        <div>
          <span>${item.fisrtName}</span>
          <span>${item.lastName}</span>
          <span>${item.counrty}</span>
          <span>${item.playerScore}</span>
          <div  class='button-group' style = "cursor:pointer">
          <i class="fa-solid fa-trash"></i>
            <span class="add">+5</span>
            <span class="sub">-5</span>
          </div>
        </div>`;
    });

    section2.innerHTML = innerHTML;
//   After updating ui, call activate event listener
    activateEventListener();
  }

  const activateEventListener = () =>{
    document.querySelectorAll('.button-group').forEach((el,index)=>{

        // for(each element obj el)

        // for each addevent object e->details of that object
        el.addEventListener('click',(e)=>{
            // console.log(data[index].playerScore)
            //  console.log(e);
            // console.log(e.srcElement.classList.value);
            if(e.srcElement.classList.value === 'fa-solid fa-trash')
            {
                // console.log('bin');
                data.splice(index, 1);
                // Update the UI
                updateData();
                // console.log(index)
            }
            else if(e.srcElement.classList.value==='add')
            {
                // console.log('add');
                data[index].playerScore+=5;
            }
            else
            {
                data[index].playerScore-=5
            }
            updateData();
        })
    })
  }

document.onload=updateData();


// function updateData(){
//     data.sort((p1,p2)=>{
//         return p2.playerScore-p1.playerScore;
//     });
//     // console.log(data);
//     data.forEach((item)=>{
//     let div = document.createElement('div');
//     let playerFName = document.createElement("span");
//     let playerLName = document.createElement("span");
//     let playerCountry = document.createElement("span");
//     let score = document.createElement("span");
//     let lastSpan = document.createElement('div');
//     playerFName.innerText = item.fisrtName;
//     playerLName.innerText = item.lastName;
//     playerCountry.innerText = item.counrty;
//     score.innerText = item.playerScore;
//     lastSpan.innerHTML = `<i class="fa-solid fa-trash-can delete"></i> <span class="add">+5</span class="sub"><span>-5</span>`;

//     div.append(playerFName,playerLName,playerCountry,score,lastSpan);

//     section2.appendChild(div);
    
//     console.log(div);
//     // console.log(playerFName,playerLName,playerCountry,score);
//     })

    
// }


//using innerHtml


// This will be shown everytime page is refreshed