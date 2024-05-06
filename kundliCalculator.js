function calculateKundliScore(dateOfBirth) {
    const dob = new Date(dateOfBirth);

    const month = dob.getMonth() + 1; // Because Months are zero-indexed
    const day = dob.getDate();

    
    const zodiacSigns = [
        "Capricorn", "Aquarius", "Pisces", "Aries", 
        "Taurus", "Gemini", "Cancer", "Leo", 
        "Virgo", "Libra", "Scorpio", "Sagittarius"
    ];

    const sunSign = zodiacSigns[(month - 1) % 12];
    const moonSign = zodiacSigns[(day - 1) % 12];


    let kundliScore = 0;
    if (sunSign === 'Capricorn' && moonSign === 'Pisces') {
        kundliScore = 10; 
    }
    
    else if (sunSign === 'Aries' && moonSign === 'Taurus') {
        kundliScore = 8;
    }
    
    else if (sunSign === 'Taurus' && moonSign === 'Cancer') {
        kundliScore = 7;
    }
    
    else if (sunSign === 'Gemini' && moonSign === 'Leo') {
        kundliScore = 6;
    }
    
    else if (sunSign === 'Cancer' && moonSign === 'Libra') {
        kundliScore = 5;
    }
    
    else if (sunSign === 'Leo' && moonSign === 'Scorpio') {
        kundliScore = 9;
    }
    
    else if (sunSign === 'Virgo' && moonSign === 'Sagittarius') {
        kundliScore = 8;
    }
    
    else if (sunSign === 'Libra' && moonSign === 'Capricorn') {
        kundliScore = 7;
    }
    
    else if (sunSign === 'Scorpio' && moonSign === 'Aquarius') {
        kundliScore = 6;
    }
    
    else if (sunSign === 'Sagittarius' && moonSign === 'Pisces') {
        kundliScore = 5;
    }
    
    else {
        kundliScore = 5; // Default score
    }


    return kundliScore;
}

module.exports = calculateKundliScore;

