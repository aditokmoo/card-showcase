import mountainImage_himalaye from './img/mountain1.jpg'
import mountainImage1 from './img/image-1.jpeg'
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
                            <img src={mountainImage_himalaye} alt="" />
                        </div>
                        <div className="content">
                            <h3>Himilaye</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iusto ullam repudiandae dolores.</p>
                            <span>1</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="image">
                            <img src={mountainImage1} alt="" />
                        </div>
                        <div className="content">
                            <h3>Himilaye</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iusto ullam repudiandae dolores.</p>
                            <span>2</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="image">
                            <img src={mountainImage2} alt="" />
                        </div>
                        <div className="content">
                            <h3>Himilaye</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iusto ullam repudiandae dolores.</p>
                            <span>3</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="image">
                            <img src={mountainImage3} alt="" />
                        </div>
                        <div className="content">
                            <h3>Himilaye</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iusto ullam repudiandae dolores.</p>
                            <span>4</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="image">
                            <img src={mountainImage4} alt="" />
                        </div>
                        <div className="content">
                            <h3>Himilaye</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iusto ullam repudiandae dolores.</p>
                            <span>5</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="image">
                            <img src={mountainImage5} alt="" />
                        </div>
                        <div className="content">
                            <h3>Himilaye</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iusto ullam repudiandae dolores.</p>
                            <span>6</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="image">
                            <img src={mountainImage6} alt="" />
                        </div>
                        <div className="content">
                            <h3>Himilaye</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iusto ullam repudiandae dolores.</p>
                            <span>7</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="image">
                            <img src={mountainImage8} alt="" />
                        </div>
                        <div className="content">
                            <h3>Himilaye</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iusto ullam repudiandae dolores.</p>
                            <span>8</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}