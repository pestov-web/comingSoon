<template>
  <div>
    <section class="section coming">
      <div class="coming__container">
        <h1 class="coming__title">
          <span class="coming__title-blue">Возрождение</span> портала DVG<span
            class="coming__small"
            >ames</span
          >
        </h1>
        <p class="coming__description">
          Вскоре мы анонсируем полную версию нашего портала. Мы объединим
          игроков по различным видам спорта на одной площадке. Присоединяйтесь к
          нам уже сейчас, будет интересно! Мы проинформируем вас о запуске
          рабочего проекта в тот же день!
        </p>
        <button class="coming__button">Я В ДЕЛЕ!</button>
      </div>
    </section>
  </div>
</template>

<script></script>

<style scoped lang="scss">
.coming {
  @apply flex flex-col justify-center w-full min-h-full items-center;
  font-family: "Montserrat", serif;
  &__container {
    @apply max-w-[552px] w-full min-h-[600px] h-full relative p-5 md:p-0;
  }
  &__title {
    @apply max-w-[363px] pt-[30px] sm:pt-[55px] md:pt-[155px];
    font-family: "Montserrat", serif;
    font-style: normal;
    font-weight: 600;
    font-size: 34px;
    line-height: 44px;
    text-transform: uppercase;
    color: #f36a08;
    &-blue {
      color: #1173cd;
    }
  }
  &__description {
    @apply max-w-[346px] p-0 m-0;
    font-family: "Montserrat", serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #333333;
  }
  &__button {
    @apply text-[24px] sm:text-[28px] right-4 top-[420px] w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] sm:right-0 sm:top-[320px] absolute;
    background: linear-gradient(163.74deg, #ef5851 11.29%, #efb051 91.94%);
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.03);
    border-radius: 200px;
    font-style: normal;
    font-weight: 700;
    line-height: 34px;
    color: #fefefe;
    transition: all revert 0.6s;

    &:hover {
      background: #f36a08;
    }
  }
}

.coming__small {
  text-transform: lowercase;
}
</style>
