package com.project.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.demo.entites.Blog;
import com.project.demo.entites.Comment;

@Repository
public interface CommentRepository extends JpaRepository<Comment,Long> {

	List<Blog> findByBlogId(Long blogId);

}
