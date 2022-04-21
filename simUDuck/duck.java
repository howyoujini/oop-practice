package simUDuck;

// 슈퍼클래스
public class duck {
    quack(); // 꽥 소리를 낼 수 있음

    swim(); // 헤엄을 칠 수 있음

    display(); // 오리마다 생김새가 다름. -> 추상클래스

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
}