import mountainImage1 from './img/image-1.jpg'
import mountainImage2 from './img/image-2.jpeg'
import mountainImage3 from './img/image-3.jpeg'
import mountainImage4 from './img/image-4.jpeg'
import mountainImage5 from './img/image-5.jpeg'
import mountainImage6 from './img/image-6.jpeg'
import mountainImage7 from './img/image-7.jpeg'
import mountainImage8 from './img/image-8.jpeg'

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-section">
                    <div className="card">
                        <div className="image">
                            <img src={mountainImage1} alt="Random Image 1" />
                        </div>
                        <div className="content">
                            <h3>Mount Everest</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iusto ullam repudiandae dolores.</p>
                            <span>1</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="image">
                            <img src={mountainImage2} alt="Random Image 2" />
                        </div>
                        <div className="content">
                            <h3>Mount Kilimanjaro</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iusto ullam repudiandae dolores.</p>
                            <span>2</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="image">
                            <img src={mountainImage3} alt="Random Image 3" />
                        </div>
                        <div className="content">
                            <h3>Mount Fuji</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iusto ullam repudiandae dolores.</p>
                            <span>3</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="image">
                            <img src={mountainImage4} alt="Random Image 4" />
                        </div>
                        <div className="content">
                            <h3>The Rocky Mountains</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iusto ullam repudiandae dolores.</p>
                            <span>4</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="image">
                            <img src={mountainImage5} alt="Random Image 5" />
                        </div>
                        <div className="content">
                            <h3>The Andes</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iusto ullam repudiandae dolores.</p>
                            <span>5</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="image">
                            <img src={mountainImage6} alt="Random Image 6" />
                        </div>
                        <div className="content">
                            <h3>The Alps</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iusto ullam repudiandae dolores.</p>
                            <span>6</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="image">
                            <img src={mountainImage7} alt="Random Image 7" />
                        </div>
                        <div className="content">
                            <h3>The Himalayas</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iusto ullam repudiandae dolores.</p>
                            <span>7</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="image">
                            <img src={mountainImage8} alt="Random Image 8" />
                        </div>
                        <div className="content">
                            <h3>The Appalachian Mountains</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iusto ullam repudiandae dolores.</p>
                            <span>8</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}