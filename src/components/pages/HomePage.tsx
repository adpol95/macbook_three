import diagonalArrow from "@/assets/media/top-right.png";
import { GoodByeText } from "@/components/ui/GoodByeText";

export const HomePage = () => {
    return (
        <div className={"homePageMain"}>
            <div className={"welcomeText"}>
                <p className={"bigText"}>
                    A software development studio creating innovative IT solutions for
                    clients worldwide
                </p>
                <div className={"listOfWelcomeText"}>
                    <div style={{ background: "white" }}>Expertise</div>
                    <div>Web Development</div>
                    <div>Mobile Apps</div>
                    <div>AI Systems</div>
                </div>
            </div>
            {/* <ThreeScene /> */}
            <div className={"homeMainContent"}>
                <div className={"mainImg"}>
                    <img
                        src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1024&q=80"
                        alt="Web Development"
                    />
                    <div className={"whenHover"}>
                        <p> Web Dev Project </p>
                        <div className={"imgInsideSign"}>
                            <img src={diagonalArrow} alt="Error" />
                        </div>
                    </div>
                </div>
                <div className={"mainImg"}>
                    <img
                        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1024&q=80"
                        alt="Mobile App"
                    />
                    <div className={"whenHover"}>
                        <p> Mobile App </p>
                        <div className={"imgInsideSign"}>
                            <img src={diagonalArrow} alt="Error" />
                        </div>
                    </div>
                </div>
                <div className={"mainImg"}>
                    <img
                        src="https://images.unsplash.com/photo-1503437313881-503a91226402?ixlib=rb-4.0.3&auto=format&fit=crop&w=1024&q=80"
                        alt="AI System"
                    />
                    <div className={"whenHover"}>
                        <p> AI Innovation </p>
                        <div className={"imgInsideSign"}>
                            <img src={diagonalArrow} alt="Error" />
                        </div>
                    </div>
                </div>
                <div className={"mainImg"}>
                    <img
                        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1024&q=80"
                        alt="Software Coding"
                    />
                    <div className={"whenHover"}>
                        <p> Coding Suite </p>
                        <div className={"imgInsideSign"}>
                            <img src={diagonalArrow} alt="Error" />
                        </div>
                    </div>
                </div>
                <div className={"mainImg"}>
                    <video
                        src="https://videos.pexels.com/video-files/3571264/3571264-sd-640x360-30fps.mp4"
                        autoPlay
                        loop
                        playsInline
                        muted
                    />
                    <div className={"whenHover"}>
                        <p> Dev Demo </p>
                        <div className={"imgInsideSign"}>
                            <img src={diagonalArrow} alt="Error" />
                        </div>
                    </div>
                </div>
                <div className={"mainImg"}>
                    <img
                        src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1024&q=80"
                        alt="Cloud Platform"
                    />
                    <div className={"whenHover"}>
                        <p> Cloud Platform </p>
                        <div className={"imgInsideSign"}>
                            <img src={diagonalArrow} alt="Error" />
                        </div>
                    </div>
                </div>
                <div className={"mainImg"}>
                    <img
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1024&q=80"
                        alt="DevOps Tools"
                    />
                    <div className={"whenHover"}>
                        <p> DevOps Tools </p>
                        <div className={"imgInsideSign"}>
                            <img src={diagonalArrow} alt="Error" />
                        </div>
                    </div>
                </div>
                <div className={"mainImg"}>
                    <video
                        src="https://videos.pexels.com/video-files/1722774/1722774-sd-640x360-30fps.mp4"
                        autoPlay
                        loop
                        playsInline
                        muted
                    />
                    <div className={"whenHover"}>
                        <p> Programming Animation </p>
                        <div className={"imgInsideSign"}>
                            <img src={diagonalArrow} alt="Error" />
                        </div>
                    </div>
                </div>
                <div className={"mainImg"}>
                    <img
                        src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1024&q=80"
                        alt="Framework Dev"
                    />
                    <div className={"whenHover"}>
                        <p> Framework Dev </p>
                        <div className={"imgInsideSign"}>
                            <img src={diagonalArrow} alt="Error" />
                        </div>
                    </div>
                </div>
                <div className={"mainImg"}>
                    <img
                        src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1024&q=80"
                        alt="API Integration"
                    />
                    <div className={"whenHover"}>
                        <p> API Integration </p>
                        <div className={"imgInsideSign"}>
                            <img src={diagonalArrow} alt="Error" />
                        </div>
                    </div>
                </div>
                <div className={"mainImg"}>
                    <img
                        src="https://images.unsplash.com/photo-1633356122544-f1347c16d0cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1024&q=80"
                        alt="Blockchain Tech"
                    />
                    <div className={"whenHover"}>
                        <p> Blockchain Tech </p>
                        <div className={"imgInsideSign"}>
                            <img src={diagonalArrow} alt="Error" />
                        </div>
                    </div>
                </div>
                <div className={"mainImg"}>
                    <video
                        src="https://videos.pexels.com/video-files/3195394/3195394-sd-640x360-30fps.mp4"
                        autoPlay
                        loop
                        playsInline
                        muted
                        style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                    <div className={"whenHover"}>
                        <p> Coding Session </p>
                        <div className={"imgInsideSign"}>
                            <img src={diagonalArrow} alt="Error" />
                        </div>
                    </div>
                </div>
            </div>
            <GoodByeText />
            <div className={"downStickFootMain"}>
                <div className={"allFixedSticky"}>
                    <img
                        src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20d%3D%22M%206%200%20L%206%2012%20M%200%206%20L%2012%206%20M%201.757%201.758%20L%2010.243%2010.242%20M%201.758%2010.243%20L%2010.242%201.757%22%20fill%3D%22transparent%22%20stroke-width%3D%221.45%22%20stroke%3D%22rgb(255%2C255%2C255)%22%20stroke-miterlimit%3D%2210%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
                        alt="cross"
                        width={"12px"}
                    />
                    <p>Services</p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
