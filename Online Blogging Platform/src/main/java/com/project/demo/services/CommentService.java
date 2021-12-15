package com.project.demo.services;

import java.util.List;

import com.project.demo.entites.Blog;

public interface CommentService {

	//List<Blog> addCommentToBlog(Long blogId);

	List<Blog> addCommentToBlog(Long blogId, Blog thBlog);

}
