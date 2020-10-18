const ImgSrc = {
  self: [
    require('assets/img/intro_self1.jpg'),
    require('assets/img/intro_self2.jpg'),
  ],
  log: [
    require('assets/img/intro_log1.jpg'),
    require('assets/img/intro_log2.jpg'),
  ],
  pt: [
    require('assets/img/intro_pt1.jpg'),
    require('assets/img/intro_pt2.jpg'),
  ],
  chart: require('assets/img/intro_chart.jpg'),
};

export const IntroItemList = [
  {
    title: '웹캠을 통해',
    title2: '집에서 운동을 시작하세요',
    src: ImgSrc.self[0],
    img: {
      direct: 'fade-right',
      offset: '300',
      easing: 'ease-in-sine',
    },
    desc: {
      direct: 'fade-right',
      offset: '120',
      easing: 'ease',
      delay: '200',
      duration: '800',
    },
  },
  {
    title: '자신을 기록을',
    title2: '저장 후 관리해 보세요',
    src: ImgSrc.log[0],
    desc: {
      direct: 'fade-up-right',
      offset: '120',
      easing: 'ease',
      delay: '200',
      duration: '800',
    },
    img: {
      direct: 'zoom-in-right',
      offset: '120',
      easing: 'ease',
    },
  },
  {
    title: '저장된 기록으로',
    title2: '운동을 처방 받으세요',
    src: ImgSrc.chart,
    img: {
      direct: 'flip-left',
      offset: '120',
      easing: 'ease',
    },
    desc: {
      direct: 'zoom-in-up',
      offset: '120',
      easing: 'ease',
      delay: '200',
      duration: '800',
    },
  },
  {
    title: '트레이너와 함께',
    title2: '필요한 운동을 해보세요',
    src: ImgSrc.pt[0],
    desc: {
      direct: 'fade-right',
      offset: '300',
      easing: 'ease-in-sine',
      delay: '200',
      duration: '800',
    },
    img: {
      direct: 'fade-right',
      offset: '120',
      easing: 'ease-in-sine',
    },
  },
];
