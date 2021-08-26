/*LOGIN.HTML---------------------*/
var app = new Vue({
    el: '#app',
    data: {
      products: 'Socks',
      image: './Images/slider 4.png',
      inventory: 11,
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      variants: [
          {
              variantId: 2234,
              variantColor: "green",
              variantImage: './Images/slider 4.png',
          },
          {
              variantId: 2235,
              variantColor: "blue",
              variantImage: './Images/slider 3.png'
          },
      ],
      cart: 0
    },
    methods: {
        addToCart: function () {
            this.cart += 1
        },
        removeFromCart: function () {
            this.cart -= 1
        },
        updateProduct: function (variantImage) {
            this.image = variantImage
        }
    }
  })

var form = new Vue ({
    el: '#form',
    data: {
        name:'' ,
        password:'' ,
        email:'' ,
        passwordconfirm:'',
    },
    methods: {
        checkInput: function () {
            var pass = this.password === this.passwordconfirm;
            if (pass && this.name && this.email) {
                alert("Sign up Successful!")
                window.location.href = 'index.html'
            }
            else {
                alert("Unsuccessful!")
            }
        }
    }
})

/*LOGIN.HTML---------------------*/