// Lấy các element cần thay đổi 
const boom = document.getElementById('boom');
const grandmaRed = document.getElementById('grandma-red');
const grandmaBlue = document.getElementById('grandma-blue');
const bgsection2 = document.getElementById('bg-section-2');
const line1 = document.querySelectorAll('#line-1 span');
const line2 = document.querySelectorAll('#line-2 span');
boom.addEventListener('mouseenter', function () {
  // grandmaRed.style.opacity = 0;
  grandmaBlue.style.opacity = 1;
  bgsection2.style.opacity = 1;

  // Thay đổi màu chữ
  line1.forEach(element => { element.style.color = "white"; });
  line2.forEach(element => { element.style.color = "white"; });

});

// Khi rời khỏi #boom thì đặt lại opacity ban đầu 
boom.addEventListener('mouseleave', function () {
  grandmaRed.style.opacity = 1;
  grandmaBlue.style.opacity = 0;
  bgsection2.style.opacity = 0;
  line1.forEach(element => { element.style.color = "#2856a1" });
  line2.forEach(element => { element.style.color = "#2856a1" });
});
const section2 = document.getElementById('section-2');
// Delay ban đầu
let delay = 0; let animatedSection2 = false; let animatedSection3 = false;
let animatedSection4 = false; let animatedSection5 = false; let animatedSection6 = false;
let animatedSection9 = false;let animatedSection10 = false;let animatedSection102 = false; let animatedSection11 = false;
window.addEventListener('scroll', function () {
  const section2 = document.querySelector('#section-2');
  const sectionTopSection2 = section2.offsetTop;
  const pageTop = window.pageYOffset;
  if (pageTop >= (sectionTopSection2 - 400) && !animatedSection2) {
    // Lấy danh sách các phần tử con 
    const span_line1 = document.querySelectorAll('#line-1 span');
    const line12 = this.document.getElementById('line-1-2');
    line12.style.opacity = 1;
    // Duyệt qua các phần tử
    span_line1.forEach(element => {
      // Thêm animation vào element
      element.style.opacity = 0;
      element.style.animation = 'fadeIn ease-in 1 forwards';
      element.style.animationDelay = `${delay}s`;
      element.style.animationDuration = '1s';
      // Tăng delay lên 0.1s sau mỗi lần duyệt 
      delay += 0.05;
    });

    const span_line2 = document.querySelectorAll('#line-2 span');
    span_line2.forEach(element => {
      // Thêm animation vào element
      element.style.opacity = 0;
      element.style.animation = 'fadeIn ease-in 1 forwards';
      element.style.animationDelay = `${delay}s`;
      element.style.animationDuration = '1s';
      // Tăng delay lên 0.1s sau mỗi lần duyệt 
      delay += 0.05;
    });
    animatedSection2 = true;
  }
  delay = 0;
  const section3 = document.querySelector('#section-3');
  const sectionTopSection3 = section3.offsetTop;
  if (pageTop >= (sectionTopSection3 - 400) && !animatedSection3) {
    const line3 = this.document.getElementById('line-3');
    const line4 = this.document.getElementById('line-4');
    line3.style.opacity = 1;
    line4.style.opacity = 1;
    const span_line3 = document.querySelectorAll('#line-3 span');
    span_line3.forEach(element => {
      // Thêm animation vào element
      element.style.opacity = 0;
      element.style.animation = 'fadeIn ease-in 1 forwards';
      element.style.animationDelay = `${delay}s`;
      element.style.animationDuration = '1s';

      // Tăng delay lên 0.1s sau mỗi lần duyệt 
      delay += 0.05;

    });
    const span_line4 = document.querySelectorAll('#line-4 span');
    span_line4.forEach(element => {
      // Thêm animation vào element
      element.style.opacity = 0;
      element.style.animation = 'fadeIn ease-in 1 forwards';
      element.style.animationDelay = `${delay}s`;
      element.style.animationDuration = '1s';

      // Tăng delay lên 0.1s sau mỗi lần duyệt 
      delay += 0.05;

    });
    animatedSection3 = true;
  }

  delay = 0;
  const section4 = document.querySelector('#section-4');
  const sectionTopSection4 = section4.offsetTop;
  if (pageTop >= (sectionTopSection4 - 400) && !animatedSection4) {
    const line5 = this.document.getElementById('line-5');
    line5.style.opacity = 1;
    const span_line5 = document.querySelectorAll('#line-5 span');
    span_line5.forEach(element => {
      // Thêm animation vào element
      element.style.opacity = 0;
      element.style.animation = 'fadeIn ease-in 1 forwards';
      element.style.animationDelay = `${delay}s`;
      element.style.animationDuration = '1s';

      // Tăng delay lên 0.1s sau mỗi lần duyệt 
      delay += 0.05;

    });
    animatedSection4 = true;
  }

  delay = 0;
  const section5 = document.querySelector('#section-5');
  const sectionTopSection5 = section5.offsetTop;
  if (pageTop >= (sectionTopSection5 - 400) && !animatedSection5) {
    const line6 = this.document.getElementById('line-6');
    line6.style.opacity = 1;
    const span_line6 = document.querySelectorAll('#line-6 span');
    span_line6.forEach(element => {
      // Thêm animation vào element
      element.style.opacity = 0;
      element.style.animation = 'fadeIn ease-in 1 forwards';
      element.style.animationDelay = `${delay}s`;
      element.style.animationDuration = '1s';
      // Tăng delay lên 0.1s sau mỗi lần duyệt 
      delay += 0.05;

    });
    animatedSection5 = true;

    let water1 = document.getElementById('water-1');
    let water2 = document.getElementById('water-2');
    let water3 = document.getElementById('water-3');
    water1.style.clipPath = `circle(36% at 62% 22%)`;
    let waterInHand = document.getElementById('water-in-hand');
    setTimeout(() => {
      waterInHand.style.clipPath = `circle(36% at 62% 40%)`;
    }, 2300);
    setTimeout(() => {
      water2.style.clipPath = `circle(39% at 57% 53%)`;
    }, 3700);
    setTimeout(() => {
      water3.style.clipPath = ` circle(39% at 69% 54%)`;
    }, 4100);
  }


  delay = 0;
  const section6 = document.querySelector('#section-6');
  const sectionTopSection6 = section6.offsetTop;
  if (pageTop >= (sectionTopSection6 - 400) && !animatedSection6) {
    const line7 = this.document.getElementById('line-7');
    const line8 = this.document.getElementById('line-8');
    line7.style.opacity = 1;
    line8.style.opacity = 1;
    const span_line7 = document.querySelectorAll('#line-7 span');
    span_line7.forEach(element => {
      // Thêm animation vào element
      element.style.opacity = 0;
      element.style.animation = 'fadeIn ease-in 1 forwards';
      element.style.animationDelay = `${delay}s`;
      element.style.animationDuration = '1s';

      // Tăng delay lên 0.1s sau mỗi lần duyệt 
      delay += 0.05;

    });
    const span_line8 = document.querySelectorAll('#line-8 span');
    span_line8.forEach(element => {
      // Thêm animation vào element
      element.style.opacity = 0;
      element.style.animation = 'fadeIn ease-in 1 forwards';
      element.style.animationDelay = `${delay}s`;
      element.style.animationDuration = '1s';

      // Tăng delay lên 0.1s sau mỗi lần duyệt 
      delay += 0.05;

    });
    animatedSection6 = true;
  }

  delay = 0;
  const section9 = document.querySelector('#section-9');
  const sectionTopSection9 = section9.offsetTop;
  if (pageTop >= (sectionTopSection9 - 400) && !animatedSection9) {
    const line10 = this.document.getElementById('line-10');
    line10.style.opacity = 1;
    const span_line10 = document.querySelectorAll('#line-10 span');
    span_line10.forEach(element => {
      // Thêm animation vào element
      element.style.opacity = 0;
      element.style.animation = 'fadeIn ease-in 1 forwards';
      element.style.animationDelay = `${delay}s`;
      element.style.animationDuration = '1s';

      // Tăng delay lên 0.1s sau mỗi lần duyệt 
      delay += 0.05;

    });
    animatedSection9 = true;
  }
  delay = 0;
  const section11 = document.querySelector('#section-11');
  const sectionTopSection11 = section11.offsetTop;
  if (pageTop >= (sectionTopSection11 - 400) && !animatedSection11) {
    const line13 = this.document.getElementById('line-13');
    line13.style.opacity = 1;
    const span_line13 = document.querySelectorAll('#line-13 span');
    span_line13.forEach(element => {
      // Thêm animation vào element
      element.style.opacity = 0;
      element.style.animation = 'fadeIn ease-in 1 forwards';
      element.style.animationDelay = `${delay}s`;
      element.style.animationDuration = '1s';

      // Tăng delay lên 0.1s sau mỗi lần duyệt 
      delay += 0.05;

    });
    animatedSection11 = true;
  }

});



