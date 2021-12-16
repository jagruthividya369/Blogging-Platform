package com.project.demo.services;

import com.project.demo.entites.Blog;

import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface BlogServiceInterface {
	
	
    void createBlogService( Blog theBlog);
    
    List<Blog> getBlogByUserIdService(Long userId);
    
    List<Blog> getDraftByUserIdService(Long userId);
    
    void updateBlogService(Blog theBlog);
    
    void deleteBlogService(Long blogId);
    
    List<Blog> getRecentBlogsService();
    
    List<Blog> getRecentDraftsService();
    
    Integer getLikesByBlogIdService(Long blogId);
    
    Integer getDislikesByBlogIdService(Long blogId);

    Optional<Blog> getBlogByBlogIdService(Long blogId);

    Optional<Blog> getBlogByBlogNameService(String blogName);
    
    List<Blog> getAllBlogsSortedByTimeStampService();

    List<Blog> getPostByUserIdService(Long userId);
}
