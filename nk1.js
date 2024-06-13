(function (_0x510018, _0x8d3ff2) {
    const _0x4b242c = _0x510018();
    function _0x22c260(_0x295e9a, _0x2c9073) {
        return _0x1645(_0x295e9a - 0x8e, _0x2c9073);
    }
    while (!![]) {
        try {
            const _0x28d5c3 = parseInt(_0x22c260(0x9d, 0xa5)) / 0x1 + -parseInt(_0x22c260(0xa2, 0xb3)) / 0x2 + -parseInt(_0x22c260(0xbd, 0xb8)) / 0x3 + parseInt(_0x22c260(0xbc, 0xb1)) / 0x4 + -parseInt(_0x22c260(0xa0, 0x94)) / 0x5 * (parseInt(_0x22c260(0xae, 0xbb)) / 0x6) + parseInt(_0x22c260(0xa9, 0x9c)) / 0x7 + parseInt(_0x22c260(0xba, 0xd6)) / 0x8;
            if (_0x28d5c3 === _0x8d3ff2) {
                break;
            } else {
                _0x4b242c['push'](_0x4b242c['shift']());
            }
        } catch (_0x8bf2d6) {
            _0x4b242c['push'](_0x4b242c['shift']());
        }
    }
}(_0x3098, 0x28cad));
function _0x1645(_0x474e28, _0x3098c0) {
    const _0x16458f = _0x3098();
    _0x1645 = function (_0x24d6a4, _0x424517) {
        _0x24d6a4 = _0x24d6a4 - 0x0;
        let _0x1b1070 = _0x16458f[_0x24d6a4];
        return _0x1b1070;
    };
    return _0x1645(_0x474e28, _0x3098c0);
}
async function copyTextToClipboard(_0x5532f7) {
    function _0x48bfca(_0x3016f2, _0x1fbea6) {
        return _0x1645(_0x1fbea6 - -0x7a, _0x3016f2);
    }
    try {
        if (!_0x5532f7) {
            throw new Error(_0x48bfca(-0x59, -0x45));
        }
        await navigator[_0x48bfca(-0x86, -0x72)][_0x48bfca(-0x46, -0x5e)](_0x5532f7);
    } catch (_0x3b332a) {
        console[_0x48bfca(-0x88, -0x6d)](_0x48bfca(-0x7c, -0x6c), _0x3b332a);
        throw _0x3b332a;
    }
}
async function sendToOpenAI(_0x54bd30) {
    const _0x4bbd7d = _0x2dafd5(0x1d, 0x38);
    const _0xf7f67c = _0x2dafd5(0x52, 0x4a) + _0x4bbd7d;
    const _0x2b1032 = {
        'method': 'POST',
        'headers': { 'Content-Type': _0x2dafd5(0x3a, 0x36) },
        'body': JSON['stringify']({ 'contents': [{ 'parts': [{ 'text': _0x54bd30 }] }] })
    };
    function _0x2dafd5(_0x17cc00, _0x1ddfb9) {
        return _0x1645(_0x1ddfb9 - 0x23, _0x17cc00);
    }
    try {
        const _0x20efea = await fetch(_0xf7f67c, _0x2b1032);
        if (!_0x20efea['ok']) {
            throw new Error('HTTP\x20error!\x20Status:\x20' + _0x20efea[_0x2dafd5(0x46, 0x45)]);
        }
        const _0x3f3b12 = await _0x20efea[_0x2dafd5(0x4b, 0x39)]();
        const _0x372c81 = _0x3f3b12[_0x2dafd5(0x5a, 0x4d)];
        const _0x5687db = _0x372c81[0x0][_0x2dafd5(0x10, 0x25)][_0x2dafd5(0x1a, 0x29)][0x0][_0x2dafd5(0x19, 0x33)];
        console[_0x2dafd5(0x64, 0x56)]('Extracted\x20Text:', _0x5687db);
        await copyTextToClipboard(_0x5687db);
        return _0x5687db;
    } catch (_0x5da88c) {
        console['error'](_0x2dafd5(0x49, 0x5a), _0x5da88c[_0x2dafd5(0x34, 0x44)]);
        throw _0x5da88c;
    }
}
async function handleDoubleClick(_0x51a527) {
    function _0x283a04(_0x594c36, _0x4f18e4) {
        return _0x1645(_0x594c36 - 0x109, _0x4f18e4);
    }
    try {
        const _0x470daa = _0x51a527['target'][_0x283a04(0x12e, 0x140)](_0x283a04(0x134, 0x147));
        if (!_0x470daa)
            throw new Error(_0x283a04(0x109, 0xf5));
        const _0x14e07a = _0x470daa[_0x283a04(0x112, 0x11b)]['replace'](/\n{3,}/g, '\x0a')[_0x283a04(0x12c, 0x12c)]();
        console[_0x283a04(0x13c, 0x155)](_0x283a04(0x115, 0xff), _0x14e07a);
        const _0x201fbb = document['querySelector'](_0x283a04(0x121, 0x133));
        let _0x244b0a = '';
        if (!_0x201fbb) {
            _0x244b0a = _0x14e07a + _0x283a04(0x128, 0x120);
        } else {
            _0x244b0a = _0x14e07a + _0x283a04(0x123, 0x118) + _0x201fbb[_0x283a04(0x112, 0x125)] + _0x283a04(0x120, 0x109);
        }
        console[_0x283a04(0x13c, 0x149)](_0x283a04(0x136, 0x125), _0x244b0a);
        await copyTextToClipboard(_0x244b0a);
        _0x244b0a = await navigator[_0x283a04(0x111, 0xf6)][_0x283a04(0x131, 0x129)]();
        await sendToOpenAI(_0x244b0a);
        const _0x101458 = document[_0x283a04(0x132, 0x122)](_0x283a04(0x13d, 0x146));
        if (_0x101458) {
            _0x101458[_0x283a04(0x114, 0x11d)][_0x283a04(0x122, 0x134)] = 'grey';
            setTimeout(() => {
                function _0x3e2300(_0x29ccb0, _0x44b6f9) {
                    return _0x283a04(_0x29ccb0 - 0x1ef, _0x44b6f9);
                }
                _0x101458[_0x3e2300(0x303, 0x31f)][_0x3e2300(0x311, 0x315)] = _0x3e2300(0x329, 0x32d);
            }, 0xbb8);
        }
    } catch (_0x3ced13) {
        console[_0x283a04(0x116, 0xfc)](_0x283a04(0x140, 0x12d), _0x3ced13[_0x283a04(0x12a, 0x13e)]);
    }
}
function Hack() {
    const _0x121293 = new MutationObserver((_0x486105, _0x17a396) => {
        function _0x4c6cdd(_0x467fb5, _0x5adbdb) {
            return _0x1645(_0x5adbdb - -0x3ba, _0x467fb5);
        }
        if (document[_0x4c6cdd(-0x384, -0x391)](_0x4c6cdd(-0x392, -0x38f))) {
            _0x17a396[_0x4c6cdd(-0x37d, -0x388)]();
        }
    });
    function _0x27f0f8(_0x5bb200, _0x5af41d) {
        return _0x1645(_0x5bb200 - -0x23d, _0x5af41d);
    }
    _0x121293[_0x27f0f8(-0x20d, -0x224)](document, {
        'childList': !![],
        'subtree': !![]
    });
    document[_0x27f0f8(-0x238, -0x23b)](_0x27f0f8(-0x219, -0x22a), handleDoubleClick);
}
function _0x4f7da0(_0x763a78, _0x2aff18) {
    return _0x1645(_0x763a78 - 0x2f0, _0x2aff18);
}
document[_0x4f7da0(0x2f5, 0x2f4)](_0x4f7da0(0x2f7, 0x2e9), _0x2d592c => {
    function _0x57eb2c(_0x2a9f7a, _0x2391e0) {
        return _0x4f7da0(_0x2391e0 - -0x6a0, _0x2a9f7a);
    }
    if (_0x2d592c[_0x57eb2c(-0x394, -0x392)] && _0x2d592c[_0x57eb2c(-0x3c6, -0x3ac)] === 'y' || _0x2d592c['altKey'] && _0x2d592c[_0x57eb2c(-0x395, -0x3ac)] === 'y') {
        navigator[_0x57eb2c(-0x39a, -0x3a8)]['readText']()[_0x57eb2c(-0x38c, -0x39f)](_0x1ae203 => {
            function _0x3d4a8a(_0x33f9eb, _0x11bca4) {
                return _0x57eb2c(_0x33f9eb, _0x11bca4 - 0x34c);
            }
            if (document[_0x3d4a8a(-0x2b, -0x47)] instanceof HTMLInputElement || document[_0x3d4a8a(-0x2b, -0x47)] instanceof HTMLTextAreaElement) {
                document['activeElement'][_0x3d4a8a(-0x46, -0x5a)] = _0x1ae203;
                document[_0x3d4a8a(-0x50, -0x47)][_0x3d4a8a(-0x32, -0x3e)](new Event(_0x3d4a8a(-0x75, -0x63), { 'bubbles': !![] }));
            }
        })[_0x57eb2c(-0x3a0, -0x3ad)](_0x1cd5a0 => {
            function _0x1339cd(_0x4c99b8, _0x24c21d) {
                return _0x57eb2c(_0x24c21d, _0x4c99b8 - 0xa7);
            }
            console['error'](_0x1339cd(-0x2d3, -0x2ed), _0x1cd5a0);
        });
    }
});
function _0x3098() {
    const _0x5c8911 = [
        '421966XBVOXY',
        'AIzaSyBVLygMFzwJsE5jdh5yTAnsOLwfx6J7xa0',
        'json',
        '\x0a\x20print\x20in\x20proper\x20c++\x20Language\x20\x20the\x20output\x20that\x20he/she\x20asked\x20for,\x20keeping\x20in\x20mind\x20this\x20thing.',
        '[aria-labelledby=\x22instruction-card\x22]',
        'color',
        '\x20using\x20',
        '1560797CZlbpa',
        'writeText',
        'activeElement',
        'ctrlKey',
        '\x20please\x20Solve\x20a\x20question\x20in\x20simple\x20way\x20in\x20c++\x20Language\x20format',
        '32784oHTqhs',
        'message',
        'status',
        'trim',
        'dblclick',
        'closest',
        'dispatchEvent',
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=',
        'readText',
        'querySelector',
        'candidates',
        'div[aria-labelledby=\x22each-type-question\x22]',
        '942048aIrVnY',
        'Formatted\x20Clipboard\x20Text:',
        '771832qcjpgJ',
        '44331WYAled',
        'observe',
        'black',
        'disconnect',
        'log',
        '.lg\x5c:t-mb-15.t-mb-10.t-text-black.t-text-big.lg\x5c:t-text-xl.t-font-bold',
        'Text\x20not\x20found',
        'Failed\x20to\x20paste:',
        'Error:',
        'Target\x20element\x20not\x20found',
        'input',
        'content',
        'catch',
        'key',
        'addEventListener',
        'parts',
        'keydown',
        'clipboard',
        'innerText',
        'value',
        'style',
        'Cleaned\x20Text:',
        'error',
        'Error\x20copying\x20to\x20clipboard:',
        '110504lgAMki',
        'text',
        'then',
        '230MaDJkP',
        'application/json'
    ];
    _0x3098 = function () {
        return _0x5c8911;
    };
    return _0x3098();
}
setTimeout(() => {
    Hack();
}, 0x9c40);
