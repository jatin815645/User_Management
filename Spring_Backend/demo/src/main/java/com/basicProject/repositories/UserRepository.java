package com.basicProject.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.basicProject.pojos.User;

public interface UserRepository extends JpaRepository<User, Long>
{

}
