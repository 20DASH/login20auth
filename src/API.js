const URL = "https://iihlq3icve.execute-api.us-east-1.amazonaws.com/v1"; //url de dev

export async function loginGoogle(tokenGoogle, projectSlug) {
	try {
		const response = await fetch(URL + "/google-login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				token: tokenGoogle,
				project_slug: projectSlug,
			}),
		});

		// Check if the response status is not 200
		if (!response.ok) {
			const errorData = await response.json();
			return { error: errorData };
		}

		// If the response is OK, handle the success case
		const data = await response.json();
		return data;
	} catch (error) {
		return { error: "Um erro inesperado ocorreu. Tente novamente" };
	}
}

export async function loginMicrosoft(msToken) {
	const response = await fetch(
		URL + "/ms-login",

		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				token: msToken,
				project_slug: "20deck",
			}),
		}
	);

	if (!response.ok) {
		throw new Error("MsToken error");
	}
	return await response.json();
}

export async function microsoftProfilePicture(accessToken) {
	const response = await fetch(
		"https://graph.microsoft.com/v1.0/me/photo/$value",
		{
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		}
	);
	if (response.ok) {
		const blob = await response.blob();
		const url = URL.createObjectURL(blob);
		return url; // URL para usar a imagem no front-end
	} else {
		console.error("Erro ao obter a imagem de perfil:", response.statusText);
		return null;
	}
}
