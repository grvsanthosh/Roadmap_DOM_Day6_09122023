
let count = 10;


//div container
const divelement = document.createElement('div');
divelement.classList.add('center-container');
document.body.appendChild(divelement);

//COUNT DOWN text
const h1element = document.createElement('h1');
h1element.innerHTML = 'COUNT DOWN:';
h1element.classList.add('center-text');
//COUNT DOWN number
const h1element_seconds = document.createElement('h1');
h1element_seconds.innerHTML = count;
h1element_seconds.classList.add('center-text','timer-container');
//content
const h1element_content = document.createElement('h1');

h1element_content.classList.add('center-text','content-container');
//start
const buttonelement_start = document.createElement('button');
buttonelement_start.innerHTML = "START";
buttonelement_start.classList.add('button-start');
//reset
// const buttonelement_reset = document.createElement('button');
// buttonelement_reset.innerHTML = "RESET";
// buttonelement_reset.classList.add('button-reset');

divelement.appendChild(h1element);
divelement.appendChild(h1element_seconds);
divelement.appendChild(h1element_content);
divelement.appendChild(buttonelement_start);
// divelement.appendChild(buttonelement_reset);

buttonelement_start.setAttribute('onclick', 'startoperation()');
// buttonelement_reset.setAttribute('onclick', 'restoperation()');


// const startoperation = () => {
//    Tval = setInterval(() => {
//     //time
//     if (count >= 0) {
    
//     h1element_seconds.innerHTML = count;   
//     count = count - 1;     
//     }
//     else {
//         h1element_content.innerHTML = "Happy Independence Day!!!";
//      }
    
// },1000);

// }

// const restoperation = () => {
//     count = 10;
//     h1element_seconds.innerHTML = count;
   
// }

const startoperation = () => {
    setTimeout(() => {
        count--;
        h1element_seconds.innerHTML = count;
        setTimeout(() => {
            count--;
            h1element_seconds.innerHTML = count;
            setTimeout(() => {
                count--;
                h1element_seconds.innerHTML = count;
                setTimeout(() => {
                    count--;
                    h1element_seconds.innerHTML = count;
                    setTimeout(() => {
                        count--;
                        h1element_seconds.innerHTML = count;
                        setTimeout(() => {
                            count--;
                            h1element_seconds.innerHTML = count;
                            setTimeout(() => {
                                count--;
                                h1element_seconds.innerHTML = count;
                                setTimeout(() => {
                                    count--;  
                                    h1element_seconds.innerHTML = count;  
                                    setTimeout(() => {
                                        count--;   
                                        h1element_seconds.innerHTML = count; 
                                        setTimeout(() => {
                                            count--; 
                                            h1element_seconds.innerHTML = count;   
                                            setTimeout(() => {          
                                                h1element_content.innerHTML = "Happy Independence Day!!!";
    
        }, 1000);  
        }, 1000);  
        }, 1000);
        }, 1000);
        }, 1000);
        }, 1000);
        }, 1000);
        }, 1000);
        }, 1000);
        }, 1000);
        },1000);
   
};

  



   




