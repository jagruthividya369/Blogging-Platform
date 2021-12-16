package com.project.demo.controllers;
import java.sql.Timestamp;
import java.util.List;

import com.project.demo.entites.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.project.demo.entites.Blog;
import com.project.demo.services.CommentService;

@RestController
@RequestMapping("/comment")
public class CommentController {

	@Autowired
	private CommentService commentService;

	@PostMapping("addComment/{id}")
	public void addCommentToBlog(@PathVariable("id") Long blogId, @RequestBody Comment theComment) {
		theComment.setBlog(new Blog(blogId, "", "", 0, 0, 0l, true, new Timestamp(System.currentTimeMillis())));
		theComment.setTimestamp(new Timestamp(System.currentTimeMillis()));
		System.out.println(theComment);
		commentService.addCommentToBlogService(theComment);

	}
	@GetMapping("getAllComments/{blogId}")
	public List<Comment> displayAllCommentOfParticularBlog(@PathVariable long blogId){
		return commentService.displayCommentsOfBlogService(blogId);

	}
}