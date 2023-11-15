window.onload = () => {
  const subSecLinkBox = document.querySelector('.sub_sec_link_box');
  const scrollHandler = () => {
    if (
      (document.scrollingElement.scrollTop + window.innerHeight) > subSecLinkBox.offsetTop
    ) {
      subSecLinkBox.classList.add('active-ani');
    } else {
      subSecLinkBox.classList.remove('active-ani');
    }
  };
  document.addEventListener('scroll', scrollHandler);
};
