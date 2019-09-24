const capitalize = str => str[0].toUpperCase() + str.slice(1)


function customerToHtml(customer) {
    return `
    <div class="customer">
    <img src="${customer.picture.large}" srcset=">
    <h2 class="name">${customer.name.first} ${customer.name.last}</h2>
    <p class="email">${customer.email}</p>
    <p class="address1">${customer.location.street}</p>
    <p class="address2">${customer.location.city} ${customer.location.state} ${customer.location.postcode}</p>
    <p class="dob">${moment(customer.dob).format('MMMM Do YYYY')}</p>
    <p class="csince">${moment(customer.registered).format('MMMM Do YYYY')}</p>

</div>
</div>
`



    // let HTML = ""
    // for (customer of customers) {
    //     HTML += customerToHtml(customer)
    // }

}
document.querySelector('.container').innerHTML = customers.map(customerToHtml).join('\n');
// document.querySelector(".container").innerHTML = customers.map(customerToHtml)