//endpoint


var xhr = new XMLHttpRequest();
xhr.open("GET","https://webhose.io/search?token=c23fe419-8713-48cb-a614-37d7c3fb9549&format=json&q=thread.section_title%3A(Politics)%20performance_score%3A%3E6&language=english&site_type=news
", false);
xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);