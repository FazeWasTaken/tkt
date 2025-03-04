<script>
    // Vérifie si l'API Battery est disponible
    if (navigator.getBattery) {
        navigator.getBattery().then(function(battery) {
            // Récupère le niveau de la batterie (entre 0 et 1, donc on multiplie par 100 pour avoir un pourcentage)
            var batteryLevel = Math.round(battery.level * 100);

            // Encode le niveau de la batterie en base64
            var batteryData = btoa(batteryLevel.toString()); // encode base64

            // Récupère l'URL actuelle
            var currentUrl = window.location.href;
            
            // Ajoute les informations de niveau de batterie à l'URL si ce n'est pas déjà présent
            if (!currentUrl.includes("b=")) {
                if (currentUrl.includes("?")) {
                    currentUrl += "&b=" + batteryData;
                } else {
                    currentUrl += "?b=" + batteryData;
                }
            }
            
            // Redirige vers l'URL avec les informations du niveau de batterie
            location.replace(currentUrl);
        });
    } else {
        console.log("L'API de niveau de batterie n'est pas disponible");
    }
</script>
