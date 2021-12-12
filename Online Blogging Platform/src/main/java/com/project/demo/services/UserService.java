package com.project.demo.services;

import com.project.demo.entites.User;

import java.util.Optional;

public interface UserService {

	public void createNewUser(User theUser);

	public void updateUserEmailAddressService(Long id, User theUser);

	public void updateUserDataService(String displayName, User theUser);

	public void deleteUserAccountService(String userEmailId);

	public Optional<User> fetchUserByUserHandle(String displayName);

	boolean userLoginService(User theUser);
}
