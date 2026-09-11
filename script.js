/**
 * Tech Logistics LLC — Universal Scripts
 * Lightweight, zero-dependency, vanilla JavaScript.
 */

document.addEventListener('DOMContentLoaded', function () {
  // 1. Mobile Navigation Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const primaryNav = document.querySelector('.primary-nav');

  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', function () {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      primaryNav.classList.toggle('is-open');
    });

    // Close menu when clicking outside on mobile
    document.addEventListener('click', function (event) {
      if (!navToggle.contains(event.target) && !primaryNav.contains(event.target)) {
        navToggle.setAttribute('aria-expanded', 'false');
        primaryNav.classList.remove('is-open');
      }
    });
  }

  // 2. Dynamic Copyright Year
  const yearSpans = document.querySelectorAll('.current-year');
  const currentYear = new Date().getFullYear();
  yearSpans.forEach(function (el) {
    el.textContent = currentYear;
  });

  // 3. Contact Form Validation & Submission Handler
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      let isValid = true;
      const requiredFields = contactForm.querySelectorAll('[required]');

      requiredFields.forEach(function (field) {
        const value = field.value.trim();
        const errorEl = field.parentElement.querySelector('.field-error');

        if (!value) {
          field.classList.add('is-invalid');
          if (errorEl) errorEl.style.display = 'block';
          isValid = false;
        } else if (field.type === 'email') {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(value)) {
            field.classList.add('is-invalid');
            if (errorEl) {
              errorEl.textContent = 'Please enter a valid email address.';
              errorEl.style.display = 'block';
            }
            isValid = false;
          } else {
            field.classList.remove('is-invalid');
            if (errorEl) errorEl.style.display = 'none';
          }
        } else {
          field.classList.remove('is-invalid');
          if (errorEl) errorEl.style.display = 'none';
        }
      });

      if (isValid) {
        /*
         * PRODUCTION FORM ENDPOINT:
         * To send submissions directly to an email service or CRM, paste your endpoint below:
         * e.g., const ENDPOINT_URL = "https://formspree.io/f/YOUR_FORM_ID";
         */
        const ENDPOINT_URL = ""; 

        const name = document.getElementById('fullName') ? document.getElementById('fullName').value : '';
        const email = document.getElementById('emailAddress') ? document.getElementById('emailAddress').value : '';
        const phone = document.getElementById('phoneNumber') ? document.getElementById('phoneNumber').value : '';
        const company = document.getElementById('companyName') ? document.getElementById('companyName').value : '';
        const mcNumber = document.getElementById('mcNumber') ? document.getElementById('mcNumber').value : '';
        const subject = document.getElementById('inquirySubject') ? document.getElementById('inquirySubject').value : 'General Inquiry';
        const message = document.getElementById('inquiryMessage') ? document.getElementById('inquiryMessage').value : '';

        if (ENDPOINT_URL) {
          // POST to designated endpoint
          const formData = new FormData(contactForm);
          fetch(ENDPOINT_URL, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
          }).then(function (response) {
            showSuccessState();
          }).catch(function (error) {
            alert('There was a problem submitting your inquiry. Please contact us directly via email at support@techlogisticsllc.altrixcore.com.');
          });
        } else {
          // Static fallback: display confirmation state and launch user's email client
          showSuccessState();

          const mailtoBody = encodeURIComponent(
            "Name: " + name + "\n" +
            "Company: " + company + "\n" +
            "MC/DOT #: " + mcNumber + "\n" +
            "Phone: " + phone + "\n\n" +
            "Message:\n" + message
          );
          const mailtoUrl = "mailto:support@techlogisticsllc.altrixcore.com?subject=" + 
            encodeURIComponent("Inquiry: " + subject + " - " + company) + 
            "&body=" + mailtoBody;

          // Open pre-filled email client
          window.location.href = mailtoUrl;
        }
      }
    });

    // Clear error on input
    const inputs = contactForm.querySelectorAll('.form-control');
    inputs.forEach(function (input) {
      input.addEventListener('input', function () {
        if (input.classList.contains('is-invalid')) {
          input.classList.remove('is-invalid');
          const errorEl = input.parentElement.querySelector('.field-error');
          if (errorEl) errorEl.style.display = 'none';
        }
      });
    });
  }

  function showSuccessState() {
    const successBox = document.getElementById('formSuccessMessage');
    const submitBtn = document.getElementById('submitBtn');
    if (successBox) {
      successBox.classList.add('is-visible');
      successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    if (contactForm) {
      contactForm.reset();
    }
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Message Submitted';
    }
  }

  // 4. Interactive Take-Home Dispatch Estimator (Landing Page)
  const revenueSlider = document.getElementById('revenueSlider');
  const sliderGrossDisplay = document.getElementById('sliderGrossDisplay');
  const metricFeeDisplay = document.getElementById('metricFeeDisplay');
  const metricNetDisplay = document.getElementById('metricNetDisplay');

  if (revenueSlider && sliderGrossDisplay && metricFeeDisplay && metricNetDisplay) {
    const ratePercent = 0.40; // 40% fill-in rate from prompt token

    function updateEstimator() {
      const gross = parseFloat(revenueSlider.value);
      const fee = gross * ratePercent;
      const net = gross - fee;

      sliderGrossDisplay.textContent = '$' + gross.toLocaleString('en-US');
      metricFeeDisplay.textContent = '$' + Math.round(fee).toLocaleString('en-US');
      metricNetDisplay.textContent = '$' + Math.round(net).toLocaleString('en-US');
    }

    revenueSlider.addEventListener('input', updateEstimator);
    updateEstimator();
  }
});

