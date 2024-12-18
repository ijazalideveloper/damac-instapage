// ======== I T I   T O   S F   C O U N T R Y   A D A P T O R   A N D   R E T R I E V A L   F U N C T I O N S ========
const itiSFCountryAdaptor = [
    {  name: "Afghanistan (<U202b>افغانستان<U202c>‎)", diallingCode: "+93", sendAs: { country: "Afghanistan", countryCode: "Afghanistan: 0093" }  },
    {  name: "Albania (Shqipëri)", diallingCode: "+355", sendAs: { country: "Albania", countryCode: "Albania: 00355" }  },
    {  name: "Algeria (<U202b>الجزائر<U202c>‎)", diallingCode: "+213", sendAs: { country: "Algeria", countryCode: "Algeria: 00213" }  },
    {  name: "American Samoa", diallingCode: "+1", sendAs: { country: "American Samoa", countryCode: "American Samoa: 001684" }  },
    {  name: "Andorra", diallingCode: "+376", sendAs: { country: "Andorra", countryCode: "Andorra: 00376" }  },
    {  name: "Angola", diallingCode: "+244", sendAs: { country: "Angola", countryCode: "Angola: 00244" }  },
    {  name: "Anguilla", diallingCode: "+1", sendAs: { country: "Anguilla", countryCode: "Anguilla: 001264" }  },
    {  name: "Antigua and Barbuda", diallingCode: "+1", sendAs: { country: "Antigua and Barbuda", countryCode: "Antigua and Barbuda: 001268" }  },
    {  name: "Argentina", diallingCode: "+54", sendAs: { country: "Argentina", countryCode: "Argentina: 0054" }  },
    {  name: "Armenia (Հայաստան)", diallingCode: "+374", sendAs: { country: "Armenia", countryCode: "Armenia: 00374" }  },
    {  name: "Aruba", diallingCode: "+297", sendAs: { country: "Aruba", countryCode: "Aruba: 00297" }  },
    {  name: "Ascension Island", diallingCode: "+247", sendAs: { country: "Ascension Island", countryCode: "Ascension Island: 00247" }  },
    {  name: "Australia", diallingCode: "+61", sendAs: { country: "Australia", countryCode: "Australia: 0061" }  },
    {  name: "Austria (Österreich)", diallingCode: "+43", sendAs: { country: "Austria", countryCode: "Austria: 0043" }  },
    {  name: "Azerbaijan (Azərbaycan)", diallingCode: "+994", sendAs: { country: "Azerbaijan", countryCode: "Azerbaijan: 00994" }  },
    {  name: "Bahamas", diallingCode: "+1", sendAs: { country: "Bahamas", countryCode: "Bahamas: 001242" }  },
    {  name: "Bahrain (<U202b>البحرين<U202c>‎)", diallingCode: "+973", sendAs: { country: "Bahrain", countryCode: "Bahrain: 00973" }  },
    {  name: "Bangladesh (বাংলাদেশ)", diallingCode: "+880", sendAs: { country: "Bangladesh", countryCode: "Bangladesh: 00880" }  },
    {  name: "Barbados", diallingCode: "+1", sendAs: { country: "Barbados", countryCode: "Barbados: 001246" }  },
    {  name: "Belarus (Беларусь)", diallingCode: "+375", sendAs: { country: "Belarus", countryCode: "Belarus: 00375" }  },
    {  name: "Belgium (België)", diallingCode: "+32", sendAs: { country: "Belgium", countryCode: "Belgium: 0032" }  },
    {  name: "Belize", diallingCode: "+501", sendAs: { country: "Belize", countryCode: "Belize: 00501" }  },
    {  name: "Benin (Bénin)", diallingCode: "+229", sendAs: { country: "Benin", countryCode: "Benin: 00229" }  },
    {  name: "Bermuda", diallingCode: "+1", sendAs: { country: "Bermuda", countryCode: "Bermuda: 001441" }  },
    {  name: "Bhutan (འབྲུག)", diallingCode: "+975", sendAs: { country: "Bhutan", countryCode: "Bhutan: 00975" }  },
    {  name: "Bolivia", diallingCode: "+591", sendAs: { country: "Bolivia, Plurinational State of", countryCode: "Bolivia: 00591" }  },
    {  name: "Bosnia and Herzegovina (Босна и Херцеговина)", diallingCode: "+387", sendAs: { country: "Bosnia and Herzegovina", countryCode: "Bosnia and Herzegovina: 00387" }  },
    {  name: "Botswana", diallingCode: "+267", sendAs: { country: "Botswana", countryCode: "Botswana: 00267" }  },
    {  name: "Brazil (Brasil)", diallingCode: "+55", sendAs: { country: "Brazil", countryCode: "Brazil: 0055" }  },
    {  name: "British Indian Ocean Territory", diallingCode: "+246", sendAs: { country: "British Indian Ocean Territory", countryCode: "British Indian Ocean Territory: 00246" }  },
    {  name: "British Virgin Islands", diallingCode: "+1", sendAs: { country: "Virgin Islands, British", countryCode: "British Virgin Islands: 001284" }  },
    {  name: "Brunei", diallingCode: "+673", sendAs: { country: "Brunei", countryCode: "Brunei: 00673" }  },
    {  name: "Bulgaria (България)", diallingCode: "+359", sendAs: { country: "Bulgaria", countryCode: "Bulgaria: 00359" }  },
    {  name: "Burkina Faso", diallingCode: "+226", sendAs: { country: "Burkina Faso", countryCode: "Burkina Faso: 00226" }  },
    {  name: "Burundi (Uburundi)", diallingCode: "+257", sendAs: { country: "Burundi", countryCode: "Burundi: 00257" }  },
    {  name: "Cambodia (កម្ពុជា)", diallingCode: "+855", sendAs: { country: "Cambodia", countryCode: "Cambodia: 00855" }  },
    {  name: "Cameroon (Cameroun)", diallingCode: "+237", sendAs: { country: "Cameroon", countryCode: "Cameroon: 00237" }  },
    {  name: "Canada", diallingCode: "+1", sendAs: { country: "Canada", countryCode: "Canada: 001" }  },
    {  name: "Cape Verde (Kabu Verdi)", diallingCode: "+238", sendAs: { country: "Cape Verde", countryCode: "Cape Verde: 00238" }  },
    {  name: "Caribbean Netherlands", diallingCode: "+599", sendAs: { country: "Bonaire, Sint Eustatius and Saba", countryCode: "Netherlands Antilles: 00599" }  },
    {  name: "Cayman Islands", diallingCode: "+1", sendAs: { country: "Cayman Islands", countryCode: "Cayman Islands: 001345" }  },
    {  name: "Central African Republic (République centrafricaine)", diallingCode: "+236", sendAs: { country: "Central African Republic", countryCode: "Central African Republic: 00236" }  },
    {  name: "Chad (Tchad)", diallingCode: "+235", sendAs: { country: "Chad", countryCode: "Chad: 00235" }  },
    {  name: "Chile", diallingCode: "+56", sendAs: { country: "Chile", countryCode: "Chile: 0056" }  },
    {  name: "China (中国)", diallingCode: "+86", sendAs: { country: "China", countryCode: "China: 0086" }  },
    {  name: "Christmas Island", diallingCode: "+61", sendAs: { country: "Christmas Island", countryCode: "Christmas Island: 0061" }  },
    {  name: "Cocos (Keeling) Islands", diallingCode: "+61", sendAs: { country: "Cocos (Keeling) Islands", countryCode: "Cocos Islands: 0061" }  },
    {  name: "Colombia", diallingCode: "+57", sendAs: { country: "Colombia", countryCode: "Colombia: 0057" }  },
    {  name: "Comoros (<U202b>جزر القمر<U202c>‎)", diallingCode: "+269", sendAs: { country: "Comoros", countryCode: "Comoros: 00269" }  },
    {  name: "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", diallingCode: "+243", sendAs: { country: "Democratic Republic of the Congo", countryCode: "Democratic Republic of Congo: 00243" }  },
    {  name: "Congo (Republic) (Congo-Brazzaville)", diallingCode: "+242", sendAs: { country: "Republic of the Congo", countryCode: "Republic of the Congo: 00242" }  },
    {  name: "Cook Islands", diallingCode: "+682", sendAs: { country: "Cook Islands", countryCode: "Cook Islands: 00682" }  },
    {  name: "Costa Rica", diallingCode: "+506", sendAs: { country: "Costa Rica", countryCode: "Costa Rica: 00506" }  },
    {  name: "Côte d’Ivoire", diallingCode: "+225", sendAs: { country: "Cote dIvoire", countryCode: "Cote d Ivoire: 002250" }  },
    {  name: "Croatia (Hrvatska)", diallingCode: "+385", sendAs: { country: "Croatia", countryCode: "Croatia: 00385" }  },
    {  name: "Cuba", diallingCode: "+53", sendAs: { country: "Cuba", countryCode: "Cuba: 0053" }  },
    {  name: "Curaçao", diallingCode: "+599", sendAs: { country: "Curacao", countryCode: "Curacao: 00599" }  },
    {  name: "Cyprus (Κύπρος)", diallingCode: "+357", sendAs: { country: "Cyprus", countryCode: "Cyprus: 00357" }  },
    {  name: "Czech Republic (Česká republika)", diallingCode: "+420", sendAs: { country: "Czech Republic", countryCode: "Czech Republic: 00420" }  },
    {  name: "Denmark (Danmark)", diallingCode: "+45", sendAs: { country: "Denmark", countryCode: "Denmark: 0045" }  },
    {  name: "Djibouti", diallingCode: "+253", sendAs: { country: "Djibouti", countryCode: "Djibouti: 00253" }  },
    {  name: "Dominica", diallingCode: "+1", sendAs: { country: "Dominica", countryCode: "Dominica: 001767" }  },
    {  name: "Dominican Republic (República Dominicana)", diallingCode: "+1", sendAs: { country: "Dominican Republic", countryCode: "Dominican Republic: 001809" }  },
    {  name: "Ecuador", diallingCode: "+593", sendAs: { country: "Ecuador", countryCode: "Ecuador: 00593" }  },
    {  name: "Egypt (<U202b>مصر<U202c>‎)", diallingCode: "+20", sendAs: { country: "Egypt", countryCode: "Egypt: 0020" }  },
    {  name: "El Salvador", diallingCode: "+503", sendAs: { country: "El Salvador", countryCode: "El Salvador: 00503" }  },
    {  name: "Equatorial Guinea (Guinea Ecuatorial)", diallingCode: "+240", sendAs: { country: "Equatorial Guinea", countryCode: "Equatorial Guinea: 00240" }  },
    {  name: "Eritrea", diallingCode: "+291", sendAs: { country: "Eritrea", countryCode: "Eritrea: 00291" }  },
    {  name: "Estonia (Eesti)", diallingCode: "+372", sendAs: { country: "Estonia", countryCode: "Estonia: 00372" }  },
    {  name: "Eswatini", diallingCode: "+268", sendAs: { country: "Swaziland", countryCode: "Swaziland: 00268" }  },
    {  name: "Ethiopia", diallingCode: "+251", sendAs: { country: "Ethiopia", countryCode: "Ethiopia: 00251" }  },
    {  name: "Falkland Islands (Islas Malvinas)", diallingCode: "+500", sendAs: { country: "Falkland Islands (Malvinas)", countryCode: "Falkland Islands: 00500" }  },
    {  name: "Faroe Islands (Føroyar)", diallingCode: "+298", sendAs: { country: "Faroe Islands", countryCode: "Faroe Islands: 00298" }  },
    {  name: "Fiji", diallingCode: "+679", sendAs: { country: "Fiji", countryCode: "Fiji: 00679" }  },
    {  name: "Finland (Suomi)", diallingCode: "+358", sendAs: { country: "Finland", countryCode: "Finland: 00358" }  },
    {  name: "France", diallingCode: "+33", sendAs: { country: "France", countryCode: "France: 0033" }  },
    {  name: "French Guiana (Guyane française)", diallingCode: "+594", sendAs: { country: "French Guiana", countryCode: "French Guiana: 00594" }  },
    {  name: "French Polynesia (Polynésie française)", diallingCode: "+689", sendAs: { country: "French Polynesia", countryCode: "French Polynesia: 00689" }  },
    {  name: "Gabon", diallingCode: "+241", sendAs: { country: "Gabon", countryCode: "Gabon: 00241" }  },
    {  name: "Gambia", diallingCode: "+220", sendAs: { country: "Gambia", countryCode: "Gambia: 00220" }  },
    {  name: "Georgia (საქართველო)", diallingCode: "+995", sendAs: { country: "Georgia", countryCode: "Georgia: 00995" }  },
    {  name: "Germany (Deutschland)", diallingCode: "+49", sendAs: { country: "Germany", countryCode: "Germany: 0049" }  },
    {  name: "Ghana (Gaana)", diallingCode: "+233", sendAs: { country: "Ghana", countryCode: "Ghana: 00233" }  },
    {  name: "Gibraltar", diallingCode: "+350", sendAs: { country: "Gibraltar", countryCode: "Gibraltar: 00350" }  },
    {  name: "Greece (Ελλάδα)", diallingCode: "+30", sendAs: { country: "Greece", countryCode: "Greece: 0030" }  },
    {  name: "Greenland (Kalaallit Nunaat)", diallingCode: "+299", sendAs: { country: "Greenland", countryCode: "Greenland: 00299" }  },
    {  name: "Grenada", diallingCode: "+1", sendAs: { country: "Grenada", countryCode: "Grenada: 001473" }  },
    {  name: "Guadeloupe", diallingCode: "+590", sendAs: { country: "Guadeloupe", countryCode: "Guadeloupe: 00590" }  },
    {  name: "Guam", diallingCode: "+1", sendAs: { country: "Guam", countryCode: "Guam: 001671" }  },
    {  name: "Guatemala", diallingCode: "+502", sendAs: { country: "Guatemala", countryCode: "Guatemala: 00502" }  },
    {  name: "Guernsey", diallingCode: "+44", sendAs: { country: "Guernsey", countryCode: "Guernsey: 00441481" }  },
    {  name: "Guinea (Guinée)", diallingCode: "+224", sendAs: { country: "Guinea", countryCode: "Guinea: 00224" }  },
    {  name: "Guinea-Bissau (Guiné Bissau)", diallingCode: "+245", sendAs: { country: "Guinea-Bissau", countryCode: "Guinea-Bissau: 00245" }  },
    {  name: "Guyana", diallingCode: "+592", sendAs: { country: "Guyana", countryCode: "Guyana: 00592" }  },
    {  name: "Haiti", diallingCode: "+509", sendAs: { country: "Haiti", countryCode: "Haiti: 00509" }  },
    {  name: "Honduras", diallingCode: "+504", sendAs: { country: "Honduras", countryCode: "Honduras: 00504" }  },
    {  name: "Hong Kong (香港)", diallingCode: "+852", sendAs: { country: "Hong Kong", countryCode: "Hong Kong: 00852" }  },
    {  name: "Hungary (Magyarország)", diallingCode: "+36", sendAs: { country: "Hungary", countryCode: "Hungary: 0036" }  },
    {  name: "Iceland (Ísland)", diallingCode: "+354", sendAs: { country: "Iceland", countryCode: "Iceland: 00354" }  },
    {  name: "India (भारत)", diallingCode: "+91", sendAs: { country: "India", countryCode: "India: 0091" }  },
    {  name: "Indonesia", diallingCode: "+62", sendAs: { country: "Indonesia", countryCode: "Indonesia: 0062" }  },
    {  name: "Iran (<U202b>ایران<U202c>‎)", diallingCode: "+98", sendAs: { country: "Iran", countryCode: "Iran: 0098" }  },
    {  name: "Iraq (<U202b>العراق<U202c>‎)", diallingCode: "+964", sendAs: { country: "Iraq", countryCode: "Iraq: 00964" }  },
    {  name: "Ireland", diallingCode: "+353", sendAs: { country: "Ireland", countryCode: "Ireland: 00353" }  },
    {  name: "Isle of Man", diallingCode: "+44", sendAs: { country: "Isle of Man", countryCode: "Isle of Man: 00441624" }  },
    {  name: "Israel (<U202b>ישראל<U202c>‎)", diallingCode: "+972", sendAs: { country: "Israel", countryCode: "Israel: 00972" }  },
    {  name: "Italy (Italia)", diallingCode: "+39", sendAs: { country: "Italy", countryCode: "Italy: 0039" }  },
    {  name: "Jamaica", diallingCode: "+1", sendAs: { country: "Jamaica", countryCode: "Jamaica: 001876" }  },
    {  name: "Japan (日本)", diallingCode: "+81", sendAs: { country: "Japan", countryCode: "Japan: 0081" }  },
    {  name: "Jersey", diallingCode: "+44", sendAs: { country: "Jersey", countryCode: "Jersey: 00441534" }  },
    {  name: "Jordan (<U202b>الأردن<U202c>‎)", diallingCode: "+962", sendAs: { country: "Jordan", countryCode: "Jordan: 00962" }  },
    {  name: "Kazakhstan (Казахстан)", diallingCode: "+7", sendAs: { country: "Kazakhstan", countryCode: "Kazakhstan: 007" }  },
    {  name: "Kenya", diallingCode: "+254", sendAs: { country: "Kenya", countryCode: "Kenya: 00254" }  },
    {  name: "Kiribati", diallingCode: "+686", sendAs: { country: "Kiribati", countryCode: "Kiribati: 00686" }  },
    {  name: "Kosovo", diallingCode: "+383", sendAs: { country: "Kosovo", countryCode: "Kosovo: 00383" }  },
    {  name: "Kuwait (<U202b>الكويت<U202c>‎)", diallingCode: "+965", sendAs: { country: "Kuwait", countryCode: "Kuwait: 00965" }  },
    {  name: "Kyrgyzstan (Кыргызстан)", diallingCode: "+996", sendAs: { country: "Kyrgyzstan", countryCode: "Kyrgyzstan: 00996" }  },
    {  name: "Laos (ລາວ)", diallingCode: "+856", sendAs: { country: "Lao People's Democratic Republic", countryCode: "Laos: 00856" }  },
    {  name: "Latvia (Latvija)", diallingCode: "+371", sendAs: { country: "Latvia", countryCode: "Latvia: 00371" }  },
    {  name: "Lebanon (<U202b>لبنان<U202c>‎)", diallingCode: "+961", sendAs: { country: "Lebanon", countryCode: "Lebanon: 00961" }  },
    {  name: "Lesotho", diallingCode: "+266", sendAs: { country: "Lesotho", countryCode: "Lesotho: 00266" }  },
    {  name: "Liberia", diallingCode: "+231", sendAs: { country: "Liberia", countryCode: "Liberia: 00231" }  },
    {  name: "Libya (<U202b>ليبيا<U202c>‎)", diallingCode: "+218", sendAs: { country: "State of Libya", countryCode: "Libya: 00218" }  },
    {  name: "Liechtenstein", diallingCode: "+423", sendAs: { country: "Liechtenstein", countryCode: "Liechtenstein: 00423" }  },
    {  name: "Lithuania (Lietuva)", diallingCode: "+370", sendAs: { country: "Lithuania", countryCode: "Lithuania: 00370" }  },
    {  name: "Luxembourg", diallingCode: "+352", sendAs: { country: "Luxembourg", countryCode: "Luxembourg: 00352" }  },
    {  name: "Macau (澳門)", diallingCode: "+853", sendAs: { country: "Macao", countryCode: "Macao: 00853" }  },
    {  name: "Macedonia (FYROM) (Македонија)", diallingCode: "+389", sendAs: { country: "Macedonia, The Former Yugoslav Republic of", countryCode: "Macedonia: 00389" }  },
    {  name: "Madagascar (Madagasikara)", diallingCode: "+261", sendAs: { country: "Madagascar", countryCode: "Madagascar: 00261" }  },
    {  name: "Malawi", diallingCode: "+265", sendAs: { country: "Malawi", countryCode: "Malawi: 00265" }  },
    {  name: "Malaysia", diallingCode: "+60", sendAs: { country: "Malaysia", countryCode: "Malaysia: 0060" }  },
    {  name: "Maldives", diallingCode: "+960", sendAs: { country: "Maldives", countryCode: "Maldives: 00960" }  },
    {  name: "Mali", diallingCode: "+223", sendAs: { country: "Mali", countryCode: "Mali: 00223" }  },
    {  name: "Malta", diallingCode: "+356", sendAs: { country: "Malta", countryCode: "Malta: 00356" }  },
    {  name: "Marshall Islands", diallingCode: "+692", sendAs: { country: "Marshall Islands", countryCode: "Marshall Islands: 00692" }  },
    {  name: "Martinique", diallingCode: "+596", sendAs: { country: "Martinique", countryCode: "Martinique: 00596" }  },
    {  name: "Mauritania (<U202b>موريتانيا<U202c>‎)", diallingCode: "+222", sendAs: { country: "Mauritania", countryCode: "Mauritania: 00222" }  },
    {  name: "Mauritius (Moris)", diallingCode: "+230", sendAs: { country: "Mauritius", countryCode: "Mauritius: 00230" }  },
    {  name: "Mayotte", diallingCode: "+262", sendAs: { country: "Mayotte", countryCode: "Mayotte: 00262" }  },
    {  name: "Mexico (México)", diallingCode: "+52", sendAs: { country: "Mexico", countryCode: "Mexico: 0052" }  },
    {  name: "Micronesia", diallingCode: "+691", sendAs: { country: "Micronesia, Federated States of", countryCode: "Micronesia: 00691" }  },
    {  name: "Moldova (Republica Moldova)", diallingCode: "+373", sendAs: { country: "Moldova", countryCode: "Moldova: 00373" }  },
    {  name: "Monaco", diallingCode: "+377", sendAs: { country: "Monaco", countryCode: "Monaco: 00377" }  },
    {  name: "Mongolia (Монгол)", diallingCode: "+976", sendAs: { country: "Mongolia", countryCode: "Mongolia: 00976" }  },
    {  name: "Montenegro (Crna Gora)", diallingCode: "+382", sendAs: { country: "Montenegro", countryCode: "Montenegro: 00382" }  },
    {  name: "Montserrat", diallingCode: "+1", sendAs: { country: "Montserrat", countryCode: "Montserrat: 001664" }  },
    {  name: "Morocco (<U202b>المغرب<U202c>‎)", diallingCode: "+212", sendAs: { country: "Morocco", countryCode: "Morocco: 00212" }  },
    {  name: "Mozambique (Moçambique)", diallingCode: "+258", sendAs: { country: "Mozambique", countryCode: "Mozambique: 00258" }  },
    {  name: "Myanmar (Burma) (မြန်မာ)", diallingCode: "+95", sendAs: { country: "Myanmar", countryCode: "Myanmar: 0095" }  },
    {  name: "Namibia (Namibië)", diallingCode: "+264", sendAs: { country: "Namibia", countryCode: "Namibia: 00264" }  },
    {  name: "Nauru", diallingCode: "+674", sendAs: { country: "Nauru", countryCode: "Nauru: 00674" }  },
    {  name: "Nepal (नेपाल)", diallingCode: "+977", sendAs: { country: "Nepal", countryCode: "Nepal: 00977" }  },
    {  name: "Netherlands (Nederland)", diallingCode: "+31", sendAs: { country: "Netherlands", countryCode: "Netherlands: 0031" }  },
    {  name: "New Caledonia (Nouvelle-Calédonie)", diallingCode: "+687", sendAs: { country: "New Caledonia", countryCode: "New Caledonia: 00687" }  },
    {  name: "New Zealand", diallingCode: "+64", sendAs: { country: "New Zealand", countryCode: "New Zealand: 0064" }  },
    {  name: "Nicaragua", diallingCode: "+505", sendAs: { country: "Nicaragua", countryCode: "Nicaragua: 00505" }  },
    {  name: "Niger (Nijar)", diallingCode: "+227", sendAs: { country: "Niger", countryCode: "Niger: 00227" }  },
    {  name: "Nigeria", diallingCode: "+234", sendAs: { country: "Nigeria", countryCode: "Nigeria: 00234" }  },
    {  name: "Niue", diallingCode: "+683", sendAs: { country: "Niue", countryCode: "Niue: 00683" }  },
    {  name: "Norfolk Island", diallingCode: "+672", sendAs: { country: "Norfolk Island", countryCode: "Antarctica: 00672" }  },
    {  name: "North Korea (조선 민주주의 인민 공화국)", diallingCode: "+850", sendAs: { country: "Korea, Democratic People's Republic of", countryCode: "North Korea: 00850" }  },
    {  name: "Northern Mariana Islands", diallingCode: "+1", sendAs: { country: "Northern Mariana Islands", countryCode: "Northern Mariana Islands: 001670" }  },
    {  name: "Norway (Norge)", diallingCode: "+47", sendAs: { country: "Norway", countryCode: "Norway: 0047" }  },
    {  name: "Oman (<U202b>عُمان<U202c>‎)", diallingCode: "+968", sendAs: { country: "Oman", countryCode: "Oman: 00968" }  },
    {  name: "Pakistan (<U202b>پاکستان<U202c>‎)", diallingCode: "+92", sendAs: { country: "Pakistan", countryCode: "Pakistan: 0092" }  },
    {  name: "Palau", diallingCode: "+680", sendAs: { country: "Palau", countryCode: "Palau: 00680" }  },
    {  name: "Palestine (<U202b>فلسطين<U202c>‎)", diallingCode: "+970", sendAs: { country: "Palestinian Territory, Occupied", countryCode: "Palestine: 00970" }  },
    {  name: "Panama (Panamá)", diallingCode: "+507", sendAs: { country: "Panama", countryCode: "Panama: 00507" }  },
    {  name: "Papua New Guinea", diallingCode: "+675", sendAs: { country: "Papua New Guinea", countryCode: "Papua New Guinea: 00675" }  },
    {  name: "Paraguay", diallingCode: "+595", sendAs: { country: "Paraguay", countryCode: "Paraguay: 00595" }  },
    {  name: "Peru (Perú)", diallingCode: "+51", sendAs: { country: "Peru", countryCode: "Peru: 0051" }  },
    {  name: "Philippines", diallingCode: "+63", sendAs: { country: "Philippines", countryCode: "Philippines: 0063" }  },
    {  name: "Poland (Polska)", diallingCode: "+48", sendAs: { country: "Poland", countryCode: "Poland: 0048" }  },
    {  name: "Portugal", diallingCode: "+351", sendAs: { country: "Portugal", countryCode: "Portugal: 00351" }  },
    {  name: "Puerto Rico", diallingCode: "+1", sendAs: { country: "Puerto Rico", countryCode: "Puerto Rico: 001787" }  },
    {  name: "Qatar (<U202b>قطر<U202c>‎)", diallingCode: "+974", sendAs: { country: "Qatar", countryCode: "Qatar: 00974" }  },
    {  name: "Réunion (La Réunion)", diallingCode: "+262", sendAs: { country: "Reunion", countryCode: "Reunion: 00262" }  },
    {  name: "Romania (România)", diallingCode: "+40", sendAs: { country: "Romania", countryCode: "Romania: 0040" }  },
    {  name: "Russia (Россия)", diallingCode: "+7", sendAs: { country: "Russia", countryCode: "Russia: 007" }  },
    {  name: "Rwanda", diallingCode: "+250", sendAs: { country: "Rwanda", countryCode: "Rwanda: 00250" }  },
    {  name: "Saint Barthélemy", diallingCode: "+590", sendAs: { country: "Saint Barthelemy", countryCode: "Saint Barthelemy: 00590" }  },
    {  name: "Saint Helena", diallingCode: "+290", sendAs: { country: "Saint Helena, Ascension and Tristan da Cunha", countryCode: "Saint Helena: 00290" }  },
    {  name: "Saint Kitts and Nevis", diallingCode: "+1", sendAs: { country: "Saint Kitts and Nevis", countryCode: "Saint Kitts and Nevis: 001869" }  },
    {  name: "Saint Lucia", diallingCode: "+1", sendAs: { country: "Saint Lucia", countryCode: "Saint Lucia: 001758" }  },
    {  name: "Saint Martin (Saint-Martin (partie française))", diallingCode: "+590", sendAs: { country: "Saint Martin (French part)", countryCode: "Saint Martin: 00590" }  },
    {  name: "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", diallingCode: "+508", sendAs: { country: "Saint Pierre and Miquelon", countryCode: "Saint Pierre and Miquelon: 00508" }  },
    {  name: "Saint Vincent and the Grenadines", diallingCode: "+1", sendAs: { country: "Saint Vincent and the Grenadines", countryCode: "Saint Vincent and the Grenadines: 001784" }  },
    {  name: "Samoa", diallingCode: "+685", sendAs: { country: "Samoa", countryCode: "Samoa: 00685" }  },
    {  name: "San Marino", diallingCode: "+378", sendAs: { country: "San Marino", countryCode: "San Marino: 00378" }  },
    {  name: "São Tomé and Príncipe (São Tomé e Príncipe)", diallingCode: "+239", sendAs: { country: "Sao Tome and Principe", countryCode: "Sao Tome and Principe: 00239" }  },
    {  name: "Saudi Arabia (<U202b>المملكة العربية السعودية<U202c>‎)", diallingCode: "+966", sendAs: { country: "Saudi Arabia", countryCode: "Saudi Arabia: 00966" }  },
    {  name: "Senegal (Sénégal)", diallingCode: "+221", sendAs: { country: "Senegal", countryCode: "Senegal: 00221" }  },
    {  name: "Serbia (Србија)", diallingCode: "+381", sendAs: { country: "Serbia", countryCode: "Serbia: 00381" }  },
    {  name: "Seychelles", diallingCode: "+248", sendAs: { country: "Seychelles", countryCode: "Seychelles: 00248" }  },
    {  name: "Sierra Leone", diallingCode: "+232", sendAs: { country: "Sierra Leone", countryCode: "Sierra Leone: 00232" }  },
    {  name: "Singapore", diallingCode: "+65", sendAs: { country: "Singapore", countryCode: "Singapore: 0065" }  },
    {  name: "Sint Maarten", diallingCode: "+1", sendAs: { country: "Sint Maarten (Dutch part)", countryCode: "Sint Maarten: 001721" }  },
    {  name: "Slovakia (Slovensko)", diallingCode: "+421", sendAs: { country: "Slovakia", countryCode: "Slovakia: 00421" }  },
    {  name: "Slovenia (Slovenija)", diallingCode: "+386", sendAs: { country: "Slovenia", countryCode: "Slovenia: 00386" }  },
    {  name: "Solomon Islands", diallingCode: "+677", sendAs: { country: "Solomon Islands", countryCode: "Solomon Islands: 00677" }  },
    {  name: "Somalia (Soomaaliya)", diallingCode: "+252", sendAs: { country: "Somalia", countryCode: "Somalia: 00252" }  },
    {  name: "South Africa", diallingCode: "+27", sendAs: { country: "South Africa", countryCode: "South Africa: 0027" }  },
    {  name: "South Korea (대한민국)", diallingCode: "+82", sendAs: { country: "South Korean", countryCode: "South Korea: 0082" }  },
    {  name: "South Sudan (<U202b>جنوب السودان<U202c>‎)", diallingCode: "+211", sendAs: { country: "South Sudan", countryCode: "South Sudan: 00211" }  },
    {  name: "Spain (España)", diallingCode: "+34", sendAs: { country: "Spain", countryCode: "Spain: 0034" }  },
    {  name: "Sri Lanka (ශ්‍රී ලංකාව)", diallingCode: "+94", sendAs: { country: "Sri Lanka", countryCode: "Sri Lanka: 0094" }  },
    {  name: "Sudan (<U202b>السودان<U202c>‎)", diallingCode: "+249", sendAs: { country: "Sudan", countryCode: "Sudan: 00249" }  },
    {  name: "Suriname", diallingCode: "+597", sendAs: { country: "Suriname", countryCode: "Suriname: 00597" }  },
    {  name: "Svalbard and Jan Mayen", diallingCode: "+47", sendAs: { country: "Svalbard and Jan Mayen", countryCode: "Svalbard and Jan Mayen: 0047" }  },
    {  name: "Sweden (Sverige)", diallingCode: "+46", sendAs: { country: "Sweden", countryCode: "Sweden: 0046" }  },
    {  name: "Switzerland (Schweiz)", diallingCode: "+41", sendAs: { country: "Switzerland", countryCode: "Switzerland: 0041" }  },
    {  name: "Syria (<U202b>سوريا<U202c>‎)", diallingCode: "+963", sendAs: { country: "Syrian Arab Republic", countryCode: "Syria: 00963" }  },
    {  name: "Taiwan (台灣)", diallingCode: "+886", sendAs: { country: "Taiwan", countryCode: "Taiwan: 00886" }  },
    {  name: "Tajikistan", diallingCode: "+992", sendAs: { country: "Tajikistan", countryCode: "Tajikistan: 00992" }  },
    {  name: "Tanzania", diallingCode: "+255", sendAs: { country: "Tanzania", countryCode: "Tanzania: 00255" }  },
    {  name: "Thailand (ไทย)", diallingCode: "+66", sendAs: { country: "Thailand", countryCode: "Thailand: 0066" }  },
    {  name: "Timor-Leste", diallingCode: "+670", sendAs: { country: "Timor-Leste", countryCode: "East Timor: 00670" }  },
    {  name: "Togo", diallingCode: "+228", sendAs: { country: "Togo", countryCode: "Togo: 00228" }  },
    {  name: "Tokelau", diallingCode: "+690", sendAs: { country: "Tokelau", countryCode: "Tokelau: 00690" }  },
    {  name: "Tonga", diallingCode: "+676", sendAs: { country: "Tonga", countryCode: "Tonga: 00676" }  },
    {  name: "Trinidad and Tobago", diallingCode: "+1", sendAs: { country: "Trinidad and Tobago", countryCode: "Trinidad and Tobago: 001868" }  },
    {  name: "Tunisia (<U202b>تونس<U202c>‎)", diallingCode: "+216", sendAs: { country: "Tunisia", countryCode: "Tunisia: 00216" }  },
    {  name: "Turkey (Türkiye)", diallingCode: "+90", sendAs: { country: "Turkey", countryCode: "Turkey: 0090" }  },
    {  name: "Turkmenistan", diallingCode: "+993", sendAs: { country: "Turkmenistan", countryCode: "Turkmenistan: 00993" }  },
    {  name: "Turks and Caicos Islands", diallingCode: "+1", sendAs: { country: "Turks and Caicos Islands", countryCode: "Turks and Caicos Islands: 001649" }  },
    {  name: "Tuvalu", diallingCode: "+688", sendAs: { country: "Tuvalu", countryCode: "Tuvalu: 00688" }  },
    {  name: "U.S. Virgin Islands", diallingCode: "+1", sendAs: { country: "Virgin Islands, U.S.", countryCode: "U.S. Virgin Islands: 001340" }  },
    {  name: "Uganda", diallingCode: "+256", sendAs: { country: "Uganda", countryCode: "Uganda: 00256" }  },
    {  name: "Ukraine (Україна)", diallingCode: "+380", sendAs: { country: "Ukraine", countryCode: "Ukraine: 00380" }  },
    {  name: "United Arab Emirates (<U202b>الإمارات العربية المتحدة<U202c>‎)", diallingCode: "+971", sendAs: { country: "United Arab Emirates", countryCode: "United Arab Emirates: 00971" }  },
    {  name: "United Kingdom", diallingCode: "+44", sendAs: { country: "United Kingdom", countryCode: "United Kingdom: 0044" }  },
    {  name: "United States", diallingCode: "+1", sendAs: { country: "United States of America", countryCode: "United States: 001" }  },
    {  name: "Uruguay", diallingCode: "+598", sendAs: { country: "Uruguay", countryCode: "Uruguay: 00598" }  },
    {  name: "Uzbekistan (Oʻzbekiston)", diallingCode: "+998", sendAs: { country: "Uzbekistan", countryCode: "Uzbekistan: 00998" }  },
    {  name: "Vanuatu", diallingCode: "+678", sendAs: { country: "Vanuatu", countryCode: "Vanuatu: 00678" }  },
    {  name: "Vatican City (Città del Vaticano)", diallingCode: "+39", sendAs: { country: "Holy See (Vatican City State)", countryCode: "Italy: 0039" }  },
    {  name: "Venezuela", diallingCode: "+58", sendAs: { country: "Venezuela, Bolivarian Republic of", countryCode: "Venezuela: 0058" }  },
    {  name: "Vietnam (Việt Nam)", diallingCode: "+84", sendAs: { country: "Vietnam", countryCode: "Vietnam: 0084" }  },
    {  name: "Wallis and Futuna (Wallis-et-Futuna)", diallingCode: "+681", sendAs: { country: "Wallis and Futuna", countryCode: "Wallis and Futuna: 00681" }  },
    {  name: "Western Sahara (<U202b>الصحراء الغربية<U202c>‎)", diallingCode: "+212", sendAs: { country: "Western Sahara", countryCode: "Western Sahara: 00212" }  },
    {  name: "Yemen (<U202b>اليمن<U202c>‎)", diallingCode: "+967", sendAs: { country: "Yemen", countryCode: "Yemen: 00967" }  },
    {  name: "Zambia", diallingCode: "+260", sendAs: { country: "Zambia", countryCode: "Zambia: 00260" }  },
    {  name: "Zimbabwe", diallingCode: "+263", sendAs: { country: "Zimbabwe", countryCode: "Zimbabwe: 00263" }  },
    {  name: "Åland Islands", diallingCode: "+358", sendAs: { country: "Finland", countryCode: "Finland: 00358" }  }
]

