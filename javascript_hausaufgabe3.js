<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fahrkartenpreisrechner</title>

</head>
<body>
    <div id="container">
        <h1>Fahrkartenpreisrechner</h1>
        <label for="age">Geben Sie Ihr Alter ein:</label>
        <input type="number" id="age" min="0">
        <button onclick="calculateTicketPrice()">Berechnen</button>
        <p id="result"></p>
    </div>

    <script>
        function calculateTicketPrice() {
            var alter = parseInt(document.getElementById('age').value);
            var preiskategorie = '';

            if (alter < 6) {
                preiskategorie = 'Kostenlos';
            } else if (alter >= 6 && alter <= 17) {
                preiskategorie = 'Kind';
            } else if (alter >= 18 && alter <= 64) {
                preiskategorie = 'Erwachsener';
            } else {
                preiskategorie = 'Senior';
            }

            document.getElementById('result').innerText = 'Ihre Preiskategorie ist: ' + preiskategorie;
        }
    </script>
</body>
</html>