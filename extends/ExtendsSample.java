class Vehicle {
    protected int speed = 3;

    public double getSpeed() {
        double recommendedSpeed = speed * 0.8;
        return recommendedSpeed;
    }

    public void setSpeed(int speed) {
        if (speed < 0) {
            this.speed = 0;
            return;
        } else {
            this.speed = speed;
        }
    }
}

class Car extends Vehicle {
    public void printSpeed() {
        System.out.println(speed);
    }

}

public class ExtendsSample {
    public static void main(String[] args) {
        Car Tivoli = new Car();

        System.out.println(Tivoli.getSpeed());

        Tivoli.printSpeed();
    }
}
