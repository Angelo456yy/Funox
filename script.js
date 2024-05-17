document.addEventListener("DOMContentLoaded", function() {
    const fileInput = document.getElementById('fileInput');
    const uploadButton = document.getElementById('uploadButton');
    const currentVideo = document.getElementById('currentVideo');
    const logos = document.querySelectorAll('.logo');

    let videos = [
        { src: "videos/pose (1).mp4", logo: 2 },
        { src: "videos/video2.mp4", logo: 1 },
        { src: "videos/video.mp4", logo: 3 },
        { src: "videos/video (17).mp4", logo: 3 },
        { src: "videos/video (13).mp4", logo: 2 },
        { src: "videos/video (12).mp4", logo: 2 },
        { src: "videos/video (9).mp4", logo: 3 },
        { src: "videos/video (10).mp4", logo: 3 },
        { src: "videos/video (7).mp4", logo: 3 },
        { src: "videos/video (4).mp4", logo: 1 },
        { src: "videos/video (1).mp4", logo: 1 },
        { src: "videos/video (2).mp4", logo: 3 },
        { src: "videos/WhatsApp Video 2024-04-28 at 11.58.08 PM.mp4", logo: 2 },
        { src: "extra/MP4.mp4", logo: 4 },
        { src: "extra/1714932286117_1714932286119.mp4", logo: 4 },
        { src: "extra/1714930232685_1714930232691.mp4", logo: 4 },
        { src: "extra/425968090_1156135855747927_7248321472742777025_n.mp4", logo: 4 },
        { src: "extra/VID_49120515_235245_7642.mp4", logo: 5 }
    ];

    // Función para cargar y reproducir un video aleatorio
    function playRandomVideo() {
        const randomIndex = Math.floor(Math.random() * videos.length);
        const currentIndex = randomIndex;
        
        currentVideo.src = videos[currentIndex].src;
        currentVideo.play();
        currentVideo.loop = true;

        logos.forEach(logo => {
            logo.style.display = 'none';
        });

        const logoNumber = videos[currentIndex].logo;
        const logoToShow = document.querySelector(`.logo:nth-of-type(${logoNumber})`);
        if (logoToShow) {
            logoToShow.style.display = 'block';
        }
    }

    // Reproducir un video aleatorio al cargar la página
    playRandomVideo();

    // Event listener para cargar y reproducir un nuevo video aleatorio al presionar el botón "Siguiente"
    document.getElementById('loadNextButton').addEventListener('click', playRandomVideo);

    // Event listener para cargar un video desde el archivo al hacer clic en el botón de carga
    uploadButton.addEventListener('click', function() {
        fileInput.click();
    });

    // Event listener para manejar la carga de un nuevo video desde el archivo seleccionado
    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        const objectURL = URL.createObjectURL(file);
        currentVideo.src = objectURL;
        currentVideo.play();

        // Agregar el video a la lista con un identificador único
        const newVideoIndex = videos.length + 1;
        videos.push({ src: objectURL, logo: 6 });

        // Guardar el video en el localStorage
        localStorage.setItem(`video${newVideoIndex}_src`, objectURL);
    });

    // Cargar los botones de "like" y contadores para los videos existentes
    logos.forEach((logo, index) => {
        addLikeButtonAndCount(logo, index + 1);
    });
});

// Generar un nombre de usuario aleatorio
function generarUsuario() {
    var letras = 'abcdefghijklmnopqrstuvwxyz';
    var numeros = '0123456789';
    var nombreUsuario = 'user';
  
    for (var i = 0; i < 6; i++) {
      if (Math.random() < 0.5) {
        nombreUsuario += letras.charAt(Math.floor(Math.random() * letras.length));
      } else {
        nombreUsuario += numeros.charAt(Math.floor(Math.random() * numeros.length));
      }
    }
  
    return nombreUsuario;
  }
  
  // Obtener el elemento span con la clase "username lencho" dentro del div con id "logo6"
  var usernameSpan = document.querySelector('#logo6 .username.lencho');
  
  // Cambiar el contenido del span por un nombre de usuario aleatorio generado
  if (usernameSpan) {
    usernameSpan.textContent = generarUsuario();
  }
  
  
