//based on Anime.js ref: http://animejs.com/documentation/#morphing
const morphingSVG = (svgPath) => {
  anime({
    targets: svgPath,
    duration: 4000,
    easing: [0.5,0,0.5,1],
    d: [
        { value: 'M83.5,536.9c0-247.5,174.5-480,422-480s485,229.5,485,477s-185.5,429-433,429S83.5,784.4,83.5,536.9z'},
        { value: 'M96,492.9c0-247.5,163.5-459,411-459s471,179.5,471,427s-184.5,525-432,525S96,740.4,96,492.9z'},
        { value: 'M83.5,536.9c0-247.5,174.5-480,422-480s485,229.5,485,477s-185.5,429-433,429S83.5,784.4,83.5,536.9z'}
    ],
    loop: true
  });
};

export default morphingSVG;