package com.project.demo.services;

import com.project.demo.entites.User;
import com.project.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	public void createNewUser(User theUser) {
		userRepository.save(theUser);
	}

	public void updateUserEmailAddressService(Long id, User theUser) {
		User user = userRepository.findById(id).get();

		if (Objects.nonNull(theUser.getUserEmailId()) && !"".equalsIgnoreCase(theUser.getUserEmailId())) {
			user.setUserEmailId(theUser.getUserEmailId());

		}
		userRepository.save(user);
	}

	public void updateUserDataService(String displayName, User theUser) {
		User user = userRepository.findByDisplayName(displayName).get();
		if (Objects.nonNull(theUser.getDisplayName()) && !"".equalsIgnoreCase(theUser.getDisplayName())) {
			user.setUserName(theUser.getDisplayName());

		}

		if (Objects.nonNull(theUser.getUserEmailId()) && !"".equalsIgnoreCase(theUser.getUserEmailId())) {
			user.setUserEmailId(theUser.getUserEmailId());
		}

		if (Objects.nonNull(theUser.getUserPassword()) && !"".equalsIgnoreCase(theUser.getUserPassword())) {
			user.setUserPassword(theUser.getUserPassword());
		}

		userRepository.save(user);
	}

	public void deleteUserAccountService(String userEmailId) {

		userRepository.deleteByUserEmailId(userEmailId);

	}

	public Optional<User> fetchUserByUserHandle(String displayName) {
		return userRepository.findByDisplayName(displayName);
	}

	public User userLoginService(User theUser) {
		String displayName=theUser.getDisplayName();
		String password=theUser.getUserPassword();
		if (displayName !="" && password!=""){
			return userRepository.findByDisplayNameAndUserPassword(displayName,password);
		}
		return null;
	}

}
