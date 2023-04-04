import ImageShow from "./ImageShow";

function ImageList ({ images }) {
    <div>
        images.forEach((element) => {
            <ImageShow 
                image = { element }
            />
        });
    </div>
};

export default ImageList;