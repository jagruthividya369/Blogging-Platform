package com.project.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.demo.entites.Blog;
import com.project.demo.services.CommentService;



@RestController
@RequestMapping("/comment")
public class CommentController {

	@Autowired
	private CommentService commentService;


	@PostMapping("addCmt/{id}")
	public List<Blog> addCommentToBlog(@PathVariable("id") Long blogId, @RequestBody Blog theBlog) {
		
		theBlog.set
		
		return commentService.addCommentToBlog(blogId);
	}
	
////	
////	@GetMapping
////	public List<Blog> displayAllCommentOfParticularBlog(@RequestBody Comment theComment){
////		return commentService.displayCommentsOfBlog()
////		
////	}
////	
//	

}
