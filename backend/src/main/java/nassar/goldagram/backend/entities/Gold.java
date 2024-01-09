package nassar.goldagram.backend.entities;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "gold_items")
public class Gold {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private double weight;
    private int karat;
    private double totalPrice;
    private Date buyDate;
    private String company;
    private String photoURL;

    public Gold() {
    }

    public Gold(Long id, double weight, int karat, double totalPrice, Date buyDate, String company, String photoURL) {
        this.id = id;
        this.weight = weight;
        this.karat = karat;
        this.totalPrice = totalPrice;
        this.buyDate = buyDate;
        this.company = company;
        this.photoURL = photoURL;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public int getKarat() {
        return karat;
    }

    public void setKarat(int karat) {
        this.karat = karat;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public Date getBuyDate() {
        return buyDate;
    }

    public void setBuyDate(Date buyDate) {
        this.buyDate = buyDate;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getPhotoURL() {
        return photoURL;
    }

    public void setPhotoURL(String photoURL) {
        this.photoURL = photoURL;
    }
}