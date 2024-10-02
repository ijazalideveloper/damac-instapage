// ================ Obtain Access Token Start ================
async function checkOrObtainAccessToken(clientId, clientSecret, tokenEndpoint) {
  // Step 1: Retrieve token and expiry from sessionStorage
  let accessToken = sessionStorage.getItem("lqsat") || null;
  let tokenExpiry = sessionStorage.getItem("lqsgt") ? Number(sessionStorage.getItem("lqsgt")) : null;

  const currentTime = new Date().getTime();

  // Step 2: Check if a valid token exists
  if (accessToken && tokenExpiry && currentTime < tokenExpiry) {
    console.log("Using existing valid access token.");
    return accessToken;  // Return the existing valid token
  }

  // Step 3: Token is expired or not available, generate a new one
  console.log("Generating a new access token...");
  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");
  params.append("client_id", clientId);
  params.append("client_secret", clientSecret);

  try {
    const response = await fetch(tokenEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    if (!response.ok) {
      throw new Error(`Error obtaining access token. Status: ${response.status}`);
    }

    const data = await response.json();
    const { access_token: token, refresh_token: refresh } = data;

    // Step 4: Save the new token and expiry time in sessionStorage
    const expireTime = currentTime + 25 * 60 * 1000;  // Set expiration to 25 minutes from now
    window.sessionStorage.setItem('lqsat', token);
    window.sessionStorage.setItem('lqsrt', refresh);
    window.sessionStorage.setItem('lqsgt', expireTime);

    return token;  // Return the new token

  } catch (error) {
    console.error('Error obtaining token:', error);
    return null;  // Return null or handle fallback
  }
}

// ================ Obtain Access Token End ================




//Perform a POST request. Send the given payload (data parameter) to LQS (Mashery TIBCO)
const pushToNewLQS = async data => {

  // Check if values are correctly retrieved from sessionStorage
  let accessToken = sessionStorage.getItem("lqsat") || null;
  let tokenExpiry = sessionStorage.getItem("lqsgt") ? Number(sessionStorage.getItem("lqsgt")) : null;

  const currentTime = new Date().getTime();

  // Step 2: Check if access token is valid
  if (accessToken && tokenExpiry && currentTime < tokenExpiry) {
    return accessToken;
  }

  // If token is expired or not present, obtain a new one
  if (!accessToken || !tokenExpiry || currentTime > tokenExpiry) {
    accessToken = await checkOrObtainAccessToken(lqs2clientId, lqs2clientSecret, lqs2tokenEndpoint);
    if (!accessToken) {
      console.error("Failed to obtain a new access token.");
      return;  // Handle the failure case
    }
  }
  
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    }
  
    // console.log(data)
  
    const requestBody = JSON.stringify(data)
    
    // Using the fetch API
    fetch(lqs2leadEndpoint, {
      method: 'POST',
      headers: headers,
      body: requestBody,
    })
      .then(response => {
        if (response.ok) {

          //Data layer addition - No Ticket.
          console.log('Data layer...')
          var gender = data.title == "MR." ? "male" : "female";
          const hashedEmail = "NA";
          const hashedPhone = "NA";
          landingCMSThankYou(
            gender,
            hashedEmail,
            hashedPhone,
            null,
            null,
            data.page_variant,
            data.email,
          );
          submitUrl();
          // //console.log(json);
          handler(e);
          

          return response.json()
        } else {
          throw new Error(`Error: ${response.status} - ${response.statusText}`)
        }
      })
      .then(data => {
        console.log('Success:', data)
        toggleSubmitBtns('enable')
      })
      .catch(error => {
        console.error('Error:', error)
        toggleSubmitBtns('enable')
      })
  }
// ======== E N D   O F   F U N C T I O N S ========







// ======== O N   I N I T ========
(async () => {
  const token = await checkOrObtainAccessToken(lqs2clientId, lqs2clientSecret, lqs2tokenEndpoint);
  if (token) {
    console.log("Token acquired:", token);
    // Proceed with the token for API requests
  } else {
    console.error("Failed to obtain access token.");
  }
})(); //Run once on init
// setInterval(() => {
//   console.log('Refreshing access token...');
//   obtainAccessToken(lqs2clientId, lqs2clientSecret, lqs2tokenEndpoint) //Repeat every 25 minutes
// }, 25*60*1000)

// ======== E N D   O F   O N   I N I T ========