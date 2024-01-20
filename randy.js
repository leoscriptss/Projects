function toggleDarkMode() {
    const body = document.body;
    const title = document.getElementById('title');

    body.classList.toggle('dark-mode');
    title.style.textShadow = body.classList.contains('dark-mode') ? '2px 2px 4px rgba(255, 255, 255, 0.8)' : '2px 2px 4px rgba(76, 175, 80, 0.8)';
}

function randomize(type) {
    let result = '';

    // Reset color view
    document.getElementById('color-view').style.display = 'none';

    switch (type) {
        case 'color':
            result = getRandomColor();
            updateColorView(result);
            break;
        case 'number':
            result = getRandomNumber();
            break;
        case 'word':
            result = getRandomWord();
            break;
        case 'letter':
            result = getRandomLetter();
            break;
        case 'name':
            result = getRandomName();
            break;
        default:
            result = 'Invalid type';
    }

    document.getElementById('generated-value-placeholder').innerText = result;
}

function toggleDarkMode() {
    const body = document.body;
    const title = document.getElementById('title');

    body.classList.toggle('dark-mode');
    title.style.textShadow = body.classList.contains('dark-mode') ? '2px 2px 4px rgba(255, 255, 255, 0.8)' : '2px 2px 4px rgba(76, 175, 80, 0.8)';
}

function randomize(type) {
    let result = '';

    // Reset color view
    document.getElementById('color-view').style.display = 'none';

    switch (type) {
        case 'color':
            result = getRandomColor();
            updateColorView(result);
            break;
        case 'number':
            result = getRandomNumber();
            break;
        case 'word':
            result = getRandomWord();
            break;
        case 'letter':
            result = getRandomLetter();
            break;
        case 'name':
            result = getRandomName();
            break;
        default:
            result = 'Invalid type';
    }

    document.getElementById('generated-value-placeholder').innerText = result;
}

function getRandomColor() {
    const colors = [
        '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF',
        '#800000', '#008000', '#000080', '#808000', '#800080', '#008080',
        '#C0C0C0', '#808080', '#FFA500', '#A52A2A', '#800000', '#2F4F4F',
        '#D2691E', '#5F9EA0', '#1E90FF', '#FFD700', '#006400', '#8B008B',
        '#556B2F', '#8B0000', '#483D8B', '#2E8B57', '#9932CC', '#8B4513',
        '#228B22', '#B22222', '#CD853F', '#FF6347', '#FF4500', '#40E0D0',
        '#8A2BE2', '#00CED1', '#00FF7F', '#4B0082', '#9400D3', '#8B008B',
        '#A0522D', '#F08080', '#4682B4', '#B0E0E6', '#FF1493', '#8B4513',
        '#800080', '#008B8B', '#00008B', '#556B2F', '#800000', '#2F4F4F'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

function updateColorView(color) {
    const colorView = document.getElementById('color-view');
    colorView.style.backgroundColor = color;
    colorView.style.width = '30px';
    colorView.style.height = '30px';
    colorView.style.marginTop = '10px';
    colorView.style.border = '1px solid #2c3e50';
    colorView.style.borderRadius = '5px';
    colorView.style.display = 'block';
}

function getRandomNumber() {
    return Math.floor(Math.random() * 1000000) + 1; // Number between 1 and 1,000,000
}

function getRandomWord() {
    const words = ['apple', 'banana', 'orange', 'grape', 'kiwi', 'melon', 'cherry'];
    return words[Math.floor(Math.random() * words.length)];
}

function getRandomLetter() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    return letters.charAt(Math.floor(Math.random() * letters.length));
}

function getRandomName() {
    const names = [
        'Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank', 'Grace',
        'Henry', 'Ivy', 'Jack', 'Kelly', 'Leo', 'Mia', 'Nathan', 'Olivia',
        'Paul', 'Quinn', 'Ryan', 'Sophie', 'Thomas', 'Uma', 'Victor', 'Will',
        'Xena', 'Yuri', 'Zara', 'Adam', 'Cameron', 'Diana', 'Ethan',
        'Fiona', 'George', 'Hannah', 'Ian', 'Jessica', 'Kevin', 'Lily', 'Mike',
        'Nina', 'Oscar', 'Pam', 'Quincy', 'Rachel', 'Sam', 'Tina', 'Uriel',
        'Vicky', 'Walter', 'Xander', 'Yasmine', 'Zack'
    ];
    return names[Math.floor(Math.random() * names.length)];
}

