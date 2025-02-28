<script setup lang="ts">
import TheHeader from "~/components/layouts/TheHeader.vue";
import TheMain from '~/components/layouts/TheMain.vue';
import TheInner from "~/components/layouts/TheInner.vue";
import TheMainBlock from "~/components/layouts/Blocks/TheMainBlock.vue";
import TheStrategyBlock from "~/components/layouts/Blocks/TheStrategyBlock.vue";
import ThePlusesBlock from "~/components/layouts/Blocks/ThePlusesBlock.vue";
import TheOfferFirstBlock from "~/components/layouts/Blocks/TheOfferFirstBlock.vue";
import TheWeBlock from "~/components/layouts/Blocks/TheWeBlock.vue";
import TheReviewBlock from "~/components/layouts/Blocks/TheReviewBlock.vue";
import TheTarifBlock from "~/components/layouts/Blocks/TheTarifBlock.vue";
import TheOfferSecondBlock from "~/components/layouts/Blocks/TheOfferSecondBlock.vue";
import TheContactBlock from "~/components/layouts/Blocks/TheContactBlock.vue";
</script>

<template>
  <TheHeader />
  <TheMain>
    <TheInner>
      <TheMainBlock h1="DIGITAL агенство STRACT"
                    h2="За ручку приведём клиентов с авито <br>в ваш бизнес"
                    :years=4
                    :count=900
                    :clients=57
                    image_bg="bg-avito.svg"
                    image_src="handshakes.webp"
      />
    </TheInner>
    <TheStrategyBlock />
    <TheInner>
      <ThePlusesBlock />
      <TheOfferFirstBlock />
      <TheWeBlock />
      <TheReviewBlock />
    </TheInner>
      <TheTarifBlock />
    <TheInner>
      <TheOfferSecondBlock />
      <TheContactBlock />
    </TheInner>
  </TheMain>
</template>

<style>
  @import "tailwindcss";

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    @apply relative p-[0] m-[0];
    font-family: "Poppins-Regular", sans-serif;
  }

  h1, h2{
    font-family: "Poppins-Medium", sans-serif;
  }

  h3, h4, h5, h6 {
    font-family: "Poppins-Bold", sans-serif;
  }

  a, span, p {
    font-family: "Poppins-Regular", sans-serif;
  }

  h1 {
    font-size: 48px;

    @media screen and (max-width: 640px) {
      font-size: 36px;
    }
  }

  h2 {
    font-size: 32px;

    @media screen and (max-width: 640px) {
      font-size: 24px;
    }
  }

  h3 {
    font-size: 24px;
    font-family: "Poppins-Bold", sans-serif;

    @media screen and (max-width: 640px) {
      font-size: 20px;
    }
  }

  h4 {
    font-size: 18px;
    font-weight: bold;
  }

  input, textarea {
    font-size: 14px;
  }

  img {
    user-select: none;
  }

  .fromup {
    opacity: 0;
    transform: translateY(100px);
  }

  .fromleft {
    opacity: 0;
    transform: translateX(-100px);
  }

  .fromdown {
    opacity: 0;
    transform: translateY(-100px);
  }

  .fromright {
    opacity: 0;
    transform: translateX(100px);
  }

  .toright {
    opacity: 1;
    transform: translateX(0);
  }

  .toup {
    opacity: 1;
    transform: translateY(0);
  }

  .todown {
    opacity: 1;
    transform: translateX(0);
  }
</style>