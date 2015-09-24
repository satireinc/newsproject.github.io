app.factory('news', ['$http', function($http) {
        return  $http.get("https://webhose.io/search?token=c23fe419-8713-48cb-a614-37d7c3fb9549&format=json&q=thread.section_title%3A(world)%20performance_score%3A%3E8&site_type=news")
                            .success(function(data){
                            console.log("function working");
                            return data;
        })
                            .error(function(data){
                        alert("Sorry, there's an error.");
                        cosnole.log(data);
        })

                               

}]
           
           
           
)