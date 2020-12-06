function applyEffect(effectName) {
    document.getElementById("photo-img").className = effectName;
  }
  
  function uploadPhoto(photoInput) {
    let selectedFile = photoInput.files[0];
  
    if (!selectedFile) {
      return;
    }
  
    let fileURL = window.URL.createObjectURL(selectedFile);
  
    let photoImg = document.getElementById("photo-img");
    photoImg.src = fileURL;
  }
  
  function downloadPhoto() {
    let photoEditor = document.getElementById("photo-editor");
    let photoImg = document.getElementById("photo-img");
  
    let options = {
      width: photoImg.offsetWidth * 3,
      height: photoImg.offsetHeight * 3,
      style: {
        transform: "scale(3)",
        "transform-origin": "top left"
      }
    };
    domtoimage
      .toPng(photoEditor, options)
      .then(function (dataUrl) {
        let link = document.createElement("a");
        link.download = "edit.png";
        link.href = dataUrl;
        link.click();
      })
      .catch(function (error) {
        alert("Упс! Что-то пошло не так!");
      });
  }