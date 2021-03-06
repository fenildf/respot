(function(){
    var base = "/deck/quizlet";
    var search = base+"/search";
    var create = base+"/create";
    var page = 1

    function formData(id){
        var data = {}
        $(id).serializeArray().forEach(function(e){
            data[e.name] = e.value;
        })
        
        return data;
    }
    
    
    $(document).ready(function(){
        //bind event to the form modal
        $('#search-next').click(function () {
            page++;
            getResults()
        })
        
         $('#search-previous').click(function () {
            page--;
            if(page < 1) page = 1
            getResults()
        })
        

        $('#quizlet-search').submit(function (evt) {
            evt.preventDefault();
            getResults();
        });
        
        function getResults(){
            var data = formData('#quizlet-search');
            data["page"] = page;
            $.get(search,data,function(json){
                var deck = json.sets;
                var html = [];
                deck.forEach(function(e){
                    html = html.concat(searchResult(e));
                })
                
                $("#search-results").html(html.join(""));
            });
        }
    })
    
    function searchResult(data){
        
        var seconds = data["modified_date"]
        data["modified_date"] = new Date(0);
        data["modified_date"].setUTCSeconds(seconds)
        
        var template = ['<a href="',create+"/"+data["id"],'" class="list-group-item search-item">',
                       '<h4 class="list-group-item-heading">',data["title"],'<span class="badge">',
                        data["term_count"]
                       ,'</span></h4>',
                       '<p class="list-group-item-text">',data["modified_date"].toDateString(),'</p>',
                       '<p class="list-group-item-text">',data["description"],'</p>',
                        '</a>']
                        
        return template;
    }
    
    
    
        
})()
