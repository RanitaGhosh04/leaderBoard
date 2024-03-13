 // Initial player data goes here.
let data = [
    {
        fisrtName:'Rohit',
        lastName:'Sharma',
        counrty:'./india (1).png',
        playerScore:120,
        keyImage:'https://imgk.timesnownews.com/story/Rohit_Sharma_BCCL3_3.jpg'
    },
    {
        fisrtName:'Virat',
        lastName:'Kohli',
        counrty:'./india (1).png',
        playerScore:100,
        keyImage:'https://1.bp.blogspot.com/-Bz6uidKEVWU/X82ZqzXuvyI/AAAAAAAAlEo/Xs-XBR57BnUgTSrAICVLUV4XA-_iuiUyQCLcBGAsYHQ/s1024/Virat.png'
    },
    {
        fisrtName:'Gautam',
        lastName:'Gambhir',
        counrty:'./india (1).png',
        playerScore:265,
        keyImage:'https://img.timesnownews.com/46636997_352325651980766_6905232046311186957_n_1543940281__rend_4_3.jpg'
    },

    {
        fisrtName:'Sourav',
        lastName:'Ganguly',
        counrty:'./india (1).png',
        playerScore:150,
        keyImage:'https://images.indiafantasy.com/wp-content/uploads/20210703103918/ganguly2-1.png'
    },

    {
        fisrtName:'Shubham',
        lastName:'Gill',
        counrty:'./india (1).png',
        playerScore:180,
        keyImage:'https://staticc.sportskeeda.com/editor/2023/03/e1d14-16788795528975-1920.jpg?w=840'
    },

    {
        fisrtName:'Ishan',
        lastName:'Kishan',
        counrty:'./india (1).png',
        playerScore:90,
        keyImage:'https://bodyartguru.com/wp-content/uploads/2021/03/Ishan-Kishan-Cricketer-Tattoos.jpg'
    },
]

const countryImageMap = {
    "India": "./india (1).png",
    "USA": "./united-states.png",
    "UK": "./uk.png"
    // Add more country mappings as needed
};

let container2 = document.querySelector('.container2');



function updateImage()
{
// let tempKeyImage = data[0].keyImage;
// data[0].keyImage = data[1].keyImage;
// data[1].keyImage = tempKeyImage;

    container2.innerHTML = "";
    // imgData =[];
    data.forEach((imageEl,index)=>{
        if(index<3)
        {
            // imgData.push(imageEl.keyImage);
           container2.innerHTML+=`<img src='${imageEl.keyImage}' style='width:30%; display:inline-block; height:60%; border-radius:20px;  box-shadow: 0px 0px 20px grey'>`
        }
    });
}
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
                // counrty: pCountry.value,
                counrty: countryImageMap[pCountry.value], 
                playerScore: Number(pScore.value),
                keyImage:'https://www.thestatesman.com/wp-content/uploads/2018/10/MS-Dhoni-6.jpg'
            };

            data.push(playerObj);
            updateData();
            updateImage();

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
        <div class='parent-div'>
        <div class='names'>
        <span class='span-elements firstName'>${item.fisrtName}</span>
        <span class='span-elements lastName'>${item.lastName}</span>
        </div>
          
          <img src='${item.counrty}' class='span-img'></img>
          <span class='span-elements'>${item.playerScore}</span>
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

        el.addEventListener('click',(e)=>{
          
            if(e.srcElement.classList.value === 'fa-solid fa-trash')
            {
                data.splice(index, 1);
                updateData();
            }
            else if(e.srcElement.classList.value==='add')
            {
                data[index].playerScore+=5;
            }
            else
            {
                data[index].playerScore-=5
            }
            updateData();
            updateImage();
        })
    })
  }

document.onload=updateData();

document.onload = updateImage();

