<template>
  <div class="club">
    <div class="alert-messages">
      <AlertNotification
        :message="alert.message"
        :type="alert.type"
        v-for="(alert, index) in alertMessages"
        :key="index"
      />
    </div>
    <div class="content" @click="addTemp">
      <div class="container">
        <div class="cover">
          <h1>{{ clubDetails.data.name }}</h1>
          <p>{{ clubDetails.data.catchline }}</p>
          <p style="font-weight: 200">
            {{ clubDetails.data.desc }}
          </p>
        </div>
        <div class="inputs">
          <InputField v-model="name" label="Name" number="01" />
          <InputField v-model="regno" label="Register No." number="02" />
          <InputField
            v-model="dept"
            label="Department"
            number="03"
            type="select"
          />
          <InputField
            v-model="section"
            label="Section"
            number="04"
            type="section"
          />
          <InputField v-model="year" label="Year" number="05" type="year" />
          <InputField v-model="email" label="Email" number="06" />
          <InputField v-model="phone" label="Phone" number="07" />
          <div class="button" @click="registerStudent" ref="regButton">
            <button>Register</button>
            <div class="border-box"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="contact" @click="getClubDetails">
      <h3>Club Support</h3>

      <div class="coordinator">
        <div class="desig">
          <div class="name">{{ clubDetails.data.faculty.name }}</div>
          <div class="role">Faculty</div>
        </div>
        <p>
          <Icon name="solar:phone-bold" /> +91
          {{ clubDetails.data.faculty.phone }}
        </p>
        <p>
          <Icon name="solar:letter-bold" /> {{ clubDetails.data.faculty.email }}
        </p>
      </div>
      <div class="coordinator">
        <div class="desig">
          <div class="name">{{ clubDetails.data.student.name }}</div>
          <div class="role">Club Head</div>
        </div>
        <p>
          <Icon name="solar:phone-bold" /> +91
          {{ clubDetails.data.student.phone }}
        </p>
        <p>
          <Icon name="solar:letter-bold" /> {{ clubDetails.data.student.email }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const club = route.params.club;
const regButton = ref(null);
const { data: clubDetails } = await useFetch("/api/getClubDetails", {
  method: "POST",
  body: JSON.stringify({
    club: club,
  }),
});

console.log(clubDetails.value.data);
const alertMessages = ref([]);

// onMounted(() => {
//   getClubDetails();
// });

watch(alertMessages.value, () => {
  console.log("Chagne");
  setTimeout(() => {
    alertMessages.value.shift();
  }, 3000);
});

const name = ref("");
const regno = ref("");
const dept = ref("");
const section = ref("");
const year = ref("");
const email = ref("");
const phone = ref("");

const animateButton = () => {
  regButton.value.classList.add("button-animate");
  setTimeout(() => {
    regButton.value.classList.remove("button-animate");
  }, 50);
};

const registerStudent = async () => {
  animateButton();
  if (
    name.value == "" ||
    regno.value == "" ||
    dept.value == "" ||
    section.value == "" ||
    year.value == "" ||
    email.value == "" ||
    phone.value == ""
  ) {
    alertMessages.value.push({
      message: "Please fill all the fields",
      type: "error",
    });

    return;
  }
  // console.log(data, error);
  console.log(dept.value);
  let { data } = await useFetch("/api/registerUser", {
    method: "POST",
    body: JSON.stringify({
      name: name.value,
      regno: regno.value,
      dept: dept.value,
      section: section.value,
      year: year.value,
      email: email.value,
      phone: phone.value,
      club: club,
    }),
  });

  let res = data.value;
  console.log(res);
  if (res.statusCode != 200) {
    alertMessages.value.push({
      message: JSON.parse(res.body).message,
      type: "error",
    });
  }
};
</script>

<style lang="scss" scoped>
.alert-messages {
  position: fixed;
  width: 300px;
  height: 50px;

  top: 10px;
  right: 10px;
}

.club {
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: space-between;
  // align-items: center;
  background: #4d8eff;

  // hide scrollbar for chrome, safari and opera

  .content {
    width: 100%;
    min-height: 100vh;
    height: auto;
    padding: 0 60px;
    overflow-y: scroll;

    display: flex;
    // justify-content: center;
    align-items: center;
    flex-direction: column;

    .container {
      width: 100%;
      max-width: 1200px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding-bottom: 40px;

      .cover {
        width: 100%;
        margin-top: 20px;
        // height: 200px;
        border-radius: 10px;
        margin-bottom: 20px;

        h1 {
          font-size: 84px;
          font-weight: 200;
          padding: 0 20px;
          color: #ffffff;
        }

        p {
          color: #ffffff;
          padding: 0 20px;
        }
      }

      .inputs {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
      }

      .button {
        width: 200px;
        height: 50px;
        position: relative;

        button {
          height: 100%;
          width: 100%;

          border: none;
          outline: none;
          background: #ffffff;
          color: #19191d;
          font-size: 16px;
          font-weight: 500;

          // margin-top: 20px;
          cursor: pointer;
          z-index: 1;
          transition: 0.1s;
        }

        .border-box {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          border: 2px solid #ffffff;

          z-index: 0;
          transition: 0.1s;
        }

        &:hover {
          button {
            transform: translate(-10px, 10px);
          }
        }
      }
    }
  }

  .contact {
    width: 30%;
    min-width: 400px;
    max-width: 600px;
    padding: 0 60px;
    padding-top: 30px;
    background: #427bff;
    display: flex;
    flex-direction: column;

    h3 {
      color: #ffffff;
      font-size: 24px;
      font-weight: 500;
      margin: 20px 0;
    }

    span {
      color: #ffffff;
      font-size: 14px;
      font-weight: 500;
      margin-top: 20px;
    }

    .coordinator {
      margin-top: 5px;
      margin-bottom: 20px;

      .desig {
        display: flex;
        justify-content: space-between;
        align-items: center;

        // margin-top: 10px;
        .name {
          color: #ffffff;
          font-size: 14px;
          font-weight: 500;
        }

        .role {
          color: #ffffff;
          font-size: 14px;
          font-weight: 200;
        }
      }

      p {
        color: #ffffff;
        font-size: 14px;
        font-weight: 300;
        margin-top: 10px;
        display: flex;
        align-items: center;

        .icon {
          font-size: 20px;
        }

        svg {
          margin-right: 10px;
        }
      }
    }
  }
}

.button-animate {
  button {
    transform: translate(0, 0) !important;
  }
}

@media only screen and (max-width: 768px) {
  .club {
    flex-direction: column;

    .content {
      padding: 0 20px;

      .container {
        .cover {
          h1 {
            font-size: 64px;
          }
        }
      }
    }

    .contact {
      width: 100%;
      min-width: 100%;
      padding: 0 20px;
      padding-top: 30px;
      // margin-top: 20px;
    }
  }
}
</style>
