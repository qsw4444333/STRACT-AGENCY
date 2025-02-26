<script setup lang="ts">
  import TheLogo from "~/components/ui/logo/TheLogo.vue";
  import TheLink from "~/components/ui/links/TheLink.vue";

  const is_shadow = ref(false);

  const handleScroll = () => {
    is_shadow.value = window.scrollY > 0 ? true : false;
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  function scrollToSection(section: string): void {
    const target = document.getElementById(section);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const isAnim = ref(false);

  onMounted(() => {
    isAnim.value = true;
  });
</script>

<template>
    <header :class="{
        scrolled: is_shadow,
        todown: isAnim
    }">
      <div class="inner">
        <div class="header__left">
          <TheLogo />
        </div>
        <div class="header__right">
          <div class="header__right-links">
            <TheLink text="Услуги" @click="scrollToSection('tarif_block')" />
            <TheLink text="Кейсы" @click="scrollToSection('review_block')" />
            <TheLink text="Отзывы" @click="scrollToSection('review_block')" />
            <TheLink text="Контакты" @click="scrollToSection('contact_block')" />
          </div>
          <div class="header__right-btn">
            <TheLink class="link-btn" href="tel:89379573099" text="+7 (937)-957-30-99" />
          </div>
        </div>
      </div>
    </header>
</template>

<style scoped>
  header {
    @apply fixed z-50 bg-[#FFF] w-full pt-[10px] pb-[10px];
    top: 0;
    left: 0;
    transition: box-shadow .2s, transform .5s;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0);
    transform: translateY(-120px);

    .inner {
      @apply flex justify-between items-center;

      .header__right {
        @apply flex items-center justify-end gap-[100px];

        @media screen and (max-width: 1050px) {
          @apply gap-[30px];
        }

        .header__right-links {
          @apply flex items-center justify-between gap-[50px];

          @media screen and (max-width: 1050px) {
            @apply gap-[15px];
          }

          @media screen and (max-width: 740px) {
            display: none;
          }
        }

        .header__right-btn {
          .link-btn {
            @apply rounded-[6px] bg-[#71CF92] text-[#000] select-none;
            padding: 12px 24px 12px 24px;
            transition: background-color .2s;
            font-family: "Poppins-SemiBold", sans-serif;

            @media screen and (max-width: 640px) {
              font-size: 12px;
              padding: 18px 18px 18px 18px;
            }

            @media screen and (max-width: 320px) {
              font-size: 12px;
              padding: 18px 6px 18px 6px;
            }

            &:hover {
              @apply bg-[#62b37e];
            }
          }
        }
      }
    }
  }

  .scrolled {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  }

  header.todown {
    transform: translateY(0);
  }
</style>