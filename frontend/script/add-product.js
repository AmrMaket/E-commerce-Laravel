addProduct = () => {

    const submit_btn = document.getElementById("submit_button");
    submit_btn.addEventListener('click',(e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const price = document.getElementById("price").value;
        const quantity = document.getElementById("quantity").value;
        const category = document.getElementById("category").value;
        const description = document.getElementById("description").value;
        const imagepath = document.getElementById("imagepath").value;

        let formatData = new FormData();
        formatData.append("name", name);
        formatData.append("price", price);
        formatData.append("quantity", quantity);
        formatData.append("category", category);
        formatData.append("description", description);
        formatData.append("imagepath",imagepath);


        let requestOptions = {
            method: Post ,
            body: FormData,
            redirect: 'follow'
        };

        fetch("http://127.0.0.1:8000/api/add_update_product", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    })
}