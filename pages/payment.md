---
layout: page
title: Payment
permalink: /pages/payment
redirect_from: "/payment"
---

<div class="page-section">
  <h1>Payment Test</h1>
</div>

<form action="https://css-checkout.herokuapp.com/" method="POST">
  <script
    src="https://checkout.stripe.com/checkout.js" class="stripe-button"
    data-key="pk_test_xQxLXcl78GmSYv48ZqMBp0H3"
    data-amount="999"
    data-name="cssbristol"
    data-description="Widget"
    data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
    data-locale="auto"
    data-currency="gbp">
  </script>
</form>
