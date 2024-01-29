# Next.js Project: Personal Info and Products

This repository contains a Next.js project with two main functionalities: Personal Information and Product Details.

## Project Overview

### 1. Personal Information
- **Location**: `/Client`
- **File**: `page.js`

This section displays a list of student data. Clicking on a student's name navigates to their respective personal information page.

- **Components**:
  - `PersonalInfo.js`: Displays a list of student names with clickable links.
  - `page.js`: Personal information page for a specific student.

### 2. Product Details
- **Location**: `/components`
- **Files**: `page.js` and `Products.js`

This section fetches and displays product details from a dummy API.

- **Components**:
  - `Products.js`: Receives product data and displays a list of products.
  - `page.js`: Product details page.

- **API Integration**:
  - Fetches data from [https://dummyjson.com/products](https://dummyjson.com/products).

## How to Run

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```

2. **Navigate to Project Directory**:
   ```bash
   cd your-repo
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```

5. **Access the Application**:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- **Client Directory**: Contains components related to personal information.
- **Components Directory**: Holds components related to product details.
- **Pages Directory**: Contains Next.js pages for routing.

## Usage

Feel free to explore the project, add new features, or enhance existing ones. Contributions and feedback are welcome.

## Dependencies

- **Next.js**: React framework for building web applications.
- **Fetch API**: Used for fetching data from the dummy product API.

## License

This project is licensed under the [MIT License](LICENSE).
