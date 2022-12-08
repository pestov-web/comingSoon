<template>
  <section class="login">
    <div class="modal__container">
      <form class="grid grid-cols-1 gap-6 min-w-[300px]">
        <label class="block">
          <span class="modal__form-text">Ваш Email</span>
          <input
            type="email"
            class="modal__form-input"
            placeholder="alexey@dvgames.ru"
          />
        </label>
        <label class="block">
          <span class="modal__form-text">Пароль</span>
          <input type="password" class="modal__form-input" placeholder="" />
        </label>
        <button type="submit" class="modal__form-submit">вход</button>
      </form>
    </div>
  </section>
</template>

<script></script>

<style scoped lang="scss">
.login {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.modal {
  &__container {
    background: #fefefe;
    padding: 30px;
    border-radius: 15px;
    max-width: 400px;
  }
  &__form {
    &-text {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #333333;
    }
    &-input {
      box-sizing: border-box;
      display: flex;
      padding: 10px;
      width: 100%;
      height: 40px;
      background: #fefefe;
      border: 1px solid #a5a5a5;
      border-radius: 6px;
      &:focus {
        border: 1px solid #f36a08;
      }
    }
    &-textarea {
      display: flex;
      box-sizing: border-box;
      width: 100%;
      height: 74px;
      background: #fefefe;
      border: 1px solid #a5a5a5;
      border-radius: 4px;
    }
    &-submit {
      background-color: #ffffff;
      border: 2px solid #f36a08;
      border-radius: 10px 0;
      height: 40px;
      transition: background-color linear 0.6s;
      &:hover {
        background-color: #fff2e4;
      }
    }
  }
}
</style>
