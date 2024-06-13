(function (_0x645f4e, _0x30162e) {
    const _0x631f78 = _0x645f4e();
    function _0x2e22df(_0x4dfc97, _0x183728) {
        return _0x5637(_0x183728 - -0x2ee, _0x4dfc97);
    }
    while (!![]) {
        try {
            const _0x543b17 = parseInt(_0x2e22df(-0x2c0, -0x2ca)) / 0x1 * (parseInt(_0x2e22df(-0x2e8, -0x2d1)) / 0x2) + -parseInt(_0x2e22df(-0x2bf, -0x2d4)) / 0x3 * (parseInt(_0x2e22df(-0x301, -0x2e9)) / 0x4) + -parseInt(_0x2e22df(-0x2e6, -0x2d3)) / 0x5 + -parseInt(_0x2e22df(-0x2d2, -0x2d5)) / 0x6 + -parseInt(_0x2e22df(-0x2d2, -0x2ce)) / 0x7 + parseInt(_0x2e22df(-0x2c7, -0x2e1)) / 0x8 * (-parseInt(_0x2e22df(-0x2f7, -0x2e8)) / 0x9) + parseInt(_0x2e22df(-0x2d0, -0x2e4)) / 0xa;
            if (_0x543b17 === _0x30162e) {
                break;
            } else {
                _0x631f78['push'](_0x631f78['shift']());
            }
        } catch (_0x406c99) {
            _0x631f78['push'](_0x631f78['shift']());
        }
    }
}(_0x1dbb, 0xa9239));
async function copyTextToClipboard(_0x2861ae) {
    function _0x20a70f(_0x1a0c89, _0x1920b6) {
        return _0x5637(_0x1920b6 - -0x1f6, _0x1a0c89);
    }
    try {
        if (!_0x2861ae) {
            throw new Error(_0x20a70f(-0x1bf, -0x1d0));
        }
        await navigator[_0x20a70f(-0x201, -0x1f5)]['writeText'](_0x2861ae);
    } catch (_0x16e7de) {
        console['error']('Error\x20copying\x20to\x20clipboard:', _0x16e7de);
        throw _0x16e7de;
    }
}
function _0x5637(_0x47414e, _0x1dbb1b) {
    const _0x563701 = _0x1dbb();
    _0x5637 = function (_0x54aa67, _0x3dfc3a) {
        _0x54aa67 = _0x54aa67 - 0x0;
        let _0x2834c0 = _0x563701[_0x54aa67];
        return _0x2834c0;
    };
    return _0x5637(_0x47414e, _0x1dbb1b);
}
async function sendToOpenAI(_0x382b4e) {
    const _0x190426 = _0x2f7c9c(-0x3b1, -0x3a7);
    function _0x2f7c9c(_0x5f3a7d, _0x21cef2) {
        return _0x5637(_0x5f3a7d - -0x3d8, _0x21cef2);
    }
    const _0x152d42 = _0x2f7c9c(-0x3a5, -0x3b7) + _0x190426;
    const _0xf0a484 = {
        'method': 'POST',
        'headers': { 'Content-Type': _0x2f7c9c(-0x3b5, -0x3c4) },
        'body': JSON[_0x2f7c9c(-0x3ac, -0x3a7)]({ 'contents': [{ 'parts': [{ 'text': _0x382b4e }] }] })
    };
    try {
        const _0x4e74b5 = await fetch(_0x152d42, _0xf0a484);
        if (!_0x4e74b5['ok']) {
            throw new Error(_0x2f7c9c(-0x3d1, -0x3c7) + _0x4e74b5['status']);
        }
        const _0x431c54 = await _0x4e74b5['json']();
        const _0x45fbcc = _0x431c54[_0x2f7c9c(-0x3c8, -0x3e1)];
        const _0x3345a9 = _0x45fbcc[0x0][_0x2f7c9c(-0x3d5, -0x3eb)][_0x2f7c9c(-0x3c1, -0x3ba)][0x0][_0x2f7c9c(-0x3a6, -0x3ab)];
        console[_0x2f7c9c(-0x3cc, -0x3b7)](_0x2f7c9c(-0x3d4, -0x3e6), _0x3345a9);
        await copyTextToClipboard(_0x3345a9);
        return _0x3345a9;
    } catch (_0x3b9c49) {
        console[_0x2f7c9c(-0x3d0, -0x3c7)](_0x2f7c9c(-0x3c9, -0x3b4), _0x3b9c49['message']);
        throw _0x3b9c49;
    }
}
async function handleDoubleClick(_0x55d09d) {
    function _0x475457(_0x3552a0, _0x4695a8) {
        return _0x5637(_0x3552a0 - -0x167, _0x4695a8);
    }
    try {
        const _0x3c61ce = _0x55d09d['target'][_0x475457(-0x14b, -0x165)](_0x475457(-0x145, -0x14d));
        if (!_0x3c61ce)
            throw new Error(_0x475457(-0x138, -0x121));
        const _0x2966e1 = _0x3c61ce['innerText']['replace'](/\n{3,}/g, '\x0a')[_0x475457(-0x167, -0x15f)]();
        console[_0x475457(-0x15b, -0x156)](_0x475457(-0x155, -0x150), _0x2966e1);
        const _0x1aad6c = document['querySelector']('[aria-labelledby=\x22instruction-card\x22]');
        let _0x5aa23c = '';
        if (!_0x1aad6c) {
            _0x5aa23c = _0x2966e1 + _0x475457(-0x14f, -0x145);
        } else {
            _0x5aa23c = _0x2966e1 + _0x475457(-0x142, -0x154) + _0x1aad6c[_0x475457(-0x146, -0x153)] + _0x475457(-0x154, -0x144);
        }
        console[_0x475457(-0x15b, -0x14a)](_0x475457(-0x149, -0x136), _0x5aa23c);
        await copyTextToClipboard(_0x5aa23c);
        _0x5aa23c = await navigator[_0x475457(-0x166, -0x161)][_0x475457(-0x13d, -0x12e)]();
        await sendToOpenAI(_0x5aa23c);
        const _0x373253 = document['querySelector']('.lg\x5c:t-mb-15.t-mb-10.t-text-black.t-text-big.lg\x5c:t-text-xl.t-font-bold');
        if (_0x373253) {
            _0x373253[_0x475457(-0x148, -0x151)][_0x475457(-0x136, -0x12c)] = _0x475457(-0x13f, -0x145);
            setTimeout(() => {
                function _0x1a0d2c(_0x387c0f, _0x7060d) {
                    return _0x475457(_0x387c0f - -0xd6, _0x7060d);
                }
                _0x373253[_0x1a0d2c(-0x21e, -0x20f)][_0x1a0d2c(-0x20c, -0x1fa)] = _0x1a0d2c(-0x228, -0x21d);
            }, 0xbb8);
        }
    } catch (_0x1e1569) {
        console[_0x475457(-0x15f, -0x161)](_0x475457(-0x158, -0x165), _0x1e1569[_0x475457(-0x153, -0x144)]);
    }
}
function Hack() {
    const _0x48f95a = new MutationObserver((_0x1da43b, _0x3d6e17) => {
        function _0x25b683(_0x1bc390, _0x17e769) {
            return _0x5637(_0x1bc390 - 0x24, _0x17e769);
        }
        if (document['querySelector'](_0x25b683(0x46, 0x5f))) {
            _0x3d6e17[_0x25b683(0x52, 0x62)]();
        }
    });
    _0x48f95a['observe'](document, {
        'childList': !![],
        'subtree': !![]
    });
    function _0x36a9ba(_0x4bd5d0, _0x404bd8) {
        return _0x5637(_0x4bd5d0 - -0x133, _0x404bd8);
    }
    document[_0x36a9ba(-0x128, -0x135)](_0x36a9ba(-0x122, -0x10a), handleDoubleClick);
}
function _0x2f03fc(_0x579770, _0x28b5c4) {
    return _0x5637(_0x579770 - -0xa3, _0x28b5c4);
}
document['addEventListener'](_0x2f03fc(-0xa1, -0xa9), _0x5d7daa => {
    function _0x5c9925(_0x54c1c3, _0x47e4bf) {
        return _0x2f03fc(_0x47e4bf - 0x118, _0x54c1c3);
    }
    if (_0x5d7daa[_0x5c9925(0x99, 0xa2)] && _0x5d7daa[_0x5c9925(0x8e, 0xa5)] === 'y' || _0x5d7daa['altKey'] && _0x5d7daa['key'] === 'y') {
        navigator[_0x5c9925(0x75, 0x76)][_0x5c9925(0x99, 0x9f)]()[_0x5c9925(0x8f, 0x9e)](_0x637f3d => {
            function _0x2b726c(_0x310572, _0x3773a3) {
                return _0x5c9925(_0x310572, _0x3773a3 - 0x12b);
            }
            if (document['activeElement'] instanceof HTMLInputElement || document[_0x2b726c(0x19d, 0x1ae)] instanceof HTMLTextAreaElement) {
                document[_0x2b726c(0x1a1, 0x1ae)]['value'] = _0x637f3d;
                document[_0x2b726c(0x1b2, 0x1ae)][_0x2b726c(0x1ba, 0x1a9)](new Event('input', { 'bubbles': !![] }));
            }
        })[_0x5c9925(0x7c, 0x8b)](_0x5c9f4f => {
            function _0x4baeb0(_0xeccc7f, _0x2a06f9) {
                return _0x5c9925(_0xeccc7f, _0x2a06f9 - 0x272);
            }
            console[_0x4baeb0(0x2de, 0x2ef)](_0x4baeb0(0x313, 0x312), _0x5c9f4f);
        });
    }
});
setTimeout(() => {
    Hack();
}, 0x9c40);
function _0x1dbb() {
    const _0x5bfd20 = [
        'black',
        'catch',
        'parts',
        '\x20please\x20Solve\x20a\x20question\x20in\x20simple\x20way\x20in\x20c++\x20Language\x20format',
        '5946570bSbBYP',
        '481089BwOoWx',
        '4347940uQLtEy',
        'closest',
        '12242LVkHtR',
        'Formatted\x20Clipboard\x20Text:',
        'style',
        '2766575iaRNKc',
        'innerText',
        'div[aria-labelledby=\x22each-type-question\x22]',
        'application/json',
        '222cBLPHh',
        '\x20using\x20',
        'Text\x20not\x20found',
        'AIzaSyBWAVaOhFgP3jZjg4AOWZAHnxdrmcDNh2c',
        'grey',
        'then',
        'readText',
        'Failed\x20to\x20paste:',
        'stringify',
        'ctrlKey',
        'disconnect',
        'Target\x20element\x20not\x20found',
        'key',
        'color',
        'text',
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=',
        'trim',
        'clipboard',
        'keydown',
        'content',
        'Extracted\x20Text:',
        '28BDNpYm',
        '873JaSrIr',
        'HTTP\x20error!\x20Status:\x20',
        'error',
        'dispatchEvent',
        '32088260xiqkJa',
        'addEventListener',
        'log',
        '40944ooMYOs',
        'activeElement',
        'Error:',
        'candidates',
        'dblclick',
        'Cleaned\x20Text:',
        '\x0a\x20print\x20in\x20proper\x20c\x20Language\x20\x20the\x20output\x20that\x20he/she\x20asked\x20for,\x20keeping\x20in\x20mind\x20this\x20thing.',
        'message'
    ];
    _0x1dbb = function () {
        return _0x5bfd20;
    };
    return _0x1dbb();
}
