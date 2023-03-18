function ImageList ({ images }) {
    <div>
        images.forEach((element) => {
            console.log({element});
            <image src={element.link}></image>
        });
    </div>
};

export default ImageList;