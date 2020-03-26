<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="topic">Topic</label>
        <input
          type="text"
          class="form-control"
          id="topic"
          required
          v-model="news.topic"
          name="topic"
        />
      </div>

      <!-- <div class="form-group">
        <label for="topic">Topic</label>
        <select name="listTopics">
            <option>Choose from the list</option>
            <option>Option</option>
            <option>Textarea</option>
            <option>Label</option>
            <option>Fieldset</option>
            <option>Legend</option>
        </select>
      </div> -->

      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="news.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="annotation">Annotation</label>
        <input
          class="form-control"
          id="annotation"
          required
          v-model="news.ann"
          name="annotation"
        />
      </div>

      <div class="form-group">
        <label for="date">Date</label>
        <input
          type="date"
          class="form-control"
          id="date"
          required
          v-model="news.date"
          name="date"
        />
      </div>

      <div class="form-group">
        <label for="source">Source</label>
        <input
          type="text"
          class="form-control"
          id="source"
          required
          v-model="news.source"
          name="source"
        />
      </div>

      <div class="form-group">
        <label for="url">URL</label>
        <input
          type="text"
          class="form-control"
          id="url"
          required
          v-model="news.url"
          name="url"
        />
      </div>

      <div class="form-group">
        <label for="text">Text</label>
        <input
          class="form-control"
          id="text"
          required
          v-model="news.text"
          name="text"
        />
      </div>

      <button @click="saveNews" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newNews">Create</button>
    </div>
  </div>
</template>

<script>
import NewsDataService from "../services/NewsDataService";

export default {
  name: "create-news",
  data() {
    return {
      news: {
        id: null,
        topic: "",
        title: "",
        ann: "",
        date: "",
        source: "",
        url: "",
        text: "",
      },
      submitted: false
    };
  },
  methods: {
    saveNews() {
      var data = {
        title: this.news.title,
        ann: this.news.ann
      };

      NewsDataService.create(data)
        .then(response => {
          this.news.id = response.data.id;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });

      this.submitted = true;
    },
    
    newNews() {
      this.submitted = false;
      this.news = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>