'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

/////////////////////////////////////////////////////
// Modal overlay
/////////////////////////////////////////////////////

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});

/////////////////////////////////////////////////////
// Scrolling
/////////////////////////////////////////////////////

btnScrollTo.addEventListener('click', function (e) {
  // Section 1 cords
  // const section1Cords = section1.getBoundingClientRect();
  // console.log(section1Cords);

  // Button cords
  // console.log(e.target.getBoundingClientRect());

  // Current scroll cords
  // console.log('Current scroll X/Y', window.pageXOffset, window.pageYOffset);

  // Height/Width of viewport
  /* console.log(
    'Height/Width of viewport ',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  ); */

  // Scrolling
  /* window.scrollTo(
    section1Cords.left + window.pageXOffset,
    section1Cords.top + window.pageYOffset
  ); */

  // Old way
  /* window.scrollTo({
    left: section1Cords.left + window.pageXOffset,
    top: section1Cords.top + window.pageYOffset,
    behavior: 'smooth',
  }); */

  section1.scrollIntoView({ behavior: 'smooth' });
});

/////////////////////////////////////////////////////
// Page Navigation
/////////////////////////////////////////////////////

// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
