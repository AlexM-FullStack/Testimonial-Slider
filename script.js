
const customerImg = document.getElementById('customer-img')
const customerName = document.getElementById('customer-name')
const customerText = document.getElementById('customer-text')

const btn = document.querySelectorAll('.btn')

let index = 0
let customers = []

function Customer(img, name, text) {
    this.img = img
    this.name = name
    this.text = text
}

function createCustomer(img, name, text) {
    let Img = `./images/image${img}.avif`
    let customer = new Customer(Img, name, text)

    customers.push(customer)
}

createCustomer(0, 'John', 'Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla.')

createCustomer(1, 'Mark', 'Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus. ')

createCustomer(2, 'Tom', 'Vivamus integer non suscipit taciti mus etiam at primis tempor sagittis sit, euismod libero facilisi aptent elementum felis blandit cursus gravida sociis erat ante')

createCustomer(3, 'Michael', 'Massa curae fringilla porttitor quam sollicitudin iaculis aptent leo ligula euismod dictumst, orci penatibus mauris eros etiam praesent erat volutpat posuere hac.')

createCustomer(4, 'Todd', 'Mollis pretium lorem primis senectus habitasse lectus scelerisque donec, ultricies tortor suspendisse adipiscing fusce morbi volutpat pellentesque, consectetur mi risus molestie curae malesuada cum.')

btn.forEach( button => {
    button.addEventListener('click', event => {
        console.log(event)
        if (event.target.parentElement.classList.contains('prevBtn')){
            if (index === 0){
                index = customers.length
            }
            index --
            customerImg.src = customers[index].img
            customerName.textContent = customers[index].name
            customerText.textContent = customers[index].text
        }

        if (event.target.parentElement.classList.contains('nextBtn')) {
            index ++
            if (index === customers.length) {
                index = 0
            }
            customerImg.src = customers[index].img
            customerName.textContent = customers[index].name
            customerText.textContent = customers[index].text

        }
    })
})








