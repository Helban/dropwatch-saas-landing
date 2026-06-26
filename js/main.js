'use strict';

const initMobileNav = () => {
  const toggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  if (!toggle || !navList) {
    return;
  }

  const closeNav = () => {
    navList.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  navList.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeNav);
  });
};

const initBillingToggle = () => {
  const options = document.querySelectorAll('.billing-option');
  const amounts = document.querySelectorAll('.plan-price .amount');
  if (options.length === 0 || amounts.length === 0) {
    return;
  }

  const applyBilling = (period) => {
    amounts.forEach((amount) => {
      const price = amount.dataset[period];
      if (price) {
        amount.textContent = price;
      }
    });
    options.forEach((option) => {
      const isActive = option.dataset.billing === period;
      option.classList.toggle('is-active', isActive);
      option.setAttribute('aria-pressed', String(isActive));
    });
  };

  options.forEach((option) => {
    option.addEventListener('click', () => applyBilling(option.dataset.billing));
  });
};

initMobileNav();
initBillingToggle();
