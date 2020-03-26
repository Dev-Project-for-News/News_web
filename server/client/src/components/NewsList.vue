<template>
  <div class="list row">
    <!-- <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by title"
          v-model="title"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>
      </div>
    </div> -->
    <div class="col-md-6">
      <h4>News List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(_news, index) in news"
          :key="index"
          @click="setActiveNews(_news, index)"
        >
          {{ _news.title }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllNews">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentNews" class="mt-4">
        <div>
          <label><strong>Title </strong></label> {{ currentNews.title }}
        </div>
        <div>
          <label><strong>Topic </strong></label> {{ currentNews.topic }}
        </div>
        <div>
          {{ currentNews.text }}
        </div>

        <a class="badge badge-warning"
          :href="'/' + currentNews.id"
        >
          Edit
        </a>
      </div>
      <!-- <div v-else>
        <br />
        <p>Please click on a News...</p>
      </div> -->
    </div>
  </div>
</template>

<script>
import NewsDataService from "../services/NewsDataService";

export default {
  name: "news-list",
  data() {
    return {
      news: [],
      currentNews: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveNews() {
      NewsDataService.getAll()
        .then(response => {
          this.news = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveNews();
      this.currentNews = null;
      this.currentIndex = -1;
    },

    setActiveNews(_news, index) {
      this.currentNews = _news;
      this.currentIndex = index;
    },

    removeAllNews() {
      NewsDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    // searchTitle() {
    //   NewsDataService.findByTitle(this.title)
    //     .then(response => {
    //       this.news = response.data;
    //       console.log(response.data);
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // }
  },
  mounted() {
    this.retrieveNews();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>