function sanitizeName(name) {
  // Replace "and" with "&" and vice versa to normalize the country names
  const normalizedName = name?.replace(/\band\b/g, '&') // Replace "and" with "&"
                            ?.replace(/&/g, 'and')  // Replace "&" with "and" if needed
                            ?.replace(/[\u202b\u202c]/g, '')   // Remove actual Unicode directional marks
                            ?.replace(/<U202b>|<U202c>/g, '')  // Remove placeholders
                            ?.trim();
  return normalizedName;
}

function retrieveCountry(countryName) {
  const sanitizedInput = sanitizeName(countryName);
  const country = itiSFCountryAdaptor.find(country => {
      const sanitizedCountryName = sanitizeName(country.name);
      return sanitizedCountryName === sanitizedInput || // Exact match
             sanitizedCountryName.startsWith(sanitizedInput + " ") || // Starts with and followed by space (for multi-word names)
             sanitizedCountryName.endsWith(" " + sanitizedInput); // Ends with and preceded by space
  });
  return country;
}
// ======== E N D   O F   I T I   T O   S F   C O U N T R Y   A D A P T O R   A N D   R E T R I E V A L   F U N C T I O N S ========


// ======== L E A D   S U B M I S S I O N   H A N D L I N G ========
jQuery = $;
let phoneInput;
let titleInput;
let firstNameInput;
let lastNameInput;
let emailInput;
let mrInput;
let msInput;
let mrsInput;
let privacyInput;
let newsInput;
let websiteLanguage;
let emailError;
let phoneError;
let newsAndOffers;
let acceptPrivacyPolicy;
let lookingTo;
let invest;
let buyaHome;
let workAtDamac;
let iAmAJobSeeker;
let exploringDamac;
let propertyTypePreference;
let villaHouse;
let apartmentFlat;

