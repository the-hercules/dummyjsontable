fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => {
        const products = data.products;
        const tableBody = document.querySelector('#productTable tbody');

        products.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.title}</td>
            <td>${product.description}</td>
            <td>${product.price}</td>
            <td>${product.discountPercentage}</td>
            <td>${product.rating}</td>
            <td>${product.stock}</td>
            <td>${10}</td>
            <td>${product.category}</td>
            <td><img src="${product.thumbnail}" alt="Thumbnail" width="50"></td>
          `;
            tableBody.appendChild(row);
        });
    })
    .catch(error => console.error(error));
