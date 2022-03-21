const handleProduct = () => {
    const products = document.querySelectorAll('.deal-list-card');
    products.forEach((product) => {
        console.log(product);
        product.addEventListener('click', (e) => {
            const data = {
                img: product.querySelector('img').src,
            };
            localStorage.setItem('product', JSON.stringify(data));
            console.log(location);

<<<<<<< HEAD
            location.href = location.href + 'page/product.html';
=======
                               location.href = location.href + 'page/product.html';


>>>>>>> 81bc32fdca637ea9eecc6d476ea0ecd44634068f
        });
    });
};

export default handleProduct;
