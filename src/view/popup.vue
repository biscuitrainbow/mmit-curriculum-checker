<template>
  <div class="main_app" style="width:250px; height;600px">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sequi quo
      voluptatum reprehenderit in. At quaerat qui hic, molestias fugit dolores praesentium
      perspiciatis delectus. Illo esse magnam dolorem vel iste! Quo soluta voluptatem
      earum libero, necessitatibus corrupti deleniti aliquam ut iusto iure adipisci? Ad ab
      nihil, architecto harum eum veritatis, debitis explicabo quam laborum mollitia iusto
      odit ut delectus eveniet? Fugit ipsum saepe cupiditate est ullam itaque odio quaerat
      et maiores, aliquid possimus ad iure deleniti quasi beatae suscipit consequuntur
      quo, veritatis praesentium nam blanditiis distinctio commodi ex quam. Omnis?
      Delectus mollitia soluta ea inventore. Tempora fugit cumque, explicabo quibusdam
      porro aspernatur nesciunt sint at quidem! At similique inventore unde iusto vel
      facilis. Tempore vitae eius, aliquid facilis odio laudantium! Ipsum libero illo quae
      ipsa dicta error dolorem perferendis dolor odio, iste repellat ut, perspiciatis
      facilis soluta beatae qui, reiciendis quibusdam id similique! Libero corrupti
      eveniet voluptatum velit veniam provident. Quo itaque aliquid omnis adipisci nihil
      provident officiis laboriosam aliquam amet id, dignissimos, accusantium voluptate in
      iusto autem harum quisquam expedita, voluptatem quod eius perferendis. Deserunt est
      ad porro autem. Laborum unde, soluta a maxime ipsum sint. Doloremque fugiat iure,
      enim laborum asperiores sapiente eum iusto a consequatur alias vero consequuntur
      mollitia, quasi animi autem ducimus incidunt odit reiciendis molestias! Ad aliquid
      laudantium deserunt consequatur, ab maiores mollitia tempore magnam, ea dicta
      corporis accusantium nulla atque doloremque doloribus porro consequuntur
      perspiciatis culpa harum temporibus. Itaque ipsum non cupiditate quibusdam rem!
    </p>
    <button @click="onClick">Test</button>
  </div>
</template>

<script>
export default {
  name: "popup",
  created() {},
  methods: {
    onClick() {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { color: "#00FF00" }, function (response) {
          console.log(response);
        });
      });
    },
  },
  data() {
    return {
      msg: "popup",
    };
  },
};
</script>

<style>
.main_app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
