"use client";

import styles from "./page.module.css";

export default function Login() {
  async function handleLogin(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // TODO remover alert e chamar api de login
    window.alert("Call login api")

    // TODO implementar api final de login e adicionar :
    // redirectionamento para a home page após login bem sucedido
    // obter token de autenticação e armazenar no localStorage ou cookies
    // tratar erros de login e exibir mensagens de erro para o usuário
    // implementar pegar a rota da api de login e substituir a url abaixo

    // Exemplo de chamada de API de login (substituir pela implementação real)
    await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
  }

  return (
    <div className={styles.login}>
      <h1>login</h1>

      <form onSubmit={handleLogin}>
        <input name="email" type="email" placeholder="email" /> <br />
        <input name="password" type="password" placeholder="senha" /> <br />

        <button type="submit">logar</button>
      </form>

      não tem senha? <a href="/register">registrar</a>
    </div>
  );
}