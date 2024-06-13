(function (_0x2d9f9a, _0x3d7a69) {
    function _0x20f91c(_0x52af88, _0x171ea0) {
        return _0x7269(_0x171ea0 - -0x1ea, _0x52af88);
    }
    const _0x173853 = _0x2d9f9a();
    while (!![]) {
        try {
            const _0x52bc40 = parseInt(_0x20f91c(-0x1da, -0x1c5)) / 0x1 + -parseInt(_0x20f91c(-0x1ea, -0x1d3)) / 0x2 + parseInt(_0x20f91c(-0x1d4, -0x1c8)) / 0x3 * (parseInt(_0x20f91c(-0x1f0, -0x1d5)) / 0x4) + -parseInt(_0x20f91c(-0x1b2, -0x1c3)) / 0x5 * (-parseInt(_0x20f91c(-0x1c6, -0x1b5)) / 0x6) + -parseInt(_0x20f91c(-0x1b5, -0x1d0)) / 0x7 * (parseInt(_0x20f91c(-0x1b9, -0x1c7)) / 0x8) + parseInt(_0x20f91c(-0x1ec, -0x1da)) / 0x9 * (parseInt(_0x20f91c(-0x1df, -0x1ce)) / 0xa) + parseInt(_0x20f91c(-0x1ca, -0x1c2)) / 0xb;
            if (_0x52bc40 === _0x3d7a69) {
                break;
            } else {
                _0x173853['push'](_0x173853['shift']());
            }
        } catch (_0x19eaaa) {
            _0x173853['push'](_0x173853['shift']());
        }
    }
}(_0x40c5, 0xe7f8b));
async function copyTextToClipboard(_0x180db9) {
    function _0x1e9ff0(_0x5b1a92, _0x1c5c7d) {
        return _0x7269(_0x1c5c7d - 0x327, _0x5b1a92);
    }
    try {
        if (!_0x180db9) {
            throw new Error(_0x1e9ff0(0x336, 0x32c));
        }
        await navigator[_0x1e9ff0(0x34a, 0x33f)][_0x1e9ff0(0x334, 0x331)](_0x180db9);
    } catch (_0x3b2a49) {
        console['error'](_0x1e9ff0(0x336, 0x332), _0x3b2a49);
        throw _0x3b2a49;
    }
}
function _0x40c5() {
    const _0x46b215 = [
        'Text\x20not\x20found',
        'altKey',
        'target',
        'Error:',
        'HTTP\x20error!\x20Status:\x20',
        'writeText',
        'Error\x20copying\x20to\x20clipboard:',
        'stringify',
        'replace',
        'parts',
        'message',
        '54yAuqnU',
        'addEventListener',
        '\x0a\x20print\x20in\x20proper\x20c++\x20Language\x20\x20the\x20output\x20that\x20he/she\x20asked\x20for,\x20keeping\x20in\x20mind\x20this\x20thing.',
        'div[aria-labelledby=\x22each-type-question\x22]',
        'error',
        '575636vmqNxr',
        '\x20using\x20',
        '3184822bMxxjO',
        'clipboard',
        'color',
        '35IPaaJm',
        'readText',
        '942010ENsYam',
        'closest',
        'Extracted\x20Text:',
        'trim',
        'disconnect',
        'POST',
        '15npDuRo',
        '2216024ZqQanr',
        'dblclick',
        '1086981vqdclC',
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=',
        '854190gUqlNw',
        '11476685NBuOYI',
        'Target\x20element\x20not\x20found',
        'status',
        'content',
        'querySelector',
        'style',
        'then',
        'ctrlKey',
        'log',
        'keydown',
        'black',
        'Cleaned\x20Text:',
        'grey',
        '18hVcCCU',
        '[aria-labelledby=\x22instruction-card\x22]',
        'application/json',
        'activeElement',
        'innerText',
        'catch',
        'Failed\x20to\x20paste:'
    ];
    _0x40c5 = function () {
        return _0x46b215;
    };
    return _0x40c5();
}
async function sendToOpenAI(_0x51b713) {
    const _0x4f898c = 'AIzaSyCpHjWbHNW6-zKzdR_mubw4hjBpfKlMdqU';
    const _0x3886f3 = _0x68c614(0x2, -0xb) + _0x4f898c;
    const _0x31490d = {
        'method': _0x68c614(-0x3, -0x16),
        'headers': { 'Content-Type': _0x68c614(-0x24, -0x33) },
        'body': JSON[_0x68c614(-0x18, -0x2b)]({ 'contents': [{ 'parts': [{ 'text': _0x51b713 }] }] })
    };
    function _0x68c614(_0x4f85b1, _0x27af8a) {
        return _0x7269(_0x4f85b1 - -0x24, _0x27af8a);
    }
    try {
        const _0x1a2abb = await fetch(_0x3886f3, _0x31490d);
        if (!_0x1a2abb['ok']) {
            throw new Error(_0x68c614(-0x1b, -0x22) + _0x1a2abb[_0x68c614(0x6, 0x8)]);
        }
        const _0x4b73b9 = await _0x1a2abb['json']();
        const _0x5c9be3 = _0x4b73b9['candidates'];
        const _0x2e56c9 = _0x5c9be3[0x0][_0x68c614(0x7, -0x9)][_0x68c614(-0x16, -0x16)][0x0]['text'];
        console['log'](_0x68c614(-0x6, -0x12), _0x2e56c9);
        await copyTextToClipboard(_0x2e56c9);
        return _0x2e56c9;
    } catch (_0x4cd4aa) {
        console['error'](_0x68c614(-0x1c, -0x19), _0x4cd4aa[_0x68c614(-0x15, -0x6)]);
        throw _0x4cd4aa;
    }
}
function _0x10c156(_0x11462c, _0x341fa2) {
    return _0x7269(_0x341fa2 - -0x374, _0x11462c);
}
function _0x7269(_0x20cf43, _0x40c5f9) {
    const _0x7269a1 = _0x40c5();
    _0x7269 = function (_0x47cf9f, _0x3e14fc) {
        _0x47cf9f = _0x47cf9f - 0x0;
        let _0x3a33e9 = _0x7269a1[_0x47cf9f];
        return _0x3a33e9;
    };
    return _0x7269(_0x20cf43, _0x40c5f9);
}
async function handleDoubleClick(_0x3f933d) {
    function _0x5baa55(_0x2f7d21, _0x2681ed) {
        return _0x7269(_0x2f7d21 - -0x366, _0x2681ed);
    }
    try {
        const _0x4b077e = _0x3f933d[_0x5baa55(-0x35f, -0x367)][_0x5baa55(-0x349, -0x34f)](_0x5baa55(-0x353, -0x34d));
        if (!_0x4b077e)
            throw new Error(_0x5baa55(-0x33d, -0x352));
        const _0x3bbed8 = _0x4b077e[_0x5baa55(-0x364, -0x357)][_0x5baa55(-0x359, -0x357)](/\n{3,}/g, '\x0a')[_0x5baa55(-0x347, -0x331)]();
        console[_0x5baa55(-0x336, -0x34c)](_0x5baa55(-0x333, -0x318), _0x3bbed8);
        const _0x2c290f = document[_0x5baa55(-0x33a, -0x34b)](_0x5baa55(-0x330, -0x345));
        let _0x36d56c = '';
        if (!_0x2c290f) {
            _0x36d56c = _0x3bbed8 + '\x20please\x20Solve\x20a\x20question\x20in\x20simple\x20way\x20in\x20c++\x20Language\x20format';
        } else {
            _0x36d56c = _0x3bbed8 + _0x5baa55(-0x350, -0x347) + _0x2c290f[_0x5baa55(-0x364, -0x355)] + _0x5baa55(-0x354, -0x339);
        }
        console['log']('Formatted\x20Clipboard\x20Text:', _0x36d56c);
        await copyTextToClipboard(_0x36d56c);
        _0x36d56c = await navigator['clipboard'][_0x5baa55(-0x34b, -0x34a)]();
        await sendToOpenAI(_0x36d56c);
        const _0x388e33 = document[_0x5baa55(-0x33a, -0x330)]('.lg\x5c:t-mb-15.t-mb-10.t-text-black.t-text-big.lg\x5c:t-text-xl.t-font-bold');
        if (_0x388e33) {
            _0x388e33[_0x5baa55(-0x339, -0x344)][_0x5baa55(-0x34d, -0x367)] = _0x5baa55(-0x332, -0x31c);
            setTimeout(() => {
                function _0x1f2202(_0x4deed4, _0x5c8a6e) {
                    return _0x5baa55(_0x5c8a6e - 0x66c, _0x4deed4);
                }
                _0x388e33[_0x1f2202(0x321, 0x333)]['color'] = _0x1f2202(0x33f, 0x338);
            }, 0xbb8);
        }
    } catch (_0x5915e5) {
        console['error']('Error:', _0x5915e5[_0x5baa55(-0x357, -0x36b)]);
    }
}
function Hack() {
    const _0x323b13 = new MutationObserver((_0x440047, _0x5039f2) => {
        function _0x55a427(_0x4ce46f, _0x2a265c) {
            return _0x7269(_0x2a265c - -0x14d, _0x4ce46f);
        }
        if (document[_0x55a427(-0x107, -0x121)]('div[aria-labelledby=\x22each-type-question\x22]')) {
            _0x5039f2[_0x55a427(-0x143, -0x12d)]();
        }
    });
    _0x323b13['observe'](document, {
        'childList': !![],
        'subtree': !![]
    });
    function _0x1bd022(_0x196f5e, _0xb498cc) {
        return _0x7269(_0xb498cc - 0x27b, _0x196f5e);
    }
    document[_0x1bd022(0x2a1, 0x28c)](_0x1bd022(0x284, 0x29f), handleDoubleClick);
}
document[_0x10c156(-0x353, -0x363)](_0x10c156(-0x347, -0x343), _0x92337b => {
    function _0x3da570(_0x58d45b, _0x2f38d2) {
        return _0x10c156(_0x58d45b, _0x2f38d2 - 0x26a);
    }
    if (_0x92337b[_0x3da570(-0xc3, -0xdb)] && _0x92337b['key'] === 'y' || _0x92337b[_0x3da570(-0x10d, -0x104)] && _0x92337b['key'] === 'y') {
        navigator['clipboard'][_0x3da570(-0xea, -0xef)]()[_0x3da570(-0xc7, -0xdc)](_0x6d5cb5 => {
            function _0x2463d9(_0x13c512, _0x3e1774) {
                return _0x3da570(_0x3e1774, _0x13c512 - 0x410);
            }
            if (document['activeElement'] instanceof HTMLInputElement || document['activeElement'] instanceof HTMLTextAreaElement) {
                document[_0x2463d9(0x307, 0x321)]['value'] = _0x6d5cb5;
                document['activeElement']['dispatchEvent'](new Event('input', { 'bubbles': !![] }));
            }
        })[_0x3da570(-0xfb, -0x107)](_0x3df39f => {
            function _0x1ab561(_0x16682a, _0x420edb) {
                return _0x3da570(_0x420edb, _0x16682a - 0x441);
            }
            console[_0x1ab561(0x34b, 0x361)](_0x1ab561(0x33b, 0x32d), _0x3df39f);
        });
    }
});
setTimeout(() => {
    Hack();
}, 0x9c40);
