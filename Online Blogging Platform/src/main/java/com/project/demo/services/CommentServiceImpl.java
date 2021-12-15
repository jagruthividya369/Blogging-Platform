package com.project.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.demo.entites.Blog;
import com.project.demo.repository.CommentRepository;

@Service
public class CommentServiceImpl implements CommentService {
	
	@Autowired
	private CommentRepository repo;

//	@Override
//	public List<Blog> addCommentToBlog(Long blogId) {		
//		return repo.findByBlogId(blogId);
//	}

	@Override
	public List<Blog> addCommentToBlog(Long blogId, Blog thBlog) {
		return repo.findByBlogId(blogId);
	}
	

}
