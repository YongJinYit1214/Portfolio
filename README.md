# Yong Jin Yit - Professional Portfolio

A modern, responsive portfolio website built with React.js frontend and .NET Core backend, showcasing my skills, projects, and experience as a Computer Science student and software developer.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Interactive Components**: Smooth scrolling, hover effects, and transitions
- **Contact Form**: Functional contact form with .NET backend integration
- **Project Showcase**: Detailed presentation of key projects
- **Skills Display**: Organized technical skills by categories
- **Social Integration**: Links to LinkedIn and GitHub profiles

## 🛠️ Tech Stack

### Frontend
- **React.js** - Modern JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Framer Motion** - Animation library for React
- **React Icons** - Popular icon library

### Backend
- **.NET 8** - Cross-platform framework for building APIs
- **ASP.NET Core Web API** - RESTful API framework
- **Entity Framework Core** - Object-relational mapping (ORM)
- **Swagger/OpenAPI** - API documentation

## 📁 Project Structure

```
Portfolio/
├── src/                    # React frontend source code
│   ├── components/         # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Education.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx            # Main App component
│   ├── main.jsx           # React entry point
│   └── index.css          # Global styles
├── backend/               # .NET backend
│   └── PortfolioApi/      # Web API project
│       ├── Controllers/   # API controllers
│       ├── Models/        # Data models
│       ├── Services/      # Business logic services
│       └── Program.cs     # Application entry point
├── public/                # Static assets
├── package.json           # Frontend dependencies
└── README.md             # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- .NET 8 SDK
- Git

### Frontend Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend/PortfolioApi
   ```

2. **Restore packages**
   ```bash
   dotnet restore
   ```

3. **Run the API**
   ```bash
   dotnet run
   ```

The API will be available at `https://localhost:7001` and `http://localhost:5001`

## 📧 Contact Form Configuration

To enable email functionality in the contact form:

1. Update `appsettings.json` with your email configuration:
   ```json
   {
     "Email": {
       "SmtpServer": "smtp.gmail.com",
       "Port": "587",
       "Username": "your-email@gmail.com",
       "Password": "your-app-password",
       "FromAddress": "your-email@gmail.com",
       "ToAddress": "jinyit.yong@gmail.com"
     }
   }
   ```

2. For Gmail, use an App Password instead of your regular password
3. Uncomment the email sending code in `EmailService.cs`

## 🌐 Deployment

### Frontend (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting platform

### Backend (Azure/Railway/Heroku)
1. Configure production settings in `appsettings.Production.json`
2. Deploy using your preferred cloud platform

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary colors: Blue gradient
- Secondary colors: Gray scale
- Accent colors: Various for different sections

### Content
Update personal information in the respective components:
- `Hero.jsx` - Personal introduction
- `About.jsx` - About section content
- `Education.jsx` - Educational background
- `Skills.jsx` - Technical skills
- `Projects.jsx` - Project details

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📞 Contact

**Yong Jin Yit**
- Email: jinyit.yong@gmail.com
- Phone: +60 10-876 6925
- LinkedIn: [yong-jin-yit-608a76360](https://linkedin.com/in/yong-jin-yit-608a76360/)
- GitHub: [YongJinYit1214](https://github.com/YongJinYit1214)

---

*Built with ❤️ using React.js and .NET Core*
