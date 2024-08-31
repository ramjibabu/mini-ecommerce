COD-TECH-TASK2

---

# Full Stack eCommerce Website

## Overview

This project is a full-stack eCommerce website that allows users to browse products, add items to their cart, and complete purchases. It features user authentication, product management, and order processing functionalities, all built with a modern tech stack.

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT) and bcrypt
- **Payment Integration**: Stripe (or another payment gateway)
- **Styling**: CSS/SCSS, Bootstrap/Tailwind (optional)

## Features

- **User Authentication**: Register, login, and manage user accounts.
- **Product Management**: Browse, search, and filter products.
- **Shopping Cart**: Add, update, and remove items in the shopping cart.
- **Order Processing**: Checkout process with payment integration.
- **Admin Dashboard**: Manage products, view orders, and handle user accounts.
- **Responsive Design**: Accessible and usable on various devices.

## Getting Started

To get a copy of the project up and running on your local machine, follow these steps:

### Prerequisites

Ensure you have the following software installed:

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **MongoDB**: [Download and install MongoDB](https://www.mongodb.com/try/download/community) (or use a cloud service like MongoDB Atlas)
- **Stripe Account**: [Sign up for Stripe](https://stripe.com) (if using Stripe for payments)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/full-stack-ecommerce.git
   cd full-stack-ecommerce
   ```

2. **Install backend dependencies:**

   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies:**

   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env` file in the `backend` directory with the following content:

   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/ecommerce
   JWT_SECRET=your_jwt_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

   Create a `.env` file in the `frontend` directory for frontend-specific settings (e.g., API URLs):

   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   ```

5. **Start the development servers:**

   - **Backend**: Navigate to the `backend` directory and start the server:

     ```bash
     npm start
     ```

   - **Frontend**: Navigate to the `frontend` directory and start the development server:

     ```bash
     npm start
     ```

   The frontend application will typically be accessible at `http://localhost:3000` and the backend at `http://localhost:5000` (or your configured ports).

## Usage

1. **User Registration and Login:**

   - Navigate to the registration page to create a new user account.
   - Log in to manage your account and start shopping.

2. **Browsing and Managing Products:**

   - Browse through the product catalog.
   - Use the search bar and filters to find specific products.

3. **Shopping Cart:**

   - Add products to your cart.
   - Update quantities or remove items as needed.

4. **Checkout and Payment:**

   - Proceed to checkout to complete your purchase.
   - Use the integrated payment gateway to process transactions.

5. **Admin Dashboard (if applicable):**

   - Manage product listings, view orders, and handle user accounts from the admin panel.

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/YourFeature`)
3. **Commit your changes** (`git commit -am 'Add some feature'`)
4. **Push to the branch** (`git push origin feature/YourFeature`)
5. **Create a new Pull Request**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **[React](https://reactjs.org/)**: For building the user interface.
- **[Node.js](https://nodejs.org/)**: For the backend server.
- **[MongoDB](https://www.mongodb.com/)**: For the database.
- **[Stripe](https://stripe.com)**: For payment processing.

---
Here is the output

![WhatsApp Image 2024-08-31 at 3 45 23 PM](https://github.com/user-attachments/assets/605ce095-e450-4833-a14d-980163e456a1)


