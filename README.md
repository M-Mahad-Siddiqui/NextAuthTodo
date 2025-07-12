# Todo App with Authentication

A modern, full-stack Todo application built with Next.js, MongoDB, and JWT authentication. Features a beautiful, responsive UI and complete CRUD functionality for managing your daily tasks.

![Todo App Screenshot](https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=Todo+App+Dashboard)

## 🚀 Features

### Authentication
- **Secure User Registration & Login** - JWT-based authentication with HTTP-only cookies
- **Password Encryption** - Bcrypt hashing for secure password storage
- **Protected Routes** - Middleware-based route protection
- **Auto-redirect** - Automatic navigation based on authentication status

### Todo Management
- **Create Todos** - Add new tasks with title and optional description
- **Edit Todos** - Inline editing of existing tasks
- **Delete Todos** - Remove completed or unwanted tasks
- **Mark Complete** - Toggle completion status with visual feedback
- **Real-time Updates** - Instant UI updates without page refresh

### User Experience
- **Statistics Dashboard** - Track total, completed, and pending tasks
- **Filter System** - View all, pending, or completed todos
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Loading States** - Smooth loading indicators throughout the app
- **Error Handling** - Comprehensive error messages and validation

### Design
- **Modern UI** - Clean, professional interface with gradient backgrounds
- **Tailwind CSS** - Utility-first CSS framework for consistent styling
- **Hover Effects** - Interactive elements with smooth transitions
- **Mobile-First** - Optimized for mobile devices with responsive breakpoints

## 🛠️ Tech Stack

- **Frontend**: Next.js 13+ (App Router), React 18, Tailwind CSS
- **Backend**: Next.js API Routes, Node.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens), bcryptjs
- **Styling**: Tailwind CSS
- **Deployment**: Vercel-ready

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (version 16.0 or higher)
- **npm** or **yarn** package manager
- **MongoDB** database (local or cloud instance)
- **Git** for version control

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/todo-app.git
cd todo-app
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```env
# Database Configuration
MONGODB_URI=mongodb://localhost:27017/todoapp
# For MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/todoapp

# JWT Secret (use a strong, random string in production)
JWT_SECRET=your-super-secret-jwt-key-here-make-it-long-and-random

# Next.js Configuration
NEXTAUTH_URL=http://localhost:3000
NODE_ENV=development
```

### 4. Database Setup

#### Option A: Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service
3. The app will automatically create the database and collections

#### Option B: MongoDB Atlas (Cloud)
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get your connection string
4. Replace the `MONGODB_URI` in `.env.local`

### 5. Run the Application

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
todo-app/
├── app/                          # Next.js App Router
│   ├── api/                      # API Routes
│   │   ├── auth/                 # Authentication endpoints
│   │   │   ├── login/route.js    # Login API
│   │   │   ├── register/route.js # Registration API
│   │   │   └── logout/route.js   # Logout API
│   │   └── todos/                # Todo CRUD endpoints
│   │       ├── route.js          # GET/POST todos
│   │       └── [id]/route.js     # PUT/DELETE specific todo
│   ├── login/                    # Login page
│   ├── register/                 # Registration page
│   ├── todos/                    # Main todos page
│   ├── layout.jsx                # Root layout
│   ├── page.jsx                  # Homepage
│   └── globals.css               # Global styles
├── components/                   # Reusable React components
│   ├── AuthForm.jsx              # Login/Register form
│   ├── Navbar.jsx                # Navigation component
│   ├── TodoForm.jsx              # Add new todo form
│   └── TodoItem.jsx              # Individual todo item
├── lib/                          # Utility libraries
│   ├── auth.js                   # JWT utilities
│   ├── db.js                     # Database connection
│   └── utils.js                  # Helper functions
├── models/                       # Database models
│   ├── User.js                   # User schema
│   └── Todo.js                   # Todo schema
├── middleware.js                 # Route protection middleware
├── next.config.js                # Next.js configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── package.json                  # Dependencies and scripts
└── README.md                     # Project documentation
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/todoapp` |
| `JWT_SECRET` | Secret key for JWT tokens | `your-super-secret-key` |
| `NEXTAUTH_URL` | Application URL | `http://localhost:3000` |
| `NODE_ENV` | Environment mode | `development` or `production` |

### Database Models

#### User Model
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  createdAt: Date (default: now)
}
```

#### Todo Model
```javascript
{
  title: String (required),
  description: String (optional),
  completed: Boolean (default: false),
  user: ObjectId (required, ref: User),
  createdAt: Date (default: now)
}
```

## 🔐 Security Features

- **Password Hashing**: Bcrypt with salt rounds for secure password storage
- **JWT Tokens**: HTTP-only cookies prevent XSS attacks
- **Route Protection**: Middleware ensures only authenticated users access protected routes
- **Input Validation**: Server-side validation for all user inputs
- **CORS Protection**: Configured for secure cross-origin requests

## 📱 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Todos
- `GET /api/todos` - Get user's todos
- `POST /api/todos` - Create new todo
- `PUT /api/todos/[id]` - Update specific todo
- `DELETE /api/todos/[id]` - Delete specific todo

## 🎨 Customization

### Styling
The app uses Tailwind CSS for styling. You can customize:

1. **Colors**: Edit `tailwind.config.js` to change the color scheme
2. **Components**: Modify component files in `/components`
3. **Layout**: Update `app/layout.jsx` for global layout changes

### Features
To add new features:

1. **Database**: Add new models in `/models`
2. **API**: Create new routes in `/app/api`
3. **UI**: Add new components in `/components`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
The app can be deployed on any platform that supports Node.js:
- Netlify
- Railway
- Heroku
- DigitalOcean App Platform

## 🧪 Testing

### Manual Testing Checklist
- [ ] User registration works
- [ ] User login/logout works
- [ ] Creating todos works
- [ ] Editing todos works
- [ ] Deleting todos works
- [ ] Marking todos complete works
- [ ] Filtering todos works
- [ ] Statistics update correctly
- [ ] Responsive design works on mobile

### Running Tests
```bash
# Add your test commands here
npm test
```

## 🐛 Troubleshooting

### Common Issues

#### Database Connection Error
```
Error: MongooseError: Operation `users.findOne()` buffering timed out
```
**Solution**: Check your MongoDB connection string and ensure MongoDB is running.

#### JWT Secret Error
```
Error: secretOrPrivateKey has a value of "undefined"
```
**Solution**: Make sure `JWT_SECRET` is set in your `.env.local` file.

#### Build Errors
```
Error: Cannot resolve module
```
**Solution**: Delete `.next` folder and `node_modules`, then run `npm install` and `npm run dev`.

### Getting Help
1. Check the [Issues](https://github.com/yourusername/todo-app/issues) page
2. Create a new issue with detailed error information
3. Include your environment details and steps to reproduce

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow the existing code style
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation if needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [MongoDB](https://www.mongodb.com/) for the database
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [Vercel](https://vercel.com/) for hosting and deployment

## 📊 Project Stats

- **Lines of Code**: ~2,000+
- **Components**: 4 main components
- **API Routes**: 6 endpoints
- **Database Models**: 2 models
- **Pages**: 4 main pages

---

**Happy Coding! 🎉**

If you found this project helpful, please give it a ⭐ on GitHub!
