<template>
  <!-- Begin Mailchimp Signup Form -->
  <div id="mc_embed_signup">
    <form
      action="https://gmail.us17.list-manage.com/subscribe/post?u=b1231afa3c5fe53c1fa72150f&amp;id=f170e0032e"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      class="validate"
      target="_blank"
      novalidate
    >
      <div id="mc_embed_signup_scroll">
        <div class="mc-field-group">
          <label for="mce-EMAIL">Email Address </label>
          <input
            type="email"
            value=""
            name="EMAIL"
            class="required email"
            id="mce-EMAIL"
            v-model="email"
          />
        </div>
        <div class="mc-field-group">
          <label for="mce-FNAME">First Name </label>
          <input
            type="text"
            value=""
            name="FNAME"
            class=""
            id="mce-FNAME"
            v-model="firstName"
          />
        </div>
        <div id="mce-responses" class="clear">
          <div
            class="response"
            id="mce-error-response"
            style="display:none"
          ></div>
          <div
            class="response"
            id="mce-success-response"
            style="display:none"
          ></div>
        </div>
        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px;" aria-hidden="true">
          <input
            type="text"
            name="b_b1231afa3c5fe53c1fa72150f_f170e0032e"
            tabindex="-1"
            value=""
          />
        </div>
        <div class="clear">
          <input
            type="submit"
            value="Subscribe"
            name="subscribe"
            id="mc-embedded-subscribe"
            class="button"
          />
        </div>
      </div>
    </form>
    {{ email }}
    {{ firstName }}
  </div>

  <!--End mc_embed_signup-->
</template>

<script>
export default {
  data() {
    return {
      email: "",
      firstName: "",
    };
  },
  computed: {
    disableBtn() {
      const re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/gim;
      return !re.test(this.email);
    },
  },
};
</script>

<style></style>
