const handleProduct = () => {
    const products = document.querySelectorAll('.deal-list-card');
    products.forEach((product) => {
        console.log(product);
        product.addEventListener('click', (e) => {
            const data = {
                img: product.querySelector('img').src,
            };
            localStorage.setItem('product', JSON.stringify(data));

            location.href = location.href + 'page/product.html';
        });
    });
};

export default handleProduct;
