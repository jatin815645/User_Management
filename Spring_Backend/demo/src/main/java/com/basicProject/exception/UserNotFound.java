package com.basicProject.exception;

public class UserNotFound extends RuntimeException
{
		public UserNotFound(Long id) {
			super("User not found with id : "+id);
		}
}
