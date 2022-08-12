const person_details = [
    { name: "Vishwani", email: "vishwani@gmail.com", Addres: "Valsad", number: "9874563210" },
    { name: "Bhakti", email: "bhakti@gmail.com", Addres: "Surat", number: "8796541307"  },
    { name: "Nilay", email: "nilay@gmail.com", Addres: "Valsad", number: "7539514862"  },
    { name: "Rajan", email: "rajan@gmail.com", Addres: "Atul", number: "9321654789"  }
]
 
const tableData = document.getElementById("table-body");
 
person_details.forEach(data => {
    const row = document.createElement("tr");
    for (i in data) {
        const column = document.createElement("td");
        column.textContent = data[i];
        row.appendChild(column);
    }
    console.log(row);
    tableData.appendChild(row);
})
 
 
function searchData(){
    const d = document.getElementById("username").value;
    console.log(d);
 
    // person_details.forEach(data =>{
    //     for(i in data){
    //         console.log(data[i]);
    //     }
    // }
    // )
 
    for (const [key, value] of Object.entries(person_details)) {
        console.log(key, value);
      }
}
