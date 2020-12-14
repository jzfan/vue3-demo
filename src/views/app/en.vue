<template>
  <this-header />
  <div class="applicationContainer__JcPuN">
    <this-sections :all="list" />
  </div>
</template>

<script>
import thisHeader from './header'
import thisModal from './modal'
import thisSections from './sections'
export default {
  components: { thisHeader, thisModal, thisSections },
  data() {
    return {
      //   player: null,
      list: [
        {
          title: '航空航天',
          bg: '/img/app-1.jpg',
          cards: [
            {
              title: '机舱模拟',
              img: '/img/app-2.jpg',
              desc:
                '本应用专为机组人员培训而设计，模拟了飞机紧急出口开门和关门的标准操作过程。',
              source: '易晨VR联合打造',
            },
            {
              title: '机械臂机械手远程操控系统(RAGTOS)',
              img: '/img/app-3.jpg',
              desc:
                'RAGTOS让用户将他们的手与机械臂和机械手远程同步，同时在机械手抓取物体时感受到力反馈。',
            },
          ],
        },
        {
          title: '专业训练',
          bg: '/img/app-6.jpg',
          cards: [
            {
              title: '高危环境作业流程训练',
              img: '/img/app-4.jpg',
              desc:
                '数字化重建高危环境(如高辐射地区)，受训者可以安全高效地实践标准作业流程。',
              source: '易晨VR联合打造',
            },
            {
              title: '职业技能培训',
              img: '/img/app-5.jpg',
              desc:
                '职业培训课程面向各行各业的从业人员，在数字化重建的流水线、制造厂、发电厂等场景中提高技能水平。',
            },
          ],
        },
        {
          title: '医疗康复',
          bg: '/img/app-7.jpg',
          cards: [
            {
              title: '外科手术模拟',
              img: '/img/app-11.jpg',
              desc:
                '外科手术模拟系统为医学生和其他受训者带来“动手”实践人体解剖和心脏外科手术等体验。',
              source: '易晨VR联合打造',
            },
          ],
        },
        {
          title: '游戏娱乐',
          bg: '/img/app-8.jpg',
          cards: [
            {
              title: '密室逃脱',
              img: '/img/app-12.jpg',
              desc:
                '一场完全沉浸式的VR密室逃脱体验，解开一系列的谜题暗号，用你的双手和智慧逃离密室。',
              source: '易晨VR联合打造',
            },
            {
              title: '空屋惊魂',
              img: '/img/app-13.jpg',
              desc:
                '一段“亲身体验”的惊悚片，用双手在黑暗中探索空屋，找到线索，逃出生天。',
            },
          ],
        },
        {
          title: '教育科研',
          bg: '/img/app-9.jpg',
          cards: [
            {
              title: 'VR积木',
              img: '/img/app-14.jpg',
              desc:
                '通过操作控制台上的拉杆、旋钮、按钮来获得你需要的积木，搭建属于自己的房屋、坦克和桥梁。',
            },
            {
              title: '太空教育',
              img: '/img/app-15.jpg',
              desc:
                '让自己沉浸在一个遍布繁星的迷人宇宙中，用自己的双手与太空中的卫星、火箭、化学元素互动。',
            },
          ],
        },
        {
          title: '仿真模拟',
          bg: '/img/app-10.jpg',
          cards: [
            {
              title: 'VR拆解组装',
              img: '/img/app-16.jpg',
              desc: '撸起袖子加油干！动手体验家具和车辆零件的拆解。',
            },
            {
              title: '英伟达全息平台',
              img: '/img/app-17.jpg',
              desc:
                '设计和建模从未如此简单！设计虚拟实物模型，并在虚拟现实中与您的团队跨地点协作。',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style></style>
