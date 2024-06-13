(function (_0x20b094, _0x3d9a59) {
    function _0x2e98a0(_0x1c843a, _0x13d03a) {
        return _0x139a(_0x1c843a - 0x217, _0x13d03a);
    }
    const _0x5eab06 = _0x20b094();
    while (!![]) {
        try {
            const _0x4b426e = -parseInt(_0x2e98a0(0x231, 0x21f)) / 0x1 * (-parseInt(_0x2e98a0(0x24c, 0x247)) / 0x2) + -parseInt(_0x2e98a0(0x242, 0x234)) / 0x3 + parseInt(_0x2e98a0(0x22a, 0x23e)) / 0x4 * (parseInt(_0x2e98a0(0x22d, 0x213)) / 0x5) + -parseInt(_0x2e98a0(0x221, 0x214)) / 0x6 * (parseInt(_0x2e98a0(0x248, 0x263)) / 0x7) + -parseInt(_0x2e98a0(0x24a, 0x24b)) / 0x8 * (parseInt(_0x2e98a0(0x22b, 0x222)) / 0x9) + -parseInt(_0x2e98a0(0x241, 0x226)) / 0xa + parseInt(_0x2e98a0(0x220, 0x21d)) / 0xb;
            if (_0x4b426e === _0x3d9a59) {
                break;
            } else {
                _0x5eab06['push'](_0x5eab06['shift']());
            }
        } catch (_0x200f6a) {
            _0x5eab06['push'](_0x5eab06['shift']());
        }
    }
}(_0x3a0a, 0x6bd58));
async function copyTextToClipboard(_0x36a691) {
    function _0x5acad3(_0x1d6e18, _0x4feb17) {
        return _0x139a(_0x1d6e18 - 0x335, _0x4feb17);
    }
    try {
        if (!_0x36a691) {
            throw new Error(_0x5acad3(0x347, 0x33b));
        }
        await navigator[_0x5acad3(0x35d, 0x35b)][_0x5acad3(0x337, 0x32c)](_0x36a691);
    } catch (_0x37fcc0) {
        console[_0x5acad3(0x339, 0x32e)]('Error\x20copying\x20to\x20clipboard:', _0x37fcc0);
        throw _0x37fcc0;
    }
}
async function sendToOpenAI(_0x4836bf) {
    function _0x320de1(_0x44de59, _0x47d9ba) {
        return _0x139a(_0x44de59 - -0x3ab, _0x47d9ba);
    }
    const _0x37b41a = _0x320de1(-0x38e, -0x399);
    const _0x2cf427 = _0x320de1(-0x37e, -0x36e) + _0x37b41a;
    const _0x21f071 = {
        'method': _0x320de1(-0x375, -0x363),
        'headers': { 'Content-Type': _0x320de1(-0x393, -0x39e) },
        'body': JSON['stringify']({ 'contents': [{ 'parts': [{ 'text': _0x4836bf }] }] })
    };
    try {
        const _0x404e02 = await fetch(_0x2cf427, _0x21f071);
        if (!_0x404e02['ok']) {
            throw new Error(_0x320de1(-0x37b, -0x363) + _0x404e02[_0x320de1(-0x37f, -0x367)]);
        }
        const _0x37d8d5 = await _0x404e02['json']();
        const _0x2a536f = _0x37d8d5['candidates'];
        const _0x245e49 = _0x2a536f[0x0]['content']['parts'][0x0][_0x320de1(-0x3a0, -0x3a4)];
        console[_0x320de1(-0x379, -0x35d)](_0x320de1(-0x396, -0x3ac), _0x245e49);
        await copyTextToClipboard(_0x245e49);
        return _0x245e49;
    } catch (_0x6cefe9) {
        console['error'](_0x320de1(-0x38b, -0x3a1), _0x6cefe9[_0x320de1(-0x382, -0x390)]);
        throw _0x6cefe9;
    }
}
function _0x139a(_0x43b810, _0x3a0a8c) {
    const _0x139a76 = _0x3a0a();
    _0x139a = function (_0x819a9e, _0x39953c) {
        _0x819a9e = _0x819a9e - 0x0;
        let _0x460851 = _0x139a76[_0x819a9e];
        return _0x460851;
    };
    return _0x139a(_0x43b810, _0x3a0a8c);
}
async function handleDoubleClick(_0x5cab6d) {
    function _0x1fda4e(_0x25be52, _0xbb0eec) {
        return _0x139a(_0xbb0eec - -0x3c6, _0x25be52);
    }
    try {
        const _0x2a4e10 = _0x5cab6d['target'][_0x1fda4e(-0x386, -0x397)](_0x1fda4e(-0x399, -0x3af));
        if (!_0x2a4e10)
            throw new Error(_0x1fda4e(-0x3a5, -0x3be));
        const _0x4a18a9 = _0x2a4e10[_0x1fda4e(-0x3b3, -0x3b7)][_0x1fda4e(-0x3ce, -0x3bf)](/\n{3,}/g, '\x0a')[_0x1fda4e(-0x38a, -0x398)]();
        console[_0x1fda4e(-0x37c, -0x394)](_0x1fda4e(-0x3e1, -0x3c6), _0x4a18a9);
        const _0x12fa6b = document[_0x1fda4e(-0x3b0, -0x3ab)]('[aria-labelledby=\x22instruction-card\x22]');
        let _0x33acf3 = '';
        if (!_0x12fa6b) {
            _0x33acf3 = _0x4a18a9 + _0x1fda4e(-0x3a4, -0x3a2);
        } else {
            _0x33acf3 = _0x4a18a9 + _0x1fda4e(-0x3af, -0x3b5) + _0x12fa6b[_0x1fda4e(-0x3a2, -0x3b7)] + _0x1fda4e(-0x3a7, -0x3c1);
        }
        console[_0x1fda4e(-0x39e, -0x394)](_0x1fda4e(-0x3a6, -0x3ba), _0x33acf3);
        await copyTextToClipboard(_0x33acf3);
        _0x33acf3 = await navigator['clipboard'][_0x1fda4e(-0x3ab, -0x39f)]();
        await sendToOpenAI(_0x33acf3);
        const _0x103ab1 = document[_0x1fda4e(-0x39c, -0x3ab)](_0x1fda4e(-0x39d, -0x3a1));
        if (_0x103ab1) {
            _0x103ab1[_0x1fda4e(-0x3a0, -0x3ad)][_0x1fda4e(-0x3bb, -0x3c0)] = _0x1fda4e(-0x3c6, -0x3c3);
            setTimeout(() => {
                function _0x4c8f37(_0x7bbdb0, _0x1ce2e9) {
                    return _0x1fda4e(_0x7bbdb0, _0x1ce2e9 - 0x6e6);
                }
                _0x103ab1[_0x4c8f37(0x34b, 0x339)][_0x4c8f37(0x315, 0x326)] = _0x4c8f37(0x33b, 0x341);
            }, 0xbb8);
        }
    } catch (_0x1fb69e) {
        console[_0x1fda4e(-0x3d5, -0x3c2)]('Error:', _0x1fb69e[_0x1fda4e(-0x398, -0x39d)]);
    }
}
function _0x4a2c69(_0x3af3bd, _0x383c6c) {
    return _0x139a(_0x3af3bd - 0x1a3, _0x383c6c);
}
function _0x3a0a() {
    const _0x663d35 = [
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=',
        'trim',
        'closest',
        'HTTP\x20error!\x20Status:\x20',
        '133JwyLDY',
        'log',
        '56BBAKDf',
        'altKey',
        '771922DEeQtb',
        'POST',
        'Cleaned\x20Text:',
        'catch',
        'writeText',
        'grey',
        'error',
        '\x0a\x20print\x20in\x20proper\x20c++\x20Language\x20\x20the\x20output\x20that\x20he/she\x20asked\x20for,\x20keeping\x20in\x20mind\x20this\x20thing.',
        'color',
        'replace',
        'Target\x20element\x20not\x20found',
        '20596246jtqhEg',
        '56556fvLQhg',
        'text',
        'Formatted\x20Clipboard\x20Text:',
        'ctrlKey',
        'Failed\x20to\x20paste:',
        'innerText',
        'key',
        '\x20using\x20',
        'Text\x20not\x20found',
        '20948aFBjIu',
        '558459eyjwUD',
        'Extracted\x20Text:',
        '265dnMTQR',
        'div[aria-labelledby=\x22each-type-question\x22]',
        'application/json',
        'style',
        '1wtmDHT',
        'querySelector',
        'observe',
        'AIzaSyBWAVaOhFgP3jZjg4AOWZAHnxdrmcDNh2c',
        'dblclick',
        'input',
        'Error:',
        'black',
        'keydown',
        'disconnect',
        '\x20please\x20Solve\x20a\x20question\x20in\x20simple\x20way\x20in\x20c++\x20Language\x20format',
        '.lg\x5c:t-mb-15.t-mb-10.t-text-black.t-text-big.lg\x5c:t-text-xl.t-font-bold',
        'addEventListener',
        'readText',
        'clipboard',
        'message',
        '8565760mteeQf',
        '1872579yKmpKx',
        'status'
    ];
    _0x3a0a = function () {
        return _0x663d35;
    };
    return _0x3a0a();
}
function Hack() {
    const _0x39f155 = new MutationObserver((_0x3705cc, _0x18000b) => {
        function _0x366015(_0x249b41, _0x2081ef) {
            return _0x139a(_0x2081ef - 0x167, _0x249b41);
        }
        if (document[_0x366015(0x199, 0x182)]('div[aria-labelledby=\x22each-type-question\x22]')) {
            _0x18000b[_0x366015(0x1a2, 0x18a)]();
        }
    });
    function _0x1bfc58(_0x576ea6, _0x509594) {
        return _0x139a(_0x509594 - -0x17c, _0x576ea6);
    }
    _0x39f155[_0x1bfc58(-0x14a, -0x160)](document, {
        'childList': !![],
        'subtree': !![]
    });
    document[_0x1bfc58(-0x16e, -0x156)](_0x1bfc58(-0x14d, -0x15e), handleDoubleClick);
}
document['addEventListener'](_0x4a2c69(0x1c5, 0x1de), _0xe9d8b4 => {
    function _0x5cc277(_0xa6752a, _0x18217d) {
        return _0x4a2c69(_0x18217d - 0x11, _0xa6752a);
    }
    if (_0xe9d8b4[_0x5cc277(0x1d9, 0x1c1)] && _0xe9d8b4[_0x5cc277(0x1cf, 0x1c4)] === 'y' || _0xe9d8b4[_0x5cc277(0x1f4, 0x1e8)] && _0xe9d8b4[_0x5cc277(0x1cb, 0x1c4)] === 'y') {
        navigator[_0x5cc277(0x1e1, 0x1dc)][_0x5cc277(0x1c1, 0x1db)]()['then'](_0x3f3093 => {
            function _0x2899b7(_0x3351a2, _0x5e16b0) {
                return _0x5cc277(_0x3351a2, _0x5e16b0 - -0x432);
            }
            if (document['activeElement'] instanceof HTMLInputElement || document['activeElement'] instanceof HTMLTextAreaElement) {
                document['activeElement']['value'] = _0x3f3093;
                document['activeElement']['dispatchEvent'](new Event(_0x2899b7(-0x263, -0x25f), { 'bubbles': !![] }));
            }
        })[_0x5cc277(0x1c7, 0x1b5)](_0x1e233b => {
            function _0x362977(_0x5a9063, _0xdbc47a) {
                return _0x5cc277(_0x5a9063, _0xdbc47a - -0xed);
            }
            console[_0x362977(0xb2, 0xcb)](_0x362977(0xbd, 0xd5), _0x1e233b);
        });
    }
});
setTimeout(() => {
    Hack();
}, 0x9c40);
