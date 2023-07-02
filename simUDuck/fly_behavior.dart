abstract class FlyBehavior {
  void fly();
}

class FlyWithWings implements FlyBehavior {
  @override
  void fly() {
    print("I'm flying!!");
  }
}
