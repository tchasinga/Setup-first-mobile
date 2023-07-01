export const animationCode =() => {
    const tl = gsap.timeline({ defaults: { duration: 1.75, ease: "elastic.out(1, 0.3)" } });

tl.fromTo('.containerCards', { scale: 0 }, { scale: 1 });
tl.fromTo('.svgImgDesign', { opacity: 0, x: -50, rotation: "-55deg", transform: "scale(1.1)" }, { opacity: 1, x: 0, rotation: '0deg' });
tl.fromTo('.getLearn', { opacity: 0 }, { opacity: 1 });

tl.fromTo('.element1', { opacity: 0, x: -100 }, { opacity: 1, x: 0 });
tl.fromTo('.element2', { opacity: 0, y: 100 }, { opacity: 1, y: 0 });
tl.fromTo('.element3', { opacity: 0, rotation: "-90deg" }, { opacity: 1, rotation: '0deg' });
tl.fromTo('.element4', { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1 });
tl.fromTo('.element5', { opacity: 0, y: 50 }, { opacity: 1, y: 0 });

gsap.to('.pageReact', { rotation: '360', duration: 20, repeat: -1, ease: 'linear' });


}