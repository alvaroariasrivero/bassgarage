const littlePics = document.getElementsByClassName("little");

const selectPic = () => {
    for(let i = 0; i < littlePics.length; i++){
        littlePics[i].addEventListener('click', function(){
            let picSrc = littlePics[i].src;
            document.getElementById('bigPic').src = '.' + picSrc.slice(-18);
        })
    }
};

selectPic()