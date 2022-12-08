<script></script>

<template>
  <header class="header">
    <nav class="nav">
      <ul class="flex justify-between w-full">
        <li class="nav__burger">
          <button class="nav__burger-button">
            <Icon name="charm:menu-hamburger" />
          </button>
        </li>
        <li class="nav__item">
          <NuxtLink to="/players" class="nav__link">Игрокам</NuxtLink>
        </li>
        <li class="nav__item">
          <NuxtLink to="/partners" class="nav__link">Организаторам</NuxtLink>
        </li>
        <li class="nav__logo">
          <a href="/">
            <nuxt-img src="/img/logo.svg" width="135" height="41"
          /></a>
        </li>
        <li class="nav__item">
          <NuxtLink to="/writers" class="nav__link">Авторам</NuxtLink>
        </li>
        <li class="nav__item">
          <div class="user-menu">
            <NuxtLink to="/login" class="user-menu__button">Вход</NuxtLink>
          </div>
        </li>
        <li class="nav__login">
          <NuxtLink to="/login" class="nav__login-button"
            ><Icon name="simple-line-icons:login"
          /></NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.header {
  @apply flex justify-center min-h-[80px] max-w-[1280px] w-full mx-auto;
  background: #fefefe;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.03);
}
.nav {
  @apply max-w-[856px] flex w-full items-center overflow-hidden box-border px-4 lg:p-0;
  &__item {
    @apply flex items-center hidden md:flex;
    overflow: hidden;
    box-sizing: border-box;
  }
  &__link {
    transition: color linear 0.3s;
    &:hover {
      color: #f36a08;
    }
  }
  &__logo {
    @apply flex items-center;
    overflow: hidden;
    box-sizing: border-box;
  }
  &__burger {
    @apply flex items-center md:hidden;
    overflow: hidden;
    box-sizing: border-box;
    &-button {
      @apply flex items-center justify-center;
      font-size: 35px;
    }
  }
  &__login {
    @apply flex items-center md:hidden;
    &-button {
      @apply flex items-center justify-center;
      font-size: 28px;
    }
  }
}
.user-menu {
  @apply hidden md:flex;
  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 182px;
    height: 48px;
    border: 2px solid #f36a08;
    border-radius: 10px 0;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #f36a08;
    transition: background-color linear 0.4s;
    &:hover {
      background-color: #fff2e4;
    }
  }
}

.router-link-active {
  color: #f36a08;
}
</style>
