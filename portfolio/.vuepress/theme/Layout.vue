<template>
  <div class="wrapper">

    <Navbar :logo="$site.themeConfig.logo" :sticky="$route.path === '/'" />

    <div class="container">

      <!-- Works list -->
      <div
        v-if="$route.path === '/'"
        :style="{
          marginTop: '-5vw'
        }"
      >
        <Content/>
      </div>

      <!-- Single project view -->
      <div v-if="isSingleProject">
        <SingleProjectHeader
          :title="$page.frontmatter.title"
          :year="$page.frontmatter.year.toString()"
          :categories="$page.frontmatter.categories"
        />
        <Content/>
      </div>
    </div>

    <div class="container">
      <!-- curriculum -->
      <div
        v-if="$route.path === '/curriculum/'"
        :style="{
          marginTop: '-7vw'
        }"
      >
        <Content/>
      </div>
    </div>

    <Footer />

  </div>
</template>

<script>
  export default {
    computed: {
      isSingleProject() {
        const worksRoute = '/works/'
        const path = this.$route.path
        if (path.includes('works') && path.length >= (worksRoute.length + 1)) {
          return true
        }
      }
    },
    updated() {
        // unwrap all images from paragraph tags so we can have
        // different widths inside the content.

        document.querySelectorAll('p img').forEach(image => {
          var wrapper = image.parentNode
          let children = wrapper.children
          let fragment = document.createDocumentFragment()

          Array.from(children).forEach(child => {
            fragment.appendChild(child)
          })

          wrapper.parentNode.replaceChild(fragment, wrapper)

        })
    },
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Comfortaa');
  :root {
    --color-black: #1c1c1c;
    --color-highlight: white;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  *::-moz-selection {
    background: var(--color-highlight);
    color: var(--color-black);
  }

  *::-webkit-selection {
    background: var(--color-highlight);
    color: var(--color-black);
  }

  *::selection {
    background: var(--color-highlight);
    color: var(--color-black);
  }

  body {
    font-family: 'Comfortaa', cursive;
    font-size: 16px;
    background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
	  background-size: 400% 400%;
	  -webkit-animation: Gradient 15s ease infinite;
	  -moz-animation: Gradient 15s ease infinite;
	  animation: Gradient 15s ease infinite;
    color: var(--color-black);
  }

  @-webkit-keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}

@-moz-keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}

@keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}

  img {
    width: 100%;
    max-width: 100%;
    line-height: 0;
    margin: 2rem 0;
  }

  .container {
    padding: 0 5vw;
  }

  img[alt=htmlLogo], img[alt=cssLogo] { 
    width: 50px;
  }

  h1,h2,h3,h4,h5,h6,p {
    width: 100%;
    max-width: 800px;
  }

  h1 {
    font-size: 3rem;
    line-height: 1.15;
    font-weight: 300;
    margin: 0 auto 3rem auto;
  }

  h2 {
    font-size: 2rem;
    font-weight: 300;
    margin: 2rem auto 2rem auto;
  }

  h3 {
    font-size: 1rem;
    font-weight: 700;
    margin: 2rem auto 1rem auto;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    margin: 1rem auto 2rem auto;
  }

  pre {
    background: var(--color-black);
    padding: 1rem;
    margin: 1rem 0;
  }

  code {
    color: white;
    background: var(--color-black);
    font-size: 0.8rem;
    padding: 0.05rem 0.25rem;
    font-weight: 400;
  }
@media only screen and (max-width: 767px) {
  .container {
    padding: 0 3vw;
  }
}
</style>
