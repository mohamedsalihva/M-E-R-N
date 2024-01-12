async function getData(){
    let data = await fetch('http://localhost:3000/getData');
    console.log("Data :", Data);

    let parsed_data = await data.json();
    console.log("parsed_data :",parsed_data);

    let content = document.getElementById('content');
    console.log("content:",content);

    let rows ="";

    for (let i=0; parsed_data.length; i++){
        rows = rows +` <table>
        <thead>
            <tr>
                <th>${parsed_data[i].ID}</th>
                <th>${parsed_data[i].Name}</th>
                <th>${parsed_data[i].Email}</th>
                <th>${parsed_data[i].password}</th>
            </tr>
        </thead>
    </table>;`
    }
    content.innerHTML = rows;
}
getData();