const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

fetch('data.csv')
    .then(response => response.text())
    .then(data => {
        const rows = data.split('\n');
        const headers = rows[0].split(',');

        let productDetails = '';
        let productLocation = '';

        for (let i = 1; i < rows.length; i++) {
            const values = rows[i].split(',');
            if (values[0] === productId) {
                const productName = values[1];
                const productDescription = values[2];
                const productPrice = values[3];
                productLocation = values[4];
                const productState = values[5];

                productDetails += `<h2>${productName}</h2>`;
                productDetails += `<p><strong>Descripción:</strong> ${productDescription}</p>`;
                productDetails += `<p><strong>Ubicación:</strong> ${productPrice}</p>`;
                productDetails += `<p><strong>Estado:</strong> ${productState}</p>`;
                productDetails += `<p><strong>Cantidad:</strong> ${productLocation}</p>`;
                break;
            }
        }


        document.getElementById('productDetails').innerHTML = productDetails;
    });
