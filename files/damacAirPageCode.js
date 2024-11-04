<script>
    setTimeout(() => {
        let iti
        document.addEventListener("DOMContentLoaded", function () {
            iti = window.intlTelInput(Array.from(document.getElementsByTagName('form'))[0][4], {
                initialCountry: "auto",
                geoIpLookup: callback => {
                fetch("https://ipapi.co/json")
                    .then(res => res.json())
                    .then(data => callback(data.country_code))
                    .catch(() => callback("ae"));
                },
                utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@24.5.0/build/js/utils.js",
                separateDialCode: true,
                fixDropdownWidth: true,
            })
        
            // listen to the telephone input for changes
            Array.from(document.getElementsByTagName('form'))[0][4].addEventListener("countrychange", function () {
                console.log(`Selected country: ${iti.getSelectedCountryData().dialCode}`)
                Array.from(document.getElementsByTagName('form'))[0][7].value = iti.getSelectedCountryData().dialCode
            })
        })
    }, 100)
</script>


<script>

let iti
document.addEventListener("DOMContentLoaded", function () {
    iti = window.intlTelInput(Array.from(document.getElementsByTagName('form'))[0][4], {
        initialCountry: "auto",
        geoIpLookup: callback => {
        fetch("https://ipapi.co/json")
            .then(res => res.json())
            .then(data => callback(data.country_code))
            .catch(() => callback("ae"));
        },
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@24.5.0/build/js/utils.js",
        separateDialCode: true,
        fixDropdownWidth: true,
    })
console.log("iti", iti)
    // listen to the telephone input for changes
    Array.from(document.getElementsByTagName('form'))[0][4].addEventListener("change", function () {
        console.log(`Selected country: ${iti.getSelectedCountryData().dialCode}`)
        Array.from(document.getElementsByTagName('form'))[0][7].value = iti.getSelectedCountryData().dialCode
    })
})

</script>


<script>
    let iti;
    document.addEventListener("DOMContentLoaded", function () {
        const phoneInput = Array.from(document.getElementsByTagName('form'))[0][4];
        const countryCodeField = Array.from(document.getElementsByTagName('form'))[0][7]; // Target the hidden input for country code

        iti = window.intlTelInput(phoneInput, {
            initialCountry: "auto",
            geoIpLookup: callback => {
                fetch("https://ipapi.co/json")
                    .then(res => res.json())
                    .then(data => callback(data.country_code))
                    .catch(() => callback("ae"));
            },
            utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@24.5.0/build/js/utils.js",
            separateDialCode: true,
            fixDropdownWidth: true,
        });

        // Listen to changes on the telephone input field
        phoneInput.addEventListener("change", function () {
            const dialCode = iti.getSelectedCountryData().dialCode;
            console.log(`Selected country code: ${dialCode}`);
            countryCodeField.value = dialCode; // Set the hidden field's value
        });
    });
</script>
