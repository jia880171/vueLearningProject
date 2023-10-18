import { createApp } from "vue";
import JJJ from "./App.vue";
import FriendContact from './components/FriendContact'
import NewFriend from './components/NewFriend'
import NineFrames from './components/nineFrames'
const app = createApp(JJJ);

app.component('friend-contact', FriendContact)
app.component('new-friend', NewFriend)
app.component('nineFrames', NineFrames)

app.mount("#app");