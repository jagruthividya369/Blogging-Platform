package com.project.demo.services;

import java.util.List;

import com.project.demo.entites.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.demo.entites.Blog;
import com.project.demo.repository.CommentRepository;

@Service
public class CommentServiceImpl implements CommentService {

	@Autowired
	private CommentRepository commentRepository;


	public void addCommentToBlogService(Comment theComment) {
		System.out.println(theComment);
		commentRepository.save(theComment);
	}
	public List<Comment> displayCommentsOfBlogService(long blogId){
		return commentRepository.findByBlogBlogId(blogId);
	}


}
