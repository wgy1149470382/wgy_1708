/*
Navicat MySQL Data Transfer

Source Server         : 天天果园
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : mysql

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-02-09 17:46:42
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_family
-- ----------------------------
DROP TABLE IF EXISTS `t_family`;
CREATE TABLE `t_family` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `price` decimal(10,2) NOT NULL DEFAULT '199.00',
  `qty` int(11) DEFAULT '1',
  `imgs` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `category` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `specification` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `add_data` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10016 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of t_family
-- ----------------------------
INSERT INTO `t_family` VALUES ('1000', '智利蓝莓', '69.90', '1', '../img/family1.jpg', '蓝莓', '4盒', '2018-02-09 11:26:28');
INSERT INTO `t_family` VALUES ('1002', '新奇士美国脐橙', '199.00', '1', '../img/family1.jpg', '橙子', '20个', '2018-02-09 11:26:34');
INSERT INTO `t_family` VALUES ('1003', '优选智利甜心樱桃', '231.00', '1', '../img/family3.jpg', '樱桃', '1kg', '2018-02-09 11:26:35');
INSERT INTO `t_family` VALUES ('1004', '泰国龙眼', '49.80', '1', '../img/family4.jpg', '龙眼', '2kg', '2018-02-09 11:26:39');
INSERT INTO `t_family` VALUES ('1005', '四川耙耙柑', '69.90', '1', '../img/family5.jpg', '橙子', '2kg', '2018-02-09 11:26:40');
INSERT INTO `t_family` VALUES ('1006', '砂糖桔', '45.00', '1', '../img/family6.jpg', '橙子', '2kg', '2018-02-09 11:26:42');
INSERT INTO `t_family` VALUES ('1007', '美国华盛顿甜脆红地厘蛇果', '199.00', '1', '../img/family7.jpg', '苹果', '20个', '2018-02-09 11:26:44');
INSERT INTO `t_family` VALUES ('1008', '新奇士美国柠檬', '45.80', '1', '../img/family8.jpg', '柠檬', '8个', '2018-02-09 11:26:45');
INSERT INTO `t_family` VALUES ('1009', '明治高温杀菌乳', '22.80', '1', '../img/family9.jpg', 'n牛奶', '950ml', '2018-02-09 11:26:47');
INSERT INTO `t_family` VALUES ('10010', '冻半壳扇贝', '199.00', '1', '../img/family10.jpg', '生鲜', '6只', '2018-02-09 11:26:50');
INSERT INTO `t_family` VALUES ('10011', '新疆羊前腿（喀尔万羔羊）', '199.00', '1', '../img/family11.jpg', '生鲜', '1.6kg', '2018-02-09 11:26:51');
INSERT INTO `t_family` VALUES ('10012', '新西兰长寿鱼(冻橙鲷鱼)', '138.00', '1', '../img/family12.jpg', '生鲜', '700-1000g', '2018-02-09 11:26:53');
INSERT INTO `t_family` VALUES ('10013', '东海野生大明虾', '146.00', '1', '../img/family13.jpg', '生鲜', '8只装', '2018-02-09 11:26:56');
INSERT INTO `t_family` VALUES ('10014', '乌拉圭草饲牛尾', '199.00', '1', '../img/family14.jpg', '生鲜', '350g', '2018-02-09 11:26:58');
INSERT INTO `t_family` VALUES ('10015', '草原和牛牛小排', '56.00', '1', '../img/family15.jpg', '生鲜', '250g', '2018-02-09 11:27:03');
SET FOREIGN_KEY_CHECKS=1;
