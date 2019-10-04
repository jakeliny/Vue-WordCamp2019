<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div v-for="post of posts" :key="post.id" class="col-sm-6 box">
          <h2>{{ post.title.rendered }}</h2>
          <p>Data: <b>{{ post.date }}</b></p>
          <p>Link: <b>{{ post.link }}</b></p>
          <p>Slug: <b>{{ post.slug }}</b></p>
          <p>Status: <b>{{ post.status }}</b></p>
          <p>Type: <b>{{ post.type }}</b></p>
          <p><b>Excerpt:</b></p>
          <div v-html="post.excerpt.rendered"></div>  

          <p><b>Conteúdo:</b></p>
          <div v-html="post.content.rendered"></div>         
        </div>
      </div>
    </div>
    <!-- .container -->
  </div>
  <!-- #app -->
</template>

<script>
import Posts from "./services/posts";

export default {
  data() {
    return {     
      posts: []
    };
  },

  mounted() {
    this.listar();
  },

  methods: {
    listar() {
      Posts.listar().then(resposta => {
        this.posts = resposta.data;
      });
    }
  }
};
</script>

<style>
.box {
  margin-top: 30px;
  margin-bottom: 100px;
}
h2 {
  font-weight: bold;
  text-align: center;
}
img {
  max-width: 100%;
  display: block;
  margin: 0 auto;
}
video{
      max-width: 100%;
}
</style>
