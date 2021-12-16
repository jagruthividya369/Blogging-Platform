package com.project.demo.services;

import java.util.List;

import com.project.demo.entites.Blog;
import com.project.demo.entites.Comment;

public interface CommentService {


	void addCommentToBlogService(Comment theComment);

    List<Comment> displayCommentsOfBlogService(long blogId);
}
