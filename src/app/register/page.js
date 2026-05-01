"use client";

import styles from "./page.module.css";

export default function Register() {
  async function handleRegister(e) {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    // TODO remover alert e chamar api de register
    window.alert("Call register api");

    // TODO implementar validações:
    // - verificar se senha e confirmação batem
    // - tratar erros de API
    // - redirecionar após sucesso
    // - salvar token se necessário

    await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, confirmPassword }),
    });
  }

  return (
    <div className={styles.register}>
      <h1>register</h1>

      <form onSubmit={handleRegister}>
        <input name="name" type="text" placeholder="nome" /> <br />
        <input name="email" type="email" placeholder="email" /> <br />
        <input name="password" type="password" placeholder="senha" /> <br />
        <input
          name="confirmPassword"
          type="password"
          placeholder="confirmar senha"
        />{" "}
        <br />

        <button type="submit">criar conta</button>
      </form>

      já tem conta? <a href="/login">logar</a>
    </div>
  );
}