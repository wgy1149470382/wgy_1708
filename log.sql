/*
Navicat MySQL Data Transfer

Source Server         : 天天果园
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : mysql

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-02-09 17:47:03
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for log
-- ----------------------------
DROP TABLE IF EXISTS `log`;
CREATE TABLE `log` (
  `id` int(255) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of log
-- ----------------------------
INSERT INTO `log` VALUES ('1', '15625778746', '123123');
INSERT INTO `log` VALUES ('2', '15625778745', '123123');
INSERT INTO `log` VALUES ('3', '15625778731', '123123');
INSERT INTO `log` VALUES ('4', '15625779656', '123123');
INSERT INTO `log` VALUES ('5', '15625778776', '4297f44b13955235245b2497399d7a93');
INSERT INTO `log` VALUES ('6', '15625778749', '4297f44b13955235245b2497399d7a93');
INSERT INTO `log` VALUES ('7', '', 'd41d8cd98f00b204e9800998ecf8427e');
INSERT INTO `log` VALUES ('8', '15625778798', '4297f44b13955235245b2497399d7a93');
SET FOREIGN_KEY_CHECKS=1;
