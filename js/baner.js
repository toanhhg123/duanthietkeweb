const removeActiveDots = (dots) => {
    dots.forEach((dot) => {
        dot.classList.remove('active');
    });
};
const renderDots = (imgs) => {
    const bannerDots = document.querySelector('.banner-img-dots');
    let dots = '';
    for (let i = 0; i < imgs.length; i++) {
        dots += `<div class="banner-img-dots-item"></div>`;
    }
    bannerDots.innerHTML = dots;
};

const renderImg = (imgs) => {
    let i = 1;
    const bannerImg = document.querySelector('.banner-img img');
    const dots = document.querySelectorAll('.banner-img-dots-item');

    setInterval(() => {
        if (i >= imgs.length) i = 0;
        removeActiveDots(dots);
        dots[i].classList.add('active');
        bannerImg.src = imgs[i];
        bannerImg.parentNode.replaceChild(bannerImg, bannerImg);

        i++;
    }, 4000);
};

const renderBanerImgs = () => {
    const imgs = [
        './imgs/banner.png',
        './imgs/banner1.png',
        './imgs/banner2.png',
    ];

    renderDots(imgs);
    renderImg(imgs);
};

export default renderBanerImgs;
