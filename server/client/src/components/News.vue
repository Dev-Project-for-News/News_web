<template>
  <div v-if="currentNews" class="edit-form">
    <h4>News</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title"
          v-model="currentNews.title"
        />
      </div>
      <div class="form-group">
        <label for="annotation">Annotation</label>
        <input type="text" class="form-control" id="annotation"
          v-model="currentNews.annotation"
        />
      </div>

      <div class="form-group">
        <label><strong>Topic:</strong></label>
        {{ currentNews.topic }}
      </div>
    </form>

    <!-- <button class="badge badge-primary mr-2"
      v-if="currentNews.published"
      @click="updatePublished(false)"
    >
      UnPublish
    </button>
    <button v-else class="badge badge-primary mr-2"
      @click="updatePublished(true)"
    >
      Publish
    </button> -->

    <button class="badge badge-danger mr-2"
      @click="deleteNews"
    >
      Delete
    </button>

    <button type="submit" class="badge badge-success"
      @click="updateNews"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a News...</p>
  </div>
</template>

<script>
import NewsDataService from "../services/NewsDataService";

export default {
  name: "news-details",
  data() {
    return {
      currentNews: null,
      message: ''
    };
  },
  methods: {
    getNews(id) {
      NewsDataService.get(id)
        .then(response => {
          this.currentNews = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    // updatePublished(status) {
    //   var data = {
    //     id: this.currentNews.id,
    //     title: this.currentNews.title,
    //     annotation: this.currentNews.annotation,
    //     published: status
    //   };

    //   NewsDataService.update(this.currentNews.id, data)
    //     .then(response => {
    //       this.currentNews.published = status;
    //       console.log(response.data);
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // },

    updateNews() {
      NewsDataService.update(this.currentNews.id, this.currentNews)
        .then(response => {
          console.log(response.data);
          this.message = 'The news was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteNews() {
      NewsDataService.delete(this.currentNews.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "news" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getNews(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>