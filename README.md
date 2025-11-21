# Codify - AI Code Reviewer

An intelligent code review tool powered by Google's Gemini AI that helps developers improve their code quality through automated analysis and expert recommendations.

## 🚀 Features

- **AI-Powered Code Analysis**: Leverage Google's Gemini 2.5-flash model for intelligent code review
- **Multi-Language Support**: Review code in JavaScript, Python, Java, C++, and SQL
- **Comprehensive Analysis**: Get detailed feedback including:
  - Code quality ratings (Better, Good, Normal, Bad)
  - Best practice recommendations
  - Step-by-step code explanations
  - Bug and error detection
  - Performance optimization suggestions
  - Security vulnerability scanning
- **Modern Code Editor**: Built-in Monaco Editor with syntax highlighting
- **User Authentication**: Secure login via Auth0
- **Responsive Design**: Clean, modern UI built with React and Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS, Custom CSS
- **Code Editor**: Monaco Editor
- **AI Integration**: Google Generative AI (Gemini 2.5-flash)
- **Authentication**: Auth0
- **Markdown Rendering**: React Markdown
- **Animations**: GSAP
- **Icons**: Custom SVG icons

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd codify
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Create a `.env` file in the root directory
   - Add your Google AI API key:
     ```
     GOOGLE_API_KEY=your_google_ai_api_key_here
     ```
   - Configure Auth0 credentials in your Auth0 dashboard and update the app accordingly

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 How to Use

1. **Authentication**: Log in using your Google account via Auth0
2. **Select Language**: Choose your programming language from the dropdown
3. **Write Code**: Enter or paste your code in the Monaco editor
4. **Get Review**: Click the "Review" button to receive AI-powered feedback
5. **Review Results**: Read the detailed analysis in the right panel

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Google Generative AI for powering the code analysis
- Auth0 for authentication services
- Monaco Editor for the code editing experience
- React ecosystem for the robust frontend framework

## 📞 Contact

**Kunal More**
- LinkedIn: [kunal-more-0338a8289](https://www.linkedin.com/in/kunal-more-0338a8289/)

---

*Transform your code quality with the power of AI-driven code review.*
