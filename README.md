# Manufacturer-Website- A Full Stack Websites

This is the live site link [Manufacturer-Website](https://bike-parts-cd343.web.app/).

* This is a Bike parts Manufacturer Website.
* Home page  have a Header , Banner, Parts, Business Summary, Reviews, Top selling Products, New releasing bike and Footer. In the home page three parts are displayed. There is button in the cards of a part. If a user clicks on the buy now button it will take the user to the purchase page.

* The `purchase' page is a protected route. Only log in user can go to this route. The purchase page = display detailed information about the item the user has clicked . It is also display the user's name and email address from the login system. The user will have a field to provide phone number to place the order or complete the purchase.

* On the Purchase page, users will be able to change the order quantity (increase/decrease) in an input field. . the user won't be able to reduce the quantity below the minimum order quantity mentioned on the part. Also, the order quantity can not be higher than the available quantity.It will display an error and disable the purchase button in both cases.

* Firebase login system are implemented. If a user is logged in, they will see another option on the header is Dashboard. Inside the dashboard, a user (not an admin) will see options like My Orders, Add A Review, My Profile options on the side nav. The My Profile link will be open for everyone. 

* On My Orders page, the logged-in user will see only their orders. There is payment button for each order. . The pay button will take the user to the payment page. The user should be able to pay by using a credit card here. The payment page will display order details. Once the payment is completed for an order, the user will see the transaction id for that order on the my orders page. 'Stripe' payment system are used.

* On the Add A Review page, users s able to add a review. A review will contain ratings ( a number 1 to 5 and a description). That review will appear on the home page reviews section.

* The My profile route will be available for every user. The user will see their name, image and email address on this profile in this link.

* If an admin logs in, they will not see the options that a user sees except My Profile. This means an admin will not see my orders and add a review link. Instead, an admin will see My Profile, Manage All Orders, Add A Product, Make Admin, Manage Products.

* An Admin should be able to make another user an admin. If an admin wants, they will be able to add a product on the add a product page. After adding the product, this product will appear on the home page.

* on the Manage Products page, an admin can delete any products.
* Implemented the basic version of the jwt token.


* Technologies used : React, React Router, Firebase Authentication, tailwind, daisyUI, MongoDB