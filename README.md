# Login 20AUTH

Essa biblioteca é feita para servir de base para qualquer caso que precisemos fazer um sistema de login próprio em projetos de React.

No momento, 20AUTH suporta três tipos de login:

-   pincode, enviado por email (temporariamente não funciona)
-   Google
-   Microsoft

> **Nota:** Alguns valores são sempre os mesmos, mas são sensíveis: o clientID do Google e Microsoft. Eles devem ser inclusos como variáveis de ambiente. Mas para compatibilidade com mais de um framework, não foi definido nome padrão da variável; ela deve ser passada diretamente aos respectivos componentes.

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

> **Nota:** Deve ser usado dentro de um `<Provider20Auth>`.

---

### `Pincode.usePincode()`

Hook que fornece o estado da autenticação via pincode.

#### Retorna:

-   `emailSent: boolean` – Indica se o código PIN foi enviado para o email.
-   `email: string` – O email para onde foi enviado um pin.

> **Nota:** Deve ser usado dentro de um `<Pincode.Form>`.

---

### `useOrg()`

Hook que fornece informações das organizações do usuário e métodos para interagir com elas

#### Retorna:

-   `orgList: [{id: string, name: string}]` - lista organizações que o usuário pertence
-   `currentOrgID: string`
-   `isAdmin: bool`
-   `createOrg: async function(name)` - Cria uma nova organização e acessa ela
-   `switchOrg: async function(id)` - acessa uma organização
-   `orgMembers: async function` - lista todos os membros de uma organização
-   `addOrUpdateOrgMember: async function(email, role)` - Adiciona um membro com role na organização atual. Se já for membro, só atualiza o seu role (que pode ser `"admin" | "user"`)
-   `deleteOrgMember: async function(email)`
-   `deleteOrg: async function` - Exclui uma organização. Se for a única, sera deslogado; se não, irá acessar outra
-   `leaveOrg: async function` - Sai da organização atual. Se for a única, sera deslogado; se não, irá acessar outra

> **Nota:** Deve ser usado dentro de um `<OrgProvider>`.

---

## 📦 Componentes

### `<Provider20Auth>`

Componente Provider que disponibiliza o contexto de autenticação via `useAuth`. Ele possui os props:

-   `projectSlug`: identificador do projeto
-   `onStartLogin` (opcional): função para ser chamada quando entrar num dialogo com um provedor de oauth ou ao enviar o email
-   `onError`(opcional): função para ser chamada em erros no token. Os erros possíveis são as strings: `"Expired token"` e `"Invalid token"`
-   `isProd`(opcional): booleano se deve usar ambiente de autenticação dev ou prod. Por padrão, é `true`

### `<LoginWall>`

Componente que só exibe os filhos de usuário estiver autenticado. Possui o prop:

-   `login`: elemento para ser exibido se não estiver autenticado, normalmente o formulário de login. O formulário deve ser composto pelos elementos a seguir.

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

### `<Pincode.Form>`

Provider para o fluxo de autenticação via pincode.

#### Props:

-   Aceita todos os atributos nativos de um `<form>`, **exceto** onSubmit.

Exemplo:

```jsx
<Pincode.Form className="pincode-form">
	<Pincode.EmailInput />
	<Pincode.PinInput />
</Pincode.Form>
```

### `<Pincode.EmailInput>`

Input para o usuário inserir seu email.

#### Uso:

Internamente é um `<input type="email">` e aceita todas as props nativas de um.

### `<Pincode.PinInput>`

Input para inserção do código PIN.

#### Uso:

Internamente é um `<input type="text">` e aceita todas as props nativas de um.

### `<Pincode.ClearButton>`

Botão para limpar o estado do formulário ou remover o código inserido.

Internamente é um `<button>` e aceita todas as props nativas de um.

### `<Pincode.ResendButton>`

Botão para reenviar o código PIN por email.

Internamente é um `<button>` e aceita todas as props nativas de um.

---

## Exemplo Completo

```jsx
"use client"; // necessário em Next.js

import {
	Provider20Auth,
	LoginWall,
	GoogleLogin,
	MicrosoftLogin,
	useAuth,
	Pincode,
} from "login20auth";

const PincodeFields = () => {
	const { emailSent } = Pincode.usePincode();
	return (
		<>
			{emailSent ? (
				<>
					<Pincode.ClearButton>
						PincodeLoginClearButton
					</Pincode.ClearButton>
					<Pincode.ResendButton>
						PincodeLoginResendButton
					</Pincode.ResendButton>
					<Pincode.PinInput />
				</>
			) : (
				<Pincode.EmailInput />
			)}
			<input type="submit" />
		</>
	);
};

const Dashboard = () => {
	const { token, logout, profilePic } = useAuth();

	return (
		<div>
			<h1>Welcome, {token}</h1>
			{profilePic && <img src={profilePic} alt="Profile" />}
			<button onClick={logout}>Log Out</button>
		</div>
	);
};

const AdminPanel = () => {
	return (
		<Provider20Auth projectSlug="..." onError={(e) => console.log(e)}>
			<LoginWall
				login={
					<>
						<GoogleLogin
							clientID="..."
							onError={(e) => console.log(e)}
							onStartLogin={() => {}}
						>
							Google
						</GoogleLogin>
						<MicrosoftLogin
							clientID="..."
							onError={(e) => console.log(e)}
							onStartLogin={() => {}}
						>
							Microsoft
						</MicrosoftLogin>
						<Pincode.Form
							onError={(e) => console.log(e)}
							onStartLogin={() => {}}
						>
							<PincodeFields />
						</Pincode.Form>
					</>
				}
			>
				<Dashboard />
			</LoginWall>
		</Provider20Auth>
	);
};
```

# A fazer

-   Consertar login por email e pincode
