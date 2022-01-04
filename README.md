# Overview
MyKart is a demo ECommerce Website where user can shop for multiple products available in the database. The website is built on MERN technology (MongoDB Express ReactJS NodeJS)

# Tools Used
## Backend 
-  bcryptjs - ^2.4.3 
- body-parser - ^1.19.0
- cloudinary - ^1.27.1
- cookie-parser - ^1.4.6
- cors - ^2.8.5
- dotenv - ^10.0.0
- express - ^4.17.1
- express-fileupload - ^1.2.1
- jsonwebtoken - ^8.5.1
- mongoose - ^6.1.0
- nodemailer - ^6.7.2
- nodemon - ^2.0.15
- stripe - ^8.194.0
- validator - ^13.7.0

## Frontend 
- @material-ui/core- ^4.12.3
- @material-ui/data-grid - *
- @material-ui/icons - ^4.11.2
- @material-ui/lab - *
- @mui/icons-material - ^5.2.1
- @mui/material - ^5.2.3
- @mui/styles - ^5.2.3
- @stripe/react-stripe-js - ^1.7.0
- @stripe/stripe-js - ^1.22.0
- @testing-library/jest-dom - ^5.16.1
- @testing-library/react - ^11.2.7
- @testing-library/user-event - ^12.8.3
- axios - ^0.21.1
- country-state-city - ^3.0.1
- overlay-navbar - ^1.1.1
- react - ^17.0.2
- react-alert - ^7.0.3
- react-alert-template-basic - ^1.0.2
- react-dom - ^17.0.2
- react-helmet - ^6.1.0
- react-icons - ^4.3.1
- react-js-pagination - ^3.0.3
- react-material-ui-carousel - ^3.1.1
- react-rating-stars-component - ^2.2.0
- react-redux - ^7.2.6
- react-router-dom - ^6.1.0
- react-scripts - 4.0.3
- redux - ^4.1.2
- redux-devtools-extension - ^2.13.9
- redux-thunk - ^2.4.1
- web-vitals - ^1.1.2
- webfontloader - ^1.6.28

