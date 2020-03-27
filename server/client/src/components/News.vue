<template>
  <div class="details">
    <h4> {{currentNews.title }}</h4>

    <div class="info">
      <p>{{currentNews.topicId}}</p>
      <a :href="currentNews.url">{{currentNews.sourceId}}</a>
    </div>
    
    <p>{{ currentNews.text }}</p>

  </div>
</template>

<script>
import NewsDataService from "../services/NewsDataService";

export default {
  name: "news-details",
  data() {
    return {
      currentNews: null
    };
  },
  methods: {
    getNews(id) {
      NewsDataService.get(id)
        .then(response => {
          this.currentNews = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.getNews(this.$route.params.id);
  }
};
</script>

<style>
.details {
  width: 75%;
  margin: auto;
  margin-top: 5%;
}

.info {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

a {
  text-decoration: none;
  color: #000;
}
a:hover {
    text-decoration: none; /* Делает ссылку подчеркнутой при наведении на нее курсора */
    color: #343a40;
   } 
</style>
