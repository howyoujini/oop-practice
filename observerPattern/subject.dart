import 'observer.dart';

/// 주체 - 인터페이스
interface class Subject {
  /// 옵저버를 등록
  void registerObserver(final Observer obs) {}

  /// 옵저버를 제거
  void removeObserver(final Observer obs) {}

  /// 옵저버들에게 알림
  void notifyObservers() {}
}

/// 날씨데이터 - 구현체
class WeatherData implements Subject {
  final List<Observer> _observers = [];
  late double _temp;
  late double _humidity;
  late double _pressure;

  /// 온도
  double get temperature => _temp;

  /// 습도
  double get humidity => _humidity;

  /// 기압
  double get pressure => _pressure;

  @override
  void registerObserver(final Observer obs) {
    _observers.add(obs);
  }

  @override
  removeObserver(Observer obs) {
    _observers.remove(obs);
  }

  @override
  notifyObservers() {
    _observers.forEach((obs) {
      obs.update(_temp, _humidity, _pressure);
    });
  }

  void measureChanged() {
    notifyObservers();
  }

  void setMeasurements(
      {required final double temp,
      required final double humidity,
      required final double pressure}) {
    this._temp = temp;
    this._humidity = humidity;
    this._pressure = pressure;

    measureChanged();
  }
}