# Functionalities Implemented
## Nav Bar
Navbar is having Links to Home Page, Products Page, About and Contact Page, Search Page, Cart and Account. If user is not logged in, Login page will be displayed instead of Accounts Page
![image](https://user-images.githubusercontent.com/60430440/147067789-c61323a2-6c4d-4d84-819e-9f85341974ee.png)
## Home Page
Home Page is having a welcome tab and featured products tab
### Welcome Page
![image](https://user-images.githubusercontent.com/60430440/147068256-15e15303-ce43-48a8-96e6-0de4209c3cbd.png)
### Featured Products Page
![image](https://user-images.githubusercontent.com/60430440/147068374-7b0e6c83-1a31-48f9-8a8d-d8e9fbcb08f1.png)
## Products Page
Products Page is having all the products present in the database along with total reviews and ratings. User can use filter option to filter out the products using filters
![image](https://user-images.githubusercontent.com/60430440/147068638-7448ea6a-500e-45d6-8918-f7ab61693452.png)
### Filter for products under 1000
![image](https://user-images.githubusercontent.com/60430440/147068830-fd3d48c6-2be3-49de-8c3e-b64dc18f598b.png)
If no products are found, user will get a screen with message "No products found"
### No products Page
![image](https://user-images.githubusercontent.com/60430440/147068989-20ec3556-572b-4fe3-af62-e77004311e8b.png)
## Products Detail Page
Product Detail Page Will give the details for the product, along with add to cart, submit review and view all reviews
### Details Page
![image](https://user-images.githubusercontent.com/60430440/147069270-907c454e-a8ce-4e25-b7fd-0a16c6ea706e.png)
### Reviews Section
![image](https://user-images.githubusercontent.com/60430440/147069355-c1f29f38-dd1f-438c-8d4f-076a8893ef86.png)
## Submit Review
Logged in user can submit their review and same will be displayed in Reviews Section
![image](https://user-images.githubusercontent.com/60430440/147069478-d658490a-8021-4616-95c1-15af7be60c1e.png)
### After submitting the review
![image](https://user-images.githubusercontent.com/60430440/147069629-f778467b-19b0-43f4-bbdc-7d2beaba4b68.png)
## Searching for Product
User can search for any product and same result will be displayed as s result.
### Search Page
![image](https://user-images.githubusercontent.com/60430440/147069857-777f6e16-52ec-434f-b93e-7ac2440e636c.png)
### Search Results
![image](https://user-images.githubusercontent.com/60430440/147069932-63871a2b-3df4-49f6-beab-b535c9b98435.png)
## Login Page
Registered user can login from the login page
![image](https://user-images.githubusercontent.com/60430440/147070066-4b477add-2a36-4d7c-b53f-034d54d236a3.png)
## Signup Page
New User can Sign up from Register Page
![image](https://user-images.githubusercontent.com/60430440/147070160-55c8872e-7203-4e4f-82c5-0a88be49ca1f.png)
## Forgot Password
User can reset his password using Forgot Password Functionality. An email with reset link will be triggered to the registered mail
![image](https://user-images.githubusercontent.com/60430440/147070223-60901840-02ce-4e2a-961a-c40cbb567884.png)
### Triggered Email
![image](https://user-images.githubusercontent.com/60430440/147070605-8d6daa54-c508-434c-a52f-638ccaddc437.png)
### Password Recovery Page
![image](https://user-images.githubusercontent.com/60430440/147070684-7ffa2d56-7a9d-497a-b1c4-4010dfe3c7a9.png)
## Accounts Page
User can view his details, view orders, edit profile and update his password from accounts page.
![image](https://user-images.githubusercontent.com/60430440/147070854-71907b13-1f40-4b24-bc36-cc5b07dc8f5f.png)
## Edit Profile
User can edit his name, email and profile photo from Edit profile page
![image](https://user-images.githubusercontent.com/60430440/147070972-1342e961-5acd-4f8b-abcc-37f7725741bc.png)
## Change Password
User can update his old password using update password page
![image](https://user-images.githubusercontent.com/60430440/147071049-a0d85ec7-11a5-490c-907e-c0d7bf1d4eeb.png)
## My Orders
User can view all of his orders from My Orders page
![image](https://user-images.githubusercontent.com/60430440/147071157-858cf527-aa7d-403b-9611-5337ca3ef5dd.png)
## Order Details Page
User can view details of any orders from order details page
![image](https://user-images.githubusercontent.com/60430440/147071384-ab2dc868-f6a3-4d23-8525-161cd5d1f720.png)
![image](https://user-images.githubusercontent.com/60430440/147071470-240662f9-1788-43fd-9f84-3f927532e8dd.png)

## Carts Page
User can view all of the items he has added to Cart, change quantity and can remove them as well
![image](https://user-images.githubusercontent.com/60430440/147071577-db6d56e2-c4ad-4609-9b47-105e71d6c6e6.png)
If there are no items, then Cart will be empty
### Empty Cart
![image](https://user-images.githubusercontent.com/60430440/147071689-5d4c9438-d355-4d33-ae54-0345e5ed0fd6.png)
## Checkout page and Payment session
Logged in user can buy items from cart
### Shipping Details Page
![image](https://user-images.githubusercontent.com/60430440/147071914-e88d712b-d145-4fc8-ae19-bed468b620d4.png)

### Confirm Order Page
![image](https://user-images.githubusercontent.com/60430440/147072000-f6d34f71-cc5c-4ca7-b054-2daee8d99fe5.png)

### Proceed to payment page
Card details are dummy and card number is stripe test card number
![image](https://user-images.githubusercontent.com/60430440/147072167-bb421d41-4874-468f-87b2-7a635de09bfb.png)

Payment session is simulated using Stripe
### Stripe Page
![image](https://user-images.githubusercontent.com/60430440/147072279-6b2b212b-622c-4869-8bac-fb6907c25dcc.png)

### Successful page
![image](https://user-images.githubusercontent.com/60430440/147072353-14164833-9833-47fd-9b07-8645a8f84bf9.png)

Orders can be views from My Orders Page
### Updated Orders Page
![image](https://user-images.githubusercontent.com/60430440/147072474-7bed3a21-884e-4fbf-9c1e-e92d357b7a44.png)


# Future Additions
Adding admin user to add, update and delete products, change order status, remove user and change user roles