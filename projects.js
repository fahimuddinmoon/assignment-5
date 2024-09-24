function getValue(id){
  return Number(document.getElementById(id).value)
}

function getInnerText(id){
  return parseFloat(document.getElementById(id).innerText)
}



let donateNoakhali = getInnerText("donateNoakhali")
let donatefeni = getInnerText("donatefeni")
let donateQuota = getInnerText("donateQuota")
const HistorySection = document.getElementById('HistorySection')

document.getElementById("DonateBtn").addEventListener('click', function(){
    let currentBalance = getInnerText("currentBalance")
    const value = getValue("input")
    if(value > currentBalance ){
        alert('Insuffficient Balance')
        document.getElementById("input").value = ''
        return
    }
    else if(value <= 0){
        alert('Donate Failed')
        document.getElementById("input").value = ''
        return
    }
    donateNoakhali += value
    document.getElementById("donateNoakhali").innerText = donateNoakhali
    const currentAmount = currentBalance - value 
    document.getElementById("currentBalance").innerText = currentAmount
     document.getElementById("input").value = ''
     alert('Donate Successful')
     const div = document.createElement('div')
     div.className = 'border m-2 p-3 rounded-lg'
     div.innerHTML =   
    `<p class="m-2 p-3 text-2xl font-bold"><span>${value}</span>Taka is Donated for famine-2024 at Noakhali , Bangledesh</p>
    <p class="m-2 p-3">${new Date()}</p>
    `
    HistorySection.appendChild(div)
   

})
document.getElementById("DonateBtn1").addEventListener('click', function(){
    let currentBalance = getInnerText("currentBalance")
    const value = getValue("input1")
    if(value > currentBalance){
        alert('Insuffficient Balance')
        document.getElementById("input1").value = ''
        return
    }
    else if(value <= 0){
        alert('Donate Failed')
        document.getElementById("input").value = ''
        return
    }
    donatefeni += value
    document.getElementById("donatefeni").innerText = donatefeni
    const currentAmount = currentBalance - value 
    document.getElementById("currentBalance").innerText = currentAmount
    document.getElementById("input1").value = ''
    alert('Donate Successful')
    const div = document.createElement('div')
    div.className = 'border m-2 p-3 rounded-lg'
    div.innerHTML =   
    `<p class="m-2 p-3 text-2xl font-bold"><span>${value}</span>Taka is Donated for flood relieg in Feni , Bangledesh</p>
     <p class="m-2 p-3">${new Date()}</p>
    `

    HistorySection.appendChild(div)


})
document.getElementById("DonateBtn2").addEventListener('click', function(){
    let currentBalance = getInnerText("currentBalance")
    const value = getValue("input2")
    if(value > currentBalance){
        alert('Insuffficient Balance')
        document.getElementById("input2").value = ''
        return
    }
    else if(value <= 0){
        alert('Donate Failed')
        document.getElementById("input").value = ''
        return
    }
    donateQuota += value
    document.getElementById("donateQuota").innerText = donateQuota
    const currentAmount = currentBalance - value 
    document.getElementById("currentBalance").innerText = currentAmount
    document.getElementById("input2").value = ''
    alert('Donate Successful')
    const div = document.createElement('div')
     div.className = 'border m-2 p-3 rounded-lg'
    div.innerHTML =   
    `<p class="m-2 p-3 text-2xl font-bold"><span>${value}</span>Taka is Donated for aid for  injured in the Quota movement, Bangledesh</p>
    <p class="m-2 p-3">${new Date()}</p>`

    HistorySection.appendChild(div)


})

document.getElementById('blog').addEventListener('click', function(){
    window.location.href = './blog.html'
})
const clickDonateBTN = document.getElementById('clickDonateBTN')
const clickHistoryBTN = document.getElementById('clickHistoryBTN')
const mainSection = document.getElementById('mainSection')


clickHistoryBTN.addEventListener('click', function(){
 mainSection.classList.add('hidden')
 HistorySection.classList.remove('hidden')
 clickDonateBTN.classList.remove('bg-green-400')
 clickDonateBTN.classList.add('bg-gray-200')
 clickHistoryBTN.classList.add('bg-green-400')
 clickHistoryBTN.classList.remove('bg-gray-200')

})
clickDonateBTN.addEventListener('click', function(){
    mainSection.classList.remove('hidden')
    HistorySection.classList.add('hidden')
 clickHistoryBTN.classList.remove('bg-green-400')
 clickHistoryBTN.classList.add('bg-gray-200')
 clickDonateBTN.classList.add('bg-green-400')
 clickDonateBTN.classList.remove('bg-gray-200')

})





