var slid = document.getElementById('sli'),
imm = document.getElementsByTagName('img'),
linkOne = document.getElementById('one'),
    linkTwo = document.getElementById('two');
    var x =1;
    var y =3;
linkTwo.onclick = function () {

var statone =document.getElementById('m1').getAttribute("src");



if (statone== "image/1.jpg") {


  document.getElementById('m1').setAttribute("src" , "image/2.jpg");
}else if (statone== "image/2.jpg") {
    document.getElementById('m1').setAttribute("src" , "image/3.jpg");
        document.getElementById('two').setAttribute("id" , "chan");
}

else if (statone== "image/5.png") {
    document.getElementById('m1').setAttribute("src" , "image/4.png");
      document.getElementById('chan').setAttribute("id" , "one");
}else if (statone== "image/4.png") {
    document.getElementById('m1').setAttribute("src" , "image/1.jpg");
}

};





linkOne.onclick = function () {

var statone =document.getElementById('m1').getAttribute("src");



if (statone== "image/1.jpg") {

  document.getElementById('m1').setAttribute("src" , "image/4.png");

}else if (statone== "image/4.png") {

  document.getElementById('m1').setAttribute("src" , "image/5.png");
    document.getElementById('one').setAttribute("id" , "chan");

}else if (statone== "image/2.jpg") {
    document.getElementById('m1').setAttribute("src" , "image/1.jpg");
}else if (statone== "image/3.jpg") {
    document.getElementById('m1').setAttribute("src" , "image/2.jpg");
    document.getElementById('chan').setAttribute("id" , "two");
}

};
