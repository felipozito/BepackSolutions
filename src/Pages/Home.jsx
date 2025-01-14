import Banner from "../Components/Banner"
import Gallery from "../Components/Gallery"
import information from "../Utils/information"

const Home = () => {
  return (
    <div className="bg-background">
        <h1>Home</h1>
        <Banner title={information.vision.title}
                paragraph={information.vision.paragraph}
                colors='main' 
                />
        <Banner title={information.mision.title}
                paragraph={information.mision.paragraph}
                colors="secondary"
                /> 
        <Gallery/>
    </div>
  )
}

export default Home