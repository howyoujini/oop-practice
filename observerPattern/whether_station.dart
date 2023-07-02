import 'observer.dart';
import 'subject.dart';

class WeatherStation {
  static void main() {
    final WeatherData weatherData = WeatherData();

    CurrentConditionsDisplay currentDisplay =
        CurrentConditionsDisplay(weatherData);
    StatisicsDisplay statisticsDisplay = StatisicsDisplay(weatherData);
    ForecastDisplay forecastDisplay = ForecastDisplay(weatherData);

    weatherData.setMeasurements(temp: 80.0, humidity: 65.0, pressure: 30.4);
    weatherData.setMeasurements(temp: 82.0, humidity: 70.0, pressure: 29.2);
    weatherData.setMeasurements(temp: 78.0, humidity: 90.0, pressure: 29.2);
  }
}

void main() => WeatherStation.main();
