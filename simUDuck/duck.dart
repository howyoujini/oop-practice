/// 전략패턴
/// 1. 상속을 통한 구현
/// 2. 인터페이스를 통한 구현
/// 3. 믹스인을 통한 구현
/// 4. 함수를 통한 구현
/// 5. 클래스를 통한 구현

void main() {
  final duck = Duck();
  duck.display();
}

abstract class Duck {
  quack() {
    throw UnimplementedError();
  }

  swim() {
    throw UnimplementedError();
  }

  void display() {
    print("I'm a duck");
  }
}
