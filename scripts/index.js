console.log('Hello world')

const littlePics = document.getElementsByClassName("little");
const bigPic = document.getElementById('bigPic');

console.log(bigPic)

const selectPic = () => {
    for(let i = 0; i < littlePics.length; i++){
        littlePics[i].addEventListener('click', function(){
            console.log(littlePics[i].src)
        })
    }
};

selectPic()