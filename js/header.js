const headerLinksBar = document.querySelector('.header-links-bar');
const headerBody = document.querySelector('.header__body');
const banner = document.querySelector('.banner');

const handleHeader = () => {
    banner.style.paddingTop = `${headerBody.offsetHeight}px`;
    window.onscroll = () => {
        headerBody.style.transform =
            window.scrollY >= headerLinksBar.scrollHeight
                ? `translateY(${-headerLinksBar.scrollHeight}px)`
                : '';
    };
};

export default handleHeader;
