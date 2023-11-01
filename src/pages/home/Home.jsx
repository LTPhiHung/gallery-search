import { useEffect, useRef, useState } from "react";
import "./home.css";
import Search from "../../component/search/Search";
import Images from "../../component/images/Images";
import Loading from "../../component/loading/Loading";

function App() {
    const [context, setContext] = useState("random");
    const [imageUrls, setImageUrls] = useState([]);
    const [oldImage, setOldImage] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const homeRef = useRef(null);
    const loadImages = async () => {
        try {
            const response = await fetch(
            `https://api.unsplash.com/search/photos?page=${page}&query=${context}&client_id=GQS2ef76pY8dxI8bFW-8SXS1nreEKKTik8hRr6mrAvE`
            );
            const imgResult = await response.json();
            
            setImageUrls([...oldImage, ...imgResult.results.map(image => image)]);
            setOldImage([...oldImage, ...imgResult.results.map(image => image)]);
        } catch (error) {
            console.error("Error loading images:", error);
        } 
    };

    useEffect(() => {
        loadImages();
        setIsLoading(false);
    }, [context, page]);

    

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = homeRef.current.scrollHeight;
// const rectangleBottom = rectangle.getBoundingClientRect().bottom;
        if (scrollY + windowHeight >= documentHeight - 10) {
            setIsLoading(true)
            setTimeout(() => {
                setPage(page + 1)
            }, 2000);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    return (
        <div className="container" ref={homeRef}>
            <Search  context={context} setContext={setContext} setOldImage={setOldImage} setPage={setPage} />
            <Images imageUrls={imageUrls} />
            {isLoading &&  <Loading />}
        </div>
    );
}

export default App;
