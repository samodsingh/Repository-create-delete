

function createRepo() {
    let inputdata = document.getElementById('inputdata').value;
    if (inputdata) {
        let url = "https://api.github.com/user/repos";
        // let url = "https://api.github.com/user/samodsingh/repos";    
        fetch(url,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'token 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'
                },
                method: "POST",
                body: JSON.stringify({
                    "name": inputdata,
                    "description": "Some message",
                    "homepage": "https://github.com",
                    "private": false,
                  })
            })
            .then(function (res) { 
                document.getElementById('demo').innerHTML = "repo created";
                console.log('res--------------', res); 
            })
            .catch(function (res) { console.log('err----------------', res) })
    } else {
        alert("Please Enter the data")
    };
}

//Get repo---------------------

function getAllRepo() {
 fetch("https://api.github.com/users/samodsingh/repos?per_page=100",{
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'token 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'
    },
    method: "GET"
    }).then((Response)=>{
        if(!Response.ok){
            throw Error (Response.statusText)
        }
        // console.log('res',Response)
        return Response.json();
    }).then((result)=>{
      console.log(result,'----------');
        let table = document.getElementById("table");
        for(let repo of result){    
            
            
            
            let row = document.createElement('tr');
            let id = document.createElement('td');
            let name = document.createElement('td');
            let node_id = document.createElement('td');
            let butdelete = document.createElement('td');

            //buttoncreate
            let createdeletebtn = document.createElement('button');
            let btntext = document.createTextNode('Delete');
            createdeletebtn.appendChild(btntext);
            createdeletebtn.onclick = function(){deleterepo(this.value);};
            createdeletebtn.type = "button";
            createdeletebtn.value = repo.name;
            
            id.innerHTML = repo.id;
            name.innerHTML = repo.name;
            node_id.innerHTML =repo.node_id;
         
            butdelete.appendChild(createdeletebtn);
  
            row.appendChild(id);
            row.appendChild(name);
            row.appendChild(node_id);
            row.appendChild(butdelete);
  
            table.appendChild(row);
            document.getElementById("nodata").innerHTML = " ";
         }
    }).catch((error)=>{
        console.log(error)
    })   
}

function deleterepo(reponame) {
    console.log(reponame);
    https://api.github.com/repos/[USER]/[REPO_NAME]

   if(confirm('Want to delete ?'))
   fetch(`https://api.github.com/repos/samodsingh/${reponame}`,{
    headers: {
        'Accept': 'application/vnd.github.v3+json',            
        'Authorization': 'token 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'
    },      
   
    method: "DELETE"

    }).then((res)=>{
        console.log(res);
    })

}
