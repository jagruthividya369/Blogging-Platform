package com.project.demo.entites;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Comment {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="commentId")
	private Long id;
	
	private String comment;
	
    @Column(name = "published_on")
    @Temporal(TemporalType.TIMESTAMP)
    private Date timestamp;
    
    @ManyToOne
    private Blog blog;

    //No Args Constructor
	public Comment() {
		super();
		// TODO Auto-generated constructor stub
	}
    //All Args Constructor
	public Comment(Long id, String comment, Date timestamp) {
		super();
		this.id = id;
		this.comment = comment;
		this.timestamp = timestamp;
	}
   
	//Getters and Setters
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public Date getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(Date timestamp) {
		this.timestamp = timestamp;
	}
	
	public Comment(Long id, String comment, Date timestamp,Long blogId) {
		super();
		this.id = id;
		this.comment = comment;
		this.timestamp = timestamp;
		this.blog=new Blog(blogId, "", "", 0, 0, false, timestamp);
	}
    

}
