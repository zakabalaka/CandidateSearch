# Candidate Search App

## 📌 Description
The **Candidate Search App** is a React + TypeScript application that allows employers to browse potential candidates using the **GitHub API**. Users can view candidate details, save preferred candidates, and manage their selections.

## 🚀 Live Demo
[Deployed Application on Render](#) (https://candidatesearch-xpsb.onrender.com)

## 📸 Screenshot
*(Add a screenshot of the app here)*

## 📂 Folder Structure
```
/CandidateSearch
├── /public
│   ├── index.html
├── /src
│   ├── /api
│   │   ├── API.ts            # Handles GitHub API requests
│   ├── /components
│   │   ├── CandidateCard.tsx  # Displays candidate info
│   │   ├── CandidateList.tsx  # Renders list of saved candidates
│   │   ├── Button.tsx         # Reusable button component
│   ├── /pages
│   │   ├── CandidateSearch.tsx # Main candidate search page
│   │   ├── SavedCandidates.tsx # Page to display saved candidates
│   ├── /styles
│   │   ├── global.css         # Global styles
│   ├── /utils
│   │   ├── localStorage.ts    # Handles saving/loading from local storage
│   ├── App.tsx                # Main app component with routing
│   ├── main.tsx               # Entry point for React
│   ├── routes.tsx             # Define routes for navigation
├── .env                       # Stores API keys (GitHub token)
├── .gitignore                  # Ignore files like node_modules
├── package.json                # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration
├── README.md                   # Project documentation
```

## 🛠 Technologies Used
- **React** (with TypeScript)
- **Vite** (for fast development)
- **React Router** (for navigation)
- **GitHub API** (for candidate data)
- **LocalStorage** (for saving candidates)
- **ESLint + Prettier** (for code quality)

## 📦 Installation & Setup
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/zakabalaka/CandidateSearch.git
   cd CandidateSearch
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**
   - Create a `.env` file in the project root.
   - Add the following:
     ```
     VITE_GITHUB_TOKEN=your_github_token_here
     ```
   - Replace `your_github_token_here` with your GitHub API token.

4. **Run the Development Server:**
   ```bash
   npm run dev
   ```

5. **Build for Production:**
   ```bash
   npm run build
   ```

6. **Preview Production Build Locally:**
   ```bash
   npm run preview
   ```

## 🌐 Deployment
### **Deploying to Render**
1. **Push the latest changes to GitHub:**
   ```bash
   git add .
   git commit -m "Deploying to Render"
   git push origin main
   ```
2. **Set Up Render:**
   - Go to [Render.com](https://render.com/)
   - Create a new Web Service
   - Connect it to your GitHub repository
   - Use the following Build & Start Commands:
     ```bash
     npm install && npm run build
     npm run preview
     ```
3. **Add Environment Variables in Render:**
   - **Key:** `VITE_GITHUB_TOKEN`
   - **Value:** Your GitHub API token
4. **Deploy & Test Your App!**

## 🛠 Features
- Fetches **GitHub user profiles**.
- Displays candidate **name, username, location, avatar, email, and company**.
- Users can **accept or reject candidates**.
- Saves **accepted candidates to local storage**.
- Users can **view saved candidates**.
- Fully responsive and styled with CSS.

## 📝 Future Improvements
- **Search functionality** to filter candidates.
- **Sorting options** for saved candidates.
- **Enhanced UI styling** with a design framework.

## 📜 License
This project is open-source and available under the **MIT License**.

## 🤝 Contributing
Contributions are welcome! Feel free to **fork the repo**, make changes, and submit a **pull request**.

## 📩 Contact
GitHub: [zakabalaka](https://github.com/zakabalaka)

🚀 **Happy Coding!**

