package com.project.demo.repository;

import com.project.demo.entites.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	


	@Transactional
	public void deleteByUserEmailId(String userEmailId);

	Optional<User> findByDisplayName(String displayName);
	
	User findByDisplayNameAndUserPassword(String displayName, String userPassword);


}
