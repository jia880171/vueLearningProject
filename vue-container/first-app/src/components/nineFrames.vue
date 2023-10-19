<template>
  <section>
    <div class="img-row">
      <div
        class="img-container"
        v-for="(picSrc, index) in picSrcs"
        :key="index"
      >
        <img :src="require(`@/assets/${picSrc}`)" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      picSrcs: [
        "1.jpeg",
        "2.jpeg",
        "3.jpeg",
        "4.jpeg",
        "5.jpeg",
        "1.jpeg",
        "2.jpeg",
        "3.jpeg",
        "1.jpeg",
        // "6.jpeg",
        // "7.jpeg",
        // "8.jpeg",
        // "9.jpeg"
      ],
    };
  },
};
</script>

<style>
.img-row {
  width: 60vw;
  display: flex;
  flex-wrap: wrap;
}

.img-container {
  /* border: 1; */
  /* border-color: red; */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);

  flex: 0 0 calc(33.33% - 20px); /* Three images per row; adjust the width and spacing as needed */
  text-align: center;
  margin: 10px; /* Adjust this to control the spacing between images */
}

img {
  max-width: 100%; /* Ensure images don't exceed their container's width */
  height: auto; /* Maintain the aspect ratio of the images */
}
</style>
