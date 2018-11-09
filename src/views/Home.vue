<template>
  <div class="home">
    <div>
      <p>
        <label>Base Url: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input type="text" v-model="shortBaseUrl" style="height: 24px; width: 600px">
      </p>
      <p style="font-size: 12px"> currently, only support <font style="color:red">http://(test|test1|test2|test3).example.com</font> in nginx</p>
      <p>
        <label>Original URL: </label>
        <input type="text" v-model="originalUrl" style="height: 24px; width: 600px">
      </p>
      <p>
        <button @click="generate" style="height: 24px;">Generate</button>
      </p>
    </div>
    <hr style="width: 800px; border: 1px dashed #CCC">
    <div>
      <p>Generated URL</p>
      <p>
        <a v-if="generatedURL" :href="generatedURL" target="_blank">{{generatedURL}}</a>
      </p>
    </div>
    <div>
      <p style="color: red">{{error}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data: function() {
    return {
      error: "",
      shortBaseUrl: "http://test.example.com",
      originalUrl: "",
      generatedURL: null
    };
  },
  methods: {
    generate() {
      if (!this.shortBaseUrl) {
        this.error = "Base URL is required";
        return;
      }

      if (!this.originalUrl) {
        this.error = "Original URL is required";
        return;
      }

      this.$http
        .post("/api/v1/generation", {
          shortBaseUrl: this.shortBaseUrl,
          originalUrl: this.originalUrl
        })
        .then(res => {
          this.error = null;
          this.generatedURL = res.data;
        })
        .catch(error => {
          this.error = error.response.data;
        });
    }
  }
};
</script>
