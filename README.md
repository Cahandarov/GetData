Product Listing and Filtering Application
This JavaScript code enables the creation of a basic web application for listing and filtering products. Users can view a list of products retrieved from a REST API, search for products by name, filter products by category, and view additional details about each product. This README will guide you through understanding and using this product listing and filtering application.

Getting Started
Prerequisites
Before using this code, make sure you have the following prerequisites:

HTML Structure: Create an HTML structure that includes the necessary elements for displaying product information, search input, category selection, and details. Ensure that the element IDs and classes match those used in the JavaScript code.

CSS Styles: You should have CSS styles to format and style the product display and other elements. Customize the styles to match your design requirements.

Axios Library: Ensure that you include the Axios library in your HTML document to make HTTP requests to the REST API. You can include Axios by adding a script tag to the Axios CDN or by installing it using npm.

Usage
Include JavaScript: Incorporate the provided JavaScript code into your HTML document. Place it after the HTML elements so that it can access and manipulate them.

Interact with the Product List: Users can interact with the product list as follows:

Enter text in the search input to filter products by name.
Select a category from the dropdown menu to filter products by category.
Click the "More info" button to view additional details about a product.
Customize the Category Dropdown: Customize the category options by modifying the code that populates the <select> element with category values from the API.

API Interaction: This code uses Axios to make GET requests to the REST API. Ensure that the API endpoints match your API's structure.

Code Explanation
The JavaScript code captures various HTML elements, sets up event listeners, and makes HTTP requests to the API.

The getData function is responsible for displaying product data received from the API.

The searched_Text function retrieves product data based on user search input and updates the displayed products accordingly.

The code populates the category dropdown with options and listens for changes to filter products by category.

Example
You can see a live example of this product listing and filtering application by including the provided HTML and JavaScript code in an HTML file and opening it in a web browser. Ensure that you have access to a compatible REST API with product data.

License
This code is provided under the MIT License. You are free to use and modify it for your own projects. Refer to the LICENSE file for details.

Acknowledgments
This code offers a basic implementation of a product listing and filtering system. You can enhance it by adding features like pagination, sorting options, and additional product details to meet your specific requirements.



## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-projectygujhkj
```
    