<!--  -->
<template>
  <div>
    <div class="topbar bg-black py-2 text-white px-4 d-flex ai-center">
      <img src="../assets/images/logo.png" alt="王者荣耀" height="30" />
      <div class="pl-3 flex-1">
        <div class="text-white">王者荣耀</div>
        <div class="text-grey-1 fs-xxs">团队成就更多</div>
      </div>
      <button type="button" class="btn bg-primary">立即下载</button>
    </div>
    <div class="bg-primary pt-3 pb-2">
      <div class="nav nav-inverse pb-1 jc-around">
        <div class="nav-item active">
          <router-link class="nav-link" tag="div" to="/">首页</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" tag="div" to="/">攻略中心</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" tag="div" to="/">赛事中心</router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// eslint-disable-line no-unused-vars
export default {
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    let data = 
    [{
      name:"中国",
      children:
   
    [   
       
            {
            "name": "北京",
            "children": [{
                "name": "东城区",
                "children": [{
                    "name": "王府井"
                }, {
                    "name": "灯口"
                }, {
                    "name": "沙子口"
                }, {
                    "name": "崇文门"
                }, {
                    "name": "东直门"
                }, {
                    "name": "交道口"
                }, {
                    "name": "东四"
                }, {
                    "name": "沙滩"
                }, {
                    "name": "北京站"
                }, {
                    "name": "海运仓"
                }, {
                    "name": "东单"
                }, {
                    "name": "天安门"
                }, {
                    "name": "东城其他"
                }, {
                    "name": "朝阳门"
                }, {
                    "name": "景山"
                }, {
                    "name": "雍和宫"
                }, {
                    "name": "北新桥"
                }, {
                    "name": "前门"
                }, {
                    "name": "安定门"
                }, {
                    "name": "天坛"
                }, {
                    "name": "广渠门"
                }, {
                    "name": "和平里"
                }, {
                    "name": "其他"
                }]
            }, {
                "children": [{
                    "name": "小西天"
                }, {
                    "name": "官园"
                }, {
                    "name": "新街口"
                }, {
                    "name": "德胜门"
                }, {
                    "name": "广内大街"
                }, {
                    "name": "西四"
                }, {
                    "name": "展览路"
                }, {
                    "name": "菜口"
                }, {
                    "name": "复兴门"
                }, {
                    "name": "百万庄"
                }, {
                    "name": "金融街"
                }, {
                    "name": "南礼士路"
                }, {
                    "name": "地安门"
                }, {
                    "name": "三里河"
                }, {
                    "name": "宣武门"
                }, {
                    "name": "广外大街"
                }, {
                    "name": "西城其他"
                }, {
                    "name": "德外大街"
                }, {
                    "name": "动物园"
                }, {
                    "name": "阜成门"
                }, {
                    "name": "西直门"
                }, {
                    "name": "六铺炕"
                }, {
                    "name": "虎坊桥"
                }, {
                    "name": "西便门"
                }, {
                    "name": "车公庄"
                }, {
                    "name": "西单"
                }, {
                    "name": "什刹海"
                }, {
                    "name": "牛街"
                }, {
                    "name": "积水潭"
                }, {
                    "name": "木樨地"
                }, {
                    "name": "月坛"
                }, {
                    "name": "其他"
                }],
                "name": "西城区"
            }, {
                "children": [{
                    "name": "体育馆路"
                }, {
                    "name": "法华寺"
                }, {
                    "name": "光明楼"
                }, {
                    "name": "龙潭湖"
                }, {
                    "name": "永定门"
                }, {
                    "name": "其他"
                }],
                "name": "崇文区"
            }, {
                "children": [{
                    "name": "大观园"
                }, {
                    "name": "红莲"
                }, {
                    "name": "南菜园"
                }, {
                    "name": "天桥"
                }, {
                    "name": "广安门"
                }, {
                    "name": "陶然亭"
                }, {
                    "name": "马连道"
                }, {
                    "name": "长椿街"
                }, {
                    "name": "白纸坊"
                }, {
                    "name": "和平门"
                }, {
                    "name": "其他"
                }],
                "name": "宣武区"
            }, {
                "children": [{
                    "name": "亮马桥"
                }, {
                    "name": "西坝河"
                }, {
                    "name": "常营"
                }, {
                    "name": "太阳宫"
                }, {
                    "name": "柳芳"
                }, {
                    "name": "双井"
                }, {
                    "name": "东坝"
                }, {
                    "name": "对外经贸"
                }, {
                    "name": "国贸"
                }, {
                    "name": "水碓子"
                }, {
                    "name": "安贞"
                }, {
                    "name": "大山子"
                }, {
                    "name": "朝外"
                }, {
                    "name": "劲松"
                }, {
                    "name": "十八里店"
                }, {
                    "name": "定福庄"
                }, {
                    "name": "望京"
                }, {
                    "name": "红庙"
                }, {
                    "name": "燕莎"
                }, {
                    "name": "北沙滩"
                }, {
                    "name": "左家庄"
                }, {
                    "name": "奥运村"
                }, {
                    "name": "建国门"
                }, {
                    "name": "朝阳公园"
                }, {
                    "name": "东大桥"
                }, {
                    "name": "建外大街"
                }, {
                    "name": "芍药居"
                }, {
                    "name": "朝阳其他"
                }, {
                    "name": "大望路"
                }, {
                    "name": "呼家楼"
                }, {
                    "name": "百子湾"
                }, {
                    "name": "团结湖"
                }, {
                    "name": "垡头"
                }, {
                    "name": "小营"
                }, {
                    "name": "小关"
                }, {
                    "name": "花家地"
                }, {
                    "name": "北苑"
                }, {
                    "name": "高碑店"
                }, {
                    "name": "三元桥"
                }, {
                    "name": "大屯"
                }, {
                    "name": "首都机场"
                }, {
                    "name": "潘家园"
                }, {
                    "name": "和平街"
                }, {
                    "name": "京广桥"
                }, {
                    "name": "工体"
                }, {
                    "name": "CBD"
                }, {
                    "name": "酒仙桥"
                }, {
                    "name": "三里屯"
                }, {
                    "name": "来广营"
                }, {
                    "name": "管庄"
                }, {
                    "name": "十里堡"
                }, {
                    "name": "石佛营"
                }, {
                    "name": "亚运村"
                }, {
                    "name": "四惠"
                }, {
                    "name": "小红门"
                }, {
                    "name": "豆各庄"
                }, {
                    "name": "国展"
                }, {
                    "name": "甜水园"
                }, {
                    "name": "其他"
                }],
                "name": "朝阳区"
            }, {
                "children": [{
                    "name": "青塔"
                }, {
                    "name": "方庄"
                }, {
                    "name": "卢沟桥"
                }, {
                    "name": "六里桥"
                }, {
                    "name": "丰台体育馆"
                }, {
                    "name": "草桥"
                }, {
                    "name": "赵公口"
                }, {
                    "name": "云岗"
                }, {
                    "name": "世界公园"
                }, {
                    "name": "角门"
                }, {
                    "name": "看丹桥"
                }, {
                    "name": "马家堡"
                }, {
                    "name": "木樨园"
                }, {
                    "name": "西罗园"
                }, {
                    "name": "南苑"
                }, {
                    "name": "玉泉营"
                }, {
                    "name": "丽泽桥"
                }, {
                    "name": "科技园区"
                }, {
                    "name": "宋家庄"
                }, {
                    "name": "蒲黄榆"
                }, {
                    "name": "大红门"
                }, {
                    "name": "菜户营"
                }, {
                    "name": "长辛店"
                }, {
                    "name": "成寿寺"
                }, {
                    "name": "新发地"
                }, {
                    "name": "岳各庄"
                }, {
                    "name": "开阳里"
                }, {
                    "name": "西客站"
                }, {
                    "name": "丰台其他"
                }, {
                    "name": "东高地"
                }, {
                    "name": "北大地"
                }, {
                    "name": "右安门"
                }, {
                    "name": "花乡"
                }, {
                    "name": "洋桥"
                }, {
                    "name": "刘家窑"
                }, {
                    "name": "其他"
                }],
                "name": "丰台区"
            }, {
                "children": [{
                    "name": "老山"
                }, {
                    "name": "苹果园"
                }, {
                    "name": "永乐"
                }, {
                    "name": "杨庄"
                }, {
                    "name": "八角"
                }, {
                    "name": "八宝山"
                }, {
                    "name": "古城"
                }, {
                    "name": "石景山其他"
                }, {
                    "name": "模式口"
                }, {
                    "name": "广宁"
                }, {
                    "name": "八大处"
                }, {
                    "name": "西山"
                }, {
                    "name": "金顶街"
                }, {
                    "name": "衙门口"
                }, {
                    "name": "鲁谷"
                }, {
                    "name": "五里坨"
                }, {
                    "name": "其他"
                }],
                "name": "石景山区"
            }, {
                "children": [{
                    "name": "西三旗"
                }, {
                    "name": "清河"
                }, {
                    "name": "航天桥"
                }, {
                    "name": "蓟门桥"
                }, {
                    "name": "远大路"
                }, {
                    "name": "公主坟"
                }, {
                    "name": "上地"
                }, {
                    "name": "定慧寺"
                }, {
                    "name": "中关村"
                }, {
                    "name": "北下关"
                }, {
                    "name": "马甸"
                }, {
                    "name": "西苑"
                }, {
                    "name": "香山"
                }, {
                    "name": "甘家口"
                }, {
                    "name": "清华大学"
                }, {
                    "name": "万寿路"
                }, {
                    "name": "花园桥"
                }, {
                    "name": "西北旺"
                }, {
                    "name": "五棵松"
                }, {
                    "name": "学院路"
                }, {
                    "name": "海淀其他"
                }, {
                    "name": "世纪城"
                }, {
                    "name": "知春路"
                }, {
                    "name": "军博"
                }, {
                    "name": "白石桥"
                }, {
                    "name": "北京大学"
                }, {
                    "name": "紫竹桥"
                }, {
                    "name": "双榆树"
                }, {
                    "name": "北太平庄"
                }, {
                    "name": "田村"
                }, {
                    "name": "五道口"
                }, {
                    "name": "人民大学"
                }, {
                    "name": "万柳"
                }, {
                    "name": "牡丹园"
                }, {
                    "name": "永定路"
                }, {
                    "name": "西二旗"
                }, {
                    "name": "四季青"
                }, {
                    "name": "苏州桥"
                }, {
                    "name": "苏州街"
                }, {
                    "name": "二里庄"
                }, {
                    "name": "万泉河"
                }, {
                    "name": "魏公村"
                }, {
                    "name": "皂君庙"
                }, {
                    "name": "颐和园"
                }, {
                    "name": "马连洼"
                }, {
                    "name": "其他"
                }],
                "name": "海淀区"
            }, {
                "children": [{
                    "name": "东辛房"
                }, {
                    "name": "龙泉"
                }, {
                    "name": "军庄"
                }, {
                    "name": "大峪"
                }, {
                    "name": "门头沟其他"
                }, {
                    "name": "永定"
                }, {
                    "name": "其他"
                }],
                "name": "门头沟区"
            }, {
                "children": [{
                    "name": "长阳"
                }, {
                    "name": "阎村"
                }, {
                    "name": "房山城关"
                }, {
                    "name": "良乡"
                }, {
                    "name": "韩村河"
                }, {
                    "name": "迎风"
                }, {
                    "name": "窦店"
                }, {
                    "name": "房山其他"
                }, {
                    "name": "其他"
                }],
                "name": "房山区"
            }, {
                "children": [{
                    "name": "梨园"
                }, {
                    "name": "乔庄"
                }, {
                    "name": "果园"
                }, {
                    "name": "武夷花园"
                }, {
                    "name": "八里桥"
                }, {
                    "name": "运河大街"
                }, {
                    "name": "通州其他"
                }, {
                    "name": "西门"
                }, {
                    "name": "永顺"
                }, {
                    "name": "张家湾"
                }, {
                    "name": "东关"
                }, {
                    "name": "新华大街"
                }, {
                    "name": "土桥"
                }, {
                    "name": "马驹桥"
                }, {
                    "name": "玉桥"
                }, {
                    "name": "新华联"
                }, {
                    "name": "北关"
                }, {
                    "name": "北苑"
                }, {
                    "name": "临河里"
                }, {
                    "name": "九棵树"
                }, {
                    "name": "潞城"
                }, {
                    "name": "中仓"
                }, {
                    "name": "其他"
                }],
                "name": "通州区"
            }, {
                "children": [{
                    "name": "南彩"
                }, {
                    "name": "光明"
                }, {
                    "name": "天竺"
                }, {
                    "name": "顺义城区"
                }, {
                    "name": "仁和"
                }, {
                    "name": "顺义其他"
                }, {
                    "name": "马坡"
                }, {
                    "name": "石园"
                }, {
                    "name": "胜利"
                }, {
                    "name": "杨镇"
                }, {
                    "name": "李桥"
                }, {
                    "name": "后沙峪"
                }, {
                    "name": "新国展"
                }, {
                    "name": "其他"
                }],
                "name": "顺义区"
            }, {
                "children": [{
                    "name": "百善"
                }, {
                    "name": "昌平其他"
                }, {
                    "name": "天通苑"
                }, {
                    "name": "北七家"
                }, {
                    "name": "城南"
                }, {
                    "name": "城北"
                }, {
                    "name": "南邵"
                }, {
                    "name": "马池口"
                }, {
                    "name": "龙泽"
                }, {
                    "name": "长陵"
                }, {
                    "name": "小汤山"
                }, {
                    "name": "兴寿"
                }, {
                    "name": "阳坊"
                }, {
                    "name": "回龙观"
                }, {
                    "name": "东小口"
                }, {
                    "name": "霍营"
                }, {
                    "name": "昌平县城"
                }, {
                    "name": "沙河"
                }, {
                    "name": "南口"
                }, {
                    "name": "立水桥"
                }, {
                    "name": "十三陵"
                }, {
                    "name": "其他"
                }],
                "name": "昌平区"
            }, {
                "children": [{
                    "name": "林校路"
                }, {
                    "name": "黄村"
                }, {
                    "name": "海子角"
                }, {
                    "name": "兴丰大街"
                }, {
                    "name": "亦庄"
                }, {
                    "name": "西红门"
                }, {
                    "name": "清和园"
                }, {
                    "name": "兴业大街"
                }, {
                    "name": "庞各庄"
                }, {
                    "name": "兴华大街"
                }, {
                    "name": "清源"
                }, {
                    "name": "大兴其他"
                }, {
                    "name": "旧宫"
                }, {
                    "name": "同兴园"
                }, {
                    "name": "其他"
                }],
                "name": "大兴区"
            }, {
                "children": [{
                    "name": "北房"
                }, {
                    "name": "泉河"
                }, {
                    "name": "怀柔城区"
                }, {
                    "name": "汤河口"
                }, {
                    "name": "怀柔其他"
                }, {
                    "name": "雁栖"
                }, {
                    "name": "杨宋"
                }, {
                    "name": "庙城"
                }, {
                    "name": "怀北"
                }, {
                    "name": "其他"
                }],
                "name": "怀柔区"
            }, {
                "children": [{
                    "name": "兴谷"
                }, {
                    "name": "黄松峪"
                }, {
                    "name": "渔阳"
                }, {
                    "name": "平谷其他"
                }, {
                    "name": "刘家店"
                }, {
                    "name": "金海湖"
                }, {
                    "name": "东高村"
                }, {
                    "name": "王辛庄"
                }, {
                    "name": "滨河"
                }, {
                    "name": "平谷城区"
                }, {
                    "name": "其他"
                }],
                "name": "平谷区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "密云县"
            }, {
                "children": [{
                    "name": "康庄"
                }, {
                    "name": "大榆树"
                }, {
                    "name": "延庆城区"
                }, {
                    "name": "八达岭"
                }, {
                    "name": "永宁"
                }, {
                    "name": "其他"
                }],
                "name": "延庆县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        
    },
    {
       
            "name": "天津",
            "children": [{
                "children": [{
                    "name": "鞍山道沿线"
                }, {
                    "name": "黄家花园"
                }, {
                    "name": "滨江道"
                }, {
                    "name": "五大道"
                }, {
                    "name": "气象台路"
                }, {
                    "name": "荣业大街"
                }, {
                    "name": "和平路"
                }, {
                    "name": "西康路沿线"
                }, {
                    "name": "劝业场街"
                }, {
                    "name": "小白楼"
                }, {
                    "name": "南"
                }, {
                    "name": "国际大厦"
                }, {
                    "name": "和平其他"
                }, {
                    "name": "其他"
                }],
                "name": "和平区"
            }, {
                "children": [{
                    "name": "中山门"
                }, {
                    "name": "向阳楼街"
                }, {
                    "name": "工业大学"
                }, {
                    "name": "常州道街"
                }, {
                    "name": "东新街"
                }, {
                    "name": "春华街"
                }, {
                    "name": "大王庄"
                }, {
                    "name": "河东其他"
                }, {
                    "name": "大直沽"
                }, {
                    "name": "二号桥"
                }, {
                    "name": "上杭路街"
                }, {
                    "name": "后广场"
                }, {
                    "name": "大桥道"
                }, {
                    "name": "其他"
                }],
                "name": "河东区"
            }, {
                "children": [{
                    "name": "佟楼"
                }, {
                    "name": "马场道"
                }, {
                    "name": "东海"
                }, {
                    "name": "体院北"
                }, {
                    "name": "图书大厦"
                }, {
                    "name": "友谊路街"
                }, {
                    "name": "越秀路街"
                }, {
                    "name": "柳林"
                }, {
                    "name": "陈塘庄街"
                }, {
                    "name": "围堤道沿线"
                }, {
                    "name": "尖山"
                }, {
                    "name": "大营门"
                }, {
                    "name": "人民公园"
                }, {
                    "name": "宾水道"
                }, {
                    "name": "河西其他"
                }, {
                    "name": "小海地"
                }, {
                    "name": "梅江"
                }, {
                    "name": "挂甲寺街"
                }, {
                    "name": "下瓦房街"
                }, {
                    "name": "土城"
                }, {
                    "name": "永安道"
                }, {
                    "name": "其他"
                }],
                "name": "河西区"
            }, {
                "children": [{
                    "name": "白堤路"
                }, {
                    "name": "六里台"
                }, {
                    "name": "学府街"
                }, {
                    "name": "风荷园"
                }, {
                    "name": "南开公园"
                }, {
                    "name": "鼓楼"
                }, {
                    "name": "长虹公园"
                }, {
                    "name": "黄河道"
                }, {
                    "name": "水上公园"
                }, {
                    "name": "古文化街"
                }, {
                    "name": "向阳路街"
                }, {
                    "name": "嘉陵道街"
                }, {
                    "name": "体育中心"
                }, {
                    "name": "兴南街"
                }, {
                    "name": "王顶堤"
                }, {
                    "name": "三马路"
                }, {
                    "name": "南开大学"
                }, {
                    "name": "密云路"
                }, {
                    "name": "南开其他"
                }, {
                    "name": "长虹街"
                }, {
                    "name": "天拖地区"
                }, {
                    "name": "其他"
                }],
                "name": "南开区"
            }, {
                "children": [{
                    "name": "河北其他"
                }, {
                    "name": "狮子林大街"
                }, {
                    "name": "月牙河"
                }, {
                    "name": "新开河街"
                }, {
                    "name": "江都路街"
                }, {
                    "name": "望海楼街"
                }, {
                    "name": "火车站"
                }, {
                    "name": "中山路"
                }, {
                    "name": "宁园街"
                }, {
                    "name": "民权门"
                }, {
                    "name": "鸿顺里街"
                }, {
                    "name": "其他"
                }],
                "name": "河北区"
            }, {
                "children": [{
                    "name": "邵公庄"
                }, {
                    "name": "本溪路"
                }, {
                    "name": "芥园道"
                }, {
                    "name": "西于庄街"
                }, {
                    "name": "大胡同"
                }, {
                    "name": "红桥其他"
                }, {
                    "name": "西沽街"
                }, {
                    "name": "丁字沽"
                }, {
                    "name": "河北大街"
                }, {
                    "name": "咸阳北路街"
                }, {
                    "name": "老城厢"
                }, {
                    "name": "其他"
                }],
                "name": "红桥区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "塘沽区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "汉沽区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "大港区"
            }, {
                "children": [{
                    "name": "东丽其他"
                }, {
                    "name": "程林街"
                }, {
                    "name": "军粮城"
                }, {
                    "name": "利津路"
                }, {
                    "name": "张贵庄街"
                }, {
                    "name": "新立"
                }, {
                    "name": "华明"
                }, {
                    "name": "津塘路"
                }, {
                    "name": "大毕庄"
                }, {
                    "name": "无瑕"
                }, {
                    "name": "丰年村"
                }, {
                    "name": "程林庄"
                }, {
                    "name": "其他"
                }],
                "name": "东丽区"
            }, {
                "children": [{
                    "name": "南河"
                }, {
                    "name": "中北"
                }, {
                    "name": "王稳庄"
                }, {
                    "name": "辛口"
                }, {
                    "name": "杨柳青"
                }, {
                    "name": "侯台"
                }, {
                    "name": "西营门"
                }, {
                    "name": "西青其他"
                }, {
                    "name": "大寺"
                }, {
                    "name": "李七庄"
                }, {
                    "name": "张家窝"
                }, {
                    "name": "华苑街"
                }, {
                    "name": "其他"
                }],
                "name": "西青区"
            }, {
                "children": [{
                    "name": "北闸口"
                }, {
                    "name": "咸水沽"
                }, {
                    "name": "双港"
                }, {
                    "name": "葛沽"
                }, {
                    "name": "小站"
                }, {
                    "name": "八里台"
                }, {
                    "name": "辛庄"
                }, {
                    "name": "津南其他"
                }, {
                    "name": "双桥河"
                }, {
                    "name": "其他"
                }],
                "name": "津南区"
            }, {
                "children": [{
                    "name": "青光"
                }, {
                    "name": "宜兴埠"
                }, {
                    "name": "西堤头"
                }, {
                    "name": "小淀"
                }, {
                    "name": "普东"
                }, {
                    "name": "果园新村"
                }, {
                    "name": "双街"
                }, {
                    "name": "北辰其他"
                }, {
                    "name": "天穆"
                }, {
                    "name": "集贤里"
                }, {
                    "name": "北仓"
                }, {
                    "name": "其他"
                }],
                "name": "北辰区"
            }, {
                "children": [{
                    "name": "王庆坨"
                }, {
                    "name": "南蔡村"
                }, {
                    "name": "武清其他"
                }, {
                    "name": "河西务"
                }, {
                    "name": "大孟庄"
                }, {
                    "name": "黄庄"
                }, {
                    "name": "下朱庄"
                }, {
                    "name": "杨村"
                }, {
                    "name": "徐官屯"
                }, {
                    "name": "东蒲洼"
                }, {
                    "name": "河北屯"
                }, {
                    "name": "大良"
                }, {
                    "name": "大碱厂"
                }, {
                    "name": "城关"
                }, {
                    "name": "其他"
                }],
                "name": "武清区"
            }, {
                "children": [{
                    "name": "宝坻其他"
                }, {
                    "name": "史各庄"
                }, {
                    "name": "高家庄"
                }, {
                    "name": "新安"
                }, {
                    "name": "大口屯"
                }, {
                    "name": "周良庄"
                }, {
                    "name": "马家店"
                }, {
                    "name": "牛家牌"
                }, {
                    "name": "其他"
                }],
                "name": "宝坻区"
            }, {
                "children": [{
                    "name": "清河农场"
                }, {
                    "name": "七里海"
                }, {
                    "name": "造甲城"
                }, {
                    "name": "潘庄"
                }, {
                    "name": "芦台"
                }, {
                    "name": "其他"
                }],
                "name": "宁河县"
            }, {
                "children": [{
                    "name": "团泊"
                }, {
                    "name": "唐官屯"
                }, {
                    "name": "中旺"
                }, {
                    "name": "大邱庄"
                }, {
                    "name": "其他"
                }],
                "name": "静海县"
            }, {
                "children": [{
                    "name": "五百户"
                }, {
                    "name": "礼明庄"
                }, {
                    "name": "官庄"
                }, {
                    "name": "洇溜"
                }, {
                    "name": "许家台"
                }, {
                    "name": "邦均"
                }, {
                    "name": "穿芳峪"
                }, {
                    "name": "下营"
                }, {
                    "name": "其他"
                }],
                "name": "蓟县"
            }, {
                "children": [{
                    "name": "盐场"
                }, {
                    "name": "营城"
                }, {
                    "name": "经济开发区"
                }, {
                    "name": "小王庄"
                }, {
                    "name": "三槐路街"
                }, {
                    "name": "滨海新其他"
                }, {
                    "name": "中塘"
                }, {
                    "name": "胜利街"
                }, {
                    "name": "寨上"
                }, {
                    "name": "海滨"
                }, {
                    "name": "解放路街"
                }, {
                    "name": "胡家园街"
                }, {
                    "name": "大田"
                }, {
                    "name": "杭州道街"
                }, {
                    "name": "向阳街"
                }, {
                    "name": "太平"
                }, {
                    "name": "新港街"
                }, {
                    "name": "河西"
                }, {
                    "name": "北塘街"
                }, {
                    "name": "新河街"
                }, {
                    "name": "新城"
                }, {
                    "name": "塘沽城区"
                }, {
                    "name": "茶淀"
                }, {
                    "name": "迎宾街"
                }, {
                    "name": "其他"
                }],
                "name": "滨海新区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        ,
        "name": "天津"
    },
    {
        "children": [{
            "name": "石家庄",
            "children": [{
                "children": [{
                    "name": "谈固"
                }, {
                    "name": "西兆通"
                }, {
                    "name": "长丰"
                }, {
                    "name": "南村"
                }, {
                    "name": "广安"
                }, {
                    "name": "河东"
                }, {
                    "name": "青园"
                }, {
                    "name": "建北"
                }, {
                    "name": "跃进"
                }, {
                    "name": "育才"
                }, {
                    "name": "范西路"
                }, {
                    "name": "煤机街"
                }, {
                    "name": "高营"
                }, {
                    "name": "长安其他"
                }, {
                    "name": "其他"
                }],
                "name": "长安区"
            }, {
                "children": [{
                    "name": "胜北"
                }, {
                    "name": "平安南大街"
                }, {
                    "name": "东风"
                }, {
                    "name": "东华"
                }, {
                    "name": "彭后"
                }, {
                    "name": "红星街"
                }, {
                    "name": "胜南"
                }, {
                    "name": "桃园"
                }, {
                    "name": "阜康"
                }, {
                    "name": "建安"
                }, {
                    "name": "中山东路"
                }, {
                    "name": "桥东其他"
                }, {
                    "name": "休门"
                }, {
                    "name": "其他"
                }],
                "name": "桥东区"
            }, {
                "children": [{
                    "name": "南长"
                }, {
                    "name": "红旗"
                }, {
                    "name": "桥西其他"
                }, {
                    "name": "西里"
                }, {
                    "name": "维明"
                }, {
                    "name": "振头"
                }, {
                    "name": "东里"
                }, {
                    "name": "维明南大街"
                }, {
                    "name": "中山"
                }, {
                    "name": "留营"
                }, {
                    "name": "友谊"
                }, {
                    "name": "苑东"
                }, {
                    "name": "裕西"
                }, {
                    "name": "新石"
                }, {
                    "name": "其他"
                }],
                "name": "桥西区"
            }, {
                "children": [{
                    "name": "宁安"
                }, {
                    "name": "国泰街"
                }, {
                    "name": "东焦"
                }, {
                    "name": "天苑"
                }, {
                    "name": "和平西路"
                }, {
                    "name": "高柱"
                }, {
                    "name": "西苑"
                }, {
                    "name": "革新"
                }, {
                    "name": "新华路"
                }, {
                    "name": "联盟"
                }, {
                    "name": "五七"
                }, {
                    "name": "赵陵铺"
                }, {
                    "name": "北苑"
                }, {
                    "name": "合作路"
                }, {
                    "name": "西二环"
                }, {
                    "name": "石岗"
                }, {
                    "name": "大郭"
                }, {
                    "name": "清真寺街"
                }, {
                    "name": "新华其他"
                }, {
                    "name": "九中街"
                }, {
                    "name": "西三庄"
                }, {
                    "name": "其他"
                }],
                "name": "新华区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "井陉矿区"
            }, {
                "children": [{
                    "name": "东苑"
                }, {
                    "name": "槐底"
                }, {
                    "name": "槐北路"
                }, {
                    "name": "孙村"
                }, {
                    "name": "裕东"
                }, {
                    "name": "裕兴"
                }, {
                    "name": "留村"
                }, {
                    "name": "裕华其他"
                }, {
                    "name": "方村"
                }, {
                    "name": "宋营"
                }, {
                    "name": "其他"
                }],
                "name": "裕华区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "井陉县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "正定县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "栾城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "行唐县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "灵寿县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "高邑县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "深泽县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "赞皇县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "无极县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "平山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "元氏县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "赵县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "辛集"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "藁城"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "晋州"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "新乐"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "鹿泉"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "唐山",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "路南区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "路北区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "古冶区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "开平区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "丰南区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "丰润区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "滦县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "滦南县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "乐亭县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "迁西县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "玉田县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "唐海县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "遵化"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "迁安"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "秦皇岛",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "海港区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "山海关区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "北戴河区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "青龙满族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "昌黎县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "抚宁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "卢龙县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "邯郸",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "邯山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "丛台区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "复兴区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "峰峰矿区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "邯郸县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "临漳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "成安县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "大名县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "涉县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "磁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "肥乡县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "永年县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "邱县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "鸡泽县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "广平县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "馆陶县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "魏县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "曲周县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "武安"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "邢台",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "桥东区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "桥西区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "邢台县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "临城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "内丘县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "柏乡县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "隆尧县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "任县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "南和县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宁晋县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "巨鹿县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "新河县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "广宗县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "平乡县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "威县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "清河县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "临西县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "南宫"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "沙河"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "内邱县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "保定",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "新区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "北区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "南区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "满城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "清苑县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "涞水县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "阜平县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "徐水县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "定兴县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "唐县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "高阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "容城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "涞源县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "望都县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "安新县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "易县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "曲阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "蠡县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "顺平县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "博野县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "雄县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "涿州"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "定州"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "安国"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "高碑店"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "张家口",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "桥东区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "桥西区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宣化区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "下花园区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宣化县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "张北县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "康保县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "沽源县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "尚义县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "蔚县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "阳原县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "怀安县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "万全县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "怀来县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "涿鹿县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "赤城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "崇礼县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "承德",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "双桥区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "双滦区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "鹰手营子矿区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "承德县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "兴隆县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "平泉县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "滦平县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "隆化县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "丰宁满族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宽城满族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "围场满族蒙古族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "沧州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "新华区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "运河区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "沧县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "青县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "东光县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "海兴县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "盐山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "肃宁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "南皮县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "吴桥县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "献县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "孟村回族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "泊头"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "任丘"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "黄骅"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "河间"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "廊坊",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "安次区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "广阳区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "固安县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "永清县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "香河县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "大城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "文安县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "大厂回族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "霸州"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "三河"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "衡水",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "桃城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "枣强县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "武邑县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "武强县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "饶阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "安平县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "故城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "景县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "阜城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "冀州"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "深州"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }],
        "name": "河北"
    },
    {
        "children": [{
            "name": "太原",
            "children": [{
                "children": [{
                    "name": "高新科技产业区"
                }, {
                    "name": "坞城"
                }, {
                    "name": "亲贤北街"
                }, {
                    "name": "小店其他"
                }, {
                    "name": "黄陵"
                }, {
                    "name": "北营"
                }, {
                    "name": "杨家堡"
                }, {
                    "name": "长风街"
                }, {
                    "name": "其他"
                }],
                "name": "小店区"
            }, {
                "children": [{
                    "name": "双塔西街"
                }, {
                    "name": "文庙"
                }, {
                    "name": "迎泽其他"
                }, {
                    "name": "朝阳街"
                }, {
                    "name": "庙前"
                }, {
                    "name": "郝庄"
                }, {
                    "name": "桥东"
                }, {
                    "name": "老军营"
                }, {
                    "name": "并州北路"
                }, {
                    "name": "柳巷"
                }, {
                    "name": "其他"
                }],
                "name": "迎泽区"
            }, {
                "children": [{
                    "name": "坝陵桥"
                }, {
                    "name": "巨轮"
                }, {
                    "name": "三桥"
                }, {
                    "name": "大东关"
                }, {
                    "name": "涧河"
                }, {
                    "name": "杨家峪"
                }, {
                    "name": "敦化坊"
                }, {
                    "name": "杏花岭其他"
                }, {
                    "name": "龙潭"
                }, {
                    "name": "鼓楼"
                }, {
                    "name": "其他"
                }],
                "name": "杏花岭区"
            }, {
                "children": [{
                    "name": "古城"
                }, {
                    "name": "柴村"
                }, {
                    "name": "新城"
                }, {
                    "name": "兴华"
                }, {
                    "name": "光社"
                }, {
                    "name": "尖草坪其他"
                }, {
                    "name": "迎新街"
                }, {
                    "name": "上兰"
                }, {
                    "name": "其他"
                }],
                "name": "尖草坪区"
            }, {
                "children": [{
                    "name": "化客头"
                }, {
                    "name": "白家庄"
                }, {
                    "name": "和平"
                }, {
                    "name": "东社"
                }, {
                    "name": "万柏林其他"
                }, {
                    "name": "千峰"
                }, {
                    "name": "科技大学"
                }, {
                    "name": "彭村"
                }, {
                    "name": "义井"
                }, {
                    "name": "漪汾街"
                }, {
                    "name": "南寒"
                }, {
                    "name": "下元"
                }, {
                    "name": "其他"
                }],
                "name": "万柏林区"
            }, {
                "children": [{
                    "name": "十六中"
                }, {
                    "name": "金胜"
                }, {
                    "name": "晋源其他"
                }, {
                    "name": "罗城"
                }, {
                    "name": "晋祠"
                }, {
                    "name": "其他"
                }],
                "name": "晋源区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "清徐县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "阳曲县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "娄烦县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "古交"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "大同",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "矿区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "南郊区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "新荣区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "阳高县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "天镇县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "广灵县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "灵丘县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "浑源县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "左云县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "大同县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "阳泉",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "矿区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "郊区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "平定县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "盂县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "长治",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "郊区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "长治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "襄垣县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "屯留县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "平顺县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "黎城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "壶关县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "长子县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "武乡县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "沁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "沁源县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "潞城"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "晋城",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "沁水县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "阳城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "陵川县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "泽州县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "高平"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "朔州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "朔城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "平鲁区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "山阴县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "应县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "右玉县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "怀仁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "晋中",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "榆次区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "榆社县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "左权县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "和顺县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "昔阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "寿阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "太谷县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "祁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "平遥县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "灵石县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "介休"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "运城",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "盐湖区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "临猗县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "万荣县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "闻喜县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "稷山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "新绛县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "绛县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "垣曲县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "夏县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "平陆县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "芮城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "永济"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "河津"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "忻州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "忻府区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "定襄县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "五台县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "代县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "繁峙县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宁武县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "静乐县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "神池县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "五寨县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "岢岚县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "河曲县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "保德县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "偏关县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "原平"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "临汾",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "尧都区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "曲沃县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "翼城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "襄汾县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "洪洞县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "古县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "安泽县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "浮山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "吉县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "乡宁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "大宁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "隰县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "永和县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "蒲县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "汾西县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "侯马"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "霍州"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "吕梁",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "离石区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "文水县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "交城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "兴县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "临县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "柳林县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "石楼县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "岚县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "方山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "中阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "交口县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "孝义"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "汾阳"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }],
        "name": "山西"
    },
    {
        "children": [{
            "name": "呼和浩特",
            "children": [{
                "children": [{
                    "name": "海东路"
                }, {
                    "name": "毫沁营"
                }, {
                    "name": "火车站"
                }, {
                    "name": "赛马场"
                }, {
                    "name": "鼓楼"
                }, {
                    "name": "东风路"
                }, {
                    "name": "迎新路"
                }, {
                    "name": "中山东路"
                }, {
                    "name": "新城其他"
                }, {
                    "name": "其他"
                }],
                "name": "新城区"
            }, {
                "children": [{
                    "name": "光明路"
                }, {
                    "name": "海拉尔西路"
                }, {
                    "name": "通道街"
                }, {
                    "name": "环河街"
                }, {
                    "name": "钢铁路"
                }, {
                    "name": "中山路"
                }, {
                    "name": "攸攸板"
                }, {
                    "name": "文化宫街"
                }, {
                    "name": "回民其他"
                }, {
                    "name": "其他"
                }],
                "name": "回民区"
            }, {
                "children": [{
                    "name": "石羊桥东路"
                }, {
                    "name": "小召前街"
                }, {
                    "name": "长和廊"
                }, {
                    "name": "旧城北门"
                }, {
                    "name": "大南街"
                }, {
                    "name": "兴隆巷"
                }, {
                    "name": "玉泉其他"
                }, {
                    "name": "其他"
                }],
                "name": "玉泉区"
            }, {
                "children": [{
                    "name": "文化商城"
                }, {
                    "name": "赛罕其他"
                }, {
                    "name": "金宇文苑"
                }, {
                    "name": "人民路"
                }, {
                    "name": "大学东路"
                }, {
                    "name": "巴彦"
                }, {
                    "name": "金河"
                }, {
                    "name": "中专路"
                }, {
                    "name": "乌兰察布路"
                }, {
                    "name": "大学西路"
                }, {
                    "name": "其他"
                }],
                "name": "赛罕区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "土默特左旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "托克托县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "和林格尔县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "清水河县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "武川县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "包头",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "东河区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "昆都仑区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "青山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "石拐区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "白云矿区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "九原区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "土默特右旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "固阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "达尔罕茂明安联合旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "乌海",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "海勃湾区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "海南区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "乌达区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "赤峰",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "红山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "元宝山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "松山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "阿鲁科尔沁旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "巴林左旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "巴林右旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "林西县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "克什克腾旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "翁牛特旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "喀喇沁旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宁城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "敖汉旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "通辽",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "科尔沁区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "科尔沁左翼中旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "科尔沁左翼后旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "开鲁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "库伦旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "奈曼旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "扎鲁特旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "霍林郭勒"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "鄂尔多斯",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "东胜区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "达拉特旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "准格尔旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "鄂托克前旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "鄂托克旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "杭锦旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "乌审旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "伊金霍洛旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "呼伦贝尔",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "海拉尔区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "阿荣旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "莫力达瓦达斡尔族自治旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "鄂伦春自治旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "鄂温克族自治旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "陈巴尔虎旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "新巴尔虎左旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "新巴尔虎右旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "满洲里"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "牙克石"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "扎兰屯"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "额尔古纳"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "根河"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "巴彦淖尔",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "临河区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "五原县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "磴口县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "乌拉特前旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "乌拉特中旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "乌拉特后旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "杭锦后旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "乌兰察布",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "集宁区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "卓资县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "化德县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "商都县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "兴和县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "凉城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "察哈尔右翼前旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "察哈尔右翼中旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "察哈尔右翼后旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "四子王旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "丰镇"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "兴安盟",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "乌兰浩特"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "阿尔山"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "科尔沁右翼前旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "科尔沁右翼中旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "扎赉特旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "突泉县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "锡林郭勒盟",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "二连浩特"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "锡林浩特"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "阿巴嘎旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "苏尼特左旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "苏尼特右旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "东乌珠穆沁旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "西乌珠穆沁旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "太仆寺旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "镶黄旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "正镶白旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "正蓝旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "多伦县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "阿拉善盟",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "阿拉善左旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "阿拉善右旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "额济纳旗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }],
        "name": "内蒙古自治区"
    },
    {
        "children": [{
            "name": "沈阳",
            "children": [{
                "children": [{
                    "name": "八经"
                }, {
                    "name": "北"
                }, {
                    "name": "北六马路"
                }, {
                    "name": "集贤"
                }, {
                    "name": "西塔"
                }, {
                    "name": "云集"
                }, {
                    "name": "南湖公园"
                }, {
                    "name": "砂山"
                }, {
                    "name": "吴淞"
                }, {
                    "name": "民主"
                }, {
                    "name": "文体西路"
                }, {
                    "name": "南"
                }, {
                    "name": "十四纬路"
                }, {
                    "name": "太原街"
                }, {
                    "name": "和平其他"
                }, {
                    "name": "新兴"
                }, {
                    "name": "和平广场"
                }, {
                    "name": "马路湾"
                }, {
                    "name": "胜利"
                }, {
                    "name": "遂川"
                }, {
                    "name": "中华路"
                }, {
                    "name": "五里河"
                }, {
                    "name": "其他"
                }],
                "name": "和平区"
            }, {
                "children": [{
                    "name": "北三经街"
                }, {
                    "name": "北文萃路"
                }, {
                    "name": "五爱街"
                }, {
                    "name": "大西街"
                }, {
                    "name": "小南"
                }, {
                    "name": "北站"
                }, {
                    "name": "滨河"
                }, {
                    "name": "小西"
                }, {
                    "name": "文化路"
                }, {
                    "name": "文艺路"
                }, {
                    "name": "正阳"
                }, {
                    "name": "风雨坛"
                }, {
                    "name": "惠工"
                }, {
                    "name": "府"
                }, {
                    "name": "大南"
                }, {
                    "name": "奉天街沿线"
                }, {
                    "name": "朱剪炉"
                }, {
                    "name": "一经"
                }, {
                    "name": "五爱场"
                }, {
                    "name": "万泉"
                }, {
                    "name": "中街"
                }, {
                    "name": "二经"
                }, {
                    "name": "沈河其他"
                }, {
                    "name": "故宫"
                }, {
                    "name": "山东庙"
                }, {
                    "name": "其他"
                }],
                "name": "沈河区"
            }, {
                "children": [{
                    "name": "长安"
                }, {
                    "name": "万莲"
                }, {
                    "name": "小东"
                }, {
                    "name": "东站"
                }, {
                    "name": "大东路"
                }, {
                    "name": "大东其他"
                }, {
                    "name": "小津桥"
                }, {
                    "name": "东塔"
                }, {
                    "name": "大东广场"
                }, {
                    "name": "辽沈"
                }, {
                    "name": "小北"
                }, {
                    "name": "文官"
                }, {
                    "name": "新东"
                }, {
                    "name": "大北"
                }, {
                    "name": "津桥"
                }, {
                    "name": "洮昌"
                }, {
                    "name": "二台子"
                }, {
                    "name": "珠林"
                }, {
                    "name": "其他"
                }],
                "name": "大东区"
            }, {
                "children": [{
                    "name": "陵北"
                }, {
                    "name": "新乐"
                }, {
                    "name": "淮河南街"
                }, {
                    "name": "克俭"
                }, {
                    "name": "辽大"
                }, {
                    "name": "辽河"
                }, {
                    "name": "陵东"
                }, {
                    "name": "昆山"
                }, {
                    "name": "崇山"
                }, {
                    "name": "华山"
                }, {
                    "name": "寿泉"
                }, {
                    "name": "塔湾"
                }, {
                    "name": "泰山"
                }, {
                    "name": "北行"
                }, {
                    "name": "太平"
                }, {
                    "name": "舍利塔"
                }, {
                    "name": "亚明"
                }, {
                    "name": "明廉"
                }, {
                    "name": "长江"
                }, {
                    "name": "黑龙江"
                }, {
                    "name": "三洞桥"
                }, {
                    "name": "三台子"
                }, {
                    "name": "皇姑其他"
                }, {
                    "name": "向工"
                }, {
                    "name": "小白楼"
                }, {
                    "name": "北陵电影院"
                }, {
                    "name": "其他"
                }],
                "name": "皇姑区"
            }, {
                "children": [{
                    "name": "卫工"
                }, {
                    "name": "云峰"
                }, {
                    "name": "保工"
                }, {
                    "name": "重工"
                }, {
                    "name": "凌空"
                }, {
                    "name": "七路"
                }, {
                    "name": "霁虹"
                }, {
                    "name": "铁西其他"
                }, {
                    "name": "兴工"
                }, {
                    "name": "艳粉"
                }, {
                    "name": "十二路"
                }, {
                    "name": "劳动公园"
                }, {
                    "name": "工人村"
                }, {
                    "name": "启工"
                }, {
                    "name": "笃工"
                }, {
                    "name": "兴顺"
                }, {
                    "name": "铁西广场"
                }, {
                    "name": "兴华"
                }, {
                    "name": "兴齐"
                }, {
                    "name": "滑翔小区"
                }, {
                    "name": "贵和"
                }, {
                    "name": "路官"
                }, {
                    "name": "齐贤"
                }, {
                    "name": "其他"
                }],
                "name": "铁西区"
            }, {
                "children": [{
                    "name": "临湖"
                }, {
                    "name": "铁友"
                }, {
                    "name": "解放"
                }, {
                    "name": "湖西"
                }, {
                    "name": "苏家屯其他"
                }, {
                    "name": "南站"
                }, {
                    "name": "其他"
                }],
                "name": "苏家屯区"
            }, {
                "children": [{
                    "name": "马官桥"
                }, {
                    "name": "辉山"
                }, {
                    "name": "东陵其他"
                }, {
                    "name": "五三"
                }, {
                    "name": "丰乐"
                }, {
                    "name": "泉园"
                }, {
                    "name": "白塔"
                }, {
                    "name": "天坛小区"
                }, {
                    "name": "长白"
                }, {
                    "name": "会展中心"
                }, {
                    "name": "南塔"
                }, {
                    "name": "前进"
                }, {
                    "name": "英达"
                }, {
                    "name": "其他"
                }],
                "name": "东陵区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "新城子区"
            }, {
                "children": [{
                    "name": "黄河"
                }, {
                    "name": "东湖"
                }, {
                    "name": "杨士"
                }, {
                    "name": "沙岭"
                }, {
                    "name": "大潘"
                }, {
                    "name": "南阳湖"
                }, {
                    "name": "北塔"
                }, {
                    "name": "迎宾路"
                }, {
                    "name": "怒江"
                }, {
                    "name": "大兴"
                }, {
                    "name": "造化"
                }, {
                    "name": "北陵"
                }, {
                    "name": "陵西"
                }, {
                    "name": "沈辽路"
                }, {
                    "name": "于洪其他"
                }, {
                    "name": "翟家"
                }, {
                    "name": "其他"
                }],
                "name": "于洪区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "辽中县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "康平县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "法库县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "新民"
            }, {
                "children": [{
                    "name": "清水台"
                }, {
                    "name": "道义"
                }, {
                    "name": "虎石台"
                }, {
                    "name": "新城子"
                }, {
                    "name": "其他"
                }],
                "name": "沈北新区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "大连",
            "children": [{
                "children": [{
                    "name": "三八广场"
                }, {
                    "name": "植物园"
                }, {
                    "name": "海军广场"
                }, {
                    "name": "中南路"
                }, {
                    "name": "葵英街"
                }, {
                    "name": "山屏街"
                }, {
                    "name": "二七广场"
                }, {
                    "name": "中山广场"
                }, {
                    "name": "丹东街"
                }, {
                    "name": "景山街"
                }, {
                    "name": "友好广场"
                }, {
                    "name": "虎滩新区"
                }, {
                    "name": "青泥洼桥"
                }, {
                    "name": "朝阳街"
                }, {
                    "name": "港湾街"
                }, {
                    "name": "寺儿沟"
                }, {
                    "name": "昆明街"
                }, {
                    "name": "港湾广场"
                }, {
                    "name": "迎宾路"
                }, {
                    "name": "延安路"
                }, {
                    "name": "解放路"
                }, {
                    "name": "民生街"
                }, {
                    "name": "外国语学院"
                }, {
                    "name": "武昌街"
                }, {
                    "name": "贸易大世界"
                }, {
                    "name": "中山路"
                }, {
                    "name": "景山小区"
                }, {
                    "name": "天津街"
                }, {
                    "name": "秀月街"
                }, {
                    "name": "青云街"
                }, {
                    "name": "老虎滩"
                }, {
                    "name": "儿童公园"
                }, {
                    "name": "春海街"
                }, {
                    "name": "友谊商城"
                }, {
                    "name": "人民路"
                }, {
                    "name": "七七街"
                }, {
                    "name": "中山其他"
                }, {
                    "name": "劳动公园"
                }, {
                    "name": "民主广场"
                }, {
                    "name": "胜利广场"
                }, {
                    "name": "桂林街"
                }, {
                    "name": "其他"
                }],
                "name": "中山区"
            }, {
                "children": [{
                    "name": "莲花小区"
                }, {
                    "name": "新开路"
                }, {
                    "name": "白云新村"
                }, {
                    "name": "希望广场"
                }, {
                    "name": "北京街"
                }, {
                    "name": "大同街"
                }, {
                    "name": "工人村"
                }, {
                    "name": "儿童医院"
                }, {
                    "name": "八一路"
                }, {
                    "name": "西岗其他"
                }, {
                    "name": "人民广场"
                }, {
                    "name": "新起屯"
                }, {
                    "name": "兴业街"
                }, {
                    "name": "付家庄"
                }, {
                    "name": "桃源"
                }, {
                    "name": "长春路"
                }, {
                    "name": "民政街"
                }, {
                    "name": "日新"
                }, {
                    "name": "胜利路"
                }, {
                    "name": "北岗桥"
                }, {
                    "name": "动物园"
                }, {
                    "name": "石道街"
                }, {
                    "name": "金海花园"
                }, {
                    "name": "英华街"
                }, {
                    "name": "三元街"
                }, {
                    "name": "政府"
                }, {
                    "name": "建设街"
                }, {
                    "name": "香周路"
                }, {
                    "name": "黄河路"
                }, {
                    "name": "东北路"
                }, {
                    "name": "长江路"
                }, {
                    "name": "白云山"
                }, {
                    "name": "纪念街"
                }, {
                    "name": "唐山街"
                }, {
                    "name": "南石道街"
                }, {
                    "name": "五一广场"
                }, {
                    "name": "奥林匹克广场"
                }, {
                    "name": "仲夏路"
                }, {
                    "name": "东关街"
                }, {
                    "name": "站北"
                }, {
                    "name": "花园广场"
                }, {
                    "name": "石葵路"
                }, {
                    "name": "香炉礁"
                }, {
                    "name": "鞍山路"
                }, {
                    "name": "体育场"
                }, {
                    "name": "其他"
                }],
                "name": "西岗区"
            }, {
                "children": [{
                    "name": "春柳"
                }, {
                    "name": "兴工"
                }, {
                    "name": "妇产医院"
                }, {
                    "name": "科技谷"
                }, {
                    "name": "绿波"
                }, {
                    "name": "东财"
                }, {
                    "name": "莲花山"
                }, {
                    "name": "刘家桥"
                }, {
                    "name": "熟食品交易中心"
                }, {
                    "name": "丝绸路"
                }, {
                    "name": "连山街"
                }, {
                    "name": "孙家沟"
                }, {
                    "name": "辽宁师范大学"
                }, {
                    "name": "高新园区"
                }, {
                    "name": "南沙"
                }, {
                    "name": "黑石礁"
                }, {
                    "name": "西山"
                }, {
                    "name": "黄河路"
                }, {
                    "name": "尖山街"
                }, {
                    "name": "星海广场"
                }, {
                    "name": "民权"
                }, {
                    "name": "白山路"
                }, {
                    "name": "富民路"
                }, {
                    "name": "联合路"
                }, {
                    "name": "软件园"
                }, {
                    "name": "孙家"
                }, {
                    "name": "台山"
                }, {
                    "name": "星海公园"
                }, {
                    "name": "沙河口其他"
                }, {
                    "name": "沙能街"
                }, {
                    "name": "交大"
                }, {
                    "name": "李家街"
                }, {
                    "name": "中山公园"
                }, {
                    "name": "车家村"
                }, {
                    "name": "解放广场"
                }, {
                    "name": "李家"
                }, {
                    "name": "和平广场"
                }, {
                    "name": "沙跃街"
                }, {
                    "name": "太原街"
                }, {
                    "name": "富民广场"
                }, {
                    "name": "马栏"
                }, {
                    "name": "滨海路"
                }, {
                    "name": "星海湾"
                }, {
                    "name": "万岁街"
                }, {
                    "name": "锦石路"
                }, {
                    "name": "龙江路"
                }, {
                    "name": "会展中心"
                }, {
                    "name": "数码广场"
                }, {
                    "name": "锦绣"
                }, {
                    "name": "富国街"
                }, {
                    "name": "南平街"
                }, {
                    "name": "泉涌"
                }, {
                    "name": "侯家沟"
                }, {
                    "name": "数码路"
                }, {
                    "name": "西安路"
                }, {
                    "name": "高尔基路"
                }, {
                    "name": "其他"
                }],
                "name": "沙河口区"
            }, {
                "children": [{
                    "name": "大连湾"
                }, {
                    "name": "小辛寨子"
                }, {
                    "name": "金家街"
                }, {
                    "name": "百合山庄"
                }, {
                    "name": "机场"
                }, {
                    "name": "凌水"
                }, {
                    "name": "火炬路"
                }, {
                    "name": "华南中学"
                }, {
                    "name": "奥林园"
                }, {
                    "name": "七贤岭"
                }, {
                    "name": "欣乐公园"
                }, {
                    "name": "红凌路"
                }, {
                    "name": "文体街"
                }, {
                    "name": "大纺"
                }, {
                    "name": "红旗中路"
                }, {
                    "name": "山东路"
                }, {
                    "name": "红旗"
                }, {
                    "name": "泡崖场"
                }, {
                    "name": "小平岛"
                }, {
                    "name": "华北路"
                }, {
                    "name": "大有恬园"
                }, {
                    "name": "锦华北园"
                }, {
                    "name": "理工大学"
                }, {
                    "name": "南关岭"
                }, {
                    "name": "后盐"
                }, {
                    "name": "吉祥街"
                }, {
                    "name": "千山心城"
                }, {
                    "name": "虹港路"
                }, {
                    "name": "椒房"
                }, {
                    "name": "泡崖"
                }, {
                    "name": "泡崖八区"
                }, {
                    "name": "王家桥"
                }, {
                    "name": "广贤路"
                }, {
                    "name": "春柳河"
                }, {
                    "name": "张前路"
                }, {
                    "name": "华南"
                }, {
                    "name": "泡崖子"
                }, {
                    "name": "迎客路"
                }, {
                    "name": "促进路"
                }, {
                    "name": "海事大学"
                }, {
                    "name": "金色阳光家园"
                }, {
                    "name": "黄浦路"
                }, {
                    "name": "周水子"
                }, {
                    "name": "辛寨子"
                }, {
                    "name": "松江路"
                }, {
                    "name": "金三角"
                }, {
                    "name": "营城子"
                }, {
                    "name": "千山路"
                }, {
                    "name": "锦绣小区"
                }, {
                    "name": "鹏辉新世纪"
                }, {
                    "name": "华中街"
                }, {
                    "name": "商务学院"
                }, {
                    "name": "泉水"
                }, {
                    "name": "甘井子其他"
                }, {
                    "name": "轻工学院"
                }, {
                    "name": "中华路"
                }, {
                    "name": "天河路"
                }, {
                    "name": "庙岭"
                }, {
                    "name": "椒金山"
                }, {
                    "name": "东软"
                }, {
                    "name": "西山水库"
                }, {
                    "name": "兴华"
                }, {
                    "name": "图书馆"
                }, {
                    "name": "姚家"
                }, {
                    "name": "周水前"
                }, {
                    "name": "其他"
                }],
                "name": "甘井子区"
            }, {
                "children": [{
                    "name": "铁山"
                }, {
                    "name": "登峰"
                }, {
                    "name": "光荣"
                }, {
                    "name": "场"
                }, {
                    "name": "长城"
                }, {
                    "name": "三涧堡"
                }, {
                    "name": "江西"
                }, {
                    "name": "北海街"
                }, {
                    "name": "水师营"
                }, {
                    "name": "旅顺口其他"
                }, {
                    "name": "兴海路"
                }, {
                    "name": "老铁山"
                }, {
                    "name": "其他"
                }],
                "name": "旅顺口区"
            }, {
                "children": [{
                    "name": "得胜"
                }, {
                    "name": "先进"
                }, {
                    "name": "三十里堡"
                }, {
                    "name": "华家屯"
                }, {
                    "name": "中长"
                }, {
                    "name": "开发区"
                }, {
                    "name": "站前"
                }, {
                    "name": "光明"
                }, {
                    "name": "登沙河"
                }, {
                    "name": "大孤山"
                }, {
                    "name": "拥政"
                }, {
                    "name": "海青岛"
                }, {
                    "name": "湾里"
                }, {
                    "name": "石河"
                }, {
                    "name": "马桥子"
                }, {
                    "name": "友谊街"
                }, {
                    "name": "新港"
                }, {
                    "name": "大魏家"
                }, {
                    "name": "金州其他"
                }, {
                    "name": "金石滩"
                }, {
                    "name": "斯大林路"
                }, {
                    "name": "其他"
                }],
                "name": "金州区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "长海县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "瓦房店"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "普兰店"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "庄河"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "瓦房店"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "普兰店"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "鞍山",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "铁东区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "铁西区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "立山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "千山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "台安县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "岫岩满族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "海城"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "抚顺",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "新抚区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "东洲区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "望花区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "顺城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "抚顺县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "新宾满族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "清原满族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "本溪",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "平山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "溪湖区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "明山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "南芬区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "本溪满族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "桓仁满族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "丹东",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "元宝区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "振兴区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "振安区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宽甸满族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "东港"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "凤城"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "锦州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "古塔区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "凌河区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "太和区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "黑山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "义县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "凌海"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "北宁"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "北镇"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "营口",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "站前区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "西区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "鲅鱼圈区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "老边区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "盖州"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "大石桥"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "阜新",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "海州区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "新邱区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "太平区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "清河门区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "细河区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "阜新蒙古族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "彰武县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "辽阳",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "白塔区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "文圣区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宏伟区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "弓长岭区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "太子河区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "辽阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "灯塔"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "盘锦",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "双台子区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "兴隆台区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "大洼县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "盘山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "铁岭",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "银州区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "清河区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "铁岭县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "西丰县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "昌图县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "调兵山"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "开原"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "朝阳",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "双塔区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "龙城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "朝阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "建平县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "喀喇沁左翼蒙古族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "北票"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "凌源"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "葫芦岛",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "连山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "龙港区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "南票区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "绥中县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "建昌县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "兴城"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }],
        "name": "辽宁"
    },
    {
        "children": [{
            "name": "长春",
            "children": [{
                "children": [{
                    "name": "明珠"
                }, {
                    "name": "曙光"
                }, {
                    "name": "好景山庄"
                }, {
                    "name": "东大桥"
                }, {
                    "name": "清明"
                }, {
                    "name": "亚泰大街"
                }, {
                    "name": "南关客运站"
                }, {
                    "name": "平阳街"
                }, {
                    "name": "桃源"
                }, {
                    "name": "三道街"
                }, {
                    "name": "近埠街"
                }, {
                    "name": "文昌路"
                }, {
                    "name": "南湖大路"
                }, {
                    "name": "二道街"
                }, {
                    "name": "二三小区"
                }, {
                    "name": "四道街"
                }, {
                    "name": "东北师大"
                }, {
                    "name": "西五"
                }, {
                    "name": "东岭街"
                }, {
                    "name": "世界雕塑公园"
                }, {
                    "name": "幸福街"
                }, {
                    "name": "东天街"
                }, {
                    "name": "三马路"
                }, {
                    "name": "南关其他"
                }, {
                    "name": "通化路"
                }, {
                    "name": "卫星广场"
                }, {
                    "name": "大经路"
                }, {
                    "name": "青怡坊"
                }, {
                    "name": "卫星路"
                }, {
                    "name": "重庆路"
                }, {
                    "name": "净月"
                }, {
                    "name": "西三道街"
                }, {
                    "name": "平治街"
                }, {
                    "name": "磐石"
                }, {
                    "name": "中医院"
                }, {
                    "name": "文化宫"
                }, {
                    "name": "民康"
                }, {
                    "name": "大马路"
                }, {
                    "name": "鸿城"
                }, {
                    "name": "体育馆"
                }, {
                    "name": "南岭"
                }, {
                    "name": "西四小区"
                }, {
                    "name": "树勋街"
                }, {
                    "name": "珲春街"
                }, {
                    "name": "全安"
                }, {
                    "name": "新立城"
                }, {
                    "name": "自强"
                }, {
                    "name": "上海路"
                }, {
                    "name": "岳阳街"
                }, {
                    "name": "其他"
                }],
                "name": "南关区"
            }, {
                "children": [{
                    "name": "光复路"
                }, {
                    "name": "凯旋路"
                }, {
                    "name": "南广场"
                }, {
                    "name": "东广场"
                }, {
                    "name": "华正"
                }, {
                    "name": "辽宁路"
                }, {
                    "name": "太阳城"
                }, {
                    "name": "南京大街"
                }, {
                    "name": "白菊"
                }, {
                    "name": "柳影"
                }, {
                    "name": "天光路"
                }, {
                    "name": "胜利公园"
                }, {
                    "name": "新发"
                }, {
                    "name": "长新街"
                }, {
                    "name": "车轮厂"
                }, {
                    "name": "站前"
                }, {
                    "name": "黑水路"
                }, {
                    "name": "火车站"
                }, {
                    "name": "宽城其他"
                }, {
                    "name": "东安"
                }, {
                    "name": "团山"
                }, {
                    "name": "西广场"
                }, {
                    "name": "贵阳街"
                }, {
                    "name": "长通"
                }, {
                    "name": "兴业"
                }, {
                    "name": "其他"
                }],
                "name": "宽城区"
            }, {
                "children": [{
                    "name": "朝阳其他"
                }, {
                    "name": "长庆街"
                }, {
                    "name": "红旗街"
                }, {
                    "name": "区政府"
                }, {
                    "name": "孟家"
                }, {
                    "name": "新疆街"
                }, {
                    "name": "富豪花园"
                }, {
                    "name": "高新开发区"
                }, {
                    "name": "繁荣路"
                }, {
                    "name": "桂林路"
                }, {
                    "name": "工学院"
                }, {
                    "name": "宽平"
                }, {
                    "name": "湖西路"
                }, {
                    "name": "朝阳公园"
                }, {
                    "name": "长春理工大学"
                }, {
                    "name": "开工胡同"
                }, {
                    "name": "大兴路"
                }, {
                    "name": "人民大街"
                }, {
                    "name": "南湖新村"
                }, {
                    "name": "万宝街"
                }, {
                    "name": "延安大路"
                }, {
                    "name": "人民广场"
                }, {
                    "name": "前进大街"
                }, {
                    "name": "富锋"
                }, {
                    "name": "南湖广场"
                }, {
                    "name": "西中华路"
                }, {
                    "name": "建设广场"
                }, {
                    "name": "中医学院"
                }, {
                    "name": "威尼"
                }, {
                    "name": "同志街"
                }, {
                    "name": "义和路"
                }, {
                    "name": "锦水路"
                }, {
                    "name": "吉大南校"
                }, {
                    "name": "永昌"
                }, {
                    "name": "隆礼路"
                }, {
                    "name": "西朝阳路"
                }, {
                    "name": "建设街"
                }, {
                    "name": "同光路"
                }, {
                    "name": "辉南街"
                }, {
                    "name": "东朝阳路"
                }, {
                    "name": "解放大路"
                }, {
                    "name": "时代服饰"
                }, {
                    "name": "南湖公园"
                }, {
                    "name": "清和"
                }, {
                    "name": "文化广场"
                }, {
                    "name": "建工学院"
                }, {
                    "name": "康平街"
                }, {
                    "name": "百汇街"
                }, {
                    "name": "开运街"
                }, {
                    "name": "工农大路"
                }, {
                    "name": "北安路"
                }, {
                    "name": "其他"
                }],
                "name": "朝阳区"
            }, {
                "children": [{
                    "name": "民丰街"
                }, {
                    "name": "二道其他"
                }, {
                    "name": "东南湖大路"
                }, {
                    "name": "紫盈花城"
                }, {
                    "name": "荣光"
                }, {
                    "name": "烟厂"
                }, {
                    "name": "吉林大路"
                }, {
                    "name": "公平路"
                }, {
                    "name": "东盛大街"
                }, {
                    "name": "吉盛小区"
                }, {
                    "name": "中东大场"
                }, {
                    "name": "东站"
                }, {
                    "name": "东环城路"
                }, {
                    "name": "和顺"
                }, {
                    "name": "自由大路"
                }, {
                    "name": "临河"
                }, {
                    "name": "远达"
                }, {
                    "name": "八里堡"
                }, {
                    "name": "岭东路"
                }, {
                    "name": "其他"
                }],
                "name": "二道区"
            }, {
                "children": [{
                    "name": "长春公园"
                }, {
                    "name": "锦程"
                }, {
                    "name": "客车厂"
                }, {
                    "name": "铁西"
                }, {
                    "name": "泰来街"
                }, {
                    "name": "南站"
                }, {
                    "name": "青年路"
                }, {
                    "name": "雁鸣湖"
                }, {
                    "name": "东风"
                }, {
                    "name": "西安广场"
                }, {
                    "name": "和平大街"
                }, {
                    "name": "飞跃广场"
                }, {
                    "name": "辽阳街"
                }, {
                    "name": "电影城"
                }, {
                    "name": "创业大街"
                }, {
                    "name": "安达街"
                }, {
                    "name": "青龙路"
                }, {
                    "name": "西安桥"
                }, {
                    "name": "西新"
                }, {
                    "name": "绿园其他"
                }, {
                    "name": "正阳街"
                }, {
                    "name": "锦江广场"
                }, {
                    "name": "万福街"
                }, {
                    "name": "普阳街"
                }, {
                    "name": "西安大路"
                }, {
                    "name": "汽贸城"
                }, {
                    "name": "升阳街"
                }, {
                    "name": "新竹"
                }, {
                    "name": "皓月大路"
                }, {
                    "name": "春城大街"
                }, {
                    "name": "其他"
                }],
                "name": "绿园区"
            }, {
                "children": [{
                    "name": "云山"
                }, {
                    "name": "新安"
                }, {
                    "name": "双阳其他"
                }, {
                    "name": "平湖"
                }, {
                    "name": "其他"
                }],
                "name": "双阳区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "农安县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "九台"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "榆树"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "德惠"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "吉林",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "昌邑区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "龙潭区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "船营区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "丰满区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "永吉县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "蛟河"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "桦甸"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "舒兰"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "磐石"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "四平",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "铁西区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "铁东区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "梨树县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "伊通满族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "公主岭"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "双辽"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "辽源",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "龙山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "西安区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "东丰县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "东辽县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "通化",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "东昌区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "二道江区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "通化县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "辉南县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "柳河县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "梅河口"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "集安"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "白山",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "八道江区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "抚松县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "靖宇县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "长白朝鲜族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "江源县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "临江"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "江源区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "浑江区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "松原",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "宁江区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "前郭尔罗斯蒙古族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "长岭县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "乾安县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "扶余县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "白城",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "洮北区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "镇赉县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "通榆县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "洮南"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "大安"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "延边朝鲜族自治州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "延吉"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "图们"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "敦化"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "珲春"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "龙井"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "和龙"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "汪清县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "安图县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }],
        "name": "吉林"
    },
    {
        "children": [{
            "name": "哈尔滨",
            "children": [{
                "children": [{
                    "name": "滨江"
                }, {
                    "name": "人才场"
                }, {
                    "name": "兆麟"
                }, {
                    "name": "共乐"
                }, {
                    "name": "群力地区"
                }, {
                    "name": "城乡路"
                }, {
                    "name": "正阳河"
                }, {
                    "name": "新阳路"
                }, {
                    "name": "新华"
                }, {
                    "name": "顾乡大街"
                }, {
                    "name": "经纬"
                }, {
                    "name": "抚顺"
                }, {
                    "name": "民安街"
                }, {
                    "name": "阳光颐养花园"
                }, {
                    "name": "康安"
                }, {
                    "name": "爱建社区"
                }, {
                    "name": "运华广场"
                }, {
                    "name": "工农"
                }, {
                    "name": "安广街"
                }, {
                    "name": "安静"
                }, {
                    "name": "中央大街"
                }, {
                    "name": "道里其他"
                }, {
                    "name": "安和"
                }, {
                    "name": "通江"
                }, {
                    "name": "其他"
                }],
                "name": "道里区"
            }, {
                "children": [{
                    "name": "秋林"
                }, {
                    "name": "奋斗"
                }, {
                    "name": "部街"
                }, {
                    "name": "泰山小区"
                }, {
                    "name": "大成"
                }, {
                    "name": "新春"
                }, {
                    "name": "昆仑商城"
                }, {
                    "name": "革新"
                }, {
                    "name": "芦家"
                }, {
                    "name": "燎原"
                }, {
                    "name": "通达"
                }, {
                    "name": "先锋"
                }, {
                    "name": "中宣街"
                }, {
                    "name": "宣化街"
                }, {
                    "name": "工电路"
                }, {
                    "name": "文昌街"
                }, {
                    "name": "松花江"
                }, {
                    "name": "南岗其他"
                }, {
                    "name": "曲线"
                }, {
                    "name": "荣"
                }, {
                    "name": "文库街"
                }, {
                    "name": "哈工大"
                }, {
                    "name": "军工院"
                }, {
                    "name": "芦家街"
                }, {
                    "name": "和兴"
                }, {
                    "name": "阿什河"
                }, {
                    "name": "学府路"
                }, {
                    "name": "哈西"
                }, {
                    "name": "征仪路"
                }, {
                    "name": "开发区"
                }, {
                    "name": "七政"
                }, {
                    "name": "和兴路沿线"
                }, {
                    "name": "红旗"
                }, {
                    "name": "其他"
                }],
                "name": "南岗区"
            }, {
                "children": [{
                    "name": "胜利"
                }, {
                    "name": "斯大林"
                }, {
                    "name": "水泥路"
                }, {
                    "name": "红平小区"
                }, {
                    "name": "靖宇街沿线"
                }, {
                    "name": "大兴"
                }, {
                    "name": "火车头"
                }, {
                    "name": "道外其他"
                }, {
                    "name": "靖宇"
                }, {
                    "name": "仁里"
                }, {
                    "name": "化工"
                }, {
                    "name": "东莱"
                }, {
                    "name": "南极街"
                }, {
                    "name": "南马"
                }, {
                    "name": "太平"
                }, {
                    "name": "崇俭"
                }, {
                    "name": "文化宫"
                }, {
                    "name": "哈尔滨东站"
                }, {
                    "name": "振江"
                }, {
                    "name": "和平小区"
                }, {
                    "name": "大有坊"
                }, {
                    "name": "东棵街"
                }, {
                    "name": "海城街"
                }, {
                    "name": "江畔景区"
                }, {
                    "name": "大方里"
                }, {
                    "name": "太古"
                }, {
                    "name": "尚志"
                }, {
                    "name": "新一"
                }, {
                    "name": "淮河路"
                }, {
                    "name": "其他"
                }],
                "name": "道外区"
            }, {
                "children": [{
                    "name": "电力医院"
                }, {
                    "name": "六顺"
                }, {
                    "name": "通天"
                }, {
                    "name": "香电街"
                }, {
                    "name": "赣水路"
                }, {
                    "name": "菜艺街"
                }, {
                    "name": "香坊其他"
                }, {
                    "name": "民生路"
                }, {
                    "name": "政府"
                }, {
                    "name": "新香坊"
                }, {
                    "name": "香坊大街"
                }, {
                    "name": "新成"
                }, {
                    "name": "安埠"
                }, {
                    "name": "木材厂"
                }, {
                    "name": "安埠街"
                }, {
                    "name": "松雷中学"
                }, {
                    "name": "三大动力路"
                }, {
                    "name": "东北农业大学"
                }, {
                    "name": "其他"
                }],
                "name": "香坊区"
            }, {
                "children": [{
                    "name": "大庆路"
                }, {
                    "name": "和平路"
                }, {
                    "name": "文政"
                }, {
                    "name": "进乡"
                }, {
                    "name": "安乐"
                }, {
                    "name": "哈平路"
                }, {
                    "name": "王兆"
                }, {
                    "name": "通乡"
                }, {
                    "name": "健康路"
                }, {
                    "name": "黎明"
                }, {
                    "name": "其他"
                }],
                "name": "动力区"
            }, {
                "children": [{
                    "name": "新疆"
                }, {
                    "name": "联盟"
                }, {
                    "name": "保国"
                }, {
                    "name": "新疆大街"
                }, {
                    "name": "平新"
                }, {
                    "name": "新伟"
                }, {
                    "name": "兴建"
                }, {
                    "name": "友协"
                }, {
                    "name": "其他"
                }],
                "name": "平房区"
            }, {
                "children": [{
                    "name": "世茂大道"
                }, {
                    "name": "对青山"
                }, {
                    "name": "中源大道"
                }, {
                    "name": "松浦"
                }, {
                    "name": "松北其他"
                }, {
                    "name": "太阳岛"
                }, {
                    "name": "其他"
                }],
                "name": "松北区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "呼兰区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "依兰县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "方正县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宾县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "巴彦县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "木兰县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "通河县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "延寿县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "阿城"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "双城"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "尚志"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "五常"
            }, {
                "children": [{
                    "name": "鸿翔路"
                }, {
                    "name": "安国街"
                }, {
                    "name": "火车站"
                }, {
                    "name": "果戈里"
                }, {
                    "name": "其他"
                }],
                "name": "辖区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "齐齐哈尔",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "龙沙区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "建华区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "铁锋区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "昂昂溪区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "富拉尔基区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "碾子山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "梅里斯达斡尔族区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "龙江县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "依安县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "泰来县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "甘南县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "富裕县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "克山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "克东县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "拜泉县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "讷河"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "鸡西",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "鸡冠区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "恒山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "滴道区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "梨树区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "城子河区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "麻山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "鸡东县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "虎林"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "密山"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "鹤岗",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "向阳区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "工农区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "南山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "兴安区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "东山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "兴山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "萝北县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "绥滨县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "双鸭山",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "尖山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "岭东区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "四方台区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宝山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "集贤县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "友谊县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宝清县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "饶河县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "大庆",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "萨尔图区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "龙凤区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "让胡路区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "红岗区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "大同区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "肇州县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "肇源县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "林甸县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "杜尔伯特蒙古族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "伊春",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "伊春区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "南岔区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "友好区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "西林区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "翠峦区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "新青区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "美溪区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "金山屯区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "五营区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "乌马河区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "汤旺河区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "带岭区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "乌伊岭区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "红星区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "上甘岭区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "嘉荫县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "铁力"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "佳木斯",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "永红区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "向阳区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "前进区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "东风区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "郊区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "桦南县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "桦川县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "汤原县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "抚远县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "同江"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "富锦"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "辖区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "七台河",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "新兴区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "桃山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "茄子河区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "勃利县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "牡丹江",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "东安区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "阳明区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "爱民区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "西安区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "东宁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "林口县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "绥芬河"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "海林"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宁安"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "穆棱"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "黑河",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "爱辉区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "嫩江县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "逊克县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "孙吴县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "北安"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "五大连池"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "绥化",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "北林区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "望奎县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "兰西县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "青冈县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "庆安县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "明水县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "绥棱县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "安达"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "肇东"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "海伦"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "大兴安岭地区",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "呼玛县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "塔河县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "漠河县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }],
        "name": "黑龙江"
    },
    {
       
            "name": "上海",
            "children": [{
                "children": [{
                    "name": "黄浦其他"
                }, {
                    "name": "外滩"
                }, {
                    "name": "人民广场"
                }, {
                    "name": "豫园"
                }, {
                    "name": "老西门"
                }, {
                    "name": "南京东路"
                }, {
                    "name": "城隍庙"
                }, {
                    "name": "蓬莱公园"
                }, {
                    "name": "南浦大桥"
                }, {
                    "name": "半淞园路"
                }, {
                    "name": "董家渡"
                }, {
                    "name": "十六铺"
                }, {
                    "name": "其他"
                }],
                "name": "黄浦区"
            }, {
                "children": [{
                    "name": "鲁班路"
                }, {
                    "name": "新天地"
                }, {
                    "name": "淮海路"
                }, {
                    "name": "九院"
                }, {
                    "name": "五里桥"
                }, {
                    "name": "瑞金宾馆区"
                }, {
                    "name": "打浦桥"
                }, {
                    "name": "复兴公园"
                }, {
                    "name": "其他"
                }],
                "name": "卢湾区"
            }, {
                "children": [{
                    "name": "肇嘉浜路"
                }, {
                    "name": "丁香花园"
                }, {
                    "name": "龙华"
                }, {
                    "name": "上海南站"
                }, {
                    "name": "复兴西路"
                }, {
                    "name": "衡山路"
                }, {
                    "name": "岳阳"
                }, {
                    "name": "音乐学院"
                }, {
                    "name": "徐汇其他"
                }, {
                    "name": "枫林路"
                }, {
                    "name": "徐家汇"
                }, {
                    "name": "万体馆"
                }, {
                    "name": "康建"
                }, {
                    "name": "长桥"
                }, {
                    "name": "华泾"
                }, {
                    "name": "交通大学"
                }, {
                    "name": "华东理工"
                }, {
                    "name": "湖南路"
                }, {
                    "name": "凌云路"
                }, {
                    "name": "田林"
                }, {
                    "name": "上海师大"
                }, {
                    "name": "斜土路"
                }, {
                    "name": "植物园"
                }, {
                    "name": "漕河泾"
                }, {
                    "name": "其他"
                }],
                "name": "徐汇区"
            }, {
                "children": [{
                    "name": "中山公园"
                }, {
                    "name": "北新泾"
                }, {
                    "name": "动物园"
                }, {
                    "name": "天山路"
                }, {
                    "name": "新华路"
                }, {
                    "name": "仙霞新村"
                }, {
                    "name": "古北"
                }, {
                    "name": "江苏路地铁"
                }, {
                    "name": "程家桥"
                }, {
                    "name": "镇宁路"
                }, {
                    "name": "虹桥机场"
                }, {
                    "name": "上海影城"
                }, {
                    "name": "长宁其他"
                }, {
                    "name": "其他"
                }],
                "name": "长宁区"
            }, {
                "children": [{
                    "name": "北京西路"
                }, {
                    "name": "新闸路"
                }, {
                    "name": "静安寺"
                }, {
                    "name": "曹家渡"
                }, {
                    "name": "南京西路"
                }, {
                    "name": "同乐坊"
                }, {
                    "name": "静安其他"
                }, {
                    "name": "江宁路"
                }, {
                    "name": "其他"
                }],
                "name": "静安区"
            }, {
                "children": [{
                    "name": "长寿路"
                }, {
                    "name": "桃浦"
                }, {
                    "name": "金沙江路"
                }, {
                    "name": "华师大"
                }, {
                    "name": "甘泉路"
                }, {
                    "name": "万里城"
                }, {
                    "name": "长风公园"
                }, {
                    "name": "曹杨"
                }, {
                    "name": "长征"
                }, {
                    "name": "真如"
                }, {
                    "name": "中远两湾城"
                }, {
                    "name": "真光新村"
                }, {
                    "name": "武宁路"
                }, {
                    "name": "石泉路"
                }, {
                    "name": "普陀其他"
                }, {
                    "name": "宜川路"
                }, {
                    "name": "梅川路"
                }, {
                    "name": "其他"
                }],
                "name": "普陀区"
            }, {
                "children": [{
                    "name": "大宁路"
                }, {
                    "name": "彭浦新村"
                }, {
                    "name": "场中路"
                }, {
                    "name": "中山北路"
                }, {
                    "name": "闸北公园"
                }, {
                    "name": "西藏北路"
                }, {
                    "name": "火车站"
                }, {
                    "name": "芷江西路"
                }, {
                    "name": "汶水路"
                }, {
                    "name": "共和新路"
                }, {
                    "name": "北区汽车站"
                }, {
                    "name": "闸北其他"
                }, {
                    "name": "老北站"
                }, {
                    "name": "和田"
                }, {
                    "name": "延长路"
                }, {
                    "name": "七浦路"
                }, {
                    "name": "柳营路"
                }, {
                    "name": "宝山路"
                }, {
                    "name": "天目西路"
                }, {
                    "name": "其他"
                }],
                "name": "闸北区"
            }, {
                "children": [{
                    "name": "大连"
                }, {
                    "name": "虹口其他"
                }, {
                    "name": "海宁路"
                }, {
                    "name": "运光"
                }, {
                    "name": "凉城"
                }, {
                    "name": "四川北路"
                }, {
                    "name": "四平路"
                }, {
                    "name": "虹口足球场"
                }, {
                    "name": "曲阳地区"
                }, {
                    "name": "大柏树"
                }, {
                    "name": "鲁迅公园"
                }, {
                    "name": "临平路"
                }, {
                    "name": "东宝兴路"
                }, {
                    "name": "和平公园"
                }, {
                    "name": "广中路"
                }, {
                    "name": "江湾"
                }, {
                    "name": "其他"
                }],
                "name": "虹口区"
            }, {
                "children": [{
                    "name": "复旦大学"
                }, {
                    "name": "长阳路"
                }, {
                    "name": "延吉"
                }, {
                    "name": "控江路"
                }, {
                    "name": "平凉路"
                }, {
                    "name": "杨浦公园"
                }, {
                    "name": "五角场"
                }, {
                    "name": "长海医院"
                }, {
                    "name": "江浦路"
                }, {
                    "name": "东外滩"
                }, {
                    "name": "新华医院"
                }, {
                    "name": "大学区"
                }, {
                    "name": "长白新村"
                }, {
                    "name": "鞍山"
                }, {
                    "name": "新江湾城"
                }, {
                    "name": "中原"
                }, {
                    "name": "杨浦其他"
                }, {
                    "name": "周家嘴路"
                }, {
                    "name": "黄兴公园"
                }, {
                    "name": "其他"
                }],
                "name": "杨浦区"
            }, {
                "children": [{
                    "name": "梅陇"
                }, {
                    "name": "漕宝路"
                }, {
                    "name": "浦江"
                }, {
                    "name": "南方商城"
                }, {
                    "name": "老闵行"
                }, {
                    "name": "华漕"
                }, {
                    "name": "罗阳"
                }, {
                    "name": "颛桥"
                }, {
                    "name": "江川路"
                }, {
                    "name": "锦江乐园"
                }, {
                    "name": "静安新城"
                }, {
                    "name": "龙柏"
                }, {
                    "name": "马桥"
                }, {
                    "name": "吴泾"
                }, {
                    "name": "莘庄"
                }, {
                    "name": "虹梅路"
                }, {
                    "name": "东兰路"
                }, {
                    "name": "航华"
                }, {
                    "name": "莘庄工业区"
                }, {
                    "name": "万源城"
                }, {
                    "name": "闵行其他"
                }, {
                    "name": "春申"
                }, {
                    "name": "虹桥"
                }, {
                    "name": "古美"
                }, {
                    "name": "七宝"
                }, {
                    "name": "其他"
                }],
                "name": "闵行区"
            }, {
                "children": [{
                    "name": "长江西路"
                }, {
                    "name": "罗店"
                }, {
                    "name": "大场"
                }, {
                    "name": "共富新村"
                }, {
                    "name": "大华"
                }, {
                    "name": "庙行"
                }, {
                    "name": "吴淞"
                }, {
                    "name": "上海大学"
                }, {
                    "name": "友谊路"
                }, {
                    "name": "宝山其他"
                }, {
                    "name": "北翼商业街"
                }, {
                    "name": "淞宝"
                }, {
                    "name": "水产路"
                }, {
                    "name": "月浦"
                }, {
                    "name": "锦秋花园"
                }, {
                    "name": "罗泾"
                }, {
                    "name": "杨行"
                }, {
                    "name": "张庙"
                }, {
                    "name": "淞南"
                }, {
                    "name": "共康"
                }, {
                    "name": "高境"
                }, {
                    "name": "通河新村"
                }, {
                    "name": "顾村"
                }, {
                    "name": "泗塘新村"
                }, {
                    "name": "其他"
                }],
                "name": "宝山区"
            }, {
                "children": [{
                    "name": "嘉定其他"
                }, {
                    "name": "安亭"
                }, {
                    "name": "菊园新区"
                }, {
                    "name": "丰庄"
                }, {
                    "name": "真新新村"
                }, {
                    "name": "马陆"
                }, {
                    "name": "南翔"
                }, {
                    "name": "江桥"
                }, {
                    "name": "嘉定城区"
                }, {
                    "name": "其他"
                }],
                "name": "嘉定区"
            }, {
                "children": [{
                    "name": "金杨新村"
                }, {
                    "name": "康桥"
                }, {
                    "name": "洋泾"
                }, {
                    "name": "芦潮港"
                }, {
                    "name": "北蔡"
                }, {
                    "name": "源深体育中心"
                }, {
                    "name": "上南地区"
                }, {
                    "name": "高行"
                }, {
                    "name": "泥城"
                }, {
                    "name": "张江"
                }, {
                    "name": "花木"
                }, {
                    "name": "新场"
                }, {
                    "name": "东明路"
                }, {
                    "name": "浦东新区其他"
                }, {
                    "name": "祝桥"
                }, {
                    "name": "周浦"
                }, {
                    "name": "三林"
                }, {
                    "name": "碧云社区"
                }, {
                    "name": "上钢新村"
                }, {
                    "name": "曹路"
                }, {
                    "name": "临港新城"
                }, {
                    "name": "航头"
                }, {
                    "name": "川沙"
                }, {
                    "name": "梅园"
                }, {
                    "name": "南码头"
                }, {
                    "name": "外高桥"
                }, {
                    "name": "金桥"
                }, {
                    "name": "陆家嘴"
                }, {
                    "name": "世纪公园"
                }, {
                    "name": "八佰伴"
                }, {
                    "name": "唐镇"
                }, {
                    "name": "周家渡"
                }, {
                    "name": "六里"
                }, {
                    "name": "惠南"
                }, {
                    "name": "塘桥"
                }, {
                    "name": "其他"
                }],
                "name": "浦东新区"
            }, {
                "children": [{
                    "name": "朱泾"
                }, {
                    "name": "金山其他"
                }, {
                    "name": "亭林"
                }, {
                    "name": "枫泾"
                }, {
                    "name": "石化"
                }, {
                    "name": "金山卫"
                }, {
                    "name": "其他"
                }],
                "name": "金山区"
            }, {
                "children": [{
                    "name": "松江新城"
                }, {
                    "name": "松江其他"
                }, {
                    "name": "佘山"
                }, {
                    "name": "方松"
                }, {
                    "name": "永丰"
                }, {
                    "name": "松江大学城"
                }, {
                    "name": "新桥"
                }, {
                    "name": "松江工业区"
                }, {
                    "name": "中山"
                }, {
                    "name": "洞泾"
                }, {
                    "name": "九亭"
                }, {
                    "name": "其他"
                }],
                "name": "松江区"
            }, {
                "children": [{
                    "name": "朱家角"
                }, {
                    "name": "重固"
                }, {
                    "name": "白鹤"
                }, {
                    "name": "赵巷"
                }, {
                    "name": "徐泾"
                }, {
                    "name": "青浦其他"
                }, {
                    "name": "其他"
                }],
                "name": "青浦区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "南汇区"
            }, {
                "children": [{
                    "name": "南桥"
                }, {
                    "name": "海湾"
                }, {
                    "name": "奉贤其他"
                }, {
                    "name": "奉城"
                }, {
                    "name": "柘林"
                }, {
                    "name": "庄行"
                }, {
                    "name": "金汇"
                }, {
                    "name": "其他"
                }],
                "name": "奉贤区"
            }, {
                "children": [{
                    "name": "城桥"
                }, {
                    "name": "陈家"
                }, {
                    "name": "堡镇"
                }, {
                    "name": "长兴岛"
                }, {
                    "name": "其他"
                }],
                "name": "崇明县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        ,
        "name": "上海"
    },
    {
        "children": [{
            "name": "南京",
            "children": [{
                "children": [{
                    "name": "玄武其他"
                }, {
                    "name": "梅园"
                }, {
                    "name": "太平门"
                }, {
                    "name": "后宰门"
                }, {
                    "name": "紫金山"
                }, {
                    "name": "丹凤街"
                }, {
                    "name": "锁金村"
                }, {
                    "name": "兰园"
                }, {
                    "name": "玄武湖"
                }, {
                    "name": "火车站"
                }, {
                    "name": "碑亭巷"
                }, {
                    "name": "孝陵卫"
                }, {
                    "name": "卫岗"
                }, {
                    "name": "月苑"
                }, {
                    "name": "红山"
                }, {
                    "name": "珠江路"
                }, {
                    "name": "其他"
                }],
                "name": "玄武区"
            }, {
                "children": [{
                    "name": "新街口"
                }, {
                    "name": "止马营"
                }, {
                    "name": "苜蓿园"
                }, {
                    "name": "石鼓路"
                }, {
                    "name": "淮海路"
                }, {
                    "name": "洪武路"
                }, {
                    "name": "长白街"
                }, {
                    "name": "白下其他"
                }, {
                    "name": "建康路"
                }, {
                    "name": "五老村"
                }, {
                    "name": "汉中路"
                }, {
                    "name": "瑞金路"
                }, {
                    "name": "常府街"
                }, {
                    "name": "大光路"
                }, {
                    "name": "白衣庵"
                }, {
                    "name": "光华路"
                }, {
                    "name": "朝天宫"
                }, {
                    "name": "其他"
                }],
                "name": "白下区"
            }, {
                "children": [{
                    "name": "红花"
                }, {
                    "name": "夫子庙"
                }, {
                    "name": "中华门"
                }, {
                    "name": "秦淮其他"
                }, {
                    "name": "双塘"
                }, {
                    "name": "秦虹"
                }, {
                    "name": "赛虹桥"
                }, {
                    "name": "集庆路"
                }, {
                    "name": "升州路"
                }, {
                    "name": "其他"
                }],
                "name": "秦淮区"
            }, {
                "children": [{
                    "name": "双闸"
                }, {
                    "name": "应天西路"
                }, {
                    "name": "湖西街"
                }, {
                    "name": "莫愁湖公园"
                }, {
                    "name": "白鹭花园"
                }, {
                    "name": "兴隆"
                }, {
                    "name": "建邺其他"
                }, {
                    "name": "长虹路"
                }, {
                    "name": "南湖"
                }, {
                    "name": "建邺万达"
                }, {
                    "name": "水西门"
                }, {
                    "name": "江心洲"
                }, {
                    "name": "沙洲"
                }, {
                    "name": "茶南"
                }, {
                    "name": "南苑"
                }, {
                    "name": "其他"
                }],
                "name": "建邺区"
            }, {
                "children": [{
                    "name": "中央路"
                }, {
                    "name": "湖北路"
                }, {
                    "name": "龙江"
                }, {
                    "name": "玄武门"
                }, {
                    "name": "草场门"
                }, {
                    "name": "山西路"
                }, {
                    "name": "江东"
                }, {
                    "name": "华侨路"
                }, {
                    "name": "中央门"
                }, {
                    "name": "南大"
                }, {
                    "name": "南师大"
                }, {
                    "name": "宁海路"
                }, {
                    "name": "鼓楼其他"
                }, {
                    "name": "三牌楼"
                }, {
                    "name": "湖南路"
                }, {
                    "name": "其他"
                }],
                "name": "鼓楼区"
            }, {
                "children": [{
                    "name": "阅江楼"
                }, {
                    "name": "宝塔桥"
                }, {
                    "name": "金陵小区"
                }, {
                    "name": "小"
                }, {
                    "name": "建宁路"
                }, {
                    "name": "中山桥"
                }, {
                    "name": "挹江门"
                }, {
                    "name": "中山码头"
                }, {
                    "name": "下关其他"
                }, {
                    "name": "热河南路"
                }, {
                    "name": "幕府山"
                }, {
                    "name": "西站"
                }, {
                    "name": "其他"
                }],
                "name": "下关区"
            }, {
                "children": [{
                    "name": "泰山"
                }, {
                    "name": "顶山"
                }, {
                    "name": "沿江"
                }, {
                    "name": "江浦"
                }, {
                    "name": "浦口其他"
                }, {
                    "name": "其他"
                }],
                "name": "浦口区"
            }, {
                "children": [{
                    "name": "燕子矶"
                }, {
                    "name": "迈皋桥"
                }, {
                    "name": "仙林"
                }, {
                    "name": "尧化"
                }, {
                    "name": "龙潭"
                }, {
                    "name": "和燕路"
                }, {
                    "name": "马群"
                }, {
                    "name": "亚东"
                }, {
                    "name": "栖霞其他"
                }, {
                    "name": "其他"
                }],
                "name": "栖霞区"
            }, {
                "children": [{
                    "name": "宁南"
                }, {
                    "name": "西善桥"
                }, {
                    "name": "板桥"
                }, {
                    "name": "雨花新村"
                }, {
                    "name": "小行"
                }, {
                    "name": "梅山"
                }, {
                    "name": "安德门"
                }, {
                    "name": "铁心桥"
                }, {
                    "name": "能仁里"
                }, {
                    "name": "雨花台其他"
                }, {
                    "name": "其他"
                }],
                "name": "雨花台区"
            }, {
                "children": [{
                    "name": "岔口路"
                }, {
                    "name": "方山"
                }, {
                    "name": "百家湖"
                }, {
                    "name": "东善桥"
                }, {
                    "name": "上坊"
                }, {
                    "name": "东山"
                }, {
                    "name": "科学园"
                }, {
                    "name": "开发区"
                }, {
                    "name": "秣陵"
                }, {
                    "name": "淳化"
                }, {
                    "name": "江宁其他"
                }, {
                    "name": "其他"
                }],
                "name": "江宁区"
            }, {
                "children": [{
                    "name": "龙池"
                }, {
                    "name": "长芦"
                }, {
                    "name": "葛塘"
                }, {
                    "name": "山潘"
                }, {
                    "name": "西厂门"
                }, {
                    "name": "卸甲甸"
                }, {
                    "name": "雄州"
                }, {
                    "name": "六合其他"
                }, {
                    "name": "其他"
                }],
                "name": "六合区"
            }, {
                "children": [{
                    "name": "柘塘"
                }, {
                    "name": "洪蓝"
                }, {
                    "name": "东屏"
                }, {
                    "name": "永阳"
                }, {
                    "name": "白马"
                }, {
                    "name": "其他"
                }],
                "name": "溧水县"
            }, {
                "children": [{
                    "name": "淳溪"
                }, {
                    "name": "桠溪"
                }, {
                    "name": "固城"
                }, {
                    "name": "其他"
                }],
                "name": "高淳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "无锡",
            "children": [{
                "children": [{
                    "name": "火车站"
                }, {
                    "name": "崇安其他"
                }, {
                    "name": "通江"
                }, {
                    "name": "上马墩"
                }, {
                    "name": "广瑞路"
                }, {
                    "name": "新华书店"
                }, {
                    "name": "广益"
                }, {
                    "name": "崇安寺"
                }, {
                    "name": "东林广场"
                }, {
                    "name": "江海"
                }, {
                    "name": "中山路"
                }, {
                    "name": "其他"
                }],
                "name": "崇安区"
            }, {
                "children": [{
                    "name": "运河西路"
                }, {
                    "name": "扬名中心小学"
                }, {
                    "name": "五爱路"
                }, {
                    "name": "图书馆"
                }, {
                    "name": "金星"
                }, {
                    "name": "清扬路"
                }, {
                    "name": "金匮"
                }, {
                    "name": "南长其他"
                }, {
                    "name": "扬名"
                }, {
                    "name": "中桥"
                }, {
                    "name": "南禅寺"
                }, {
                    "name": "金城桥"
                }, {
                    "name": "清名桥"
                }, {
                    "name": "迎龙桥"
                }, {
                    "name": "体育公园"
                }, {
                    "name": "其他"
                }],
                "name": "南长区"
            }, {
                "children": [{
                    "name": "黄巷"
                }, {
                    "name": "青石路"
                }, {
                    "name": "北塘其他"
                }, {
                    "name": "山北"
                }, {
                    "name": "五爱广场"
                }, {
                    "name": "北大街"
                }, {
                    "name": "霞美路"
                }, {
                    "name": "锡惠路"
                }, {
                    "name": "惠山"
                }, {
                    "name": "其他"
                }],
                "name": "北塘区"
            }, {
                "children": [{
                    "name": "东北塘"
                }, {
                    "name": "东亭"
                }, {
                    "name": "鸿山"
                }, {
                    "name": "锡山其他"
                }, {
                    "name": "锡北"
                }, {
                    "name": "羊尖"
                }, {
                    "name": "安镇"
                }, {
                    "name": "东港"
                }, {
                    "name": "鹅湖"
                }, {
                    "name": "其他"
                }],
                "name": "锡山区"
            }, {
                "children": [{
                    "name": "长安"
                }, {
                    "name": "钱桥"
                }, {
                    "name": "堰桥"
                }, {
                    "name": "惠山其他"
                }, {
                    "name": "其他"
                }],
                "name": "惠山区"
            }, {
                "children": [{
                    "name": "荣巷"
                }, {
                    "name": "雪浪"
                }, {
                    "name": "蠡湖"
                }, {
                    "name": "华庄"
                }, {
                    "name": "旺庄"
                }, {
                    "name": "蠡园"
                }, {
                    "name": "河埒"
                }, {
                    "name": "滨湖其他"
                }, {
                    "name": "其他"
                }],
                "name": "滨湖区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "江阴"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宜兴"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "徐州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "鼓楼区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "云龙区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "九里区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "贾汪区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "泉山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "丰县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "沛县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "铜山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "睢宁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "新沂"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "邳州"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "常州",
            "children": [{
                "children": [{
                    "name": "怡康花园"
                }, {
                    "name": "丽华三村"
                }, {
                    "name": "朝阳四村"
                }, {
                    "name": "兰陵"
                }, {
                    "name": "人民公园"
                }, {
                    "name": "博爱路"
                }, {
                    "name": "北环路"
                }, {
                    "name": "红梅公园"
                }, {
                    "name": "锦绣花园"
                }, {
                    "name": "文化宫"
                }, {
                    "name": "永宁花园"
                }, {
                    "name": "劳动新村"
                }, {
                    "name": "浦南新村"
                }, {
                    "name": "翠竹新村"
                }, {
                    "name": "浦北新村"
                }, {
                    "name": "富强新村"
                }, {
                    "name": "光华路"
                }, {
                    "name": "红梅东村"
                }, {
                    "name": "丽华二村"
                }, {
                    "name": "清凉新村"
                }, {
                    "name": "丽华一村"
                }, {
                    "name": "桃园新村"
                }, {
                    "name": "永宁路"
                }, {
                    "name": "红梅新村"
                }, {
                    "name": "天宁其他"
                }, {
                    "name": "劳动西路"
                }, {
                    "name": "工人新村"
                }, {
                    "name": "其他"
                }],
                "name": "天宁区"
            }, {
                "children": [{
                    "name": "西新桥"
                }, {
                    "name": "金色新城"
                }, {
                    "name": "工业学院"
                }, {
                    "name": "蓝色星空"
                }, {
                    "name": "广化街"
                }, {
                    "name": "杨柳巷"
                }, {
                    "name": "荆川公园"
                }, {
                    "name": "西新桥三村"
                }, {
                    "name": "体育馆"
                }, {
                    "name": "西新桥二村"
                }, {
                    "name": "花园南村"
                }, {
                    "name": "勤德家园"
                }, {
                    "name": "机械新村"
                }, {
                    "name": "五星公园"
                }, {
                    "name": "白云新村"
                }, {
                    "name": "邮电路"
                }, {
                    "name": "马公桥"
                }, {
                    "name": "都桃源"
                }, {
                    "name": "紫阳花园"
                }, {
                    "name": "花园新村"
                }, {
                    "name": "世纪明珠园"
                }, {
                    "name": "怀德桥"
                }, {
                    "name": "清潭新村"
                }, {
                    "name": "钟楼其他"
                }, {
                    "name": "兰园"
                }, {
                    "name": "勤业新村"
                }, {
                    "name": "其他"
                }],
                "name": "钟楼区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "戚墅堰区"
            }, {
                "children": [{
                    "name": "政府"
                }, {
                    "name": "新龙花苑"
                }, {
                    "name": "黄山路"
                }, {
                    "name": "薛家"
                }, {
                    "name": "龙虎塘"
                }, {
                    "name": "藻江花园"
                }, {
                    "name": "河海大学"
                }, {
                    "name": "兰翔新村"
                }, {
                    "name": "新北其他"
                }, {
                    "name": "三井"
                }, {
                    "name": "奥林匹克花园"
                }, {
                    "name": "圩塘"
                }, {
                    "name": "珠江花园"
                }, {
                    "name": "其他"
                }],
                "name": "新北区"
            }, {
                "children": [{
                    "name": "横林"
                }, {
                    "name": "丽华南村"
                }, {
                    "name": "湖塘镇"
                }, {
                    "name": "小留"
                }, {
                    "name": "鸣凰"
                }, {
                    "name": "武进其他"
                }, {
                    "name": "马杭"
                }, {
                    "name": "中凉新村"
                }, {
                    "name": "新城南都"
                }, {
                    "name": "其他"
                }],
                "name": "武进区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "溧阳"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "金坛"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "苏州",
            "children": [{
                "children": [{
                    "name": "凤凰街"
                }, {
                    "name": "胥江"
                }, {
                    "name": "沧浪其他"
                }, {
                    "name": "双塔"
                }, {
                    "name": "盘门"
                }, {
                    "name": "友新"
                }, {
                    "name": "吴门桥"
                }, {
                    "name": "十全街"
                }, {
                    "name": "观前街"
                }, {
                    "name": "南门"
                }, {
                    "name": "其他"
                }],
                "name": "沧浪区"
            }, {
                "children": [{
                    "name": "娄门"
                }, {
                    "name": "平江其他"
                }, {
                    "name": "山塘街"
                }, {
                    "name": "景德路沿线"
                }, {
                    "name": "拙政园"
                }, {
                    "name": "火车站"
                }, {
                    "name": "白塔西路"
                }, {
                    "name": "桃花坞"
                }, {
                    "name": "南浩街"
                }, {
                    "name": "其他"
                }],
                "name": "平江区"
            }, {
                "children": [{
                    "name": "金阊其他"
                }, {
                    "name": "西园"
                }, {
                    "name": "三香路"
                }, {
                    "name": "石路"
                }, {
                    "name": "彩香"
                }, {
                    "name": "苏锦"
                }, {
                    "name": "虎丘"
                }, {
                    "name": "留园"
                }, {
                    "name": "白洋湾"
                }, {
                    "name": "其他"
                }],
                "name": "金阊区"
            }, {
                "children": [{
                    "name": "东渚"
                }, {
                    "name": "虎丘其他"
                }, {
                    "name": "狮山"
                }, {
                    "name": "横塘"
                }, {
                    "name": "阳山"
                }, {
                    "name": "浒墅关"
                }, {
                    "name": "枫桥"
                }, {
                    "name": "通安"
                }, {
                    "name": "其他"
                }],
                "name": "虎丘区"
            }, {
                "children": [{
                    "name": "娄葑"
                }, {
                    "name": "苏苑"
                }, {
                    "name": "甪直"
                }, {
                    "name": "吴中西路"
                }, {
                    "name": "临湖"
                }, {
                    "name": "龙西"
                }, {
                    "name": "镇湖"
                }, {
                    "name": "光福"
                }, {
                    "name": "科技城"
                }, {
                    "name": "吴中其他"
                }, {
                    "name": "横泾"
                }, {
                    "name": "湖东"
                }, {
                    "name": "城南"
                }, {
                    "name": "独墅湖"
                }, {
                    "name": "胜浦"
                }, {
                    "name": "越溪"
                }, {
                    "name": "博览中心"
                }, {
                    "name": "长桥"
                }, {
                    "name": "郭巷"
                }, {
                    "name": "东环路"
                }, {
                    "name": "西山"
                }, {
                    "name": "邻里中心"
                }, {
                    "name": "青剑湖"
                }, {
                    "name": "木渎"
                }, {
                    "name": "胥口"
                }, {
                    "name": "开发区"
                }, {
                    "name": "湖西"
                }, {
                    "name": "左岸商业街"
                }, {
                    "name": "东山"
                }, {
                    "name": "唯亭"
                }, {
                    "name": "李公堤"
                }, {
                    "name": "香山"
                }, {
                    "name": "葑门"
                }, {
                    "name": "其他"
                }],
                "name": "吴中区"
            }, {
                "children": [{
                    "name": "渭塘"
                }, {
                    "name": "北桥"
                }, {
                    "name": "太平"
                }, {
                    "name": "陆慕"
                }, {
                    "name": "阳澄湖"
                }, {
                    "name": "望亭"
                }, {
                    "name": "元和"
                }, {
                    "name": "黄埭"
                }, {
                    "name": "相城其他"
                }, {
                    "name": "黄桥"
                }, {
                    "name": "其他"
                }],
                "name": "相城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "常熟"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "张家港"
            }, {
                "children": [{
                    "name": "张浦"
                }, {
                    "name": "玉山"
                }, {
                    "name": "巴城"
                }, {
                    "name": "锦溪"
                }, {
                    "name": "周"
                }, {
                    "name": "千灯"
                }, {
                    "name": "周庄"
                }, {
                    "name": "淀山湖"
                }, {
                    "name": "其他"
                }],
                "name": "昆山"
            }, {
                "children": [{
                    "name": "盛泽"
                }, {
                    "name": "七都"
                }, {
                    "name": "松陵"
                }, {
                    "name": "震泽"
                }, {
                    "name": "汾湖"
                }, {
                    "name": "同里"
                }, {
                    "name": "平望"
                }, {
                    "name": "横扇"
                }, {
                    "name": "桃源"
                }, {
                    "name": "其他"
                }],
                "name": "吴江"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "太仓"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "南通",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "崇川区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "港闸区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "海安县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "如东县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "启东"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "如皋"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "通州"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "海门"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "通州区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "连云港",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "连云区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "新浦区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "海州区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "赣榆县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "东海县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "灌云县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "灌南县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "淮安",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "清河区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "楚州区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "淮阴区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "清浦区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "涟水县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "洪泽县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "盱眙县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "金湖县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "盐城",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "亭湖区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "盐都区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "响水县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "滨海县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "阜宁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "射阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "建湖县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "东台"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "大丰"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "扬州",
            "children": [{
                "children": [{
                    "name": "石塔寺"
                }, {
                    "name": "文昌路"
                }, {
                    "name": "广陵其他"
                }, {
                    "name": "其他"
                }],
                "name": "广陵区"
            }, {
                "children": [{
                    "name": "邗江其他"
                }, {
                    "name": "文昌西路沿线"
                }, {
                    "name": "其他"
                }],
                "name": "邗江区"
            }, {
                "children": [{
                    "name": "维扬其他"
                }, {
                    "name": "四望亭路沿线"
                }, {
                    "name": "其他"
                }],
                "name": "维扬区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宝应县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "仪征"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "高邮"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "江都"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "镇江",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "京口区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "润州区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "丹徒区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "丹阳"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "扬中"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "句容"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "泰州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "海陵区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "高港区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "兴化"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "靖江"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "泰兴"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "姜堰"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "宿迁",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "宿城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宿豫区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "沭阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "泗阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "泗洪县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }],
        "name": "江苏"
    },
    {
        "children": [{
            "name": "杭州",
            "children": [{
                "children": [{
                    "name": "南山路"
                }, {
                    "name": "河坊街"
                }, {
                    "name": "小营"
                }, {
                    "name": "西湖大道"
                }, {
                    "name": "平海路"
                }, {
                    "name": "南星"
                }, {
                    "name": "城站火车站"
                }, {
                    "name": "吴山广场"
                }, {
                    "name": "解放路"
                }, {
                    "name": "近江"
                }, {
                    "name": "望江"
                }, {
                    "name": "湖滨"
                }, {
                    "name": "清波"
                }, {
                    "name": "上城其他"
                }, {
                    "name": "其他"
                }],
                "name": "上城区"
            }, {
                "children": [{
                    "name": "艮山"
                }, {
                    "name": "凤起路"
                }, {
                    "name": "朝晖"
                }, {
                    "name": "潮鸣"
                }, {
                    "name": "武林广场"
                }, {
                    "name": "天水"
                }, {
                    "name": "下城其他"
                }, {
                    "name": "庆春路"
                }, {
                    "name": "建国路"
                }, {
                    "name": "环城西路"
                }, {
                    "name": "东新路"
                }, {
                    "name": "长庆"
                }, {
                    "name": "其他"
                }],
                "name": "下城区"
            }, {
                "children": [{
                    "name": "闸弄口"
                }, {
                    "name": "城东"
                }, {
                    "name": "凯旋"
                }, {
                    "name": "中洲"
                }, {
                    "name": "四季青"
                }, {
                    "name": "白杨"
                }, {
                    "name": "笕桥"
                }, {
                    "name": "秋涛北路"
                }, {
                    "name": "火车东站"
                }, {
                    "name": "江干其他"
                }, {
                    "name": "下沙"
                }, {
                    "name": "采荷"
                }, {
                    "name": "其他"
                }],
                "name": "江干区"
            }, {
                "children": [{
                    "name": "大关"
                }, {
                    "name": "小河"
                }, {
                    "name": "米巷"
                }, {
                    "name": "拱墅其他"
                }, {
                    "name": "湖墅南路"
                }, {
                    "name": "余杭塘上"
                }, {
                    "name": "拱宸桥"
                }, {
                    "name": "德胜"
                }, {
                    "name": "上塘"
                }, {
                    "name": "半山"
                }, {
                    "name": "和睦"
                }, {
                    "name": "康桥"
                }, {
                    "name": "其他"
                }],
                "name": "拱墅区"
            }, {
                "children": [{
                    "name": "黄龙"
                }, {
                    "name": "文一路"
                }, {
                    "name": "古荡"
                }, {
                    "name": "西湖其他"
                }, {
                    "name": "龙井"
                }, {
                    "name": "天目山路"
                }, {
                    "name": "北山"
                }, {
                    "name": "虎跑"
                }, {
                    "name": "高新文教区"
                }, {
                    "name": "西溪"
                }, {
                    "name": "古墩路"
                }, {
                    "name": "文三路"
                }, {
                    "name": "灵隐"
                }, {
                    "name": "文新"
                }, {
                    "name": "三墩"
                }, {
                    "name": "翠苑"
                }, {
                    "name": "西湖北线"
                }, {
                    "name": "西湖"
                }, {
                    "name": "文二路"
                }, {
                    "name": "其他"
                }],
                "name": "西湖区"
            }, {
                "children": [{
                    "name": "开发区"
                }, {
                    "name": "滨江其他"
                }, {
                    "name": "浦沿"
                }, {
                    "name": "高教园"
                }, {
                    "name": "西兴"
                }, {
                    "name": "长河"
                }, {
                    "name": "江南"
                }, {
                    "name": "其他"
                }],
                "name": "滨江区"
            }, {
                "children": [{
                    "name": "文明路"
                }, {
                    "name": "城厢"
                }, {
                    "name": "党山"
                }, {
                    "name": "所前"
                }, {
                    "name": "河上"
                }, {
                    "name": "北干"
                }, {
                    "name": "萧山其他"
                }, {
                    "name": "宁围"
                }, {
                    "name": "戴村"
                }, {
                    "name": "闻堰"
                }, {
                    "name": "潘水路"
                }, {
                    "name": "金惠路"
                }, {
                    "name": "新街"
                }, {
                    "name": "通惠北路"
                }, {
                    "name": "心广场"
                }, {
                    "name": "金鸡路"
                }, {
                    "name": "心中路"
                }, {
                    "name": "世贸广场"
                }, {
                    "name": "心南路"
                }, {
                    "name": "萧绍路"
                }, {
                    "name": "崇化路"
                }, {
                    "name": "高桥"
                }, {
                    "name": "风情大道"
                }, {
                    "name": "坎山"
                }, {
                    "name": "育才路"
                }, {
                    "name": "建设二路"
                }, {
                    "name": "湘湖路"
                }, {
                    "name": "萧金路"
                }, {
                    "name": "金城路"
                }, {
                    "name": "心北路"
                }, {
                    "name": "南阳"
                }, {
                    "name": "建设一路"
                }, {
                    "name": "宁东路"
                }, {
                    "name": "蜀山"
                }, {
                    "name": "建设三路"
                }, {
                    "name": "山阴"
                }, {
                    "name": "靖江"
                }, {
                    "name": "道源路"
                }, {
                    "name": "临浦"
                }, {
                    "name": "河庄"
                }, {
                    "name": "义蓬"
                }, {
                    "name": "工人路"
                }, {
                    "name": "浦阳"
                }, {
                    "name": "新塘"
                }, {
                    "name": "通惠中路"
                }, {
                    "name": "衙前"
                }, {
                    "name": "其他"
                }],
                "name": "萧山区"
            }, {
                "children": [{
                    "name": "百丈"
                }, {
                    "name": "仁和"
                }, {
                    "name": "勾庄"
                }, {
                    "name": "南苑"
                }, {
                    "name": "闲林"
                }, {
                    "name": "东湖"
                }, {
                    "name": "良渚"
                }, {
                    "name": "仓前"
                }, {
                    "name": "崇贤"
                }, {
                    "name": "运河"
                }, {
                    "name": "星桥"
                }, {
                    "name": "瓶窑"
                }, {
                    "name": "天都城"
                }, {
                    "name": "临平"
                }, {
                    "name": "余杭其他"
                }, {
                    "name": "金家渡"
                }, {
                    "name": "塘栖"
                }, {
                    "name": "乔司"
                }, {
                    "name": "其他"
                }],
                "name": "余杭区"
            }, {
                "children": [{
                    "name": "分水"
                }, {
                    "name": "富春江"
                }, {
                    "name": "瑶琳"
                }, {
                    "name": "横村"
                }, {
                    "name": "桐君"
                }, {
                    "name": "其他"
                }],
                "name": "桐庐县"
            }, {
                "children": [{
                    "name": "千岛湖"
                }, {
                    "name": "石林"
                }, {
                    "name": "其他"
                }],
                "name": "淳安县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "建德"
            }, {
                "children": [{
                    "name": "春江"
                }, {
                    "name": "东洲"
                }, {
                    "name": "鹿山"
                }, {
                    "name": "其他"
                }],
                "name": "富阳"
            }, {
                "children": [{
                    "name": "玲珑"
                }, {
                    "name": "青山湖"
                }, {
                    "name": "锦城"
                }, {
                    "name": "其他"
                }],
                "name": "临安"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "宁波",
            "children": [{
                "children": [{
                    "name": "高塘四村"
                }, {
                    "name": "灵桥"
                }, {
                    "name": "江厦"
                }, {
                    "name": "政府"
                }, {
                    "name": "南门"
                }, {
                    "name": "望春"
                }, {
                    "name": "孝闻街"
                }, {
                    "name": "恒春街"
                }, {
                    "name": "机场路"
                }, {
                    "name": "白云"
                }, {
                    "name": "永丰路"
                }, {
                    "name": "马园"
                }, {
                    "name": "县学街"
                }, {
                    "name": "西河街"
                }, {
                    "name": "城隍庙"
                }, {
                    "name": "海曙其他"
                }, {
                    "name": "中山西路"
                }, {
                    "name": "宝善路"
                }, {
                    "name": "西湾路"
                }, {
                    "name": "新典路"
                }, {
                    "name": "鼓楼"
                }, {
                    "name": "段塘"
                }, {
                    "name": "胜丰路"
                }, {
                    "name": "解放南路"
                }, {
                    "name": "苗圃路"
                }, {
                    "name": "天一广场"
                }, {
                    "name": "鄞奉路"
                }, {
                    "name": "前丰街"
                }, {
                    "name": "莫家巷"
                }, {
                    "name": "兴宁桥"
                }, {
                    "name": "柳汀街"
                }, {
                    "name": "中山广场"
                }, {
                    "name": "苍松路"
                }, {
                    "name": "青少年宫"
                }, {
                    "name": "南苑街"
                }, {
                    "name": "开明街"
                }, {
                    "name": "天一家园"
                }, {
                    "name": "广济街"
                }, {
                    "name": "大沙泥街"
                }, {
                    "name": "人才场"
                }, {
                    "name": "三路"
                }, {
                    "name": "文昌街"
                }, {
                    "name": "西门"
                }, {
                    "name": "咏归路"
                }, {
                    "name": "翠柏路"
                }, {
                    "name": "镇明路"
                }, {
                    "name": "月湖公园"
                }, {
                    "name": "新芝路"
                }, {
                    "name": "呼童街"
                }, {
                    "name": "联丰路"
                }, {
                    "name": "月湖"
                }, {
                    "name": "其他"
                }],
                "name": "海曙区"
            }, {
                "children": [{
                    "name": "新江厦商城"
                }, {
                    "name": "兴宁路"
                }, {
                    "name": "百丈路"
                }, {
                    "name": "锦地水岸"
                }, {
                    "name": "福明"
                }, {
                    "name": "中兴路"
                }, {
                    "name": "东柳"
                }, {
                    "name": "曙光路"
                }, {
                    "name": "白鹤"
                }, {
                    "name": "通途路"
                }, {
                    "name": "东胜"
                }, {
                    "name": "彩虹路"
                }, {
                    "name": "徐戎路"
                }, {
                    "name": "朱雀新村"
                }, {
                    "name": "箕漕街"
                }, {
                    "name": "东郊"
                }, {
                    "name": "七塔寺"
                }, {
                    "name": "黄鹂新村"
                }, {
                    "name": "彩虹北路"
                }, {
                    "name": "桑田路"
                }, {
                    "name": "紫鹃新村"
                }, {
                    "name": "江东其他"
                }, {
                    "name": "芙蓉路"
                }, {
                    "name": "彩虹南路"
                }, {
                    "name": "日月星城"
                }, {
                    "name": "华光城"
                }, {
                    "name": "明楼"
                }, {
                    "name": "常青藤小城"
                }, {
                    "name": "汽车东站"
                }, {
                    "name": "体育中心"
                }, {
                    "name": "贺丞路"
                }, {
                    "name": "宁穿路"
                }, {
                    "name": "百丈"
                }, {
                    "name": "华侨城"
                }, {
                    "name": "东海花园"
                }, {
                    "name": "沧海路"
                }, {
                    "name": "李惠利医院"
                }, {
                    "name": "曙光电影院"
                }, {
                    "name": "中山东路"
                }, {
                    "name": "其他"
                }],
                "name": "江东区"
            }, {
                "children": [{
                    "name": "白沙"
                }, {
                    "name": "大庆北路"
                }, {
                    "name": "建业街"
                }, {
                    "name": "江北其他"
                }, {
                    "name": "桃源小区"
                }, {
                    "name": "文教"
                }, {
                    "name": "环城北路"
                }, {
                    "name": "庄桥"
                }, {
                    "name": "洪塘"
                }, {
                    "name": "老外滩"
                }, {
                    "name": "大闸路"
                }, {
                    "name": "槐树路"
                }, {
                    "name": "大庆南路"
                }, {
                    "name": "华业街"
                }, {
                    "name": "宁波大剧院"
                }, {
                    "name": "孔浦"
                }, {
                    "name": "清河路"
                }, {
                    "name": "新马路"
                }, {
                    "name": "育才家园"
                }, {
                    "name": "人民路"
                }, {
                    "name": "西草马路"
                }, {
                    "name": "育才路"
                }, {
                    "name": "范江岸路"
                }, {
                    "name": "中马"
                }, {
                    "name": "倪家堰"
                }, {
                    "name": "双东坊"
                }, {
                    "name": "其他"
                }],
                "name": "江北区"
            }, {
                "children": [{
                    "name": "新矸"
                }, {
                    "name": "大碶"
                }, {
                    "name": "新碶"
                }, {
                    "name": "北仑其他"
                }, {
                    "name": "小港"
                }, {
                    "name": "大榭"
                }, {
                    "name": "柴桥"
                }, {
                    "name": "霞浦"
                }, {
                    "name": "戚家山"
                }, {
                    "name": "其他"
                }],
                "name": "北仑区"
            }, {
                "children": [{
                    "name": "庄"
                }, {
                    "name": "九龙湖"
                }, {
                    "name": "招宝山"
                }, {
                    "name": "蛟川"
                }, {
                    "name": "骆驼"
                }, {
                    "name": "镇海其他"
                }, {
                    "name": "其他"
                }],
                "name": "镇海区"
            }, {
                "children": [{
                    "name": "陈婆渡"
                }, {
                    "name": "麦德龙"
                }, {
                    "name": "鄞州其他"
                }, {
                    "name": "东钱湖"
                }, {
                    "name": "宋诏桥"
                }, {
                    "name": "下应"
                }, {
                    "name": "钟公庙"
                }, {
                    "name": "石碶"
                }, {
                    "name": "飞虹新村"
                }, {
                    "name": "甬兴新村"
                }, {
                    "name": "鄞县大道"
                }, {
                    "name": "天童北路"
                }, {
                    "name": "高桥镇"
                }, {
                    "name": "首南"
                }, {
                    "name": "中河"
                }, {
                    "name": "王家弄"
                }, {
                    "name": "梅墟"
                }, {
                    "name": "金家漕"
                }, {
                    "name": "江南春晓"
                }, {
                    "name": "高教园区"
                }, {
                    "name": "轻纺城"
                }, {
                    "name": "万里学院"
                }, {
                    "name": "其他"
                }],
                "name": "鄞州区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "象山县"
            }, {
                "children": [{
                    "name": "桥头胡"
                }, {
                    "name": "梅林"
                }, {
                    "name": "跃龙"
                }, {
                    "name": "桃源"
                }, {
                    "name": "其他"
                }],
                "name": "宁海县"
            }, {
                "children": [{
                    "name": "低塘"
                }, {
                    "name": "西北"
                }, {
                    "name": "东南"
                }, {
                    "name": "其他"
                }],
                "name": "余姚"
            }, {
                "children": [{
                    "name": "宗汉"
                }, {
                    "name": "坎墩"
                }, {
                    "name": "浒山"
                }, {
                    "name": "其他"
                }],
                "name": "慈溪"
            }, {
                "children": [{
                    "name": "江口"
                }, {
                    "name": "西坞"
                }, {
                    "name": "锦屏"
                }, {
                    "name": "岳林"
                }, {
                    "name": "其他"
                }],
                "name": "奉化"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "温州",
            "children": [{
                "children": [{
                    "name": "广化"
                }, {
                    "name": "黄龙"
                }, {
                    "name": "泽雅"
                }, {
                    "name": "双屿"
                }, {
                    "name": "藤桥"
                }, {
                    "name": "绣山"
                }, {
                    "name": "江滨"
                }, {
                    "name": "西站"
                }, {
                    "name": "南浦"
                }, {
                    "name": "东游路"
                }, {
                    "name": "洪殿"
                }, {
                    "name": "莲池"
                }, {
                    "name": "客运中心"
                }, {
                    "name": "蒲鞋"
                }, {
                    "name": "医学院"
                }, {
                    "name": "南门"
                }, {
                    "name": "法派路"
                }, {
                    "name": "鹿城其他"
                }, {
                    "name": "五马街"
                }, {
                    "name": "水心"
                }, {
                    "name": "其他"
                }],
                "name": "鹿城区"
            }, {
                "children": [{
                    "name": "沙城"
                }, {
                    "name": "海滨"
                }, {
                    "name": "龙湾其他"
                }, {
                    "name": "天河"
                }, {
                    "name": "海城"
                }, {
                    "name": "状元"
                }, {
                    "name": "蒲州"
                }, {
                    "name": "永中"
                }, {
                    "name": "灵昆"
                }, {
                    "name": "瑶溪"
                }, {
                    "name": "永兴"
                }, {
                    "name": "其他"
                }],
                "name": "龙湾区"
            }, {
                "children": [{
                    "name": "丽岙"
                }, {
                    "name": "瞿溪"
                }, {
                    "name": "新桥"
                }, {
                    "name": "郭溪"
                }, {
                    "name": "大堡底"
                }, {
                    "name": "茶山"
                }, {
                    "name": "潘桥"
                }, {
                    "name": "仙岩"
                }, {
                    "name": "南白象"
                }, {
                    "name": "景山"
                }, {
                    "name": "娄桥"
                }, {
                    "name": "瓯海其他"
                }, {
                    "name": "梧田"
                }, {
                    "name": "其他"
                }],
                "name": "瓯海区"
            }, {
                "children": [{
                    "name": "北岙"
                }, {
                    "name": "元觉"
                }, {
                    "name": "东屏"
                }, {
                    "name": "其他"
                }],
                "name": "洞头县"
            }, {
                "children": [{
                    "name": "桥头"
                }, {
                    "name": "沙头"
                }, {
                    "name": "乌牛"
                }, {
                    "name": "枫林"
                }, {
                    "name": "上塘"
                }, {
                    "name": "瓯北"
                }, {
                    "name": "桥下"
                }, {
                    "name": "岩头"
                }, {
                    "name": "其他"
                }],
                "name": "永嘉县"
            }, {
                "children": [{
                    "name": "昆阳"
                }, {
                    "name": "鳌江"
                }, {
                    "name": "钱仓"
                }, {
                    "name": "萧江"
                }, {
                    "name": "水头"
                }, {
                    "name": "郑楼"
                }, {
                    "name": "腾蛟"
                }, {
                    "name": "南雁"
                }, {
                    "name": "其他"
                }],
                "name": "平阳县"
            }, {
                "children": [{
                    "name": "桥墩"
                }, {
                    "name": "金乡"
                }, {
                    "name": "望里"
                }, {
                    "name": "龙港"
                }, {
                    "name": "霞关"
                }, {
                    "name": "灵溪"
                }, {
                    "name": "钱库"
                }, {
                    "name": "宜山"
                }, {
                    "name": "其他"
                }],
                "name": "苍南县"
            }, {
                "children": [{
                    "name": "西坑畲族"
                }, {
                    "name": "南田"
                }, {
                    "name": "其他"
                }],
                "name": "文成县"
            }, {
                "children": [{
                    "name": "罗阳"
                }, {
                    "name": "百丈"
                }, {
                    "name": "雅阳"
                }, {
                    "name": "其他"
                }],
                "name": "泰顺县"
            }, {
                "children": [{
                    "name": "仙降"
                }, {
                    "name": "塘下"
                }, {
                    "name": "马屿"
                }, {
                    "name": "东山"
                }, {
                    "name": "上望"
                }, {
                    "name": "汀田"
                }, {
                    "name": "玉海"
                }, {
                    "name": "塘西"
                }, {
                    "name": "安阳"
                }, {
                    "name": "平阳坑"
                }, {
                    "name": "陶山"
                }, {
                    "name": "飞云"
                }, {
                    "name": "锦湖"
                }, {
                    "name": "其他"
                }],
                "name": "瑞安"
            }, {
                "children": [{
                    "name": "象阳"
                }, {
                    "name": "清江"
                }, {
                    "name": "虹桥"
                }, {
                    "name": "南塘"
                }, {
                    "name": "蒲岐"
                }, {
                    "name": "柳"
                }, {
                    "name": "淡溪"
                }, {
                    "name": "石帆"
                }, {
                    "name": "乐成"
                }, {
                    "name": "雁荡"
                }, {
                    "name": "芙蓉"
                }, {
                    "name": "七里港"
                }, {
                    "name": "黄华"
                }, {
                    "name": "北白象"
                }, {
                    "name": "大荆"
                }, {
                    "name": "白石"
                }, {
                    "name": "磐石"
                }, {
                    "name": "其他"
                }],
                "name": "乐清"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "嘉兴",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "秀城区"
            }, {
                "children": [{
                    "name": "塘汇"
                }, {
                    "name": "高照"
                }, {
                    "name": "其他"
                }],
                "name": "秀洲区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "嘉善县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "海盐县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "海宁"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "平湖"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "桐乡"
            }, {
                "children": [{
                    "name": "城南"
                }, {
                    "name": "解放"
                }, {
                    "name": "东栅"
                }, {
                    "name": "其他"
                }],
                "name": "南湖区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "湖州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "吴兴区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "南浔区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "德清县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "长兴县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "安吉县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "绍兴",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "越城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "绍兴县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "新昌县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "诸暨"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "上虞"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "嵊州"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "金华",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "婺城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "金东区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "武义县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "浦江县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "磐安县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "兰溪"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "义乌"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "东阳"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "永康"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "衢州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "柯城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "衢江区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "常山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "开化县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "龙游县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "江山"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "舟山",
            "children": [{
                "children": [{
                    "name": "盐仓"
                }, {
                    "name": "岑港"
                }, {
                    "name": "马岙"
                }, {
                    "name": "白泉"
                }, {
                    "name": "册子"
                }, {
                    "name": "双桥"
                }, {
                    "name": "金塘"
                }, {
                    "name": "北蝉"
                }, {
                    "name": "临城"
                }, {
                    "name": "其他"
                }],
                "name": "定海区"
            }, {
                "children": [{
                    "name": "普陀山"
                }, {
                    "name": "勾山"
                }, {
                    "name": "朱家尖"
                }, {
                    "name": "东极"
                }, {
                    "name": "蚂蚁"
                }, {
                    "name": "东港"
                }, {
                    "name": "登步"
                }, {
                    "name": "沈家门"
                }, {
                    "name": "虾峙"
                }, {
                    "name": "其他"
                }],
                "name": "普陀区"
            }, {
                "children": [{
                    "name": "高亭"
                }, {
                    "name": "岱西"
                }, {
                    "name": "衢山"
                }, {
                    "name": "其他"
                }],
                "name": "岱山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "嵊泗县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "台州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "椒江区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "黄岩区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "路桥区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "玉环县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "三门县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "天台县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "仙居县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "温岭"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "临海"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "丽水",
            "children": [{
                "children": [{
                    "name": "囿山"
                }, {
                    "name": "三岩寺"
                }, {
                    "name": "白云"
                }, {
                    "name": "海潮"
                }, {
                    "name": "大水门"
                }, {
                    "name": "东苑"
                }, {
                    "name": "怡景"
                }, {
                    "name": "后庆"
                }, {
                    "name": "丽青路"
                }, {
                    "name": "银苑"
                }, {
                    "name": "灯塔"
                }, {
                    "name": "天宁"
                }, {
                    "name": "梅山"
                }, {
                    "name": "中东路"
                }, {
                    "name": "碧湖"
                }, {
                    "name": "纳爱斯"
                }, {
                    "name": "华敦街"
                }, {
                    "name": "党校"
                }, {
                    "name": "万丰"
                }, {
                    "name": "丽阳门"
                }, {
                    "name": "其他"
                }],
                "name": "莲都区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "青田县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "缙云县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "遂昌县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "松阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "云和县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "庆元县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "景宁畲族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "龙泉"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }],
        "name": "浙江"
    },
    {
        "children": [{
            "name": "合肥",
            "children": [{
                "children": [{
                    "name": "汪塘"
                }, {
                    "name": "滁州路"
                }, {
                    "name": "临泉路"
                }, {
                    "name": "大通路"
                }, {
                    "name": "红光"
                }, {
                    "name": "安徽大场"
                }, {
                    "name": "车站"
                }, {
                    "name": "裕丰花"
                }, {
                    "name": "三里街"
                }, {
                    "name": "明光路"
                }, {
                    "name": "七里站"
                }, {
                    "name": "临淮路"
                }, {
                    "name": "方庙"
                }, {
                    "name": "国际汽车城"
                }, {
                    "name": "凤阳路"
                }, {
                    "name": "当涂路"
                }, {
                    "name": "通达路"
                }, {
                    "name": "元一时代广场"
                }, {
                    "name": "新亚汽车站"
                }, {
                    "name": "长江批发场"
                }, {
                    "name": "胜利广场"
                }, {
                    "name": "龙岗"
                }, {
                    "name": "站西路"
                }, {
                    "name": "胜利路"
                }, {
                    "name": "长淮"
                }, {
                    "name": "铜陵路"
                }, {
                    "name": "瑶海其他"
                }, {
                    "name": "合裕路"
                }, {
                    "name": "长江东路"
                }, {
                    "name": "十一中"
                }, {
                    "name": "张洼路"
                }, {
                    "name": "站塘"
                }, {
                    "name": "和平广场"
                }, {
                    "name": "全椒路"
                }, {
                    "name": "城东"
                }, {
                    "name": "合肥站"
                }, {
                    "name": "和平路"
                }, {
                    "name": "七里塘"
                }, {
                    "name": "金大塘"
                }, {
                    "name": "双七路"
                }, {
                    "name": "大东门"
                }, {
                    "name": "五里井"
                }, {
                    "name": "天长路"
                }, {
                    "name": "其他"
                }],
                "name": "瑶海区"
            }, {
                "children": [{
                    "name": "六安路"
                }, {
                    "name": "红星路"
                }, {
                    "name": "大西门"
                }, {
                    "name": "四里河"
                }, {
                    "name": "六安路小学"
                }, {
                    "name": "安庆路"
                }, {
                    "name": "绿都花园"
                }, {
                    "name": "南国花园"
                }, {
                    "name": "庐江路"
                }, {
                    "name": "砀山路"
                }, {
                    "name": "阜阳路桥"
                }, {
                    "name": "杏林"
                }, {
                    "name": "县桥"
                }, {
                    "name": "杏花公园"
                }, {
                    "name": "双岗"
                }, {
                    "name": "百花井"
                }, {
                    "name": "海棠"
                }, {
                    "name": "庐阳其他"
                }, {
                    "name": "蒙城路"
                }, {
                    "name": "工大北区"
                }, {
                    "name": "鼓楼"
                }, {
                    "name": "商之都"
                }, {
                    "name": "城隍庙"
                }, {
                    "name": "三孝口"
                }, {
                    "name": "逍遥津"
                }, {
                    "name": "四牌楼"
                }, {
                    "name": "濉溪路"
                }, {
                    "name": "阜阳北路"
                }, {
                    "name": "白水坝"
                }, {
                    "name": "阜南路"
                }, {
                    "name": "光明"
                }, {
                    "name": "荣事达大道"
                }, {
                    "name": "高河埂"
                }, {
                    "name": "益民"
                }, {
                    "name": "五河路"
                }, {
                    "name": "宿州路"
                }, {
                    "name": "望城店"
                }, {
                    "name": "公交四公司"
                }, {
                    "name": "亳州路"
                }, {
                    "name": "长江中路"
                }, {
                    "name": "寿春"
                }, {
                    "name": "三牌楼"
                }, {
                    "name": "府广场"
                }, {
                    "name": "其他"
                }],
                "name": "庐阳区"
            }, {
                "children": [{
                    "name": "合作化北路"
                }, {
                    "name": "贵池路"
                }, {
                    "name": "十里庙"
                }, {
                    "name": "金色池塘"
                }, {
                    "name": "青阳路"
                }, {
                    "name": "建工学院"
                }, {
                    "name": "五里墩"
                }, {
                    "name": "黄山路"
                }, {
                    "name": "长江西路"
                }, {
                    "name": "梅山路"
                }, {
                    "name": "二环路"
                }, {
                    "name": "龙河路"
                }, {
                    "name": "望江路"
                }, {
                    "name": "海关路"
                }, {
                    "name": "石台路"
                }, {
                    "name": "软件园"
                }, {
                    "name": "大铺头"
                }, {
                    "name": "史河路"
                }, {
                    "name": "三里庵"
                }, {
                    "name": "淠河路"
                }, {
                    "name": "科技园"
                }, {
                    "name": "井岗"
                }, {
                    "name": "清溪路"
                }, {
                    "name": "玉兰新村"
                }, {
                    "name": "东至路"
                }, {
                    "name": "奥林花园"
                }, {
                    "name": "安居苑"
                }, {
                    "name": "潜山路"
                }, {
                    "name": "荷叶地"
                }, {
                    "name": "岳西路"
                }, {
                    "name": "安徽农业大学"
                }, {
                    "name": "翠竹园"
                }, {
                    "name": "二里街"
                }, {
                    "name": "陈村路"
                }, {
                    "name": "安徽大学"
                }, {
                    "name": "新加坡花园城"
                }, {
                    "name": "环湖东路"
                }, {
                    "name": "明珠广场"
                }, {
                    "name": "合作化南路"
                }, {
                    "name": "梦园小区"
                }, {
                    "name": "仪表厂"
                }, {
                    "name": "桃花"
                }, {
                    "name": "樊洼路"
                }, {
                    "name": "琥珀山庄"
                }, {
                    "name": "卫楼"
                }, {
                    "name": "蜀山其他"
                }, {
                    "name": "西园新村"
                }, {
                    "name": "科技大学"
                }, {
                    "name": "西站"
                }, {
                    "name": "霍山路"
                }, {
                    "name": "其他"
                }],
                "name": "蜀山区"
            }, {
                "children": [{
                    "name": "合肥工业大学"
                }, {
                    "name": "宣城路"
                }, {
                    "name": "金寨路"
                }, {
                    "name": "王大郢"
                }, {
                    "name": "风和园"
                }, {
                    "name": "宁国路"
                }, {
                    "name": "姚公庙"
                }, {
                    "name": "九华山路"
                }, {
                    "name": "稻香楼"
                }, {
                    "name": "义兴"
                }, {
                    "name": "骆岗"
                }, {
                    "name": "芜湖路"
                }, {
                    "name": "东流路"
                }, {
                    "name": "合家福购物广场"
                }, {
                    "name": "东陈岗"
                }, {
                    "name": "十五里河"
                }, {
                    "name": "包河公园"
                }, {
                    "name": "文昌新村"
                }, {
                    "name": "大钟楼"
                }, {
                    "name": "曙光新村"
                }, {
                    "name": "桐城路"
                }, {
                    "name": "包河其他"
                }, {
                    "name": "宿松路"
                }, {
                    "name": "太湖路"
                }, {
                    "name": "二中"
                }, {
                    "name": "义城"
                }, {
                    "name": "周谷堆"
                }, {
                    "name": "屯溪路"
                }, {
                    "name": "马鞍山路"
                }, {
                    "name": "葛大店"
                }, {
                    "name": "常青"
                }, {
                    "name": "大圩"
                }, {
                    "name": "铁四局"
                }, {
                    "name": "巢湖路"
                }, {
                    "name": "卫岗"
                }, {
                    "name": "梁园路"
                }, {
                    "name": "南园新村"
                }, {
                    "name": "前进巷"
                }, {
                    "name": "世纪阳光花园"
                }, {
                    "name": "其他"
                }],
                "name": "包河区"
            }, {
                "children": [{
                    "name": "岗集"
                }, {
                    "name": "杨庙"
                }, {
                    "name": "双墩"
                }, {
                    "name": "吴山"
                }, {
                    "name": "水湖"
                }, {
                    "name": "其他"
                }],
                "name": "长丰县"
            }, {
                "children": [{
                    "name": "梁园"
                }, {
                    "name": "古城"
                }, {
                    "name": "撮镇"
                }, {
                    "name": "店埠"
                }, {
                    "name": "龙塘"
                }, {
                    "name": "其他"
                }],
                "name": "肥东县"
            }, {
                "children": [{
                    "name": "农兴"
                }, {
                    "name": "小庙"
                }, {
                    "name": "上派"
                }, {
                    "name": "官亭"
                }, {
                    "name": "三河"
                }, {
                    "name": "其他"
                }],
                "name": "肥西县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "芜湖",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "镜湖区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "马塘区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "新芜区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "鸠江区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "芜湖县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "繁昌县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "南陵县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "弋江区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "三山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "蚌埠",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "龙子湖区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "蚌山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "禹会区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "淮上区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "怀远县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "五河县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "固镇县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "淮南",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "大通区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "田家庵区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "谢家集区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "八公山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "潘集区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "凤台县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "马鞍山",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "金家庄区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "花山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "雨山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "当涂县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "淮北",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "杜集区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "相山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "烈山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "濉溪县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "铜陵",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "铜官山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "狮子山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "郊区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "铜陵县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "安庆",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "迎江区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "大观区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "郊区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "怀宁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "枞阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "潜山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "太湖县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宿松县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "望江县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "岳西县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "桐城"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宜秀区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "黄山",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "屯溪区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "黄山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "徽州区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "歙县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "休宁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "黟县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "祁门县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "滁州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "琅琊区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "南谯区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "来安县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "全椒县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "定远县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "凤阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "天长"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "明光"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "阜阳",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "颍州区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "颍东区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "颍泉区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "临泉县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "太和县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "阜南县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "颍上县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "界首"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "宿州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "埇桥区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "砀山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "萧县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "灵璧县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "泗县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "巢湖",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "居巢区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "庐江县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "无为县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "含山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "和县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "六安",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "金安区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "裕安区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "寿县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "霍邱县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "舒城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "金寨县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "霍山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "亳州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "谯城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "涡阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "蒙城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "利辛县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "池州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "贵池区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "东至县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "石台县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "青阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "宣城",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "宣州区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "郎溪县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "广德县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "泾县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "绩溪县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "旌德县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宁国"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }],
        "name": "安徽"
    },
    {
        "children": [{
            "name": "福州",
            "children": [{
                "children": [{
                    "name": "元帅路"
                }, {
                    "name": "东大路"
                }, {
                    "name": "乌山"
                }, {
                    "name": "立医院"
                }, {
                    "name": "津泰"
                }, {
                    "name": "安泰"
                }, {
                    "name": "东街口"
                }, {
                    "name": "福州广场"
                }, {
                    "name": "琴湖路"
                }, {
                    "name": "树汤路"
                }, {
                    "name": "温泉"
                }, {
                    "name": "达明路"
                }, {
                    "name": "江厝路"
                }, {
                    "name": "铜盘"
                }, {
                    "name": "福飞南路"
                }, {
                    "name": "体育中心"
                }, {
                    "name": "鼓西"
                }, {
                    "name": "洪山桥"
                }, {
                    "name": "湖头街"
                }, {
                    "name": "西禅寺"
                }, {
                    "name": "西营里"
                }, {
                    "name": "古乐路"
                }, {
                    "name": "斗池"
                }, {
                    "name": "委党校"
                }, {
                    "name": "鼓楼其他"
                }, {
                    "name": "福新路"
                }, {
                    "name": "北大路"
                }, {
                    "name": "西湖公园"
                }, {
                    "name": "华林路"
                }, {
                    "name": "鼓东"
                }, {
                    "name": "琴亭"
                }, {
                    "name": "湖前"
                }, {
                    "name": "通湖路"
                }, {
                    "name": "北环中路"
                }, {
                    "name": "三角井"
                }, {
                    "name": "双子星大厦"
                }, {
                    "name": "西洪路"
                }, {
                    "name": "屏西"
                }, {
                    "name": "永安街"
                }, {
                    "name": "侨雄"
                }, {
                    "name": "道山路"
                }, {
                    "name": "龙庭路"
                }, {
                    "name": "屏东"
                }, {
                    "name": "图书馆"
                }, {
                    "name": "六一北路"
                }, {
                    "name": "水部"
                }, {
                    "name": "五一广场"
                }, {
                    "name": "尚宾路"
                }, {
                    "name": "古田路"
                }, {
                    "name": "河南新村"
                }, {
                    "name": "五凤"
                }, {
                    "name": "湖东路"
                }, {
                    "name": "蒙古营"
                }, {
                    "name": "东水路"
                }, {
                    "name": "华大"
                }, {
                    "name": "五四路"
                }, {
                    "name": "井大路"
                }, {
                    "name": "金泉路"
                }, {
                    "name": "南街"
                }, {
                    "name": "屏山"
                }, {
                    "name": "仙塔街"
                }, {
                    "name": "梅峰"
                }, {
                    "name": "左海"
                }, {
                    "name": "杨桥东路"
                }, {
                    "name": "杨桥中路"
                }, {
                    "name": "其他"
                }],
                "name": "鼓楼区"
            }, {
                "children": [{
                    "name": "宁化"
                }, {
                    "name": "三桥"
                }, {
                    "name": "亚峰"
                }, {
                    "name": "高桥"
                }, {
                    "name": "台江步行街"
                }, {
                    "name": "宝龙"
                }, {
                    "name": "工业路"
                }, {
                    "name": "南公园"
                }, {
                    "name": "广达路"
                }, {
                    "name": "新港"
                }, {
                    "name": "白马河"
                }, {
                    "name": "文化宫"
                }, {
                    "name": "元洪城"
                }, {
                    "name": "白马中路"
                }, {
                    "name": "洋头口"
                }, {
                    "name": "后洲"
                }, {
                    "name": "国货西路"
                }, {
                    "name": "台江广场"
                }, {
                    "name": "祥坂路"
                }, {
                    "name": "台江其他"
                }, {
                    "name": "苍霞"
                }, {
                    "name": "洋中"
                }, {
                    "name": "排尾"
                }, {
                    "name": "长汀路"
                }, {
                    "name": "达道"
                }, {
                    "name": "荷泽"
                }, {
                    "name": "茶亭"
                }, {
                    "name": "下杭路"
                }, {
                    "name": "瀛洲"
                }, {
                    "name": "交通路"
                }, {
                    "name": "同德路"
                }, {
                    "name": "博美诗邦"
                }, {
                    "name": "五一路"
                }, {
                    "name": "凤凰新村"
                }, {
                    "name": "西二环南路"
                }, {
                    "name": "六一中路"
                }, {
                    "name": "中亭街"
                }, {
                    "name": "群众路"
                }, {
                    "name": "学军路"
                }, {
                    "name": "上海"
                }, {
                    "name": "浦东"
                }, {
                    "name": "安平小区"
                }, {
                    "name": "万象城"
                }, {
                    "name": "白马南路"
                }, {
                    "name": "义洲"
                }, {
                    "name": "鳌峰"
                }, {
                    "name": "八一七中路"
                }, {
                    "name": "闽江学院"
                }, {
                    "name": "永升城"
                }, {
                    "name": "其他"
                }],
                "name": "台江区"
            }, {
                "children": [{
                    "name": "白湖亭"
                }, {
                    "name": "金山工业"
                }, {
                    "name": "东升"
                }, {
                    "name": "六一南路"
                }, {
                    "name": "观海路"
                }, {
                    "name": "施埔"
                }, {
                    "name": "仓山科技园"
                }, {
                    "name": "临江"
                }, {
                    "name": "三叉街"
                }, {
                    "name": "榕城广场"
                }, {
                    "name": "学府"
                }, {
                    "name": "马榕"
                }, {
                    "name": "首山"
                }, {
                    "name": "种福寺"
                }, {
                    "name": "江边"
                }, {
                    "name": "上渡"
                }, {
                    "name": "浦下"
                }, {
                    "name": "三高路"
                }, {
                    "name": "浦上"
                }, {
                    "name": "建新"
                }, {
                    "name": "洪塘"
                }, {
                    "name": "三县洲大桥"
                }, {
                    "name": "高湖"
                }, {
                    "name": "福州展览城"
                }, {
                    "name": "下渡"
                }, {
                    "name": "仓前"
                }, {
                    "name": "仓山其他"
                }, {
                    "name": "对湖"
                }, {
                    "name": "上山路"
                }, {
                    "name": "福建农林大学"
                }, {
                    "name": "淮安"
                }, {
                    "name": "则徐大道"
                }, {
                    "name": "龙院"
                }, {
                    "name": "尤溪洲"
                }, {
                    "name": "福建师范大学"
                }, {
                    "name": "上三路"
                }, {
                    "name": "橘园洲"
                }, {
                    "name": "金山"
                }, {
                    "name": "洋洽"
                }, {
                    "name": "附中"
                }, {
                    "name": "其他"
                }],
                "name": "仓山区"
            }, {
                "children": [{
                    "name": "罗星"
                }, {
                    "name": "亭江"
                }, {
                    "name": "马尾"
                }, {
                    "name": "马尾其他"
                }, {
                    "name": "其他"
                }],
                "name": "马尾区"
            }, {
                "children": [{
                    "name": "秀山"
                }, {
                    "name": "茶会"
                }, {
                    "name": "二化"
                }, {
                    "name": "上洋"
                }, {
                    "name": "西园"
                }, {
                    "name": "东站"
                }, {
                    "name": "电建二公司"
                }, {
                    "name": "森林公园"
                }, {
                    "name": "福马路"
                }, {
                    "name": "五里亭"
                }, {
                    "name": "融侨东区"
                }, {
                    "name": "金鸡山路"
                }, {
                    "name": "肿瘤医院"
                }, {
                    "name": "九龙城"
                }, {
                    "name": "象园"
                }, {
                    "name": "前屿"
                }, {
                    "name": "火车站"
                }, {
                    "name": "王庄"
                }, {
                    "name": "古城"
                }, {
                    "name": "大名城"
                }, {
                    "name": "福新东路"
                }, {
                    "name": "茶园"
                }, {
                    "name": "紫阳"
                }, {
                    "name": "三木都田园"
                }, {
                    "name": "前横路"
                }, {
                    "name": "晋连路"
                }, {
                    "name": "溪口"
                }, {
                    "name": "化工路"
                }, {
                    "name": "桂山"
                }, {
                    "name": "福飞北路"
                }, {
                    "name": "三八路"
                }, {
                    "name": "新店"
                }, {
                    "name": "官前路"
                }, {
                    "name": "桂香"
                }, {
                    "name": "鼓山"
                }, {
                    "name": "国货东路"
                }, {
                    "name": "洋下"
                }, {
                    "name": "南平西路"
                }, {
                    "name": "斗门"
                }, {
                    "name": "长乐路"
                }, {
                    "name": "塔头"
                }, {
                    "name": "连潘"
                }, {
                    "name": "幸福城"
                }, {
                    "name": "晋安其他"
                }, {
                    "name": "岳峰"
                }, {
                    "name": "其他"
                }],
                "name": "晋安区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "闽侯县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "连江县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "罗源县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "闽清县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "永泰县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "平潭县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "福清"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "长乐"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "厦门",
            "children": [{
                "children": [{
                    "name": "白鹭洲公园"
                }, {
                    "name": "国贸"
                }, {
                    "name": "厦港"
                }, {
                    "name": "开元"
                }, {
                    "name": "厦禾路"
                }, {
                    "name": "莲花"
                }, {
                    "name": "莲前"
                }, {
                    "name": "文灶"
                }, {
                    "name": "嘉禾路"
                }, {
                    "name": "莲坂"
                }, {
                    "name": "轮渡"
                }, {
                    "name": "中华"
                }, {
                    "name": "滨海"
                }, {
                    "name": "火车站"
                }, {
                    "name": "筼筜"
                }, {
                    "name": "湖滨北路"
                }, {
                    "name": "胡里山"
                }, {
                    "name": "鼓浪屿"
                }, {
                    "name": "湖滨南路"
                }, {
                    "name": "中山路"
                }, {
                    "name": "理工学院"
                }, {
                    "name": "厦门大学"
                }, {
                    "name": "南普陀"
                }, {
                    "name": "非矿"
                }, {
                    "name": "禾祥西路"
                }, {
                    "name": "鹭江"
                }, {
                    "name": "前埔医院"
                }, {
                    "name": "七星西路"
                }, {
                    "name": "前埔村"
                }, {
                    "name": "松柏"
                }, {
                    "name": "思明其他"
                }, {
                    "name": "梧村"
                }, {
                    "name": "厦大医院"
                }, {
                    "name": "嘉莲"
                }, {
                    "name": "其他"
                }],
                "name": "思明区"
            }, {
                "children": [{
                    "name": "东孚"
                }, {
                    "name": "钟林路"
                }, {
                    "name": "石塘"
                }, {
                    "name": "沧虹路"
                }, {
                    "name": "海富路"
                }, {
                    "name": "海沧其他"
                }, {
                    "name": "新阳工业区"
                }, {
                    "name": "沧林路"
                }, {
                    "name": "其他"
                }],
                "name": "海沧区"
            }, {
                "children": [{
                    "name": "康乐"
                }, {
                    "name": "台湾街"
                }, {
                    "name": "金尚路"
                }, {
                    "name": "禾山"
                }, {
                    "name": "殿前"
                }, {
                    "name": "大唐世家"
                }, {
                    "name": "百乐园"
                }, {
                    "name": "江头"
                }, {
                    "name": "兴隆路"
                }, {
                    "name": "南山路"
                }, {
                    "name": "湖里公园"
                }, {
                    "name": "仙岳路"
                }, {
                    "name": "吕岭路"
                }, {
                    "name": "湖里大道"
                }, {
                    "name": "塘边"
                }, {
                    "name": "穆厝"
                }, {
                    "name": "湖里其他"
                }, {
                    "name": "嘉园路"
                }, {
                    "name": "东渡路"
                }, {
                    "name": "金山小区"
                }, {
                    "name": "其他"
                }],
                "name": "湖里区"
            }, {
                "children": [{
                    "name": "杏西路"
                }, {
                    "name": "集美其他"
                }, {
                    "name": "灌口"
                }, {
                    "name": "杏林"
                }, {
                    "name": "集美学村"
                }, {
                    "name": "石鼓路"
                }, {
                    "name": "同集南路"
                }, {
                    "name": "集源路"
                }, {
                    "name": "银江路"
                }, {
                    "name": "后溪"
                }, {
                    "name": "杏北路"
                }, {
                    "name": "杏东路"
                }, {
                    "name": "侨英"
                }, {
                    "name": "杏南路"
                }, {
                    "name": "印斗路"
                }, {
                    "name": "其他"
                }],
                "name": "集美区"
            }, {
                "children": [{
                    "name": "南门路"
                }, {
                    "name": "洪塘"
                }, {
                    "name": "汀溪"
                }, {
                    "name": "莲花"
                }, {
                    "name": "西柯"
                }, {
                    "name": "五显"
                }, {
                    "name": "大同"
                }, {
                    "name": "祥平"
                }, {
                    "name": "西桥路"
                }, {
                    "name": "银湖路"
                }, {
                    "name": "新民"
                }, {
                    "name": "同安其他"
                }, {
                    "name": "城南路"
                }, {
                    "name": "其他"
                }],
                "name": "同安区"
            }, {
                "children": [{
                    "name": "大嶝"
                }, {
                    "name": "马巷"
                }, {
                    "name": "新圩"
                }, {
                    "name": "新店"
                }, {
                    "name": "翔安其他"
                }, {
                    "name": "内厝"
                }, {
                    "name": "其他"
                }],
                "name": "翔安区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "莆田",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "城厢区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "涵江区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "荔城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "秀屿区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "仙游县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "三明",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "梅列区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "三元区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "明溪县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "清流县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宁化县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "大田县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "尤溪县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "沙县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "将乐县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "泰宁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "建宁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "永安"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "泉州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "鲤城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "丰泽区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "洛江区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "泉港区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "惠安县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "安溪县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "永春县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "德化县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "金门县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "石狮"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "晋江"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "南安"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "漳州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "芗城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "龙文区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "云霄县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "漳浦县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "诏安县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "长泰县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "东山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "南靖县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "平和县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "华安县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "龙海"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "南平",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "延平区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "顺昌县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "浦城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "光泽县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "松溪县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "政和县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "邵武"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "武夷山"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "建瓯"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "建阳"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "龙岩",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "新罗区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "长汀县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "永定县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "上杭县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "武平县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "连城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "漳平"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "宁德",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "蕉城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "霞浦县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "古田县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "屏南县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "寿宁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "周宁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "柘荣县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "福安"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "福鼎"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }],
        "name": "福建"
    },
    {
        "children": [{
            "name": "南昌",
            "children": [{
                "children": [{
                    "name": "五纬路"
                }, {
                    "name": "象山北路"
                }, {
                    "name": "青山路"
                }, {
                    "name": "二七北路"
                }, {
                    "name": "南京西路"
                }, {
                    "name": "子固路"
                }, {
                    "name": "八一公园"
                }, {
                    "name": "董家窑"
                }, {
                    "name": "文教路"
                }, {
                    "name": "东湖其他"
                }, {
                    "name": "豫章"
                }, {
                    "name": "八一桥"
                }, {
                    "name": "彭家桥"
                }, {
                    "name": "江西师大"
                }, {
                    "name": "榕门路"
                }, {
                    "name": "八一大道"
                }, {
                    "name": "工人文化宫"
                }, {
                    "name": "中山路"
                }, {
                    "name": "民德路"
                }, {
                    "name": "公园"
                }, {
                    "name": "政府"
                }, {
                    "name": "滕王阁"
                }, {
                    "name": "沙沟"
                }, {
                    "name": "三经路"
                }, {
                    "name": "大士院"
                }, {
                    "name": "爱国路"
                }, {
                    "name": "贤士花园"
                }, {
                    "name": "贤士湖"
                }, {
                    "name": "墩子塘"
                }, {
                    "name": "钟鼓楼"
                }, {
                    "name": "贤士二路"
                }, {
                    "name": "大院"
                }, {
                    "name": "百花洲"
                }, {
                    "name": "其他"
                }],
                "name": "东湖区"
            }, {
                "children": [{
                    "name": "司马庙"
                }, {
                    "name": "象山南路"
                }, {
                    "name": "南浦"
                }, {
                    "name": "广场东路"
                }, {
                    "name": "金盘"
                }, {
                    "name": "南柴"
                }, {
                    "name": "桃源"
                }, {
                    "name": "老福山"
                }, {
                    "name": "坛子口"
                }, {
                    "name": "孺子路"
                }, {
                    "name": "西湖其他"
                }, {
                    "name": "海关"
                }, {
                    "name": "南站"
                }, {
                    "name": "广场南路"
                }, {
                    "name": "丁公路"
                }, {
                    "name": "站前西路"
                }, {
                    "name": "广润门"
                }, {
                    "name": "朝阳洲"
                }, {
                    "name": "江电"
                }, {
                    "name": "洪城路"
                }, {
                    "name": "系马桩"
                }, {
                    "name": "桃花路"
                }, {
                    "name": "火车站"
                }, {
                    "name": "绳金塔"
                }, {
                    "name": "凉伞树"
                }, {
                    "name": "抚生路"
                }, {
                    "name": "十字街"
                }, {
                    "name": "其他"
                }],
                "name": "西湖区"
            }, {
                "children": [{
                    "name": "熊坊"
                }, {
                    "name": "解放西路"
                }, {
                    "name": "徐家坊"
                }, {
                    "name": "岱山"
                }, {
                    "name": "龙王庙"
                }, {
                    "name": "新溪桥"
                }, {
                    "name": "青云谱其他"
                }, {
                    "name": "井冈山"
                }, {
                    "name": "京山"
                }, {
                    "name": "洪都"
                }, {
                    "name": "三家店"
                }, {
                    "name": "迎宾北大道"
                }, {
                    "name": "其他"
                }],
                "name": "青云谱区"
            }, {
                "children": [{
                    "name": "梅岭"
                }, {
                    "name": "招贤"
                }, {
                    "name": "幸福"
                }, {
                    "name": "太平"
                }, {
                    "name": "其他"
                }],
                "name": "湾里区"
            }, {
                "children": [{
                    "name": "上海北路"
                }, {
                    "name": "天虹商场"
                }, {
                    "name": "京东"
                }, {
                    "name": "江大南路"
                }, {
                    "name": "塘山"
                }, {
                    "name": "长春村"
                }, {
                    "name": "学院路"
                }, {
                    "name": "财大"
                }, {
                    "name": "解放东路"
                }, {
                    "name": "上海路"
                }, {
                    "name": "沙井"
                }, {
                    "name": "火炬广场"
                }, {
                    "name": "南京东路"
                }, {
                    "name": "蛟桥"
                }, {
                    "name": "高新开发区"
                }, {
                    "name": "九村"
                }, {
                    "name": "罗家"
                }, {
                    "name": "孙家"
                }, {
                    "name": "铁路八村"
                }, {
                    "name": "铁路五村"
                }, {
                    "name": "发展路"
                }, {
                    "name": "湖坊"
                }, {
                    "name": "顺外路"
                }, {
                    "name": "青山湖其他"
                }, {
                    "name": "其他"
                }],
                "name": "青山湖区"
            }, {
                "children": [{
                    "name": "莲塘"
                }, {
                    "name": "昌东"
                }, {
                    "name": "向塘"
                }, {
                    "name": "麻丘"
                }, {
                    "name": "蓝天学院"
                }, {
                    "name": "蒋巷"
                }, {
                    "name": "其他"
                }],
                "name": "南昌县"
            }, {
                "children": [{
                    "name": "象山"
                }, {
                    "name": "松湖"
                }, {
                    "name": "望城"
                }, {
                    "name": "七里岗"
                }, {
                    "name": "溪霞"
                }, {
                    "name": "其他"
                }],
                "name": "新建县"
            }, {
                "children": [{
                    "name": "鼎湖"
                }, {
                    "name": "龙津"
                }, {
                    "name": "其他"
                }],
                "name": "安义县"
            }, {
                "children": [{
                    "name": "民和"
                }, {
                    "name": "温圳"
                }, {
                    "name": "文港"
                }, {
                    "name": "其他"
                }],
                "name": "进贤县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "景德镇",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "昌江区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "珠山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "浮梁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "乐平"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "萍乡",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "安源区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "湘东区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "莲花县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "上栗县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "芦溪县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "九江",
            "children": [{
                "children": [{
                    "name": "十里"
                }, {
                    "name": "五里"
                }, {
                    "name": "七里湖"
                }, {
                    "name": "其他"
                }],
                "name": "庐山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "浔阳区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "九江县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "武宁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "修水县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "永修县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "德安县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "星子县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "都昌县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "湖口县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "彭泽县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "瑞昌"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "新余",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "渝水区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "分宜县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "鹰潭",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "月湖区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "余江县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "贵溪"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "赣州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "章贡区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "赣县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "信丰县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "大余县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "上犹县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "崇义县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "安远县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "龙南县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "定南县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "全南县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宁都县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "于都县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "兴国县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "会昌县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "寻乌县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "石城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "瑞金"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "南康"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "吉安",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "吉州区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "青原区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "吉安县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "吉水县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "峡江县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "新干县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "永丰县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "泰和县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "遂川县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "万安县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "安福县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "永新县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "井冈山"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "宜春",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "袁州区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "奉新县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "万载县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "上高县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宜丰县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "靖安县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "铜鼓县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "丰城"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "樟树"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "高安"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "抚州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "临川区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "南城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "黎川县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "南丰县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "崇仁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "乐安县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宜黄县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "金溪县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "资溪县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "东乡县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "广昌县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "上饶",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "信州区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "上饶县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "广丰县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "玉山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "铅山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "横峰县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "弋阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "余干县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "鄱阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "万年县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "婺源县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "德兴"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }],
        "name": "江西"
    },
    {
        "children": [{
            "name": "济南",
            "children": [{
                "children": [{
                    "name": "窑头路"
                }, {
                    "name": "山东经济学院"
                }, {
                    "name": "齐鲁软件园"
                }, {
                    "name": "山大南路"
                }, {
                    "name": "青龙桥"
                }, {
                    "name": "公交总公司"
                }, {
                    "name": "黑虎泉"
                }, {
                    "name": "文化西路"
                }, {
                    "name": "浆水泉"
                }, {
                    "name": "解放路"
                }, {
                    "name": "千佛山公园"
                }, {
                    "name": "花园庄"
                }, {
                    "name": "长盛小区"
                }, {
                    "name": "文化东路"
                }, {
                    "name": "泉城广场"
                }, {
                    "name": "燕山立交桥"
                }, {
                    "name": "千佛山西路"
                }, {
                    "name": "趵突泉"
                }, {
                    "name": "山师东路"
                }, {
                    "name": "华阳路"
                }, {
                    "name": "解放东路"
                }, {
                    "name": "东门"
                }, {
                    "name": "和平路"
                }, {
                    "name": "泉城路"
                }, {
                    "name": "历山东路"
                }, {
                    "name": "羊头峪"
                }, {
                    "name": "环山路"
                }, {
                    "name": "燕子山路"
                }, {
                    "name": "司里街"
                }, {
                    "name": "山大路"
                }, {
                    "name": "中心医院"
                }, {
                    "name": "十里河"
                }, {
                    "name": "舜怡佳园"
                }, {
                    "name": "中医"
                }, {
                    "name": "泺源"
                }, {
                    "name": "燕山小区"
                }, {
                    "name": "朝山街"
                }, {
                    "name": "甸柳庄"
                }, {
                    "name": "东关"
                }, {
                    "name": "东郊饭店"
                }, {
                    "name": "青年西路"
                }, {
                    "name": "燕子山西路"
                }, {
                    "name": "华能路"
                }, {
                    "name": "甸柳新村"
                }, {
                    "name": "银座商城"
                }, {
                    "name": "博物馆"
                }, {
                    "name": "大学科技园"
                }, {
                    "name": "化纤厂路"
                }, {
                    "name": "齐鲁医院"
                }, {
                    "name": "县东巷"
                }, {
                    "name": "黄台南路"
                }, {
                    "name": "建筑新村"
                }, {
                    "name": "大明湖"
                }, {
                    "name": "历下其他"
                }, {
                    "name": "其他"
                }],
                "name": "历下区"
            }, {
                "children": [{
                    "name": "纬二路"
                }, {
                    "name": "山东财政学院"
                }, {
                    "name": "大观园"
                }, {
                    "name": "济大路"
                }, {
                    "name": "山西路"
                }, {
                    "name": "二七新村"
                }, {
                    "name": "杆石桥"
                }, {
                    "name": "舜玉路"
                }, {
                    "name": "经八路"
                }, {
                    "name": "梁家庄"
                }, {
                    "name": "魏家庄"
                }, {
                    "name": "共青团路"
                }, {
                    "name": "土屋路"
                }, {
                    "name": "纬四路"
                }, {
                    "name": "经二路"
                }, {
                    "name": "二环南路"
                }, {
                    "name": "岔路街"
                }, {
                    "name": "玉函路"
                }, {
                    "name": "七里山"
                }, {
                    "name": "纬一路"
                }, {
                    "name": "王官庄"
                }, {
                    "name": "体育中心"
                }, {
                    "name": "英雄山"
                }, {
                    "name": "四里村"
                }, {
                    "name": "经七路"
                }, {
                    "name": "卧龙花园"
                }, {
                    "name": "小纬六路"
                }, {
                    "name": "政府"
                }, {
                    "name": "经五路"
                }, {
                    "name": "八一立交桥"
                }, {
                    "name": "六里山"
                }, {
                    "name": "白马山南路"
                }, {
                    "name": "建设路"
                }, {
                    "name": "大众广场"
                }, {
                    "name": "南苑小区"
                }, {
                    "name": "马鞍山"
                }, {
                    "name": "胜利大街"
                }, {
                    "name": "经十路"
                }, {
                    "name": "林业局"
                }, {
                    "name": "四季花园"
                }, {
                    "name": "馆驿街"
                }, {
                    "name": "人民商场"
                }, {
                    "name": "中其他"
                }, {
                    "name": "纬三路"
                }, {
                    "name": "阳光舜城"
                }, {
                    "name": "刘长山路"
                }, {
                    "name": "白马家园"
                }, {
                    "name": "东八里洼"
                }, {
                    "name": "其他"
                }],
                "name": "中区"
            }, {
                "children": [{
                    "name": "纬六路"
                }, {
                    "name": "营西街"
                }, {
                    "name": "槐荫其他"
                }, {
                    "name": "明星小区"
                }, {
                    "name": "机床二厂路"
                }, {
                    "name": "八里桥"
                }, {
                    "name": "匡山"
                }, {
                    "name": "营街"
                }, {
                    "name": "中大槐树"
                }, {
                    "name": "振兴街"
                }, {
                    "name": "道德街"
                }, {
                    "name": "经二纬六"
                }, {
                    "name": "经四路"
                }, {
                    "name": "经三路"
                }, {
                    "name": "经六路"
                }, {
                    "name": "闫千户小区"
                }, {
                    "name": "青年公园"
                }, {
                    "name": "经七纬八"
                }, {
                    "name": "纬十二路"
                }, {
                    "name": "经三纬七"
                }, {
                    "name": "五里牌坊"
                }, {
                    "name": "经七纬十二"
                }, {
                    "name": "大金庄"
                }, {
                    "name": "经十西路"
                }, {
                    "name": "二环西路"
                }, {
                    "name": "张庄路"
                }, {
                    "name": "西场"
                }, {
                    "name": "经五纬六"
                }, {
                    "name": "段店北路"
                }, {
                    "name": "纬五路"
                }, {
                    "name": "德兴街"
                }, {
                    "name": "南辛庄"
                }, {
                    "name": "立医院"
                }, {
                    "name": "经一路"
                }, {
                    "name": "美里湖"
                }, {
                    "name": "小辛庄"
                }, {
                    "name": "纬九路"
                }, {
                    "name": "纬七路"
                }, {
                    "name": "其他"
                }],
                "name": "槐荫区"
            }, {
                "children": [{
                    "name": "天桥东街"
                }, {
                    "name": "北关"
                }, {
                    "name": "清河路"
                }, {
                    "name": "北坦大街"
                }, {
                    "name": "泺安路"
                }, {
                    "name": "水屯路"
                }, {
                    "name": "堤口路"
                }, {
                    "name": "交校路"
                }, {
                    "name": "天桥其他"
                }, {
                    "name": "太平洋小区"
                }, {
                    "name": "凤凰山路"
                }, {
                    "name": "柳云小区"
                }, {
                    "name": "三孔桥"
                }, {
                    "name": "标山南路"
                }, {
                    "name": "交通学院"
                }, {
                    "name": "少年宫"
                }, {
                    "name": "泺口"
                }, {
                    "name": "北园大街"
                }, {
                    "name": "历山北路"
                }, {
                    "name": "陈家楼"
                }, {
                    "name": "生产路"
                }, {
                    "name": "刘家庄"
                }, {
                    "name": "长途汽车站"
                }, {
                    "name": "东西丹凤街"
                }, {
                    "name": "师范路"
                }, {
                    "name": "无影山"
                }, {
                    "name": "官扎营"
                }, {
                    "name": "工人新村"
                }, {
                    "name": "济齐路"
                }, {
                    "name": "联四路"
                }, {
                    "name": "纬北路"
                }, {
                    "name": "宝华街"
                }, {
                    "name": "凤凰山南路"
                }, {
                    "name": "水屯北路"
                }, {
                    "name": "立四院"
                }, {
                    "name": "药山"
                }, {
                    "name": "制锦小区"
                }, {
                    "name": "无影山北路"
                }, {
                    "name": "天成路"
                }, {
                    "name": "金牛小区"
                }, {
                    "name": "火车站"
                }, {
                    "name": "其他"
                }],
                "name": "天桥区"
            }, {
                "children": [{
                    "name": "花园小区"
                }, {
                    "name": "华信路"
                }, {
                    "name": "东风"
                }, {
                    "name": "山大北路"
                }, {
                    "name": "七里河"
                }, {
                    "name": "桑园路"
                }, {
                    "name": "历城其他"
                }, {
                    "name": "洪楼广场"
                }, {
                    "name": "济南炼油厂"
                }, {
                    "name": "齐鲁制药"
                }, {
                    "name": "工业北路"
                }, {
                    "name": "华山镇"
                }, {
                    "name": "洪楼西路"
                }, {
                    "name": "辛祝路"
                }, {
                    "name": "益寿路"
                }, {
                    "name": "盖家沟"
                }, {
                    "name": "花园路"
                }, {
                    "name": "闵子骞路"
                }, {
                    "name": "东方花园"
                }, {
                    "name": "将军路"
                }, {
                    "name": "华龙路"
                }, {
                    "name": "七里堡"
                }, {
                    "name": "百花公园"
                }, {
                    "name": "洪家楼"
                }, {
                    "name": "还乡店"
                }, {
                    "name": "全福"
                }, {
                    "name": "南全福小区"
                }, {
                    "name": "鑫达小区"
                }, {
                    "name": "洪楼南路"
                }, {
                    "name": "二环东路"
                }, {
                    "name": "其他"
                }],
                "name": "历城区"
            }, {
                "children": [{
                    "name": "长清其他"
                }, {
                    "name": "五峰山"
                }, {
                    "name": "平安"
                }, {
                    "name": "文昌"
                }, {
                    "name": "崮云湖"
                }, {
                    "name": "其他"
                }],
                "name": "长清区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "平阴县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "济阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "商河县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "章丘"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "青岛",
            "children": [{
                "children": [{
                    "name": "团岛"
                }, {
                    "name": "香港西路"
                }, {
                    "name": "漳浦路"
                }, {
                    "name": "闽江路"
                }, {
                    "name": "八大关"
                }, {
                    "name": "汇泉广场"
                }, {
                    "name": "北京路"
                }, {
                    "name": "大尧一路"
                }, {
                    "name": "延安三路"
                }, {
                    "name": "五四广场"
                }, {
                    "name": "前海"
                }, {
                    "name": "燕儿岛"
                }, {
                    "name": "香港中路"
                }, {
                    "name": "港西"
                }, {
                    "name": "台西"
                }, {
                    "name": "逍遥一路"
                }, {
                    "name": "政府"
                }, {
                    "name": "八大峡"
                }, {
                    "name": "四川路"
                }, {
                    "name": "辛家庄"
                }, {
                    "name": "浮山"
                }, {
                    "name": "贵州路"
                }, {
                    "name": "天山小区"
                }, {
                    "name": "泰州路"
                }, {
                    "name": "东海路"
                }, {
                    "name": "云霄路"
                }, {
                    "name": "福州南路"
                }, {
                    "name": "香港花园"
                }, {
                    "name": "宁夏路"
                }, {
                    "name": "南其他"
                }, {
                    "name": "绍兴路"
                }, {
                    "name": "八大湖"
                }, {
                    "name": "河南路"
                }, {
                    "name": "山东路"
                }, {
                    "name": "湛山"
                }, {
                    "name": "珠海路"
                }, {
                    "name": "福州北路"
                }, {
                    "name": "大学路"
                }, {
                    "name": "古田路"
                }, {
                    "name": "广州路"
                }, {
                    "name": "金湖路"
                }, {
                    "name": "福苑小区"
                }, {
                    "name": "火车站"
                }, {
                    "name": "中山路"
                }, {
                    "name": "云南路"
                }, {
                    "name": "汕头路"
                }, {
                    "name": "图书馆"
                }, {
                    "name": "金门路"
                }, {
                    "name": "逍遥二路"
                }, {
                    "name": "栈桥"
                }, {
                    "name": "徐州路"
                }, {
                    "name": "江苏路"
                }, {
                    "name": "广电大厦"
                }, {
                    "name": "江西路"
                }, {
                    "name": "其他"
                }],
                "name": "南区"
            }, {
                "children": [{
                    "name": "延安一路"
                }, {
                    "name": "德平路"
                }, {
                    "name": "吴兴路"
                }, {
                    "name": "埠西"
                }, {
                    "name": "丰盛路"
                }, {
                    "name": "合肥路"
                }, {
                    "name": "镇江北路"
                }, {
                    "name": "顺兴路"
                }, {
                    "name": "错埠岭"
                }, {
                    "name": "延安二路"
                }, {
                    "name": "即墨路"
                }, {
                    "name": "铁山路"
                }, {
                    "name": "台东"
                }, {
                    "name": "南京路北段"
                }, {
                    "name": "标山路"
                }, {
                    "name": "伊春路"
                }, {
                    "name": "登州路"
                }, {
                    "name": "胶州路"
                }, {
                    "name": "云溪路"
                }, {
                    "name": "儿童公园"
                }, {
                    "name": "内蒙古路"
                }, {
                    "name": "大成路"
                }, {
                    "name": "辽阳西路"
                }, {
                    "name": "大连路"
                }, {
                    "name": "大港"
                }, {
                    "name": "大名路"
                }, {
                    "name": "立医院"
                }, {
                    "name": "利津路"
                }, {
                    "name": "北仲路"
                }, {
                    "name": "九水路"
                }, {
                    "name": "冠县路"
                }, {
                    "name": "十五中"
                }, {
                    "name": "镇江路"
                }, {
                    "name": "洮南路"
                }, {
                    "name": "太清路"
                }, {
                    "name": "浮山新区"
                }, {
                    "name": "甘肃路"
                }, {
                    "name": "洪山坡"
                }, {
                    "name": "热河路"
                }, {
                    "name": "黄台路"
                }, {
                    "name": "广饶路"
                }, {
                    "name": "齐东路"
                }, {
                    "name": "长春路"
                }, {
                    "name": "同安路"
                }, {
                    "name": "敦化路"
                }, {
                    "name": "辽源路"
                }, {
                    "name": "松山路"
                }, {
                    "name": "北其他"
                }, {
                    "name": "场三路"
                }, {
                    "name": "南口路"
                }, {
                    "name": "辽宁路"
                }, {
                    "name": "金坛路"
                }, {
                    "name": "华阳路"
                }, {
                    "name": "威海路"
                }, {
                    "name": "延安路"
                }, {
                    "name": "通山路"
                }, {
                    "name": "海信立交"
                }, {
                    "name": "延吉路"
                }, {
                    "name": "其他"
                }],
                "name": "北区"
            }, {
                "children": [{
                    "name": "九江路"
                }, {
                    "name": "哈尔滨路"
                }, {
                    "name": "嘉善路"
                }, {
                    "name": "人民路"
                }, {
                    "name": "平安路"
                }, {
                    "name": "兴隆一路"
                }, {
                    "name": "商水路"
                }, {
                    "name": "宣化路"
                }, {
                    "name": "小村庄"
                }, {
                    "name": "温州路"
                }, {
                    "name": "鞍山二路"
                }, {
                    "name": "海泊桥"
                }, {
                    "name": "康宁路"
                }, {
                    "name": "四流南路"
                }, {
                    "name": "北岭"
                }, {
                    "name": "理工大学"
                }, {
                    "name": "阜新路"
                }, {
                    "name": "长沙路"
                }, {
                    "name": "抚顺路"
                }, {
                    "name": "海琴广场"
                }, {
                    "name": "人民一路"
                }, {
                    "name": "河西"
                }, {
                    "name": "人民二路"
                }, {
                    "name": "海云庵"
                }, {
                    "name": "宁化路"
                }, {
                    "name": "南昌路"
                }, {
                    "name": "萍乡路"
                }, {
                    "name": "都昌路"
                }, {
                    "name": "昌化路"
                }, {
                    "name": "长途汽车站"
                }, {
                    "name": "湖岛"
                }, {
                    "name": "兴隆路"
                }, {
                    "name": "四方其他"
                }, {
                    "name": "安达路"
                }, {
                    "name": "海伦路"
                }, {
                    "name": "宜阳路"
                }, {
                    "name": "台柳路"
                }, {
                    "name": "南丰路"
                }, {
                    "name": "开平路"
                }, {
                    "name": "兴德路"
                }, {
                    "name": "杭州路"
                }, {
                    "name": "洛阳路"
                }, {
                    "name": "周口路"
                }, {
                    "name": "嘉定路"
                }, {
                    "name": "商丘路"
                }, {
                    "name": "重庆南路"
                }, {
                    "name": "水清沟"
                }, {
                    "name": "铁岭路"
                }, {
                    "name": "嘉禾路"
                }, {
                    "name": "嘉定山"
                }, {
                    "name": "鞍山路"
                }, {
                    "name": "鞍山一路"
                }, {
                    "name": "淮阳路"
                }, {
                    "name": "瑞昌路"
                }, {
                    "name": "嘉兴路"
                }, {
                    "name": "双山"
                }, {
                    "name": "商城路"
                }, {
                    "name": "南宁路"
                }, {
                    "name": "其他"
                }],
                "name": "四方区"
            }, {
                "children": [{
                    "name": "薛家岛"
                }, {
                    "name": "柳花泊"
                }, {
                    "name": "红石崖"
                }, {
                    "name": "辛安"
                }, {
                    "name": "长江路"
                }, {
                    "name": "黄岛其他"
                }, {
                    "name": "其他"
                }],
                "name": "黄岛区"
            }, {
                "children": [{
                    "name": "中韩"
                }, {
                    "name": "山东头"
                }, {
                    "name": "会展中心"
                }, {
                    "name": "松岭路"
                }, {
                    "name": "北村"
                }, {
                    "name": "麦岛"
                }, {
                    "name": "王哥庄"
                }, {
                    "name": "石老人"
                }, {
                    "name": "麦岛大学区"
                }, {
                    "name": "香港东路"
                }, {
                    "name": "辽阳路"
                }, {
                    "name": "北宅"
                }, {
                    "name": "海尔路"
                }, {
                    "name": "崂山其他"
                }, {
                    "name": "沙子口"
                }, {
                    "name": "王家村"
                }, {
                    "name": "其他"
                }],
                "name": "崂山区"
            }, {
                "children": [{
                    "name": "楼山"
                }, {
                    "name": "君峰路"
                }, {
                    "name": "郑庄"
                }, {
                    "name": "向阳路"
                }, {
                    "name": "古镇路"
                }, {
                    "name": "南渠"
                }, {
                    "name": "果园路"
                }, {
                    "name": "东山"
                }, {
                    "name": "南庄"
                }, {
                    "name": "京口"
                }, {
                    "name": "兴华路"
                }, {
                    "name": "振华路"
                }, {
                    "name": "青峰路"
                }, {
                    "name": "浮山路"
                }, {
                    "name": "唐山路"
                }, {
                    "name": "少山路"
                }, {
                    "name": "桃园"
                }, {
                    "name": "侯家庄"
                }, {
                    "name": "虎山路"
                }, {
                    "name": "峰山"
                }, {
                    "name": "永安路"
                }, {
                    "name": "西山"
                }, {
                    "name": "书院路"
                }, {
                    "name": "大崂路"
                }, {
                    "name": "兴山路"
                }, {
                    "name": "夏庄路"
                }, {
                    "name": "永清路"
                }, {
                    "name": "邢台路"
                }, {
                    "name": "湘潭路"
                }, {
                    "name": "升平路"
                }, {
                    "name": "青山路"
                }, {
                    "name": "百通馨苑"
                }, {
                    "name": "兴城路"
                }, {
                    "name": "四流中路"
                }, {
                    "name": "枣园"
                }, {
                    "name": "李村"
                }, {
                    "name": "三中"
                }, {
                    "name": "永平路"
                }, {
                    "name": "重庆中路"
                }, {
                    "name": "源头路"
                }, {
                    "name": "中崂路"
                }, {
                    "name": "李沧其他"
                }, {
                    "name": "沧口"
                }, {
                    "name": "其他"
                }],
                "name": "李沧区"
            }, {
                "children": [{
                    "name": "李家女姑"
                }, {
                    "name": "红岛"
                }, {
                    "name": "大北曲"
                }, {
                    "name": "小寨子"
                }, {
                    "name": "长城路"
                }, {
                    "name": "夏庄"
                }, {
                    "name": "人民医院"
                }, {
                    "name": "上马"
                }, {
                    "name": "小北曲"
                }, {
                    "name": "城阳其他"
                }, {
                    "name": "正阳路"
                }, {
                    "name": "流亭"
                }, {
                    "name": "明阳路"
                }, {
                    "name": "惜福"
                }, {
                    "name": "棘洪滩"
                }, {
                    "name": "华城路"
                }, {
                    "name": "中城路"
                }, {
                    "name": "杨埠寨"
                }, {
                    "name": "其他"
                }],
                "name": "城阳区"
            }, {
                "children": [{
                    "name": "阜安"
                }, {
                    "name": "云溪"
                }, {
                    "name": "南关"
                }, {
                    "name": "中云"
                }, {
                    "name": "北关"
                }, {
                    "name": "其他"
                }],
                "name": "胶州"
            }, {
                "children": [{
                    "name": "龙山"
                }, {
                    "name": "通济"
                }, {
                    "name": "环秀"
                }, {
                    "name": "北安"
                }, {
                    "name": "潮海"
                }, {
                    "name": "其他"
                }],
                "name": "即墨"
            }, {
                "children": [{
                    "name": "同和"
                }, {
                    "name": "李园"
                }, {
                    "name": "香店"
                }, {
                    "name": "城关"
                }, {
                    "name": "其他"
                }],
                "name": "平度"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "胶南"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "莱西"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "淄博",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "淄川区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "张店区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "博山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "临淄区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "周村区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "桓台县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "高青县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "沂源县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "枣庄",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "中区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "薛城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "峄城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "台儿庄区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "山亭区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "滕州"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "东营",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "东营区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "河口区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "垦利县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "利津县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "广饶县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "烟台",
            "children": [{
                "children": [{
                    "name": "凤凰台"
                }, {
                    "name": "芝罘岛"
                }, {
                    "name": "幸福"
                }, {
                    "name": "黄务"
                }, {
                    "name": "世回尧"
                }, {
                    "name": "奇山"
                }, {
                    "name": "通伸"
                }, {
                    "name": "向阳"
                }, {
                    "name": "毓璜顶"
                }, {
                    "name": "金沟寨"
                }, {
                    "name": "东山"
                }, {
                    "name": "只楚"
                }, {
                    "name": "白石"
                }, {
                    "name": "芝罘其他"
                }, {
                    "name": "其他"
                }],
                "name": "芝罘区"
            }, {
                "children": [{
                    "name": "福山其他"
                }, {
                    "name": "古现"
                }, {
                    "name": "高疃"
                }, {
                    "name": "清洋"
                }, {
                    "name": "其他"
                }],
                "name": "福山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "牟平区"
            }, {
                "children": [{
                    "name": "曹家"
                }, {
                    "name": "初家"
                }, {
                    "name": "石沟屯"
                }, {
                    "name": "黄海城花园"
                }, {
                    "name": "莱山其他"
                }, {
                    "name": "清泉寨"
                }, {
                    "name": "其他"
                }],
                "name": "莱山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "长岛县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "龙口"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "莱阳"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "莱州"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "蓬莱"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "招远"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "栖霞"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "海阳"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "潍坊",
            "children": [{
                "children": [{
                    "name": "潍城其他"
                }, {
                    "name": "和平路"
                }, {
                    "name": "青年路"
                }, {
                    "name": "春鸢路"
                }, {
                    "name": "其他"
                }],
                "name": "潍城区"
            }, {
                "children": [{
                    "name": "丰华路"
                }, {
                    "name": "寒亭其他"
                }, {
                    "name": "其他"
                }],
                "name": "寒亭区"
            }, {
                "children": [{
                    "name": "坊子其他"
                }, {
                    "name": "恒安"
                }, {
                    "name": "其他"
                }],
                "name": "坊子区"
            }, {
                "children": [{
                    "name": "鸢飞路"
                }, {
                    "name": "奎文其他"
                }, {
                    "name": "其他"
                }],
                "name": "奎文区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "临朐县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "昌乐县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "青州"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "诸城"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "寿光"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "安丘"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "高密"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "昌邑"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "济宁",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "中区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "任城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "微山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "鱼台县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "金乡县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "嘉祥县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "汶上县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "泗水县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "梁山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "曲阜"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "兖州"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "邹城"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "泰安",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "泰山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "岱岳区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宁阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "东平县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "新泰"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "肥城"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "威海",
            "children": [{
                "children": [{
                    "name": "桥头"
                }, {
                    "name": "温泉"
                }, {
                    "name": "初村"
                }, {
                    "name": "张村"
                }, {
                    "name": "羊亭"
                }, {
                    "name": "草庙子"
                }, {
                    "name": "孙家疃"
                }, {
                    "name": "其他"
                }],
                "name": "环翠区"
            }, {
                "children": [{
                    "name": "张家产"
                }, {
                    "name": "苘山"
                }, {
                    "name": "其他"
                }],
                "name": "文登"
            }, {
                "children": [{
                    "name": "成山"
                }, {
                    "name": "港西"
                }, {
                    "name": "宁津"
                }, {
                    "name": "大疃"
                }, {
                    "name": "崖头"
                }, {
                    "name": "人和"
                }, {
                    "name": "其他"
                }],
                "name": "荣成"
            }, {
                "children": [{
                    "name": "大孤山"
                }, {
                    "name": "夏村"
                }, {
                    "name": "海阳所"
                }, {
                    "name": "其他"
                }],
                "name": "乳山"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "日照",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "东港区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "岚山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "五莲县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "莒县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "莱芜",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "莱城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "钢城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "临沂",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "兰山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "罗庄区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "河东区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "沂南县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "郯城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "沂水县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "苍山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "费县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "平邑县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "莒南县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "蒙阴县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "临沭县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "德州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "德城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "陵县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宁津县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "庆云县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "临邑县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "齐河县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "平原县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "夏津县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "武城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "乐陵"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "禹城"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "聊城",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "东昌府区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "阳谷县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "莘县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "茌平县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "东阿县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "冠县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "高唐县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "临清"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "滨州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "滨城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "惠民县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "阳信县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "无棣县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "沾化县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "博兴县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "邹平县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "荷泽",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "牡丹区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "曹县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "单县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "成武县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "巨野县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "郓城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "鄄城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "定陶县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "东明县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }],
        "name": "山东"
    },
    {
        "children": [{
            "name": "郑州",
            "children": [{
                "children": [{
                    "name": "嵩山北路"
                }, {
                    "name": "场街"
                }, {
                    "name": "林山寨"
                }, {
                    "name": "须水镇"
                }, {
                    "name": "湖光苑"
                }, {
                    "name": "前进路"
                }, {
                    "name": "互助路"
                }, {
                    "name": "秦岭路"
                }, {
                    "name": "百花路"
                }, {
                    "name": "帝湖花园"
                }, {
                    "name": "棉纺路"
                }, {
                    "name": "汝河路"
                }, {
                    "name": "西环路"
                }, {
                    "name": "三官庙"
                }, {
                    "name": "航海西路"
                }, {
                    "name": "华山路"
                }, {
                    "name": "绿东村"
                }, {
                    "name": "岗坡路"
                }, {
                    "name": "桐柏路"
                }, {
                    "name": "华淮小区"
                }, {
                    "name": "儿童公园"
                }, {
                    "name": "伊河路"
                }, {
                    "name": "十里铺"
                }, {
                    "name": "伏牛路"
                }, {
                    "name": "冉屯路"
                }, {
                    "name": "中原其他"
                }, {
                    "name": "工人路"
                }, {
                    "name": "淮河路"
                }, {
                    "name": "纺织大世界"
                }, {
                    "name": "建设路"
                }, {
                    "name": "碧沙岗"
                }, {
                    "name": "西站"
                }, {
                    "name": "委"
                }, {
                    "name": "文化宫路"
                }, {
                    "name": "陇海西路"
                }, {
                    "name": "其他"
                }],
                "name": "中原区"
            }, {
                "children": [{
                    "name": "建新街"
                }, {
                    "name": "交通路"
                }, {
                    "name": "郑密路"
                }, {
                    "name": "建设东路"
                }, {
                    "name": "保全街"
                }, {
                    "name": "福华街"
                }, {
                    "name": "兴华北街"
                }, {
                    "name": "德化街"
                }, {
                    "name": "郑州铁路局"
                }, {
                    "name": "中原东路"
                }, {
                    "name": "洁云路"
                }, {
                    "name": "淮北街"
                }, {
                    "name": "长江路"
                }, {
                    "name": "航海中路"
                }, {
                    "name": "永安街"
                }, {
                    "name": "绿城广场"
                }, {
                    "name": "铭功路"
                }, {
                    "name": "建中街"
                }, {
                    "name": "解放路"
                }, {
                    "name": "康复中街"
                }, {
                    "name": "一马路"
                }, {
                    "name": "康复前街"
                }, {
                    "name": "冯庄"
                }, {
                    "name": "老代庄"
                }, {
                    "name": "京广路"
                }, {
                    "name": "铁英街"
                }, {
                    "name": "大学路"
                }, {
                    "name": "二七其他"
                }, {
                    "name": "合作路"
                }, {
                    "name": "金祥花园"
                }, {
                    "name": "人民公园"
                }, {
                    "name": "陈庄"
                }, {
                    "name": "火车站"
                }, {
                    "name": "蜜蜂张"
                }, {
                    "name": "庆丰街"
                }, {
                    "name": "桃源路"
                }, {
                    "name": "兴华南街"
                }, {
                    "name": "齐礼阎"
                }, {
                    "name": "其他"
                }],
                "name": "二七区"
            }, {
                "children": [{
                    "name": "东大街"
                }, {
                    "name": "南关"
                }, {
                    "name": "城南路"
                }, {
                    "name": "北下街"
                }, {
                    "name": "西大街"
                }, {
                    "name": "城东路"
                }, {
                    "name": "南顺城街"
                }, {
                    "name": "管城西街"
                }, {
                    "name": "航海东路"
                }, {
                    "name": "货站街"
                }, {
                    "name": "南仓街"
                }, {
                    "name": "北顺城街"
                }, {
                    "name": "南大街"
                }, {
                    "name": "东开发区"
                }, {
                    "name": "城东南路"
                }, {
                    "name": "商城路"
                }, {
                    "name": "金色港湾"
                }, {
                    "name": "二里岗"
                }, {
                    "name": "管城回族其他"
                }, {
                    "name": "五里堡"
                }, {
                    "name": "其他"
                }],
                "name": "管城回族区"
            }, {
                "children": [{
                    "name": "工人新村"
                }, {
                    "name": "胜岗"
                }, {
                    "name": "农业路沿线"
                }, {
                    "name": "姚寨"
                }, {
                    "name": "经五路"
                }, {
                    "name": "森林公园"
                }, {
                    "name": "金水其他"
                }, {
                    "name": "开元小区"
                }, {
                    "name": "海滩街"
                }, {
                    "name": "凤凰台"
                }, {
                    "name": "祭城"
                }, {
                    "name": "东里路"
                }, {
                    "name": "丰庆路"
                }, {
                    "name": "新通桥"
                }, {
                    "name": "群办路"
                }, {
                    "name": "金水路"
                }, {
                    "name": "杜岭"
                }, {
                    "name": "文化路"
                }, {
                    "name": "索凌路"
                }, {
                    "name": "创新大厦"
                }, {
                    "name": "信息学院路"
                }, {
                    "name": "体育馆"
                }, {
                    "name": "中方园"
                }, {
                    "name": "财经学院"
                }, {
                    "name": "国基路"
                }, {
                    "name": "政五街"
                }, {
                    "name": "岗杜北街"
                }, {
                    "name": "龙子湖"
                }, {
                    "name": "任寨"
                }, {
                    "name": "大石桥"
                }, {
                    "name": "燕庄"
                }, {
                    "name": "经六路"
                }, {
                    "name": "徐寨路"
                }, {
                    "name": "新柳路"
                }, {
                    "name": "政六街"
                }, {
                    "name": "北林路"
                }, {
                    "name": "司家庄"
                }, {
                    "name": "北环路"
                }, {
                    "name": "东建材"
                }, {
                    "name": "俭学街"
                }, {
                    "name": "经八路"
                }, {
                    "name": "西里路"
                }, {
                    "name": "紫荆山"
                }, {
                    "name": "二环支路"
                }, {
                    "name": "郑汴路"
                }, {
                    "name": "人民路"
                }, {
                    "name": "大铺"
                }, {
                    "name": "健康路"
                }, {
                    "name": "东风路"
                }, {
                    "name": "政府"
                }, {
                    "name": "丰产路"
                }, {
                    "name": "未来路"
                }, {
                    "name": "民航路"
                }, {
                    "name": "纬二路"
                }, {
                    "name": "宋寨"
                }, {
                    "name": "经二路"
                }, {
                    "name": "南阳路"
                }, {
                    "name": "花园路"
                }, {
                    "name": "优胜南路"
                }, {
                    "name": "政四街"
                }, {
                    "name": "防疫路"
                }, {
                    "name": "其他"
                }],
                "name": "金水区"
            }, {
                "children": [{
                    "name": "济源路"
                }, {
                    "name": "新安路"
                }, {
                    "name": "中心路"
                }, {
                    "name": "上街其他"
                }, {
                    "name": "其他"
                }],
                "name": "上街区"
            }, {
                "children": [{
                    "name": "老鸦陈"
                }, {
                    "name": "长兴路"
                }, {
                    "name": "体育中心"
                }, {
                    "name": "惠济其他"
                }, {
                    "name": "新城"
                }, {
                    "name": "刘寨"
                }, {
                    "name": "迎宾路"
                }, {
                    "name": "其他"
                }],
                "name": "惠济区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "中牟县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "巩义"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "荥阳"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "新密"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "新郑"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "登封"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "开封",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "龙亭区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "顺河回族区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "鼓楼区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "南关区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "郊区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "杞县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "通许县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "尉氏县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "开封县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "兰考县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "辖区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "洛阳",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "老城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "西工区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "廛河回族区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "涧西区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "吉利区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "洛龙区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "孟津县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "新安县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "栾川县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "嵩县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "汝阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宜阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "洛宁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "伊川县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "偃师"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "平顶山",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "新华区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "卫东区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "石龙区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "湛河区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宝丰县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "叶县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "鲁山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "郏县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "舞钢"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "汝州"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "安阳",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "文峰区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "北关区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "殷都区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "龙安区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "安阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "汤阴县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "滑县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "内黄县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "林州"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "鹤壁",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "鹤山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "山城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "淇滨区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "浚县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "淇县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "新乡",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "红旗区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "卫滨区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "凤泉区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "牧野区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "新乡县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "获嘉县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "原阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "延津县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "封丘县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "长垣县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "卫辉"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "辉县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "焦作",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "解放区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "中站区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "马村区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "山阳区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "修武县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "博爱县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "武陟县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "温县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "济源"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "沁阳"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "孟州"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "濮阳",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "华龙区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "清丰县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "南乐县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "范县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "台前县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "濮阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "许昌",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "魏都区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "许昌县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "鄢陵县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "襄城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "禹州"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "长葛"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "漯河",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "源汇区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "郾城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "召陵区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "舞阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "临颍县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "三门峡",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "辖区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "湖滨区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "渑池县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "陕县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "卢氏县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "义马"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "灵宝"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "南阳",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "宛城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "卧龙区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "南召县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "方城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "西峡县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "镇平县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "内乡县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "淅川县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "社旗县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "唐河县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "新野县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "桐柏县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "邓州"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "商丘",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "梁园区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "睢阳区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "民权县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "睢县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宁陵县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "柘城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "虞城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "夏邑县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "永城"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "信阳",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "浉河区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "平桥区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "罗山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "光山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "新县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "商城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "固始县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "潢川县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "淮滨县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "息县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "周口",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "川汇区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "扶沟县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "西华县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "商水县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "沈丘县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "郸城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "淮阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "太康县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "鹿邑县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "项城"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "驻马店",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "驿城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "西平县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "上蔡县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "平舆县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "正阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "确山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "泌阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "汝南县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "遂平县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "新蔡县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }],
        "name": "河南"
    },
    {
        "children": [{
            "name": "武汉",
            "children": [{
                "children": [{
                    "name": "江滩"
                }, {
                    "name": "建设大道"
                }, {
                    "name": "岱山"
                }, {
                    "name": "百步亭"
                }, {
                    "name": "解放公园"
                }, {
                    "name": "车站"
                }, {
                    "name": "劳动"
                }, {
                    "name": "永清"
                }, {
                    "name": "后湖"
                }, {
                    "name": "竹叶山"
                }, {
                    "name": "三阳路"
                }, {
                    "name": "江岸其他"
                }, {
                    "name": "谌家矶"
                }, {
                    "name": "江汉路"
                }, {
                    "name": "新村"
                }, {
                    "name": "客运港"
                }, {
                    "name": "二七"
                }, {
                    "name": "花桥"
                }, {
                    "name": "台北路"
                }, {
                    "name": "其他"
                }],
                "name": "江岸区"
            }, {
                "children": [{
                    "name": "汉口火车站"
                }, {
                    "name": "民权"
                }, {
                    "name": "常青路"
                }, {
                    "name": "前进"
                }, {
                    "name": "武广"
                }, {
                    "name": "水塔"
                }, {
                    "name": "北湖"
                }, {
                    "name": "唐家墩"
                }, {
                    "name": "友谊路"
                }, {
                    "name": "西北湖"
                }, {
                    "name": "中山公园"
                }, {
                    "name": "万松"
                }, {
                    "name": "江汉其他"
                }, {
                    "name": "其他"
                }],
                "name": "江汉区"
            }, {
                "children": [{
                    "name": "硚口其他"
                }, {
                    "name": "宗关"
                }, {
                    "name": "荣华"
                }, {
                    "name": "汉水桥"
                }, {
                    "name": "韩家墩"
                }, {
                    "name": "硚口路"
                }, {
                    "name": "满春"
                }, {
                    "name": "六角亭"
                }, {
                    "name": "汉正街"
                }, {
                    "name": "古田"
                }, {
                    "name": "崇仁"
                }, {
                    "name": "汉中"
                }, {
                    "name": "易家墩"
                }, {
                    "name": "宝丰"
                }, {
                    "name": "其他"
                }],
                "name": "硚口区"
            }, {
                "children": [{
                    "name": "汉阳大道"
                }, {
                    "name": "建桥"
                }, {
                    "name": "五里墩"
                }, {
                    "name": "江汉二桥"
                }, {
                    "name": "晴川"
                }, {
                    "name": "沌口"
                }, {
                    "name": "翠微"
                }, {
                    "name": "汉阳其他"
                }, {
                    "name": "洲头"
                }, {
                    "name": "钟家村"
                }, {
                    "name": "王家湾"
                }, {
                    "name": "琴断口"
                }, {
                    "name": "月湖"
                }, {
                    "name": "其他"
                }],
                "name": "汉阳区"
            }, {
                "children": [{
                    "name": "武珞路"
                }, {
                    "name": "水果湖"
                }, {
                    "name": "积玉桥"
                }, {
                    "name": "余家头"
                }, {
                    "name": "黄鹤楼"
                }, {
                    "name": "杨园"
                }, {
                    "name": "珞珈山"
                }, {
                    "name": "首义路"
                }, {
                    "name": "武泰闸"
                }, {
                    "name": "徐家棚"
                }, {
                    "name": "粮道街"
                }, {
                    "name": "友谊大道"
                }, {
                    "name": "东湖路"
                }, {
                    "name": "中北路"
                }, {
                    "name": "小东门"
                }, {
                    "name": "司门口"
                }, {
                    "name": "武昌其他"
                }, {
                    "name": "阅马场"
                }, {
                    "name": "紫阳路"
                }, {
                    "name": "中南路"
                }, {
                    "name": "丁字桥"
                }, {
                    "name": "武昌火车站"
                }, {
                    "name": "其他"
                }],
                "name": "武昌区"
            }, {
                "children": [{
                    "name": "八大家"
                }, {
                    "name": "工人村"
                }, {
                    "name": "建设七路"
                }, {
                    "name": "厂前"
                }, {
                    "name": "建设二路"
                }, {
                    "name": "青山其他"
                }, {
                    "name": "冶金"
                }, {
                    "name": "和平大道"
                }, {
                    "name": "红钢城"
                }, {
                    "name": "红卫路"
                }, {
                    "name": "白玉山"
                }, {
                    "name": "新沟桥"
                }, {
                    "name": "钢花村"
                }, {
                    "name": "南干渠"
                }, {
                    "name": "其他"
                }],
                "name": "青山区"
            }, {
                "children": [{
                    "name": "珞南"
                }, {
                    "name": "街道口"
                }, {
                    "name": "武东"
                }, {
                    "name": "光谷"
                }, {
                    "name": "鲁巷"
                }, {
                    "name": "卓刀泉"
                }, {
                    "name": "张家湾"
                }, {
                    "name": "南湖"
                }, {
                    "name": "珞狮南路"
                }, {
                    "name": "关山"
                }, {
                    "name": "洪山其他"
                }, {
                    "name": "白沙洲"
                }, {
                    "name": "广埠屯"
                }, {
                    "name": "徐东"
                }, {
                    "name": "其他"
                }],
                "name": "洪山区"
            }, {
                "children": [{
                    "name": "常青花园"
                }, {
                    "name": "长青"
                }, {
                    "name": "东山"
                }, {
                    "name": "金银湖"
                }, {
                    "name": "径河"
                }, {
                    "name": "李家墩"
                }, {
                    "name": "荷包湖"
                }, {
                    "name": "柏泉"
                }, {
                    "name": "吴家山"
                }, {
                    "name": "东西湖其他"
                }, {
                    "name": "走马岭"
                }, {
                    "name": "新沟"
                }, {
                    "name": "其他"
                }],
                "name": "东西湖区"
            }, {
                "children": [{
                    "name": "汉南其他"
                }, {
                    "name": "纱帽"
                }, {
                    "name": "其他"
                }],
                "name": "汉南区"
            }, {
                "children": [{
                    "name": "大集"
                }, {
                    "name": "蔡甸其他"
                }, {
                    "name": "永安"
                }, {
                    "name": "蔡甸"
                }, {
                    "name": "其他"
                }],
                "name": "蔡甸区"
            }, {
                "children": [{
                    "name": "流芳"
                }, {
                    "name": "纸坊"
                }, {
                    "name": "江夏其他"
                }, {
                    "name": "其他"
                }],
                "name": "江夏区"
            }, {
                "children": [{
                    "name": "横店"
                }, {
                    "name": "六指店"
                }, {
                    "name": "黄陂其他"
                }, {
                    "name": "前川"
                }, {
                    "name": "其他"
                }],
                "name": "黄陂区"
            }, {
                "children": [{
                    "name": "三店"
                }, {
                    "name": "新洲其他"
                }, {
                    "name": "阳逻"
                }, {
                    "name": "汪集"
                }, {
                    "name": "邾城"
                }, {
                    "name": "其他"
                }],
                "name": "新洲区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "黄石",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "黄石港区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "西塞山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "下陆区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "铁山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "阳新县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "大冶"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "十堰",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "茅箭区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "张湾区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "郧县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "郧西县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "竹山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "竹溪县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "房县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "丹江口"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "宜昌",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "西陵区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "伍家岗区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "点军区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "猇亭区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "夷陵区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "远安县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "兴山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "秭归县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "长阳土家族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "五峰土家族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宜都"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "当阳"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "枝江"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "襄阳",
            "children": [{
                "children": [{
                    "name": "鼓楼"
                }, {
                    "name": "檀溪路"
                }, {
                    "name": "闸口"
                }, {
                    "name": "其他"
                }],
                "name": "襄城区"
            }, {
                "children": [{
                    "name": "沃尔玛"
                }, {
                    "name": "华丰路"
                }, {
                    "name": "万达"
                }, {
                    "name": "人民广场"
                }, {
                    "name": "华洋堂"
                }, {
                    "name": "鱼梁洲"
                }, {
                    "name": "火车站"
                }, {
                    "name": "其他"
                }],
                "name": "樊城区"
            }, {
                "children": [{
                    "name": "襄州"
                }, {
                    "name": "其他"
                }],
                "name": "襄阳区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "南漳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "谷城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "保康县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "老河口"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "枣阳"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宜城"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "鄂州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "梁子湖区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "华容区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "鄂城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "荆门",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "东宝区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "掇刀区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "京山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "沙洋县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "钟祥"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "孝感",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "孝南区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "孝昌县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "大悟县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "云梦县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "应城"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "安陆"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "汉川"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "荆州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "沙区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "荆州区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "公安县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "监利县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "江陵县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "石首"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "洪湖"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "松滋"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "黄冈",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "黄州区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "团风县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "红安县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "罗田县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "英山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "浠水县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "蕲春县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "黄梅县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "麻城"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "武穴"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "咸宁",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "咸安区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "嘉鱼县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "通城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "崇阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "通山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "赤壁"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "随州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "曾都区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "广水"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "恩施土家族苗族自治州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "恩施"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "利川"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "建始县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "巴东县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宣恩县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "咸丰县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "来凤县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "鹤峰县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "神农架",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "仙桃"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "潜江"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "天门"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "神农架林区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }],
        "name": "湖北"
    },
    {
        "children": [{
            "name": "长沙",
            "children": [{
                "children": [{
                    "name": "湘雅二医院"
                }, {
                    "name": "三湘大场"
                }, {
                    "name": "人民路立交桥"
                }, {
                    "name": "火星"
                }, {
                    "name": "浏城桥"
                }, {
                    "name": "黄兴路"
                }, {
                    "name": "芙蓉苑"
                }, {
                    "name": "高岭"
                }, {
                    "name": "锦泰广场"
                }, {
                    "name": "湘湖"
                }, {
                    "name": "五里牌"
                }, {
                    "name": "凌霄路"
                }, {
                    "name": "朝阳街"
                }, {
                    "name": "荷花路"
                }, {
                    "name": "文艺路"
                }, {
                    "name": "定王台"
                }, {
                    "name": "芙蓉广场"
                }, {
                    "name": "芙蓉中路"
                }, {
                    "name": "朝阳路"
                }, {
                    "name": "万家丽"
                }, {
                    "name": "汽车东站"
                }, {
                    "name": "德政园"
                }, {
                    "name": "八一路"
                }, {
                    "name": "识字岭"
                }, {
                    "name": "曙光路"
                }, {
                    "name": "农科院"
                }, {
                    "name": "司门口"
                }, {
                    "name": "张公岭"
                }, {
                    "name": "荷花园"
                }, {
                    "name": "车站中路"
                }, {
                    "name": "五一大道"
                }, {
                    "name": "府后街"
                }, {
                    "name": "中山路"
                }, {
                    "name": "东屯渡"
                }, {
                    "name": "芙蓉其他"
                }, {
                    "name": "远大路"
                }, {
                    "name": "袁家岭"
                }, {
                    "name": "杨家山"
                }, {
                    "name": "浏正街"
                }, {
                    "name": "燕山街"
                }, {
                    "name": "马王堆"
                }, {
                    "name": "韭菜园"
                }, {
                    "name": "人民中路"
                }, {
                    "name": "其他"
                }],
                "name": "芙蓉区"
            }, {
                "children": [{
                    "name": "学院街"
                }, {
                    "name": "西牌楼"
                }, {
                    "name": "沙河街"
                }, {
                    "name": "黄土岭"
                }, {
                    "name": "天心阁"
                }, {
                    "name": "广厦新村"
                }, {
                    "name": "南郊公园"
                }, {
                    "name": "铁道学院"
                }, {
                    "name": "长郡中学"
                }, {
                    "name": "坡子街"
                }, {
                    "name": "长沙理工大学"
                }, {
                    "name": "书院南路"
                }, {
                    "name": "天心其他"
                }, {
                    "name": "天剑路"
                }, {
                    "name": "赤岭路"
                }, {
                    "name": "书院路"
                }, {
                    "name": "白沙井"
                }, {
                    "name": "金盆岭"
                }, {
                    "name": "东瓜山"
                }, {
                    "name": "友谊路"
                }, {
                    "name": "白沙路"
                }, {
                    "name": "青园"
                }, {
                    "name": "第一师范"
                }, {
                    "name": "五凌电力"
                }, {
                    "name": "裕南街"
                }, {
                    "name": "南门口"
                }, {
                    "name": "南湖路"
                }, {
                    "name": "浦沅"
                }, {
                    "name": "芙蓉南路"
                }, {
                    "name": "政府"
                }, {
                    "name": "桂花坪"
                }, {
                    "name": "新开铺"
                }, {
                    "name": "碧湘街"
                }, {
                    "name": "涂家冲"
                }, {
                    "name": "仰天湖"
                }, {
                    "name": "侯家塘"
                }, {
                    "name": "劳动广场"
                }, {
                    "name": "其他"
                }],
                "name": "天心区"
            }, {
                "children": [{
                    "name": "英才园"
                }, {
                    "name": "观沙岭"
                }, {
                    "name": "白沙液街"
                }, {
                    "name": "政府"
                }, {
                    "name": "望月湖"
                }, {
                    "name": "石岭塘"
                }, {
                    "name": "麓山名园"
                }, {
                    "name": "咸嘉花园"
                }, {
                    "name": "咸嘉湖"
                }, {
                    "name": "左家垅"
                }, {
                    "name": "玉兰路"
                }, {
                    "name": "王陵公园"
                }, {
                    "name": "望城坡"
                }, {
                    "name": "牌楼路"
                }, {
                    "name": "湖南师范大学"
                }, {
                    "name": "桔子洲"
                }, {
                    "name": "麓谷锦园"
                }, {
                    "name": "岳麓山"
                }, {
                    "name": "杜家塘"
                }, {
                    "name": "桐梓坡"
                }, {
                    "name": "新民路"
                }, {
                    "name": "麓山路"
                }, {
                    "name": "高叶塘"
                }, {
                    "name": "咸嘉新村"
                }, {
                    "name": "天马山"
                }, {
                    "name": "枫林一路"
                }, {
                    "name": "雷锋大道"
                }, {
                    "name": "银盆岭"
                }, {
                    "name": "中南大学"
                }, {
                    "name": "望岳"
                }, {
                    "name": "湘雅三医院"
                }, {
                    "name": "大学城"
                }, {
                    "name": "桐梓坡路"
                }, {
                    "name": "汽车西站"
                }, {
                    "name": "科教新村"
                }, {
                    "name": "麓谷"
                }, {
                    "name": "西湖"
                }, {
                    "name": "湖南商学院"
                }, {
                    "name": "岳麓其他"
                }, {
                    "name": "湖南大学"
                }, {
                    "name": "其他"
                }],
                "name": "岳麓区"
            }, {
                "children": [{
                    "name": "四方坪"
                }, {
                    "name": "德雅路"
                }, {
                    "name": "博物馆"
                }, {
                    "name": "兴汉门"
                }, {
                    "name": "蔡锷北路"
                }, {
                    "name": "伍家岭"
                }, {
                    "name": "开福寺"
                }, {
                    "name": "科大佳园"
                }, {
                    "name": "浏阳河路"
                }, {
                    "name": "洪山桥"
                }, {
                    "name": "望麓园"
                }, {
                    "name": "五一广场"
                }, {
                    "name": "二马路"
                }, {
                    "name": "水风井"
                }, {
                    "name": "华夏路"
                }, {
                    "name": "太平街口"
                }, {
                    "name": "车站北路"
                }, {
                    "name": "东风路"
                }, {
                    "name": "金帆小区"
                }, {
                    "name": "丝茅冲"
                }, {
                    "name": "湘雅路"
                }, {
                    "name": "丽臣路"
                }, {
                    "name": "北正街"
                }, {
                    "name": "三一大道"
                }, {
                    "name": "陡岭路"
                }, {
                    "name": "芙蓉北路"
                }, {
                    "name": "通泰街"
                }, {
                    "name": "湘雅医院"
                }, {
                    "name": "烈士公园"
                }, {
                    "name": "黑石渡"
                }, {
                    "name": "中山亭"
                }, {
                    "name": "德雅村"
                }, {
                    "name": "动物园"
                }, {
                    "name": "陈家湖"
                }, {
                    "name": "蒋家垅"
                }, {
                    "name": "潘家坪"
                }, {
                    "name": "新河"
                }, {
                    "name": "湘江中路"
                }, {
                    "name": "松桂园"
                }, {
                    "name": "开福其他"
                }, {
                    "name": "上大垅"
                }, {
                    "name": "营盘路"
                }, {
                    "name": "麻园岭"
                }, {
                    "name": "文昌阁"
                }, {
                    "name": "广电中心"
                }, {
                    "name": "砚瓦池"
                }, {
                    "name": "清水塘"
                }, {
                    "name": "西长街"
                }, {
                    "name": "其他"
                }],
                "name": "开福区"
            }, {
                "children": [{
                    "name": "洞井铺"
                }, {
                    "name": "曹家坡"
                }, {
                    "name": "茶园坡"
                }, {
                    "name": "桂花公园"
                }, {
                    "name": "王家冲"
                }, {
                    "name": "狮子山"
                }, {
                    "name": "香樟路"
                }, {
                    "name": "芙蓉区政府"
                }, {
                    "name": "雨花亭"
                }, {
                    "name": "圭塘"
                }, {
                    "name": "高桥"
                }, {
                    "name": "树木岭"
                }, {
                    "name": "雅塘村"
                }, {
                    "name": "桂花村"
                }, {
                    "name": "七里庙"
                }, {
                    "name": "广济桥"
                }, {
                    "name": "长岭"
                }, {
                    "name": "井湾子"
                }, {
                    "name": "小林子冲"
                }, {
                    "name": "东塘"
                }, {
                    "name": "牛角塘"
                }, {
                    "name": "韶山中路"
                }, {
                    "name": "长沙卷烟厂"
                }, {
                    "name": "红花坡"
                }, {
                    "name": "光南"
                }, {
                    "name": "雨花其他"
                }, {
                    "name": "劳动西路"
                }, {
                    "name": "赤岗冲"
                }, {
                    "name": "劳动中路"
                }, {
                    "name": "新星小区"
                }, {
                    "name": "左家塘"
                }, {
                    "name": "雅礼中学"
                }, {
                    "name": "曲塘"
                }, {
                    "name": "梓园路"
                }, {
                    "name": "阿弥岭"
                }, {
                    "name": "窑岭"
                }, {
                    "name": "雨花区政府"
                }, {
                    "name": "五一村"
                }, {
                    "name": "汽车南站"
                }, {
                    "name": "航空路"
                }, {
                    "name": "韶山南路"
                }, {
                    "name": "城南路"
                }, {
                    "name": "桔园小区"
                }, {
                    "name": "马家冲"
                }, {
                    "name": "植物园"
                }, {
                    "name": "燕子岭"
                }, {
                    "name": "砂子塘"
                }, {
                    "name": "其他"
                }],
                "name": "雨花区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "长沙县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "望城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宁乡县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "浏阳"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "株洲",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "荷塘区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "芦淞区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "石峰区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "天元区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "株洲县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "攸县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "茶陵县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "炎陵县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "醴陵"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "湘潭",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "雨湖区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "岳塘区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "湘潭县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "湘乡"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "韶山"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "衡阳",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "珠晖区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "雁峰区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "石鼓区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "蒸湘区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "南岳区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "衡阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "衡南县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "衡山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "衡东县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "祁东县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "耒阳"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "常宁"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "邵阳",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "双清区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "大祥区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "北塔区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "邵东县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "新邵县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "邵阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "隆回县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "洞口县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "绥宁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "新宁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "城步苗族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "武冈"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "岳阳",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "岳阳楼区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "云溪区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "君山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "岳阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "华容县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "湘阴县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "平江县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "汨罗"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "临湘"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "常德",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "武陵区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "鼎城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "安乡县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "汉寿县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "澧县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "临澧县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "桃源县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "石门县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "津"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "张家界",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "永定区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "武陵源区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "慈利县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "桑植县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "益阳",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "资阳区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "赫山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "南县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "桃江县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "安化县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "沅江"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "郴州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "北湖区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "苏仙区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "桂阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宜章县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "永兴县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "嘉禾县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "临武县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "汝城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "桂东县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "安仁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "资兴"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "永州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "芝山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "冷水滩区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "祁阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "东安县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "双牌县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "道县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "江永县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宁远县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "蓝山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "新田县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "江华瑶族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "零陵区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "怀化",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "鹤城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "中方县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "沅陵县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "辰溪县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "溆浦县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "会同县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "麻阳苗族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "新晃侗族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "芷江侗族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "靖州苗族侗族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "通道侗族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "洪江"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "娄底",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "娄星区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "双峰县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "新化县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "冷水江"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "涟源"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "湘西土家族苗族自治州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "吉首"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "泸溪县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "凤凰县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "花垣县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "保靖县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "古丈县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "永顺县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "龙山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }],
        "name": "湖南"
    },
    {
        "children": [{
            "name": "广州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "东山区"
            }, {
                "children": [{
                    "name": "南源"
                }, {
                    "name": "荔湾路"
                }, {
                    "name": "多宝"
                }, {
                    "name": "西关"
                }, {
                    "name": "芳村"
                }, {
                    "name": "西村"
                }, {
                    "name": "荔湾其他"
                }, {
                    "name": "龙津"
                }, {
                    "name": "桥中"
                }, {
                    "name": "沙面"
                }, {
                    "name": "站前"
                }, {
                    "name": "彩虹"
                }, {
                    "name": "白鹅潭"
                }, {
                    "name": "上九"
                }, {
                    "name": "中山七八路"
                }, {
                    "name": "金花"
                }, {
                    "name": "白鹤洞"
                }, {
                    "name": "陈家祠"
                }, {
                    "name": "中山六路"
                }, {
                    "name": "其他"
                }],
                "name": "荔湾区"
            }, {
                "children": [{
                    "name": "东风东"
                }, {
                    "name": "流花"
                }, {
                    "name": "五羊新城"
                }, {
                    "name": "北京路"
                }, {
                    "name": "解放南"
                }, {
                    "name": "越秀其他"
                }, {
                    "name": "洪桥"
                }, {
                    "name": "大新"
                }, {
                    "name": "火车站"
                }, {
                    "name": "农林下路"
                }, {
                    "name": "黄花岗"
                }, {
                    "name": "六榕"
                }, {
                    "name": "建设"
                }, {
                    "name": "华乐"
                }, {
                    "name": "东湖"
                }, {
                    "name": "嘉禾"
                }, {
                    "name": "淘金"
                }, {
                    "name": "东风"
                }, {
                    "name": "沿江路"
                }, {
                    "name": "越秀公园"
                }, {
                    "name": "广卫"
                }, {
                    "name": "解放北"
                }, {
                    "name": "人民北路"
                }, {
                    "name": "东山口"
                }, {
                    "name": "小北"
                }, {
                    "name": "大东"
                }, {
                    "name": "水荫"
                }, {
                    "name": "环东"
                }, {
                    "name": "中山二三路"
                }, {
                    "name": "东川"
                }, {
                    "name": "麓湖公园"
                }, {
                    "name": "梅花村"
                }, {
                    "name": "二沙岛"
                }, {
                    "name": "岭南"
                }, {
                    "name": "其他"
                }],
                "name": "越秀区"
            }, {
                "children": [{
                    "name": "晓港"
                }, {
                    "name": "凤阳"
                }, {
                    "name": "昌岗"
                }, {
                    "name": "沙园"
                }, {
                    "name": "赤岗"
                }, {
                    "name": "海幢"
                }, {
                    "name": "新港"
                }, {
                    "name": "琶洲"
                }, {
                    "name": "素社"
                }, {
                    "name": "官洲"
                }, {
                    "name": "宝岗"
                }, {
                    "name": "华洲"
                }, {
                    "name": "瑞宝"
                }, {
                    "name": "滨江"
                }, {
                    "name": "江南大道"
                }, {
                    "name": "龙凤"
                }, {
                    "name": "南华西"
                }, {
                    "name": "南石头"
                }, {
                    "name": "广州大道南"
                }, {
                    "name": "南洲"
                }, {
                    "name": "东晓"
                }, {
                    "name": "客村"
                }, {
                    "name": "海珠其他"
                }, {
                    "name": "工业大道"
                }, {
                    "name": "其他"
                }],
                "name": "海珠区"
            }, {
                "children": [{
                    "name": "车陂"
                }, {
                    "name": "天园"
                }, {
                    "name": "前进"
                }, {
                    "name": "冼村"
                }, {
                    "name": "天河北"
                }, {
                    "name": "元岗"
                }, {
                    "name": "东圃"
                }, {
                    "name": "天河城"
                }, {
                    "name": "员村"
                }, {
                    "name": "天河公园"
                }, {
                    "name": "黄村"
                }, {
                    "name": "龙洞"
                }, {
                    "name": "跑马场"
                }, {
                    "name": "猎德"
                }, {
                    "name": "体育中心"
                }, {
                    "name": "天河其他"
                }, {
                    "name": "兴华"
                }, {
                    "name": "粤垦"
                }, {
                    "name": "岗顶"
                }, {
                    "name": "广州东站"
                }, {
                    "name": "棠下"
                }, {
                    "name": "东站"
                }, {
                    "name": "登峰"
                }, {
                    "name": "沙河"
                }, {
                    "name": "五山"
                }, {
                    "name": "龙口"
                }, {
                    "name": "长兴"
                }, {
                    "name": "林和"
                }, {
                    "name": "石牌"
                }, {
                    "name": "珠江新城"
                }, {
                    "name": "沙东"
                }, {
                    "name": "其他"
                }],
                "name": "天河区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "芳村区"
            }, {
                "children": [{
                    "name": "竹料"
                }, {
                    "name": "新"
                }, {
                    "name": "京溪"
                }, {
                    "name": "松洲"
                }, {
                    "name": "江高"
                }, {
                    "name": "均禾"
                }, {
                    "name": "白云其他"
                }, {
                    "name": "景泰"
                }, {
                    "name": "金沙"
                }, {
                    "name": "钟落潭"
                }, {
                    "name": "同德"
                }, {
                    "name": "三元里"
                }, {
                    "name": "永平"
                }, {
                    "name": "广园路"
                }, {
                    "name": "黄石"
                }, {
                    "name": "罗冲围"
                }, {
                    "name": "棠景"
                }, {
                    "name": "机场路"
                }, {
                    "name": "同和"
                }, {
                    "name": "良田"
                }, {
                    "name": "龙归"
                }, {
                    "name": "白云大道"
                }, {
                    "name": "神山"
                }, {
                    "name": "太和"
                }, {
                    "name": "人和"
                }, {
                    "name": "其他"
                }],
                "name": "白云区"
            }, {
                "children": [{
                    "name": "南岗"
                }, {
                    "name": "红山"
                }, {
                    "name": "文冲"
                }, {
                    "name": "鱼珠"
                }, {
                    "name": "丰乐北路"
                }, {
                    "name": "长洲"
                }, {
                    "name": "大沙"
                }, {
                    "name": "荔联"
                }, {
                    "name": "穗东"
                }, {
                    "name": "黄埔其他"
                }, {
                    "name": "其他"
                }],
                "name": "黄埔区"
            }, {
                "children": [{
                    "name": "洛溪"
                }, {
                    "name": "大岗"
                }, {
                    "name": "清河东路"
                }, {
                    "name": "南浦"
                }, {
                    "name": "钟村"
                }, {
                    "name": "桥南"
                }, {
                    "name": "石楼"
                }, {
                    "name": "东涌"
                }, {
                    "name": "灵山"
                }, {
                    "name": "鱼窝头"
                }, {
                    "name": "大石"
                }, {
                    "name": "石基"
                }, {
                    "name": "大学城"
                }, {
                    "name": "沙头"
                }, {
                    "name": "东环"
                }, {
                    "name": "祈福"
                }, {
                    "name": "沙湾"
                }, {
                    "name": "桥"
                }, {
                    "name": "榄核"
                }, {
                    "name": "南村"
                }, {
                    "name": "石碁"
                }, {
                    "name": "番禺其他"
                }, {
                    "name": "其他"
                }],
                "name": "番禺区"
            }, {
                "children": [{
                    "name": "雅瑶"
                }, {
                    "name": "赤坭"
                }, {
                    "name": "花东"
                }, {
                    "name": "花都其他"
                }, {
                    "name": "凤凰"
                }, {
                    "name": "炭步"
                }, {
                    "name": "花山"
                }, {
                    "name": "北兴"
                }, {
                    "name": "新华"
                }, {
                    "name": "梯面"
                }, {
                    "name": "其他"
                }],
                "name": "花都区"
            }, {
                "children": [{
                    "name": "仙村"
                }, {
                    "name": "中新"
                }, {
                    "name": "福和"
                }, {
                    "name": "荔城"
                }, {
                    "name": "永和"
                }, {
                    "name": "派潭"
                }, {
                    "name": "朱村"
                }, {
                    "name": "小楼"
                }, {
                    "name": "三江"
                }, {
                    "name": "新塘"
                }, {
                    "name": "沙庄"
                }, {
                    "name": "其他"
                }],
                "name": "增城"
            }, {
                "children": [{
                    "name": "街口"
                }, {
                    "name": "良口"
                }, {
                    "name": "温泉"
                }, {
                    "name": "太平"
                }, {
                    "name": "江埔"
                }, {
                    "name": "城郊"
                }, {
                    "name": "鳌头"
                }, {
                    "name": "吕田"
                }, {
                    "name": "其他"
                }],
                "name": "从化"
            }, {
                "children": [{
                    "name": "镇龙"
                }, {
                    "name": "九佛"
                }, {
                    "name": "萝岗其他"
                }, {
                    "name": "其他"
                }],
                "name": "萝岗区"
            }, {
                "children": [{
                    "name": "黄阁"
                }, {
                    "name": "横沥"
                }, {
                    "name": "南沙其他"
                }, {
                    "name": "万顷沙"
                }, {
                    "name": "其他"
                }],
                "name": "南沙区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "韶关",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "武江区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "浈江区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "曲江区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "始兴县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "仁化县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "翁源县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "乳源瑶族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "新丰县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "乐昌"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "南雄"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "深圳",
            "children": [{
                "children": [{
                    "name": "东门"
                }, {
                    "name": "人民南"
                }, {
                    "name": "莲塘"
                }, {
                    "name": "独树村"
                }, {
                    "name": "蔡屋围"
                }, {
                    "name": "布心"
                }, {
                    "name": "东湖"
                }, {
                    "name": "草埔"
                }, {
                    "name": "罗湖区委"
                }, {
                    "name": "黄贝岭"
                }, {
                    "name": "文锦渡"
                }, {
                    "name": "火车站"
                }, {
                    "name": "清水河"
                }, {
                    "name": "笋岗"
                }, {
                    "name": "水库"
                }, {
                    "name": "红岗花园"
                }, {
                    "name": "水贝"
                }, {
                    "name": "理想新城"
                }, {
                    "name": "泥岗"
                }, {
                    "name": "罗湖其他"
                }, {
                    "name": "留医部"
                }, {
                    "name": "田贝"
                }, {
                    "name": "宝安南路沿线"
                }, {
                    "name": "银湖"
                }, {
                    "name": "国贸"
                }, {
                    "name": "洪湖"
                }, {
                    "name": "翠竹"
                }, {
                    "name": "其他"
                }],
                "name": "罗湖区"
            }, {
                "children": [{
                    "name": "园岭"
                }, {
                    "name": "福华新村"
                }, {
                    "name": "石厦"
                }, {
                    "name": "皇岗"
                }, {
                    "name": "八卦岭"
                }, {
                    "name": "上梅林"
                }, {
                    "name": "沙尾"
                }, {
                    "name": "莲花一村"
                }, {
                    "name": "沙嘴"
                }, {
                    "name": "福田区委"
                }, {
                    "name": "景田"
                }, {
                    "name": "保税区"
                }, {
                    "name": "购物公园"
                }, {
                    "name": "新洲"
                }, {
                    "name": "车公庙"
                }, {
                    "name": "荔枝公园"
                }, {
                    "name": "莲花二村"
                }, {
                    "name": "振华路"
                }, {
                    "name": "福田其他"
                }, {
                    "name": "岗厦"
                }, {
                    "name": "莲花北村"
                }, {
                    "name": "莲花三村"
                }, {
                    "name": "竹子林"
                }, {
                    "name": "上沙"
                }, {
                    "name": "下梅林"
                }, {
                    "name": "香蜜湖"
                }, {
                    "name": "上步"
                }, {
                    "name": "沙头"
                }, {
                    "name": "中信广场"
                }, {
                    "name": "赤尾"
                }, {
                    "name": "福民新村"
                }, {
                    "name": "下沙"
                }, {
                    "name": "笔架山"
                }, {
                    "name": "益田村"
                }, {
                    "name": "华强北"
                }, {
                    "name": "其他"
                }],
                "name": "福田区"
            }, {
                "children": [{
                    "name": "海王大厦"
                }, {
                    "name": "南油"
                }, {
                    "name": "大冲"
                }, {
                    "name": "南头"
                }, {
                    "name": "南山医院"
                }, {
                    "name": "南新路口"
                }, {
                    "name": "科技园"
                }, {
                    "name": "桂庙路口"
                }, {
                    "name": "白石洲"
                }, {
                    "name": "南山其他"
                }, {
                    "name": "海上世界"
                }, {
                    "name": "华侨城"
                }, {
                    "name": "蛇口"
                }, {
                    "name": "桃源村"
                }, {
                    "name": "后海"
                }, {
                    "name": "西丽"
                }, {
                    "name": "前海"
                }, {
                    "name": "深圳湾"
                }, {
                    "name": "其他"
                }],
                "name": "南山区"
            }, {
                "children": [{
                    "name": "翻身路"
                }, {
                    "name": "观澜"
                }, {
                    "name": "新安"
                }, {
                    "name": "滢水山庄"
                }, {
                    "name": "美丽花园"
                }, {
                    "name": "龙华"
                }, {
                    "name": "潜龙花园"
                }, {
                    "name": "西乡"
                }, {
                    "name": "锦绣江南"
                }, {
                    "name": "沙井"
                }, {
                    "name": "松岗"
                }, {
                    "name": "石岩"
                }, {
                    "name": "桃源居"
                }, {
                    "name": "民治"
                }, {
                    "name": "福永"
                }, {
                    "name": "宝安其他"
                }, {
                    "name": "其他"
                }],
                "name": "宝安区"
            }, {
                "children": [{
                    "name": "布吉"
                }, {
                    "name": "桂芳园"
                }, {
                    "name": "坪地"
                }, {
                    "name": "龙珠花园"
                }, {
                    "name": "葵涌"
                }, {
                    "name": "康桥"
                }, {
                    "name": "坪山"
                }, {
                    "name": "横岗"
                }, {
                    "name": "坂田"
                }, {
                    "name": "万科城"
                }, {
                    "name": "大芬村"
                }, {
                    "name": "龙岗其他"
                }, {
                    "name": "其他"
                }],
                "name": "龙岗区"
            }, {
                "children": [{
                    "name": "盐田其他"
                }, {
                    "name": "大梅沙"
                }, {
                    "name": "小梅沙"
                }, {
                    "name": "沙头角"
                }, {
                    "name": "其他"
                }],
                "name": "盐田区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "珠海",
            "children": [{
                "children": [{
                    "name": "园林路"
                }, {
                    "name": "迎宾"
                }, {
                    "name": "新香洲"
                }, {
                    "name": "湾仔"
                }, {
                    "name": "兴业路"
                }, {
                    "name": "新涌"
                }, {
                    "name": "南屏"
                }, {
                    "name": "中山亭"
                }, {
                    "name": "体育中心"
                }, {
                    "name": "香柠花园"
                }, {
                    "name": "兰埔"
                }, {
                    "name": "二中"
                }, {
                    "name": "翠香路"
                }, {
                    "name": "吉大"
                }, {
                    "name": "拱北"
                }, {
                    "name": "华发新城"
                }, {
                    "name": "狮山"
                }, {
                    "name": "中山大学"
                }, {
                    "name": "海滨"
                }, {
                    "name": "夏美"
                }, {
                    "name": "富康花园"
                }, {
                    "name": "卓雅花园"
                }, {
                    "name": "湾仔沙"
                }, {
                    "name": "长环新村"
                }, {
                    "name": "翠前"
                }, {
                    "name": "石花"
                }, {
                    "name": "香洲其他"
                }, {
                    "name": "安居园"
                }, {
                    "name": "唐家湾"
                }, {
                    "name": "柠溪路"
                }, {
                    "name": "夏湾"
                }, {
                    "name": "情侣南路"
                }, {
                    "name": "前山"
                }, {
                    "name": "北园"
                }, {
                    "name": "海洲路"
                }, {
                    "name": "南村"
                }, {
                    "name": "紫荆园"
                }, {
                    "name": "翠微"
                }, {
                    "name": "南香里"
                }, {
                    "name": "石花西路"
                }, {
                    "name": "香湾"
                }, {
                    "name": "粤海中路"
                }, {
                    "name": "竹苑"
                }, {
                    "name": "红山"
                }, {
                    "name": "保健院"
                }, {
                    "name": "水湾路"
                }, {
                    "name": "万佳百货"
                }, {
                    "name": "南坑"
                }, {
                    "name": "明珠南路"
                }, {
                    "name": "凤凰"
                }, {
                    "name": "水湾头"
                }, {
                    "name": "人民西路"
                }, {
                    "name": "其他"
                }],
                "name": "香洲区"
            }, {
                "children": [{
                    "name": "平沙"
                }, {
                    "name": "斗门其他"
                }, {
                    "name": "井岸"
                }, {
                    "name": "白蕉"
                }, {
                    "name": "其他"
                }],
                "name": "斗门区"
            }, {
                "children": [{
                    "name": "三灶"
                }, {
                    "name": "横琴"
                }, {
                    "name": "红旗"
                }, {
                    "name": "金湾其他"
                }, {
                    "name": "其他"
                }],
                "name": "金湾区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "汕头",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "龙湖区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "金平区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "濠江区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "潮阳区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "潮南区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "澄海区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "南澳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "佛山",
            "children": [{
                "children": [{
                    "name": "石湾"
                }, {
                    "name": "季华园"
                }, {
                    "name": "政府"
                }, {
                    "name": "禅城其他"
                }, {
                    "name": "季华五路"
                }, {
                    "name": "祖庙"
                }, {
                    "name": "汾江南路"
                }, {
                    "name": "其他"
                }],
                "name": "禅城区"
            }, {
                "children": [{
                    "name": "桂城"
                }, {
                    "name": "里水"
                }, {
                    "name": "狮山"
                }, {
                    "name": "西樵"
                }, {
                    "name": "大沥"
                }, {
                    "name": "南海其他"
                }, {
                    "name": "丹灶"
                }, {
                    "name": "其他"
                }],
                "name": "南海区"
            }, {
                "children": [{
                    "name": "容桂"
                }, {
                    "name": "陈村"
                }, {
                    "name": "均安"
                }, {
                    "name": "德民路"
                }, {
                    "name": "伦教"
                }, {
                    "name": "杏坛"
                }, {
                    "name": "勒流"
                }, {
                    "name": "大福路"
                }, {
                    "name": "龙江"
                }, {
                    "name": "大良"
                }, {
                    "name": "乐从"
                }, {
                    "name": "顺德其他"
                }, {
                    "name": "其他"
                }],
                "name": "顺德区"
            }, {
                "children": [{
                    "name": "大塘"
                }, {
                    "name": "华龙路"
                }, {
                    "name": "三水其他"
                }, {
                    "name": "白坭"
                }, {
                    "name": "其他"
                }],
                "name": "三水区"
            }, {
                "children": [{
                    "name": "文汇路"
                }, {
                    "name": "沿江路"
                }, {
                    "name": "沧江路"
                }, {
                    "name": "高明其他"
                }, {
                    "name": "其他"
                }],
                "name": "高明区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "江门",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "蓬江区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "江海区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "新会区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "台山"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "开平"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "鹤山"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "恩平"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "湛江",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "赤坎区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "霞山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "坡头区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "麻章区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "遂溪县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "徐闻县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "廉江"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "雷州"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "吴川"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "茂名",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "茂南区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "茂港区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "电白县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "高州"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "化州"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "信宜"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "肇庆",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "端州区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "鼎湖区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "广宁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "怀集县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "封开县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "德庆县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "高要"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "四会"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "惠州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "惠城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "惠阳区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "博罗县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "惠东县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "龙门县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "梅州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "梅江区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "梅县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "大埔县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "丰顺县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "五华县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "平远县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "蕉岭县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "兴宁"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "汕尾",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "城区"
            }, {
                "children": [{
                    "name": "海城"
                }, {
                    "name": "城东"
                }, {
                    "name": "附城"
                }, {
                    "name": "其他"
                }],
                "name": "海丰县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "陆河县"
            }, {
                "children": [{
                    "name": "河西"
                }, {
                    "name": "东海"
                }, {
                    "name": "碣石"
                }, {
                    "name": "河东"
                }, {
                    "name": "其他"
                }],
                "name": "陆丰"
            }, {
                "children": [{
                    "name": "新港"
                }, {
                    "name": "东涌"
                }, {
                    "name": "香洲"
                }, {
                    "name": "凤山"
                }, {
                    "name": "其他"
                }],
                "name": "汕尾城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "河源",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "源城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "紫金县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "龙川县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "连平县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "和平县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "东源县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "阳江",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "江城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "阳西县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "阳东县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "阳春"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "清远",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "清城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "佛冈县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "阳山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "连山壮族瑶族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "连南瑶族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "清新县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "英德"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "连州"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "东莞",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "樟木头镇"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "塘厦镇"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "辖区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "凤岗镇"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "大朗镇"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "南城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "万江区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "长安镇"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "东城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "虎门镇"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "石龙镇"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "黄江镇"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "常平镇"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "大岭山镇"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "厚街镇"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "桥头镇"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "横沥镇"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "清溪镇"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "中堂镇"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "石碣镇"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "中山",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "东区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "小榄镇"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "辖区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "三乡镇"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "石岐区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "坦洲镇"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "潮州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "湘桥区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "潮安县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "饶平县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "揭阳",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "榕城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "揭东县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "揭西县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "惠来县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "普宁"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "云浮",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "云城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "新兴县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "郁南县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "云安县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "罗定"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }],
        "name": "广东"
    },
    {
        "children": [{
            "name": "南宁",
            "children": [{
                "children": [{
                    "name": "明秀东路"
                }, {
                    "name": "民生"
                }, {
                    "name": "人民公园"
                }, {
                    "name": "望州路"
                }, {
                    "name": "昆仑"
                }, {
                    "name": "望州南路"
                }, {
                    "name": "朝阳"
                }, {
                    "name": "燕子岭"
                }, {
                    "name": "三塘"
                }, {
                    "name": "兴宁其他"
                }, {
                    "name": "文化宫"
                }, {
                    "name": "民族商场"
                }, {
                    "name": "其他"
                }],
                "name": "兴宁区"
            }, {
                "children": [{
                    "name": "翡翠园"
                }, {
                    "name": "津头"
                }, {
                    "name": "会展中心"
                }, {
                    "name": "长湖路"
                }, {
                    "name": "教育路"
                }, {
                    "name": "新兴苑"
                }, {
                    "name": "中山"
                }, {
                    "name": "麻村"
                }, {
                    "name": "广西艺术学院"
                }, {
                    "name": "东宝路"
                }, {
                    "name": "金花茶公园"
                }, {
                    "name": "新竹"
                }, {
                    "name": "青秀其他"
                }, {
                    "name": "民族大道"
                }, {
                    "name": "古城路口"
                }, {
                    "name": "南环路"
                }, {
                    "name": "柳沙"
                }, {
                    "name": "碧湖路"
                }, {
                    "name": "建政路"
                }, {
                    "name": "医科大学"
                }, {
                    "name": "南湖"
                }, {
                    "name": "五象广场"
                }, {
                    "name": "其他"
                }],
                "name": "青秀区"
            }, {
                "children": [{
                    "name": "沙井"
                }, {
                    "name": "金湾花城"
                }, {
                    "name": "延安"
                }, {
                    "name": "南国花园"
                }, {
                    "name": "翠湖新城"
                }, {
                    "name": "亭洪路"
                }, {
                    "name": "荣和新城"
                }, {
                    "name": "吴圩"
                }, {
                    "name": "丽江村小区"
                }, {
                    "name": "菠萝岭"
                }, {
                    "name": "二医院"
                }, {
                    "name": "石柱岭"
                }, {
                    "name": "江南其他"
                }, {
                    "name": "那洪"
                }, {
                    "name": "五一路"
                }, {
                    "name": "福建园"
                }, {
                    "name": "其他"
                }],
                "name": "江南区"
            }, {
                "children": [{
                    "name": "鲁班路"
                }, {
                    "name": "区工商局"
                }, {
                    "name": "上尧"
                }, {
                    "name": "安吉"
                }, {
                    "name": "秀灵路"
                }, {
                    "name": "北湖"
                }, {
                    "name": "北际南路"
                }, {
                    "name": "大学西路"
                }, {
                    "name": "广西大学"
                }, {
                    "name": "华强"
                }, {
                    "name": "秀厢大道"
                }, {
                    "name": "广西财经学院"
                }, {
                    "name": "西乡塘其他"
                }, {
                    "name": "新阳"
                }, {
                    "name": "中华路"
                }, {
                    "name": "明秀小区"
                }, {
                    "name": "中尧路"
                }, {
                    "name": "动物园"
                }, {
                    "name": "火炬路"
                }, {
                    "name": "安宁"
                }, {
                    "name": "衡阳"
                }, {
                    "name": "心圩"
                }, {
                    "name": "龙腾路"
                }, {
                    "name": "石埠"
                }, {
                    "name": "其他"
                }],
                "name": "西乡塘区"
            }, {
                "children": [{
                    "name": "大沙田"
                }, {
                    "name": "良庆其他"
                }, {
                    "name": "良庆"
                }, {
                    "name": "其他"
                }],
                "name": "良庆区"
            }, {
                "children": [{
                    "name": "邕宁其他"
                }, {
                    "name": "蒲庙"
                }, {
                    "name": "其他"
                }],
                "name": "邕宁区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "武鸣县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "隆安县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "马山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "上林县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宾阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "横县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "柳州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "城中区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "鱼峰区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "柳南区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "柳北区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "柳江县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "柳城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "鹿寨县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "融安县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "融水苗族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "三江侗族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "桂林",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "秀峰区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "叠彩区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "象山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "七星区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "雁山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "阳朔县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "临桂县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "灵川县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "全州县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "兴安县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "永福县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "灌阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "龙胜各族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "资源县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "平乐县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "荔蒲县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "恭城瑶族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "荔浦县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "梧州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "万秀区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "蝶山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "长洲区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "苍梧县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "藤县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "蒙山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "岑溪"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "北海",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "海城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "银海区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "铁山港区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "合浦县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "防城港",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "港口区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "防城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "上思县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "东兴"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "钦州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "钦南区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "钦北区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "灵山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "浦北县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "贵港",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "港北区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "港南区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "覃塘区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "平南县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "桂平"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "玉林",
            "children": [{
                "children": [{
                    "name": "名山"
                }, {
                    "name": "城西"
                }, {
                    "name": "南江"
                }, {
                    "name": "玉城"
                }, {
                    "name": "城北"
                }, {
                    "name": "其他"
                }],
                "name": "玉州区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "容县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "陆川县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "博白县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "兴业县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "北流"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "百色",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "右江区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "田阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "田东县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "平果县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "德保县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "靖西县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "那坡县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "凌云县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "乐业县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "田林县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "西林县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "隆林各族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "贺州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "八步区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "昭平县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "钟山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "富川瑶族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "河池",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "金城江区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "南丹县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "天峨县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "凤山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "东兰县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "罗城仫佬族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "环江毛南族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "巴马瑶族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "都安瑶族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "大化瑶族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宜州"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "来宾",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "兴宾区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "忻城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "象州县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "武宣县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "金秀瑶族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "合山"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "崇左",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "江洲区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "扶绥县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宁明县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "龙州县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "大新县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "天等县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "凭祥"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }],
        "name": "广西壮族自治区"
    },
    {
        "children": [{
            "name": "海口",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "秀英区"
            }, {
                "children": [{
                    "name": "滨海"
                }, {
                    "name": "海秀"
                }, {
                    "name": "金龙路"
                }, {
                    "name": "大同"
                }, {
                    "name": "龙华其他"
                }, {
                    "name": "金贸"
                }, {
                    "name": "金宇"
                }, {
                    "name": "海垦"
                }, {
                    "name": "其他"
                }],
                "name": "龙华区"
            }, {
                "children": [{
                    "name": "中山"
                }, {
                    "name": "国兴"
                }, {
                    "name": "琼山其他"
                }, {
                    "name": "其他"
                }],
                "name": "琼山区"
            }, {
                "children": [{
                    "name": "海甸"
                }, {
                    "name": "海府"
                }, {
                    "name": "蓝天"
                }, {
                    "name": "人民大道"
                }, {
                    "name": "白沙"
                }, {
                    "name": "和平南"
                }, {
                    "name": "美兰其他"
                }, {
                    "name": "博爱"
                }, {
                    "name": "白龙"
                }, {
                    "name": "其他"
                }],
                "name": "美兰区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "三亚",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "五指山"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "琼海"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "儋州"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "文昌"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "万宁"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "东方"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "定安县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "屯昌县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "澄迈县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "临高县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "白沙黎族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "昌江黎族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "乐东黎族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "陵水黎族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "保亭黎族苗族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "琼中黎族苗族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "西沙群岛"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "南沙群岛"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "中沙群岛的岛礁及其海域"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "辖区"
            }, {
                "children": [{
                    "name": "亚龙湾"
                }, {
                    "name": "三亚湾"
                }, {
                    "name": "大东海"
                }, {
                    "name": "其他"
                }],
                "name": "三亚"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }],
        "name": "海南"
    },
    {
        
            "name": "重庆",
            "children": [{
                "children": [{
                    "name": "百安坝"
                }, {
                    "name": "龙都"
                }, {
                    "name": "高笋塘"
                }, {
                    "name": "甘宁"
                }, {
                    "name": "万州其他"
                }, {
                    "name": "钟鼓楼"
                }, {
                    "name": "九池"
                }, {
                    "name": "周家坝"
                }, {
                    "name": "五桥"
                }, {
                    "name": "天城"
                }, {
                    "name": "高梁"
                }, {
                    "name": "牌楼"
                }, {
                    "name": "孙家"
                }, {
                    "name": "太白"
                }, {
                    "name": "沙河"
                }, {
                    "name": "陈家坝"
                }, {
                    "name": "其他"
                }],
                "name": "万州区"
            }, {
                "children": [{
                    "name": "蔺"
                }, {
                    "name": "崇义"
                }, {
                    "name": "敦仁"
                }, {
                    "name": "江东"
                }, {
                    "name": "江北"
                }, {
                    "name": "白涛"
                }, {
                    "name": "李渡"
                }, {
                    "name": "中峰"
                }, {
                    "name": "龙潭"
                }, {
                    "name": "荔枝"
                }, {
                    "name": "涪陵其他"
                }, {
                    "name": "其他"
                }],
                "name": "涪陵区"
            }, {
                "children": [{
                    "name": "朝天门"
                }, {
                    "name": "化龙桥"
                }, {
                    "name": "大坪"
                }, {
                    "name": "七星岗"
                }, {
                    "name": "两路口"
                }, {
                    "name": "较场口"
                }, {
                    "name": "嘉滨路"
                }, {
                    "name": "望龙门"
                }, {
                    "name": "大溪沟"
                }, {
                    "name": "上清寺"
                }, {
                    "name": "鹅岭"
                }, {
                    "name": "菜园坝"
                }, {
                    "name": "王家坡"
                }, {
                    "name": "解放碑"
                }, {
                    "name": "渝中其他"
                }, {
                    "name": "其他"
                }],
                "name": "渝中区"
            }, {
                "children": [{
                    "name": "大渡口公园"
                }, {
                    "name": "九宫庙"
                }, {
                    "name": "建胜"
                }, {
                    "name": "大渡口其他"
                }, {
                    "name": "马王乡"
                }, {
                    "name": "新山村"
                }, {
                    "name": "跃进村"
                }, {
                    "name": "八桥"
                }, {
                    "name": "春晖路"
                }, {
                    "name": "其他"
                }],
                "name": "大渡口区"
            }, {
                "children": [{
                    "name": "大石坝"
                }, {
                    "name": "寸滩"
                }, {
                    "name": "五里店"
                }, {
                    "name": "江北其他"
                }, {
                    "name": "洋河花园"
                }, {
                    "name": "石马河"
                }, {
                    "name": "观音桥"
                }, {
                    "name": "铁山坪"
                }, {
                    "name": "复盛"
                }, {
                    "name": "华新街"
                }, {
                    "name": "其他"
                }],
                "name": "江北区"
            }, {
                "children": [{
                    "name": "新桥"
                }, {
                    "name": "石井坡"
                }, {
                    "name": "渝碚路"
                }, {
                    "name": "土主"
                }, {
                    "name": "凤凰"
                }, {
                    "name": "重庆大学"
                }, {
                    "name": "沙坪坝其他"
                }, {
                    "name": "小龙坎"
                }, {
                    "name": "歌乐山"
                }, {
                    "name": "曾家"
                }, {
                    "name": "覃家岗"
                }, {
                    "name": "陈家桥"
                }, {
                    "name": "童家桥"
                }, {
                    "name": "天星桥"
                }, {
                    "name": "青木关"
                }, {
                    "name": "磁器口"
                }, {
                    "name": "山洞"
                }, {
                    "name": "土湾"
                }, {
                    "name": "中梁"
                }, {
                    "name": "西永"
                }, {
                    "name": "詹家溪"
                }, {
                    "name": "汉渝路"
                }, {
                    "name": "虎溪"
                }, {
                    "name": "其他"
                }],
                "name": "沙坪坝区"
            }, {
                "children": [{
                    "name": "西彭"
                }, {
                    "name": "石桥铺"
                }, {
                    "name": "含谷"
                }, {
                    "name": "谢家湾"
                }, {
                    "name": "杨家坪"
                }, {
                    "name": "中梁山"
                }, {
                    "name": "石板"
                }, {
                    "name": "陶家"
                }, {
                    "name": "黄桷坪"
                }, {
                    "name": "开发区"
                }, {
                    "name": "石坪桥"
                }, {
                    "name": "金凤"
                }, {
                    "name": "渝州路"
                }, {
                    "name": "九龙坡其他"
                }, {
                    "name": "华岩"
                }, {
                    "name": "白驿"
                }, {
                    "name": "九龙"
                }, {
                    "name": "高新区"
                }, {
                    "name": "其他"
                }],
                "name": "九龙坡区"
            }, {
                "children": [{
                    "name": "玄坛庙"
                }, {
                    "name": "南滨路"
                }, {
                    "name": "龙门浩"
                }, {
                    "name": "黄桷桠"
                }, {
                    "name": "回龙湾"
                }, {
                    "name": "弹子石"
                }, {
                    "name": "南山"
                }, {
                    "name": "四公里"
                }, {
                    "name": "南岸其他"
                }, {
                    "name": "鸡冠石"
                }, {
                    "name": "铜元局"
                }, {
                    "name": "南坪"
                }, {
                    "name": "长生桥"
                }, {
                    "name": "海棠溪"
                }, {
                    "name": "其他"
                }],
                "name": "南岸区"
            }, {
                "children": [{
                    "name": "龙凤桥"
                }, {
                    "name": "天府"
                }, {
                    "name": "北温泉"
                }, {
                    "name": "柳荫"
                }, {
                    "name": "童家溪"
                }, {
                    "name": "朝阳"
                }, {
                    "name": "北碚其他"
                }, {
                    "name": "水土"
                }, {
                    "name": "歇马"
                }, {
                    "name": "东阳"
                }, {
                    "name": "其他"
                }],
                "name": "北碚区"
            }, {
                "children": [{
                    "name": "万盛其他"
                }, {
                    "name": "景星"
                }, {
                    "name": "金桥"
                }, {
                    "name": "万东"
                }, {
                    "name": "其他"
                }],
                "name": "万盛区"
            }, {
                "children": [{
                    "name": "龙滩子"
                }, {
                    "name": "双路"
                }, {
                    "name": "双桥其他"
                }, {
                    "name": "其他"
                }],
                "name": "双桥区"
            }, {
                "children": [{
                    "name": "兴隆"
                }, {
                    "name": "鸳鸯"
                }, {
                    "name": "松树桥"
                }, {
                    "name": "两路"
                }, {
                    "name": "双凤桥"
                }, {
                    "name": "龙溪"
                }, {
                    "name": "统景"
                }, {
                    "name": "人和"
                }, {
                    "name": "双龙湖"
                }, {
                    "name": "洛碛"
                }, {
                    "name": "回兴"
                }, {
                    "name": "大竹林"
                }, {
                    "name": "冉家坝"
                }, {
                    "name": "龙兴"
                }, {
                    "name": "渝北其他"
                }, {
                    "name": "黄泥塝"
                }, {
                    "name": "其他"
                }],
                "name": "渝北区"
            }, {
                "children": [{
                    "name": "东泉"
                }, {
                    "name": "南泉"
                }, {
                    "name": "双河口"
                }, {
                    "name": "接龙"
                }, {
                    "name": "鱼洞"
                }, {
                    "name": "李家沱"
                }, {
                    "name": "花溪"
                }, {
                    "name": "巴南其他"
                }, {
                    "name": "其他"
                }],
                "name": "巴南区"
            }, {
                "children": [{
                    "name": "南海"
                }, {
                    "name": "黔江其他"
                }, {
                    "name": "新华"
                }, {
                    "name": "九龙"
                }, {
                    "name": "濯水"
                }, {
                    "name": "联合"
                }, {
                    "name": "其他"
                }],
                "name": "黔江区"
            }, {
                "children": [{
                    "name": "凤城"
                }, {
                    "name": "邻封"
                }, {
                    "name": "长寿其他"
                }, {
                    "name": "江南"
                }, {
                    "name": "云集"
                }, {
                    "name": "洪湖"
                }, {
                    "name": "渡舟"
                }, {
                    "name": "长寿湖"
                }, {
                    "name": "其他"
                }],
                "name": "长寿区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "綦江县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "潼南县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "铜梁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "大足县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "荣昌县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "璧山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "梁平县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "城口县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "丰都县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "垫江县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "武隆县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "忠县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "开县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "云阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "奉节县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "巫山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "巫溪县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "石柱土家族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "秀山土家族苗族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "酉阳土家族苗族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "彭水苗族土家族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "江津"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "合川"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "永川"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "南川"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "彭水县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "南川区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "江津区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "永川区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        ,
        "name": "重庆"
    },
    {
        "children": [{
            "name": "成都",
            "children": [{
                "children": [{
                    "name": "九眼桥"
                }, {
                    "name": "东光"
                }, {
                    "name": "春熙路"
                }, {
                    "name": "牛口"
                }, {
                    "name": "四川师大"
                }, {
                    "name": "海椒"
                }, {
                    "name": "书院街"
                }, {
                    "name": "成龙路"
                }, {
                    "name": "盐口"
                }, {
                    "name": "督院街"
                }, {
                    "name": "莲桂路"
                }, {
                    "name": "红星路"
                }, {
                    "name": "三圣"
                }, {
                    "name": "莲新"
                }, {
                    "name": "东门大桥"
                }, {
                    "name": "锦江其他"
                }, {
                    "name": "水井坊"
                }, {
                    "name": "牛王庙"
                }, {
                    "name": "合江亭"
                }, {
                    "name": "龙舟路"
                }, {
                    "name": "其他"
                }],
                "name": "锦江区"
            }, {
                "children": [{
                    "name": "人民公园"
                }, {
                    "name": "东坡"
                }, {
                    "name": "汪家拐"
                }, {
                    "name": "骡马"
                }, {
                    "name": "光华"
                }, {
                    "name": "青羊宫"
                }, {
                    "name": "八宝街"
                }, {
                    "name": "天府广场"
                }, {
                    "name": "杜甫草堂"
                }, {
                    "name": "太升路"
                }, {
                    "name": "黄田坝"
                }, {
                    "name": "金沙"
                }, {
                    "name": "草街"
                }, {
                    "name": "青羊其他"
                }, {
                    "name": "草堂"
                }, {
                    "name": "青羊大道"
                }, {
                    "name": "西南财大"
                }, {
                    "name": "文家"
                }, {
                    "name": "府南"
                }, {
                    "name": "其他"
                }],
                "name": "青羊区"
            }, {
                "children": [{
                    "name": "梁家巷"
                }, {
                    "name": "天回"
                }, {
                    "name": "抚琴"
                }, {
                    "name": "人民北路"
                }, {
                    "name": "解放路"
                }, {
                    "name": "城隍庙"
                }, {
                    "name": "交大路"
                }, {
                    "name": "金牛其他"
                }, {
                    "name": "九里堤"
                }, {
                    "name": "沙河源"
                }, {
                    "name": "火车站"
                }, {
                    "name": "茶店子"
                }, {
                    "name": "金泉"
                }, {
                    "name": "营门口"
                }, {
                    "name": "驷马桥"
                }, {
                    "name": "李家沱"
                }, {
                    "name": "西南交大"
                }, {
                    "name": "会展中心"
                }, {
                    "name": "凤凰山"
                }, {
                    "name": "黄忠"
                }, {
                    "name": "蜀汉路"
                }, {
                    "name": "其他"
                }],
                "name": "金牛区"
            }, {
                "children": [{
                    "name": "四川大学"
                }, {
                    "name": "跳伞塔"
                }, {
                    "name": "高升桥"
                }, {
                    "name": "紫荆"
                }, {
                    "name": "金花桥"
                }, {
                    "name": "武侯其他"
                }, {
                    "name": "机投桥"
                }, {
                    "name": "双楠"
                }, {
                    "name": "望江路"
                }, {
                    "name": "浆洗街"
                }, {
                    "name": "桂溪"
                }, {
                    "name": "神仙树"
                }, {
                    "name": "火车南站"
                }, {
                    "name": "红牌楼"
                }, {
                    "name": "桐梓林"
                }, {
                    "name": "磨子桥"
                }, {
                    "name": "肖家河"
                }, {
                    "name": "玉林"
                }, {
                    "name": "武侯祠"
                }, {
                    "name": "小天竺"
                }, {
                    "name": "科华北路"
                }, {
                    "name": "簇桥"
                }, {
                    "name": "其他"
                }],
                "name": "武侯区"
            }, {
                "children": [{
                    "name": "府青路"
                }, {
                    "name": "保和"
                }, {
                    "name": "双桥子"
                }, {
                    "name": "新鸿路"
                }, {
                    "name": "双水碾"
                }, {
                    "name": "万年场"
                }, {
                    "name": "圣灯"
                }, {
                    "name": "八里庄"
                }, {
                    "name": "建设路"
                }, {
                    "name": "二仙桥"
                }, {
                    "name": "青龙"
                }, {
                    "name": "成华其他"
                }, {
                    "name": "八里小区"
                }, {
                    "name": "猛追湾"
                }, {
                    "name": "双林路"
                }, {
                    "name": "其他"
                }],
                "name": "成华区"
            }, {
                "children": [{
                    "name": "大面"
                }, {
                    "name": "洪河"
                }, {
                    "name": "同安"
                }, {
                    "name": "十陵"
                }, {
                    "name": "龙泉"
                }, {
                    "name": "龙泉驿其他"
                }, {
                    "name": "其他"
                }],
                "name": "龙泉驿区"
            }, {
                "children": [{
                    "name": "青白江其他"
                }, {
                    "name": "大弯"
                }, {
                    "name": "红阳"
                }, {
                    "name": "其他"
                }],
                "name": "青白江区"
            }, {
                "children": [{
                    "name": "斑竹园"
                }, {
                    "name": "木兰"
                }, {
                    "name": "大丰"
                }, {
                    "name": "新繁"
                }, {
                    "name": "新都"
                }, {
                    "name": "石板滩"
                }, {
                    "name": "三河"
                }, {
                    "name": "龙桥"
                }, {
                    "name": "新都其他"
                }, {
                    "name": "其他"
                }],
                "name": "新都区"
            }, {
                "children": [{
                    "name": "天府"
                }, {
                    "name": "温江其他"
                }, {
                    "name": "公平"
                }, {
                    "name": "永宁"
                }, {
                    "name": "万春"
                }, {
                    "name": "和盛"
                }, {
                    "name": "涌泉"
                }, {
                    "name": "柳城"
                }, {
                    "name": "金马"
                }, {
                    "name": "其他"
                }],
                "name": "温江区"
            }, {
                "children": [{
                    "name": "淮口"
                }, {
                    "name": "五凤"
                }, {
                    "name": "赵镇"
                }, {
                    "name": "其他"
                }],
                "name": "金堂县"
            }, {
                "children": [{
                    "name": "新兴"
                }, {
                    "name": "三星"
                }, {
                    "name": "黄龙溪"
                }, {
                    "name": "永安"
                }, {
                    "name": "文星"
                }, {
                    "name": "金桥"
                }, {
                    "name": "永兴"
                }, {
                    "name": "公兴"
                }, {
                    "name": "西安路"
                }, {
                    "name": "黄甲"
                }, {
                    "name": "白沙"
                }, {
                    "name": "正兴"
                }, {
                    "name": "兴隆"
                }, {
                    "name": "太平"
                }, {
                    "name": "白家"
                }, {
                    "name": "黄水"
                }, {
                    "name": "胜利"
                }, {
                    "name": "九江"
                }, {
                    "name": "顺城街"
                }, {
                    "name": "东升"
                }, {
                    "name": "中和"
                }, {
                    "name": "华阳"
                }, {
                    "name": "其他"
                }],
                "name": "双流县"
            }, {
                "children": [{
                    "name": "西华"
                }, {
                    "name": "唐昌"
                }, {
                    "name": "郫筒"
                }, {
                    "name": "安靖"
                }, {
                    "name": "唐元"
                }, {
                    "name": "团结"
                }, {
                    "name": "犀浦"
                }, {
                    "name": "安德"
                }, {
                    "name": "红光"
                }, {
                    "name": "德源"
                }, {
                    "name": "友爱"
                }, {
                    "name": "其他"
                }],
                "name": "郫县"
            }, {
                "children": [{
                    "name": "晋原"
                }, {
                    "name": "西岭"
                }, {
                    "name": "安仁"
                }, {
                    "name": "董场"
                }, {
                    "name": "新场"
                }, {
                    "name": "沙渠"
                }, {
                    "name": "花水湾"
                }, {
                    "name": "其他"
                }],
                "name": "大邑县"
            }, {
                "children": [{
                    "name": "朝阳湖"
                }, {
                    "name": "鹤山"
                }, {
                    "name": "成佳"
                }, {
                    "name": "其他"
                }],
                "name": "蒲江县"
            }, {
                "children": [{
                    "name": "花桥"
                }, {
                    "name": "永商"
                }, {
                    "name": "五津"
                }, {
                    "name": "邓双"
                }, {
                    "name": "其他"
                }],
                "name": "新津县"
            }, {
                "children": [{
                    "name": "青城山"
                }, {
                    "name": "灌口"
                }, {
                    "name": "中兴"
                }, {
                    "name": "蒲阳"
                }, {
                    "name": "聚源"
                }, {
                    "name": "大观"
                }, {
                    "name": "幸福"
                }, {
                    "name": "翠月湖"
                }, {
                    "name": "胥家"
                }, {
                    "name": "石羊"
                }, {
                    "name": "玉堂"
                }, {
                    "name": "其他"
                }],
                "name": "都江堰"
            }, {
                "children": [{
                    "name": "丽春"
                }, {
                    "name": "小鱼洞"
                }, {
                    "name": "军乐"
                }, {
                    "name": "九尺"
                }, {
                    "name": "致和"
                }, {
                    "name": "天彭"
                }, {
                    "name": "龙门山"
                }, {
                    "name": "其他"
                }],
                "name": "彭州"
            }, {
                "children": [{
                    "name": "临邛"
                }, {
                    "name": "天台山"
                }, {
                    "name": "火井"
                }, {
                    "name": "水口"
                }, {
                    "name": "前进"
                }, {
                    "name": "夹关"
                }, {
                    "name": "羊安"
                }, {
                    "name": "平乐"
                }, {
                    "name": "其他"
                }],
                "name": "邛崃"
            }, {
                "children": [{
                    "name": "桤泉"
                }, {
                    "name": "崇阳"
                }, {
                    "name": "街子"
                }, {
                    "name": "万家"
                }, {
                    "name": "其他"
                }],
                "name": "崇州"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "高新区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "自贡",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "自流井区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "贡井区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "大安区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "沿滩区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "荣县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "富顺县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "攀枝花",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "东区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "西区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "仁和区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "米易县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "盐边县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "泸州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "江阳区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "纳溪区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "龙马潭区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "泸县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "合江县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "叙永县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "古蔺县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "德阳",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "旌阳区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "中江县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "罗江县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "广汉"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "什邡"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "绵竹"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "绵阳",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "涪城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "游仙区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "三台县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "盐亭县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "安县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "梓潼县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "北川羌族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "平武县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "江油"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "广元",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "中区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "元坝区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "朝天区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "旺苍县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "青川县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "剑阁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "苍溪县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "遂宁",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "船山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "安居区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "蓬溪县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "射洪县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "大英县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "内江",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "中区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "东兴区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "威远县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "资中县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "隆昌县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "乐山",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "中区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "沙湾区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "五通桥区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "金口河区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "犍为县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "井研县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "夹江县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "沐川县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "峨边彝族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "马边彝族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "峨眉山"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "南充",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "顺庆区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "高坪区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "嘉陵区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "南部县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "营山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "蓬安县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "仪陇县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "西充县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "阆中"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "眉山",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "东坡区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "仁寿县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "彭山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "洪雅县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "丹棱县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "青神县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "宜宾",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "翠屏区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宜宾县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "南溪县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "江安县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "长宁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "高县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "珙县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "筠连县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "兴文县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "屏山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "广安",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "广安区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "岳池县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "武胜县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "邻水县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "华蓥"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "达州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "通川区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "达县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宣汉县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "开江县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "大竹县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "渠县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "万源"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "雅安",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "雨城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "名山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "荥经县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "汉源县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "石棉县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "天全县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "芦山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宝兴县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "巴中",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "巴州区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "通江县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "南江县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "平昌县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "资阳",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "雁江区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "安岳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "乐至县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "简阳"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "阿坝藏族羌族自治州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "汶川县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "理县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "茂县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "松潘县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "九寨沟县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "金川县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "小金县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "黑水县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "马尔康县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "壤塘县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "阿坝县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "若尔盖县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "红原县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "甘孜藏族自治州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "康定县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "泸定县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "丹巴县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "九龙县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "雅江县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "道孚县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "炉霍县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "甘孜县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "新龙县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "德格县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "白玉县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "石渠县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "色达县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "理塘县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "巴塘县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "乡城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "稻城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "得荣县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "凉山彝族自治州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "西昌"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "木里藏族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "盐源县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "德昌县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "会理县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "会东县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宁南县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "普格县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "布拖县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "金阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "昭觉县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "喜德县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "冕宁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "越西县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "甘洛县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "美姑县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "雷波县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }],
        "name": "四川"
    },
    {
        "children": [{
            "name": "贵阳",
            "children": [{
                "children": [{
                    "name": "月亮岩"
                }, {
                    "name": "纪念塔"
                }, {
                    "name": "大南门"
                }, {
                    "name": "新路口"
                }, {
                    "name": "西湖路"
                }, {
                    "name": "营盘路"
                }, {
                    "name": "新华路"
                }, {
                    "name": "宝山南路"
                }, {
                    "name": "二戈寨"
                }, {
                    "name": "兴关"
                }, {
                    "name": "解放路"
                }, {
                    "name": "遵义路"
                }, {
                    "name": "南明其他"
                }, {
                    "name": "河滨"
                }, {
                    "name": "花果园"
                }, {
                    "name": "团坡"
                }, {
                    "name": "富水南路"
                }, {
                    "name": "沙冲"
                }, {
                    "name": "太慈桥"
                }, {
                    "name": "护国路"
                }, {
                    "name": "中华南路"
                }, {
                    "name": "府路"
                }, {
                    "name": "龙洞堡"
                }, {
                    "name": "油榨街"
                }, {
                    "name": "其他"
                }],
                "name": "南明区"
            }, {
                "children": [{
                    "name": "中天花园"
                }, {
                    "name": "东山"
                }, {
                    "name": "中华中路"
                }, {
                    "name": "喷水池"
                }, {
                    "name": "云岩其他"
                }, {
                    "name": "中华北路"
                }, {
                    "name": "八鸽岩"
                }, {
                    "name": "狮峰路"
                }, {
                    "name": "大十字"
                }, {
                    "name": "大西门"
                }, {
                    "name": "宝山北路"
                }, {
                    "name": "黔灵公园"
                }, {
                    "name": "三桥"
                }, {
                    "name": "中山东路"
                }, {
                    "name": "贵乌路"
                }, {
                    "name": "老东门"
                }, {
                    "name": "威清路"
                }, {
                    "name": "客车站"
                }, {
                    "name": "环城北路"
                }, {
                    "name": "北京路"
                }, {
                    "name": "煤矿村"
                }, {
                    "name": "普陀路"
                }, {
                    "name": "延安中路"
                }, {
                    "name": "陕西路"
                }, {
                    "name": "沙河"
                }, {
                    "name": "盐务街"
                }, {
                    "name": "中山西路"
                }, {
                    "name": "文昌北路"
                }, {
                    "name": "新添大道"
                }, {
                    "name": "二桥"
                }, {
                    "name": "大营坡"
                }, {
                    "name": "西路"
                }, {
                    "name": "黔灵东路"
                }, {
                    "name": "师大"
                }, {
                    "name": "公园路"
                }, {
                    "name": "府路"
                }, {
                    "name": "头桥"
                }, {
                    "name": "宅吉"
                }, {
                    "name": "其他"
                }],
                "name": "云岩区"
            }, {
                "children": [{
                    "name": "石板"
                }, {
                    "name": "花溪其他"
                }, {
                    "name": "其他"
                }],
                "name": "花溪区"
            }, {
                "children": [{
                    "name": "乌当其他"
                }, {
                    "name": "新添寨"
                }, {
                    "name": "金华"
                }, {
                    "name": "其他"
                }],
                "name": "乌当区"
            }, {
                "children": [{
                    "name": "艳山红"
                }, {
                    "name": "都拉营"
                }, {
                    "name": "龚家寨"
                }, {
                    "name": "白云其他"
                }, {
                    "name": "大山洞"
                }, {
                    "name": "其他"
                }],
                "name": "白云区"
            }, {
                "children": [{
                    "name": "黄河路"
                }, {
                    "name": "清水江路"
                }, {
                    "name": "小河其他"
                }, {
                    "name": "中曹"
                }, {
                    "name": "长江路"
                }, {
                    "name": "漓江路"
                }, {
                    "name": "其他"
                }],
                "name": "小河区"
            }, {
                "children": [{
                    "name": "马场"
                }, {
                    "name": "城关"
                }, {
                    "name": "其他"
                }],
                "name": "开阳县"
            }, {
                "children": [{
                    "name": "永靖"
                }, {
                    "name": "温泉"
                }, {
                    "name": "其他"
                }],
                "name": "息烽县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "修文县"
            }, {
                "children": [{
                    "name": "青龙"
                }, {
                    "name": "站街"
                }, {
                    "name": "红枫湖"
                }, {
                    "name": "其他"
                }],
                "name": "清镇"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "六盘水",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "钟山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "六枝特区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "水城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "盘县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "遵义",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "红花岗区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "汇川区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "遵义县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "桐梓县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "绥阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "正安县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "道真仡佬族苗族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "务川仡佬族苗族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "凤冈县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "湄潭县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "余庆县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "习水县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "赤水"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "仁怀"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "安顺",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "西秀区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "平坝县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "普定县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "镇宁布依族苗族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "关岭布依族苗族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "紫云苗族布依族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "铜仁地区",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "铜仁"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "江口县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "玉屏侗族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "石阡县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "思南县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "印江土家族苗族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "德江县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "沿河土家族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "松桃苗族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "万山特区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "黔西南布依族苗族自治州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "兴义"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "兴仁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "普安县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "晴隆县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "贞丰县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "望谟县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "册亨县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "安龙县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "毕节地区",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "毕节"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "大方县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "黔西县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "金沙县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "织金县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "纳雍县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "威宁彝族回族苗族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "赫章县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "黔东南苗族侗族自治州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "凯里"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "黄平县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "施秉县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "三穗县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "镇远县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "岑巩县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "天柱县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "锦屏县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "剑河县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "台江县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "黎平县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "榕江县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "从江县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "雷山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "麻江县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "丹寨县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "黔南布依族苗族自治州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "都匀"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "福泉"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "荔波县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "贵定县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "瓮安县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "独山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "平塘县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "罗甸县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "长顺县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "龙里县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "惠水县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "三都水族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }],
        "name": "贵州"
    },
    {
        "children": [{
            "name": "昆明",
            "children": [{
                "children": [{
                    "name": "翠湖公园"
                }, {
                    "name": "华龙人家"
                }, {
                    "name": "莲花池"
                }, {
                    "name": "黑林铺"
                }, {
                    "name": "虹山东路"
                }, {
                    "name": "教场中路"
                }, {
                    "name": "护国"
                }, {
                    "name": "巴士家园"
                }, {
                    "name": "国际花园"
                }, {
                    "name": "茭菱路"
                }, {
                    "name": "大观"
                }, {
                    "name": "普吉"
                }, {
                    "name": "文化巷"
                }, {
                    "name": "黄土坡"
                }, {
                    "name": "青年路"
                }, {
                    "name": "龙翔"
                }, {
                    "name": "北门街"
                }, {
                    "name": "红云"
                }, {
                    "name": "小西门"
                }, {
                    "name": "华山"
                }, {
                    "name": "莲华"
                }, {
                    "name": "王家桥"
                }, {
                    "name": "赵家堆"
                }, {
                    "name": "下马村"
                }, {
                    "name": "梁家河"
                }, {
                    "name": "小菜园"
                }, {
                    "name": "教场北路"
                }, {
                    "name": "三街"
                }, {
                    "name": "丰宁小区"
                }, {
                    "name": "建设路"
                }, {
                    "name": "龙泉"
                }, {
                    "name": "钱局街"
                }, {
                    "name": "江岸小区"
                }, {
                    "name": "威远街"
                }, {
                    "name": "西站"
                }, {
                    "name": "五华其他"
                }, {
                    "name": "云南大学"
                }, {
                    "name": "学府路"
                }, {
                    "name": "北教场"
                }, {
                    "name": "昆瑞路"
                }, {
                    "name": "其他"
                }],
                "name": "五华区"
            }, {
                "children": [{
                    "name": "金星立交桥"
                }, {
                    "name": "席子营"
                }, {
                    "name": "东华"
                }, {
                    "name": "环城北路"
                }, {
                    "name": "刘家营"
                }, {
                    "name": "人民东路"
                }, {
                    "name": "北京路"
                }, {
                    "name": "白龙路"
                }, {
                    "name": "交三桥"
                }, {
                    "name": "金沙小区"
                }, {
                    "name": "金实小区"
                }, {
                    "name": "东风巷"
                }, {
                    "name": "白龙寺"
                }, {
                    "name": "白塔路"
                }, {
                    "name": "金康园"
                }, {
                    "name": "东风广场"
                }, {
                    "name": "王旗营"
                }, {
                    "name": "延安医院"
                }, {
                    "name": "联盟"
                }, {
                    "name": "颐华路"
                }, {
                    "name": "麻线营"
                }, {
                    "name": "拓东"
                }, {
                    "name": "盘龙其他"
                }, {
                    "name": "茨坝"
                }, {
                    "name": "新迎路"
                }, {
                    "name": "白云路"
                }, {
                    "name": "其他"
                }],
                "name": "盘龙区"
            }, {
                "children": [{
                    "name": "关上"
                }, {
                    "name": "官渡其他"
                }, {
                    "name": "昆明站"
                }, {
                    "name": "宝海路"
                }, {
                    "name": "塘子巷"
                }, {
                    "name": "宝海公园"
                }, {
                    "name": "吴井路"
                }, {
                    "name": "菊花村"
                }, {
                    "name": "日新小区"
                }, {
                    "name": "和平新村"
                }, {
                    "name": "金马"
                }, {
                    "name": "金马立交桥"
                }, {
                    "name": "大树营"
                }, {
                    "name": "太和"
                }, {
                    "name": "民航路"
                }, {
                    "name": "董家湾"
                }, {
                    "name": "经济技术开发区"
                }, {
                    "name": "东站"
                }, {
                    "name": "和平村"
                }, {
                    "name": "其他"
                }],
                "name": "官渡区"
            }, {
                "children": [{
                    "name": "碧鸡"
                }, {
                    "name": "大观楼"
                }, {
                    "name": "丹霞路"
                }, {
                    "name": "西苑立交桥"
                }, {
                    "name": "近华浦路"
                }, {
                    "name": "船房小区"
                }, {
                    "name": "云兴路"
                }, {
                    "name": "正和小区"
                }, {
                    "name": "西坝路"
                }, {
                    "name": "春苑小区"
                }, {
                    "name": "兴苑路"
                }, {
                    "name": "金碧"
                }, {
                    "name": "阳光花园"
                }, {
                    "name": "安康路"
                }, {
                    "name": "新闻路"
                }, {
                    "name": "梁源小区"
                }, {
                    "name": "金马坊"
                }, {
                    "name": "杨家地"
                }, {
                    "name": "华昌路"
                }, {
                    "name": "东寺街"
                }, {
                    "name": "马街"
                }, {
                    "name": "西华小区"
                }, {
                    "name": "环城西路"
                }, {
                    "name": "东陆饭店"
                }, {
                    "name": "海口"
                }, {
                    "name": "民族村"
                }, {
                    "name": "秋苑小区"
                }, {
                    "name": "近日楼"
                }, {
                    "name": "棕树营"
                }, {
                    "name": "严家地"
                }, {
                    "name": "前卫"
                }, {
                    "name": "永昌"
                }, {
                    "name": "福海"
                }, {
                    "name": "气象路"
                }, {
                    "name": "工人新村"
                }, {
                    "name": "西山其他"
                }, {
                    "name": "其他"
                }],
                "name": "西山区"
            }, {
                "children": [{
                    "name": "新村"
                }, {
                    "name": "东川其他"
                }, {
                    "name": "其他"
                }],
                "name": "东川区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "呈贡县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "晋宁县"
            }, {
                "children": [{
                    "name": "大营"
                }, {
                    "name": "永定"
                }, {
                    "name": "其他"
                }],
                "name": "富民县"
            }, {
                "children": [{
                    "name": "匡远"
                }, {
                    "name": "汤池"
                }, {
                    "name": "其他"
                }],
                "name": "宜良县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "石林彝族自治县"
            }, {
                "children": [{
                    "name": "杨林"
                }, {
                    "name": "嵩阳"
                }, {
                    "name": "其他"
                }],
                "name": "嵩明县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "禄劝彝族苗族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "寻甸回族彝族自治县"
            }, {
                "children": [{
                    "name": "温泉"
                }, {
                    "name": "连然"
                }, {
                    "name": "青龙"
                }, {
                    "name": "其他"
                }],
                "name": "安宁"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "曲靖",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "麒麟区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "马龙县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "陆良县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "师宗县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "罗平县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "富源县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "会泽县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "沾益县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宣威"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "玉溪",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "红塔区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "江川县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "澄江县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "通海县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "华宁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "易门县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "峨山彝族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "新平彝族傣族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "元江哈尼族彝族傣族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "元江县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "保山",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "隆阳区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "施甸县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "腾冲县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "龙陵县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "昌宁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "昭通",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "昭阳区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "鲁甸县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "巧家县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "盐津县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "大关县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "永善县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "绥江县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "镇雄县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "彝良县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "威信县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "水富县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "丽江",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "古城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "玉龙纳西族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "永胜县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "华坪县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宁蒗彝族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "思茅",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "翠云区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "普洱哈尼族彝族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "墨江哈尼族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "景东彝族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "景谷傣族彝族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "镇沅彝族哈尼族拉祜族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "江城哈尼族彝族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "孟连傣族拉祜族佤族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "澜沧拉祜族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "西盟佤族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "临沧",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "临翔区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "凤庆县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "云县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "永德县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "镇康县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "双江拉祜族佤族布朗族傣族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "耿马傣族佤族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "沧源佤族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "双江县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "楚雄彝族自治州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "楚雄"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "双柏县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "牟定县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "南华县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "姚安县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "大姚县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "永仁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "元谋县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "武定县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "禄丰县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "红河哈尼族彝族自治州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "个旧"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "开远"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "蒙自县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "屏边苗族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "建水县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "石屏县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "弥勒县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "泸西县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "元阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "红河县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "金平苗族瑶族傣族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "绿春县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "河口瑶族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "文山壮族苗族自治州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "文山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "砚山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "西畴县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "麻栗坡县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "马关县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "丘北县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "广南县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "富宁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "西双版纳傣族自治州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "景洪"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "勐海县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "勐腊县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "大理白族自治州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "大理"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "漾濞彝族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "祥云县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宾川县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "弥渡县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "南涧彝族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "巍山彝族回族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "永平县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "云龙县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "洱源县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "剑川县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "鹤庆县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "德宏傣族景颇族自治州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "瑞丽"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "潞西"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "梁河县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "盈江县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "陇川县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "怒江傈僳族自治州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "泸水县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "福贡县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "贡山独龙族怒族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "兰坪白族普米族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "迪庆藏族自治州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "香格里拉县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "德钦县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "维西傈僳族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }],
        "name": "云南"
    },
    {
        "children": [{
            "name": "拉萨",
            "children": [{
                "children": [{
                    "name": "八廓"
                }, {
                    "name": "吉日"
                }, {
                    "name": "扎基"
                }, {
                    "name": "吉崩岗"
                }, {
                    "name": "冲赛康"
                }, {
                    "name": "其他"
                }],
                "name": "城关区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "林周县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "当雄县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "尼木县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "曲水县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "堆龙德庆县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "达孜县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "墨竹工卡县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "昌都地区",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "昌都县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "江达县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "贡觉县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "类乌齐县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "丁青县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "察雅县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "八宿县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "左贡县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "芒康县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "洛隆县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "边坝县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "山南地区",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "乃东县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "扎囊县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "贡嘎县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "桑日县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "琼结县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "曲松县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "措美县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "洛扎县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "加查县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "隆子县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "错那县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "浪卡子县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "日喀则地区",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "日喀则"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "南木林县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "江孜县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "定日县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "萨迦县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "拉孜县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "昂仁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "谢通门县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "白朗县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "仁布县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "康马县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "定结县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "仲巴县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "亚东县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "吉隆县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "聂拉木县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "萨嘎县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "岗巴县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "那曲地区",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "那曲县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "嘉黎县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "比如县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "聂荣县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "安多县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "申扎县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "索县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "班戈县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "巴青县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "尼玛县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "阿里地区",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "普兰县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "札达县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "噶尔县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "日土县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "革吉县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "改则县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "措勤县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "林芝地区",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "林芝县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "工布江达县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "米林县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "墨脱县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "波密县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "察隅县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "朗县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }],
        "name": "西藏自治区"
    },
    {
        "children": [{
            "name": "西安",
            "children": [{
                "children": [{
                    "name": "胡家庙"
                }, {
                    "name": "尚勤路"
                }, {
                    "name": "西京医院"
                }, {
                    "name": "火车站"
                }, {
                    "name": "大差"
                }, {
                    "name": "长乐西路"
                }, {
                    "name": "长乐中路"
                }, {
                    "name": "新城其他"
                }, {
                    "name": "太华路"
                }, {
                    "name": "万寿路"
                }, {
                    "name": "北关"
                }, {
                    "name": "长缨东路"
                }, {
                    "name": "康复路"
                }, {
                    "name": "中山门"
                }, {
                    "name": "韩森寨"
                }, {
                    "name": "西一路"
                }, {
                    "name": "钟楼"
                }, {
                    "name": "二马路"
                }, {
                    "name": "西五路"
                }, {
                    "name": "解放路"
                }, {
                    "name": "北大街"
                }, {
                    "name": "东五路"
                }, {
                    "name": "其他"
                }],
                "name": "新城区"
            }, {
                "children": [{
                    "name": "长安路"
                }, {
                    "name": "碑林其他"
                }, {
                    "name": "西北大"
                }, {
                    "name": "建国门"
                }, {
                    "name": "西安交大"
                }, {
                    "name": "和平路"
                }, {
                    "name": "朱雀门"
                }, {
                    "name": "张家村"
                }, {
                    "name": "东大街"
                }, {
                    "name": "边家村"
                }, {
                    "name": "小雁塔"
                }, {
                    "name": "南院门"
                }, {
                    "name": "东关南街"
                }, {
                    "name": "南大街"
                }, {
                    "name": "金花路"
                }, {
                    "name": "东木头"
                }, {
                    "name": "建设路"
                }, {
                    "name": "环城南路"
                }, {
                    "name": "柏树林"
                }, {
                    "name": "何家村"
                }, {
                    "name": "互助路立交"
                }, {
                    "name": "长乐坊"
                }, {
                    "name": "文昌门"
                }, {
                    "name": "和平门"
                }, {
                    "name": "东门外"
                }, {
                    "name": "安东街"
                }, {
                    "name": "文艺路"
                }, {
                    "name": "安西街"
                }, {
                    "name": "大学南路"
                }, {
                    "name": "太乙路"
                }, {
                    "name": "其他"
                }],
                "name": "碑林区"
            }, {
                "children": [{
                    "name": "甜水井"
                }, {
                    "name": "枣园"
                }, {
                    "name": "西稍门"
                }, {
                    "name": "自强路"
                }, {
                    "name": "大观园"
                }, {
                    "name": "广济街"
                }, {
                    "name": "汉城路沿线"
                }, {
                    "name": "庙后街"
                }, {
                    "name": "锦园小区"
                }, {
                    "name": "红庙坡"
                }, {
                    "name": "西大街"
                }, {
                    "name": "劳动公园"
                }, {
                    "name": "西华门"
                }, {
                    "name": "玉祥门"
                }, {
                    "name": "鼓楼"
                }, {
                    "name": "丰庆路"
                }, {
                    "name": "城西客运站"
                }, {
                    "name": "北院门"
                }, {
                    "name": "西关"
                }, {
                    "name": "莲湖其他"
                }, {
                    "name": "莲湖公园"
                }, {
                    "name": "桃园路"
                }, {
                    "name": "环城西路"
                }, {
                    "name": "土门"
                }, {
                    "name": "丰禾路"
                }, {
                    "name": "安定门"
                }, {
                    "name": "青年路"
                }, {
                    "name": "其他"
                }],
                "name": "莲湖区"
            }, {
                "children": [{
                    "name": "洪庆"
                }, {
                    "name": "席王"
                }, {
                    "name": "纺织城"
                }, {
                    "name": "十里铺"
                }, {
                    "name": "灞桥其他"
                }, {
                    "name": "其他"
                }],
                "name": "灞桥区"
            }, {
                "children": [{
                    "name": "凤城四路"
                }, {
                    "name": "草滩"
                }, {
                    "name": "经济技术开发区"
                }, {
                    "name": "龙首村"
                }, {
                    "name": "凤城一路"
                }, {
                    "name": "三桥"
                }, {
                    "name": "张家堡"
                }, {
                    "name": "二府庄"
                }, {
                    "name": "徐家湾"
                }, {
                    "name": "未央其他"
                }, {
                    "name": "未央路沿线"
                }, {
                    "name": "辛家庙"
                }, {
                    "name": "方新村"
                }, {
                    "name": "文景路"
                }, {
                    "name": "雅荷花园"
                }, {
                    "name": "其他"
                }],
                "name": "未央区"
            }, {
                "children": [{
                    "name": "吉祥路"
                }, {
                    "name": "科技二路"
                }, {
                    "name": "电子正街"
                }, {
                    "name": "等驾坡"
                }, {
                    "name": "光华路"
                }, {
                    "name": "昆明路"
                }, {
                    "name": "翠华路"
                }, {
                    "name": "电子城"
                }, {
                    "name": "丁白路"
                }, {
                    "name": "北山门"
                }, {
                    "name": "南郊大学区"
                }, {
                    "name": "玫瑰大楼"
                }, {
                    "name": "大雁塔"
                }, {
                    "name": "科技路西口"
                }, {
                    "name": "长延堡"
                }, {
                    "name": "旺座现代城"
                }, {
                    "name": "小寨"
                }, {
                    "name": "科技一路"
                }, {
                    "name": "永松路"
                }, {
                    "name": "太白小区"
                }, {
                    "name": "电视塔"
                }, {
                    "name": "高科花园"
                }, {
                    "name": "雁塔其他"
                }, {
                    "name": "朱雀大街"
                }, {
                    "name": "西影路"
                }, {
                    "name": "高新路"
                }, {
                    "name": "鱼化寨"
                }, {
                    "name": "唐延路"
                }, {
                    "name": "杨家村"
                }, {
                    "name": "明德门"
                }, {
                    "name": "亚美大厦"
                }, {
                    "name": "沣惠南路"
                }, {
                    "name": "其他"
                }],
                "name": "雁塔区"
            }, {
                "children": [{
                    "name": "关山"
                }, {
                    "name": "新华路"
                }, {
                    "name": "凤凰路"
                }, {
                    "name": "阎良其他"
                }, {
                    "name": "其他"
                }],
                "name": "阎良区"
            }, {
                "children": [{
                    "name": "行者"
                }, {
                    "name": "秦陵"
                }, {
                    "name": "骊山"
                }, {
                    "name": "临潼其他"
                }, {
                    "name": "其他"
                }],
                "name": "临潼区"
            }, {
                "children": [{
                    "name": "韦曲"
                }, {
                    "name": "长安其他"
                }, {
                    "name": "郭杜"
                }, {
                    "name": "斗门"
                }, {
                    "name": "滦镇"
                }, {
                    "name": "王寺"
                }, {
                    "name": "太乙宫"
                }, {
                    "name": "子午"
                }, {
                    "name": "马王"
                }, {
                    "name": "其他"
                }],
                "name": "长安区"
            }, {
                "children": [{
                    "name": "城关"
                }, {
                    "name": "汤峪"
                }, {
                    "name": "其他"
                }],
                "name": "蓝田县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "周至县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "户县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "高陵县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "铜川",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "王益区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "印台区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "耀州区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宜君县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "宝鸡",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "渭滨区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "金台区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "陈仓区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "凤翔县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "岐山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "扶风县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "眉县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "陇县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "千阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "麟游县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "凤县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "太白县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "咸阳",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "秦都区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "杨凌区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "渭城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "三原县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "泾阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "乾县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "礼泉县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "永寿县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "彬县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "长武县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "旬邑县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "淳化县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "武功县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "兴平"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "杨陵区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "渭南",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "临渭区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "华县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "潼关县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "大荔县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "合阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "澄城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "蒲城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "白水县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "富平县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "韩城"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "华阴"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "延安",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "宝塔区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "延长县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "延川县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "子长县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "安塞县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "志丹县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "吴旗县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "甘泉县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "富县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "洛川县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宜川县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "黄龙县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "黄陵县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "吴起县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "汉中",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "汉台区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "南郑县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "城固县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "洋县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "西乡县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "勉县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宁强县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "略阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "镇巴县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "留坝县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "佛坪县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "榆林",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "榆阳区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "神木县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "府谷县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "横山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "靖边县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "定边县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "绥德县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "米脂县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "佳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "吴堡县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "清涧县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "子洲县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "安康",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "汉滨区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "汉阴县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "石泉县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宁陕县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "紫阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "岚皋县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "平利县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "镇坪县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "旬阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "白河县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "商洛",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "商州区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "洛南县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "丹凤县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "商南县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "山阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "镇安县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "柞水县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }],
        "name": "陕西"
    },
    {
        "children": [{
            "name": "兰州",
            "children": [{
                "children": [{
                    "name": "焦家湾"
                }, {
                    "name": "五泉"
                }, {
                    "name": "兰州商学院"
                }, {
                    "name": "金昌南路"
                }, {
                    "name": "白银路"
                }, {
                    "name": "正宁路"
                }, {
                    "name": "铁路东村街"
                }, {
                    "name": "盐场堡"
                }, {
                    "name": "团结新村"
                }, {
                    "name": "靖远路"
                }, {
                    "name": "张掖路"
                }, {
                    "name": "庆阳路"
                }, {
                    "name": "通渭路"
                }, {
                    "name": "五里铺"
                }, {
                    "name": "大砂坪"
                }, {
                    "name": "大众巷"
                }, {
                    "name": "铁路局"
                }, {
                    "name": "静宁路"
                }, {
                    "name": "颜家沟"
                }, {
                    "name": "段家滩"
                }, {
                    "name": "桥北"
                }, {
                    "name": "铁路西村"
                }, {
                    "name": "广武门"
                }, {
                    "name": "天水南路"
                }, {
                    "name": "东湖"
                }, {
                    "name": "东岗西路"
                }, {
                    "name": "拱星墩"
                }, {
                    "name": "酒泉路"
                }, {
                    "name": "平凉路"
                }, {
                    "name": "定西路"
                }, {
                    "name": "中山路"
                }, {
                    "name": "火车站"
                }, {
                    "name": "二热十字"
                }, {
                    "name": "贡元巷"
                }, {
                    "name": "东岗镇"
                }, {
                    "name": "盐场路"
                }, {
                    "name": "鼓楼巷"
                }, {
                    "name": "渭源路"
                }, {
                    "name": "东岗东路"
                }, {
                    "name": "农民巷"
                }, {
                    "name": "城关其他"
                }, {
                    "name": "雁滩"
                }, {
                    "name": "东方红广场"
                }, {
                    "name": "何家庄"
                }, {
                    "name": "皋兰路"
                }, {
                    "name": "会宁路"
                }, {
                    "name": "旧大路"
                }, {
                    "name": "科技街"
                }, {
                    "name": "其他"
                }],
                "name": "城关区"
            }, {
                "children": [{
                    "name": "七里河其他"
                }, {
                    "name": "西园"
                }, {
                    "name": "华林坪"
                }, {
                    "name": "敦煌路"
                }, {
                    "name": "武山路"
                }, {
                    "name": "晏家坪"
                }, {
                    "name": "建兰路"
                }, {
                    "name": "兰工坪"
                }, {
                    "name": "土门墩"
                }, {
                    "name": "安西路"
                }, {
                    "name": "龚家湾"
                }, {
                    "name": "西津东路"
                }, {
                    "name": "伏龙坪"
                }, {
                    "name": "西关十字"
                }, {
                    "name": "西湖"
                }, {
                    "name": "西津西路"
                }, {
                    "name": "临夏路"
                }, {
                    "name": "西站"
                }, {
                    "name": "其他"
                }],
                "name": "七里河区"
            }, {
                "children": [{
                    "name": "陈坪"
                }, {
                    "name": "西固其他"
                }, {
                    "name": "西柳沟"
                }, {
                    "name": "临洮街"
                }, {
                    "name": "西固城"
                }, {
                    "name": "福利路"
                }, {
                    "name": "先锋路"
                }, {
                    "name": "其他"
                }],
                "name": "西固区"
            }, {
                "children": [{
                    "name": "十里店"
                }, {
                    "name": "安宁堡"
                }, {
                    "name": "刘家堡"
                }, {
                    "name": "安宁东路"
                }, {
                    "name": "安宁其他"
                }, {
                    "name": "安宁西路"
                }, {
                    "name": "孔家崖"
                }, {
                    "name": "北滨河中路"
                }, {
                    "name": "其他"
                }],
                "name": "安宁区"
            }, {
                "children": [{
                    "name": "海石湾"
                }, {
                    "name": "红古其他"
                }, {
                    "name": "其他"
                }],
                "name": "红古区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "永登县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "皋兰县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "榆中县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "嘉峪关",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "辖区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "金昌",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "金川区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "永昌县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "白银",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "白银区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "平川区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "靖远县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "会宁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "景泰县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "天水",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "秦城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "北道区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "清水县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "秦安县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "甘谷县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "武山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "张家川回族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "秦州区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "麦积区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "武威",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "凉州区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "民勤县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "古浪县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "天祝藏族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "张掖",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "甘州区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "肃南裕固族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "民乐县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "临泽县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "高台县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "山丹县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "平凉",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "崆峒区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "泾川县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "灵台县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "崇信县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "华亭县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "庄浪县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "静宁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "酒泉",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "肃州区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "金塔县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "安西县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "肃北蒙古族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "阿克塞哈萨克族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "玉门"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "敦煌"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "庆阳",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "西峰区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "庆城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "环县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "华池县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "合水县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "正宁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "镇原县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "定西",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "安定区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "通渭县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "陇西县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "渭源县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "临洮县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "漳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "岷县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "陇南",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "武都区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "成县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "文县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "宕昌县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "康县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "西和县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "礼县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "徽县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "两当县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "临夏回族自治州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "临夏"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "临夏县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "康乐县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "永靖县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "广河县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "和政县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "东乡族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "积石山保安族东乡族撒拉族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "甘南藏族自治州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "合作"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "临潭县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "卓尼县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "舟曲县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "迭部县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "玛曲县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "碌曲县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "夏河县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }],
        "name": "甘肃"
    },
    {
        "children": [{
            "name": "西宁",
            "children": [{
                "children": [{
                    "name": "周家泉"
                }, {
                    "name": "林家崖"
                }, {
                    "name": "八一路"
                }, {
                    "name": "大众街"
                }, {
                    "name": "火车站"
                }, {
                    "name": "东关大街"
                }, {
                    "name": "其他"
                }],
                "name": "城东区"
            }, {
                "children": [{
                    "name": "礼让街"
                }, {
                    "name": "南滩"
                }, {
                    "name": "南川东路"
                }, {
                    "name": "饮马街"
                }, {
                    "name": "人民街"
                }, {
                    "name": "其他"
                }],
                "name": "城中区"
            }, {
                "children": [{
                    "name": "南川西路"
                }, {
                    "name": "西关大街"
                }, {
                    "name": "兴海路"
                }, {
                    "name": "古城台"
                }, {
                    "name": "虎台"
                }, {
                    "name": "胜利路"
                }, {
                    "name": "其他"
                }],
                "name": "城西区"
            }, {
                "children": [{
                    "name": "朝阳"
                }, {
                    "name": "小桥"
                }, {
                    "name": "马坊"
                }, {
                    "name": "三其"
                }, {
                    "name": "其他"
                }],
                "name": "城北区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "大通回族土族自治县"
            }, {
                "children": [{
                    "name": "鲁沙尔"
                }, {
                    "name": "总寨"
                }, {
                    "name": "其他"
                }],
                "name": "湟中县"
            }, {
                "children": [{
                    "name": "城关"
                }, {
                    "name": "城郊"
                }, {
                    "name": "塔湾"
                }, {
                    "name": "东峡"
                }, {
                    "name": "其他"
                }],
                "name": "湟源县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "海东地区",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "平安县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "民和回族土族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "乐都县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "互助土族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "化隆回族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "循化撒拉族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "海北藏族自治州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "门源回族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "祁连县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "海晏县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "刚察县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "黄南藏族自治州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "同仁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "尖扎县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "泽库县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "河南蒙古族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "海南藏族自治州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "共和县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "同德县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "贵德县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "兴海县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "贵南县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "果洛藏族自治州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "玛沁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "班玛县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "甘德县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "达日县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "久治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "玛多县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "玉树藏族自治州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "玉树县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "杂多县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "称多县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "治多县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "囊谦县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "曲麻莱县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "海西蒙古族藏族自治州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "格尔木"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "德令哈"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "乌兰县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "都兰县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "天峻县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }],
        "name": "青海"
    },
    {
        "children": [{
            "name": "银川",
            "children": [{
                "children": [{
                    "name": "玉皇阁北街"
                }, {
                    "name": "解放西街"
                }, {
                    "name": "兴庆其他"
                }, {
                    "name": "文化街"
                }, {
                    "name": "前进街"
                }, {
                    "name": "新华街"
                }, {
                    "name": "胜利街"
                }, {
                    "name": "富宁街"
                }, {
                    "name": "中山南街"
                }, {
                    "name": "其他"
                }],
                "name": "兴庆区"
            }, {
                "children": [{
                    "name": "朔方路"
                }, {
                    "name": "西夏其他"
                }, {
                    "name": "北京西路"
                }, {
                    "name": "文昌路"
                }, {
                    "name": "其他"
                }],
                "name": "西夏区"
            }, {
                "children": [{
                    "name": "铁东"
                }, {
                    "name": "金凤其他"
                }, {
                    "name": "其他"
                }],
                "name": "金凤区"
            }, {
                "children": [{
                    "name": "杨和"
                }, {
                    "name": "望远"
                }, {
                    "name": "其他"
                }],
                "name": "永宁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "贺兰县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "灵武"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "石嘴山",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "大武口区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "惠农区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "平罗县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "吴忠",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "利通区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "盐池县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "同心县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "青铜峡"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "固原",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "原州区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "西吉县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "隆德县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "泾源县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "彭阳县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "中卫",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "沙坡头区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "中宁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "海原县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }],
        "name": "宁夏回族自治区"
    },
    {
        "children": [{
            "name": "乌鲁木齐",
            "children": [{
                "children": [{
                    "name": "新华南路"
                }, {
                    "name": "延安路"
                }, {
                    "name": "和平路"
                }, {
                    "name": "南门"
                }, {
                    "name": "二道桥"
                }, {
                    "name": "中山路"
                }, {
                    "name": "新华北路"
                }, {
                    "name": "青年路"
                }, {
                    "name": "燕尔窝"
                }, {
                    "name": "解放北路"
                }, {
                    "name": "碱泉"
                }, {
                    "name": "天山其他"
                }, {
                    "name": "东门"
                }, {
                    "name": "团结路"
                }, {
                    "name": "胜利路"
                }, {
                    "name": "解放南路"
                }, {
                    "name": "其他"
                }],
                "name": "天山区"
            }, {
                "children": [{
                    "name": "友好北路"
                }, {
                    "name": "扬子江路"
                }, {
                    "name": "和田街"
                }, {
                    "name": "友好南路"
                }, {
                    "name": "红庙子"
                }, {
                    "name": "沙依巴克其他"
                }, {
                    "name": "八一"
                }, {
                    "name": "雅玛里克山"
                }, {
                    "name": "西山"
                }, {
                    "name": "阿勒泰路"
                }, {
                    "name": "克拉玛依东路"
                }, {
                    "name": "炉院街"
                }, {
                    "name": "其他"
                }],
                "name": "沙依巴克区"
            }, {
                "children": [{
                    "name": "喀什东路"
                }, {
                    "name": "北京路"
                }, {
                    "name": "北站东路"
                }, {
                    "name": "银川路"
                }, {
                    "name": "石油新村"
                }, {
                    "name": "南纬路"
                }, {
                    "name": "铁路局"
                }, {
                    "name": "杭州路"
                }, {
                    "name": "三工"
                }, {
                    "name": "迎宾路"
                }, {
                    "name": "二工"
                }, {
                    "name": "天津路"
                }, {
                    "name": "新其他"
                }, {
                    "name": "其他"
                }],
                "name": "新区"
            }, {
                "children": [{
                    "name": "红山"
                }, {
                    "name": "南湖"
                }, {
                    "name": "苇湖梁"
                }, {
                    "name": "八道湾"
                }, {
                    "name": "六道湾"
                }, {
                    "name": "南湖北路"
                }, {
                    "name": "水磨沟其他"
                }, {
                    "name": "新民路"
                }, {
                    "name": "其他"
                }],
                "name": "水磨沟区"
            }, {
                "children": [{
                    "name": "头屯河"
                }, {
                    "name": "王家沟"
                }, {
                    "name": "火车西站"
                }, {
                    "name": "头屯河其他"
                }, {
                    "name": "其他"
                }],
                "name": "头屯河区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "达坂城区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "东山区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "乌鲁木齐县"
            }, {
                "children": [{
                    "name": "地磅"
                }, {
                    "name": "卡子湾"
                }, {
                    "name": "石化"
                }, {
                    "name": "米东其他"
                }, {
                    "name": "其他"
                }],
                "name": "米东区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "克拉玛依",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "独山子区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "克拉玛依区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "白碱滩区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "乌尔禾区"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "吐鲁番地区",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "吐鲁番"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "鄯善县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "托克逊县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "哈密地区",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "哈密"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "巴里坤哈萨克自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "伊吾县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "昌吉回族自治州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "昌吉"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "阜康"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "米泉"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "呼图壁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "玛纳斯县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "奇台县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "吉木萨尔县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "木垒哈萨克自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "博尔塔拉蒙古自治州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "博乐"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "精河县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "温泉县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "巴音郭楞蒙古自治州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "库尔勒"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "轮台县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "尉犁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "若羌县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "且末县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "焉耆回族自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "和静县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "和硕县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "博湖县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "阿克苏地区",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "阿克苏"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "温宿县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "库车县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "沙雅县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "新和县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "拜城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "乌什县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "阿瓦提县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "柯坪县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "克孜勒苏柯尔克孜自治州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "阿图什"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "阿克陶县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "阿合奇县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "乌恰县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "喀什地区",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "喀什"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "疏附县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "疏勒县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "英吉沙县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "泽普县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "莎车县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "叶城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "麦盖提县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "岳普湖县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "伽师县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "巴楚县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "塔什库尔干塔吉克自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "和田地区",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "和田"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "和田县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "墨玉县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "皮山县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "洛浦县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "策勒县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "于田县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "民丰县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "伊犁哈萨克自治州",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "伊宁"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "奎屯"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "伊宁县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "察布查尔锡伯自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "霍城县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "巩留县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "新源县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "昭苏县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "特克斯县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "尼勒克县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "塔城地区",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "塔城"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "乌苏"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "额敏县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "沙湾县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "托里县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "裕民县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "和布克赛尔蒙古自治县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "阿勒泰地区",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "阿勒泰"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "布尔津县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "富蕴县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "福海县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "哈巴河县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "青河县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "吉木乃县"
            }, {
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "石河子",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "阿拉尔",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "图木舒克",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }, {
            "name": "五家渠",
            "children": [{
                "children": [{
                    "name": "其他"
                }],
                "name": "其他"
            }]
        }],
        "name": "新疆维吾尔自治区"   
    }
]  
}]
  
  },
  methods: {}
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>
