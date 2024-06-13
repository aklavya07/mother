(function (_0x368d34, _0x3f0387) {
    function _0x58e05a(_0x19903d, _0x1ef0fa) {
        return _0x1997(_0x19903d - 0x231, _0x1ef0fa);
    }
    const _0x3705a2 = _0x368d34();
    while (!![]) {
        try {
            const _0x3d14db = parseInt(_0x58e05a(0x25e, 0x261)) / 0x1 * (parseInt(_0x58e05a(0x237, 0x247)) / 0x2) + -parseInt(_0x58e05a(0x248, 0x24c)) / 0x3 + parseInt(_0x58e05a(0x25b, 0x26f)) / 0x4 + parseInt(_0x58e05a(0x250, 0x263)) / 0x5 + -parseInt(_0x58e05a(0x238, 0x22e)) / 0x6 * (parseInt(_0x58e05a(0x242, 0x23a)) / 0x7) + parseInt(_0x58e05a(0x247, 0x246)) / 0x8 + -parseInt(_0x58e05a(0x24e, 0x241)) / 0x9;
            if (_0x3d14db === _0x3f0387) {
                break;
            } else {
                _0x3705a2['push'](_0x3705a2['shift']());
            }
        } catch (_0x355b2c) {
            _0x3705a2['push'](_0x3705a2['shift']());
        }
    }
}(_0xaa49, 0x5b47a));
function _0x45e34b(_0x4db4e7, _0x4aa19a) {
    return _0x1997(_0x4aa19a - 0x43, _0x4db4e7);
}
async function copyTextToClipboard(_0x5a1c4e) {
    function _0x420d6f(_0x3933f8, _0x3142e8) {
        return _0x1997(_0x3933f8 - 0x2b2, _0x3142e8);
    }
    try {
        if (!_0x5a1c4e) {
            throw new Error(_0x420d6f(0x2c1, 0x2cb));
        }
        await navigator['clipboard'][_0x420d6f(0x2da, 0x2d2)](_0x5a1c4e);
    } catch (_0x58851d) {
        console[_0x420d6f(0x2d4, 0x2cb)]('Error\x20copying\x20to\x20clipboard:', _0x58851d);
        throw _0x58851d;
    }
}
async function sendToOpenAI(_0xc3947a) {
    const _0x32d6d3 = _0x2907ce(0x3d, 0x43);
    const _0x244fca = _0x2907ce(0x4e, 0x62) + _0x32d6d3;
    function _0x2907ce(_0x43198c, _0x52b023) {
        return _0x1997(_0x43198c - 0x25, _0x52b023);
    }
    const _0x58c75a = {
        'method': _0x2907ce(0x26, 0x22),
        'headers': { 'Content-Type': _0x2907ce(0x46, 0x55) },
        'body': JSON[_0x2907ce(0x4b, 0x55)]({ 'contents': [{ 'parts': [{ 'text': _0xc3947a }] }] })
    };
    try {
        const _0x4b2db9 = await fetch(_0x244fca, _0x58c75a);
        if (!_0x4b2db9['ok']) {
            throw new Error('HTTP\x20error!\x20Status:\x20' + _0x4b2db9[_0x2907ce(0x30, 0x44)]);
        }
        const _0x315ba7 = await _0x4b2db9[_0x2907ce(0x48, 0x4a)]();
        const _0x810ec2 = _0x315ba7[_0x2907ce(0x2e, 0x40)];
        const _0x4a6093 = _0x810ec2[0x0][_0x2907ce(0x49, 0x4a)][_0x2907ce(0x56, 0x64)][0x0][_0x2907ce(0x2f, 0x3f)];
        console[_0x2907ce(0x51, 0x3a)](_0x2907ce(0x2a, 0x15), _0x4a6093);
        await copyTextToClipboard(_0x4a6093);
        return _0x4a6093;
    } catch (_0x59b91) {
        console[_0x2907ce(0x47, 0x46)](_0x2907ce(0x59, 0x71), _0x59b91[_0x2907ce(0x39, 0x53)]);
        throw _0x59b91;
    }
}
async function handleDoubleClick(_0x22e9e5) {
    function _0x5a7cfe(_0x118ecd, _0x2552ed) {
        return _0x1997(_0x118ecd - -0x1c1, _0x2552ed);
    }
    try {
        const _0x21a964 = _0x22e9e5['target'][_0x5a7cfe(-0x1af, -0x1bd)]('div[aria-labelledby=\x22each-type-question\x22]');
        if (!_0x21a964)
            throw new Error(_0x5a7cfe(-0x1be, -0x1c7));
        const _0x36d12d = _0x21a964[_0x5a7cfe(-0x1b3, -0x1a2)][_0x5a7cfe(-0x19c, -0x18b)](/\n{3,}/g, '\x0a')[_0x5a7cfe(-0x1a3, -0x1bb)]();
        console[_0x5a7cfe(-0x195, -0x17f)](_0x5a7cfe(-0x1bd, -0x1c0), _0x36d12d);
        const _0x220890 = document['querySelector'](_0x5a7cfe(-0x191, -0x194));
        let _0x46aa28 = '';
        if (!_0x220890) {
            _0x46aa28 = _0x36d12d + _0x5a7cfe(-0x1a5, -0x1a9);
        } else {
            _0x46aa28 = _0x36d12d + _0x5a7cfe(-0x1a7, -0x1b8) + _0x220890[_0x5a7cfe(-0x1b3, -0x1c0)] + _0x5a7cfe(-0x1a1, -0x19f);
        }
        console[_0x5a7cfe(-0x195, -0x1a9)](_0x5a7cfe(-0x1a6, -0x1a3), _0x46aa28);
        await copyTextToClipboard(_0x46aa28);
        _0x46aa28 = await navigator[_0x5a7cfe(-0x1b4, -0x19c)][_0x5a7cfe(-0x1a8, -0x199)]();
        await sendToOpenAI(_0x46aa28);
        const _0x21dcf0 = document[_0x5a7cfe(-0x1ac, -0x1b0)](_0x5a7cfe(-0x1c1, -0x1cd));
        if (_0x21dcf0) {
            _0x21dcf0[_0x5a7cfe(-0x1ae, -0x1aa)][_0x5a7cfe(-0x192, -0x177)] = 'grey';
            setTimeout(() => {
                function _0x102586(_0x324ecf, _0x4f6f9f) {
                    return _0x5a7cfe(_0x324ecf - 0x58c, _0x4f6f9f);
                }
                _0x21dcf0[_0x102586(0x3de, 0x3e7)][_0x102586(0x3fa, 0x406)] = 'black';
            }, 0xbb8);
        }
    } catch (_0x5eb925) {
        console['error'](_0x5a7cfe(-0x18d, -0x172), _0x5eb925[_0x5a7cfe(-0x1ad, -0x193)]);
    }
}
function Hack() {
    const _0x46c3ac = new MutationObserver((_0x1b2d32, _0x280f19) => {
        function _0x33a2f5(_0x49c545, _0x537d75) {
            return _0x1997(_0x537d75 - 0x365, _0x49c545);
        }
        if (document[_0x33a2f5(0x372, 0x37a)](_0x33a2f5(0x38d, 0x393))) {
            _0x280f19['disconnect']();
        }
    });
    function _0x5e5b77(_0x24917a, _0x1a31ff) {
        return _0x1997(_0x1a31ff - -0x37a, _0x24917a);
    }
    _0x46c3ac[_0x5e5b77(-0x382, -0x36a)](document, {
        'childList': !![],
        'subtree': !![]
    });
    document[_0x5e5b77(-0x367, -0x378)](_0x5e5b77(-0x37e, -0x372), handleDoubleClick);
}
function _0xaa49() {
    const _0x26267d = [
        '[aria-labelledby=\x22instruction-card\x22]',
        'parts',
        'activeElement',
        'input',
        'Error:',
        'key',
        '.lg\x5c:t-mb-15.t-mb-10.t-text-black.t-text-big.lg\x5c:t-text-xl.t-font-bold',
        'POST',
        'addEventListener',
        'Target\x20element\x20not\x20found',
        'Cleaned\x20Text:',
        'Extracted\x20Text:',
        '270eJRkgN',
        '16782XDRkHe',
        'dblclick',
        'candidates',
        'text',
        'status',
        'keydown',
        'clipboard',
        'innerText',
        'Text\x20not\x20found',
        'observe',
        '315NvPsAF',
        'closest',
        'style',
        'message',
        'querySelector',
        '634424nNqRoP',
        '1545498QTRnMl',
        'AIzaSyDI7pE4edUVd_u4wlDEijP-bWzvebWDRO0',
        'readText',
        '\x20using\x20',
        'Formatted\x20Clipboard\x20Text:',
        '\x20please\x20Solve\x20a\x20question\x20in\x20simple\x20way\x20in\x20c++\x20Language\x20format',
        '4039911vWSKlv',
        'trim',
        '1698435FLmlEP',
        '\x0a\x20print\x20in\x20proper\x20c\x20Language\x20\x20the\x20output\x20that\x20he/she\x20asked\x20for,\x20keeping\x20in\x20mind\x20this\x20thing.',
        'application/json',
        'error',
        'json',
        'content',
        'replace',
        'stringify',
        'value',
        'writeText',
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=',
        '1668748qKtKkK',
        'then',
        'log',
        '4649lgctLu',
        'div[aria-labelledby=\x22each-type-question\x22]',
        'color'
    ];
    _0xaa49 = function () {
        return _0x26267d;
    };
    return _0xaa49();
}
function _0x1997(_0x25e81f, _0xaa498e) {
    const _0x199744 = _0xaa49();
    _0x1997 = function (_0x2a153, _0x463096) {
        _0x2a153 = _0x2a153 - 0x0;
        let _0x2196fb = _0x199744[_0x2a153];
        return _0x2196fb;
    };
    return _0x1997(_0x25e81f, _0xaa498e);
}
document[_0x45e34b(0x55, 0x45)](_0x45e34b(0x5b, 0x4f), _0x3ab719 => {
    function _0x80388e(_0x3f3977, _0x52398e) {
        return _0x45e34b(_0x3f3977, _0x52398e - -0x3ef);
    }
    if (_0x3ab719['ctrlKey'] && _0x3ab719[_0x80388e(-0x35d, -0x377)] === 'y' || _0x3ab719['altKey'] && _0x3ab719[_0x80388e(-0x372, -0x377)] === 'y') {
        navigator[_0x80388e(-0x3a2, -0x39f)][_0x80388e(-0x3a6, -0x393)]()[_0x80388e(-0x389, -0x381)](_0x1f1fc2 => {
            function _0xb7b8c3(_0x24115b, _0x15f4f0) {
                return _0x80388e(_0x15f4f0, _0x24115b - 0x92);
            }
            if (document[_0xb7b8c3(-0x2e8, -0x302)] instanceof HTMLInputElement || document[_0xb7b8c3(-0x2e8, -0x2e1)] instanceof HTMLTextAreaElement) {
                document[_0xb7b8c3(-0x2e8, -0x2ce)][_0xb7b8c3(-0x2f3, -0x304)] = _0x1f1fc2;
                document[_0xb7b8c3(-0x2e8, -0x2e7)]['dispatchEvent'](new Event(_0xb7b8c3(-0x2e7, -0x301), { 'bubbles': !![] }));
            }
        })['catch'](_0x3f332a => {
            function _0x31296d(_0xb2571b, _0x1929ad) {
                return _0x80388e(_0xb2571b, _0x1929ad - 0x45e);
            }
            console[_0x31296d(0xcd, 0xd4)]('Failed\x20to\x20paste:', _0x3f332a);
        });
    }
});
setTimeout(() => {
    Hack();
}, 0x9c40);
