// // setTimeout(()=>{
// //     alert('salam')
// // },5000);


// // setInterval(()=>{
// //     alert("kasiet")
// // },3000);


// let a = document.getElementById('a')
// let b = document.getElementById('b')

// let changeA =()=>{
// a.style.color='red'
// a.style.transform =' rotate(360deg)'
// a.style.transition='2s'
// document.body.style.backgroundColor ='pink'
// document.body.style.transition='2s'
// }
// let changeb =()=>{
//     b.style.color='blue'
//     b.style.transform =' rotate(360deg)'
//     b.style.transition='2s'
//     document.body.style.backgroundColor ='yellow'
// document.body.style.transition='2s'
// }
    

// setTimeout(()=>{
//     changeA()

// },2000);
    

// setTimeout(()=>{
//     changeb()

// },5000);


let a = document.getElementById('a')
let b = document.getElementById('b')

let changeA = ()=>{
    a.style.color='red'
    a.style.transform= 'rotate(360deg)'
    a.style.transition='2s'
    document.body.style.backgroundColor='yellow'
    document.body.style.transition='2s'
}
let changeb= ()=>{
    b.style.color='red'
    b.style.transform= 'rotate(360deg)'
    b.style.transition='2s'
    document.body.style.backgroundColor='pink'
document.body.style.transition='2s'

}
setTimeout(()=>{
    changeA()
},2000);
setTimeout(()=>{
    changeb()
},5000);