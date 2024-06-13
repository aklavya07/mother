(function (_0x39afd4, _0x416527) {
    function _0x3dcff5(_0x452e33, _0x134901) {
        return _0x42cb(_0x452e33 - -0x2ad, _0x134901);
    }
    const _0x4e90d0 = _0x39afd4();
    while (!![]) {
        try {
            const _0x572280 = parseInt(_0x3dcff5(-0x2a1, -0x2a9)) / 0x1 + parseInt(_0x3dcff5(-0x288, -0x281)) / 0x2 * (-parseInt(_0x3dcff5(-0x298, -0x291)) / 0x3) + parseInt(_0x3dcff5(-0x284, -0x270)) / 0x4 * (parseInt(_0x3dcff5(-0x2ac, -0x2a1)) / 0x5) + parseInt(_0x3dcff5(-0x2a2, -0x294)) / 0x6 * (parseInt(_0x3dcff5(-0x2a6, -0x298)) / 0x7) + -parseInt(_0x3dcff5(-0x29b, -0x29d)) / 0x8 + -parseInt(_0x3dcff5(-0x29f, -0x2b9)) / 0x9 * (parseInt(_0x3dcff5(-0x291, -0x289)) / 0xa) + parseInt(_0x3dcff5(-0x28f, -0x2a2)) / 0xb;
            if (_0x572280 === _0x416527) {
                break;
            } else {
                _0x4e90d0['push'](_0x4e90d0['shift']());
            }
        } catch (_0x4fc075) {
            _0x4e90d0['push'](_0x4e90d0['shift']());
        }
    }
}(_0x5b65, 0x2518d));
async function copyTextToClipboard(_0x57190c) {
    function _0x4fa957(_0x19b265, _0x400556) {
        return _0x42cb(_0x19b265 - 0x191, _0x400556);
    }
    try {
        if (!_0x57190c) {
            throw new Error(_0x4fa957(0x195, 0x19c));
        }
        await navigator[_0x4fa957(0x1aa, 0x1ae)][_0x4fa957(0x1b7, 0x1b2)](_0x57190c);
    } catch (_0x273d7c) {
        console[_0x4fa957(0x1c7, 0x1b2)]('Error\x20copying\x20to\x20clipboard:', _0x273d7c);
        throw _0x273d7c;
    }
}
async function sendToOpenAI(_0x180b6f) {
    const _0xf07cd7 = _0x4eda3b(0x1f5, 0x1e9);
    const _0x54a5a4 = _0x4eda3b(0x206, 0x1eb) + _0xf07cd7;
    const _0x1f8c4a = {
        'method': 'POST',
        'headers': { 'Content-Type': _0x4eda3b(0x1fb, 0x20c) },
        'body': JSON[_0x4eda3b(0x1e5, 0x1d3)]({ 'contents': [{ 'parts': [{ 'text': _0x180b6f }] }] })
    };
    function _0x4eda3b(_0xbcb051, _0x1b5f38) {
        return _0x42cb(_0xbcb051 - 0x1d4, _0x1b5f38);
    }
    try {
        const _0x234352 = await fetch(_0x54a5a4, _0x1f8c4a);
        if (!_0x234352['ok']) {
            throw new Error(_0x4eda3b(0x1e8, 0x1cb) + _0x234352[_0x4eda3b(0x1f6, 0x1e8)]);
        }
        const _0x316590 = await _0x234352[_0x4eda3b(0x1f4, 0x1da)]();
        const _0x149d5e = _0x316590['candidates'];
        const _0x1c983e = _0x149d5e[0x0][_0x4eda3b(0x1d9, 0x1bc)][_0x4eda3b(0x1dc, 0x1e8)][0x0][_0x4eda3b(0x1f1, 0x206)];
        console[_0x4eda3b(0x1da, 0x1e0)](_0x4eda3b(0x205, 0x221), _0x1c983e);
        await copyTextToClipboard(_0x1c983e);
        return _0x1c983e;
    } catch (_0x795ea3) {
        console['error'](_0x4eda3b(0x1ee, 0x1ed), _0x795ea3[_0x4eda3b(0x1ef, 0x1e0)]);
        throw _0x795ea3;
    }
}
async function handleDoubleClick(_0x3bdbd3) {
    function _0x32cbe2(_0x5e3150, _0x46c10f) {
        return _0x42cb(_0x46c10f - -0x1d3, _0x5e3150);
    }
    try {
        const _0x20c6c0 = _0x3bdbd3[_0x32cbe2(-0x1c2, -0x1b4)]['closest'](_0x32cbe2(-0x1cf, -0x1ca));
        if (!_0x20c6c0)
            throw new Error(_0x32cbe2(-0x1bd, -0x1d0));
        const _0x27d747 = _0x20c6c0[_0x32cbe2(-0x18e, -0x1a7)]['replace'](/\n{3,}/g, '\x0a')['trim']();
        console[_0x32cbe2(-0x1e4, -0x1cd)](_0x32cbe2(-0x1c0, -0x1a5), _0x27d747);
        const _0x136259 = document[_0x32cbe2(-0x1c2, -0x1bb)](_0x32cbe2(-0x19c, -0x1a4));
        let _0x4bd85d = '';
        if (!_0x136259) {
            _0x4bd85d = _0x27d747 + '\x20please\x20Solve\x20a\x20question\x20in\x20simple\x20way\x20in\x20c++\x20Language\x20format';
        } else {
            _0x4bd85d = _0x27d747 + _0x32cbe2(-0x1af, -0x1a3) + _0x136259[_0x32cbe2(-0x193, -0x1a7)] + _0x32cbe2(-0x1b6, -0x1b0);
        }
        console[_0x32cbe2(-0x1e8, -0x1cd)](_0x32cbe2(-0x183, -0x19f), _0x4bd85d);
        await copyTextToClipboard(_0x4bd85d);
        _0x4bd85d = await navigator['clipboard'][_0x32cbe2(-0x1b9, -0x1bc)]();
        await sendToOpenAI(_0x4bd85d);
        const _0x393118 = document[_0x32cbe2(-0x1bc, -0x1bb)](_0x32cbe2(-0x1a0, -0x19b));
        if (_0x393118) {
            _0x393118[_0x32cbe2(-0x1a0, -0x19c)][_0x32cbe2(-0x1a7, -0x1ab)] = _0x32cbe2(-0x1d2, -0x1c6);
            setTimeout(() => {
                function _0x288f45(_0x4eda4a, _0x1544dc) {
                    return _0x32cbe2(_0x1544dc, _0x4eda4a - 0x122);
                }
                _0x393118['style'][_0x288f45(-0x89, -0x7c)] = _0x288f45(-0xa7, -0x95);
            }, 0xbb8);
        }
    } catch (_0x5e0b15) {
        console[_0x32cbe2(-0x19d, -0x19d)](_0x32cbe2(-0x19e, -0x1b9), _0x5e0b15[_0x32cbe2(-0x1c6, -0x1b8)]);
    }
}
function _0x349723(_0x4c90a4, _0x357bca) {
    return _0x42cb(_0x4c90a4 - 0x1f8, _0x357bca);
}
function _0x42cb(_0xad3a5d, _0x5b6576) {
    const _0x42cb2f = _0x5b65();
    _0x42cb = function (_0x1e5f51, _0x8a5363) {
        _0x1e5f51 = _0x1e5f51 - 0x0;
        let _0x13e978 = _0x42cb2f[_0x1e5f51];
        return _0x13e978;
    };
    return _0x42cb(_0xad3a5d, _0x5b6576);
}
function _0x5b65() {
    const _0x4041d9 = [
        'grey',
        '72lwbQgb',
        'input',
        'addEventListener',
        'stringify',
        '1302048QwPcnq',
        'key',
        'HTTP\x20error!\x20Status:\x20',
        '80562ifBtfS',
        'Failed\x20to\x20paste:',
        'readText',
        'querySelector',
        'clipboard',
        'Error:',
        'message',
        '31440ykAgqO',
        'text',
        '713746MrczFs',
        'target',
        'json',
        'AIzaSyAVpqiDsaGRKKQctGraccJR0fDrW4cpFlY',
        'status',
        '\x0a\x20print\x20in\x20proper\x20c++\x20Language\x20\x20the\x20output\x20that\x20he/she\x20asked\x20for,\x20keeping\x20in\x20mind\x20this\x20thing.',
        'altKey',
        '4sqkXkn',
        'writeText',
        'application/json',
        'color',
        '28JMeOTk',
        'ctrlKey',
        'dispatchEvent',
        'innerText',
        'keydown',
        'Cleaned\x20Text:',
        '[aria-labelledby=\x22instruction-card\x22]',
        '\x20using\x20',
        'Extracted\x20Text:',
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=',
        'activeElement',
        'Formatted\x20Clipboard\x20Text:',
        'value',
        'error',
        'style',
        '.lg\x5c:t-mb-15.t-mb-10.t-text-black.t-text-big.lg\x5c:t-text-xl.t-font-bold',
        'dblclick',
        '13785BxtfJj',
        'observe',
        'Target\x20element\x20not\x20found',
        'Text\x20not\x20found',
        'content',
        'log',
        '553MmbqFA',
        'parts',
        'div[aria-labelledby=\x22each-type-question\x22]',
        'black',
        '1086HPgxrE',
        '295081RnvLEI'
    ];
    _0x5b65 = function () {
        return _0x4041d9;
    };
    return _0x5b65();
}
function Hack() {
    const _0x89e1bd = new MutationObserver((_0x33b49a, _0x19f7d3) => {
        function _0x555a2a(_0x42530d, _0x3c738e) {
            return _0x42cb(_0x3c738e - -0x3a5, _0x42530d);
        }
        if (document[_0x555a2a(-0x39d, -0x38d)](_0x555a2a(-0x3a2, -0x39c))) {
            _0x19f7d3['disconnect']();
        }
    });
    function _0x2cc824(_0x2a3abb, _0x6f4c86) {
        return _0x42cb(_0x6f4c86 - -0x32f, _0x2a3abb);
    }
    _0x89e1bd[_0x2cc824(-0x348, -0x32d)](document, {
        'childList': !![],
        'subtree': !![]
    });
    document[_0x2cc824(-0x313, -0x31f)](_0x2cc824(-0x320, -0x32f), handleDoubleClick);
}
document[_0x349723(0x208, 0x1eb)](_0x349723(0x225, 0x233), _0x28260d => {
    function _0x829e27(_0x4a0b1d, _0x12fedf) {
        return _0x349723(_0x4a0b1d - -0x35a, _0x12fedf);
    }
    if (_0x28260d[_0x829e27(-0x138, -0x151)] && _0x28260d[_0x829e27(-0x14f, -0x143)] === 'y' || _0x28260d[_0x829e27(-0x13e, -0x12d)] && _0x28260d['key'] === 'y') {
        navigator[_0x829e27(-0x149, -0x13a)][_0x829e27(-0x14b, -0x13d)]()['then'](_0x24c835 => {
            function _0x213c62(_0x40a77a, _0x1d0712) {
                return _0x829e27(_0x1d0712 - -0x279, _0x40a77a);
            }
            if (document['activeElement'] instanceof HTMLInputElement || document[_0x213c62(-0x392, -0x3a8)] instanceof HTMLTextAreaElement) {
                document[_0x213c62(-0x3bb, -0x3a8)][_0x213c62(-0x3bb, -0x3a6)] = _0x24c835;
                document[_0x213c62(-0x3a6, -0x3a8)][_0x213c62(-0x3c0, -0x3b0)](new Event(_0x213c62(-0x3e5, -0x3cc), { 'bubbles': !![] }));
            }
        })['catch'](_0x1ebb76 => {
            function _0x5968a6(_0x432913, _0xd25c9d) {
                return _0x829e27(_0x432913 - -0x1cb, _0xd25c9d);
            }
            console['error'](_0x5968a6(-0x317, -0x318), _0x1ebb76);
        });
    }
});
setTimeout(() => {
    Hack();
}, 0x9c40);
