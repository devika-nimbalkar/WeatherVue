import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  // Weather images (kept unchanged as per request)
  const INIT_URL = "https://plus.unsplash.com/premium_photo-1707229723342-1dc24b80ffd6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3ByaW5nJTIwc2Vhc29uJTIwYXRtb3NwaGVyZXxlbnwwfHwwfHx8MA%3D%3D";
  const HOT_URL = "https://media.istockphoto.com/id/1332108668/photo/heatwave-with-warm-thermometer-and-fire-global-warming-and-extreme-climate-environment.webp?a=1&b=1&s=612x612&w=0&k=20&c=TD95uCJmBIrWzvqYSoG5v1bb0gbaUXof4RN8xWop_qg=";
  const COLD_URL = "https://images.unsplash.com/photo-1519944159858-806d435dc86b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
  const RAIN_URL = "https://images.unsplash.com/photo-1605035015406-54c130d0bf89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaW55fGVufDB8fDB8fHww";

  // Determine image based on weather conditions
  const weatherImage =
    info.humidity > 80
      ? RAIN_URL
      : info.temp > 25
      ? HOT_URL
      : info.temp < 15
      ? COLD_URL
      : INIT_URL;

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card className="weather-card">
          {/* Weather Image */}
          <CardMedia
            component="img"
            className="weather-image"
            image={weatherImage}
            title="Weather Condition"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = INIT_URL;
            }}
          />
          <CardContent>
            {/* City Name */}
            <Typography variant="h5" className="city-name">
              📍 {info.city}
            </Typography>

            {/* Weather Details */}
            <Typography variant="body2" className="weather-details">
              <p>🌡 Temperature: <strong>{info.temp}°C</strong></p>
              <p>💧 Humidity: <strong>{info.humidity}%</strong></p>
              <p>🔽 Min Temp: <strong>{info.tempMin}°C</strong></p>
              <p>🔼 Max Temp: <strong>{info.tempMax}°C</strong></p>
              <p>🌥 The weather is described as <i>{info.weather}</i> and feels like <strong>{info.feelslike}°C</strong>.</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
