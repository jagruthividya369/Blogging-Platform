package com.project.demo.entites;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;
import org.hibernate.validator.constraints.Length;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "user_id")
    private Long id;

    @Length(min=5,message = "*Your username must have atleast 5 characters")
    @Column(name="user_Name",nullable = false,unique = true)
    @NotEmpty(message ="Please enter your username")
    private String userName;

    @Column(name="user_EmailId",unique = true,nullable = false)
    @NotEmpty(message = "Please enter your EmailId")
    private String userEmailId;

    @Column(name="user_Password", nullable = false)
    @NotEmpty(message="Please enter your password")
    @Length(min=8,message="Your password must have atleast 8 characters")
    private String userPassword;

    @Column(name="display_Name", nullable=false)
    private String displayName;

    private String userLinkedInId;

    private String userPhone;
    //All Args Constructor
    public User(Long id, String userName, String userEmailId, String userPassword,String userLinkedInId, String userPhone, String displayName) {
        this.id = id;
        this.userName = userName;
        this.userEmailId = userEmailId;
        this.userPassword = userPassword;
        this.userLinkedInId = userLinkedInId;
        this.userPhone = userPhone;
        this.displayName = displayName;
    }

    //Getters and Setters
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getUserName() {
        return userName;
    }
    public void setUserName(String userName) {
        this.userName = userName;
    }
    public String getUserEmailId() {
        return userEmailId;
    }
    public void setUserEmailId(String userEmailId) {
        this.userEmailId = userEmailId;
    }
    public String getUserPassword() {
        return userPassword;
    }
    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }
    public String getUserLinkedInId() {
        return userLinkedInId;
    }
    public void setUserLinkedInId(String userLinkedInId) {
        this.userLinkedInId = userLinkedInId;
    }
    public String getUserPhone() {
        return userPhone;
    }
    public void setUserPhone(String userPhone) {
        this.userPhone = userPhone;
    }
    public String getDisplayName() {
        return displayName;
    }
    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

}


