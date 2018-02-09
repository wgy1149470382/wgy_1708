/*
Navicat MySQL Data Transfer

Source Server         : 天天果园
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : mysql

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-02-09 17:46:15
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_present
-- ----------------------------
DROP TABLE IF EXISTS `t_present`;
CREATE TABLE `t_present` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `qty` int(11) NOT NULL DEFAULT '1',
  `imgs` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `specification` varchar(255) DEFAULT NULL,
  `add_data` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_present
-- ----------------------------
INSERT INTO `t_present` VALUES ('1', '女神樱桃（0.5克拉级）（礼盒版）', '268.00', '1', '../img/present1.jpg', '樱桃', '2kg', '2018-02-06 21:27:50');
INSERT INTO `t_present` VALUES ('2', '优选智利甜心樱桃礼盒装', '278.00', '1', '../img/present2.jpg', '奇异果', '22个', '2018-02-06 19:54:40');
INSERT INTO `t_present` VALUES ('3', '佳沛意大利金奇异果（巨无霸）（原箱）', '278.00', '1', '../img/present3.jpg', '橙', '44个', '2018-02-06 19:55:57');
INSERT INTO `t_present` VALUES ('4', '佳沛意大利绿奇异果（原箱）', '199.00', '1', '../img/present4.jpg', '橙', '36个', '2018-02-06 19:57:34');
INSERT INTO `t_present` VALUES ('5', '真心祝福水果礼篮', '358.00', '1', '../img/present5.jpg', '礼篮', '礼篮', '2018-02-06 19:59:22');
INSERT INTO `t_present` VALUES ('6', '佳沛意大利绿奇异果（原箱）', '123.00', '1', '../img/present3.jpg', '奇异果', '22个', '2018-02-06 20:00:47');
INSERT INTO `t_present` VALUES ('7', '优选智利甜心樱桃礼盒装', '312.00', '1', '../img/present2.jpg', '樱桃', '3kg', '2018-02-06 20:01:03');
INSERT INTO `t_present` VALUES ('8', '女神樱桃（0.5克拉级）', '9999.00', '1', '../img/present1.jpg', '女神樱桃', '1kg', '2018-02-06 20:01:51');
INSERT INTO `t_present` VALUES ('9', '新奇士美国红心橙（原箱）', '432.00', '1', '../img/present4.jpg', '橙', '27个', '2018-02-06 20:02:28');
INSERT INTO `t_present` VALUES ('10', '心意水果礼盒', '254.00', '1', '../img/present12.jpg', '礼盒', '礼盒', '2018-02-06 20:05:26');
INSERT INTO `t_present` VALUES ('11', '心愿生鲜礼盒', '666.00', '1', '../img/present13.jpg', '礼盒', '礼盒', '2018-02-06 20:05:13');
INSERT INTO `t_present` VALUES ('12', '优选美国红玫瑰苹果礼盒', '153.00', '1', '../img/present5.jpg', '礼盒', '礼盒', '2018-02-06 20:07:17');
INSERT INTO `t_present` VALUES ('13', '优选佳沛意大利金奇异果礼盒', '632.00', '1', '../img/present6.jpg', '礼盒', '礼盒', '2018-02-06 20:07:15');
INSERT INTO `t_present` VALUES ('14', '天天果园500元充值卡', '500.00', '1', '../img/present9.jpg', '充值卡', '1张', '2018-02-06 20:07:57');
INSERT INTO `t_present` VALUES ('15', '天天果园100元充值卡', '100.00', '1', '../img/present10.jpg', '充值卡', '1张', '2018-02-06 20:08:23');
INSERT INTO `t_present` VALUES ('16', 'abc', '999.00', '1', '../img/present11.jpg', '纸巾', '1片', '2018-02-08 23:23:48');
SET FOREIGN_KEY_CHECKS=1;
