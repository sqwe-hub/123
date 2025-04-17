/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 0,
    count: 1,
    title: "",
    text: "特别奖"
  },
  {
    type: 1,
    count: 1,
    text: "特等奖",
    title: "神秘大礼",
    img: "../img/233710f15b00f46146ef4696df08b19.jpg",
    fixedUsers:[
    ["000001","12","第一"]
    ]
  },
  {
    type: 2,
    count: 3,
    text: "一等奖",
    title: "oppo",
    img: "../img/图片1.png"
  },
  {
    type: 3,
    count: 5,
    text: "二等奖",
    title: "华为",
    img: "../img/微信图片_20250116120206.jpg"
  },
  {
    type: 4,
    count: 7,
    text: "三等奖",
    title: "小米",
    img: "../img/主背景图.jpg"
  }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1,1, 3,5,7];

/**
 * 卡片公司名称标识
 */
const COMPANY = "四分院";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
