const AUTH_URL = "https://iihlq3icve.execute-api.us-east-1.amazonaws.com/v1"; //url de dev

export async function loginGoogle(tokenGoogle, projectSlug) {
	try {
		const response = await fetch(AUTH_URL + "/google-login", {
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

export async function loginMicrosoft(msToken, projectSlug) {
	const response = await fetch(
		AUTH_URL + "/ms-login",

		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				token: msToken,
				project_slug: projectSlug,
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

export async function loginEmail(email, projectSlug) {
	const response = await fetch(AUTH_URL + "/pincode-send", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email: email,
			project_slug: projectSlug,
		}),
	});
	if (!response.ok) {
		throw new Error("Email error");
	}
	return await response.json();
}

export async function loginPincode(pin, email, projectSlug) {
	try {
		const response = await fetch(AUTH_URL + "/pincode-validate", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: email,
				project_slug: projectSlug,
				pincode: pin,
			}),
		});

		if (!response.ok) {
			const errorData = await response.json();
			console.error("Error:", errorData);
			return errorData;
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Network or other error:", error);
		return { error: "Um erro inesperado ocorreu. Tente novamente" };
	}
}

// ORG APIs

export async function CreateOrganization(name, token, projectSlug) {
	const response = await fetch(AUTH_URL + "/create-org", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: token,
		},
		body: JSON.stringify({ name: name, project_slug: projectSlug }),
	});

	return await response.json();
}

export async function SwitchOrganization(orgID, token, projectSlug) {
	const response = await fetch(AUTH_URL + "/switch-org", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: token,
		},
		body: JSON.stringify({ org_id: orgID, project_slug: projectSlug }),
	});

	return await response.json();
}

export async function ListOrganizationMembers(token, projectSlug) {
	const response = await fetch(
		AUTH_URL + "/list-members?project_slug=" + projectSlug,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: token,
			},
		}
	);

	return await response.json();
}

export async function AddOrganizationMember(token, email, role, projectSlug) {
	const response = await fetch(AUTH_URL + "/add-user-to-org", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: token,
		},
		body: JSON.stringify({
			email: email,
			project_slug: projectSlug,
			role: role,
		}),
	});

	return await response.json();
}

export async function DeleteOrganizationMember(token, email, projectSlug) {
	const response = await fetch(AUTH_URL + "/remove-user-from-org", {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			Authorization: token,
		},
		body: JSON.stringify({ email: email, project_slug: projectSlug }),
	});

	return await response.json();
}

export async function DeleteOrganization(token, projectSlug) {
	const response = await fetch(AUTH_URL + "/delete-org", {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			Authorization: token,
		},
		body: JSON.stringify({ project_slug: projectSlug }),
	});

	return await response.json();
}

export async function LeaveOrganization(token, projectSlug) {
	const response = await fetch(AUTH_URL + "/leave-org", {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			Authorization: token,
		},
		body: JSON.stringify({ project_slug: projectSlug }),
	});

	return await response.json();
}
