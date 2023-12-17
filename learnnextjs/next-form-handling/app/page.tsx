import Button from "./components/button/button"
import Card from "@/app/components/card/card"
function Home() {
    
    return (
        <div>
            <h2>
                Home  Page
            </h2>
            {5 == 5 &&
                <Card style={{background:"red"}} isDescription={false} showTag={true} courseTitle="Web and Mobile" tag="web" description="A web and mobile course description" />}
            <Button title="Apply" />
            <br />
            <Card  style={{background:"green"}} isDescription={true} courseTitle="Blockchain development" tag="blockchain" description="A blockchain course" />
            <Button title="Add+" />
        </div>
    )
}

export default Home