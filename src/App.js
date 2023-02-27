import 'bulma/css/bulma.css'
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
    return (
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                    <p className='title'>Personal Aigital Assistance </p>
                </div>
            </section>
            <div className="container">
                <section className='section'>
                    <div className='columns'>
                        <div className='column'>
                            <ProfileCard
                                title="Alexa"
                                handle="@Alexa"
                                src={AlexaImage}
                                description="A new site for Alexa, Amazon's cloud based AI"
                            />
                        </div>
                        <div className='column'>
                            <ProfileCard
                                title="Cortana"
                                handle="@Cortana"
                                src={CortanaImage}
                                description="Cortana is a virtual assistant developed by Microsoft that uses the Bing search engine to perform tasks such as setting reminders and answering questions for the user"
                            />
                        </div>
                        <div className='column'>
                            <ProfileCard
                                title="Siri"
                                handle="@Siri"
                                src={SiriImage}
                                description="Siri is a virtual assistant that is part of Apple Inc.'s iOS, iPadOS, watchOS, macOS, tvOS, and audioOS operating systems."
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;