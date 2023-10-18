<template>
  <li class="friend-li">
    <h2>{{ name }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleFavorite">{{ isfavorite }}</button>

    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>

    <button @click="deleteFriend">delete {{ name }}</button>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {},
    favorite: {
      type: Boolean
    }
  },
  // The emits is used to document the component
  // emits: ['toggle-favorite']
  emits: {
    "toggle-favorite": function (id) {
      if (id) {
        return true;
      } else {
        console.warn("missing ID");
        return false;
      }
    }
  },
  data() {
    return {
      detailsAreVisible: false,
      isfavorite: this.favorite // This only init the vaule.To keep isfavorite in sync you need to use a watcher.
    };
  },
  watch: {
    favorite(value) {
      this.isfavorite = value;
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      // this.isfavorite = !this.isfavorite;

      this.$emit("toggle-favorite", this.id);
      // this.$emit("toggle-favorite");
    },

    deleteFriend() {
      this.$emit("delete-friend", this.id);
    }
  }
};
</script>

<style>
.friend-li {
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  width: 50vw;
  height: 15vh;
}
</style>
