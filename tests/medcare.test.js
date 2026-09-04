const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

test('MedCare++ landing page contains project title', () => {
    const html = fs.readFileSync('index.html', 'utf8');

    assert.match(html, /MedCare\+\+/i);
});

test('Required MedCare++ pages exist', () => {
    const requiredFiles = [
        'index.html',
        'login.html',
        'dashboard.html',
        'heart-monitor.html'
    ];

    for (const file of requiredFiles) {
        assert.ok(
            fs.existsSync(file),
            `${file} should exist`
        );
    }
});

test('Tailwind input CSS is configured', () => {
    const css = fs.readFileSync('src/input.css', 'utf8');

    assert.match(css, /tailwindcss/i);
});