let bedroomCountPreference;
let studio;
let oneBr;
let twoBr;
let threeBr;
let fourPlusBr;
let budgetRangePreference;
let uptoOneM;
let oneMtoTwoM;
let twoMtoFiveM;
let fiveMPlus;

let whenToBuy;
let daysThirty;
let daysNinety;
let immediately;
let withinThreeMonths;
let withinSixMonths;
let stillConsidering;

let btntext;
let labtext;
let contacted;
let sms;
let whatsapp;
let preferredLanguageInput
websiteLanguage = $("input[name='websiteLanguage']").val();

let code //Country Code selected in iti

//console.log(websiteLanguage);
document.addEventListener("DOMContentLoaded", async function () {
  // Usage: Call the function and pass the path to your CSS file
  // replaceCSS('https://prod-cdn.damacproperties.com/uploads/instapages/native/css/intlTelInput.min.css', 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/24.5.0/build/css/intlTelInput.min.css')


  // _Translate.set( original in English, translated );
  if (websiteLanguage == "EN") {
    _Translate.set("Processing...", "Processing...");
    _Translate.set("Please Fix These Errors", "Please Fix These Errors");
    _Translate.set("is not valid", "is not valid");
    _Translate.set("is required", "is required");
    _Translate.set("starts with @ sign", "starts with @ sign");
    _Translate.set("is missing @ sign", "is missing @ sign");
    _Translate.set("contains repeated dots", "contains repeated dots");
    _Translate.set("starts with a dot", "starts with a dot");
    _Translate.set("domain is missing", "domain is missing");
    _Translate.set("domain starts with a dot", "domain starts with a dot");
    _Translate.set("domain is not valid", "domain is not valid");
    _Translate.set("domain ends with a dot", "domain ends with a dot");
    phoneInput = "Phone";
    titleInput = "Title";
    firstNameInput = "First Name";
    lastNameInput = "Last Name";
    emailInput = "Email";
    mrInput = "Mr.";
    msInput = "Ms.";
    mrsInput = "Mrs.";
    newsInput = "I’d like to hear about news and offers";
    privacyInput = "Iâ€™ve read and agreed to the Privacy Policy";
    phoneError = "Please enter a valid Phone number";
    emailError = "EnterÂ aÂ validÂ email";
    newsAndOffers = "News And Offers";
    acceptPrivacyPolicy = "Accept Privacy Policy";
    lookingTo = "What are you looking to do today?";
    areYouLookingTo = "Are you looking to"; //add to other languages as well if needed
    invest = "Invest in real estate";
    buyaHome = "Buy a home";
    workAtDamac = "Work @ DAMAC";
    findAJob = "Find a job"; //add to other languages as well
    iAmAJobSeeker = "I am a job seeker";
    exploringDamac = "I am just exploring";
    propertyTypePreference = "What kind of property interests you?";
    villaHouse = "Villa/House";
    apartmentFlat = "Apartment/Flat";

    bedroomCountPreference = "How many bedrooms do you need?";
    studio = "Studio";
    oneBr = "1";
    twoBr = "2";
    threeBr = "3";
    fourPlusBr = "4+";
    budgetRangePreference = "What is your budget range?";
    uptoOneM = "Up to AED 1M";
    oneMtoTwoM = "AED 1M to AED 2M";
    twoMtoFiveM = "AED 2M to AED 5M";
    fiveMPlus = "Above AED 5M";

    whenToBuy = "When are you planning to make your purchase?";
    daysThirty = "Within 30 days";
    daysNinety = "Within 90 days";
    immediately = "Immediately";
    withinThreeMonths = "Within 3 Months";
    withinSixMonths = "Within 6 Months";
    stillConsidering = "Still considering";

    btntext = "CLICK HERE";
    labtext = "For more on other DAMAC Properties";
    contacted = "I can be contacted via";
    sms = "SMS";
    whatsapp = "WhatsApp";
    preferredLanguageInput = "Preferred Language";
  } else if (websiteLanguage == "AR") {
    _Translate.set("Processing...","جاري العمل...");
    _Translate.set("Please Fix These Errors","الرجاء التأكد من الأخطاء التالية");
    _Translate.set("is not valid","غير صحيح");
    _Translate.set("is required","مطلوب");
    _Translate.set("starts with @ sign","تبدأ بعلامة @");
    _Translate.set("is missing @ sign","علامة @ غير موجودة");
    _Translate.set("contains repeated dots","يحتوي على نقاط مكررة");
    _Translate.set("starts with a dot","يبدأ بنقطة");
    _Translate.set("domain is missing","الخانة فارغة");
    _Translate.set("domain starts with a dot","المعلومات بالخانة تبدأ بنقطة");
    _Translate.set("domain is not valid","المعلومات بالخانة غير صحيحة");
    _Translate.set("domain ends with a dot","المعلومات بالخانة تنتهي بنقطة");
    phoneInput = "هاتف";
    let data = $('input[name="' + phoneInput + '"]');
    if (data.length > 0) {
        phoneInput = "هاتف";
    } else {
        phoneInput = "هاتف";
    }
    //console.log("data...", data);
    titleInput = "اللقب";
    firstNameInput = "الاسم الأول";
    lastNameInput = "اسم العائلة";
    emailInput = "البريد الإلكتروني";
    mrInput = "السيد";
    msInput = "الآنسة";
    mrsInput = "السيدة";
    newsInput = "أودّ الاطلاع على الأخبار والعروض";
    privacyInput = "لقد قرأت ووافقت على سياسة الخصوصية";
    phoneError = "أدخل رقم هاتف صالح";
    emailError = "أدخل عنوان بريد إلكتروني صالح";
    newsAndOffers = "الأخبار والعروض";
    acceptPrivacyPolicy = "موافق على شروط الخصوصية";
    lookingTo = "هل تبحث عن";
    invest = "الاستثمار";
    buyaHome = "شراء منزل";
    workAtDamac = "العمل لدى داماك";
    areYouLookingTo = "هل تبحث عن"; //add to other languages as well if needed
    findAJob = "أبحث عن عمل"; //add to other languages as well
    iAmAJobSeeker = "الحصول على وظيفة";
    exploringDamac = "أستعرض الخيارات المتاحة";
    propertyTypePreference = "ما نوع العقار الذي تبحث عنه؟";
    villaHouse = "فيلا/منزل";
    apartmentFlat = "شقة";
    bedroomCountPreference = "كم عدد الغرف في المنزل الذي تبحث عنه؟";
    studio = "استوديو";
    oneBr = "1";
    twoBr = "2";
    threeBr = "3";
    fourPlusBr = "4+";
    budgetRangePreference = "ما هي ميزانيتك؟";
    uptoOneM = "لغاية 1 مليون درهم إماراتي";
    oneMtoTwoM = "بين 1 مليون درهم و2 مليون درهم إماراتي";
    twoMtoFiveM = "بين 2 مليون درهم و5 مليون درهم إماراتي";
    fiveMPlus = "أكثر من 5 مليون درهم إماراتي";
    whenToBuy = "ما هي المدة التي ستستغرقها لشراء منزل؟";
    daysThirty = "خلال 30 يوم";
    daysNinety = "خلال 90 يوم";
    immediately = "في الحال";
    withinThreeMonths = "خلال 3 أشهر";
    withinSixMonths = "خلال 6 أشهر";
    stillConsidering = "لم أقرر بعد";
    btntext = "اضغط هنا";
    labtext = "لمعرفة المزيد عن عقارات داماك الأخرى";
    contacted = "أُوافق أن يتمّ التواصل معي عبر";
    sms = "رسالة نصيّة";
    whatsapp = "تطبيق واتساب";
    preferredLanguageInput = "اللغة المفضلة";
  } else if (websiteLanguage == "FR") {
    _Translate.set("Processing...","En cours de traitement...");
    _Translate.set("Please Fix These Errors","Veuillez corriger ces erreurs");
    _Translate.set("is not valid","n’est pas valide");
    _Translate.set("is required","n'est un élément requis");
    _Translate.set("starts with @ sign","commence par une @");
    _Translate.set("is missing @ sign","Le signe @ est manquant");
    _Translate.set("contains repeated dots","contient plusieurs points consécutifs");
    _Translate.set("starts with a dot","commence par un point");
    _Translate.set("domain is missing","Le domaine est manquant");
    _Translate.set("domain starts with a dot","Le domaine commence par un point");
    _Translate.set("domain is not valid","Le domaine n’est pas valide");
    _Translate.set("domain ends with a dot","Le domaine finit par un point");
    phoneInput = "Téléphone";
    let data = $('input[name="' + phoneInput + '"]');
    //console.log("data...", data);
    if (data.length > 0) {
      phoneInput = "Téléphone";
    } else {
      phoneInput = "Téléphone";
    }
    titleInput = "Titre";
    firstNameInput = "Prénom";
    lastNameInput = "Nom";
    emailInput = "Adresse e-mail";
    mrInput = "M";
    msInput = "Melle";
    mrsInput = "Mme";
    newsInput = "Je souhaite recevoir les informations et les offres";
    privacyInput = "J'ai lu et j'accepte la politique de confidentialité";
    phoneError = "Veuillez saisir un numéro de téléphone valide";
    emailError = "Saisir une adresse e-mail valide";
    newsAndOffers = "Actualités et offres";
    acceptPrivacyPolicy = "Accepter la politique de confidentialité";
    lookingTo = "Souhaitez-vous";
    areYouLookingTo = "Souhaitez-vous"; //add to other languages as well if needed
    findAJob = "Travailler @ DAMAC"; //add to other languages as well
    invest = "Investir";
    buyaHome = "Acheter une maison";
    workAtDamac = "Travailler @ DAMAC";
    iAmAJobSeeker = "Je cherche un emploi (or) je suis a la recherche d'un emploi";
    exploringDamac = " Juste j'explore";
    propertyTypePreference = "Quel type de propriété vous intvresse?";
    villaHouse = "Villa/  maison";
    apartmentFlat = "appartement/";
    bedroomCountPreference = "De combien de chambres avez-vous besoin?";
    studio = "Studio";
    oneBr = "1";
    twoBr = "2";
    threeBr = "3";
    fourPlusBr = "4+";
    budgetRangePreference = "Quel est votre budget";
    uptoOneM = "Jusqu'a 1 million d'AED";
    oneMtoTwoM = "1 million d'AED a 2 millions d'AED";
    twoMtoFiveM = "2 millions d'AED a 5 millions d'AED";
    fiveMPlus = "Au-dessus de 5 millions d'AED";
    whenToBuy = "Quand envisagez-vous d’acheter ?";
    daysThirty = "Dans 30 jours";
    daysNinety = "Dans 90 jours";
    immediately = "immediatement";
    withinThreeMonths = "Dans 3 mois";
    withinSixMonths = "Dans 6 mois";
    stillConsidering = "(Je réfléchis toujours)";
    btntext = "Cliquer ici";
    labtext = "Pour en savoir plus sur les autres propriétés DAMAC";
    contacted = "Je peux etre contacté par";
    sms = "SMS";
    whatsapp = "Whatsapp";
    preferredLanguageInput = "langue préferée";
  } else if (websiteLanguage == "SP") {
    _Translate.set("Processing...","Procesando...");
    _Translate.set("Please Fix These Errors","Solucione estos errores");
    _Translate.set("is not valid","no es válido");
    _Translate.set("is required","se requiere");
    _Translate.set("starts with @ sign","empieza con un signo @");
    _Translate.set("is missing @ sign","falta el signo @");
    _Translate.set("contains repeated dots","contiene puntos repetidos");
    _Translate.set("starts with a dot","empieza con un punto");
    _Translate.set("domain is missing","falta el dominio");
    _Translate.set("domain starts with a dot","el dominio empieza con un punto");
    _Translate.set("domain is not valid","el domino no es válido");
    _Translate.set("domain ends with a dot","el dominio termina con un punto");
    phoneInput = "Teléfono";
    titleInput = "Tratamiento";
    firstNameInput = "Nombre";
    lastNameInput = "Apellido";
    emailInput = "Correo electrónico";
    mrInput = "Sr.";
    msInput = "Srta.";
    mrsInput = "Sra.";
    newsInput = "Me gustaría recibir noticias y ofertas";
    privacyInput = "He leído y acepto la Política de privacidad";
    phoneError = "Escriba un número de teléfono válido";
    emailError = "Escriba un correo electrónico válido";
    newsAndOffers = "Noticias y Ofertas";
    acceptPrivacyPolicy = "Aceptar Política de Privacidad";
    lookingTo = "Desea";
    areYouLookingTo = "Desea"; //add to other languages as well if needed
    findAJob = "Trabajar en DAMAC"; //add to other languages as well
    invest = "Invertir";
    buyaHome = "Comprar un inmueble";
    workAtDamac = "Trabajar en DAMAC";
    iAmAJobSeeker = "Encontrar un trabajo";
    exploringDamac = "Solo estoy explorando";
    propertyTypePreference = "¿Qué tipo de inmueble le interesa?";
    villaHouse = "Villa/chalet";
    apartmentFlat = "Piso/apartamento";
    bedroomCountPreference = "¿Cuántas habitaciones necesita?";
    studio = "Estudio";
    oneBr = "1";
    twoBr = "2";
    threeBr = "3";
    fourPlusBr = "4+";
    budgetRangePreference = "¿Cuál es su presupuesto?";
    uptoOneM = "Hasta 1 millón de AED";
    oneMtoTwoM = "Entre 1 y 2 millones de AED";
    twoMtoFiveM = "Entre 2 y 5 millones de AED";
    fiveMPlus = "Más de 5 millones de AED";
    whenToBuy = "¿Cuándo piensa hacer la compra?";
    daysThirty = "En un plazo de 30 días";
    daysNinety = "En un plazo de 90 días";
    immediately = "Inmediatamente";
    withinThreeMonths = "En 3 meses";
    withinSixMonths = "En 6 meses";
    stillConsidering = "Todavía estoy pensándomelo";
    btntext = "HAGA CLIC AQUÍ";
    labtext = "Para obtener más información sobre otras propiedades DAMAC";
    contacted = "Pueden contactar conmigo por";
    sms = "SMS";
    whatsapp = "WhatsApp";
    preferredLanguageInput = "Idioma preferido";
  } else if (websiteLanguage == "HE") {
    _Translate.set("Processing...","מעבד...");
    _Translate.set("Please Fix These Errors","נא לתקן את השגיאות הבאות");
    _Translate.set("is not valid","לא תקין");
    _Translate.set("is required","חובה");
    _Translate.set("starts with @ sign","מתחיל בסימן @");
    _Translate.set("is missing @ sign","חסר סימן @");
    _Translate.set("contains repeated dots","מכיל מספר נקודות ברצף");
    _Translate.set("starts with a dot","מתחיל בנקודה");
    _Translate.set("domain is missing","חסר שם דומיין");
    _Translate.set("domain starts with a dot","שם הדומיין מתחיל בנקודה");
    _Translate.set("domain is not valid","שם הדומיין אינו תקין");
    _Translate.set("domain ends with a dot","שם הדומיין מסתיים בנקודה");
    phoneInput = "מכשיר טלפון";
    titleInput = "תואר";
    firstNameInput = "שם פרטי תקני";
    lastNameInput = "שם משפחה תקני";
    emailInput = "כתובת אימייל";
    mrInput = ".MR";
    msInput = ".MS";
    mrsInput = ".MRS";
    newsInput = "ברצוני לשמוע על חדשות ומבצעים";
    privacyInput = "קראתי והסכמתי למדיניות הפרטיות";
    phoneError = "נא להזין מספר טלפון תקני";
    emailError = "נא להזין כתובת אימייל תקנית";
    newsAndOffers = "חדשות ומבצעים";
    acceptPrivacyPolicy = "קבלת מדיניות הפרטיות";
    lookingTo = "האם אתם מעוניינים";
    areYouLookingTo = "האם אתם מעוניינים"; //add to other languages as well if needed
    findAJob = "לעבוד @ DAMAC"; //add to other languages as well
    invest = "להשקיע";
    buyaHome = "לרכוש בית";
    workAtDamac = "לעבוד @ DAMAC";
    iAmAJobSeeker = "אני מחפש עבודה";
    exploringDamac = "אני רק מתעניין";
    propertyTypePreference = "מה סוג הנכס שאתה מחפש?";
    villaHouse = "וילה/בית";
    apartmentFlat = "דירה";
    bedroomCountPreference = "לכמה חדרי שינה אתה זקוק?";
    studio = "דירת סטודיו";
    oneBr = "1";
    twoBr = "2";
    threeBr = "3";
    fourPlusBr = "4+";
    budgetRangePreference = "מה טווח התקציב?";
    uptoOneM = "עד מיליון דירהם";
    oneMtoTwoM = "מיליון דירהם עד 2 מיליון דירהם";
    twoMtoFiveM = "2 מיליון דירהם עד 5 מיליון דירהם";
    fiveMPlus = "יותר מ-5 מיליון דירהם";
    whenToBuy = "מתי אתם מתכננים לרכוש?";
    daysThirty = "תוך 30 יום";
    daysNinety = "תוך 90 יום";
    immediately = "באופן מיידי";
    withinThreeMonths = "תוך 3 חודשים";
    withinSixMonths = "תוך 6 חודשים";
    stillConsidering = "עדיין חושב על זה";
    btntext = "לחץ כאן";
    labtext = "למידע נוסף בנושא נכסי DAMAC";
    contacted = "ניתן ליצור איתי קשר באמצעות";
    sms = "הודעת SMS";
    whatsapp = "WhatsApp";
    preferredLanguageInput = "שפה מועדפת";
  } else if (websiteLanguage == "CH") {
    _Translate.set("Processing...","处理中...");
    _Translate.set("Please Fix These Errors","请修复这些错误");
    _Translate.set("is not valid","无效信息");
    _Translate.set("is required","必填信息");
    _Translate.set("starts with @ sign","以@符号开始");
    _Translate.set("is missing @ sign","缺少@符号");
    _Translate.set("contains repeated dots","包含重复的点");
    _Translate.set("starts with a dot","以点开始");
    _Translate.set("domain is missing","域名丢失");
    _Translate.set("domain starts with a dot","域名以点开始");
    _Translate.set("domain is not valid","域名无效");
    _Translate.set("domain ends with a dot","域名以点结尾");
    phoneInput = "電話";
    titleInput = "称谓";
    firstNameInput = "名字";
    lastNameInput = "姓氏";
    emailInput = "电子邮箱";
    mrInput = "先生";
    msInput = "小姐";
    mrsInput = "女士";
    newsInput = "我乐意接收新闻和优惠资讯";
    privacyInput = "我已阅读并同意《隐私政策》";
    phoneError = "请输入一个有效的电话号码";
    emailError = "输入有效的电子邮件";
    newsAndOffers = "最新消息和优惠";
    acceptPrivacyPolicy = "接受隐私政策";
    lookingTo = "你可希望";
    areYouLookingTo = "你可希望"; //add to other languages as well if needed
    findAJob = "加入@达马克工作"; //add to other languages as well
    invest = "投資";
    buyaHome = "置业";
    workAtDamac = "加入@达马克工作";
    iAmAJobSeeker = "找工作";
    exploringDamac = "我想了解一下基本情况";
    propertyTypePreference = "您对哪种房产感兴趣？";
    villaHouse = "别墅/房子";
    apartmentFlat = "公寓";
    bedroomCountPreference = "您需要几间卧室？";
    studio = "单身公寓";
    oneBr = "1";
    twoBr = "2";
    threeBr = "3";
    fourPlusBr = "4+";
    budgetRangePreference = "您的预算范围是多少？";
    uptoOneM = "100万迪拉姆以内";
    oneMtoTwoM = "100万迪拉姆至200万迪拉姆";
    twoMtoFiveM = "200万迪拉姆至500万迪拉姆";
    fiveMPlus = "500万迪拉姆以上";
    whenToBuy = "你打算何時購買？";
    daysThirty = "30天內";
    daysNinety = "90天內";
    immediately = "立即";
    withinThreeMonths = "3个月内";
    withinSixMonths = "6个月内";
    stillConsidering = "仍在考虑中";
    btntext = "单击此处";
    labtext = "有关其他 DAMAC 属性的详细信息";
    contacted = "可以通过以下方式联系我";
    sms = "手机短信";
    whatsapp = "WhatsApp";
    preferredLanguageInput = "首选语言";
  } else if (websiteLanguage == "IT") {
    _Translate.set("Processing...","In elaborazione...");
    _Translate.set("Please Fix These Errors","Si prega di correggere gli errori");
    _Translate.set("is not valid","non è un elemento valido");
    _Translate.set("is required","è un elemento richiesto");
    _Translate.set("starts with @ sign","inizia con il simbolo @");
    _Translate.set("is missing @ sign","non contiene il simbolo @");
    _Translate.set("contains repeated dots","contiene più punti consecutivi");
    _Translate.set("starts with a dot","inizia con un punto");
    _Translate.set("domain is missing","non contiene il dominio");
    _Translate.set("domain starts with a dot","il dominio inizia con un punto");
    _Translate.set("domain is not valid","il dominio non è valido");
    _Translate.set("domain ends with a dot","il dominio termina con un punto");
    phoneInput = "Telefono";
    titleInput = "Titolo";
    firstNameInput = "Nome";
    lastNameInput = "Cognome";
    emailInput = "E-mail";
    mrInput = "Sig";
    msInput = "Sig.ra";
    mrsInput = "Sig.na";
    newsInput = "Vorrei ricevere aggiornamenti e offerte";
    privacyInput = "Ho letto e accetto l'Informativa sulla Privacy";
    phoneError = "Si prega di inserire un numero di telefono valido";
    emailError = "Inserire un indirizzo email valido";
    newsAndOffers = "Aggiornamenti e offerte";
    acceptPrivacyPolicy = "Accettare l'Informativa sulla Privacy";
    lookingTo = "Vorresti";
    areYouLookingTo = "Vorresti"; //add to other languages as well if needed
    findAJob = "Lavorare a @ DAMAC"; //add to other languages as well
    invest = "Investire";
    buyaHome = "Acquistare una casa";
    workAtDamac = "Lavorare a @ DAMAC";
    iAmAJobSeeker = "Cerco lavoro";
    exploringDamac = "Mi sto solo informando";
    propertyTypePreference = "Che genere di proprietà ti interessa?";
    villaHouse = "Villa/Casa";
    apartmentFlat = "Appartamento";
    bedroomCountPreference = "Quante camere da letto ti servono?";
    studio = "Studio";
    oneBr = "1";
    twoBr = "2";
    threeBr = "3";
    fourPlusBr = "4+";
    budgetRangePreference = "Qual è il tuo budget?";
    uptoOneM = "Fino a 1 milione di AED";
    oneMtoTwoM = "Da 1 a 2 milioni di AED";
    twoMtoFiveM = "Da 2 a 5 milioni di AED";
    fiveMPlus = "Oltre 5 milioni di AED";
    whenToBuy = "Quando vorresti effettuare l'acquisto?";
    daysThirty = "Entro 30 giorni";
    daysNinety = "Entro 90 giorni";
    immediately = "Subito";
    withinThreeMonths = "Fra 3 mesi";
    withinSixMonths = "Fra 6 mesi";
    stillConsidering = "Ci sto ancora pensando";
    btntext = "Clicca qui";
    labtext = "Per saperne di più sugli altri immobili DAMAC";
    contacted = "Contattatemi via";
    sms = "SMS";
    whatsapp = "WhatsApp";
    preferredLanguageInput = "Lingua di preferenza";
  } else if (websiteLanguage == "RU") {
    _Translate.set("Processing...","В обработке...");
    _Translate.set("Please Fix These Errors","Исправьте эти ошибки");
    _Translate.set("is not valid","Данные недействительны");
    _Translate.set("is required","Необходимо указать данные");
    _Translate.set("starts with @ sign","начинается со знака @");
    _Translate.set("is missing @ sign","не содержит знака @");
    _Translate.set("contains repeated dots","содержит лишние точки");
    _Translate.set("starts with a dot","начинается с точки");
    _Translate.set("domain is missing","домен не указан");
    _Translate.set("domain starts with a dot","точка в начале названия домена");
    _Translate.set("domain is not valid","домен недействителен");
    _Translate.set("domain ends with a dot","точка в конце названия домена");
    phoneInput = "номер телефона";
    titleInput = "Форма обращения";
    firstNameInput = "Имя";
    lastNameInput = "Фамилия";
    emailInput = "Адрес электронной почты";
    mrInput = "Г-н";
    msInput = "Г-жа";
    mrsInput = "Г-жа";
    newsInput = "Я хочу получать новости и предложения";
    privacyInput = "Я принимаю условия политики конфиденциальности";
    phoneError = "Введите действительный номер телефона";
    emailError = "Введите действительный адрес эл. почты";
    newsAndOffers = "Новости и предложения";
    acceptPrivacyPolicy = "Примите условия Политики конфиденциальности";
    lookingTo = "Что вас интересует";
    areYouLookingTo = "Что вас интересует"; //add to other languages as well if needed
    findAJob = "Работа в DAMAC"; //add to other languages as well
    invest = "Инвестиции";
    buyaHome = "Покупка недвижимости";
    workAtDamac = "Работа в DAMAC";
    iAmAJobSeeker = "Я ищу работу";
    exploringDamac = "Я просто изучаю";
    propertyTypePreference = "Какой тип недвижимости вас интересует?";
    villaHouse = "Вилла/дом";
    apartmentFlat = "Квартира/апартаменты";
    bedroomCountPreference = "Сколько спален вам нужно?";
    studio = "Студия";
    oneBr = "1";
    twoBr = "2";
    threeBr = "3";
    fourPlusBr = "4+";
    budgetRangePreference = "Каков ваш бюджет?";
    uptoOneM = "До 1 млн дирхамов";
    oneMtoTwoM = "От 1 до 2 млн дирхамов";
    twoMtoFiveM = "От 2 до 5 млн дирхамов";
    fiveMPlus = "Свыше 5 млн дирхамов";
    whenToBuy = "Когда вы планируете сделать покупку?";
    daysThirty = "В течение 30 дней";
    daysNinety = "В течение 90 дней";
    immediately = "Немедленно";
    withinThreeMonths = "В течение 3 месяцев";
    withinSixMonths = "В течение 6 месяцев";
    stillConsidering = "Пока рассматриваю";
    btntext = "Нажмите здесь";
    labtext = "Подробнее о других объектах DAMAC Properties";
    contacted = "Как со мной связаться:";
    sms = "SMS";
    whatsapp = "WhatsApp";
    preferredLanguageInput = "Предпочитаемый язык";
  } else if (websiteLanguage == "GK") {
    _Translate.set("Processing...","Γίνεται επεξεργασία...");
    _Translate.set("Please Fix These Errors","Διορθώστε αυτά τα σφάλματα");
    _Translate.set("is not valid","δεν είναι έγκυρο");
    _Translate.set("is required","είναι υποχρεωτικό");
    _Translate.set("starts with @ sign","ξεκινά με το σύμβολο @");
    _Translate.set("is missing @ sign","λείπει το σύμβολο @");
    _Translate.set("contains repeated dots","περιέχει επαναλαμβανόμενες τελείες");
    _Translate.set("starts with a dot","ξεκινά με μια τελεία");
    _Translate.set("domain is missing","λείπει το domain");
    _Translate.set("domain starts with a dot","το domain ξεκινά με τελεία");
    _Translate.set("domain is not valid","το domain δεν είναι έγκυρο");
    _Translate.set("domain ends with a dot","το domain τελειώνει με τελεία");
    phoneInput = "Τηλέφωνο";
    titleInput = "Τίτλος";
    firstNameInput = "Όνομα";
    lastNameInput = "Επώνυμο";
    emailInput = "Email";
    mrInput = "Κος.";
    msInput = "Δις.";
    mrsInput = "Κα.";
    newsInput = "Θέλω να μαθαίνω για τα νέα και τις προσφορές";
    privacyInput = "Έχω διαβάσει και συμφωνώ με την Πολιτική απορρήτου";
    phoneError = "Εισαγάγετε έγκυρο αριθμό τηλεφώνου";
    emailError = "Εισαγάγετε έγκυρο email";
    newsAndOffers = "Νέα και προσφορές";
    acceptPrivacyPolicy = "Αποδοχή Πολιτικής απορρήτου";
    lookingTo = "Τι θα θέλατε να κάνετε σήμερα;";
    areYouLookingTo = "Τι θα θέλατε να κάνετε σήμερα;"; //add to other languages as well if needed
    findAJob = "Εργασία @ DAMAC"; //add to other languages as well
    invest = "Επένδυση";
    buyaHome = "Αγορά σπιτιού";
    workAtDamac = "Εργασία @ DAMAC";
    iAmAJobSeeker = "Αναζητώ εργασία";
    exploringDamac = "Απλώς κοιτάω";
    propertyTypePreference = "Για τι είδους ακίνητο ενδιαφέρεστε;";
    villaHouse = "Βίλα / Σπίτι";
    apartmentFlat = "Διαμέρισμα";
    bedroomCountPreference = "Πόσες κρεβατοκάμαρες χρειάζεστε;";
    studio = "Στούντιο";
    oneBr = "1";
    twoBr = "2";
    threeBr = "3";
    fourPlusBr = "4+";
    budgetRangePreference = "Ποιο είναι το εύρος του προϋπολογισμού σας;";
    uptoOneM = "Έως 1 εκατ. Ντιράμ Ηνωμένων Αραβικών Εμιράτων";
    oneMtoTwoM = "1 εκατ. έως 2 εκατ. Ντιράμ Ηνωμένων Αραβικών Εμιράτων";
    twoMtoFiveM = "2 εκατ. έως 5 εκατ. Ντιράμ Ηνωμένων Αραβικών Εμιράτων";
    fiveMPlus = "Πάνω από 5 εκατ. Ντιράμ Ηνωμένων Αραβικών Εμιράτων";
    whenToBuy = "Πότε σκοπεύετε να κάνετε την αγορά;";
    daysThirty = "Εντός 30 ημερών";
    daysNinety = "Εντός 90 ημερών";
    immediately = "Άμεσα";
    withinThreeMonths = "Εντός 3 μηνών";
    withinSixMonths = "Εντός 6 μηνών";
    stillConsidering = "Δεν έχω αποφασίσει ακόμη";
    btntext = "Κάντε κλικ εδώ";
    labtext = "Για περισσότερες πληροφορίες σχετικά με άλλα καταλύματα DAMAC";
    contacted = "Μπορείτε να επικοινωνήσετε μαζί μου μέσω";
    sms = "SMS";
    whatsapp = "WhatsApp";
    preferredLanguageInput = "Προτιμώμενη γλώσσα";
  } else if (websiteLanguage == "GR") {
    _Translate.set("Processing...","Verarbeitung läuft...");
    _Translate.set("Please Fix These Errors","Bitte beheben Sie diese Fehler");
    _Translate.set("is not valid","ist ungültig");
    _Translate.set("is required","ist erforderlich");
    _Translate.set("starts with @ sign","beginnt mit @-Zeichen");
    _Translate.set("is missing @ sign","@-Zeichen fehlt");
    _Translate.set("contains repeated dots","enthält wiederholte Punkte");
    _Translate.set("starts with a dot","beginnt mit einem Punkt");
    _Translate.set("domain is missing","Domain fehlt");
    _Translate.set("domain starts with a dot","Domain beginnt mit einem Punkt");
    _Translate.set("domain is not valid","Domain ist ungültig");
    _Translate.set("domain ends with a dot","Domain endet mit einem Punkt");
    phoneInput = "Telefonnummer";
    titleInput = "Anrede";
    firstNameInput = "Vorname";
    lastNameInput = "Nachname";
    emailInput = "E-Mail";
    mrInput = "Herr";
    msInput = "Frau";
    mrsInput = "Fräulein";
    newsInput = "Ich möchte über Neuigkeiten und Angebote informiert werden";
    privacyInput = "Ich habe die Datenschutzbestimmungen gelesen und stimme ihnen zu";
    phoneError = "Bitte geben Sie eine gültige Telefonnummer ein";
    emailError = "Bitte geben Sie eine gültige E-Mail-Adresse ein";
    newsAndOffers = "Neuigkeiten und Angebote";
    acceptPrivacyPolicy = "Akzeptieren Datenschutzbestimmungen";
    lookingTo = "Wollen Sie";
    areYouLookingTo = "Wollen Sie"; //add to other languages as well if needed
    findAJob = "Bei @ DAMAC arbeiten"; //add to other languages as well
    invest = "investieren";
    buyaHome = "ein Zuhause kaufen";
    workAtDamac = "Bei @ DAMAC arbeiten";
    iAmAJobSeeker = "Ich bin auf Arbeitssuche";
    exploringDamac = "Ich bin auf der Suche";
    propertyTypePreference = "Für welche Art von Immobilie interessieren Sie sich?";
    villaHouse = "Villa/Haus";
    apartmentFlat = "Appartement/Wohnung";
    bedroomCountPreference = "Wie viele Schlafzimmer benötigen Sie?";
    studio = "Studio";
    oneBr = "1";
    twoBr = "2";
    threeBr = "3";
    fourPlusBr = "4+";
    budgetRangePreference = "Wie hoch ist Ihr Budget?";
    uptoOneM = "Bis zu AED 1 Mio.";
    oneMtoTwoM = "AED 1 Mio. - 2 Mio.";
    twoMtoFiveM = "AED 2 Mio. - 5 Mio.";
    fiveMPlus = "Mehr als AED 5 Mio.";
    whenToBuy = "Wann möchten Sie kaufen?";
    daysThirty = "Inerhalb kommenden 30 Tage";
    daysNinety = "Inerhalb kommenden 90 Tage";
    immediately = "Sofort";
    withinThreeMonths = "Inerhalb von 3 Monaten";
    withinSixMonths = "Inerhalb von 6 Monaten";
    stillConsidering = "Bin noch am überlegen";
    btntext = "Hier klicken";
    labtext = "Hier finden Sie weitere Infos zu Immobilien von DAMAC";
    contacted = "Man kann mich kontaktieren via";
    sms = "SMS";
    whatsapp = "WhatsApp";
    preferredLanguageInput = "Bevorzugte Sprache";
  } else if (websiteLanguage == "NL") {
    _Translate.set("Processing...","Verwerken...");
    _Translate.set("Please Fix These Errors","Corrigeer deze fouten a.u.b.");
    _Translate.set("is not valid","is niet geldig");
    _Translate.set("is required","Is benodigd");
    _Translate.set("starts with @ sign","begint met @-teken");
    _Translate.set("is missing @ sign","ontbreekt @-teken");
    _Translate.set("contains repeated dots","bevat herhaalde punten");
    _Translate.set("starts with a dot","begint met een punt");
    _Translate.set("domain is missing","domein ontbreekt");
    _Translate.set("domain starts with a dot","domein begint met een punt");
    _Translate.set("domain is not valid","domein is niet geldig");
    _Translate.set("domain ends with a dot","domein eindigt op een punt");
    phoneInput = "Telefoonnummer";
    titleInput = "Aanhef";
    firstNameInput = "Voornaam";
    lastNameInput = "Achternaam";
    emailInput = "E-mailadres";
    mrInput = "Dhr.";
    msInput = "Mevr.";
    mrsInput = "Mevr.";
    newsInput = "Ik wil graag nieuws en aanbiedingen horen";
    privacyInput = "Ik heb het privacybeleid gelezen en ga ermee akkoord";
    phoneError = "Voer alstublieft een geldig telefoonnummer in";
    emailError = "Voer een geldig e-mailadres in";
    newsAndOffers = "News And Offers";
    acceptPrivacyPolicy = "Accept Privacy Policy";
    lookingTo = "Wilt u graag";
    areYouLookingTo = "Wilt u graag"; //add to other languages as well if needed
    findAJob = "Werk @ DAMAC"; //add to other languages as well
    invest = "Investeren";
    buyaHome = "Een huis kopen";
    workAtDamac = "Werk @ DAMAC";
    iAmAJobSeeker = "Ik zoek een baan";
    exploringDamac = "Ik kijk alleen even rond";
    propertyTypePreference = "Naar welk type woning ben je op zoek?";
    villaHouse = "Villa/huis";
    apartmentFlat = "Appartement/flat";
    bedroomCountPreference = "Hoeveel slaapkamers moeten er zijn?";
    studio = "Studio";
    oneBr = "1";
    twoBr = "2";
    threeBr = "3";
    fourPlusBr = "4+";
    budgetRangePreference = "Wat is je budget?";
    uptoOneM = "Tot 1 miljoen AED";
    oneMtoTwoM = "Tussen 1 en 2 miljoen AED";
    twoMtoFiveM = "Tussen 2 en 5 miljoen AED";
    fiveMPlus = "Meer dan 5 miljoen AED";
    whenToBuy = "Wanneer bent u van plan te kopen?";
    daysThirty = "In 30 dagen";
    daysNinety = "Binnen 90 dagen";
    immediately = "Per direct";
    withinThreeMonths = "Binnen 3 maanden";
    withinSixMonths = "Binnen 6 maanden";
    stillConsidering = "Weet het nog niet";
    btntext = "KLIK HIER";
    labtext = "Voor meer informatie over andere DAMAC-eigenschappen";
    contacted = "Ik ben bereikbaar via";
    sms = "SMS";
    whatsapp = "WhatsApp";
    preferredLanguageInput = "Voorkeurstaal";
  } else if (websiteLanguage == "RO") {
    _Translate.set("Processing...","Se procesează…...");
    _Translate.set("Please Fix These Errors","Vă rugăm să remediați aceste erori");
    _Translate.set("is not valid","nu este valid");
    _Translate.set("is required","este obligatoriu");
    _Translate.set("starts with @ sign","începe cu semnul @");
    _Translate.set("is missing @ sign","semnul @ lipsește");
    _Translate.set("contains repeated dots","conține puncte repetate");
    _Translate.set("starts with a dot","începe cu un punct");
    _Translate.set("domain is missing","lipsește domeniul");
    _Translate.set("domain starts with a dot","domeniul începe cu un punct");
    _Translate.set("domain is not valid","domeniul nu este valid");
    _Translate.set("domain ends with a dot","domeniul se încheie cu un punct");
    phoneInput = "De telefon";
    titleInput = "Selectați o titulatură";
    firstNameInput = "Prenume";
    lastNameInput = "Nume de familie";
    emailInput = "Adresă de e-mail";
    mrInput = "Dl";
    msInput = "Dna";
    mrsInput = "Dra";
    newsInput = "Doresc să primesc noutăți și oferte";
    privacyInput = "Am citit și sunt de acord cu Politica de confidențialitate";
    phoneError = "Introduceți un număr de telefon valid";
    emailError = "Introduceți o adresă de e-mail validă";
    newsAndOffers = "Noutăți și oferte";
    acceptPrivacyPolicy = "Accept Politica de confidențialitate";
    lookingTo = "Vă interesează";
    areYouLookingTo = "Vă interesează"; //add to other languages as well if needed
    findAJob = "Să lucrați la DAMAC"; //add to other languages as well
    invest = "Să investiți";
    buyaHome = "Să cumpărați o casă";
    workAtDamac = "Să lucrați la DAMAC";
    iAmAJobSeeker = "Caut un loc de muncă";
    exploringDamac = "Doar explorez";
    propertyTypePreference = "Ce tip de proprietate vă interesează?";
    villaHouse = "Vilă/Casă";
    apartmentFlat = "Apartament";
    bedroomCountPreference = "De câte dormitoare aveți nevoie?";
    studio = "Studio";
    oneBr = "1";
    twoBr = "2";
    threeBr = "3";
    fourPlusBr = "4+";
    budgetRangePreference = "Care este intervalul în care se încadrează bugetul dvs.?";
    uptoOneM = "Până la 1 milion AED";
    oneMtoTwoM = "Între 1 milion AED și 2 milioane AED";
    twoMtoFiveM = "Între 2 milioane AED și 5 milioane AED";
    fiveMPlus = "Peste 5 milioane AED";
    whenToBuy = "Când intenționați să cumpărați?";
    daysThirty = "În următoarele 30 de zile";
    daysNinety = "În următoarele 90 de zile";
    immediately = "Imediat";
    withinThreeMonths = "În 3 luni";
    withinSixMonths = "În 6 luni";
    stillConsidering = "Încă mă gândesc";
    btntext = "APĂSAȚI AICI";
    labtext = "Pentru mai multe informații despre DAMAC Properties";
    contacted = "Mă puteți contactata prin";
    sms = "SMS";
    whatsapp = "WhatsApp";
    preferredLanguageInput = "Limbă preferată";
  } else if (websiteLanguage == "TR") { //TURKISH
    _Translate.set("Processing...","İşleniyor...");
    _Translate.set("Please Fix These Errors","Lütfen Bu Hataları Düzeltin");
    _Translate.set("is not valid","geçerli değil");
    _Translate.set("is required","gerekli");
    _Translate.set("starts with @ sign","@ işareti ile başlıyor");
    _Translate.set("is missing @ sign","@ işareti eksik");
    _Translate.set("contains repeated dots","yinelenen noktalar içeriyor");
    _Translate.set("starts with a dot","bir nokta ile başlıyor");
    _Translate.set("domain is missing","etki alanı eksik");
    _Translate.set("domain starts with a dot","etki alanı bir nokta ile başlıyor");
    _Translate.set("domain is not valid","etki alanı geçerli değil");
    _Translate.set("domain ends with a dot","etki alanı bir nokta ile bitiyor");
    phoneInput = "Telefon";
    titleInput = "Ünvan";
    firstNameInput = "Ad";
    lastNameInput = "Soyadı";
    emailInput = "E-posta";
    mrInput = "Bay";
    msInput = "Bayan";
    mrsInput = "Bayan";
    newsInput = "Haberler ve teklifler hakkında bilgi almak istiyorum";
    privacyInput = "Gizlilik Politikasını okudum ve kabul ediyorum";
    phoneError = "Lütfen geçerli bir telefon numarası girin";
    emailError = "Geçerli bir e-posta adresi girin";
    newsAndOffers = "Haberler ve Teklifler";
    acceptPrivacyPolicy = "Gizlilik Politikasını Kabul Et";
    lookingTo = "Bugün ne yapmak istiyorsunuz?";
    areYouLookingTo = "Bugün ne yapmak istiyorsunuz?"; //add to other languages as well if needed
    findAJob = "DAMAC ile çalışmak"; //add to other languages as well
    invest = "Yatırım yapmak";
    buyaHome = "Ev satın almak";
    workAtDamac = "DAMAC ile çalışmak";
    iAmAJobSeeker = "İş arıyorum";
    exploringDamac = "Yalnızca araştırma yapıyorum";
    propertyTypePreference = "Ne tür bir gayrimenkulle ilgileniyorsunuz?";
    villaHouse = "Villa/Ev";
    apartmentFlat = "Daire";
    bedroomCountPreference = "Kaç yatak odasına ihtiyacınız var?";
    studio = "Stüdyo";
    oneBr = "1";
    twoBr = "2";
    threeBr = "3";
    fourPlusBr = "4+";
    budgetRangePreference = "Bütçe aralığınız nedir?";
    uptoOneM = "1 M BAE dirhemine kadar";
    oneMtoTwoM = "1 M ila 2 M BAE dirhemi";
    twoMtoFiveM = "2 M ila 5 M BAE dirhemi";
    fiveMPlus = "5 M BAE dirheminden fazla";
    whenToBuy = "Satın alma işlemini ne zaman gerçekleştirmeyi planlıyorsunuz?";
    daysThirty = "30 gün içinde";
    daysNinety = "90 gün içinde";
    immediately = "Hemen";
    withinThreeMonths = "3 ay içinde";
    withinSixMonths = "6 ay içinde";
    stillConsidering = "Hâlâ düşünüyorum";
    btntext = "BURAYA TIKLAYIN";
    labtext = "Diğer DAMAC Gayrimenkulleri hakkında daha fazla bilgi için";
    contacted = "Bana ulaşılmasını istediğim kanal";
    sms = "SMS";
    whatsapp = "WhatsApp";
    preferredLanguageInput = "Tercih Edilen Dil";
  } else {
    _Translate.set("Processing...", "Processing...");
    _Translate.set("Please Fix These Errors", "Please Fix These Errors");
    _Translate.set("is not valid", "is not valid");
    _Translate.set("is required", "is required");
    _Translate.set("starts with @ sign", "starts with @ sign");
    _Translate.set("is missing @ sign", "is missing @ sign");
    _Translate.set("contains repeated dots", "contains repeated dots");
    _Translate.set("starts with a dot", "starts with a dot");
    _Translate.set("domain is missing", "domain is missing");
    _Translate.set("domain starts with a dot", "domain starts with a dot");
    _Translate.set("domain is not valid", "domain is not valid");
    _Translate.set("domain ends with a dot", "domain ends with a dot");
    phoneInput = "Phone";
    titleInput = "Title";
    firstNameInput = "First Name";
    lastNameInput = "Last Name";
    emailInput = "Email";
    mrInput = "Mr.";
    msInput = "Ms.";
    mrsInput = "Mrs.";
    newsInput = "Iâ€™d like to hear about news and offers";
    privacyInput = "Iâ€™ve read and agreed to the Privacy Policy";
    phoneError = "Please enter a valid Phone number";
    emailError = "EnterÂ aÂ validÂ email";
    newsAndOffers = "News And Offers";
    acceptPrivacyPolicy = "Accept Privacy Policy";
    lookingTo = "What are you looking to do today?";
    areYouLookingTo = "What are you looking to do today?"; //add to other languages as well if needed
    findAJob = "Work @ DAMAC"; //add to other languages as well
    invest = "Invest in real estate";
    buyaHome = "Buy a home";
    workAtDamac = "Work @ DAMAC";
    iAmAJobSeeker = "I am a job seeker";
    exploringDamac = "I am just exploring";
    propertyTypePreference = "What kind of property interests you?";
    villaHouse = "Villa/House";
    apartmentFlat = "Apartment/Flat";

    bedroomCountPreference = "How many bedrooms do you need?";
    studio = "Studio";
    oneBr = "1";
    twoBr = "2";
    threeBr = "3";
    fourPlusBr = "4+";
    budgetRangePreference = "What is your budget range?";
    uptoOneM = "Up to AED 1M";
    oneMtoTwoM = "AED 1M to AED 2M";
    twoMtoFiveM = "AED 2M to AED 5M";
    fiveMPlus = "Above AED 5M";

    whenToBuy = "When are you planning to make your purchase?";
    daysThirty = "Within 30 days";
    daysNinety = "Within 90 days";
    immediately = "Immediately";
    withinThreeMonths = "Within 3 Months";
    withinSixMonths = "Within 6 Months";
    stillConsidering = "Still considering";

    btntext = "CLICK HERE";
    labtext = "For more on other DAMAC Properties";
    contacted = "I can be contacted via";
    sms = "SMS";
    whatsapp = "WhatsApp";
    preferredLanguageInput = "Preferred Language";
  }

  //console.log("firstNameInput..", firstNameInput, lastNameInput);
  let fieldsNoNumbers = [firstNameInput, lastNameInput];
  var modstring = "";
  try {
    var lqid = getLQIdfromQueryString();
    //const response = await getLQSData(lqid);
    modstring =
      "&" +
      "moTitle=" +
      response.resp[0].title__c +
      "&FirstName=" +
      response.resp[0].first_name__c +
      "&LastName=" +
      response.resp[0].last_name__c +
      "&Email=" +
      response.resp[0].email__c;
  } catch (error) {
    modstring = "";
  }
  //checking params
    var lf = location.href.split("?").pop() + modstring;
    
    var query = lf.split("&");
    var len = query.length;
  var split, elem;

  $('input[type="text"]').each(function () {
    if (fieldsNoNumbers.includes($(this).attr("name"))) {
      $(this)[0].onkeypress = function (e) {
        e = e || window.event;
        var charCode = typeof e.which == "undefined" ? e.keyCode : e.which;
        regSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0-9]/;
        if (regSpecialChar.test(e.key)) {
          return false;
        }
        // Limit the length of the input value to 50 characters - Azure Bug ID # 73018
        if ($(this).val().length == 50) {
          e.preventDefault()
        }
      };
    }
  });
  $('input[type="email"]').each(function () {
    $(this)[0].onkeydown = function (e) {
      e = e || window.event;
      // Check if the pressed key is space (key code 32) - Azure Bug ID # 73029
      if (e.keyCode === 32) {
          e.preventDefault();
          return;
      }
      // Limit the length of the input value to 50 characters - Azure Bug ID # 73018
      if ($(this).val().length == 50) {
        e.preventDefault()
      }
    };
    $(this)[0].onkeyup = function (e) {
      e = e || window.event;
      $(this).val($(this).val().toLocaleLowerCase());
    };
  });

  for (var i = 0; i < len; i++) {
    split = query[i].split("=");
    $("form")
      .find('input[name="' + split[0] + '"]')
      .each(function () {
        $(this).val(split[1].replace(/"/g, '\\"'));
      });
  }
  $('input[name="' + phoneInput + '"]').each(function () {
    $(this)[0].onkeypress = function (e) {
      e = e || window.event;
      var charCode = typeof e.which == "undefined" ? e.keyCode : e.which;
      if (charCode != 8 && charCode != 0 && (charCode < 48 || charCode > 57)) {
        return false;
      }
    };
  });


filldropdowns();
});



// window.addEventListener("DOMContentLoaded", function () {
//   if (window.__featuresReady && window.__featuresReady.indexOf("Form") > -1) {
//     alterFormHandler();
//   } else {
//     // handle event
//     window.__eventBus.on("featureReady", function (feature) {
//       if (feature === "Form") {
//         alterFormHandler();
//       }
//     });
//   }

//   function alterFormHandler() {
//     //phone field name
//     // var field = "Phone";
//     var field = phoneInput;
//     var telInput = document.querySelectorAll(`form input[name='${field}']`);

//     //init phone number plugin
//     var iti = [];

//     // var digitArray = /^\d{1,10}$/g;
//     [].forEach.call(telInput, function (div, index) {
//       // do whatever
//       div.setAttribute("type", "tel");
//       iti?.push(
//         window.intlTelInput(div, {
//           initialCountry: "auto",
//           preferredCountries: ["ae", "gb", "in", "sa", "qa", "pk"],
//           loadUtilsOnInit: "https://cdn.jsdelivr.net/npm/intl-tel-input@24.6.0/build/js/utils.js",
//           geoIpLookup: function (callback) {
//             requestUrl =
//               "https://api.ipapi.com/check?access_key=229c548dcafb9cff13041d9544ac60af";
//             $.ajax({
//               url: requestUrl,
//               type: "GET",
//               success: function (json) {
//                 $("input[name='countryCodeSync']").val(json.country_code);
//                 $("input[name='city']").val(json.city);
//                 $("input[name='citySync']").val(json.city);
//                 $("input[name='countryNameSync']").val(json.country_name);
//                 $("input[name='country']").val(json.country_name);
//                 $("input[name='countryCode']").val(json.country_name);
//                 $("input[name='ipAddress']").val(json.ip);
//                 callback(json.country_code);
//               },
//               error: function (err) {
//                 //console.log("Request failed, error= " + err);
//               },
//             });
//           },
//           //utilsScript: "https://damac-landing-pages.s3.eu-west-1.amazonaws.com/instapage/js/utils.js",
//           // nationalMode: false,
//           separateDialCode: true,
//           placeholderNumberType: "MOBILE",
//           autoPlaceholder: "polite",
//           // any initialisation options go here
//         }),
//       );
//       var formId = $(div).parents("form").attr("data-id");
//       //var fieldLabel = 'Phone';
//       var fieldLabel = phoneInput;
//       var errorMessage = `: ${phoneError}`;
//       var digitArray = /^\d{1,10}$/g;
//       var validator = window.__validators[formId];

//       validator.addConstraint(fieldLabel, function (input) {
//         return {
//           // isValid: input.value.match(digitArray),
//           isValid: iti[index].isValidNumber(),
//           message: window._Translate.get(errorMessage),
//         };
//       });
//     });
//     //form logic
//     var form = document.querySelectorAll("form.email-form");
//     // const formValid = instapageForm(document.querySelectorAll('form.email-form'));

//     [].forEach.call(form, function (forms, index) {
//       // //console.log(forms);
//       let formValid = instapageForm(forms);
//       var handler = forms.onsubmit;
//       forms.onsubmit = function (e) {
//         e.preventDefault();
        
//         code = $(this)
//           .find(".iti__selected-dial-code")
//           .text()
//           .replace("+", "00");

//         var selectedCountryName = iti[index].getSelectedCountryData().name
        
//         var selectedData = iti[index]
//           .getSelectedCountryData()
//           .name.replace(/ *\([^)]*\) */g, "");

//         $("input[name='countryCode']").val(retrieveCountry(selectedCountryName)?.sendAs?.countryCode);
//         $("input[name='country']").val(decodeURIComponent(retrieveCountry(selectedCountryName)?.sendAs?.country));
        
//         var data = getFormData($(forms));
        
//         // //console.log("data....",data)
//         let fullName = $(`input[name='Full Name']`).val();
//         //console.log("fullName...", fullName);
//         if (fullName == "" || fullName == undefined) {
//         } else {
//           fullName = fullName.trim();
//           const elements = fullName.split(" ");
//           data.firstName = elements[0];
//           elements.shift();
//           var x = elements.join(" ");
//           var newVal = elements.length > 0 ? x : "noLastName";
//           data.lastName = newVal;
//         }

//         //Removing leading and trailing spaces from firstname and lastname (if it exists) in the payload value - Azure Bug ID # 73022
//         data.firstName = data.firstName.trim()
//         data.lastName = data.lastName.trim()

//         //Removing non numerical characters from phone number (if it exisits) in the payload value - Azure Bug ID # 73114
//         const allowedChars = ['0','1','2','3','4','5','6','7','8','9']
//         const givenChars = Array.from(data.phoneNumber)
//         const filteredChars = givenChars.filter(obj => allowedChars.includes(obj))
//         const transformedNumber = filteredChars.join('') //This is good for the payload
//         data.phoneNumber = transformedNumber

//       };
//     });
//   }
// });

// function getFormData($form) {
//   var unindexed_array = $form.serializeArray();
//   var indexed_array = {};
//   $.map(unindexed_array, function (n, i) {
//     if (n["name"] === firstNameInput) {
//       n["name"] = "firstName";
//     }
//     if (n["name"] === lastNameInput) {
//       n["name"] = "lastName";
//     }
//     if (n["name"] === emailInput) {
//       n["name"] = "email";
//     }

//     //New function to tackle scenario where user manually types the country code along with the phone number.
//     function stripPrefix(prefix, str) {
//       let selectedCode = prefix.replace(/\+/g, '00') //Replace any '+' with '00'
//       let givenPhone = str.replace(/\+/g, '00') //Replace any '+' with '00'
//       if (givenPhone.startsWith(selectedCode)) {
//           return givenPhone.slice(selectedCode.length);
//       } else {
//           return str;
//       }
//     }

//     if (n["name"] === phoneInput) {
//       n["name"] = "phoneNumber";
//       n.value = stripPrefix(code, n.value?.replaceAll(' ', ''))
//     }
//     if (n["name"] === titleInput) {
//       n["name"] = "title";

//       if (n["value"] === mrInput) {
//         n.value = "MR.";
//       }
//       if (n["value"] === msInput) {
//         n.value = "MS.";
//       }
//       if (n["value"] === mrsInput) {
//         n.value = "MRS.";
//       }
//     }

//     indexed_array[n["name"]] = n["value"];
//   });
 

//   console.log('indexed_array...', indexed_array)
//   return indexed_array;
// }

window.__custom_form_validations = [
  {
    fieldName: emailInput,
    validationFn: function (input) {
      var dateRegex =
        /^([0-9]{1,1}[_.-]*)*[a-z]+[._-]*[0-9]*[a-z0-9._-]*@[a-z0-9.-]+\.[a-z]{2,4}$/;
      var emailErrorMessage = `: ${emailError}`;
      return {
        isValid: dateRegex.test(input.value),
        message: window._Translate.get(emailErrorMessage),
      };
    },
  },
];

function submitUrl() {
  $(".redirect-container").hide();
  let utm = location.toString().split("?")[1];
}

function getLQIdfromQueryString() {
  var query = location.href.split("?").pop().split("&");
  var len = query.length;
  var lqid = "";
  for (var i = 0; i < len; i++) {
    split = query[i].split("=");
    split[0] == "uniqueid" ? (lqid = split[1]) : (lqui = "");
  }
  return lqid;
}

function filldropdowns(){
let titleVal = $("input[name='moTitle']").val()
//console.log('titleval...',titleVal)

var k =$("input[name='moTitle']").val();
$("select[name='"+titleInput+"'] option").filter(function() {
return $(this).val() ==k;
}).prop('selected', true);
$("select#field-741126b051b758e175dc7d616433758e-0 option").filter(function() {
return $(this).val() ==titleVal;
}).prop('selected', true);
$("select#field-5d7b0ff4610675daada3263278489d62-0 option").filter(function() {
return $(this).val() ==titleVal;
}).prop('selected', true);

}

// ======== E N D   O F   L E A D   S U B M I S S I O N   H A N D L I N G ========


{/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/intl-tel-input@24.6.0/build/css/intlTelInput.css">
<script src="https://cdn.jsdelivr.net/npm/intl-tel-input@24.6.0/build/js/intlTelInput.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/intl-tel-input@24.6.0/build/js/utils.js"></script> */}

// <script defer src="https://prod-cdn.damacproperties.com/uploads/instapages/native/js/ypoValidation.js"></script>
{/* <input type="hidden" name="countryCode" />

<script
  defer
  src="https://ijazalideveloper.github.io/damac-instapage/files/instap-updl-auth-damacair-validation.js"></script> */}