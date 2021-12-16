package com.project.demo.entites;

import org.hibernate.validator.constraints.Length;
import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.Date;

@Entity
public class Blog {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "bId")
    private Long blogId;

    @Length(min=10, message = "enter the blog name/title")
    @Column(name = "blogName", nullable = false, unique = true)
    private String blogName;

    @Length(min=10)
    @Column(name="blogContent", nullable = false)
    @NotEmpty(message ="Please enter the contents")
    @Lob
    private String blogContent;

    @Column(name = "likes", columnDefinition = "integer default 0")
    private Integer blogLikes;

    @Column(name = "dislikes", columnDefinition = "integer default 0")
    private Integer blogDisLikes;

    @ManyToOne
    private User user;

    @Column(name="published_status",nullable=false, columnDefinition = "boolean default true")
    private boolean publishedStatus;   //true-published; false-draft

    @Column(name = "published_on")
    @Temporal(TemporalType.TIMESTAMP)
    private Date timestamp;

    public Blog(String blogName, String blogContent, Integer blogLikes, Integer blogDisLikes, Long id, boolean publishedStatus, Date timestamp) {
        this.blogName = blogName;
        this.blogContent = blogContent;
        this.blogLikes = blogLikes;
        this.blogDisLikes = blogDisLikes;
        this.user =new User(id,"","","","","","");
        this.publishedStatus=publishedStatus;
        this.timestamp= timestamp;
    }
	public Blog(Long blogId, String blogName, String blogContent, Integer blogLikes, Integer blogDisLikes, Long id, boolean publishedStatus, Date timestamp) {
		this.blogId = blogId;
		this.blogName = blogName;
		this.blogContent = blogContent;
		this.blogLikes = blogLikes;
		this.blogDisLikes = blogDisLikes;
		this.user =new User(id,"","","","","","");
		this.publishedStatus=publishedStatus;
		this.timestamp= timestamp;
	}

	public Long getBlogId() {
		return blogId;
	}

	public void setBlogId(Long blogId) {
		this.blogId = blogId;
	}

	public String getBlogName() {
		return blogName;
	}

	public void setBlogName(String blogName) {
		this.blogName = blogName;
	}

	public String getBlogContent() {
		return blogContent;
	}

	public void setBlogContent(String blogContent) {
		this.blogContent = blogContent;
	}

	public Integer getBlogLikes() {
		return blogLikes;
	}

	public void setBlogLikes(Integer blogLikes) {
		this.blogLikes = blogLikes;
	}

	public Integer getBlogDisLikes() {
		return blogDisLikes;
	}

	public void setBlogDisLikes(Integer blogDisLikes) {
		this.blogDisLikes = blogDisLikes;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public boolean isPublishedStatus() {
		return publishedStatus;
	}

	public void setPublishedStatus(boolean publishedStatus) {
		this.publishedStatus = publishedStatus;
	}

	public Date getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(Date timestamp) {
		this.timestamp = timestamp;
	}
    //All args constructor
	public Blog(Long blogId, String blogName,String blogContent, Integer blogLikes,Integer blogDisLikes, boolean publishedStatus, Date timestamp) {
		super();
		this.blogId = blogId;
		this.blogName = blogName;
		this.blogContent = blogContent;
		this.blogLikes = blogLikes;
		this.blogDisLikes = blogDisLikes;
		this.publishedStatus = publishedStatus;
		this.timestamp = timestamp;
	}
    //No Args Constructor
	public Blog() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

	
}
