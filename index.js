//here we need to perform api function which we will do with the help of ajax
//$.()this is the symbol for jquery
$.ajax({
    //here ajax is a method in which we will mention certain properties below:
    type : 'get',//for getting data from api
    url :'https://api.covid19api.com/summary',
    //when api call is success then data will be written in console so:
    success : function(response)
    {
        console.log(response.Countries)
        //we need a for loop to loop through all 192 objects or countries
        for(var i=0; i<response.Countries.length; i++){
            //console.log(response.Countries[i].Country)
            //above is used to print the names of all countries in console
            //use backticks `` for using external javascript variables
            //we wont have the info about active cases in the api so we will calculate it with the help of given data below
            var totalactive = response.Countries[i].TotalConfirmed-response.Countries[i].TotalRecovered
            //td for columns
            var tablerow =`<tr>
             <td>${response.Countries[i].Country} </td> 
             <td>${response.Countries[i].TotalConfirmed} </td> 
             <td>${totalactive} </td> 
             <td>${response.Countries[i].TotalRecovered} </td>
             <td>${response.Countries[i].TotalDeaths} </td>
             </tr>`
            $('#tbody').append(tablerow)
        }
        //here we need to mention that the table we are having is a data table
        $('#covidtable').DataTable() 
    },
    // when api call is failed then :
    error : function(error){
        console.log(error)

    },
})