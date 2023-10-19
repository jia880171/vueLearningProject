<template>
  <section>
    <nine-frames></nine-frames>

    <header>
      <h1>My Friends</h1>
    </header>

    <new-friend @add-contact="addContact"></new-friend>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :favorite="friend.favorite"
        @toggle-favorite="toggleFavoriteStatus"
        @delete-friend="deleteFriend"
      >
      </friend-contact>
    </ul>
  </section>
</template>

<script>
import nineFrames from "./components/nineFrames.vue";
export default {
  components: { nineFrames },
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 45678 90",
          email: "manuel@localhost.com",
          favorite: false,
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0987 654421 21",
          email: "julie@localhost.com",
          favorite: false,
        },
      ],
    };
  },
  methods: {
    // this funtion will be called when the @toggle-favorite is emited
    toggleFavoriteStatus(friendId) {
      console.log("friend was clicked: ", friendId);

      const identifiedFriend = this.friends.find(
        (friend) => friend.id === friendId
      );
      if (identifiedFriend) {
        console.log("og favorite: ", identifiedFriend.favorite);
        identifiedFriend.favorite = !identifiedFriend.favorite;
        console.log("turn to favorite: ", identifiedFriend.favorite);
        console.log("====== got emit at parent");
      }
    },
    show() {
      console.table(this.friends);
    },
    addContact(name, phone, email) {
      const newFriendContact = {
        id: new Date().toISOString(),
        name,
        phone,
        email,
        favorite: false,
      };
      this.friends.push(newFriendContact);
    },
    deleteFriend(friendID) {
      const friendIndex = this.friends.findIndex(
        (friend) => friend.id === friendID
      );
      if (friendIndex !== -1) {
        this.friends.splice(friendIndex, 1);
      }
    },
  },
};
</script>

<!-- write a for to load pic -->

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: arem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
</style>
