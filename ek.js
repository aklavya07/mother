(function (_0x2f8295, _0x379f6c) {
    const _0x7e2ea5 = _0x2f8295();
    function _0xf070cd(_0x1beee9, _0x519fa0) {
        return _0xe5aa(_0x1beee9 - -0x16e, _0x519fa0);
    }
    while (!![]) {
        try {
            const _0x143011 = -parseInt(_0xf070cd(-0x15f, -0x168)) / 0x1 + parseInt(_0xf070cd(-0x15b, -0x16d)) / 0x2 + parseInt(_0xf070cd(-0x169, -0x153)) / 0x3 * (-parseInt(_0xf070cd(-0x16a, -0x15f)) / 0x4) + parseInt(_0xf070cd(-0x144, -0x142)) / 0x5 * (-parseInt(_0xf070cd(-0x162, -0x15a)) / 0x6) + parseInt(_0xf070cd(-0x13d, -0x13f)) / 0x7 + parseInt(_0xf070cd(-0x151, -0x15b)) / 0x8 + parseInt(_0xf070cd(-0x13b, -0x131)) / 0x9;
            if (_0x143011 === _0x379f6c) {
                break;
            } else {
                _0x7e2ea5['push'](_0x7e2ea5['shift']());
            }
        } catch (_0x4974b9) {
            _0x7e2ea5['push'](_0x7e2ea5['shift']());
        }
    }
}(_0x53a6, 0xd3887));
async function copyTextToClipboard(_0x35638c) {
    function _0x11d3e3(_0x1bc716, _0x2af2bf) {
        return _0xe5aa(_0x2af2bf - 0x3c8, _0x1bc716);
    }
    try {
        if (!_0x35638c) {
            throw new Error(_0x11d3e3(0x3ed, 0x3ec));
        }
        await navigator[_0x11d3e3(0x3ce, 0x3e0)]['writeText'](_0x35638c);
    } catch (_0x7b9054) {
        console[_0x11d3e3(0x405, 0x3ed)](_0x11d3e3(0x3da, 0x3cf), _0x7b9054);
        throw _0x7b9054;
    }
}
function _0xe5aa(_0x552afa, _0x53a60c) {
    const _0xe5aa62 = _0x53a6();
    _0xe5aa = function (_0x19b62f, _0x13caa1) {
        _0x19b62f = _0x19b62f - 0x0;
        let _0x269d51 = _0xe5aa62[_0x19b62f];
        return _0x269d51;
    };
    return _0xe5aa(_0x552afa, _0x53a60c);
}
async function sendToOpenAI(_0x5e64e8) {
    function _0x1db940(_0x54133c, _0x516bf4) {
        return _0xe5aa(_0x54133c - 0x2b1, _0x516bf4);
    }
    const _0x92da92 = _0x1db940(0x2bb, 0x2cd);
    const _0xab7cd0 = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + _0x92da92;
    const _0x50ca97 = {
        'method': 'POST',
        'headers': { 'Content-Type': _0x1db940(0x2d1, 0x2d8) },
        'body': JSON[_0x1db940(0x2e0, 0x2f5)]({ 'contents': [{ 'parts': [{ 'text': _0x5e64e8 }] }] })
    };
    try {
        const _0x4e0058 = await fetch(_0xab7cd0, _0x50ca97);
        if (!_0x4e0058['ok']) {
            throw new Error(_0x1db940(0x2cd, 0x2dd) + _0x4e0058[_0x1db940(0x2dd, 0x2c7)]);
        }
        const _0x44fd5a = await _0x4e0058[_0x1db940(0x2df, 0x2f8)]();
        const _0x12e3e6 = _0x44fd5a['candidates'];
        const _0x31aea8 = _0x12e3e6[0x0]['content']['parts'][0x0][_0x1db940(0x2bf, 0x2cb)];
        console[_0x1db940(0x2d9, 0x2df)](_0x1db940(0x2dc, 0x2c6), _0x31aea8);
        await copyTextToClipboard(_0x31aea8);
        return _0x31aea8;
    } catch (_0x8f5e93) {
        console[_0x1db940(0x2d6, 0x2bf)](_0x1db940(0x2c3, 0x2ab), _0x8f5e93['message']);
        throw _0x8f5e93;
    }
}
async function handleDoubleClick(_0x3459cd) {
    function _0x27f7f4(_0x435e1b, _0x1fd647) {
        return _0xe5aa(_0x1fd647 - 0x155, _0x435e1b);
    }
    try {
        const _0x1e9272 = _0x3459cd[_0x27f7f4(0x174, 0x166)][_0x27f7f4(0x15f, 0x155)](_0x27f7f4(0x17e, 0x16e));
        if (!_0x1e9272)
            throw new Error(_0x27f7f4(0x17f, 0x16b));
        const _0x226b96 = _0x1e9272['innerText'][_0x27f7f4(0x17f, 0x17b)](/\n{3,}/g, '\x0a')[_0x27f7f4(0x170, 0x173)]();
        console[_0x27f7f4(0x185, 0x17d)]('Cleaned\x20Text:', _0x226b96);
        const _0xe29e67 = document[_0x27f7f4(0x165, 0x174)](_0x27f7f4(0x13f, 0x156));
        let _0x3df2db = '';
        if (!_0xe29e67) {
            _0x3df2db = _0x226b96 + '\x20please\x20Solve\x20a\x20question\x20in\x20simple\x20way\x20in\x20c++\x20Language\x20format';
        } else {
            _0x3df2db = _0x226b96 + _0x27f7f4(0x16e, 0x169) + _0xe29e67['innerText'] + _0x27f7f4(0x151, 0x15d);
        }
        console['log'](_0x27f7f4(0x186, 0x170), _0x3df2db);
        await copyTextToClipboard(_0x3df2db);
        _0x3df2db = await navigator[_0x27f7f4(0x173, 0x16d)]['readText']();
        await sendToOpenAI(_0x3df2db);
        const _0x5687ee = document[_0x27f7f4(0x171, 0x174)](_0x27f7f4(0x14f, 0x158));
        if (_0x5687ee) {
            _0x5687ee[_0x27f7f4(0x197, 0x187)][_0x27f7f4(0x17c, 0x165)] = _0x27f7f4(0x155, 0x15e);
            setTimeout(() => {
                function _0x4e71bc(_0x180f2b, _0x5ac7c3) {
                    return _0x27f7f4(_0x180f2b, _0x5ac7c3 - -0x102);
                }
                _0x5687ee['style']['color'] = _0x4e71bc(0x6a, 0x80);
            }, 0xbb8);
        }
    } catch (_0x57fc6c) {
        console[_0x27f7f4(0x186, 0x17a)](_0x27f7f4(0x17a, 0x167), _0x57fc6c[_0x27f7f4(0x178, 0x16f)]);
    }
}
function Hack() {
    const _0x3f242f = new MutationObserver((_0xd4fef0, _0x2bf99c) => {
        function _0x403c4f(_0x4e1c4, _0x52522b) {
            return _0xe5aa(_0x52522b - -0x3d9, _0x4e1c4);
        }
        if (document[_0x403c4f(-0x3a5, -0x3ba)](_0x403c4f(-0x3ae, -0x3c0))) {
            _0x2bf99c[_0x403c4f(-0x3c3, -0x3b2)]();
        }
    });
    function _0x3350cb(_0x2c4040, _0x5520a5) {
        return _0xe5aa(_0x5520a5 - 0x104, _0x2c4040);
    }
    _0x3f242f['observe'](document, {
        'childList': !![],
        'subtree': !![]
    });
    document['addEventListener'](_0x3350cb(0x101, 0x10a), handleDoubleClick);
}
function _0x3f43ca(_0x420275, _0x5ddc57) {
    return _0xe5aa(_0x420275 - 0x164, _0x5ddc57);
}
document[_0x3f43ca(0x194, 0x17e)](_0x3f43ca(0x187, 0x193), _0x3d1135 => {
    function _0x4d657f(_0x2eab48, _0x49daf0) {
        return _0x3f43ca(_0x2eab48 - -0x299, _0x49daf0);
    }
    if (_0x3d1135[_0x4d657f(-0x10c, -0x119)] && _0x3d1135[_0x4d657f(-0x133, -0x13f)] === 'y' || _0x3d1135['altKey'] && _0x3d1135[_0x4d657f(-0x133, -0x140)] === 'y') {
        navigator[_0x4d657f(-0x11d, -0x116)][_0x4d657f(-0x120, -0x12f)]()[_0x4d657f(-0x11e, -0x133)](_0x328ac7 => {
            function _0x348bc7(_0x4fee40, _0x1cac62) {
                return _0x4d657f(_0x1cac62 - -0xab, _0x4fee40);
            }
            if (document['activeElement'] instanceof HTMLInputElement || document['activeElement'] instanceof HTMLTextAreaElement) {
                document[_0x348bc7(-0x1d7, -0x1be)][_0x348bc7(-0x1c6, -0x1d5)] = _0x328ac7;
                document[_0x348bc7(-0x1a8, -0x1be)][_0x348bc7(-0x1ab, -0x1bf)](new Event(_0x348bc7(-0x1bb, -0x1d3), { 'bubbles': !![] }));
            }
        })['catch'](_0x2ebc00 => {
            function _0x1b524a(_0x487fc7, _0x59aaa2) {
                return _0x4d657f(_0x487fc7 - 0x2f3, _0x59aaa2);
            }
            console[_0x1b524a(0x1e3, 0x1f6)]('Failed\x20to\x20paste:', _0x2ebc00);
        });
    }
});
function _0x53a6() {
    const _0x4febd7 = [
        '2740tsxgvz',
        'Extracted\x20Text:',
        'status',
        'black',
        'json',
        'stringify',
        'addEventListener',
        '8864849NPZNHn',
        'style',
        '15183315Ygtcdd',
        'closest',
        '[aria-labelledby=\x22instruction-card\x22]',
        'key',
        '.lg\x5c:t-mb-15.t-mb-10.t-text-black.t-text-big.lg\x5c:t-text-xl.t-font-bold',
        '5936548PBPdSL',
        '3QpUHrc',
        'dblclick',
        'Error\x20copying\x20to\x20clipboard:',
        '\x0a\x20print\x20in\x20proper\x20c\x20Language\x20\x20the\x20output\x20that\x20he/she\x20asked\x20for,\x20keeping\x20in\x20mind\x20this\x20thing.',
        'grey',
        'AIzaSyCgQIE3wkGs2Uj0e1T95WcsXRuKYxXHAV0',
        'value',
        '9066ziLMQX',
        'input',
        'text',
        '423174YxUMoA',
        'color',
        'target',
        'Error:',
        '1130678ZcJfbx',
        '\x20using\x20',
        'readText',
        'Target\x20element\x20not\x20found',
        'then',
        'clipboard',
        'div[aria-labelledby=\x22each-type-question\x22]',
        'message',
        'Formatted\x20Clipboard\x20Text:',
        'HTTP\x20error!\x20Status:\x20',
        '663976wtqvBC',
        'trim',
        'querySelector',
        'application/json',
        'dispatchEvent',
        'activeElement',
        'keydown',
        'Text\x20not\x20found',
        'error',
        'replace',
        'disconnect',
        'log',
        'ctrlKey'
    ];
    _0x53a6 = function () {
        return _0x4febd7;
    };
    return _0x53a6();
}
setTimeout(() => {
    Hack();
}, 0x9c40);
