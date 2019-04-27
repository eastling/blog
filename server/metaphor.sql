-- 创建数据库 
-- DROP database IF EXISTS `metaphor`;
-- create database `metaphor` default character set utf8 collate utf8_general_ci; 

-- 切换到blog数据库
-- use metaphor; 

CREATE TABLE `metaphor` (
  `id` int (10) NOT NULL AUTO_INCREMENT,
  `content` text,
  `title` varchar (200) DEFAULT NULL,
  `author` varchar (200) DEFAULT NULL,
  `position` int (1) NOT NULL DEFAULT '0',
  `scope` int (1) NOT NULL DEFAULT '0',
  `type` varchar (200) DEFAULT 'construct',
  `properties` varchar (200) DEFAULT NULL,
  `subject` varchar (200) DEFAULT NULL,
  `metaphor` varchar (200) DEFAULT NULL,
  `character` varchar (200) DEFAULT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
