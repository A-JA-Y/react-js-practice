import { Container, Card, Form, Button, Spinner } from "react-bootstrap";
// import Spinner from 'react-bootstrap/Spinner';
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  document.body.className = " bg-dark ";
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "b064cd6322b93c4ffd2f24ebea43fe50";
  const fetchWeatherData = async (city) => {
      try {
        
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Enter a valind city name!");
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
  

  useEffect(() => {
    fetchWeatherData();
  }, []);
  const handleCitySearch = (e) => {
    e.preventDefault();
    if (cityName.trim()) {
    fetchWeatherData(cityName);
  }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <h1 className="text-default mb-4">Weather App</h1>
        <Form
          onSubmit={handleCitySearch}
          className="mb-4 mx-auto"
          style={{ maxWidth: "22rem" }}
        >
          <div className="d-flex">
            <Form.Control
              type="text"
              placeholder="Enter city name"
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
              className="me-2"
            />
            <Button variant="primary" type="submit">
              Search
            </Button>
          </div>
        </Form>

        <Card className="shadow-lg bg-dark-subtle " style={{ width: "22rem" }}>
          <Card.Body>
            {loading === true && <Spinner animation="border" />}
            {error && <p className="text-danger fw-bold ">{error}</p>}
            {weatherData && (
              <>
                <Card.Title className="fs-1">{weatherData.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted text-capitalize fs-5">
                  {weatherData.weather[0].description}
                </Card.Subtitle>
                <Card.Text className="display-3 fw-bold my-4">
                  {Math.round(weatherData.main.temp)}°C
                </Card.Text>
              </>
            )}
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default App;
