// first task
var i = 1;
while(i < 40){
    console.log('Ajke amar mon valo');
    i++;
}



// second task
var i = 58;
while(i <= 98){
    console.log(i);
    i++;
}



// third task
var i = 412;
while(i <= 456){
    console.log(i);
    i+=2;
}



// fourth task
var i = 581;
while(i <= 623){
    console.log(i);
    i+=2;
}



// fifth task
var topics = ['html', 'css', 'tailwind', 'bootstrap', 'javascript'];
var i = 0;
while(i < topics.length){
    console.log(topics[i]);
    i++;
}



// sixth task
var i = 30;
while(i <= 86){
    if(i > 44){
        break;
    }
    console.log(i);
    i++;
}



// seventh task
var books_price = [100, 200, 130, 250, 190];
for(var i = 0; i < books_price.length; i++){
    if(books_price[i] > 200){
        continue;
    }
    console.log(books_price[i]);
}
