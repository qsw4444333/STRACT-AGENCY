<script setup lang="ts">
import TheLink from "~/components/ui/links/TheLink.vue";
import TheImage from "~/components/ui/img/TheImage.vue";

interface Props {
  title: string
  price: string
  priceNum: string
  lastPrice: string
  isHot?: boolean
  services: any
}

const props = defineProps<Props>();

function scrollToSection(section: string): void {
  const target = document.getElementById(section);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

</script>

<template>
  <div class="tarif-block__item" itemscope itemtype="http://schema.org/Product">
    <div v-if="props.isHot" class="tarif-block__item-hot">
      <TheImage src="static/img/icons/fire.svg" alt="" :width=20 :height=20 />
      <span>Hot</span>
    </div>
    <div class="tarif-block__item-title">
      <h4 itemprop="name" v-html="props.title"></h4>
    </div>
    <div class="tarif-block__item-prices">
      <div itemprop="offers" itemscope itemtype="http://schema.org/Offer" class="tarif-block__item-price1">
        <span v-html="props.price"></span>
        <meta itemprop="price" :content="props.priceNum">
        <meta itemprop="priceCurrency" content="RUB">
      </div>
      <div class="tarif-block__item-price2">
        <span v-html="props.lastPrice"></span>
      </div>
    </div>
    <ul class="tarif-block__item-services" itemprop="description">
      <li v-for="service in services" :key="service.id">
        <p v-html="service"></p>
      </li>
    </ul>
    <TheLink class="btn" text="Выбрать" @click="scrollToSection('tarif_offer')" />
  </div>
</template>

<style scoped>
  .tarif-block__item {
    @apply h-[700px] p-[10px] rounded-[10px] relative;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    min-width: 280px;

    @media screen and (max-width: 1196px) {
      @apply h-[580px];
      flex: 0 0 40%;
      background-color: #FFF;
    }

    @media screen and (max-width: 320px) {
      min-width: 200px;
      height: fit-content;
    }

    @media screen and (max-width: 825px) {
      flex: 0 0 100%;
      max-width: 50%;
    }

    .tarif-block__item-hot {
      @apply absolute rounded-[10px] bg-[#71CF92] flex gap-[5px];
      padding: 5px;
      top: -20px;
      right: -15px;

      span {
        user-select: none;
      }
    }

    .tarif-block__item-title {
      @apply text-center mb-[20px];

      h4 {
        font-size: 20px;
        font-weight: normal;
      }
    }

    .tarif-block__item-prices {
      @apply flex items-center justify-center gap-[10px] mb-[20px];

      .tarif-block__item-price1 span {
        font-weight: bold;
        font-size: 24px;
      }

      .tarif-block__item-price2 span {
        font-weight: normal;
        font-size: 16px;
        color: #949494;
        text-decoration: line-through;
      }
    }

    .tarif-block__item-services {
      @apply ml-[10px] h-[520px];
      list-style-type: disc;

      @media screen and (max-width: 1196px) {
        @apply h-[400px];
      }

      @media screen and (max-width: 320px) {
        height: fit-content;
      }

      li {
        @apply mb-[10px];
      }
    }
  }

  .btn {
    @apply w-full text-center;
  }
</style>