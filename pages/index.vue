<template>
  <div class="index">
    <div class="head">PEC Clubs</div>
    <div class="clubs">
      <div class="club" @click="goTo('robotics')">
        <img src="/robotics.png" alt="" />
        <div class="text">
          <p>Robotics Club</p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, unde?
        </div>
      </div>
      <div class="club" @click="goTo('ev')">
        <img src="/ev.png" alt="" />
        <div class="text">
          <p>Green & EV</p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, unde?
        </div>
      </div>
      <div class="club" @click="goTo('ai')">
        <img src="/ai.png" alt="" />
        <div class="text">
          <p>GDSC AI&ML</p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, unde?
        </div>
      </div>
      <div class="club" @click="goTo('app')">
        <img src="/app.jpg" alt="" />
        <div class="text">
          <p>GDSC App Dev</p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, unde?
        </div>
      </div>
      <div class="club" @click="goTo('cc')">
        <img src="/cc.png" alt="" />
        <div class="text">
          <p>GDSC Cloud</p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, unde?
        </div>
      </div>
      <div class="club" @click="goTo('gaming')">
        <img src="/gaming.jpg" alt="" />
        <div class="text">
          <p>Graphic & Gaming</p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, unde?
        </div>
      </div>
      <div class="club" @click="goTo('antenna')">
        <img src="/antenna.jpg" alt="" />
        <div class="text">
          <p>Antenna Design</p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, unde?
        </div>
      </div>
      <div class="club" @click="goTo('full')">
        <img src="/full.jpg" alt="" />
        <div class="text">
          <p>GDSC Full Stack</p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, unde?
        </div>
      </div>
      <div class="club" @click="goTo('drone')">
        <img src="/drone.webp" alt="" />
        <div class="text">
          <p>Drone Club</p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, unde?
        </div>
      </div>
      <div class="club" @click="goTo('env')">
        <img src="/env.png" alt="" />
        <div class="text">
          <p>Environment Club</p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, unde?
        </div>
      </div>
      <div class="club" @click="goTo('science')">
        <img src="/science.jpg" alt="" />
        <div class="text">
          <p>Science Club</p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, unde?
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
let router = useRouter();

const goTo = (club) => {
  router.push(`/register/${club}`);
};
</script>

<style lang="scss" scoped>
.index {
  display: flex;
  flex-direction: column;
  //   align-items: center;
  //   justify-content: center;
  height: 100vh;
  width: 100%;

  background: #ecf1ff;

  .head {
    height: auto;
    width: 100%;
    padding: 0 30px;
    display: flex;
    // justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 64px;

    background: #3168ff;
    color: #ecf1ff;
  }
  .clubs {
    width: 100%;
    min-height: 500px;
    overflow: scroll;
    height: auto;
    display: flex;
    background: #d5e1ff;
    // justify-content: space-between;
    flex-wrap: wrap;

    padding: 20px;

    .club {
      width: 250px;
      height: 250px;
      overflow: hidden;

      background: #ffffff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;

      border-radius: 5px;
      position: relative;

      margin: 10px;

      box-shadow: 5px 5px 20px 0px rgba(110, 110, 110, 0.598);

      transition: 0.3s;

      &:hover {
        transform: scale(1.1);
      }

      .text {
        width: 90%;
        background: #f1f1f1;
        height: 120px;

        position: absolute;
        bottom: 10px;
        padding: 10px;

        border-radius: 5px;

        font-weight: 300;

        p {
          position: absolute;
          top: -40px;
          left: 0;
          color: #464646;
          font-size: 18px;
          font-weight: 600;

          background: #ffffff;
          padding: 0 10px;
          border-radius: 5px;
        }
      }

      img {
        width: 100%;
        height: 75%;
        object-fit: cover;
      }

      a {
        color: #141414;
        text-decoration: none;
      }
    }
  }
}
</style>