const clickLance = document.getElementById('click-lance');

const lance = document.getElementById('lance');
const blood = document.getElementById('blood');

// Hàm xử lý sự kiện click
clickLance.addEventListener('click', () => {

  lance.style.animationName = 'none';
  lance.style.animationDuration = '0s';
  lance.style.transition = 'transform 2s ease-out';
  lance.style.transform = `translate(-50%, -50%)`;
  setTimeout(() => {
    lance.style.transform = `translate(-50%, -30%)`;
  }, 10);

  blood.style.transform = 'scale(0)';

  // Lắng nghe transition end để reset lại transform 
  blood.addEventListener('transitionend', () => {
    blood.style.transition = 'none';
    blood.style.transform = 'scale(0)';
  });

  // Scale up  
  setTimeout(function () {
    blood.style.transition = 'transform 8s ease-out';
    blood.style.transform = 'scale(19)';
  }, 2000);


  setTimeout(function () {
    blood.style.transform = 'scale(0)';
    lance.style.animationName = 'flying';
    lance.style.animationDuration = '3s';
    lance.style.transform = `translate(-50%, -50%)`;
  }, 8000);

});




document.addEventListener('DOMContentLoaded', function () {
  var section8 = document.getElementById('section-8');
  var cloudLeft = document.getElementById('cloud-left');
  var clouds = document.querySelectorAll('.section .move');
  var grounds = document.querySelectorAll('.section .static');
  var cloudLeft = document.getElementById('cloud-left');
  var cloudRight = document.getElementById('cloud-right');


  function parallax() {
    var scrollPosition = window.scrollY - section8.offsetTop;
    console.log(section8.offsetHeight / 2);
    var translateValue = 0;
    var hundred = section8.offsetHeight / 2;
    var hundredwidth = section8.offsetWidth;
    // Kiểm tra điều kiện khi scrollPosition lớn hơn -9
    if (scrollPosition > -9) {
      // Tính toán giá trị dịch chuyển dựa trên scrollPosition
      translateValue = Math.min(scrollPosition / hundredwidth * 100 * 1, hundredwidth);
    }
    var translateValue2 = translateValue + 10;
    var scrollPosition2 = scrollPosition + 10; var scrollPosition3 = scrollPosition2 + 10;
    var speed = cloudLeft.getAttribute('data-speed');
    cloudLeft.style.transform = 'translateY(' + scrollPosition3 / hundred * 100 * speed + '%) translateX(-' + translateValue2 + '%)';
    speed = cloudRight.getAttribute('data-speed');
    cloudRight.style.transform = 'translateY(' + scrollPosition2 / hundred * 100 * speed + '%) translateX(' + translateValue + '%)';

    if (scrollPosition >= section8.offsetHeight / 2) {
      // Tính toán giá trị dịch chuyển dựa trên scrollPosition
      scrollPosition = section8.offsetHeight / 2;
    }
    grounds.forEach(function (ground) {
      var speed = ground.getAttribute('data-speed');
      ground.style.transform = 'translateY(' + scrollPosition * speed + 'px)';

    });
  }

  // Thêm sự kiện scroll
  window.addEventListener('scroll', function () {
    parallax();
  });

  // Thêm sự kiện resize để cập nhật lại chiều cao của section khi cửa sổ thay đổi kích thước
  window.addEventListener('resize', function () {
    section8.style.height = section8.offsetHeight + 'px';
  });

  // Hiển thị ảnh khi section 8 vào tầm nhìn
  function showImages() {
    var sectionRect = section8.getBoundingClientRect();

    if (sectionRect.top <= window.innerHeight && sectionRect.bottom >= 0) {
      clouds.forEach(function (cloud) {
        cloud.style.display = 'block';
      });
      grounds.forEach(function (ground) {
        ground.style.display = 'block';
      });
    } else {
      clouds.forEach(function (cloud) {
        cloud.style.display = 'none';
      });
      grounds.forEach(function (ground) {
        ground.style.display = 'none';
      });
    }
  }
  // Thêm sự kiện load và sự kiện scroll để kiểm tra hiển thị ảnh
  window.addEventListener('load', showImages);
  window.addEventListener('scroll', showImages);
});


