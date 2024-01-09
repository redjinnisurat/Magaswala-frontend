<template>
    <section class="aboutSec">
        <h3>Know about us</h3>
        <hr>
        <div class="aboutContainer">
            <img src="./assets/temple_img.jpeg" alt="Image">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus suscipit, quibusdam sequi eos dicta
                labore dolore, aut quam vitae unde molestiae. Perspiciatis sunt ut, necessitatibus dolores aspernatur
                inventore vel molestias.
                Cupiditate inventore doloribus libero architecto, blanditiis quo nobis dolorum, optio aliquid cumque
                beatae ab nemo sint nihil eaque corporis quae quaerat molestias. Ex, molestias? Doloribus a officiis
                repudiandae numquam aliquid.nobis dolorum, optio aliquid cumque
                beatae ab nemo sint nihil eaque corporis quae quaerat molestias.</p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'KnowAboutComp'
}
</script>

<style scoped>
.aboutSec {
    margin-top: 2rem;
    padding: 2rem;
}

.aboutSec h3 {
    font-size: 2.2rem;
    font-weight: 400;
    margin-left: 1rem;
    margin-bottom: 0.6rem;
}

.aboutSec hr {
    margin-bottom: 2rem;
}

.aboutContainer {
    display: flex;
}

.aboutContainer img {
    min-width: 52rem;
    padding: 1rem;
}

.aboutContainer p {
    padding: 1rem;
    font-size: 3.6rem;
    text-align: justify;
    font-weight: 300;
}

@media only screen and (max-width: 576px) {
    .aboutSec h3 {
        font-size: 2.6rem;

    }

    .aboutContainer {
        flex-direction: column;
    }

    .aboutContainer img {
        min-width: 26rem;
        margin: 0 auto;
    }

    .aboutContainer p {
        padding: 2rem;
        font-size: 2.4rem;
    }
}

@media only screen and (min-width: 577px) and (max-width: 768px) {
    .aboutSec h3 {
        font-size: 2.6rem;

    }

    .aboutContainer {
        flex-direction: column;
    }

    .aboutContainer img {
        min-width: 46rem;
        margin: 0 auto;
    }

    .aboutContainer p {
        padding: 2rem;
        font-size: 2.4rem;
    }
}

@media only screen and (min-width: 769px) and (max-width: 992px) {
    .aboutSec h3 {
        font-size: 2.6rem;

    }

    .aboutContainer {
        flex-direction: column;
    }

    .aboutContainer img {
        min-width: 46rem;
        margin: 0 auto;
    }

    .aboutContainer p {
        padding: 2rem;
        font-size: 2.4rem;
    }
}

@media only screen and (min-width: 993px) and (max-width: 1200px) {}

@media only screen and (min-width: 1201px) and (max-width: 1400px) {}
</style>