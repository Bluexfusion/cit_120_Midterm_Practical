var wrapperEle = document.body.querySelector(".wrapper");

var list = [
  {
    name: "Harry",
    age: 25
  },
  {
    name: "Larry",
    age: 15
  },
  {
    name: "Bert",
    age: 45
  },
  {
    name: "Jerry",
    age: 35
  },
  {
    name: "Berry",
    age: 5
  },
  {
    name: "Bart",
    age: 55
  }
];
for(var i=0; i<list.length; i++){
 if(list[i].name){
 var personEle = document.createElement("div");
  personEle.innerHTML=list[i].name;
  wrapperEle.appendChild(personEle);
    } 
  if(list[i].age>=40){
    personEle.style.color="red";
  }else{
    personEle.style.color="black";
  }
}


function counter(number){
  var ele = document.createElement("span");
  ele.innerHTML=number;
  document.body.appendChild(ele);
}

for(var i=0; i<1; i++){
  counter("0"+" ");
}

document.body.querySelector(".button").addEventListener("click", function(){
counter(i+++" ");
});