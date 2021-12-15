package com.project.demo.repository;

import com.project.demo.entites.Blog;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface BlogRepository  extends CrudRepository<Blog,Long>{
    List<Blog> findByUserId(Long userId);
    List<Blog> findFirst5ByOrderByTimestampDesc();

    Optional<Blog> findByBlogName(String blogName);
//    @Query(select sum(likes))
//    Integer getTotalLikes();
    
    //    findByAgeOrderByLastnameDesc
    
	List<Blog> findAllBlogsByOrderByTimestampDesc();

//    @Query("select * from blog order by published_on desc limit 2;")
//    List<Blog> getTop5timeStamps();
}
