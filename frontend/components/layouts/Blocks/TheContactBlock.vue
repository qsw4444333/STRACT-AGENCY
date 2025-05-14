<script setup lang="ts">
import TheBlock from "~/components/layouts/Blocks/TheBlock.vue";
import TheBlockName from "~/components/ui/article/TheBlockName.vue";
import TheLazyImage from "~/components/ui/img/TheLazyImage.vue";
import TheContact from "~/components/layouts/Blocks/inner/TheContact.vue";
import TheSocials from "~/components/layouts/Blocks/inner/TheSocials.vue";
import TheWebkMark from "~/components/ui/WEBK/TheWebkMark.vue";

const contacts = [
  {
    icon: "static/img/icons/company.svg",
    title: "Организация",
    content: "<span itemprop='name'>STRACT AGENCY</span>",
    isLink: false,
  },
  {
    icon: "static/img/icons/geo.svg",
    title: "Мы находимся",
    content: "<div itemprop='address' itemscope itemtype='https://schema.org/PostalAddress'><span itemprop='addressLocality'>Чувашия, Чебоксары</span></div>",
    isLink: false,
  },
  {
    icon: "static/img/icons/phone.svg",
    title: "Номер телефона",
    content: "<span itemprop='telephone'>+7 (953)-449-28-92</span>",
    isLink: true,
    href: "tel:89534492892",
  },
  {
    icon: "static/img/icons/profile.svg",
    title: "Администратор",
    content: "<span itemprop='alumni' itemscope itemtype='https://schema.org/Person'>" +
             "<span itemprop='name'>Артемий Аркадьевич</span></span>",
    isLink: false,
  },
  {
    icon: "static/img/icons/time.svg",
    title: "Время работы",
    content: "Пн-Вс 09:00 - 22:00",
    isLink: false,
    itemprop: ''
  },
];

const socials = {
  tg: "https://t.me/artemiy_arkadyevich",
  whatsapp: "https://wa.me/79523125293/",
  vk: "https://vk.com/artemyarkadyevich",
  avito: "https://t.me/artemiy_arkadyevich",
};

const target = ref(null);
const is_visible = ref(false);
let observer;

onMounted(() => {
  observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            is_visible.value = true;
          }
        })
      },
      {
        threshold: 0.3,
      });

  if (target.value) {
    observer.observe(target.value);
  }
});

</script>

<template>
  <TheBlock id="contact_block" class="contact-block" itemscope itemtype="https://schema.org/Organization">
    <TheBlockName title="Контакты" :black=true class="text-center" style="margin-bottom: 0px;" />
    <div class="contact-block__inner">
      <div class="contact-block__left">
        <TheContact v-for="contact in contacts"
                    :title="contact.title"
                    :content="contact.content"
                    :icon="contact.icon"
                    :isLink="contact.isLink"
                    :href="contact.isLink ? contact.href : ''"/>
        <TheSocials :tg="socials.tg"
                    :whatsapp="socials.whatsapp"
                    :vk="socials.vk"
                    :avito="socials.avito" />
      </div>
      <div ref="target" class="contact-block__right fromdown" :class="{todown: is_visible}">
        <TheLazyImage src="static/img/laptop-phone.svg" alt="" />
      </div>
    </div>
    <TheWebkMark />
  </TheBlock>
</template>

<style scoped>
  .contact-block {
    @apply mb-[0];

    .contact-block__inner {
      @apply flex items-center justify-between mb-[30px];

      @media screen and (max-width: 949px) {
        @apply justify-center;
        flex-wrap: wrap-reverse;
      }
    }
    img {
      width: 585px;
      aspect-ratio: 1;

      @media screen and (max-width: 949px) {
        width: 95%;
        max-width: 400px;
        aspect-ratio: 1;
      }
    }

    .contact-block__left {
      @media screen and (max-width: 949px) {
        @apply flex items-center flex-wrap gap-[10px] justify-center;
        flex: 0 0 100%;
      }
    }

    .contact-block__right {
      width: 585px;
      height: 585px;
      transition: all .4s ease-in-out;

      @media screen and (max-width: 949px) {
        @apply flex justify-center;
        flex: 0 0 100%;
        width: fit-content;
        height: fit-content;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>