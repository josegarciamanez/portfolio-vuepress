<template>
  <div class="project-list">

    <router-link
      :to="post.path"
      tag="div"
      v-for="post in posts"
      :key="post.title"
      class="post"
      :style="{ backgroundImage: `url(${post.frontmatter.thumbnail})` }"
    >

      <div class="info">
        <h2>{{ post.frontmatter.title }}</h2>
        <span v-if="post.frontmatter.description">{{ post.frontmatter.description }}</span>
      </div>

    </router-link>

  </div>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$site.pages
        .filter(x => x.path.startsWith("/works/") && !x.frontmatter.works_index)
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        );
    }
  }
};
</script>

<style scoped>
.post {
  position: relative;
  float: left;
  width: 47%;
  height: 40vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* margin-bottom: 2vw; */
  border: 1px solid black;
  cursor: pointer;
  margin: 5px;
}

.info:hover {
  transform: scale(1.1);
}

.info {
  position: absolute;
  left: 0;
  top: 2rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(90deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  opacity: 0.8;
  color: white;
  max-width: 400px;
}

.info h2 {
  display: inline-block;
  width: auto;
  font-size: 0.8rem;
  font-weight: 700;
  margin: 0;
}

.info span {
  display: inline-block;
  width: auto;
  margin: 0;
  margin-left: 0.5rem;
  font-size: 0.8rem;
}
@media only screen and (max-width: 767px) {
  .post {
    width: 100%;
    height: 40vh;
  }
}
</style>
