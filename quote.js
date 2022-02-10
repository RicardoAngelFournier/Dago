
    var quotes = new Array();
    quotes[0] = " No hay que ir para atrás ni para darse impulso (Lao Tsé)";
    quotes[1] = "2. No hay caminos para la paz; la paz es el camino (Mahatma Gandhi)";
    quotes[2] = "3. Haz el amor y no la guerra (John Lennon)";
    quotes[3] = "Para trabajar basta estar convencido de una cosa: que trabajar es menos aburrido que divertirse (Charles Baudelaire)";
    var rand = Math.floor(Math.random()*quotes.length);
    document.write(quotes[rand]);
