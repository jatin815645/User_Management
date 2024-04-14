package com.basicProject.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.basicProject.exception.UserNotFound;
import com.basicProject.pojos.User;
import com.basicProject.repositories.UserRepository;

@RestController
@CrossOrigin("http://localhost:5173")
public class UserController {

	@Autowired
	private UserRepository userRepository;
	
	@PostMapping("/user")
	User newUser(@RequestBody User u) {
		return this.userRepository.save(u);
	}
	
	@GetMapping("/user")
	List<User> getUsers(){
		return userRepository.findAll();
	}
	
	@GetMapping("/user/{id}")
	User getUserById(@PathVariable Long id) {
		return userRepository.findById(id).orElseThrow(()-> new UserNotFound(id));
	}
	
	@PutMapping("/user/{id}")
	User updateUser(@RequestBody User u,@PathVariable Long id) {
		return userRepository.findById(id)
				.map(user -> {
					user.setName(u.getName());
					user.setUsername(u.getUsername());
					user.setEmail(u.getEmail());
					return userRepository.save(user);
				}).orElseThrow(()-> new UserNotFound(id));
		
	}
	
	@DeleteMapping("user/{id}")
	String deleteUser(@PathVariable Long id) {
		if(!userRepository.existsById(id)) {
			throw new UserNotFound(id);
		}
		userRepository.deleteById(id);
		return "User with id "+id+" deleted";
	}
}
