export default class APIService
{
    baseURL='http://localhost/ReactWebAPI/api/';
    
    getEmployeesList()
    {
        return fetch(this.baseURL+'default/GetEmplpoyeesList')  
        .then(response=>response.json());         
    }
    getDepartmentList()
    {
        return  fetch(this.baseURL+'default/GetDepartmentsList')  
        .then(response=>response.json())
    }

    getDeleteDepartmnet(params)
    {
        return  fetch(this.baseURL+'default/deleteDepart/'+params,{
            method:'GET',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
    }

    postDeleteDepartmnet(params)
    {
        return  fetch(this.baseURL+'Default/deleteDepart',{ 
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: params
         })
    }

    postAddDepartment(params)
    {
        return   fetch(this.baseURL+'/Default/addDepart',{  
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:params
         })
        .then(res=>res.json())
    }
}
