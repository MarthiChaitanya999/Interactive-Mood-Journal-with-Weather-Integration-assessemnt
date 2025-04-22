# 🌤️ Interactive Mood Journal with Weather Integration

A responsive and interactive web app that lets users log their daily moods along with notes and view them in correlation with real-time weather data.

## 🚀 Live Demo

> [Live App](https://your-vercel-netlify-github-link.com)  
> [GitHub Repository](https://github.com/your-username/mood-journal-weather-app)

---

## ✨ Features

- 📅 **Daily Mood Logging**: Choose from 5+ moods using emojis/custom icons.
- 📝 **Add Notes**: Optional text input for daily reflections.
- 📍 **Geolocation Support**: Auto-detects user location via browser.
- 🌦️ **Live Weather Integration**: Displays weather using OpenWeatherMap API.
- 📊 **Calendar View**: See past entries by date with mood + weather.
- 🎨 **Dynamic Themes**: Background color/theme changes based on mood.
- 🔍 **Filter Entries**: Filter journal entries by mood.
- 🌘 **Dark Mode** (Bonus)
- 📁 **Export as CSV** (Bonus)
- 📈 **Mood Trends Visualization** (Bonus)

---

## 🛠️ Tech Stack

- **Frontend**: HTML, Tailwind CSS, JavaScript / React (or Vue/Angular)
- **API**: [OpenWeatherMap](https://openweathermap.org/api)
- **Storage**: `localStorage` (can be replaced with backend DB optionally)
- **Deployment**: Vercel / Netlify / GitHub Pages

---

## 📦 Setup Instructions

```bash
# Clone the repository
git clone https://github.com/your-username/mood-journal-weather-app.git
cd mood-journal-weather-app

# Install dependencies
npm install

# Create a .env file and add your OpenWeatherMap API key
REACT_APP_WEATHER_API_KEY=your_api_key_here

# Run the app locally
npm start
