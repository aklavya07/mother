(function (_0xd591c4, _0x4af3c6) {
    function _0x4d32bd(_0x20f126, _0x154adc) {
        return _0x27ef(_0x154adc - -0xe7, _0x20f126);
    }
    const _0x5400f8 = _0xd591c4();
    while (!![]) {
        try {
            const _0x3387f9 = -parseInt(_0x4d32bd(-0xe4, -0xd3)) / 0x1 * (parseInt(_0x4d32bd(-0xcd, -0xc7)) / 0x2) + -parseInt(_0x4d32bd(-0xa0, -0xbb)) / 0x3 * (-parseInt(_0x4d32bd(-0xd3, -0xd7)) / 0x4) + parseInt(_0x4d32bd(-0xb5, -0xb2)) / 0x5 * (-parseInt(_0x4d32bd(-0xd9, -0xbe)) / 0x6) + -parseInt(_0x4d32bd(-0xc7, -0xbd)) / 0x7 + parseInt(_0x4d32bd(-0xd4, -0xcc)) / 0x8 * (parseInt(_0x4d32bd(-0xa8, -0xb5)) / 0x9) + parseInt(_0x4d32bd(-0xc6, -0xb7)) / 0xa * (parseInt(_0x4d32bd(-0xd8, -0xd6)) / 0xb) + parseInt(_0x4d32bd(-0xce, -0xe6)) / 0xc;
            if (_0x3387f9 === _0x4af3c6) {
                break;
            } else {
                _0x5400f8['push'](_0x5400f8['shift']());
            }
        } catch (_0x2c41f1) {
            _0x5400f8['push'](_0x5400f8['shift']());
        }
    }
}(_0x4a7c, 0xb3c8b));
function _0x4a7c() {
    const _0x346b0b = [
        'writeText',
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=',
        'altKey',
        'grey',
        '\x20using\x20',
        'readText',
        'keydown',
        'value',
        '117460HBHSOU',
        '2387jmZJJo',
        'addEventListener',
        'HTTP\x20error!\x20Status:\x20',
        '1xFWAnE',
        'key',
        'status',
        'log',
        'trim',
        'clipboard',
        'Error:',
        '729896vssRiU',
        'innerText',
        'activeElement',
        'style',
        'AIzaSyCgQIE3wkGs2Uj0e1T95WcsXRuKYxXHAV0',
        '2377726uWrVGH',
        'Text\x20not\x20found',
        'ctrlKey',
        '.lg\x5c:t-mb-15.t-mb-10.t-text-black.t-text-big.lg\x5c:t-text-xl.t-font-bold',
        'color',
        'disconnect',
        'div[aria-labelledby=\x22each-type-question\x22]',
        'observe',
        'content',
        '181452vlXNhH',
        '9170707qqNcxJ',
        'json',
        '36nTqndD',
        'candidates',
        'dblclick',
        'Extracted\x20Text:',
        '21980XQMNGZ',
        '\x0a\x20print\x20in\x20proper\x20c++\x20Language\x20\x20the\x20output\x20that\x20he/she\x20asked\x20for,\x20keeping\x20in\x20mind\x20this\x20thing.',
        '117ZLqRIF',
        'message',
        'then',
        '5IhrYEV',
        'error',
        'text',
        '\x20please\x20Solve\x20a\x20question\x20in\x20simple\x20way\x20in\x20c++\x20Language\x20format',
        'input',
        '15002088fMUgFA',
        'application/json',
        'Target\x20element\x20not\x20found',
        'Cleaned\x20Text:',
        '[aria-labelledby=\x22instruction-card\x22]',
        'POST',
        'querySelector'
    ];
    _0x4a7c = function () {
        return _0x346b0b;
    };
    return _0x4a7c();
}
async function copyTextToClipboard(_0x3c56df) {
    function _0x23286f(_0x52cdb3, _0x4c0b45) {
        return _0x27ef(_0x52cdb3 - 0x1c2, _0x4c0b45);
    }
    try {
        if (!_0x3c56df) {
            throw new Error(_0x23286f(0x1e3, 0x1e3));
        }
        await navigator[_0x23286f(0x1db, 0x1ee)][_0x23286f(0x1ca, 0x1e6)](_0x3c56df);
    } catch (_0x196a5c) {
        console[_0x23286f(0x1f8, 0x1ed)]('Error\x20copying\x20to\x20clipboard:', _0x196a5c);
        throw _0x196a5c;
    }
}
async function sendToOpenAI(_0x65adee) {
    const _0x316088 = _0x33413c(0x391, 0x387);
    const _0x1b9257 = _0x33413c(0x37b, 0x367) + _0x316088;
    const _0x12684f = {
        'method': _0x33413c(0x378, 0x362),
        'headers': { 'Content-Type': _0x33413c(0x374, 0x380) },
        'body': JSON['stringify']({ 'contents': [{ 'parts': [{ 'text': _0x65adee }] }] })
    };
    function _0x33413c(_0x484f4e, _0x37d481) {
        return _0x27ef(_0x484f4e - 0x372, _0x37d481);
    }
    try {
        const _0x1c2c93 = await fetch(_0x1b9257, _0x12684f);
        if (!_0x1c2c93['ok']) {
            throw new Error(_0x33413c(0x385, 0x376) + _0x1c2c93[_0x33413c(0x388, 0x370)]);
        }
        const _0x9fba32 = await _0x1c2c93[_0x33413c(0x39d, 0x3a6)]();
        const _0x14c18e = _0x9fba32[_0x33413c(0x39f, 0x3b2)];
        const _0x2a10dd = _0x14c18e[0x0][_0x33413c(0x39a, 0x37e)]['parts'][0x0][_0x33413c(0x3a9, 0x3b2)];
        console[_0x33413c(0x389, 0x3a2)](_0x33413c(0x3a1, 0x388), _0x2a10dd);
        await copyTextToClipboard(_0x2a10dd);
        return _0x2a10dd;
    } catch (_0x78f0f3) {
        console[_0x33413c(0x3a8, 0x3b6)](_0x33413c(0x38c, 0x39b), _0x78f0f3[_0x33413c(0x3a5, 0x395)]);
        throw _0x78f0f3;
    }
}
async function handleDoubleClick(_0x300f5d) {
    function _0x11d0ef(_0x242154, _0x32163f) {
        return _0x27ef(_0x32163f - 0x115, _0x242154);
    }
    try {
        const _0x10427e = _0x300f5d['target']['closest'](_0x11d0ef(0x132, 0x13b));
        if (!_0x10427e)
            throw new Error(_0x11d0ef(0x113, 0x118));
        const _0x326862 = _0x10427e[_0x11d0ef(0x14c, 0x131)]['replace'](/\n{3,}/g, '\x0a')[_0x11d0ef(0x127, 0x12d)]();
        console[_0x11d0ef(0x111, 0x12c)](_0x11d0ef(0x125, 0x119), _0x326862);
        const _0x39d2b6 = document[_0x11d0ef(0x122, 0x11c)](_0x11d0ef(0x115, 0x11a));
        let _0x2e1742 = '';
        if (!_0x39d2b6) {
            _0x2e1742 = _0x326862 + _0x11d0ef(0x157, 0x14d);
        } else {
            _0x2e1742 = _0x326862 + _0x11d0ef(0x130, 0x121) + _0x39d2b6[_0x11d0ef(0x123, 0x131)] + _0x11d0ef(0x161, 0x146);
        }
        console[_0x11d0ef(0x12d, 0x12c)]('Formatted\x20Clipboard\x20Text:', _0x2e1742);
        await copyTextToClipboard(_0x2e1742);
        _0x2e1742 = await navigator[_0x11d0ef(0x119, 0x12e)][_0x11d0ef(0x139, 0x122)]();
        await sendToOpenAI(_0x2e1742);
        const _0x18ccf2 = document[_0x11d0ef(0x11d, 0x11c)](_0x11d0ef(0x14c, 0x138));
        if (_0x18ccf2) {
            _0x18ccf2[_0x11d0ef(0x122, 0x133)][_0x11d0ef(0x121, 0x139)] = _0x11d0ef(0x109, 0x120);
            setTimeout(() => {
                function _0x40e1d2(_0x202bf9, _0x379dc9) {
                    return _0x11d0ef(_0x379dc9, _0x202bf9 - -0x36b);
                }
                _0x18ccf2['style'][_0x40e1d2(-0x232, -0x244)] = 'black';
            }, 0xbb8);
        }
    } catch (_0x42baf7) {
        console[_0x11d0ef(0x15e, 0x14b)](_0x11d0ef(0x144, 0x12f), _0x42baf7[_0x11d0ef(0x145, 0x148)]);
    }
}
function _0x27ef(_0x14666f, _0x4a7c2e) {
    const _0x27efd1 = _0x4a7c();
    _0x27ef = function (_0x40fc45, _0x3cc3ce) {
        _0x40fc45 = _0x40fc45 - 0x0;
        let _0x4607d2 = _0x27efd1[_0x40fc45];
        return _0x4607d2;
    };
    return _0x27ef(_0x14666f, _0x4a7c2e);
}
function Hack() {
    const _0x3ab424 = new MutationObserver((_0x1ffafe, _0x12c6ea) => {
        function _0x5c8836(_0x3508b0, _0x114252) {
            return _0x27ef(_0x3508b0 - -0x8a, _0x114252);
        }
        if (document[_0x5c8836(-0x83, -0x81)](_0x5c8836(-0x64, -0x5b))) {
            _0x12c6ea[_0x5c8836(-0x65, -0x6c)]();
        }
    });
    function _0x41d004(_0x3efba3, _0x5f3014) {
        return _0x27ef(_0x5f3014 - -0xd, _0x3efba3);
    }
    _0x3ab424[_0x41d004(0x1, 0x1a)](document, {
        'childList': !![],
        'subtree': !![]
    });
    document[_0x41d004(-0x16, 0x5)](_0x41d004(0x22, 0x21), handleDoubleClick);
}
document['addEventListener'](_0x46078d(0x162, 0x178), _0x54a978 => {
    function _0x140d4b(_0x13960f, _0x23f596) {
        return _0x46078d(_0x23f596 - -0x11c, _0x13960f);
    }
    if (_0x54a978[_0x140d4b(0x6d, 0x5a)] && _0x54a978[_0x140d4b(0x53, 0x4d)] === 'y' || _0x54a978[_0x140d4b(0x47, 0x42)] && _0x54a978[_0x140d4b(0x41, 0x4d)] === 'y') {
        navigator[_0x140d4b(0x45, 0x51)]['readText']()[_0x140d4b(0x53, 0x6c)](_0x1fdd34 => {
            function _0x3984e0(_0x4bbe4d, _0x13537f) {
                return _0x140d4b(_0x4bbe4d, _0x13537f - -0x1c3);
            }
            if (document[_0x3984e0(-0x163, -0x16e)] instanceof HTMLInputElement || document[_0x3984e0(-0x15d, -0x16e)] instanceof HTMLTextAreaElement) {
                document[_0x3984e0(-0x166, -0x16e)][_0x3984e0(-0x187, -0x17c)] = _0x1fdd34;
                document[_0x3984e0(-0x177, -0x16e)]['dispatchEvent'](new Event(_0x3984e0(-0x188, -0x18b), { 'bubbles': !![] }));
            }
        })['catch'](_0x242df4 => {
            function _0x3d4442(_0x1eda2f, _0x440383) {
                return _0x140d4b(_0x440383, _0x1eda2f - 0x4d);
            }
            console[_0x3d4442(0xbb, 0xa8)]('Failed\x20to\x20paste:', _0x242df4);
        });
    }
});
function _0x46078d(_0x44a685, _0x4ecc78) {
    return _0x27ef(_0x44a685 - 0x154, _0x4ecc78);
}
setTimeout(() => {
    Hack();
}, 0x9c40);
