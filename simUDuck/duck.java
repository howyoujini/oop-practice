package simUDuck;

// 슈퍼클래스
public class duck {
    quack(); // 꽥 소리를 낼 수 있음

    swim(); // 헤엄을 칠 수 있음

    display(); // 오리마다 생김새가 다름. -> 추상클래스

    fly();
    // 기타 오리 관련 메소드
}

class MallardDuck extends duck {
    display();
}

class RedheadDuck extends duck {
    display();
}

class RubberDuck extends duck {
    display();

    @Override
    quack();

    @Override
    fly();
}

// 모든 오리가 날 수 있다고 정의하고 설계를 했다. 하지만 "장난감 오리" 같은 경우엔 오리를 상속받지만 날 수는 없다. 이런 경우 어떻게
// 설게할 것인가?

// 소프트웨어를 고칠 때 기존 코드에 미치는 영향을 최소한으로 줄이면서 작업할 수 있다면 !
// 아무리 디자인을 잘 한 어플리케이션이라도 시간이 지남에 따라 [변화하고 성장해야함].

// 디자인 원칙 !!
// 어플리케이션에서 달라지는 부분을 찾아내고 달라지지 않는 부분과 분리한다. -> 코드 캡슐화 [시스템의 유연성 향상]

// 바뀌는 부분은 따로 뽑아서 '캡슐화'한다. 나중에 바뀌지 않는 부분에는 영향을 미치지 않고