document.addEventListener('DOMContentLoaded', function () {
  var section11 = document.getElementById('section-11');
  var section10 = document.getElementById('section-10');
  var shadow2 = document.getElementById('shadow-2');
  var flower2 = document.getElementById('flower-2');
  var hand2 = document.getElementById('hand-2');
  var redhandback = document.getElementById('red-hand-back');
  var redhandfront = document.getElementById('red-hand-front');


  function parallax2() {
    var scrollPosition = window.scrollY - section10.offsetTop;
    var scrollPosition11 = window.scrollY - section11.offsetTop;
    const line14 = this.document.getElementById('line-14');


    var hundred = section11.offsetHeight/8;
    var translateValue = 50;
    if (scrollPosition11 >= 50) {
      translateValue = Math.min(((250 * scrollPosition11) / hundred), hundred*4);
    }
    console.log(translateValue / hundred * 100+"huhu");
    console.log(scrollPosition11);
    var translateValue2 = translateValue + translateValue * 0.5;
    line14.style.transform = 'translate(-50%,-' + translateValue / hundred * 100 + '%)';


    if (scrollPosition > -549) {
      var delay = 0;
      if (!animatedSection10) {
        const line11 = this.document.getElementById('line-11');
        line11.style.opacity = 1;
        const span_line11 = document.querySelectorAll('#line-11 span');
        span_line11.forEach(element => {
          // Thêm animation vào element
          element.style.opacity = 0;
          element.style.animation = 'fadeIn ease-in 1 forwards';
          element.style.animationDelay = `${delay}s`;
          element.style.animationDuration = '1s';

          // Tăng delay lên 0.1s sau mỗi lần duyệt 
          delay += 0.05;

        });
        animatedSection10 = true;
      }
    }

    if (scrollPosition <= -5) {
      scrollPosition = -5;
    } else if (scrollPosition >= 551) {
      scrollPosition = 551;
    } else if (scrollPosition >= 95) {
      shadow2.style.opacity = 0;
      flower2.style.opacity = 0;
    } else {
      shadow2.style.opacity = 1;
      flower2.style.opacity = 1;
    }

    if (scrollPosition > 363) {
      var delay = 0;
      if (!animatedSection102) {
        const line12 = this.document.getElementById('line-12');
        line12.style.opacity = 1;
        const span_line12 = document.querySelectorAll('#line-12 span');
        span_line12.forEach(element => {
          // Thêm animation vào element
          element.style.opacity = 0;
          element.style.animation = 'fadeIn ease-in 1 forwards';
          element.style.animationDelay = `${delay}s`;
          element.style.animationDuration = '1s';

          // Tăng delay lên 0.1s sau mỗi lần duyệt 
          delay += 0.05;

        });
        animatedSection102 = true;
      }
      redhandback.style.opacity = 1;
      redhandfront.style.opacity = 1;
    } else {

      redhandback.style.opacity = 0;
      redhandfront.style.opacity = 0;
    }

    if (scrollPosition >= 512) {
      var styleTag = document.createElement('style');

      var cssContent =
        `@keyframes flying-hand {
                0% {
                    transform: translateY(${551}px);
                }


                50% {
                    transform: translateY(${571}px);
                }

                100% {
                    transform: translateY(${551}px);
                }
            }`;

      styleTag.innerHTML = cssContent;

      document.head.appendChild(styleTag);

      redhandback.style.animationName = 'flying-hand';
      redhandfront.style.animationName = 'flying-hand';
      redhandback.style.animationIterationCount = 'infinite';
      redhandfront.style.animationIterationCount = 'infinite';
      redhandback.style.animationTimingFunction = 'ease-in';
      redhandfront.style.animationTimingFunction = 'ease-in';
      redhandback.style.animationDuration = '3s';
      redhandfront.style.animationDuration = '3s';
    } else {
      redhandback.style.animationName = 'none';
      redhandfront.style.animationName = 'none';
      redhandback.style.animationDuration = '0s';
      redhandfront.style.animationDuration = '0s';
    }

    var speed = ground.getAttribute('data-speed');
    hand2.style.transform = 'translateY(' + scrollPosition * speed + 'px)';
    redhandback.style.transform = 'translateY(' + scrollPosition * speed + 'px)';
    redhandfront.style.transform = 'translateY(' + scrollPosition * speed + 'px)';

  }

  // Thêm sự kiện scroll
  window.addEventListener('scroll', function () {
    parallax2();
  });

  window.addEventListener('resize', function () {
    section10.style.height = section10.offsetHeight + 'px';
  });

  function showImages2() {
    var sectionRect = section10.getBoundingClientRect();

    if (sectionRect.top <= window.innerHeight && sectionRect.bottom >= 0) {
      shadow2.style.display = 'block';
      flower2.style.display = 'block';
      hand2.style.display = 'block';
      redhandback.style.display = 'block';
      redhandfront.style.display = 'block';
    } else {
      shadow2.style.display = 'none';
      flower2.style.display = 'none';
      hand2.style.display = 'none';
      redhandback.style.display = 'none';
      redhandfront.style.display = 'none';
    }
  }

  window.addEventListener('load', showImages2);
  window.addEventListener('scroll', showImages2);
});

const speaker = document.getElementById("speaker");
const music = document.getElementById("music");

speaker.addEventListener("click", () => {
  if(music.paused) {
    music.play();
    speaker.src="volume_up.svg";
  } else {
    music.pause();
    speaker.src="volume_off.svg";
  }
});

const boom_music = document.getElementById("boom_music");

boom.addEventListener("mouseenter", () => {
    boom_music.play();
  });

boom.addEventListener('mouseleave', function () {
 boom_music.pause();
});

const lanceslide = document.getElementById("lanceslide");

clickLance.addEventListener("click", () => {
  if (lanceslide.paused) {
    setTimeout(() => {
      lanceslide.play();
    }, 1000); // 1000 milliseconds = 1 second
  } else {
    setTimeout(() => {
      lanceslide.pause();
    }, 1000); // 1000 milliseconds = 1 second
  }
});
