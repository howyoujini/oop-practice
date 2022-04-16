
public class test {
    public int 가격 = 0;
    public String 이름 = "";

    test(int 가격, String 이름) {
        this.가격 = 가격;
        this.이름 = 이름;
    }

    public void setName(String 이름) {
        this.이름 = 이름;
    }

    public String getName() {
        return this.이름;
    }

    public void setPrice(int 가격) {
        this.가격 = 가격;
    }

    public int getPrice() {
        return this.가격;
    }
};