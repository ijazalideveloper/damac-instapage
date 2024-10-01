async function obtainAccessToken(clientId, clientSecret, tokenEndpoint) {
  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");
  params.append("client_id", lqs2clientId);
  params.append("client_secret", lqs2clientSecret);

  try {
    const response = await fetch(lqs2tokenEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    if (!response.ok) {
      throw new Error(
        `Error obtaining access token. Status: ${response.status}`
      );
    }

    const data = await response.json();
    const {
      access_token: accessToken,
      refresh_token: refreshToken,
      expires_in,
    } = data;

    // Store tokens in sessionStorage
    window.sessionStorage.setItem("lqsat", accessToken);
    window.sessionStorage.setItem("lqsrt", refreshToken);

    // Create the response object
    const tokenResponse = { accessToken, refreshToken };

    // Return the response object
    return tokenResponse;
  } catch (error) {
    console.error("Error obtaining access token. Status: " + xhr.status);
  }
}
