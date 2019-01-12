-- 创建数据库 
DROP database IF EXISTS `blog`;
create database `blog` default character set utf8 collate utf8_general_ci; 

-- 切换到blog数据库
use blog; 

CREATE TABLE `article` (
  `id` int (10) NOT NULL AUTO_INCREMENT,
  `title` varchar (200) NOT NULL,
  `user_id` int (10) DEFAULT NULL,
  `category_id` int (10) DEFAULT NULL,
  `status` int (1) NOT NULL DEFAULT '1',
  `content` text,
  `summary` text DEFAULT NULL,
  `url_name` text,
  `img_url` text DEFAULT NULL,
  `is_open` int (1) NOT NULL DEFAULT '1',
  `is_comment` int (1) NOT NULL DEFAULT '0',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE `tag` (
  `id` int (10) NOT NULL AUTO_INCREMENT,
  `name` varchar (200) NOT NULL,
  `article_number` int (10) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE `article_tag` (
  `article_id` int (10) NOT NULL,
  `tag_name` VARCHAR (20) NOT NULL,
  PRIMARY KEY (`article_id`, `tag_name`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE `user` (
  `id` int (10) NOT NULL AUTO_INCREMENT,
  `name` varchar (100) NOT NULL,
  `email` varchar (100) DEFAULT NULL,
  `github` varchar (100) DEFAULT NULL,
  `zhihu` varchar (100) DEFAULT NULL,
  `password` varchar (50) NOT NULL,
  `last_login_time` int (10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE `category` (
  `id` int (10) NOT NULL AUTO_INCREMENT,
  `user_id` int (10) NOT NULL,
  `name` varchar (50) NOT NULL,
  `artilce_number` int (10) DEFAULT 0,
  `article_id` int (10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;