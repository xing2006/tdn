import { MenuItemType } from './types';

export const WECHAT_ID = "WikT1888";

// Note: Ensure your local images are named correctly and placed in the project root.
export const MENU_ITEMS: MenuItemType[] = [
  {
    id: 1,
    name: "招牌土豆泥拌面",
    description: "软糯土豆泥裹满每一根面条，香浓绵密，碳水快乐炸弹！",
    price: 12,
    image: "./banmian.jpg", // User provided image 1: 拌面
    tag: "店主推荐",
    spicyLevel: 1
  },
  {
    id: 2,
    name: "秘制土豆泥拌粉",
    description: "爽滑米粉搭配绵密土豆泥，口感层次丰富，呲溜一口超满足。",
    price: 12,
    image: "./banfen.jpg", // User provided image 2: 拌粉
    spicyLevel: 1
  },
  {
    id: 3,
    name: "灵魂土豆泥拌饭",
    description: "如果不爱吃面，这碗吸满酱汁的拌饭绝对是你的不二之选。",
    price: 12,
    image: "./banfan.jpg", // User provided image 3: 拌饭
    spicyLevel: 1
  },
  {
    id: 4,
    name: "爽口凉面",
    description: "酸辣爽口，解暑神器。秘制麻酱汁是灵魂！",
    price: 8,
    image: "./liangmian.jpg", // User provided image 4: 凉面
    tag: "夏日限定",
    spicyLevel: 1
  },
  {
    id: 5,
    name: "韩式火鸡面",
    description: "挑战你的味蕾极限！甜辣开胃，加芝士口感更佳。",
    price: 12,
    image: "./huojimian.jpg", // User provided image 5: 火鸡面
    tag: "辣味挑战",
    spicyLevel: 3
  },
];