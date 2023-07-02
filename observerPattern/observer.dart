import 'subject.dart';

/// 구독데이터 - 인터페이스
interface class Observer {
  /// 주체로부터 새로운 데이터를 받음
  void update(
      final double temp, final double humidity, final double pressure) {}
}

/// 디스플레이 - 인터페이스
interface class DisplayElement {
  display() {}
}

/// 현재의 측정값 화면 - 구현체
class CurrentConditionsDisplay implements Observer, DisplayElement {
  late double _temp;
  late double _humidity;
  late WeatherData _weatherData;

  CurrentConditionsDisplay(final WeatherData weatherData) {
    this._weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  @override
  void update(final double temp, final double humidity, final double pressure) {
    this._temp = temp;
    this._humidity = humidity;

    print('최신값으로 동기화되었습니다.');
    display();
  }

  @override
  display() {
    print('현재 온도는 $_temp C, 습도는 $_humidity % 입니다.');
  }
}

/// 측정치의 최솟값, 평균, 최댓값 화면 - 구현체
class StatisicsDisplay implements Observer, DisplayElement {
  late double _temp;
  late double _humidity;
  late WeatherData _weatherData;

  StatisicsDisplay(final WeatherData weatherData) {
    this._weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  @override
  void update(final double temp, final double humidity, final double pressure) {
    print('최신값으로 동기화되었습니다.');
    display();
  }

  @override
  display() {
    print('측정치의 최솟값: , 평균: , 최댓값: 입니다.');
  }
}

/// 측정치를 바탕으로 한 기상예보 화면 - 구현체
class ForecastDisplay implements Observer, DisplayElement {
  late double _temp;
  late double _humidity;
  late WeatherData _weatherData;

  ForecastDisplay(final WeatherData weatherData) {
    this._weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  @override
  void update(final double temp, final double humidity, final double pressure) {
    print('최신값으로 동기화되었습니다.');
    display();
  }

  @override
  display() {
    print('기상예보는 ...입니다.');
  }
}
