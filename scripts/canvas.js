function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
    ../vdo/gsapvid/scene00001.png
    ../vdo/gsapvid/scene00002.png
    ../vdo/gsapvid/scene00003.png
    ../vdo/gsapvid/scene00004.png
    ../vdo/gsapvid/scene00005.png
    ../vdo/gsapvid/scene00006.png
    ../vdo/gsapvid/scene00007.png
    ../vdo/gsapvid/scene00008.png
    ../vdo/gsapvid/scene00009.png
    ../vdo/gsapvid/scene00010.png
    ../vdo/gsapvid/scene00011.png
    ../vdo/gsapvid/scene00012.png
    ../vdo/gsapvid/scene00013.png
    ../vdo/gsapvid/scene00014.png
    ../vdo/gsapvid/scene00015.png
    ../vdo/gsapvid/scene00016.png
    ../vdo/gsapvid/scene00017.png
    ../vdo/gsapvid/scene00018.png
    ../vdo/gsapvid/scene00019.png
    ../vdo/gsapvid/scene00020.png
    ../vdo/gsapvid/scene00021.png
    ../vdo/gsapvid/scene00022.png
    ../vdo/gsapvid/scene00023.png
    ../vdo/gsapvid/scene00024.png
    ../vdo/gsapvid/scene00025.png
    ../vdo/gsapvid/scene00026.png
    ../vdo/gsapvid/scene00027.png
    ../vdo/gsapvid/scene00028.png
    ../vdo/gsapvid/scene00029.png
    ../vdo/gsapvid/scene00030.png
    ../vdo/gsapvid/scene00031.png
    ../vdo/gsapvid/scene00032.png
    ../vdo/gsapvid/scene00033.png
    ../vdo/gsapvid/scene00034.png
    ../vdo/gsapvid/scene00035.png
    ../vdo/gsapvid/scene00036.png
    ../vdo/gsapvid/scene00037.png
    ../vdo/gsapvid/scene00038.png
    ../vdo/gsapvid/scene00039.png
    ../vdo/gsapvid/scene00040.png
    ../vdo/gsapvid/scene00041.png
    ../vdo/gsapvid/scene00042.png
    ../vdo/gsapvid/scene00043.png
    ../vdo/gsapvid/scene00044.png
    ../vdo/gsapvid/scene00045.png
    ../vdo/gsapvid/scene00046.png
    ../vdo/gsapvid/scene00047.png
    ../vdo/gsapvid/scene00048.png
    ../vdo/gsapvid/scene00049.png
    ../vdo/gsapvid/scene00050.png
    ../vdo/gsapvid/scene00051.png
    ../vdo/gsapvid/scene00052.png
    ../vdo/gsapvid/scene00053.png
    ../vdo/gsapvid/scene00054.png
    ../vdo/gsapvid/scene00055.png
    ../vdo/gsapvid/scene00056.png
    ../vdo/gsapvid/scene00057.png
    ../vdo/gsapvid/scene00058.png
    ../vdo/gsapvid/scene00059.png
    ../vdo/gsapvid/scene00060.png
    ../vdo/gsapvid/scene00061.png
    ../vdo/gsapvid/scene00062.png
    ../vdo/gsapvid/scene00063.png
    ../vdo/gsapvid/scene00064.png
    ../vdo/gsapvid/scene00065.png
    ../vdo/gsapvid/scene00066.png
    ../vdo/gsapvid/scene00067.png
    ../vdo/gsapvid/scene00068.png
    ../vdo/gsapvid/scene00069.png
    ../vdo/gsapvid/scene00070.png
    ../vdo/gsapvid/scene00071.png
    ../vdo/gsapvid/scene00072.png
    ../vdo/gsapvid/scene00073.png
    ../vdo/gsapvid/scene00074.png
    ../vdo/gsapvid/scene00075.png
    ../vdo/gsapvid/scene00076.png
    ../vdo/gsapvid/scene00077.png
    ../vdo/gsapvid/scene00078.png
    ../vdo/gsapvid/scene00079.png
    ../vdo/gsapvid/scene00080.png
    ../vdo/gsapvid/scene00081.png
    ../vdo/gsapvid/scene00082.png
    ../vdo/gsapvid/scene00083.png
    ../vdo/gsapvid/scene00084.png
    ../vdo/gsapvid/scene00085.png
    ../vdo/gsapvid/scene00086.png
    ../vdo/gsapvid/scene00087.png
    ../vdo/gsapvid/scene00088.png
    ../vdo/gsapvid/scene00089.png
    ../vdo/gsapvid/scene00090.png
    ../vdo/gsapvid/scene00091.png
    ../vdo/gsapvid/scene00092.png
    ../vdo/gsapvid/scene00093.png
    ../vdo/gsapvid/scene00094.png
    ../vdo/gsapvid/scene00095.png
    ../vdo/gsapvid/scene00096.png
    ../vdo/gsapvid/scene00097.png
    ../vdo/gsapvid/scene00098.png
    ../vdo/gsapvid/scene00099.png
    ../vdo/gsapvid/scene00100.png
    ../vdo/gsapvid/scene00101.png
    ../vdo/gsapvid/scene00102.png
    ../vdo/gsapvid/scene00103.png
    ../vdo/gsapvid/scene00104.png
    ../vdo/gsapvid/scene00105.png
    ../vdo/gsapvid/scene00106.png
    ../vdo/gsapvid/scene00107.png
    ../vdo/gsapvid/scene00108.png
    ../vdo/gsapvid/scene00109.png
    ../vdo/gsapvid/scene00110.png
    ../vdo/gsapvid/scene00111.png
    ../vdo/gsapvid/scene00112.png
    ../vdo/gsapvid/scene00113.png
    ../vdo/gsapvid/scene00114.png
    ../vdo/gsapvid/scene00115.png
    ../vdo/gsapvid/scene00116.png
    ../vdo/gsapvid/scene00117.png
    ../vdo/gsapvid/scene00118.png
    ../vdo/gsapvid/scene00119.png
    ../vdo/gsapvid/scene00120.png
    ../vdo/gsapvid/scene00121.png
    ../vdo/gsapvid/scene00122.png
    ../vdo/gsapvid/scene00123.png
    ../vdo/gsapvid/scene00124.png
    ../vdo/gsapvid/scene00125.png
    ../vdo/gsapvid/scene00126.png
    ../vdo/gsapvid/scene00127.png
    ../vdo/gsapvid/scene00128.png
    ../vdo/gsapvid/scene00129.png
    ../vdo/gsapvid/scene00130.png
    ../vdo/gsapvid/scene00131.png
    ../vdo/gsapvid/scene00132.png
    ../vdo/gsapvid/scene00133.png
    ../vdo/gsapvid/scene00134.png
    ../vdo/gsapvid/scene00135.png
    ../vdo/gsapvid/scene00136.png
    ../vdo/gsapvid/scene00137.png
    ../vdo/gsapvid/scene00138.png
    ../vdo/gsapvid/scene00139.png
    ../vdo/gsapvid/scene00140.png
    ../vdo/gsapvid/scene00141.png
    ../vdo/gsapvid/scene00142.png
    ../vdo/gsapvid/scene00143.png
    ../vdo/gsapvid/scene00144.png
    ../vdo/gsapvid/scene00145.png
    ../vdo/gsapvid/scene00146.png
    ../vdo/gsapvid/scene00147.png
    ../vdo/gsapvid/scene00148.png
    ../vdo/gsapvid/scene00149.png
    ../vdo/gsapvid/scene00150.png
    ../vdo/gsapvid/scene00151.png
    ../vdo/gsapvid/scene00152.png
    ../vdo/gsapvid/scene00153.png
    ../vdo/gsapvid/scene00154.png
    ../vdo/gsapvid/scene00155.png
    ../vdo/gsapvid/scene00156.png
    ../vdo/gsapvid/scene00157.png
    ../vdo/gsapvid/scene00158.png
    ../vdo/gsapvid/scene00159.png
    ../vdo/gsapvid/scene00160.png
    ../vdo/gsapvid/scene00161.png
    ../vdo/gsapvid/scene00162.png
    ../vdo/gsapvid/scene00163.png
    ../vdo/gsapvid/scene00164.png
    ../vdo/gsapvid/scene00165.png
    ../vdo/gsapvid/scene00166.png
    ../vdo/gsapvid/scene00167.png
    ../vdo/gsapvid/scene00168.png
    ../vdo/gsapvid/scene00169.png
    ../vdo/gsapvid/scene00170.png
    ../vdo/gsapvid/scene00171.png
    ../vdo/gsapvid/scene00172.png
    ../vdo/gsapvid/scene00173.png
    ../vdo/gsapvid/scene00174.png
    ../vdo/gsapvid/scene00175.png
    ../vdo/gsapvid/scene00176.png
    ../vdo/gsapvid/scene00177.png
    ../vdo/gsapvid/scene00178.png
    ../vdo/gsapvid/scene00179.png
    ../vdo/gsapvid/scene00180.png
    ../vdo/gsapvid/scene00181.png
    ../vdo/gsapvid/scene00182.png
    ../vdo/gsapvid/scene00183.png
    ../vdo/gsapvid/scene00184.png
    ../vdo/gsapvid/scene00185.png
    ../vdo/gsapvid/scene00186.png
    ../vdo/gsapvid/scene00187.png
    ../vdo/gsapvid/scene00188.png
    ../vdo/gsapvid/scene00189.png
    ../vdo/gsapvid/scene00190.png
    ../vdo/gsapvid/scene00191.png
    ../vdo/gsapvid/scene00192.png
    ../vdo/gsapvid/scene00193.png
    ../vdo/gsapvid/scene00194.png
    ../vdo/gsapvid/scene00195.png
    ../vdo/gsapvid/scene00196.png
    ../vdo/gsapvid/scene00197.png
    ../vdo/gsapvid/scene00198.png
    ../vdo/gsapvid/scene00199.png
    ../vdo/gsapvid/scene00200.png
    ../vdo/gsapvid/scene00201.png
    ../vdo/gsapvid/scene00202.png
    ../vdo/gsapvid/scene00203.png
    ../vdo/gsapvid/scene00204.png
    ../vdo/gsapvid/scene00205.png
    ../vdo/gsapvid/scene00206.png
    ../vdo/gsapvid/scene00207.png
    ../vdo/gsapvid/scene00208.png
    ../vdo/gsapvid/scene00209.png
    ../vdo/gsapvid/scene00210.png
    ../vdo/gsapvid/scene00211.png
    ../vdo/gsapvid/scene00212.png
    ../vdo/gsapvid/scene00213.png
    ../vdo/gsapvid/scene00214.png
    ../vdo/gsapvid/scene00215.png
    ../vdo/gsapvid/scene00216.png
    ../vdo/gsapvid/scene00217.png
    ../vdo/gsapvid/scene00218.png
    ../vdo/gsapvid/scene00219.png
    ../vdo/gsapvid/scene00220.png
    ../vdo/gsapvid/scene00221.png
    ../vdo/gsapvid/scene00222.png
    ../vdo/gsapvid/scene00223.png
    ../vdo/gsapvid/scene00224.png
    ../vdo/gsapvid/scene00225.png
    ../vdo/gsapvid/scene00226.png
    ../vdo/gsapvid/scene00227.png
    ../vdo/gsapvid/scene00228.png
    ../vdo/gsapvid/scene00229.png
    ../vdo/gsapvid/scene00230.png
    ../vdo/gsapvid/scene00231.png
    ../vdo/gsapvid/scene00232.png
    ../vdo/gsapvid/scene00233.png
    ../vdo/gsapvid/scene00234.png
    ../vdo/gsapvid/scene00235.png
    ../vdo/gsapvid/scene00236.png
    ../vdo/gsapvid/scene00237.png
    ../vdo/gsapvid/scene00238.png
    ../vdo/gsapvid/scene00239.png
    ../vdo/gsapvid/scene00240.png
    ../vdo/gsapvid/scene00241.png
    ../vdo/gsapvid/scene00242.png
    ../vdo/gsapvid/scene00243.png
    ../vdo/gsapvid/scene00244.png
    ../vdo/gsapvid/scene00245.png
    ../vdo/gsapvid/scene00246.png
    ../vdo/gsapvid/scene00247.png
    ../vdo/gsapvid/scene00248.png
    ../vdo/gsapvid/scene00249.png
    ../vdo/gsapvid/scene00250.png
    ../vdo/gsapvid/scene00251.png
    ../vdo/gsapvid/scene00252.png
    ../vdo/gsapvid/scene00253.png
    ../vdo/gsapvid/scene00254.png
    ../vdo/gsapvid/scene00255.png
    ../vdo/gsapvid/scene00256.png
    ../vdo/gsapvid/scene00257.png
    ../vdo/gsapvid/scene00258.png
    ../vdo/gsapvid/scene00259.png
    ../vdo/gsapvid/scene00260.png
    ../vdo/gsapvid/scene00261.png
    ../vdo/gsapvid/scene00262.png
    ../vdo/gsapvid/scene00263.png
    ../vdo/gsapvid/scene00264.png
    ../vdo/gsapvid/scene00265.png
    ../vdo/gsapvid/scene00266.png
    ../vdo/gsapvid/scene00267.png
    ../vdo/gsapvid/scene00268.png
    ../vdo/gsapvid/scene00269.png
    ../vdo/gsapvid/scene00270.png
    ../vdo/gsapvid/scene00271.png
    ../vdo/gsapvid/scene00272.png
    ../vdo/gsapvid/scene00273.png
    ../vdo/gsapvid/scene00274.png
    ../vdo/gsapvid/scene00275.png
    ../vdo/gsapvid/scene00276.png
    ../vdo/gsapvid/scene00277.png
    ../vdo/gsapvid/scene00278.png
    ../vdo/gsapvid/scene00279.png
    ../vdo/gsapvid/scene00280.png
    ../vdo/gsapvid/scene00281.png
    ../vdo/gsapvid/scene00282.png
    ../vdo/gsapvid/scene00283.png
    ../vdo/gsapvid/scene00284.png
    ../vdo/gsapvid/scene00285.png
    ../vdo/gsapvid/scene00286.png
    ../vdo/gsapvid/scene00287.png
    ../vdo/gsapvid/scene00288.png
    ../vdo/gsapvid/scene00289.png
    ../vdo/gsapvid/scene00290.png
    ../vdo/gsapvid/scene00291.png
    ../vdo/gsapvid/scene00292.png
    ../vdo/gsapvid/scene00293.png
    ../vdo/gsapvid/scene00294.png
    ../vdo/gsapvid/scene00295.png
    ../vdo/gsapvid/scene00296.png
    ../vdo/gsapvid/scene00297.png
    ../vdo/gsapvid/scene00298.png
    ../vdo/gsapvid/scene00299.png
    ../vdo/gsapvid/scene00300.png
    ../vdo/gsapvid/scene00301.png
    ../vdo/gsapvid/scene00302.png
    ../vdo/gsapvid/scene00303.png
    ../vdo/gsapvid/scene00304.png
    ../vdo/gsapvid/scene00305.png
    ../vdo/gsapvid/scene00306.png
    ../vdo/gsapvid/scene00307.png
    ../vdo/gsapvid/scene00308.png
    ../vdo/gsapvid/scene00309.png
    ../vdo/gsapvid/scene00310.png
    ../vdo/gsapvid/scene00311.png
    ../vdo/gsapvid/scene00312.png
    ../vdo/gsapvid/scene00313.png
    ../vdo/gsapvid/scene00314.png
    ../vdo/gsapvid/scene00315.png
    ../vdo/gsapvid/scene00316.png
    ../vdo/gsapvid/scene00317.png
    ../vdo/gsapvid/scene00318.png
    ../vdo/gsapvid/scene00319.png
    ../vdo/gsapvid/scene00320.png
    ../vdo/gsapvid/scene00321.png
    ../vdo/gsapvid/scene00322.png
    ../vdo/gsapvid/scene00323.png
    ../vdo/gsapvid/scene00324.png
    ../vdo/gsapvid/scene00325.png
    ../vdo/gsapvid/scene00326.png
    ../vdo/gsapvid/scene00327.png
    ../vdo/gsapvid/scene00328.png
    ../vdo/gsapvid/scene00329.png
    ../vdo/gsapvid/scene00330.png
    ../vdo/gsapvid/scene00331.png
    ../vdo/gsapvid/scene00332.png
    ../vdo/gsapvid/scene00333.png
    ../vdo/gsapvid/scene00334.png
    ../vdo/gsapvid/scene00335.png
    ../vdo/gsapvid/scene00336.png
    ../vdo/gsapvid/scene00337.png
    ../vdo/gsapvid/scene00338.png
    ../vdo/gsapvid/scene00339.png
    ../vdo/gsapvid/scene00340.png
    ../vdo/gsapvid/scene00341.png
    ../vdo/gsapvid/scene00342.png
    ../vdo/gsapvid/scene00343.png
    ../vdo/gsapvid/scene00344.png
    ../vdo/gsapvid/scene00345.png
    ../vdo/gsapvid/scene00346.png
    ../vdo/gsapvid/scene00347.png
    ../vdo/gsapvid/scene00348.png
    ../vdo/gsapvid/scene00349.png
    ../vdo/gsapvid/scene00350.png
    ../vdo/gsapvid/scene00351.png
    ../vdo/gsapvid/scene00352.png
    ../vdo/gsapvid/scene00369.png
    ../vdo/gsapvid/scene00370.png
    ../vdo/gsapvid/scene00371.png
    ../vdo/gsapvid/scene00372.png
    ../vdo/gsapvid/scene00373.png
    ../vdo/gsapvid/scene00374.png
    ../vdo/gsapvid/scene00375.png
    ../vdo/gsapvid/scene00376.png
    ../vdo/gsapvid/scene00377.png
    ../vdo/gsapvid/scene00378.png
    ../vdo/gsapvid/scene00379.png
    ../vdo/gsapvid/scene00380.png
    ../vdo/gsapvid/scene00381.png
    ../vdo/gsapvid/scene00382.png
    ../vdo/gsapvid/scene00383.png
    ../vdo/gsapvid/scene00384.png
    ../vdo/gsapvid/scene00385.png
    ../vdo/gsapvid/scene00386.png
    ../vdo/gsapvid/scene00387.png
    ../vdo/gsapvid/scene00388.png
    ../vdo/gsapvid/scene00389.png
    ../vdo/gsapvid/scene00390.png
    ../vdo/gsapvid/scene00391.png
    ../vdo/gsapvid/scene00392.png
    ../vdo/gsapvid/scene00393.png
    ../vdo/gsapvid/scene00394.png
    ../vdo/gsapvid/scene00395.png
    ../vdo/gsapvid/scene00396.png
    ../vdo/gsapvid/scene00397.png
    ../vdo/gsapvid/scene00398.png
    ../vdo/gsapvid/scene00399.png
    ../vdo/gsapvid/scene00400.png
    ../vdo/gsapvid/scene00401.png
    ../vdo/gsapvid/scene00402.png
    ../vdo/gsapvid/scene00403.png
    ../vdo/gsapvid/scene00404.png
    ../vdo/gsapvid/scene00405.png
    ../vdo/gsapvid/scene00406.png
    ../vdo/gsapvid/scene00407.png
    ../vdo/gsapvid/scene00408.png
    ../vdo/gsapvid/scene00409.png
    ../vdo/gsapvid/scene00410.png
    ../vdo/gsapvid/scene00411.png
    ../vdo/gsapvid/scene00412.png
    ../vdo/gsapvid/scene00413.png
    ../vdo/gsapvid/scene00414.png
    ../vdo/gsapvid/scene00415.png
    ../vdo/gsapvid/scene00416.png
    ../vdo/gsapvid/scene00417.png
    ../vdo/gsapvid/scene00418.png
    ../vdo/gsapvid/scene00419.png
    ../vdo/gsapvid/scene00420.png
    ../vdo/gsapvid/scene00421.png
    ../vdo/gsapvid/scene00422.png
    ../vdo/gsapvid/scene00423.png
    ../vdo/gsapvid/scene00424.png
    ../vdo/gsapvid/scene00425.png
    ../vdo/gsapvid/scene00426.png
    ../vdo/gsapvid/scene00427.png
    ../vdo/gsapvid/scene00428.png
    ../vdo/gsapvid/scene00429.png
    ../vdo/gsapvid/scene00430.png
    ../vdo/gsapvid/scene00431.png
    ../vdo/gsapvid/scene00432.png
    ../vdo/gsapvid/scene00433.png
    ../vdo/gsapvid/scene00434.png
    ../vdo/gsapvid/scene00435.png
    ../vdo/gsapvid/scene00436.png
    ../vdo/gsapvid/scene00437.png
    ../vdo/gsapvid/scene00438.png
    ../vdo/gsapvid/scene00439.png
    ../vdo/gsapvid/scene00440.png
    ../vdo/gsapvid/scene00441.png
    ../vdo/gsapvid/scene00442.png
    ../vdo/gsapvid/scene00443.png
    ../vdo/gsapvid/scene00444.png
    ../vdo/gsapvid/scene00445.png
    ../vdo/gsapvid/scene00446.png
    ../vdo/gsapvid/scene00447.png
    ../vdo/gsapvid/scene00448.png
    ../vdo/gsapvid/scene00449.png
    ../vdo/gsapvid/scene00450.png
    ../vdo/gsapvid/scene00451.png
    ../vdo/gsapvid/scene00452.png
    ../vdo/gsapvid/scene00453.png
    ../vdo/gsapvid/scene00454.png
    ../vdo/gsapvid/scene00455.png
    ../vdo/gsapvid/scene00456.png
    ../vdo/gsapvid/scene00457.png
    ../vdo/gsapvid/scene00458.png
    ../vdo/gsapvid/scene00459.png
    ../vdo/gsapvid/scene00460.png
    ../vdo/gsapvid/scene00461.png
    ../vdo/gsapvid/scene00462.png
    ../vdo/gsapvid/scene00463.png
    ../vdo/gsapvid/scene00464.png
    ../vdo/gsapvid/scene00465.png
    ../vdo/gsapvid/scene00466.png
    ../vdo/gsapvid/scene00467.png
    ../vdo/gsapvid/scene00468.png
    ../vdo/gsapvid/scene00469.png
    ../vdo/gsapvid/scene00470.png
    ../vdo/gsapvid/scene00471.png
    ../vdo/gsapvid/scene00472.png
    ../vdo/gsapvid/scene00473.png
    ../vdo/gsapvid/scene00474.png
    ../vdo/gsapvid/scene00475.png
    ../vdo/gsapvid/scene00476.png
    ../vdo/gsapvid/scene00477.png
    ../vdo/gsapvid/scene00478.png
    ../vdo/gsapvid/scene00479.png
    ../vdo/gsapvid/scene00480.png
    ../vdo/gsapvid/scene00481.png
 `;
  return data.split("\n")[index];
}

const frameCount = 481;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    //   set start end according to preference
    start: `top top`,
    end: `300% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `300% top`,
});