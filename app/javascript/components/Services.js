import React, { useState, useEffect } from 'react';
import './Services.css'
const Services = () => {
  return (
    <>
        <section className="news" id="news">
            <div className="titletext">
                <h1>News <span>Feed</span></h1>
            </div>
            <div className="container">
                <div className="card">
                <div className="card__header">
                    <img src="https://i.postimg.cc/gkCk3bbx/pexels-cottonbro-studio-3944425.jpg" alt="card__image" className="card__image" width="600"/>
                </div>
                <div className="card__body">
                    <span className="tag">News</span>
                    <h4>Trending Tech Products</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
                </div>
                <div className="card__footer">
                    <div className="user">
                    <img src="https://i.pravatar.cc/40" alt="user__image" className="user__image"/>
                    <div className="user__info">
                        <h5>User 1</h5>
                        <small>2h ago</small>
                    </div>
                    </div>
                </div>
                </div>
                <div className="card">
                <div className="card__header">
                    <img src="https://i.postimg.cc/x1LjRp9t/pexels-cottonbro-studio-3944454.jpg" alt="card__image" className="card__image" width="600"/>
                </div>
                <div className="card__body">
                    <span className="tag">News</span>
                    <h4>Newly Introduced AI Model</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
                </div>
                <div className="card__footer">
                    <div className="user">
                    <img src="https://i.pravatar.cc/40?img=9" alt="user__image" className="user__image"/>
                    <div className="user__info">
                        <h5>User 2</h5>
                        <small>Yesterday</small>
                    </div>
                    </div>
                </div>
                </div>
                <div className="card">
                <div className="card__header">
                    <img src="https://i.postimg.cc/J7dh4BTc/pexels-cottonbro-studio-3944460.jpg" alt="card__image" className="card__image" width="600"/>
                </div>
                <div className="card__body">
                    <span className="tag">News</span>
                    <h4>Recent Trends In IT</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
                </div>
                <div className="card__footer">
                    <div className="user">
                    <img src="https://i.pravatar.cc/40?img=5" alt="user__image" className="user__image"/>
                    <div className="user__info">
                        <h5>User 3</h5>
                        <small>2d ago</small>
                    </div>
                    </div>
                </div>
                </div>
                <div className="card">
                    <div className="card__header">
                    <img src="https://i.postimg.cc/3N6rLPyb/pexels-negative-space-177557.jpg" alt="card__image" className="card__image" width="600"/>
                    </div>
                    <div className="card__body">
                    <span className="tag">News</span>
                    <h4>Top Grossing Video Games</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
                    </div>
                    <div className="card__footer">
                    <div className="user">
                        <img src="https://i.pravatar.cc/40?img=13" alt="user__image" className="user__image"/>
                        <div className="user__info">
                        <h5>User 4</h5>
                        <small>2h ago</small>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card__header">
                    <img src="https://i.postimg.cc/ydRz1kWn/pexels-andrea-piacquadio-3760778.jpg" alt="card__image" className="card__image" width="600"/>
                    </div>
                    <div className="card__body">
                    <span className="tag">News</span>
                    <h4>Market Crises</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
                    </div>
                    <div className="card__footer">
                    <div className="user">
                        <img src="https://i.pravatar.cc/40?img=23" alt="user__image" className="user__image"/>
                        <div className="user__info">
                        <h5>User 5</h5>
                        <small>2h ago</small>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card__header">
                    <img src="https://i.postimg.cc/qBc91fKt/pexels-ono-kosuki-6000154.jpg" alt="card__image" className="card__image" width="600"/>
                    </div>
                    <div className="card__body">
                    <span className="tag tag-blue">News</span>
                    <h4>What's new in 2022 Tech</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
                    </div>
                    <div className="card__footer">
                    <div className="user">
                        <img src="https://i.pravatar.cc/40?img=21" alt="user__image" className="user__image" />
                        <div className="user__info">
                        <h5>User 6</h5>
                        <small>2h ago</small>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
export default Services