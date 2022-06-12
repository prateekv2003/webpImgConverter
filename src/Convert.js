function convert_image(event){
    const Uimage = document.getElementById("uimage"); 
    const Wimage = document.getElementById("wimage");
    const Download_btn = document.getElementsByClassName("download__btn__container")[0];
    if(event.target.files.length > 0){
        Uimage.src = URL.createObjectURL(event.target.files[0]);

        let userImage = new Image();
        userImage.src = Uimage.src;
        let canvas = document.createElement("canvas");
        let context =  canvas.getContext("2d");

        userImage.onload = function () {
            canvas.width = userImage.width;
            canvas.height = userImage.height;
            context.drawImage(userImage, 0, 0);
            let wImageSrc = canvas.toDataURL("image/webp");
            Wimage.src = wImageSrc;
            Download_btn.children[0].href = wImageSrc;
            Download_btn.style.display = "block";
        }
        
    }
}

export {convert_image}