class Vehicle {
    protected int speed = 3;

    public double getSpeed() { // Getter 메소드
        double recommendedSpeed = speed * 0.8;
        return recommendedSpeed;
    }

    public void setSpeed(int speed) { // Setter 메소드
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

class ExtendsSample {
    public static void main(String[] args) {
        Car Tivoli = new Car();

        System.out.println(Tivoli.getSpeed());

        Tivoli.printSpeed();
    }
}
