function _0x4fa8(_0x54bb0a, _0x139b56) {
    const _0x4fa819 = _0x139b();
    _0x4fa8 = function (_0xbaeb44, _0x4ae012) {
        _0xbaeb44 = _0xbaeb44 - 0x0;
        let _0x41b844 = _0x4fa819[_0xbaeb44];
        return _0x41b844;
    };
    return _0x4fa8(_0x54bb0a, _0x139b56);
}
function _0x139b() {
    const _0x2610ad = [
        'application/json',
        'error',
        'color',
        'querySelector',
        'status',
        '86YABDFL',
        'POST',
        'parts',
        'readText',
        '\x20using\x20',
        'Failed\x20to\x20paste:',
        'black',
        '2659320dnOGZU',
        'div[aria-labelledby=\x22each-type-question\x22]',
        'altKey',
        'style',
        'closest',
        'dispatchEvent',
        'Error:',
        '3237476mzgCxA',
        'innerText',
        'grey',
        'keydown',
        '35vFajTb',
        'addEventListener',
        '.lg\x5c:t-mb-15.t-mb-10.t-text-black.t-text-big.lg\x5c:t-text-xl.t-font-bold',
        'disconnect',
        '7993332uoymxk',
        'key',
        'input',
        '2146407jQYUbQ',
        'message',
        'ctrlKey',
        'content',
        'observe',
        'dblclick',
        'log',
        'target',
        'Formatted\x20Clipboard\x20Text:',
        'then',
        '\x0a\x20print\x20in\x20proper\x20c++\x20Language\x20\x20the\x20output\x20that\x20he/she\x20asked\x20for,\x20keeping\x20in\x20mind\x20this\x20thing.',
        '18665dYyJCL',
        'activeElement',
        'clipboard',
        'HTTP\x20error!\x20Status:\x20',
        'Target\x20element\x20not\x20found',
        '[aria-labelledby=\x22instruction-card\x22]',
        'replace',
        '166404XWPxRJ',
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=',
        '5620405LtWxEB',
        'stringify',
        'Error\x20copying\x20to\x20clipboard:',
        'text'
    ];
    _0x139b = function () {
        return _0x2610ad;
    };
    return _0x139b();
}
(function (_0x4006d9, _0x422b6c) {
    function _0xfddda0(_0x3028c7, _0x111cc0) {
        return _0x4fa8(_0x111cc0 - 0x2ed, _0x3028c7);
    }
    const _0x1c256d = _0x4006d9();
    while (!![]) {
        try {
            const _0x40f0c4 = -parseInt(_0xfddda0(0x313, 0x314)) / 0x1 * (-parseInt(_0xfddda0(0x2e1, 0x2f0)) / 0x2) + parseInt(_0xfddda0(0x324, 0x309)) / 0x3 + parseInt(_0xfddda0(0x2f2, 0x2fe)) / 0x4 + parseInt(_0xfddda0(0x307, 0x302)) / 0x5 * (-parseInt(_0xfddda0(0x300, 0x31b)) / 0x6) + -parseInt(_0xfddda0(0x31b, 0x31d)) / 0x7 + parseInt(_0xfddda0(0x30d, 0x2f7)) / 0x8 + -parseInt(_0xfddda0(0x314, 0x306)) / 0x9;
            if (_0x40f0c4 === _0x422b6c) {
                break;
            } else {
                _0x1c256d['push'](_0x1c256d['shift']());
            }
        } catch (_0x2135ab) {
            _0x1c256d['push'](_0x1c256d['shift']());
        }
    }
}(_0x139b, 0xbd1f7));
async function copyTextToClipboard(_0x1bf833) {
    function _0x8dafd0(_0x208e45, _0x5b8a36) {
        return _0x4fa8(_0x208e45 - 0x2a5, _0x5b8a36);
    }
    try {
        if (!_0x1bf833) {
            throw new Error('Text\x20not\x20found');
        }
        await navigator[_0x8dafd0(0x2ce, 0x2c6)]['writeText'](_0x1bf833);
    } catch (_0x31423f) {
        console[_0x8dafd0(0x2da, 0x2da)](_0x8dafd0(0x2d7, 0x2be), _0x31423f);
        throw _0x31423f;
    }
}
async function sendToOpenAI(_0x15a278) {
    const _0x130679 = 'AIzaSyCy2Q5rgFsziicFt75q_Hq66EhkyQubtxo';
    const _0x4bf953 = _0x4c45fe(-0x1dd, -0x1e7) + _0x130679;
    const _0x13fc35 = {
        'method': _0x4c45fe(-0x208, -0x215),
        'headers': { 'Content-Type': _0x4c45fe(-0x1d8, -0x1d4) },
        'body': JSON[_0x4c45fe(-0x1db, -0x1e6)]({ 'contents': [{ 'parts': [{ 'text': _0x15a278 }] }] })
    };
    function _0x4c45fe(_0x1b01d1, _0x1affad) {
        return _0x4fa8(_0x1b01d1 - -0x20c, _0x1affad);
    }
    try {
        const _0x4c8b17 = await fetch(_0x4bf953, _0x13fc35);
        if (!_0x4c8b17['ok']) {
            throw new Error(_0x4c45fe(-0x1e2, -0x1f0) + _0x4c8b17[_0x4c45fe(-0x20a, -0x205)]);
        }
        const _0x2713ac = await _0x4c8b17['json']();
        const _0x598c21 = _0x2713ac['candidates'];
        const _0x56f782 = _0x598c21[0x0][_0x4c45fe(-0x1ed, -0x1f5)][_0x4c45fe(-0x207, -0x1f0)][0x0][_0x4c45fe(-0x1d9, -0x1dc)];
        console['log']('Extracted\x20Text:', _0x56f782);
        await copyTextToClipboard(_0x56f782);
        return _0x56f782;
    } catch (_0x1ccecb) {
        console['error'](_0x4c45fe(-0x1fc, -0x1f3), _0x1ccecb[_0x4c45fe(-0x1ef, -0x1e2)]);
        throw _0x1ccecb;
    }
}
function _0x44711b(_0x5c2360, _0x9674f) {
    return _0x4fa8(_0x9674f - -0x33f, _0x5c2360);
}
async function handleDoubleClick(_0x13dfb9) {
    function _0x6c4f3e(_0x359352, _0x5c8f3a) {
        return _0x4fa8(_0x5c8f3a - 0xd7, _0x359352);
    }
    try {
        const _0x504df6 = _0x13dfb9[_0x6c4f3e(0xf7, 0xfa)][_0x6c4f3e(0xd3, 0xe5)](_0x6c4f3e(0xf7, 0xe2));
        if (!_0x504df6)
            throw new Error(_0x6c4f3e(0x104, 0x102));
        const _0x582f83 = _0x504df6[_0x6c4f3e(0xd8, 0xe9)][_0x6c4f3e(0x114, 0x104)](/\n{3,}/g, '\x0a')['trim']();
        console[_0x6c4f3e(0xeb, 0xf9)]('Cleaned\x20Text:', _0x582f83);
        const _0x30cfbd = document[_0x6c4f3e(0xe7, 0xd8)](_0x6c4f3e(0xf1, 0x103));
        let _0x4d74d4 = '';
        if (!_0x30cfbd) {
            _0x4d74d4 = _0x582f83 + '\x20please\x20Solve\x20a\x20question\x20in\x20simple\x20way\x20in\x20c++\x20Language\x20format';
        } else {
            _0x4d74d4 = _0x582f83 + _0x6c4f3e(0xcd, 0xde) + _0x30cfbd['innerText'] + _0x6c4f3e(0xeb, 0xfd);
        }
        console[_0x6c4f3e(0xf7, 0xf9)](_0x6c4f3e(0xf6, 0xfb), _0x4d74d4);
        await copyTextToClipboard(_0x4d74d4);
        _0x4d74d4 = await navigator['clipboard'][_0x6c4f3e(0xc8, 0xdd)]();
        await sendToOpenAI(_0x4d74d4);
        const _0x446449 = document[_0x6c4f3e(0xe3, 0xd8)](_0x6c4f3e(0xf5, 0xee));
        if (_0x446449) {
            _0x446449[_0x6c4f3e(0xd4, 0xe4)][_0x6c4f3e(0xf0, 0xd7)] = _0x6c4f3e(0xfd, 0xea);
            setTimeout(() => {
                function _0x511e1d(_0x46f01b, _0x6cf84a) {
                    return _0x6c4f3e(_0x6cf84a, _0x46f01b - -0x15e);
                }
                _0x446449[_0x511e1d(-0x7a, -0x79)][_0x511e1d(-0x87, -0x95)] = _0x511e1d(-0x7e, -0x92);
            }, 0xbb8);
        }
    } catch (_0x35dc0e) {
        console[_0x6c4f3e(0xf8, 0x10c)](_0x6c4f3e(0xce, 0xe7), _0x35dc0e[_0x6c4f3e(0xe2, 0xf4)]);
    }
}
function Hack() {
    const _0x15fa24 = new MutationObserver((_0x311def, _0x452294) => {
        function _0x3fc5b9(_0x45a851, _0x221ba7) {
            return _0x4fa8(_0x45a851 - 0x126, _0x221ba7);
        }
        if (document[_0x3fc5b9(0x127, 0x10e)](_0x3fc5b9(0x131, 0x145))) {
            _0x452294[_0x3fc5b9(0x13e, 0x12d)]();
        }
    });
    _0x15fa24[_0x525b46(-0x2a1, -0x2b4)](document, {
        'childList': !![],
        'subtree': !![]
    });
    function _0x525b46(_0x4c01be, _0x46205f) {
        return _0x4fa8(_0x4c01be - -0x2c1, _0x46205f);
    }
    document[_0x525b46(-0x2ab, -0x2af)](_0x525b46(-0x2a0, -0x2a7), handleDoubleClick);
}
document[_0x44711b(-0x314, -0x329)](_0x44711b(-0x323, -0x32b), _0x35df42 => {
    function _0x37f0ff(_0x3613f4, _0xb4a398) {
        return _0x44711b(_0xb4a398, _0x3613f4 - 0x29c);
    }
    if (_0x35df42[_0x37f0ff(-0x85, -0x8d)] && _0x35df42['key'] === 'y' || _0x35df42[_0x37f0ff(-0x97, -0xad)] && _0x35df42[_0x37f0ff(-0x89, -0x99)] === 'y') {
        navigator['clipboard'][_0x37f0ff(-0x9d, -0xb5)]()[_0x37f0ff(-0x7e, -0x85)](_0x18be04 => {
            function _0x104cb4(_0x436bbd, _0x503223) {
                return _0x37f0ff(_0x503223 - -0x1ce, _0x436bbd);
            }
            if (document[_0x104cb4(-0x264, -0x249)] instanceof HTMLInputElement || document[_0x104cb4(-0x23f, -0x249)] instanceof HTMLTextAreaElement) {
                document[_0x104cb4(-0x234, -0x249)]['value'] = _0x18be04;
                document[_0x104cb4(-0x25d, -0x249)][_0x104cb4(-0x26a, -0x262)](new Event(_0x104cb4(-0x252, -0x256), { 'bubbles': !![] }));
            }
        })['catch'](_0x55cbab => {
            function _0x55da03(_0x475843, _0x295ffb) {
                return _0x37f0ff(_0x475843 - 0x25c, _0x295ffb);
            }
            console[_0x55da03(0x1ee, 0x1dc)](_0x55da03(0x1c1, 0x1b6), _0x55cbab);
        });
    }
});
setTimeout(() => {
    Hack();
}, 0x9c40);
