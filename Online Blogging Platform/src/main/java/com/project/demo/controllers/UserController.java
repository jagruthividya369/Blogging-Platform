package com.project.demo.controllers;

import com.project.demo.entites.User;
import com.project.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserService userService;

	// Create a User
	@PostMapping("/create")
	public void createNewUser(@RequestBody User theUser) {
		userService.createNewUser(theUser);
	}
	// User Login
	@PostMapping("/login")
	public User userLogin(@RequestBody User theUser)  {
		return userService.userLoginService(theUser);
	}
	// Update User emailId by User Id
	@PutMapping("/updateEmail/{id}")
	public void updateUserEmailAddressByUserId(@PathVariable("id") Long id, @RequestBody User theUser) {
		userService.updateUserEmailAddressService(id, theUser);
	}

	// Update
	@PutMapping("/updateAllUserData/{displayName}")
	public void updateAllUserDataByName(@PathVariable("displayName") String displayName, @RequestBody User theUser) {
		userService.updateUserDataService(displayName, theUser);
	}

	@DeleteMapping("/deleteAccount/{emailId}")
	public void deleteUserAccount(@PathVariable("emailId") String userEmailId) {
		userService.deleteUserAccountService(userEmailId);
	}

	@GetMapping("/getUserByUserHandle/{displayName}")
	public Optional<User> fetchUserByUserHandle(@PathVariable("displayName") String displayName) {
		return userService.fetchUserByUserHandle(displayName);
	}

	

}
