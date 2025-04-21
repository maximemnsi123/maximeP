

const image = document.getElementById("monImage");

image.addEventListener("mouseover", () => {
  image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX1-S516U7z7FqGaBL-l8Q4lh0Op3re_3jY0vS6rjov1F5CiYCH89PfoDd-5ovDOuJB5w&usqp=CAU"; 
});

image.addEventListener("mouseout", () => {
  image.src = "https://www.babelio.com/users/AVT_Herbert-A-Simon_1672.jpg"; 
});


const image2 = document.getElementById("image2");
    image2.addEventListener("mouseover", () => {
      image2.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Donkey_in_Abruzzo.jpg/220px-Donkey_in_Abruzzo.jpg";
    });
    image2.addEventListener("mouseout", () => {
      image2.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Herbert_A._Simon_and_Allen_Newell_Chess_Match.jpg";
    });