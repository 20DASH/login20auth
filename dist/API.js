"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginEmail = loginEmail;
exports.loginGoogle = loginGoogle;
exports.loginMicrosoft = loginMicrosoft;
exports.loginPincode = loginPincode;
exports.microsoftProfilePicture = microsoftProfilePicture;
const AUTH_URL = "https://iihlq3icve.execute-api.us-east-1.amazonaws.com/v1"; //url de dev

async function loginGoogle(tokenGoogle, projectSlug) {
  try {
    const response = await fetch(AUTH_URL + "/google-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token: tokenGoogle,
        project_slug: projectSlug
      })
    });

    // Check if the response status is not 200
    if (!response.ok) {
      const errorData = await response.json();
      return {
        error: errorData
      };
    }

    // If the response is OK, handle the success case
    const data = await response.json();
    return data;
  } catch (error) {
    return {
      error: "Um erro inesperado ocorreu. Tente novamente"
    };
  }
}
async function loginMicrosoft(msToken, projectSlug) {
  const response = await fetch(AUTH_URL + "/ms-login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      token: msToken,
      project_slug: projectSlug
    })
  });
  if (!response.ok) {
    throw new Error("MsToken error");
  }
  return await response.json();
}
async function microsoftProfilePicture(accessToken) {
  const response = await fetch("https://graph.microsoft.com/v1.0/me/photo/$value", {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
  if (response.ok) {
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    return url; // URL para usar a imagem no front-end
  } else {
    console.error("Erro ao obter a imagem de perfil:", response.statusText);
    return null;
  }
}
async function loginEmail(email, projectSlug) {
  const response = await fetch(AUTH_URL + "/pincode-send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email,
      project_slug: projectSlug
    })
  });
  if (!response.ok) {
    throw new Error("Email error");
  }
  return await response.json();
}
async function loginPincode(pin, email, projectSlug) {
  try {
    const response = await fetch(AUTH_URL + "/pincode-validate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        project_slug: projectSlug,
        pincode: pin
      })
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
    return {
      error: "Um erro inesperado ocorreu. Tente novamente"
    };
  }
}