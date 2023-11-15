// window.onload
window.onload = () => {
  // header
  const header = document.querySelector('.header');
  const headerToggle = () => {
    if (document.scrollingElement.scrollTop === 0) {
      header.classList.add('onTop');
    } else {
      header.classList.remove('onTop');
    }
  };
  headerToggle();
  document.addEventListener('scroll', headerToggle);

  // header nav
  const headerNavAnchor = header.querySelectorAll('.header_nav_list a');

  headerNavAnchor.forEach((target) => {
    target.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = target.href.split('#').pop();
      const destination = document.getElementById(targetId);
      window.scrollTo({ top: destination.offsetTop, behavior: 'smooth' });
    });
  });

  // section 0
  setTimeout(() => {
    document.getElementsByClassName('main_sec_0')[0].classList.add('active-ani');
  }, 500);

  // section 3
  const sec3Links = document.querySelectorAll('.main_sec_3_link_box .link');
  const toggleActive = ({ target }) => {
    sec3Links.forEach(({ classList }) => {
      classList.remove('active');
    });
    target.classList.add('active');
  };
  sec3Links.forEach((target) => {
    target.addEventListener('mouseenter', toggleActive);
    target.addEventListener('focus', toggleActive);
  });
};

// init controller
const controller = new ScrollMagic.Controller();

// section 1
const s1TextAni = {
  start: { scale: 1.25, color: 'rgba(255, 255, 255, 1)' },
  end: { scale: 1, color: 'rgba(255, 255, 255, .3)' }
};
new ScrollMagic.Scene({
  triggerElement: '#s1_1_start',
  duration: '100%'
}).addTo(controller).setTween('#s1_text_list>:nth-child(1)', 0.5, s1TextAni.start);
new ScrollMagic.Scene({
  triggerElement: '#s1_2_start',
  duration: '100%'
}).addTo(controller).setTween('#s1_text_list>:nth-child(1)', 0.5, s1TextAni.end);
new ScrollMagic.Scene({
  triggerElement: '#s1_2_start',
  duration: '100%'
}).addTo(controller).setTween('#s1_text_list>:nth-child(2)', 0.5, s1TextAni.start);
new ScrollMagic.Scene({
  triggerElement: '#s1_3_start',
  duration: '100%'
}).addTo(controller).setTween('#s1_text_list>:nth-child(2)', 0.5, s1TextAni.end);
new ScrollMagic.Scene({
  triggerElement: '#s1_3_start',
  duration: '100%'
}).addTo(controller).setTween('#s1_text_list>:nth-child(3)', 0.5, s1TextAni.start);
new ScrollMagic.Scene({
  triggerElement: '#s1_4_start',
  duration: '100%'
}).addTo(controller).setTween('#s1_text_list>:nth-child(3)', 0.5, s1TextAni.end);
new ScrollMagic.Scene({
  triggerElement: '#s1_4_start',
  duration: '70%'
}).addTo(controller).setTween('#s1_text_list', 0.5, { opacity: 0 });
new ScrollMagic.Scene({
  triggerElement: '#s1_4_start',
  duration: '100%'
}).addTo(controller).setTween('#s1_text_last', 0.5, { color: 'rgba(255, 255, 255, 1)' });
