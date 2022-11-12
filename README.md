# parade-webrtc-web

This project uses Nuxt v2 + Composition API

Composition API can be used in two ways, either with 1. defineComponent or 2. script setup
```
<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent {
    setup() {
        const aValue = ref(42)
        const aFunction = () => {
            aValue.value++
        }
        
        return {
            aValue,
            aFunction
        }
    }
}
</script>
```
Using this style is better to interact with the Nuxt metadata. In case where it's unavoidable can use this approach.

If there is no need for this, I strongly prefer the second way `script setup`. Here is the same example with the other approach
```
<script setup>
import { ref } from '@nuxtjs/composition-api'

const aValue = ref(42)
const aFunction = () => {
    aValue.value++
}
</script>
```

In Nuxt 3 this will not be an issue anymore and `head` can be modified within script setup. So I would always go for script setup first. And if we need to change it we can just wrap everything with defineComponent.

I will add more information later. For now, I have prepared the `/intro.vue` page because I think Vue 3 syntax is still new to most. Please also have a look at the comments. And of course consult official documentation for a further deep dive.

## Important Notes

- To be able to use Composition API correctly, need to change the extension. Vue 2 - Vetur, Vue 3 - Volar. Please keep it in mind.

- In this repository I opted for WindiCSS, which is basically a Tailwind clone but much more lightweight and comes with pluggable Tailwind features out of the box, like the JIT mode. There is an extra WindiCSS IntelliSense extension and it even works with Tailwind, so there is no need to switch back and forth for different projects.

- Vuex is currently enabled for the @nuxtjs/auth module. Currently we don't need any application state. We could keep all the data directly in the pages. In the future if we decide we need a store, I'd like to use Pinia instead. It is modular by default (using Composition API itself), drops Mutations, and is completely type-safe. Also it was recently announced that Pinia is now the officially supported/suggested Store Management system for Vue 3. In light of a stable Nuxt 3 (Vue 3) release in the near future, it is good to plan ahead.
## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `composables`

The composables directory contains any composable pieces of code. Composables are very similar to React Hooks in that they can be used within each other. Composables basically replace mixins from Vue 2.

More information about Composables in [the Vue documentation](https://vuejs.org/guide/reusability/composables.html).

### `config`

The config directory contains configurations for plugins/modules and also other common or global settings.

### `constants`

The constants directory contains any kind of constants. This includes literal constants, Enums and also Types. It is convenient to keep them all together. They are all very similar in nature.

### `lang`

The lang directory contains locales.

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).

### `test`

This directory contains any kind of unit or e2e tests. Since it is a small application you would think we don't need those. But exactly because it is a small application it would be great to include them.

Testing smaller projects is much less intimidating and we can prepare a solid foundation for any future customization by including an extensible test environment.
"# jp-demo-app-client" 
