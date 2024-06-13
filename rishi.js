(function (_0x21db9d, _0x7507bf) {
    function _0x4b6d0c(_0x5b2008, _0x2b4344) {
        return _0x4d95(_0x2b4344 - -0x216, _0x5b2008);
    }
    const _0x154956 = _0x21db9d();
    while (!![]) {
        try {
            const _0xdc46e5 = parseInt(_0x4b6d0c(-0x21c, -0x206)) / 0x1 * (-parseInt(_0x4b6d0c(-0x1fa, -0x207)) / 0x2) + -parseInt(_0x4b6d0c(-0x1fa, -0x1f2)) / 0x3 + parseInt(_0x4b6d0c(-0x1e5, -0x1fc)) / 0x4 * (parseInt(_0x4b6d0c(-0x20a, -0x20d)) / 0x5) + parseInt(_0x4b6d0c(-0x20d, -0x210)) / 0x6 * (parseInt(_0x4b6d0c(-0x1f6, -0x1f9)) / 0x7) + -parseInt(_0x4b6d0c(-0x1da, -0x1e8)) / 0x8 + parseInt(_0x4b6d0c(-0x207, -0x213)) / 0x9 * (parseInt(_0x4b6d0c(-0x215, -0x20e)) / 0xa) + -parseInt(_0x4b6d0c(-0x1f3, -0x1e4)) / 0xb;
            if (_0xdc46e5 === _0x7507bf) {
                break;
            } else {
                _0x154956['push'](_0x154956['shift']());
            }
        } catch (_0x7a143e) {
            _0x154956['push'](_0x154956['shift']());
        }
    }
}(_0x4b78, 0x311a7));
async function copyTextToClipboard(_0x30649b) {
    function _0x59105b(_0x66b67f, _0x35a6db) {
        return _0x4d95(_0x66b67f - -0x1db, _0x35a6db);
    }
    try {
        if (!_0x30649b) {
            throw new Error('Text\x20not\x20found');
        }
        await navigator[_0x59105b(-0x1a5, -0x18b)][_0x59105b(-0x1da, -0x1dd)](_0x30649b);
    } catch (_0x30fdc3) {
        console['error'](_0x59105b(-0x1bf, -0x1bf), _0x30fdc3);
        throw _0x30fdc3;
    }
}
function _0x4d95(_0x12da31, _0x4b78d5) {
    const _0x4d95a6 = _0x4b78();
    _0x4d95 = function (_0x5a7d53, _0xe2cdc6) {
        _0x5a7d53 = _0x5a7d53 - 0x0;
        let _0x57d75b = _0x4d95a6[_0x5a7d53];
        return _0x57d75b;
    };
    return _0x4d95(_0x12da31, _0x4b78d5);
}
async function sendToOpenAI(_0x3ea348) {
    const _0x43d672 = _0x1ece67(0x63, 0x4b);
    const _0x57dbac = _0x1ece67(0x54, 0x5a) + _0x43d672;
    const _0x59d829 = {
        'method': _0x1ece67(0x3e, 0x54),
        'headers': { 'Content-Type': _0x1ece67(0x8a, 0x6d) },
        'body': JSON['stringify']({ 'contents': [{ 'parts': [{ 'text': _0x3ea348 }] }] })
    };
    function _0x1ece67(_0x4ddd20, _0x605868) {
        return _0x4d95(_0x605868 - 0x41, _0x4ddd20);
    }
    try {
        const _0x2ea979 = await fetch(_0x57dbac, _0x59d829);
        if (!_0x2ea979['ok']) {
            throw new Error(_0x1ece67(0x30, 0x4c) + _0x2ea979[_0x1ece67(0x3a, 0x46)]);
        }
        const _0x39f023 = await _0x2ea979['json']();
        const _0x34e5a1 = _0x39f023['candidates'];
        const _0x111654 = _0x34e5a1[0x0][_0x1ece67(0x57, 0x5c)][_0x1ece67(0x6a, 0x56)][0x0][_0x1ece67(0x95, 0x7b)];
        console[_0x1ece67(0x84, 0x67)](_0x1ece67(0x5f, 0x6e), _0x111654);
        await copyTextToClipboard(_0x111654);
        return _0x111654;
    } catch (_0x377fa1) {
        console[_0x1ece67(0x28, 0x45)](_0x1ece67(0x55, 0x68), _0x377fa1[_0x1ece67(0x74, 0x70)]);
        throw _0x377fa1;
    }
}
async function handleDoubleClick(_0x5af87d) {
    function _0x58ef39(_0x89e11e, _0x5a9039) {
        return _0x4d95(_0x89e11e - -0x2b1, _0x5a9039);
    }
    try {
        const _0x427964 = _0x5af87d[_0x58ef39(-0x28e, -0x29f)][_0x58ef39(-0x293, -0x27a)](_0x58ef39(-0x2a0, -0x292));
        if (!_0x427964)
            throw new Error(_0x58ef39(-0x290, -0x28b));
        const _0x44bf04 = _0x427964[_0x58ef39(-0x280, -0x282)][_0x58ef39(-0x299, -0x286)](/\n{3,}/g, '\x0a')['trim']();
        console[_0x58ef39(-0x28b, -0x27a)](_0x58ef39(-0x286, -0x27e), _0x44bf04);
        const _0x18d456 = document[_0x58ef39(-0x29a, -0x29f)](_0x58ef39(-0x27e, -0x288));
        let _0x580ef1 = '';
        if (!_0x18d456) {
            _0x580ef1 = _0x44bf04 + _0x58ef39(-0x27c, -0x27c);
        } else {
            _0x580ef1 = _0x44bf04 + _0x58ef39(-0x278, -0x291) + _0x18d456[_0x58ef39(-0x280, -0x28b)] + _0x58ef39(-0x29f, -0x289);
        }
        console[_0x58ef39(-0x28b, -0x27d)]('Formatted\x20Clipboard\x20Text:', _0x580ef1);
        await copyTextToClipboard(_0x580ef1);
        _0x580ef1 = await navigator[_0x58ef39(-0x27b, -0x263)]['readText']();
        await sendToOpenAI(_0x580ef1);
        const _0x73a35e = document[_0x58ef39(-0x29a, -0x288)](_0x58ef39(-0x287, -0x2a0));
        if (_0x73a35e) {
            _0x73a35e[_0x58ef39(-0x2a5, -0x2c1)][_0x58ef39(-0x29d, -0x2a3)] = _0x58ef39(-0x27a, -0x277);
            setTimeout(() => {
                function _0x5e322b(_0x5f1756, _0x52659d) {
                    return _0x58ef39(_0x52659d - 0x184, _0x5f1756);
                }
                _0x73a35e[_0x5e322b(-0x11f, -0x121)][_0x5e322b(-0xff, -0x119)] = _0x5e322b(-0xed, -0xfd);
            }, 0xbb8);
        }
    } catch (_0x1f460b) {
        console[_0x58ef39(-0x2ad, -0x29e)](_0x58ef39(-0x28a, -0x2a3), _0x1f460b[_0x58ef39(-0x282, -0x29e)]);
    }
}
function Hack() {
    const _0x1f3917 = new MutationObserver((_0x350852, _0x1677e3) => {
        function _0x1f773d(_0x55028b, _0x8abb78) {
            return _0x4d95(_0x8abb78 - -0x1b4, _0x55028b);
        }
        if (document[_0x1f773d(-0x185, -0x19d)](_0x1f773d(-0x1bb, -0x1a3))) {
            _0x1677e3[_0x1f773d(-0x1a1, -0x1a7)]();
        }
    });
    function _0x555da7(_0x520015, _0x379323) {
        return _0x4d95(_0x379323 - -0x1bb, _0x520015);
    }
    _0x1f3917[_0x555da7(-0x181, -0x193)](document, {
        'childList': !![],
        'subtree': !![]
    });
    document['addEventListener'](_0x555da7(-0x1a1, -0x199), handleDoubleClick);
}
function _0xe7411d(_0x4af346, _0x4dc613) {
    return _0x4d95(_0x4af346 - -0x8c, _0x4dc613);
}
document[_0xe7411d(-0x8a, -0x76)]('keydown', _0x5880f7 => {
    function _0x2a0689(_0x24a517, _0x589e76) {
        return _0xe7411d(_0x589e76 - -0x35c, _0x24a517);
    }
    if (_0x5880f7[_0x2a0689(-0x397, -0x3b0)] && _0x5880f7['key'] === 'y' || _0x5880f7[_0x2a0689(-0x3a6, -0x3c3)] && _0x5880f7[_0x2a0689(-0x3ce, -0x3d2)] === 'y') {
        navigator[_0x2a0689(-0x3c2, -0x3b2)][_0x2a0689(-0x3d8, -0x3c8)]()[_0x2a0689(-0x3cd, -0x3e8)](_0x180617 => {
            function _0x2281c9(_0x5d12a2, _0x549e4b) {
                return _0x2a0689(_0x549e4b, _0x5d12a2 - 0x1fb);
            }
            if (document[_0x2281c9(-0x1df, -0x1eb)] instanceof HTMLInputElement || document[_0x2281c9(-0x1df, -0x1ee)] instanceof HTMLTextAreaElement) {
                document['activeElement']['value'] = _0x180617;
                document['activeElement'][_0x2281c9(-0x1c4, -0x1d4)](new Event(_0x2281c9(-0x1ce, -0x1c4), { 'bubbles': !![] }));
            }
        })[_0x2a0689(-0x3b4, -0x3b4)](_0x484f74 => {
            function _0x25bd42(_0x8deb90, _0x21c651) {
                return _0x2a0689(_0x21c651, _0x8deb90 - 0x7aa);
            }
            console[_0x25bd42(0x3c6, 0x3df)](_0x25bd42(0x3c9, 0x3e3), _0x484f74);
        });
    }
});
function _0x4b78() {
    const _0x5286c8 = [
        'key',
        'querySelector',
        'replace',
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=',
        '71108QGHlHk',
        'content',
        'Error\x20copying\x20to\x20clipboard:',
        '14kCksgf',
        'closest',
        'input',
        'readText',
        'Target\x20element\x20not\x20found',
        'dblclick',
        'target',
        '72582ZQYijr',
        'altKey',
        'log',
        'Error:',
        'observe',
        'dispatchEvent',
        '.lg\x5c:t-mb-15.t-mb-10.t-text-black.t-text-big.lg\x5c:t-text-xl.t-font-bold',
        'Cleaned\x20Text:',
        'application/json',
        'Extracted\x20Text:',
        '2730896IKZxmc',
        'message',
        'black',
        'innerText',
        '188243HfCvuW',
        '[aria-labelledby=\x22instruction-card\x22]',
        'catch',
        '\x20please\x20Solve\x20a\x20question\x20in\x20simple\x20way\x20in\x20c++\x20Language\x20format',
        'clipboard',
        'grey',
        'ctrlKey',
        '\x20using\x20',
        'text',
        'then',
        'writeText',
        'addEventListener',
        '11943zQGNVU',
        'error',
        'status',
        '989646acmMzw',
        'Failed\x20to\x20paste:',
        '380TXNwAv',
        '90XfZpMY',
        'AIzaSyAVpqiDsaGRKKQctGraccJR0fDrW4cpFlY',
        'HTTP\x20error!\x20Status:\x20',
        'style',
        'disconnect',
        'activeElement',
        '124sWlPKZ',
        '1879ihBBOG',
        'div[aria-labelledby=\x22each-type-question\x22]',
        '\x0a\x20print\x20in\x20proper\x20c\x20Language\x20\x20the\x20output\x20that\x20he/she\x20asked\x20for,\x20keeping\x20in\x20mind\x20this\x20thing.',
        'POST',
        'color',
        'parts'
    ];
    _0x4b78 = function () {
        return _0x5286c8;
    };
    return _0x4b78();
}
setTimeout(() => {
    Hack();
}, 0x9c40);
