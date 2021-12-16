package com.project.demo.services;

import com.project.demo.entites.Blog;
import com.project.demo.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class BlogServiceImplementation implements BlogServiceInterface{
    @Autowired
    private BlogRepository blogRepository;

    public void createBlogService( Blog theBlog) {
        blogRepository.save(theBlog);
    }

    public List<Blog> getBlogByUserIdService(Long userId) {
        return blogRepository.findByUserId(userId).stream().filter(theBlog->theBlog.isPublishedStatus()).sorted(Comparator.comparing(Blog::getTimestamp).reversed()).collect(Collectors.toList());
    }
    public List<Blog> getDraftByUserIdService(Long userId) {
        return blogRepository.findByUserId(userId).stream().filter(theBlog->!(theBlog.isPublishedStatus())).sorted(Comparator.comparing(Blog::getTimestamp).reversed()).collect(Collectors.toList());
    }

    public void updateBlogService(Blog theBlog) {
        blogRepository.save(theBlog);
    }

    public void deleteBlogService(Long blogId) {
        blogRepository.deleteById(blogId);
    }

    public List<Blog> getRecentBlogsService() {
        return StreamSupport
                .stream(blogRepository.findAll().spliterator(), false)
                .filter(theBlog->theBlog.isPublishedStatus())
                .sorted(Comparator.comparing(Blog::getTimestamp).reversed())
                .limit(5)
                .collect(Collectors.toList());
    }


    public List<Blog> getRecentDraftsService() {
        return StreamSupport
                .stream(blogRepository.findAll().spliterator(), false)
                .filter(theBlog->!(theBlog.isPublishedStatus()))
                .sorted(Comparator.comparing(Blog::getTimestamp).reversed())
                .limit(5)
                .collect(Collectors.toList());
    }

    public Integer getLikesByBlogIdService(Long blogId) {
        return blogRepository.findById(blogId).get().getBlogLikes();
    }


    public Integer getDislikesByBlogIdService(Long blogId) {
        return blogRepository.findById(blogId).get().getBlogDisLikes();
    }


    public Optional<Blog> getBlogByBlogIdService(Long blogId) {
        return blogRepository.findById(blogId);
    }


    public Optional<Blog> getBlogByBlogNameService(String blogName) {
        return blogRepository.findByBlogName(blogName);
    }

	public List<Blog> getAllBlogsSortedByTimeStampService() {
		return StreamSupport
                .stream(blogRepository.findAll().spliterator(), false)
                .filter(theBlog->theBlog.isPublishedStatus())
                .sorted(Comparator.comparing(Blog::getTimestamp).reversed())
                .collect(Collectors.toList());
	}



    public List<Blog> getPostByUserIdService(Long userId) {
        return blogRepository.findByUserId(userId);
    }

}
