interface TestInterface {
    public static int num = 8;

    public void fun1();

    public void fun2();
}

class InterfaceExam implements TestInterface {
    @Override
    public void fun1() {
        System.out.println(num);
    }

    @Override
    public void fun2() {

    }
}

public class ImplementsSample {
    public static void main(String args[]) {
        InterfaceExam exam = new InterfaceExam();
        exam.fun1();
    }
}