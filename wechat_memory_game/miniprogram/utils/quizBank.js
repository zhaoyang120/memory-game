/**
 * 本地题库模块 - 纯本地 500 题库版
 * 包含 3 个难度等级的故事与题目，0 API 依赖
 */

var quizBank = {

  // ========== 简单（~80字，3题/篇）==========
  easy: [
    {
      id: 'e1',
      storyText: '小明背着书包去公园，一位穿灰马甲的老人坐在长椅上喂鸽子，脚边趴着一只白色小狗，旁边停着一辆红色自行车。',
      questions: [
        { questionId: 'e1_q1', questionText: '老人穿什么颜色的马甲？', options: ['灰色', '蓝色', '黑色', '棕色'], correctAnswer: '灰色' },
        { questionId: 'e1_q2', questionText: '小狗是什么颜色的？', options: ['白色', '黑色', '黄色', '花色'], correctAnswer: '白色' },
        { questionId: 'e1_q3', questionText: '旁边停着什么？', options: ['红色自行车', '蓝色电动车', '黄色汽车', '绿色三轮车'], correctAnswer: '红色自行车' }
      ]
    },
    {
      id: 'e2',
      storyText: '厨房桌子上放着三个红苹果、两瓶牛奶和一盒巧克力饼干，窗台上有一盆开着黄花的绿色植物，窗外传来鸟叫声。',
      questions: [
        { questionId: 'e2_q1', questionText: '桌子上有几个苹果？', options: ['三个', '两个', '四个', '五个'], correctAnswer: '三个' },
        { questionId: 'e2_q2', questionText: '牛奶有几瓶？', options: ['两瓶', '三瓶', '一瓶', '四瓶'], correctAnswer: '两瓶' },
        { questionId: 'e2_q3', questionText: '植物开什么颜色的花？', options: ['黄色', '红色', '白色', '粉色'], correctAnswer: '黄色' }
      ]
    },
    {
      id: 'e3',
      storyText: '图书馆里，小红坐在靠窗的位置，面前放着一本蓝色封面的书和一支黑色钢笔，桌角还有一杯冒着热气的咖啡。',
      questions: [
        { questionId: 'e3_q1', questionText: '书是什么颜色的封面？', options: ['蓝色', '红色', '绿色', '黄色'], correctAnswer: '蓝色' },
        { questionId: 'e3_q2', questionText: '钢笔是什么颜色？', options: ['黑色', '蓝色', '红色', '白色'], correctAnswer: '黑色' },
        { questionId: 'e3_q3', questionText: '桌角放着什么饮品？', options: ['咖啡', '茶', '牛奶', '果汁'], correctAnswer: '咖啡' }
      ]
    },
    {
      id: 'e4',
      storyText: '公交车上，司机穿着蓝色制服，车厢里坐着五个乘客，最后一排座位上放着一把黄色雨伞和一个黑色双肩包。',
      questions: [
        { questionId: 'e4_q1', questionText: '司机穿什么颜色的制服？', options: ['蓝色', '黑色', '灰色', '白色'], correctAnswer: '蓝色' },
        { questionId: 'e4_q2', questionText: '车厢里有几个乘客？', options: ['五个', '三个', '六个', '四个'], correctAnswer: '五个' },
        { questionId: 'e4_q3', questionText: '雨伞是什么颜色的？', options: ['黄色', '红色', '蓝色', '绿色'], correctAnswer: '黄色' }
      ]
    },
    {
      id: 'e5',
      storyText: '水果店里，老板正在称三斤橘子和两个大西瓜，收银台旁的花瓶里插着一束粉色康乃馨，墙上挂着一面圆镜子。',
      questions: [
        { questionId: 'e5_q1', questionText: '橘子称了几斤？', options: ['三斤', '两斤', '四斤', '五斤'], correctAnswer: '三斤' },
        { questionId: 'e5_q2', questionText: '西瓜有几个？', options: ['两个', '一个', '三个', '四个'], correctAnswer: '两个' },
        { questionId: 'e5_q3', questionText: '花瓶里插着什么花？', options: ['康乃馨', '玫瑰', '百合', '菊花'], correctAnswer: '康乃馨' }
      ]
    },
    {
      id: 'e6',
      storyText: '操场上，六个孩子在踢足球，穿红背心的是守门员，跑道边坐着一位戴草帽的奶奶在织绿色围巾。',
      questions: [
        { questionId: 'e6_q1', questionText: '有几个孩子在踢足球？', options: ['六个', '五个', '七个', '八个'], correctAnswer: '六个' },
        { questionId: 'e6_q2', questionText: '守门员穿什么颜色的背心？', options: ['红色', '蓝色', '黄色', '绿色'], correctAnswer: '红色' },
        { questionId: 'e6_q3', questionText: '奶奶在织什么颜色的围巾？', options: ['绿色', '红色', '蓝色', '白色'], correctAnswer: '绿色' }
      ]
    },
    {
      id: 'e7',
      storyText: '教室第三排，小华桌上摆着数学课本、一个紫色文具盒和半块橡皮，黑板上写着今天的日期和五个生字。',
      questions: [
        { questionId: 'e7_q1', questionText: '小华坐在第几排？', options: ['第三排', '第二排', '第四排', '第一排'], correctAnswer: '第三排' },
        { questionId: 'e7_q2', questionText: '文具盒是什么颜色？', options: ['紫色', '蓝色', '粉色', '绿色'], correctAnswer: '紫色' },
        { questionId: 'e7_q3', questionText: '黑板上写了几个生字？', options: ['五个', '三个', '六个', '四个'], correctAnswer: '五个' }
      ]
    },
    {
      id: 'e8',
      storyText: '咖啡馆门口，一只橘猫趴在门槛上晒太阳，旁边立着一块小黑板写着"今日特价：抹茶拿铁18元"。',
      questions: [
        { questionId: 'e8_q1', questionText: '猫是什么颜色的？', options: ['橘色', '黑色', '白色', '灰色'], correctAnswer: '橘色' },
        { questionId: 'e8_q2', questionText: '小黑板上写的特价饮品是什么？', options: ['抹茶拿铁', '美式咖啡', '焦糖玛奇朵', '冰巧克力'], correctAnswer: '抹茶拿铁' },
        { questionId: 'e8_q3', questionText: '特价饮品多少钱？', options: ['18元', '15元', '20元', '22元'], correctAnswer: '18元' }
      ]
    },
    {
      id: 'e9',
      storyText: '小明的生日蛋糕上有六根彩色蜡烛，蛋糕旁边放着三个礼物盒子，分别用红纸、蓝纸和金纸包装。',
      questions: [
        { questionId: 'e9_q1', questionText: '蛋糕上有几根蜡烛？', options: ['六根', '五根', '七根', '八根'], correctAnswer: '六根' },
        { questionId: 'e9_q2', questionText: '有几个礼物盒子？', options: ['三个', '两个', '四个', '五个'], correctAnswer: '三个' },
        { questionId: 'e9_q3', questionText: '哪种颜色的包装纸没有被用到？', options: ['绿色', '金色', '红色', '蓝色'], correctAnswer: '绿色' }
      ]
    },
    {
      id: 'e10',
      storyText: '小区花坛里种着十棵红色的郁金香和五棵黄色的向日葵，中间有一个白色秋千，上面坐着一个小女孩。',
      questions: [
        { questionId: 'e10_q1', questionText: '郁金香有多少棵？', options: ['十棵', '八棵', '十二棵', '六棵'], correctAnswer: '十棵' },
        { questionId: 'e10_q2', questionText: '向日葵是什么颜色的？', options: ['黄色', '红色', '白色', '橙色'], correctAnswer: '黄色' },
        { questionId: 'e10_q3', questionText: '秋千是什么颜色的？', options: ['白色', '棕色', '蓝色', '绿色'], correctAnswer: '白色' }
      ]
    },
    {
      id: 'e11',
      storyText: '地铁车厢里，一名穿格子衬衫的男子戴着银色耳机听歌，他左手握着扶手，右手拿着一把黑色长柄伞。',
      questions: [
        { questionId: 'e11_q1', questionText: '男子穿的什么衬衫？', options: ['格子衬衫', '条纹衬衫', '纯色衬衫', '印花衬衫'], correctAnswer: '格子衬衫' },
        { questionId: 'e11_q2', questionText: '耳机是什么颜色的？', options: ['银色', '黑色', '白色', '金色'], correctAnswer: '银色' },
        { questionId: 'e11_q3', questionText: '他右手拿着什么？', options: ['黑色长柄伞', '蓝色折叠伞', '棕色手杖', '红色雨衣'], correctAnswer: '黑色长柄伞' }
      ]
    },
    {
      id: 'e12',
      storyText: '宠物店里，玻璃缸中有八条金鱼在游动，笼子里有三只白色兔子在吃胡萝卜，墙上挂着各种颜色的狗项圈。',
      questions: [
        { questionId: 'e12_q1', questionText: '缸里有几条金鱼？', options: ['八条', '六条', '十条', '五条'], correctAnswer: '八条' },
        { questionId: 'e12_q2', questionText: '兔子有几只？', options: ['三只', '两只', '四只', '五只'], correctAnswer: '三只' },
        { questionId: 'e12_q3', questionText: '兔子在吃什么？', options: ['胡萝卜', '青菜', '苹果', '饲料'], correctAnswer: '胡萝卜' }
      ]
    },
    {
      id: 'e13',
      storyText: '阳台上晾着一件粉色连衣裙和两条深蓝色牛仔裤，花盆里种着三株红色的辣椒，还有一盆薄荷散发着清香。',
      questions: [
        { questionId: 'e13_q1', questionText: '连衣裙是什么颜色的？', options: ['粉色', '白色', '黄色', '红色'], correctAnswer: '粉色' },
        { questionId: 'e13_q2', questionText: '牛仔裤有几条？', options: ['两条', '一条', '三条', '四条'], correctAnswer: '两条' },
        { questionId: 'e13_q3', questionText: '花盆里种着什么？', options: ['辣椒', '番茄', '黄瓜', '豆角'], correctAnswer: '辣椒' }
      ]
    },
    {
      id: 'e14',
      storyText: '医院候诊区，一位戴黑框眼镜的护士推着银色推车经过，候诊椅上坐着四位病人，电视里播放着健康科普节目。',
      questions: [
        { questionId: 'e14_q1', questionText: '护士戴什么样的眼镜？', options: ['黑框眼镜', '金框眼镜', '无框眼镜', '圆框眼镜'], correctAnswer: '黑框眼镜' },
        { questionId: 'e14_q2', questionText: '推车是什么颜色的？', options: ['银色', '白色', '蓝色', '灰色'], correctAnswer: '银色' },
        { questionId: 'e14_q3', questionText: '候诊椅上有几位病人？', options: ['四位', '三位', '五位', '两位'], correctAnswer: '四位' }
      ]
    },
    {
      id: 'e15',
      storyText: '餐厅角落里，一对情侣正在吃披萨，桌上摆着一瓶红酒和两杯橙汁，服务员端来了一盘凯撒沙拉和四只炸虾。',
      questions: [
        { questionId: 'e15_q1', questionText: '桌上摆着什么饮品？', options: ['红酒和橙汁', '啤酒和可乐', '白酒和雪碧', '香槟和柠檬水'], correctAnswer: '红酒和橙汁' },
        { questionId: 'e15_q2', questionText: '服务员端来了什么？', options: ['凯撒沙拉和炸虾', '意大利面和鸡翅', '薯条和汉堡', '炒饭和春卷'], correctAnswer: '凯撒沙拉和炸虾' },
        { questionId: 'e15_q3', questionText: '炸虾有几只？', options: ['四只', '三只', '五只', '六只'], correctAnswer: '四只' }
      ]
    }
  ],

  // ========== 中等（~130字，4题/篇）==========
  medium: [
    {
      id: 'm1',
      storyText: '上午十点，穿绿外套的张阿姨拿着蓝色雨伞走进书店，向戴眼镜的售货员买了一本红色封面的画册。售货员赠送了她3张猫咪贴纸。此时窗外停着一辆黄色的出租车，司机正在看手机。',
      questions: [
        { questionId: 'm1_q1', questionText: '张阿姨穿什么颜色的外套？', options: ['绿外套', '红外套', '蓝外套', '黑外套'], correctAnswer: '绿外套' },
        { questionId: 'm1_q2', questionText: '售货员赠送了几张贴纸？', options: ['3张', '2张', '4张', '5张'], correctAnswer: '3张' },
        { questionId: 'm1_q3', questionText: '画册封面是什么颜色的？', options: ['红色', '黄色', '绿色', '紫色'], correctAnswer: '红色' },
        { questionId: 'm1_q4', questionText: '窗外停着什么车？', options: ['黄色出租车', '黑色轿车', '白色面包车', '红色跑车'], correctAnswer: '黄色出租车' }
      ]
    },
    {
      id: 'm2',
      storyText: '市场里，光头摊主正在卖紫色的茄子和白色花菜。一位穿红裙的女士买了三斤茄子和两颗花菜，付了28元。摊主找给她两枚硬币后，又从筐里拿了一个橙子送给她，说"这是自家种的"。',
      questions: [
        { questionId: 'm2_q1', questionText: '茄子是什么颜色的？', options: ['紫色', '绿色', '红色', '黄色'], correctAnswer: '紫色' },
        { questionId: 'm2_q2', questionText: '女士穿什么颜色的裙子？', options: ['红色', '白色', '蓝色', '黑色'], correctAnswer: '红色' },
        { questionId: 'm2_q3', questionText: '女士付了多少钱？', options: ['28元', '18元', '38元', '22元'], correctAnswer: '28元' },
        { questionId: 'm2_q4', questionText: '摊主送了什么水果？', options: ['橙子', '苹果', '橘子', '梨'], correctAnswer: '橙子' }
      ]
    },
    {
      id: 'm3',
      storyText: '周末傍晚，六位朋友在露天烧烤店聚会。穿条纹衫的小李负责烤串，桌上已经摆了十二串羊肉、八串鸡翅和一盘烤蔬菜。突然下起小雨，服务员撑开了一把巨大的绿色遮阳伞，但伞其实是漏的。',
      questions: [
        { questionId: 'm3_q1', questionText: '聚会一共有几人？', options: ['六位', '五位', '七位', '八位'], correctAnswer: '六位' },
        { questionId: 'm3_q2', questionText: '小李穿什么衣服？', options: ['条纹衫', '纯色T恤', '格子衫', '卫衣'], correctAnswer: '条纹衫' },
        { questionId: 'm3_q3', questionText: '桌上有几串鸡翅？', options: ['八串', '六串', '十串', '十二串'], correctAnswer: '八串' },
        { questionId: 'm3_q4', questionText: '遮阳伞有什么问题？', options: ['是漏的', '颜色太深', '撑不开', '太矮了'], correctAnswer: '是漏的' }
      ]
    },
    {
      id: 'm4',
      storyText: '写字楼电梯里，一个穿灰色西装的男士提着一个印有猫咪图案的粉色纸袋。电梯在7楼停下，进来一位抱着三本厚书的女生，她按了12楼。男士好奇地问纸袋里的东西——原来是一只会发光的电子闹钟。',
      questions: [
        { questionId: 'm4_q1', questionText: '男士穿什么颜色的西装？', options: ['灰色', '黑色', '蓝色', '棕色'], correctAnswer: '灰色' },
        { questionId: 'm4_q2', questionText: '纸袋上印着什么图案？', options: ['猫咪', '花朵', '星星', '条纹'], correctAnswer: '猫咪' },
        { questionId: 'm4_q3', questionText: '女生在几楼进电梯？', options: ['7楼', '5楼', '9楼', '12楼'], correctAnswer: '7楼' },
        { questionId: 'm4_q4', questionText: '纸袋里装的是什么？', options: ['电子闹钟', '毛绒玩具', '巧克力', '保温杯'], correctAnswer: '电子闹钟' }
      ]
    },
    {
      id: 'm5',
      storyText: '健身房里，教练阿杰正带着三位学员做深蹲。墙上镜子里映出一个穿荧光绿运动服的女生在跑步机上以每小时9公里的速度慢跑，她的水瓶上贴着一张熊猫贴纸。角落里放着一个没人用的紫色瑜伽球。',
      questions: [
        { questionId: 'm5_q1', questionText: '教练带了几位学员？', options: ['三位', '两位', '四位', '五位'], correctAnswer: '三位' },
        { questionId: 'm5_q2', questionText: '跑步女生穿什么颜色的运动服？', options: ['荧光绿', '粉色', '黑色', '白色'], correctAnswer: '荧光绿' },
        { questionId: 'm5_q3', questionText: '水瓶上贴着什么的贴纸？', options: ['熊猫', '兔子', '猫咪', '小狗'], correctAnswer: '熊猫' },
        { questionId: 'm5_q4', questionText: '瑜伽球是什么颜色的？', options: ['紫色', '蓝色', '粉色', '灰色'], correctAnswer: '紫色' }
      ]
    },
    {
      id: 'm6',
      storyText: '火车站的候车大厅里，穿棕色皮夹克的大叔坐在B区第三排，他行李架上放着一个银色行李箱和两盒稻香村的点心。广播突然响起："开往南京的G738次列车开始检票，请到2号检票口。"大叔却坐着没动——他去的是杭州。',
      questions: [
        { questionId: 'm6_q1', questionText: '大叔穿什么外套？', options: ['棕色皮夹克', '黑色风衣', '灰色棉袄', '蓝色牛仔外套'], correctAnswer: '棕色皮夹克' },
        { questionId: 'm6_q2', questionText: '他坐在哪个区？', options: ['B区', 'A区', 'C区', 'D区'], correctAnswer: 'B区' },
        { questionId: 'm6_q3', questionText: '广播通知的是哪趟列车？', options: ['G738', 'G837', 'G378', 'G873'], correctAnswer: 'G738' },
        { questionId: 'm6_q4', questionText: '大叔真正的目的地是哪里？', options: ['杭州', '南京', '上海', '北京'], correctAnswer: '杭州' }
      ]
    },
    {
      id: 'm7',
      storyText: '花店里，扎马尾的老板娘正在用紫色包装纸包扎一束白玫瑰，共11朵。一位穿校服的男生走进来，花了35元买了一盆多肉植物和一小袋营养土。老板娘额外送了他一颗薄荷糖，男生道谢后骑着蓝色的共享单车离开。',
      questions: [
        { questionId: 'm7_q1', questionText: '包装纸是什么颜色的？', options: ['紫色', '粉色', '白色', '蓝色'], correctAnswer: '紫色' },
        { questionId: 'm7_q2', questionText: '白玫瑰有多少朵？', options: ['11朵', '9朵', '12朵', '10朵'], correctAnswer: '11朵' },
        { questionId: 'm7_q3', questionText: '男生花了多少钱？', options: ['35元', '25元', '45元', '30元'], correctAnswer: '35元' },
        { questionId: 'm7_q4', questionText: '男生骑什么颜色的单车离开？', options: ['蓝色', '黄色', '绿色', '白色'], correctAnswer: '蓝色' }
      ]
    },
    {
      id: 'm8',
      storyText: '诊所里，一位头发花白的爷爷带着一只橘色的猫来看病。兽医是个扎马尾的年轻姑娘，她用听诊器仔细检查后说猫只是吃多了，需要节食。爷爷松了一口气，从帆布袋里掏出一个红色的罐头说："这是它最爱吃的。"兽医哭笑不得。',
      questions: [
        { questionId: 'm8_q1', questionText: '猫是什么颜色的？', options: ['橘色', '白色', '黑色', '灰色'], correctAnswer: '橘色' },
        { questionId: 'm8_q2', questionText: '兽医的诊断是什么？', options: ['吃多了', '感冒了', '骨折了', '过敏了'], correctAnswer: '吃多了' },
        { questionId: 'm8_q3', questionText: '罐头是什么颜色的？', options: ['红色', '黄色', '蓝色', '绿色'], correctAnswer: '红色' },
        { questionId: 'm8_q4', questionText: '爷爷从哪里掏出罐头？', options: ['帆布袋', '塑料袋', '背包', '纸箱'], correctAnswer: '帆布袋' }
      ]
    },
    {
      id: 'm9',
      storyText: '周末上午，四个年轻人在公园草坪上野餐。铺着一张红白格子餐布，上面摆着三明治、葡萄、薯片和一瓶橙汁。穿蓝色卫衣的男生弹起了吉他，旁边穿黄裙子的女生一边拍手一边唱歌。远处有个小孩在放一只蜻蜓形状的绿色风筝。',
      questions: [
        { questionId: 'm9_q1', questionText: '野餐共有几人？', options: ['四个', '三个', '五个', '六个'], correctAnswer: '四个' },
        { questionId: 'm9_q2', questionText: '餐布是什么图案的？', options: ['红白格子', '蓝白条纹', '纯白色', '黄白格子'], correctAnswer: '红白格子' },
        { questionId: 'm9_q3', questionText: '弹吉他的男生穿什么颜色的卫衣？', options: ['蓝色', '黑色', '灰色', '红色'], correctAnswer: '蓝色' },
        { questionId: 'm9_q4', questionText: '风筝是什么形状的？', options: ['蜻蜓', '蝴蝶', '老鹰', '金鱼'], correctAnswer: '蜻蜓' }
      ]
    },
    {
      id: 'm10',
      storyText: '公司茶水间里，微波炉上贴着一张纸条写着"已坏勿用"。一个穿粉衬衫的男同事端着一个印有小熊图案的马克杯接了半杯咖啡，然后从冰箱拿出一盒草莓酸奶，却发现酸奶已经过期三天了。他皱眉把酸奶扔进了蓝色的垃圾桶。',
      questions: [
        { questionId: 'm10_q1', questionText: '纸条上写着什么？', options: ['已坏勿用', '请节约用电', '保持清洁', '轻拿轻放'], correctAnswer: '已坏勿用' },
        { questionId: 'm10_q2', questionText: '马克杯上印着什么图案？', options: ['小熊', '小猫', '小狗', '小兔'], correctAnswer: '小熊' },
        { questionId: 'm10_q3', questionText: '酸奶过期了几天？', options: ['三天', '一天', '两天', '五天'], correctAnswer: '三天' },
        { questionId: 'm10_q4', questionText: '垃圾桶是什么颜色的？', options: ['蓝色', '绿色', '灰色', '黄色'], correctAnswer: '蓝色' }
      ]
    },
    {
      id: 'm11',
      storyText: '文具店里，收银台前排着三个人。第一位女士买了五本笔记本和两盒黑色水笔，第二位大叔买了一个计算器和一卷胶带，第三位小朋友攥着10元钱想买一盒24色的蜡笔。柜台上放着一个招财猫摆件，正不停地向客人招手。',
      questions: [
        { questionId: 'm11_q1', questionText: '第一位女士买了几本笔记本？', options: ['五本', '三本', '四本', '六本'], correctAnswer: '五本' },
        { questionId: 'm11_q2', questionText: '大叔买了什么？', options: ['计算器和胶带', '笔记本和笔', '文件夹和剪刀', '尺子和橡皮'], correctAnswer: '计算器和胶带' },
        { questionId: 'm11_q3', questionText: '小朋友想买几色的蜡笔？', options: ['24色', '12色', '36色', '48色'], correctAnswer: '24色' },
        { questionId: 'm11_q4', questionText: '柜台上放着什么摆件？', options: ['招财猫', '水晶球', '小风车', '沙漏'], correctAnswer: '招财猫' }
      ]
    },
    {
      id: 'm12',
      storyText: '理发店里，一位染了紫色头发的女理发师正在给一位男顾客剪发。镜子旁边的架子上摆着五把不同颜色的剪刀和三个吹风机。男顾客的围布是黑色的，上面沾了一些碎发。墙上电视正播放一场篮球比赛，比分是78比65。',
      questions: [
        { questionId: 'm12_q1', questionText: '女理发师的头发是什么颜色？', options: ['紫色', '红色', '金色', '棕色'], correctAnswer: '紫色' },
        { questionId: 'm12_q2', questionText: '架子上有几把剪刀？', options: ['五把', '三把', '四把', '六把'], correctAnswer: '五把' },
        { questionId: 'm12_q3', questionText: '围布是什么颜色的？', options: ['黑色', '白色', '蓝色', '灰色'], correctAnswer: '黑色' },
        { questionId: 'm12_q4', questionText: '电视里篮球比赛的比分是多少？', options: ['78比65', '80比72', '65比58', '90比85'], correctAnswer: '78比65' }
      ]
    },
    {
      id: 'm13',
      storyText: '中午十二点半，一位外卖骑手骑着电动车停在写字楼下，他从保温箱里拿出三份快餐：一份鱼香肉丝饭、一份宫保鸡丁面和一份素菜沙拉。他打电话给顾客，对方说："放前台就行，我在9楼开完会下来拿。"骑手挂掉电话后在订单上画了一个笑脸。',
      questions: [
        { questionId: 'm13_q1', questionText: '骑手一共拿了几份快餐？', options: ['三份', '两份', '四份', '五份'], correctAnswer: '三份' },
        { questionId: 'm13_q2', questionText: '快餐中没有什么？', options: ['炸鸡汉堡', '鱼香肉丝饭', '宫保鸡丁面', '素菜沙拉'], correctAnswer: '炸鸡汉堡' },
        { questionId: 'm13_q3', questionText: '顾客在几楼开会？', options: ['9楼', '7楼', '11楼', '5楼'], correctAnswer: '9楼' },
        { questionId: 'm13_q4', questionText: '骑手在订单上画了什么？', options: ['笑脸', '星星', '勾号', '圆圈'], correctAnswer: '笑脸' }
      ]
    },
    {
      id: 'm14',
      storyText: '舞蹈教室里，八位穿黑色练功服的女生在练习芭蕾。钢琴伴奏是一位白发老先生，他弹的曲子是《致爱丽丝》。教室后面的长凳上放着大家的水杯——有粉色的、蓝色的、透明的，还有一个印着芭蕾舞者剪影的白色保温杯特别显眼。',
      questions: [
        { questionId: 'm14_q1', questionText: '练功的女生有几位？', options: ['八位', '六位', '十位', '七位'], correctAnswer: '八位' },
        { questionId: 'm14_q2', questionText: '练功服是什么颜色的？', options: ['黑色', '白色', '粉色', '蓝色'], correctAnswer: '黑色' },
        { questionId: 'm14_q3', questionText: '钢琴曲是什么？', options: ['致爱丽丝', '月光', '蓝色多瑙河', '卡农'], correctAnswer: '致爱丽丝' },
        { questionId: 'm14_q4', questionText: '特别的保温杯上印着什么？', options: ['芭蕾舞者剪影', '音符', '天鹅', '花朵'], correctAnswer: '芭蕾舞者剪影' }
      ]
    },
    {
      id: 'm15',
      storyText: '周末菜市场，一位系着橙色围裙的大姐在卖自家种的蔬菜。她面前摆着带泥的胡萝卜、紫色的甘蓝和绿色的西葫芦。一位老顾客走过来，买了五根胡萝卜和两个西葫芦，大姐多送了一把小葱。老顾客用现金付了12元，说零钱不用找了。',
      questions: [
        { questionId: 'm15_q1', questionText: '大姐的围裙是什么颜色？', options: ['橙色', '蓝色', '白色', '绿色'], correctAnswer: '橙色' },
        { questionId: 'm15_q2', questionText: '甘蓝是什么颜色的？', options: ['紫色', '绿色', '白色', '红色'], correctAnswer: '紫色' },
        { questionId: 'm15_q3', questionText: '大姐多送了什么？', options: ['小葱', '香菜', '辣椒', '生姜'], correctAnswer: '小葱' },
        { questionId: 'm15_q4', questionText: '老顾客付了多少钱？', options: ['12元', '10元', '15元', '8元'], correctAnswer: '12元' }
      ]
    }
  ],

  // ========== 困难（~170字，6题/篇）==========
  hard: [
    {
      id: 'h1',
      storyText: '下午三点半，一位戴墨镜的女士牵着一只卷毛白狗走进了一家宠物美容店。店里已经有两只猫在等待——一只是暹罗猫，另一只是橘色的短毛猫。美容师是个扎丸子头的姑娘，她正在给一只灰色的泰迪犬修剪毛发。墙上贴着价格表：小型犬洗澡80元、剪毛120元、全套护理200元。女士选择了全套护理，并预约了下周三下午两点的复诊。收银台上放着一个鱼缸，里面没有鱼，却养了一只绿色的巴西龟。',
      questions: [
        { questionId: 'h1_q1', questionText: '女士牵的狗是什么样子的？', options: ['卷毛白狗', '黑色泰迪', '黄色金毛', '斑点狗'], correctAnswer: '卷毛白狗' },
        { questionId: 'h1_q2', questionText: '暹罗猫有几只在等待？', options: ['一只', '两只', '三只', '没有'], correctAnswer: '一只' },
        { questionId: 'h1_q3', questionText: '美容师正在给什么狗修剪毛发？', options: ['灰色泰迪', '白色比熊', '棕色贵宾', '黑色雪纳瑞'], correctAnswer: '灰色泰迪' },
        { questionId: 'h1_q4', questionText: '女士选择了什么服务？', options: ['全套护理', '洗澡', '剪毛', '指甲修剪'], correctAnswer: '全套护理' },
        { questionId: 'h1_q5', questionText: '全套护理的价格是多少？', options: ['200元', '80元', '120元', '150元'], correctAnswer: '200元' },
        { questionId: 'h1_q6', questionText: '鱼缸里养了什么？', options: ['巴西龟', '金鱼', '螃蟹', '什么也没有'], correctAnswer: '巴西龟' }
      ]
    },
    {
      id: 'h2',
      storyText: '周一早晨八点，地铁2号线挤满了上班族。一个背着灰色双肩包的男生靠在车门边看一本黄色封面的《三体》，他左手举着书，右手端着一杯已经凉了的豆浆。旁边一位穿高跟鞋的女士踩到了他的脚却浑然不知。到站广播说"中山公园站到了"，男生慌忙下车，却把豆浆忘在了座位上——那是一杯还剩半杯的红枣豆浆。与此同时，一位戴红领巾的小学生捡起豆浆追了出去。',
      questions: [
        { questionId: 'h2_q1', questionText: '男生在看什么书？', options: ['《三体》', '《活着》', '《围城》', '《百年孤独》'], correctAnswer: '《三体》' },
        { questionId: 'h2_q2', questionText: '书是什么颜色的封面？', options: ['黄色', '蓝色', '红色', '白色'], correctAnswer: '黄色' },
        { questionId: 'h2_q3', questionText: '他右手端着什么？', options: ['豆浆', '咖啡', '牛奶', '茶'], correctAnswer: '豆浆' },
        { questionId: 'h2_q4', questionText: '豆浆是什么口味的？', options: ['红枣', '原味', '黑豆', '芝麻'], correctAnswer: '红枣' },
        { questionId: 'h2_q5', questionText: '豆浆还剩多少？', options: ['半杯', '满杯', '几乎空杯', '三分之一'], correctAnswer: '半杯' },
        { questionId: 'h2_q6', questionText: '谁捡起了豆浆？', options: ['戴红领巾的小学生', '穿高跟鞋的女士', '地铁乘务员', '另一位乘客'], correctAnswer: '戴红领巾的小学生' }
      ]
    },
    {
      id: 'h3',
      storyText: '周五晚上，六位同事在"川味居"聚餐。穿格子衫的老张点了水煮鱼和回锅肉，戴眼镜的小刘坚持要点蒜蓉西兰花——他说最近在减肥。服务员推荐了今日特价菜"酸菜鱼"，原价68元现价48元。最后大家点了七个菜，包括一道没有放辣椒的麻婆豆腐。买单时老张抢着付了现金，共385元。走出餐厅时，天空下起了小雨，只有小刘带了一把折叠伞——一把印着公司LOGO的蓝色自动伞。',
      questions: [
        { questionId: 'h3_q1', questionText: '穿格子衫的是谁？', options: ['老张', '小刘', '服务员', '老板'], correctAnswer: '老张' },
        { questionId: 'h3_q2', questionText: '小刘为什么点蒜蓉西兰花？', options: ['在减肥', '喜欢蔬菜', '对肉过敏', '省钱'], correctAnswer: '在减肥' },
        { questionId: 'h3_q3', questionText: '酸菜鱼的现价是多少？', options: ['48元', '68元', '58元', '38元'], correctAnswer: '48元' },
        { questionId: 'h3_q4', questionText: '麻婆豆腐有什么特别？', options: ['没有放辣椒', '多放了花椒', '用了鸡肉', '加了芝士'], correctAnswer: '没有放辣椒' },
        { questionId: 'h3_q5', questionText: '买单共花了多少钱？', options: ['385元', '350元', '420元', '298元'], correctAnswer: '385元' },
        { questionId: 'h3_q6', questionText: '小刘的伞上印着什么？', options: ['公司LOGO', '卡通图案', '纯色无图案', '格子花纹'], correctAnswer: '公司LOGO' }
      ]
    },
    {
      id: 'h4',
      storyText: '暑假第一天，爸爸开车带四口人去海边。车后备箱里塞了一个蓝色帐篷、三把沙滩椅和一个装食物的红色冷藏箱。开了两小时后，他们在一家名为"海边人家"的餐厅吃午饭，爸爸点了一盘清蒸石斑鱼、一盘辣炒花蛤和四碗海鲜面。妈妈注意到墙上挂着三幅油画，画的都是日落时分的灯塔。吃完饭结账时，服务员说石斑鱼是最后一条，所以打了七折。妹妹却在桌子下面发现了一只躲在角落睡觉的灰条纹流浪猫。',
      questions: [
        { questionId: 'h4_q1', questionText: '帐篷是什么颜色的？', options: ['蓝色', '红色', '绿色', '黄色'], correctAnswer: '蓝色' },
        { questionId: 'h4_q2', questionText: '冷藏箱是什么颜色的？', options: ['红色', '蓝色', '白色', '灰色'], correctAnswer: '红色' },
        { questionId: 'h4_q3', questionText: '餐厅叫什么名字？', options: ['海边人家', '海上餐厅', '海之味', '听海轩'], correctAnswer: '海边人家' },
        { questionId: 'h4_q4', questionText: '墙上挂了什么内容的油画？', options: ['日落灯塔', '海上帆船', '海边贝壳', '海浪礁石'], correctAnswer: '日落灯塔' },
        { questionId: 'h4_q5', questionText: '餐厅有几幅油画？', options: ['三幅', '两幅', '四幅', '五幅'], correctAnswer: '三幅' },
        { questionId: 'h4_q6', questionText: '妹妹在桌子下面发现了什么？', options: ['灰条纹流浪猫', '一只小狗', '一个钱包', '一双拖鞋'], correctAnswer: '灰条纹流浪猫' }
      ]
    },
    {
      id: 'h5',
      storyText: '写字楼19层的会议室里，五位同事正在开周一早会。白板上用红笔写了三个关键词："预算""截止日""KPI"。项目经理老周——一个光头的中年人——端着一杯黑咖啡站在白板前讲解。窗外可以看到两架吊车在施工。穿条纹连衣裙的实习生小王负责做会议记录，她用的笔记本电脑屏幕保护膜已经碎了一个角。会议进行到一半时，老周手机响了——铃声是一首粤语老歌《海阔天空》。他说了声"抱歉，误拨"然后挂断，但脸微微红了一下。',
      questions: [
        { questionId: 'h5_q1', questionText: '会议室在几楼？', options: ['19层', '9层', '15层', '22层'], correctAnswer: '19层' },
        { questionId: 'h5_q2', questionText: '白板上用红笔写了几个关键词？', options: ['三个', '两个', '四个', '五个'], correctAnswer: '三个' },
        { questionId: 'h5_q3', questionText: '老周喝的是什么？', options: ['黑咖啡', '绿茶', '白开水', '可乐'], correctAnswer: '黑咖啡' },
        { questionId: 'h5_q4', questionText: '窗外能看到什么在施工？', options: ['吊车', '挖掘机', '搅拌车', '塔吊'], correctAnswer: '吊车' },
        { questionId: 'h5_q5', questionText: '小王的电脑屏幕保护膜怎么了？', options: ['碎了一个角', '完全碎裂', '有一个气泡', '被撕掉了'], correctAnswer: '碎了一个角' },
        { questionId: 'h5_q6', questionText: '老周的手机铃声是哪首歌？', options: ['海阔天空', '光辉岁月', '喜欢你', '千千阙歌'], correctAnswer: '海阔天空' }
      ]
    },
    {
      id: 'h6',
      storyText: '小区门口的便利店里，一位穿人字拖的大叔正在冰柜前纠结买什么饮料。冰柜里最上面一排是各种口味的苏打水，中间是酸奶和果汁，最下面是啤酒。大叔最后拿了一瓶绿色的青苹果味苏打水。收银台后面，老板娘正一边看韩剧一边织一件米色毛衣。大叔付了5元钱后，又转身拿了一包原味瓜子和一袋麻辣花生。这时一个穿校服的小女孩跑进来，用两枚硬币买了一根草莓味的棒棒糖，蹦蹦跳跳地跑了出去。',
      questions: [
        { questionId: 'h6_q1', questionText: '大叔穿的什么鞋？', options: ['人字拖', '运动鞋', '皮鞋', '凉鞋'], correctAnswer: '人字拖' },
        { questionId: 'h6_q2', questionText: '冰柜最上面一排是什么？', options: ['苏打水', '酸奶', '啤酒', '果汁'], correctAnswer: '苏打水' },
        { questionId: 'h6_q3', questionText: '大叔拿的苏打水是什么颜色瓶子的？', options: ['绿色', '蓝色', '粉色', '透明'], correctAnswer: '绿色' },
        { questionId: 'h6_q4', questionText: '老板娘在织什么？', options: ['米色毛衣', '灰色围巾', '白色帽子', '彩色袜子'], correctAnswer: '米色毛衣' },
        { questionId: 'h6_q5', questionText: '大叔付了多少钱？', options: ['5元', '6元', '4元', '8元'], correctAnswer: '5元' },
        { questionId: 'h6_q6', questionText: '小女孩买了什么口味的棒棒糖？', options: ['草莓味', '苹果味', '橙子味', '葡萄味'], correctAnswer: '草莓味' }
      ]
    },
    {
      id: 'h7',
      storyText: '周六下午，一对情侣在电影院大厅选片。穿牛仔外套的男生想看动作片《追凶者》，评分8.2；戴贝雷帽的女生想看动画片《星之旅》，评分9.1。争执了两分钟后，女生指着爆米花柜台说："买大桶的我就让步。"于是他们买了大桶焦糖爆米花和两杯可乐——一杯加冰一杯不加冰。放映厅号是5号厅，座位是7排12座和13座。电影演到一个反转情节时，全场发出惊呼，女生手里的爆米花撒了一地——她发现凶手竟是女主角的母亲，而男生早在十分钟前就猜到了。',
      questions: [
        { questionId: 'h7_q1', questionText: '男生想看什么电影？', options: ['《追凶者》', '《星之旅》', '《星际迷航》', '《深海》'], correctAnswer: '《追凶者》' },
        { questionId: 'h7_q2', questionText: '《星之旅》评分是多少？', options: ['9.1', '8.2', '9.5', '7.8'], correctAnswer: '9.1' },
        { questionId: 'h7_q3', questionText: '爆米花是什么口味的？', options: ['焦糖', '奶油', '芝士', '巧克力'], correctAnswer: '焦糖' },
        { questionId: 'h7_q4', questionText: '他们在几号放映厅？', options: ['5号厅', '3号厅', '7号厅', '2号厅'], correctAnswer: '5号厅' },
        { questionId: 'h7_q5', questionText: '他们的座位是几排？', options: ['7排', '5排', '9排', '12排'], correctAnswer: '7排' },
        { questionId: 'h7_q6', questionText: '反转情节中凶手是谁？', options: ['女主角的母亲', '男主角', '女主角自己', '侦探'], correctAnswer: '女主角的母亲' }
      ]
    },
    {
      id: 'h8',
      storyText: '一栋老式居民楼的四楼，住着一位养了五只鸟的退休大爷。大爷每天早上六点半准时提着两个鸟笼下楼遛鸟——两个笼子一共三只画眉和两只金丝雀。楼下有个小花园，里面种着一棵石榴树和两棵桂花树。这天早上，大爷发现石榴树下多了一只灰色的流浪兔，正在啃一片掉落的石榴叶。邻居张婶牵着她那条瘸了一条后腿的棕色泰迪经过，泰迪冲着兔子狂叫了三声。大爷笑着说："别叫了，它又没招你。"说完从兜里掏出一块饼干喂给了狗。',
      questions: [
        { questionId: 'h8_q1', questionText: '大爷住在几楼？', options: ['四楼', '三楼', '五楼', '二楼'], correctAnswer: '四楼' },
        { questionId: 'h8_q2', questionText: '大爷一共养了几只鸟？', options: ['五只', '三只', '四只', '六只'], correctAnswer: '五只' },
        { questionId: 'h8_q3', questionText: '金丝雀有几只？', options: ['两只', '三只', '一只', '四只'], correctAnswer: '两只' },
        { questionId: 'h8_q4', questionText: '花园里有几棵桂花树？', options: ['两棵', '一棵', '三棵', '四棵'], correctAnswer: '两棵' },
        { questionId: 'h8_q5', questionText: '流浪兔是什么颜色的？', options: ['灰色', '白色', '棕色', '黑色'], correctAnswer: '灰色' },
        { questionId: 'h8_q6', questionText: '大爷喂给狗的是什么？', options: ['饼干', '面包', '火腿肠', '狗粮'], correctAnswer: '饼干' }
      ]
    },
    {
      id: 'h9',
      storyText: '下午四点半，快递站门口排了七个人。快递员小赵——一个皮肤黝黑的高个子——正用扫码枪飞快地出库。排在第三位的是一位推婴儿车的妈妈，她要取三个包裹：一个长方形的纸箱（婴儿湿巾）、一个小方盒（手机壳）和一个软袋（羽绒服）。小赵找了五分钟才从最底层货架翻出那个软袋。排在后面的一个老爷爷不耐烦了，从兜里掏出一把扇子扇风——扇面上印着某医药公司的广告。排第一的大学生取了六个包裹，用一个大号黑色垃圾袋装走了。快递站墙上的电子钟显示今天已处理了238件快递。',
      questions: [
        { questionId: 'h9_q1', questionText: '门口排了几个人？', options: ['七个人', '五个人', '六个人', '八个人'], correctAnswer: '七个人' },
        { questionId: 'h9_q2', questionText: '婴儿妈妈排在几位？', options: ['第三位', '第一位', '第二位', '第五位'], correctAnswer: '第三位' },
        { questionId: 'h9_q3', questionText: '软袋里装的是什么？', options: ['羽绒服', '婴儿湿巾', '手机壳', '书籍'], correctAnswer: '羽绒服' },
        { questionId: 'h9_q4', questionText: '软袋从哪个货架翻出来的？', options: ['最底层', '最顶层', '中间层', '第二层'], correctAnswer: '最底层' },
        { questionId: 'h9_q5', questionText: '老爷爷扇子上印着什么？', options: ['医药公司广告', '旅游景点', '书法作品', '动画人物'], correctAnswer: '医药公司广告' },
        { questionId: 'h9_q6', questionText: '电子钟显示今天已处理多少件快递？', options: ['238件', '198件', '300件', '156件'], correctAnswer: '238件' }
      ]
    },
    {
      id: 'h10',
      storyText: '机场T3航站楼的出发大厅，LED屏上翻滚着航班信息。一个穿白色羽绒服的外国女生正用翻译软件询问工作人员哪里可以换人民币。工作人员是个穿制服的小伙子，他用英语回答后指了指B区尽头的货币兑换窗口。窗口前排了四个人，汇率牌上写着1美元兑换7.2元人民币。女生换了200美元，拿到了1440元人民币。她道谢后拖着银色行李箱走向安检口，行李箱上贴满了各个国家的贴纸——巴黎铁塔、伦敦大本钟、东京铁塔和一只澳大利亚的袋鼠。安检员要求她把行李箱里的笔记本电脑和充电宝单独拿出来。',
      questions: [
        { questionId: 'h10_q1', questionText: '外国女生穿什么颜色的羽绒服？', options: ['白色', '黑色', '红色', '蓝色'], correctAnswer: '白色' },
        { questionId: 'h10_q2', questionText: '兑换窗口在哪个区？', options: ['B区', 'A区', 'C区', 'D区'], correctAnswer: 'B区' },
        { questionId: 'h10_q3', questionText: '汇率是多少？', options: ['1:7.2', '1:6.8', '1:7.0', '1:7.5'], correctAnswer: '1:7.2' },
        { questionId: 'h10_q4', questionText: '女生换了多少人民币？', options: ['1440元', '1360元', '1400元', '1500元'], correctAnswer: '1440元' },
        { questionId: 'h10_q5', questionText: '行李箱上贴纸不包括哪个？', options: ['纽约自由女神', '巴黎铁塔', '东京铁塔', '袋鼠'], correctAnswer: '纽约自由女神' },
        { questionId: 'h10_q6', questionText: '安检员要求单独拿出什么？', options: ['笔记本电脑和充电宝', '化妆品和液体', '食物和药品', '书籍和文件'], correctAnswer: '笔记本电脑和充电宝' }
      ]
    },
    {
      id: 'h11',
      storyText: '古镇老街的石板路上，一位扎染蓝布的民间艺人在捏面人。他摊位上已经摆好了十二个成品：孙悟空、猪八戒、哪吒、白娘子四个传统人物，还有八个生肖动物。一个戴遮阳帽的小女孩蹲在摊位前，目不转睛地盯着艺人手里的半成品——一只还没上色的兔子。她妈妈在旁边的小店买了一串冰糖葫芦，花了8元。艺人说他捏面人四十年了，手上的老茧比铜钱还厚。最后小女孩挑了一个哪吒，付了15元。走之前，艺人又从盒子里拿出一只面捏的小蝴蝶送给她，说："这个不收费。',
      questions: [
        { questionId: 'h11_q1', questionText: '艺人用什么材料捏面人？', options: ['扎染蓝布', '橡皮泥', '泥巴', '不清楚'], correctAnswer: '扎染蓝布' },
        { questionId: 'h11_q2', questionText: '摊位上成品共有几个？', options: ['十二个', '八个', '十个', '十五个'], correctAnswer: '十二个' },
        { questionId: 'h11_q3', questionText: '半成品兔子缺什么？', options: ['上色', '耳朵', '尾巴', '眼睛'], correctAnswer: '上色' },
        { questionId: 'h11_q4', questionText: '冰糖葫芦花了多少钱？', options: ['8元', '5元', '10元', '6元'], correctAnswer: '8元' },
        { questionId: 'h11_q5', questionText: '小女孩买了什么？', options: ['哪吒', '孙悟空', '白娘子', '兔子'], correctAnswer: '哪吒' },
        { questionId: 'h11_q6', questionText: '艺人额外送了什么？', options: ['小蝴蝶', '小蜻蜓', '小蜜蜂', '小花朵'], correctAnswer: '小蝴蝶' }
      ]
    },
    {
      id: 'h12',
      storyText: '社区医院二楼的牙科诊室里，一个胖胖的男牙医正在给一个哭闹的小男孩看牙。男孩的妈妈——一位穿紫色毛衣的女士——在旁边拿着一个恐龙玩具安慰他。牙医戴上了蓝色口罩和透明面罩，从托盘里拿起一把带小镜子的探针。护士数了一下托盘里的器械：探针、镊子、刮匙、充填器和三颗不同大小的车针。X光片夹在观片灯上，显示左下第六颗牙有一个明显的蛀洞。牙医说需要补牙，费用大约350元。妈妈打电话跟丈夫商量，丈夫在电话里说："补！别舍不得钱。"墙上的时钟已经走到下午五点二十分了。',
      questions: [
        { questionId: 'h12_q1', questionText: '牙科诊室在几楼？', options: ['二楼', '一楼', '三楼', '四楼'], correctAnswer: '二楼' },
        { questionId: 'h12_q2', questionText: '妈妈用什么安抚男孩？', options: ['恐龙玩具', '手机动画', '糖果', '绘本'], correctAnswer: '恐龙玩具' },
        { questionId: 'h12_q3', questionText: '牙医的口罩是什么颜色的？', options: ['蓝色', '白色', '绿色', '黑色'], correctAnswer: '蓝色' },
        { questionId: 'h12_q4', questionText: '蛀洞在哪颗牙？', options: ['左下第六颗', '右上第五颗', '左下第四颗', '右下第六颗'], correctAnswer: '左下第六颗' },
        { questionId: 'h12_q5', questionText: '补牙大约多少钱？', options: ['350元', '250元', '500元', '180元'], correctAnswer: '350元' },
        { questionId: 'h12_q6', questionText: '车针有几颗不同大小？', options: ['三颗', '两颗', '四颗', '五颗'], correctAnswer: '三颗' }
      ]
    },
    {
      id: 'h13',
      storyText: '婚纱店里，一个穿白纱的新娘站在三面镜前。她的闺蜜——一个戴珍珠项链的短发女生——正在帮她整理四米长的拖尾。店里还有另外两对情侣在看婚纱。墙上挂满了不同款式的婚纱照：抹胸款、一字肩、鱼尾款和中式龙凤褂。店员端来了四杯玫瑰花茶，杯子是透明的，可以看到花瓣在水中舒展。新娘试了第七套婚纱后终于露出了满意的笑容，她指着镜子说："就是它了。"这套婚纱租金是2800元，包含配套的头纱和手套。闺蜜偷偷用手机拍了张照片发到姐妹群里，配文"美哭了"。',
      questions: [
        { questionId: 'h13_q1', questionText: '闺蜜戴什么首饰？', options: ['珍珠项链', '钻石耳环', '金手镯', '银戒指'], correctAnswer: '珍珠项链' },
        { questionId: 'h13_q2', questionText: '拖尾有多长？', options: ['四米', '两米', '三米', '五米'], correctAnswer: '四米' },
        { questionId: 'h13_q3', questionText: '墙上的婚纱照不包括哪种款式？', options: ['蓬蓬裙款', '抹胸款', '一字肩', '鱼尾款'], correctAnswer: '蓬蓬裙款' },
        { questionId: 'h13_q4', questionText: '店员端来了几杯茶？', options: ['四杯', '三杯', '五杯', '两杯'], correctAnswer: '四杯' },
        { questionId: 'h13_q5', questionText: '婚纱租金是多少？', options: ['2800元', '1800元', '3800元', '2200元'], correctAnswer: '2800元' },
        { questionId: 'h13_q6', questionText: '新娘试到第几套才满意？', options: ['第七套', '第五套', '第三套', '第九套'], correctAnswer: '第七套' }
      ]
    },
    {
      id: 'h14',
      storyText: '科技馆的一楼大厅里，一群穿校服的中学生在参观机器人展览。现场有三个展台：第一个是能弹钢琴的机械臂，第二个是能下围棋的AI机器人，第三个是会跳舞的四足机器狗。一个戴黑框眼镜的讲解员在给大家演示机器狗——它能翻跟头、握手、还会用"爪子"按铃。突然机器狗停住了，屏幕上弹出一行红字："电池电量不足，请充电。"学生们哄笑起来。展厅角落里，有个女生——梳着两条麻花辫——蹲在地上用铅笔画机器狗的速写，她已经画了大概十二分钟，纸上除了机器狗还有两个齿轮的细节特写。',
      questions: [
        { questionId: 'h14_q1', questionText: '展览在几楼？', options: ['一楼', '二楼', '三楼', '负一楼'], correctAnswer: '一楼' },
        { questionId: 'h14_q2', questionText: '现场有几个展台？', options: ['三个', '两个', '四个', '五个'], correctAnswer: '三个' },
        { questionId: 'h14_q3', questionText: '第二个展台是什么？', options: ['下围棋的AI机器人', '弹钢琴的机械臂', '跳舞的机器狗', '3D打印机'], correctAnswer: '下围棋的AI机器人' },
        { questionId: 'h14_q4', questionText: '机器狗为什么停了？', options: ['电池没电了', '程序出错了', '被人碰倒了', '到达了设定时间'], correctAnswer: '电池没电了' },
        { questionId: 'h14_q5', questionText: '速写的女生什么发型？', options: ['两条麻花辫', '马尾辫', '短发', '披肩发'], correctAnswer: '两条麻花辫' },
        { questionId: 'h14_q6', questionText: '纸上除了机器狗还画了什么？', options: ['两个齿轮', '电路板', '螺丝钉', '遥控器'], correctAnswer: '两个齿轮' }
      ]
    },
    {
      id: 'h15',
      storyText: '晚上九点，一家24小时便利店里灯光明亮。一个穿橙色环卫服的阿姨正在货架前挑选面包。她在"全麦面包"和"肉松面包"之间犹豫了半分钟，最后两个都拿了。收银台值班的是个戴鸭舌帽的年轻男生，他看了一下手表——再过一个小时就可以换班了。阿姨走到冰柜前，拿了一盒特价牛奶——原价6元现价3.5元，生产日期是三天前的。结账时，阿姨还加了一包火腿肠和一小袋猫粮。男生好奇问："阿姨您养猫啊？"阿姨摇头笑道："不，是喂单位门口那三只流浪猫，一只黑的，两只花的，每天晚上都在食堂后门等我。"男生听罢，默默把猫粮扫了半价。',
      questions: [
        { questionId: 'h15_q1', questionText: '环卫服是什么颜色的？', options: ['橙色', '黄色', '绿色', '蓝色'], correctAnswer: '橙色' },
        { questionId: 'h15_q2', questionText: '她在面包间犹豫了多久？', options: ['半分钟', '一分钟', '两分钟', '没有犹豫'], correctAnswer: '半分钟' },
        { questionId: 'h15_q3', questionText: '特价牛奶现价多少？', options: ['3.5元', '6元', '4元', '2.5元'], correctAnswer: '3.5元' },
        { questionId: 'h15_q4', questionText: '牛奶生产日期是什么时候？', options: ['三天前', '当天', '一周前', '五天前'], correctAnswer: '三天前' },
        { questionId: 'h15_q5', questionText: '流浪猫有几只？', options: ['三只', '两只', '四只', '五只'], correctAnswer: '三只' },
        { questionId: 'h15_q6', questionText: '男生对猫粮做了什么？', options: ['扫了半价', '多收了两元', '送了一包', '换了品牌'], correctAnswer: '扫了半价' }
      ]
    }
  ]
};

/**
 * 根据关卡获取随机题目
 * @param {number} stage - 当前关卡数
 * @returns {object} - { stageId, storyText, questions }
 *
 * 规则：
 *   第1关 → easy，3题
 *   第2关 → medium，4题
 *   第3关及以后 → hard，6题
 */
function getRandomQuiz(stage) {
  var difficulty, questionCount;

  if (stage === 1) {
    difficulty = 'easy';
    questionCount = 3;
  } else if (stage === 2) {
    difficulty = 'medium';
    questionCount = 4;
  } else {
    difficulty = 'hard';
    questionCount = 6;
  }

  var pool = quizBank[difficulty];
  var randomIndex = Math.floor(Math.random() * pool.length);
  var quiz = pool[randomIndex];

  return {
    stageId: stage,
    storyText: quiz.storyText,
    questions: quiz.questions.slice(0, questionCount)
  };
}

module.exports = {
  quizBank: quizBank,
  getRandomQuiz: getRandomQuiz
};
