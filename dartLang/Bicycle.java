package dartLang;

oop : 외부로부터 변수값에 직접적으로 접근하는 것을 막고 있다.
직접 접근하면 무결성이 깨질 수 있기 때문에 

함수를 통해 값을 전달 받고, 전달하는 방식을 권장
class 내에서는 변수는 private(캡슐화, 정보은닉)로 선언해서 외부에서 바라볼 수 없도록 해야함.

SET 은 변수값을 할당하는 목적의 함수이기 때문에 인자를 받아야 하고
GET 은 변수값을 반환하는 목적이기 때문에 return 이 필요히다.

public class Bicycle {
    private int cadence;
    private int speed;
    private int gear;

    public Bicycle(int startCadence, int startSpeed, int startGear){
        gear = startGear;
        cadence = startCadence;
        speed = startSpeed;
    }

    public int getCadence(){
        return cadence;
    }
    public void setCadence(int newValue){
        cadence = newValue;
    }
    public int getGear(){
        return gear;
    }
    public void setGear(int newValue){
        gear = newValue;
    }
    public int getSpeed(){
        return speed;
    }
    public void applyBrake(int decrement){
        speed -= decrement;
    }
    public void speedup(int increment){
        speed += increment;
    }
}
