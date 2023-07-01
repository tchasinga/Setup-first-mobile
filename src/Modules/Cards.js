export const animationCode =() => {
    const tl = gsap.timeline({ defaults: { duration: 1.75, ease: "elastic.out(1, 0.3)" } });

tl.fromTo('.containerCards', { scale: 0 }, { scale: 1 });
tl.fromTo('.svgImgDesign', { opacity: 0, x: -50, rotation: "-55deg", transform: "scale(1.1)" }, { opacity: 1, x: 0, rotation: '0deg' });
tl.fromTo('.getLearn', { opacity: 0 }, { opacity: 1 });
}