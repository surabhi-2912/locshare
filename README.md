# Real-Time Location Tracking Application

A real-time location tracking application built with React, TypeScript, and Leaflet maps.

## 🚀 Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Mapping**: Leaflet with React-Leaflet
- **Styling**: TailwindCSS
- **Real-time Updates**: Socket.IO
- **Build Tool**: Vite

## 📁 Project Structure

```
client/
├── src/
│   ├── components/
│   │   └── Elements/
│   │       ├── Header/     # Application header component
│   │       ├── Map/        # Leaflet map implementation
│   │       └── Status/     # Status indicator component
│   ├── context/
│   │   └── socket.tsx      # Socket.IO context provider
│   ├── pages/
│   │   ├── Home.tsx       # Home page component
│   │   └── Location.tsx   # Location tracking page
│   ├── types/
│   │   └── index.ts       # TypeScript type definitions
│   ├── App.tsx            # Main application component
│   └── main.tsx          # Application entry point
├── public/               # Static assets
└── index.html           # HTML entry point
```

## 🛠️ Setup and Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   ```

2. **Install dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the client directory:
   ```env
   VITE_SERVER_URL=http://localhost:3000
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🗺️ Map Features

- Real-time location tracking
- Custom markers with popups
- Zoom controls
- Bounded map coordinates
- Responsive design

## 🔍 Key Components

### Map Component
- Displays user location on an interactive map
- Handles real-time location updates
- Custom markers with location information

### Socket Context
- Manages real-time communication with the server
- Handles location updates and status changes

### Status Component
- Shows connection status
- Displays real-time updates

## 📱 Responsive Design

The application is fully responsive with specific styles for:
- Mobile devices
- Tablets
- Desktop screens

## 🔒 Security Considerations

- Location data is only shared when permitted by the user
- Secure WebSocket connections
- Bounded map coordinates to prevent unnecessary data loading

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details

## 🙏 Acknowledgments

- [React Leaflet](https://react-leaflet.js.org/) for mapping functionality
- [Socket.IO](https://socket.io/) for real-time capabilities
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Vite](https://vitejs.dev/) for build tooling