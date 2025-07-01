// 背景视频控制
const bgVideo = document.getElementById('bgVideo');
if (bgVideo) {
    // 确保视频自动播放
    bgVideo.play().catch(function(error) {
        console.log("视频自动播放失败:", error);
        // 如果自动播放失败，尝试静音播放
        bgVideo.muted = true;
        bgVideo.play().catch(function(error) {
            console.log("静音播放也失败:", error);
        });
    });
    
    // 监听视频加载完成事件
    bgVideo.addEventListener('loadeddata', function() {
        console.log("背景视频加载完成");
    });
    
    // 监听视频错误事件
    bgVideo.addEventListener('error', function(e) {
        console.log("视频播放错误:", e);
    });
    
    // 监听滚动事件，控制视频播放状态
    window.addEventListener('scroll', function() {
        const heroSection = document.getElementById('home');
        const heroRect = heroSection.getBoundingClientRect();
        
        // 如果hero部分完全不在视窗内，暂停视频
        if (heroRect.bottom < 0 || heroRect.top > window.innerHeight) {
            bgVideo.pause();
        } else {
            // 如果hero部分在视窗内，播放视频
            bgVideo.play().catch(function(error) {
                console.log("视频播放失败:", error);
            });
        }
    });
}

// 移动端导航菜单切换
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// 点击导航链接时关闭移动端菜单
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// 导航栏滚动效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// 技能进度条动画
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 200);
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// 观察技能部分
const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    observer.observe(skillsSection);
}

// 联系表单处理
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // 获取表单数据
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const subject = contactForm.querySelector('input[placeholder="主题"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // 简单的表单验证
        if (!name || !email || !message) {
            alert('请填写所有必填字段！');
            return;
        }
        
        // 这里可以添加发送邮件的逻辑
        // 目前只是显示成功消息
        alert('消息发送成功！我会尽快回复您。');
        contactForm.reset();
    });
}

// 平滑滚动到锚点
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 添加滚动时的淡入效果
const fadeElements = document.querySelectorAll('.project-card, .skill-category, .about-text');
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(el);
});

// 添加打字机效果到标题
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// 页面加载完成后启动打字机效果
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 80);
    }
});

// 添加头像交互效果
const profileImage = document.querySelector('.profile-image');
if (profileImage) {
    profileImage.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) rotate(2deg)';
    });
    
    profileImage.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
    
    // 添加点击效果
    profileImage.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
}

// 添加学校logo交互效果
const schoolLogo = document.querySelector('.school-logo');
if (schoolLogo) {
    schoolLogo.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    schoolLogo.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
    
    // 添加点击效果
    schoolLogo.addEventListener('click', function() {
        this.style.transform = 'translateY(-5px) scale(0.98)';
        setTimeout(() => {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        }, 150);
    });
}

// 添加项目卡片悬停效果
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// 添加技能条悬停效果
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        const progressBar = this.querySelector('.skill-progress');
        if (progressBar) {
            progressBar.style.transform = 'scaleX(1.05)';
        }
    });
    
    item.addEventListener('mouseleave', function() {
        const progressBar = this.querySelector('.skill-progress');
        if (progressBar) {
            progressBar.style.transform = 'scaleX(1)';
        }
    });
});

// 添加页面加载动画
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// 添加返回顶部按钮
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopButton.className = 'back-to-top';
backToTopButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: #2563eb;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    font-size: 1.2rem;
`;

document.body.appendChild(backToTopButton);

// 显示/隐藏返回顶部按钮
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.opacity = '1';
        backToTopButton.style.visibility = 'visible';
    } else {
        backToTopButton.style.opacity = '0';
        backToTopButton.style.visibility = 'hidden';
    }
});

// 返回顶部功能
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 添加悬停效果
backToTopButton.addEventListener('mouseenter', () => {
    backToTopButton.style.background = '#1d4ed8';
    backToTopButton.style.transform = 'translateY(-3px)';
});

backToTopButton.addEventListener('mouseleave', () => {
    backToTopButton.style.background = '#2563eb';
    backToTopButton.style.transform = 'translateY(0)';
});

// 语言切换功能
const langEnBtn = document.getElementById('lang-en');
const langZhBtn = document.getElementById('lang-zh');

function setLang(lang) {
    // 导航
    document.getElementById('nav-menu-en').style.display = lang === 'en' ? '' : 'none';
    document.getElementById('nav-menu-zh').style.display = lang === 'zh' ? '' : 'none';
    // 首页
    document.getElementById('home-en').style.display = lang === 'en' ? '' : 'none';
    document.getElementById('home-zh').style.display = lang === 'zh' ? '' : 'none';
    // 教育
    document.getElementById('about-title-en').style.display = lang === 'en' ? '' : 'none';
    document.getElementById('about-title-zh').style.display = lang === 'zh' ? '' : 'none';
    document.getElementById('about-en').style.display = lang === 'en' ? '' : 'none';
    document.getElementById('about-zh').style.display = lang === 'zh' ? '' : 'none';
    // 技能
    document.getElementById('skills-title-en').style.display = lang === 'en' ? '' : 'none';
    document.getElementById('skills-title-zh').style.display = lang === 'zh' ? '' : 'none';
    document.getElementById('skills-en').style.display = lang === 'en' ? '' : 'none';
    document.getElementById('skills-zh').style.display = lang === 'zh' ? '' : 'none';
    // 项目
    document.getElementById('projects-title-en').style.display = lang === 'en' ? '' : 'none';
    document.getElementById('projects-title-zh').style.display = lang === 'zh' ? '' : 'none';
    document.getElementById('projects-en').style.display = lang === 'en' ? '' : 'none';
    document.getElementById('projects-zh').style.display = lang === 'zh' ? '' : 'none';
    // 联系
    document.getElementById('contact-title-en').style.display = lang === 'en' ? '' : 'none';
    document.getElementById('contact-title-zh').style.display = lang === 'zh' ? '' : 'none';
    document.getElementById('contact-info-en').style.display = lang === 'en' ? '' : 'none';
    document.getElementById('contact-info-zh').style.display = lang === 'zh' ? '' : 'none';
    // 页脚
    document.getElementById('footer-en').style.display = lang === 'en' ? '' : 'none';
    document.getElementById('footer-zh').style.display = lang === 'zh' ? '' : 'none';
    // 按钮高亮
    langEnBtn.classList.toggle('active', lang === 'en');
    langZhBtn.classList.toggle('active', lang === 'zh');
}

langEnBtn.addEventListener('click', () => setLang('en'));
langZhBtn.addEventListener('click', () => setLang('zh'));

// 默认英文
setLang('en'); 