<script lang="ts" setup></script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__logo">
        <nuxt-img src="/img/logo.svg" width="135" height="41" />
      </div>
      <div class="footer__nav">
        <p class="footer__nav-contact">Контактная информация (уточняется)</p>
        <ul class="flex gap-[20px]">
          <li>
            <a href="#" class="footer__nav-link">Политика конфиденциальности</a>
          </li>
          <li><a href="#" class="footer__nav-link">Ссылка 2</a></li>
        </ul>
      </div>
      <ul class="footer__social">
        <li>
          <button class="footer__social-button">
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.34166 7.44167V11.4H14.725C13.9333 13.5375 11.875 14.9625 9.5 14.9625C6.4125 14.9625 3.95833 12.5083 3.95833 9.42083C3.95833 6.33333 6.4125 3.87916 9.5 3.87916C10.6875 3.87916 11.7958 4.275 12.7458 4.90833L13.0625 5.14583L15.4375 2.05833L15.1208 1.82083C13.4583 0.633333 11.5583 0 9.5 0C4.275 0 0 4.275 0 9.5C0 14.725 4.275 19 9.5 19C14.725 19 19 14.725 19 9.5V7.52083H9.34166V7.44167Z"
                fill="#FEFEFE"
              />
            </svg>
          </button>
        </li>
        <li>
          <button class="footer__social-button">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5808 0H2.41923C1.04615 0 0 1.04615 0 2.41923V14.5808C0 15.9538 1.04615 17 2.41923 17H14.5808C15.9538 17 17 15.9538 17 14.5808V2.41923C17 1.04615 15.9538 0 14.5808 0ZM8.5 13.6C11.3115 13.6 13.6 11.3769 13.6 8.69615C13.6 8.23846 13.5346 7.71538 13.4038 7.32308H14.8423V14.2538C14.8423 14.5808 14.5808 14.9077 14.1885 14.9077H2.81154C2.48462 14.9077 2.15769 14.6462 2.15769 14.2538V7.25769H3.66154C3.53077 7.71538 3.46539 8.17308 3.46539 8.63077C3.4 11.3769 5.68846 13.6 8.5 13.6ZM8.5 11.6385C6.66923 11.6385 5.23077 10.2 5.23077 8.43462C5.23077 6.66923 6.66923 5.23077 8.5 5.23077C10.3308 5.23077 11.7692 6.66923 11.7692 8.43462C11.7692 10.2654 10.3308 11.6385 8.5 11.6385ZM14.7769 4.64231C14.7769 5.03461 14.45 5.36154 14.0577 5.36154H12.2269C11.8346 5.36154 11.5077 5.03461 11.5077 4.64231V2.87692C11.5077 2.48462 11.8346 2.15769 12.2269 2.15769H14.0577C14.45 2.15769 14.7769 2.48462 14.7769 2.87692V4.64231Z"
                fill="#FEFEFE"
              />
            </svg>
          </button>
        </li>
        <li>
          <button class="footer__social-button">
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.350701 8.37408L4.9488 10.0886L6.74126 15.8557C6.8192 16.2454 7.2868 16.3233 7.59854 16.0895L10.1703 13.9853C10.4041 13.7515 10.7938 13.7515 11.1055 13.9853L15.7036 17.3364C16.0154 17.5702 16.483 17.4144 16.5609 17.0247L19.99 0.658655C20.0679 0.268988 19.6782 -0.120677 19.2886 0.0351905L0.350701 7.36095C-0.1169 7.51681 -0.1169 8.21821 0.350701 8.37408ZM6.50747 9.23135L15.5477 3.69807C15.7036 3.62013 15.8595 3.85394 15.7036 3.93187L8.29993 10.868C8.06613 11.1018 7.83233 11.4135 7.83233 11.8032L7.59854 13.6736C7.59854 13.9074 7.20886 13.9853 7.13093 13.6736L6.19572 10.2445C5.96192 9.85482 6.1178 9.38721 6.50747 9.23135Z"
                fill="#FEFEFE"
              />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  @apply flex justify-center max-w-[1280px] mx-auto py-5 md:p-0;
  background: #fefefe;
  width: 100%;
  min-height: 124px;
  &__container {
    @apply flex items-center w-[1020px] h-full justify-center md:justify-between px-[15px] flex-wrap  gap-4 md:gap-0 box-border;
  }
  &__logo {
  }
  &__nav {
    &-contact {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: #333333;
    }
    &-link {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: #f36a08;
      &:hover {
        text-decoration-line: underline;
      }
    }
  }
  &__social {
    @apply flex gap-[10px] pb-2;
    &-button {
      background: #1173cd;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      transition: all linear 0.3s;
      @apply flex justify-center items-center;
      &:hover {
        filter: drop-shadow(1px 1px 12px rgba(44, 126, 202, 0.4));
      }
    }
  }
}
</style>
