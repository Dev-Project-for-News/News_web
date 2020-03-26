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
    <div class="col-md-12">
      <ul class="list-group">
        <li class="list-group-item border-top shadow mt-3"
          :class="{ active: index == currentIndex }"
          v-for="(_news, index) in showNews"
          :key="index"
          @click="setActiveNews(_news, index)"
        >
        <a :href="_news.id">
          <b>{{ _news.title }}</b>
          <hr/>
          {{ _news.ann }}
        </a>
          
        </li>
      </ul>

      <div v-if="visible" class="btn-list">
        <div class="next border border-primary bg-light rounded p-1 mb-1"
          @click="getNextNews()" >MORE</div>
      </div>

      <!-- <button class="m-3 btn btn-sm btn-danger" @click="removeAllNews">
        Удалить все
      </button> -->
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
      showNews: [],
      showNewsIndex: 10,
      visible: true,
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
          this.showNews = this.news.slice(0,10);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    getNextNews() {
      if (this.news.length > this.showNewsIndex) {
        this.showNewsIndex += 10;
        if (this.news.length <= this.showNewsIndex) this.visible = false;
      } else {
        this.visible = false;
      }
      this.showNews = this.news.slice(0,this.showNewsIndex);
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
  width: 80%;
  margin: auto;
}

a {
  text-decoration: none;
  color: #000;
}
a:hover {
    text-decoration: none; /* Делает ссылку подчеркнутой при наведении на нее курсора */
    color: #343a40;
   } 

.btn-list {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 2%;
}

.btn-list .round {
    border-radius: 50%;
}
</style>