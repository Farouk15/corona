var tbody = document.getElementById("tbody")
var titles = document.getElementById("titles")
fetch("https://api.covid19api.com/summary").then(data=>{return data.json()}).then(data=>{
    console.log(data);


    
    data.Countries.forEach(item=>{
        tbody.innerHTML +=`

    <tr>
        <td class="mm">${item.Country}</td>
        <td class="mm">${item.TotalConfirmed}</td>
        <td class="mm">${item.NewConfirmed}</td>
        <td class="mm">${item.TotalDeaths}</td>
        <td class="mm">${item.NewDeaths}</td>
    </tr>
        `


}
)


    titles.innerHTML = `
    <h3 class = "forh3">
   Total Cases : ${data.Global.TotalConfirmed}
    </h3>
    <h3 class = "forh3">
    Total Cases : ${data.Global.NewConfirmed}
     </h3>
`

//     data.Global.forEach(item=>{
//         titles.innerHTML +=`

//         <h3>
//         ${data.Global.NewConfirmed}
//         </h3>

//     `
// }
// )

}
)


console.log("الانتحار فكره قديه , جرب تشجع برشلونه ");
console.log("ازيككك يا بشمهندسسسس");
