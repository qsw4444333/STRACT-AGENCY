<script setup lang="ts">
import TheInput from "~/components/ui/inputs/TheInput.vue";
import TheCheckbox from "~/components/ui/inputs/TheCheckbox.vue";
import TheBtn from "~/components/ui/btns/TheBtn.vue";
import TheTextArea from "~/components/ui/inputs/TheTextArea.vue";

const state = reactive({
  phone: '',
  comment: '',
  token: '',
});

const is_message = ref(false);
const message = ref('');
const isErr = ref(false);

const setMessage = (msg: string, iserr: boolean = true) => {
  is_message.value = true;
  message.value = msg;
  isErr.value = iserr;
};

const unsetMessage = () => {
  is_message.value = false;
  message.value = '';
};

const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^\+7 \(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
  return phoneRegex.test(phone);
};

interface Response {
  status: number;
  message: string;
}

const reload = async () => {
  setTimeout(async () => {
    location.reload();
  }, 2000);
};

const config = useRuntimeConfig();

const submitForm = async () => {
  try {
    grecaptcha.ready(function () {
      grecaptcha.execute(config.public.CAPTCHA_TOKEN, {action: 'submit'}).then(async function (token) {
        unsetMessage();

        if (state.phone.length != 18) {
          setMessage('Некорректный номер телефона, убедитесь, что номер телефона введён верно!');
          return;
        }

        if (state.comment.length > 1000) {
          setMessage('Комментарий должен быть длиной не более 1000 символов!');
          return;
        }

        if (!token) {
          setMessage("Captcha error, перезагрузите страницу и попробуйте еще раз или напишите в наши соц сети");
          await reload();
        }

        state.token = token;

        try {
          const response = await $fetch<Response>(config.public.API_URL, {
            method: 'post',
            body: JSON.stringify(state),
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (response.status >= 200 && response.status < 300) {
            setMessage("Успешно", false)
            await reload();
          } else {
            setMessage('Ошибка при отправке формы, перезагрузите страницу и попробуйте еще раз или напишите в наши соц сети');
            await reload();
          }
        } catch (error) {
          setMessage('Ошибка при отправке формы, перезагрузите страницу и попробуйте еще раз или напишите в наши соц сети');
          await reload();
        }
      })
    });
  }
  catch (error) {
    setMessage("Ошибка при отправки формы, напишите в наши соц сети!");
    await reload();
  }
};

</script>

<template>
  <form @submit.prevent="submitForm">
    <TheInput id="phone1"
              label="Номер телефона"
              placeholder="+7 (999)-999-99-99"
              name="phone"
              v-model="state.phone" />
    <TheTextArea id="commentaretryra"
                 label="В кратце о нише"
                 placeholder=""
                 name="comment"
                 v-model="state.comment" />
    <div class="flex items-start justify-right flex-wrap" style="gap: 10px;">
      <TheCheckbox id="cherlewlq"
                   label="Нажимая на кнопку отправить, вы даете согласие на обработку персональных данных" />
      <TheBtn title="Отправить" type="submit" />
    </div>
    <p v-if="is_message"
       :class="{message_err: isErr, message_suc: !isErr}">{{ message }}</p>
  </form>
</template>

<style scoped>
.message_err {
  color: red;
  font-size: 14px;
}

.message_suc {
  color: green;
  font-size: 14px;
}
</style>