1. Exported Variables: 
   - `products` (Array of product objects)
   - `cartItems` (Array of cart item objects)

2. Data Schemas:
   - `Product` (id, name, description, price, image)
   - `CartItem` (id, product, quantity)

3. ID Names of DOM Elements:
   - `product-list` (Product list container)
   - `product-item-{id}` (Individual product item)
   - `cart` (Cart container)
   - `cart-item-{id}` (Individual cart item)
   - `header` (Header container)
   - `footer` (Footer container)

4. Message Names:
   - `ADD_TO_CART` (Message for adding product to cart)
   - `REMOVE_FROM_CART` (Message for removing product from cart)

5. Function Names:
   - `getProducts` (Fetches products from API)
   - `getProductById` (Fetches a specific product by ID)
   - `addToCart` (Adds a product to the cart)
   - `removeFromCart` (Removes a product from the cart)
   - `updateCart` (Updates the cart items)

6. Shared Dependencies:
   - `next` (Framework for building the website)
   - `react` (Library for building user interfaces)
   - `axios` (Library for making HTTP requests)
   - `@zeit/next-css` (Library for importing CSS in Next.js)
   - `uuid` (Library for generating unique IDs)

7. Shared Styles:
   - `globals.css` (Global styles for the website)
   - `Header.module.css` (Styles for the header)
   - `Footer.module.css` (Styles for the footer)
   - `ProductList.module.css` (Styles for the product list)
   - `ProductItem.module.css` (Styles for the product item)
   - `Cart.module.css` (Styles for the cart)
   - `CartItem.module.css` (Styles for the cart item)

8. Shared Assets:
   - `logo.png` (Logo of the website)
   - `products` (Directory for product images)