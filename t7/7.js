const image = document.getElementById("target");

image.addEventListener('mouseover', function(){
    image.setAttribute('src', 'img/picB.jpg');
})
image.addEventListener('mouseout', function(){
    image.setAttribute('src', 'img/picA.jpg');
  })