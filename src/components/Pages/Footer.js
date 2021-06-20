import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    來台東一趟，各種房型滿足您的需求。
                </p>
                <p className='footer-subscription-text'>
                    如有問題歡迎撥打電話詢問
                </p>
            </section>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>關於我們</h2>
                        <Link to='/sign-up'>預定流程</Link>
                        <Link to='/'>預定須知</Link>
                        <Link to='/'>品牌故事</Link>
                        
                    </div>
                    <div class='footer-link-items'>
                        <h2>聯絡我們</h2>
                        <Link to='/'>聯絡方式</Link>
                        <Link to='/'>贊助商</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>相簿</h2>
                        <Link to='/'>房間照片</Link>
                        <Link to='/'>風景照片</Link>   
                    </div>
                    <div class='footer-link-items'>
                        <h2>服務資訊</h2>
                        <Link to='/'>服務時間：8:00-17:00</Link>
                        <Link to='/'>客服專線：02-2423-3432</Link>   
                    </div>
                    
                </div>
            </div>

            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                            台東縣政府贊助
                        </Link>
                    </div>
                    <small class='website-rights'>台東觀光民宿 © 2020</small>
                    <div class='social-icons'>
                        <Link
                            class='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i class='fab fa-facebook-f' />
                        </Link>
                        <Link
                            class='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i class='fab fa-instagram' />
                        </Link>
                        <Link
                            class='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i class='fab fa-youtube' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i class='fab fa-twitter' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
