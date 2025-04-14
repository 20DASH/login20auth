# Login 20AUTH

Essa biblioteca é feita para servir de base para qualquer caso que precisemos fazer um sistema de login próprio em projetos de React.

No momento, 20AUTH suporta três tipos de login:

-   pincode, enviado por email
-   Google
-   Microsoft

> **Nota:** Alguns valores são sempre os mesmos, mas são sensíveis: o clientID do Google e Microsoft. Eles devem ser inclusos como variáveis de ambiente. Mas para compatibilidade com mais de um framework, não foi definido nome padrão da variável; ela deve ser passada diretamente aos componentes que exigem.

## Instalação

```bash
npm install git+https://github.com/20DASH/login20auth.git
```

## Compatibilidade

Foi testado no Next.js e Vite.

## Update

Se for para atualizar para usar uma versão nova do 20AUTH (no caso de alguma mudança):

```bash
npm uninstall git+https://github.com/20DASH/login20auth.git && npm install git+https://github.com/20DASH/login20auth.git
```

## 🪝 Hooks

### `useAuth()`

Hook que fornece informações sobre a autenticação do usuário.

#### Retorna:

-   `token: string | null` – Token de autenticação do usuário.
-   `profilePic: string | null` – URL da imagem de perfil do usuário (se disponível).

-   `logout: function` – Função para desonectar o usuário.

> **Nota:** Deve ser usado dentro de um `<Login20Auth>`.

---

### `usePincode()`

Hook que fornece o estado da autenticação via pincode.

#### Retorna:

-   `emailSent: boolean` – Indica se o código PIN foi enviado para o email.

> **Nota:** Deve ser usado dentro de um `<PincodeLoginForm>`.

---

## 📦 Componentes

### `<Login20Auth>`

Componente Provider que disponibiliza o contexto de autenticação via `useAuth`. Ele possui os props:

-   `content`: O que exibir quando o ttoken do usuário não for _null_
-   `projectSlug`: identificador do projeto
-   `onStartLogin` (opcional): função para ser chamada quando entrar num dialogo com um provedor de oauth ou ao enviar o email
-   `onError`(opcional): função para ser chamada em erros de login

### `<GoogleLogin>`

Botão de login com Google. Internamente é um `<button>`, e aceita todas as props nativas de um. Precisa receber uma prop clientID, com o valor que é sempre o mesmo.

Exemplo:

```jsx
<GoogleLogin className="btn-google" clientID="XXX.apps.googleusercontent.com" />
```

### `<MicrosoftLogin>`

Botão de login com Microsoft. Internamente é um `<button>`, e aceita todas as props nativas de um. Precisa receber uma prop clientID, com o valor que é sempre o mesmo.

Exemplo:

```jsx
<MicrosoftLogin onClick={someFunc} clientID="XXX-XXX" />
```

### `<PincodeLoginForm>`

Provider para o fluxo de autenticação via pincode.

#### Props:

-   Aceita todos os atributos nativos de um `<form>`, **exceto** onSubmit.

Exemplo:

```jsx
<PincodeLoginForm className="pincode-form">
	<PincodeLoginEmailInput />
	<PincodeLoginPinInput />
</PincodeLoginForm>
```

### `<PincodeLoginEmailInput>`

Input para o usuário inserir seu email.

#### Uso:

Internamente é um `<input type="email">` e aceita todas as props nativas de um.

### `<PincodeLoginPinInput>`

Input para inserção do código PIN.

#### Uso:

Internamente é um `<input type="text">` e aceita todas as props nativas de um.

### `<PincodeLoginClearButton>`

Botão para limpar o estado do formulário ou remover o código inserido.

#### Uso:

Internamente é um `<button>` e aceita todas as props nativas de um.

### `<PincodeLoginResendButton>`

Botão para reenviar o código PIN por email.

#### Uso:

Internamente é um `<button>` e aceita todas as props nativas de um.

---

## Exemplo Completo

```jsx
"use client";
import {
	useAuth,
	Login20Auth,
	GoogleLogin,
	MicrosoftLogin,
	PincodeLoginForm,
	PincodeLoginEmailInput,
	PincodeLoginPinInput,
	PincodeLoginClearButton,
	PincodeLoginResendButton,
	usePincode,
} from "login20auth";

function Dashboard() {
	const { token, logout, profilePic } = useAuth();

	return (
		<div>
			<h1>Welcome, {token}</h1>
			{profilePic && <img src={profilePic} alt="Profile" />}
			<button onClick={logout}>Log Out</button>
		</div>
	);
}

function MyPincodeFields() {
	const { emailSent } = usePincode();
	return (
		<>
			{emailSent ? (
				<>
					<PincodeLoginClearButton>
						PincodeLoginClearButton
					</PincodeLoginClearButton>
					<PincodeLoginResendButton>
						PincodeLoginResendButton
					</PincodeLoginResendButton>
					<PincodeLoginPinInput />
				</>
			) : (
				<PincodeLoginEmailInput />
			)}
			<input type="submit" />
		</>
	);
}

export default function Page() {
	const handleStart = () => console.log("Login started");
	const handleError = (err) => console.log("Login error:", err);

	return (
		<Login20Auth
			content={<Dashboard />}
			projectSlug="..."
			onStartLogin={handleStart}
			onError={handleError}
		>
			<GoogleLogin clientID="..."> Google </GoogleLogin>
			<MicrosoftLogin clientID="..."> Microsoft </MicrosoftLogin>
			<PincodeLoginForm>
                <!--Usa um componente aninhado para permitir usePincode-->
				<MyPincodeFields />
			</PincodeLoginForm>
		</Login20Auth>
	);
}
```

# A fazer

-   Consertar login por email e pincode
