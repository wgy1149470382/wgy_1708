/*
Navicat MySQL Data Transfer

Source Server         : 天天果园
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : mysql

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-02-09 17:46:35
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_fresh
-- ----------------------------
DROP TABLE IF EXISTS `t_fresh`;
CREATE TABLE `t_fresh` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `price` decimal(11,0) NOT NULL DEFAULT '166',
  `qty` int(11) DEFAULT '1',
  `imgs` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `category` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `specification` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `add_data` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=114 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of t_fresh
-- ----------------------------
INSERT INTO `t_fresh` VALUES ('100', '新西兰银鳕鱼（冻南极犬牙鱼）', '129', '1', '../img/fresh1.jpg', '生鲜', '200g', '2018-02-09 11:25:12');
INSERT INTO `t_fresh` VALUES ('101', '果园土鸡蛋', '100', '1', '../img/fresh2.png', '生鲜', '6个', '2018-02-09 11:25:24');
INSERT INTO `t_fresh` VALUES ('102', '金华芋艿', '166', '1', '../img/fresh3.jpg', '生鲜', '300g', '2018-02-09 11:25:27');
INSERT INTO `t_fresh` VALUES ('103', '泰森鸡琵琶腿', '166', '1', '../img/fresh4.jpg', '生鲜', '220g', '2018-02-09 11:25:29');
INSERT INTO `t_fresh` VALUES ('104', '阿根廷雪花鲳鱼', '32', '1', '../img/fresh5.jpg', '生鲜', '300g', '2018-02-09 11:25:32');
INSERT INTO `t_fresh` VALUES ('105', '鲜曝大黄鱼（送调料包）', '17', '1', '../img/fresh6.jpg', '生鲜', '279g', '2018-02-09 11:25:35');
INSERT INTO `t_fresh` VALUES ('106', '内蒙古羔羊肉卷', '154', '1', '../img/fresh7.jpg', '生鲜', '250g', '2018-02-09 11:25:53');
INSERT INTO `t_fresh` VALUES ('107', '澳洲牛腩s级', '46', '1', '../img/fresh8.jpg', '生鲜', '500g', '2018-02-09 11:25:56');
INSERT INTO `t_fresh` VALUES ('108', '新西兰进口小南瓜', '16', '1', '../img/fresh9.jpg', '生鲜', '1.1kg', '2018-02-09 11:25:58');
INSERT INTO `t_fresh` VALUES ('109', '湾仔三鲜水饺', '29', '1', '../img/fresh10.jpg', '生鲜', '720g', '2018-02-09 11:26:01');
INSERT INTO `t_fresh` VALUES ('110', '越南黑虎虾仁（大）', '39', '1', '../img/fresh11.jpg', '生鲜', '200g', '2018-02-09 11:26:05');
INSERT INTO `t_fresh` VALUES ('111', '丹麦冻北极甜虾', '554', '1', '../img/fresh12.jpg', '生鲜', '250g', '2018-02-09 11:26:07');
INSERT INTO `t_fresh` VALUES ('112', '鲜活英国面包蟹', '166', '1', '../img/fresh13.jpg', '生鲜', '77g', '2018-02-09 11:26:09');
INSERT INTO `t_fresh` VALUES ('113', '崇明生态鸽', '34', '1', '../img/fresh14.jpg', '生鲜', '300g', '2018-02-09 11:26:11');
INSERT INTO `t_fresh` VALUES ('15', '丹麦谷饲猪脚', '564', '1', '../img/fresh15.jpg', '生鲜', '400g', '2018-02-07 09:52:27');
SET FOREIGN_KEY_CHECKS=1;
