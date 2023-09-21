<template>
    <div class="home">
        <nav>
            <div class="back"> &LeftAngleBracket; Back</div>
            <div class="title">AR HOUSE</div>
        </nav>

        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, cupiditate.</h3>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore rem expedita voluptas provident minus maxime et odio? Dolor, esse consectetur.</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti amet laborum in aliquid fuga autem? Dolores dolorem natus nemo delectus suscipit reprehenderit illo, doloremque ratione.</p>

        <p class="small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste. <a href="/">Click here</a></p>

        <div class="img"></div>
        <button>Check Network</button>
        <div class="footer">Replay the video again</div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

    .home {
        height: 100vh;
        width: 100%;

        display: flex;
        flex-direction: column;

        nav {
            width: 100%;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;

            position: relative;

            .back {
                position: absolute;
                left: 10px;
                font-size: 14px;
            }
        }

        h3 {
            font-weight: 600;
            text-transform: uppercase;
            width: 100%;
            padding: 0 10px;
            margin-bottom: 20px;
        }

        p {
            padding: 0 10px;
            font-weight: 300;
            font-size: 14px;
            margin-bottom: 20px;
        }

        .small {
            font-size: 12px;

            a {
                text-decoration: underline;
                color: #141414;
            }
        }

        button {
            margin: 0 10px;
            height: 40px;
            background: #141414;
            color: white;
            outline: none;
            border: none;
        }

        .footer {
            width: 100%;
            text-align: center;
            text-decoration: underline;
            text-transform: uppercase;

            font-size: 12px;
        }


    }

</style>