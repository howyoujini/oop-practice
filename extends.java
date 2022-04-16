class Vehicle {
    protected int speed = 3;

    public int getSpeed() {
        return speed;
    }

    public void setSpeed(int speed) {
        this.speed = speed;
    }
}

class Car extends Vehicle {
    public void printSpeed() {
        System.out.println(speed);
    }

}

class ExtendsSample {
    public static void main(String[] args) {
        Car A = new Car();

        System.out.println(A.getSpeed());

        A.printSpeed();
    }
}
