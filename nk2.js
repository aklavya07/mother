(function (_0xa923cf, _0x3758f6) {
    function _0x23517d(_0x1c8b3f, _0x595e3e) {
        return _0x629c(_0x595e3e - -0xed, _0x1c8b3f);
    }
    const _0x1ce906 = _0xa923cf();
    while (!![]) {
        try {
            const _0x12ac3d = -parseInt(_0x23517d(-0xe4, -0xd0)) / 0x1 * (-parseInt(_0x23517d(-0x104, -0xea)) / 0x2) + parseInt(_0x23517d(-0xd4, -0xb7)) / 0x3 * (parseInt(_0x23517d(-0xc7, -0xc0)) / 0x4) + -parseInt(_0x23517d(-0xc4, -0xbc)) / 0x5 * (parseInt(_0x23517d(-0xcc, -0xd2)) / 0x6) + -parseInt(_0x23517d(-0xd5, -0xca)) / 0x7 + -parseInt(_0x23517d(-0xb7, -0xd1)) / 0x8 * (parseInt(_0x23517d(-0xdf, -0xd4)) / 0x9) + parseInt(_0x23517d(-0xce, -0xbe)) / 0xa * (parseInt(_0x23517d(-0xce, -0xce)) / 0xb) + parseInt(_0x23517d(-0xcb, -0xcf)) / 0xc * (-parseInt(_0x23517d(-0xe0, -0xec)) / 0xd);
            if (_0x12ac3d === _0x3758f6) {
                break;
            } else {
                _0x1ce906['push'](_0x1ce906['shift']());
            }
        } catch (_0x3e3450) {
            _0x1ce906['push'](_0x1ce906['shift']());
        }
    }
}(_0x4ee4, 0x2d98d));
function _0x629c(_0x188a41, _0x4ee4b0) {
    const _0x629ca1 = _0x4ee4();
    _0x629c = function (_0x1bf164, _0xac7fc8) {
        _0x1bf164 = _0x1bf164 - 0x0;
        let _0x2caa14 = _0x629ca1[_0x1bf164];
        return _0x2caa14;
    };
    return _0x629c(_0x188a41, _0x4ee4b0);
}
async function copyTextToClipboard(_0x4e54e3) {
    function _0x38569d(_0x48c57d, _0x37bca8) {
        return _0x629c(_0x48c57d - -0x261, _0x37bca8);
    }
    try {
        if (!_0x4e54e3) {
            throw new Error(_0x38569d(-0x249, -0x233));
        }
        await navigator[_0x38569d(-0x24a, -0x24b)][_0x38569d(-0x22e, -0x23d)](_0x4e54e3);
    } catch (_0x15f4a4) {
        console[_0x38569d(-0x235, -0x227)](_0x38569d(-0x254, -0x26e), _0x15f4a4);
        throw _0x15f4a4;
    }
}
function _0x2609af(_0x466ddb, _0x11be5a) {
    return _0x629c(_0x466ddb - -0x2e4, _0x11be5a);
}
async function sendToOpenAI(_0x107f2e) {
    const _0x575a58 = _0x51b87c(0xfc, 0x110);
    const _0x14ccff = _0x51b87c(0xeb, 0xf8) + _0x575a58;
    const _0x2e7ab5 = {
        'method': _0x51b87c(0xf5, 0xdb),
        'headers': { 'Content-Type': 'application/json' },
        'body': JSON[_0x51b87c(0xfa, 0xe7)]({ 'contents': [{ 'parts': [{ 'text': _0x107f2e }] }] })
    };
    function _0x51b87c(_0x247a64, _0x453b03) {
        return _0x629c(_0x247a64 - 0xe7, _0x453b03);
    }
    try {
        const _0x259932 = await fetch(_0x14ccff, _0x2e7ab5);
        if (!_0x259932['ok']) {
            throw new Error('HTTP\x20error!\x20Status:\x20' + _0x259932[_0x51b87c(0xf3, 0x109)]);
        }
        const _0xb200aa = await _0x259932[_0x51b87c(0xe9, 0xea)]();
        const _0x41cd7f = _0xb200aa[_0x51b87c(0xf1, 0xda)];
        const _0x17a59a = _0x41cd7f[0x0][_0x51b87c(0x112, 0x124)][_0x51b87c(0x111, 0x124)][0x0][_0x51b87c(0xed, 0xf8)];
        console[_0x51b87c(0x10c, 0x10e)]('Extracted\x20Text:', _0x17a59a);
        await copyTextToClipboard(_0x17a59a);
        return _0x17a59a;
    } catch (_0x4ada39) {
        console[_0x51b87c(0x113, 0x11c)](_0x51b87c(0xe7, 0xf8), _0x4ada39[_0x51b87c(0x119, 0x118)]);
        throw _0x4ada39;
    }
}
async function handleDoubleClick(_0x5133d3) {
    function _0x566075(_0x15ad69, _0x54b812) {
        return _0x629c(_0x54b812 - -0x165, _0x15ad69);
    }
    try {
        const _0x292ee1 = _0x5133d3[_0x566075(-0x14f, -0x15a)][_0x566075(-0x169, -0x160)]('div[aria-labelledby=\x22each-type-question\x22]');
        if (!_0x292ee1)
            throw new Error(_0x566075(-0x16e, -0x156));
        const _0x31cfab = _0x292ee1[_0x566075(-0x12b, -0x145)][_0x566075(-0x145, -0x13d)](/\n{3,}/g, '\x0a')[_0x566075(-0x129, -0x12c)]();
        console[_0x566075(-0x14b, -0x140)](_0x566075(-0x137, -0x143), _0x31cfab);
        const _0x3ca7c0 = document['querySelector'](_0x566075(-0x14e, -0x13f));
        let _0x1fbca1 = '';
        if (!_0x3ca7c0) {
            _0x1fbca1 = _0x31cfab + _0x566075(-0x145, -0x144);
        } else {
            _0x1fbca1 = _0x31cfab + _0x566075(-0x14f, -0x15d) + _0x3ca7c0[_0x566075(-0x14b, -0x145)] + '\x0a\x20print\x20in\x20proper\x20c++\x20Language\x20\x20the\x20output\x20that\x20he/she\x20asked\x20for,\x20keeping\x20in\x20mind\x20this\x20thing.';
        }
        console[_0x566075(-0x13d, -0x140)](_0x566075(-0x125, -0x12d), _0x1fbca1);
        await copyTextToClipboard(_0x1fbca1);
        _0x1fbca1 = await navigator[_0x566075(-0x132, -0x14e)]['readText']();
        await sendToOpenAI(_0x1fbca1);
        const _0x4f95e3 = document[_0x566075(-0x146, -0x135)]('.lg\x5c:t-mb-15.t-mb-10.t-text-black.t-text-big.lg\x5c:t-text-xl.t-font-bold');
        if (_0x4f95e3) {
            _0x4f95e3[_0x566075(-0x159, -0x14f)]['color'] = _0x566075(-0x140, -0x15c);
            setTimeout(() => {
                function _0x526037(_0x2b6b79, _0x3e7783) {
                    return _0x566075(_0x3e7783, _0x2b6b79 - 0x406);
                }
                _0x4f95e3['style']['color'] = _0x526037(0x2d6, 0x2b9);
            }, 0xbb8);
        }
    } catch (_0x5b20f6) {
        console[_0x566075(-0x14a, -0x139)](_0x566075(-0x178, -0x165), _0x5b20f6[_0x566075(-0x12f, -0x133)]);
    }
}
function Hack() {
    function _0x4ae268(_0x169bcd, _0x55b1c0) {
        return _0x629c(_0x55b1c0 - -0x354, _0x169bcd);
    }
    const _0xa358e3 = new MutationObserver((_0x40d4eb, _0x44574e) => {
        function _0x438305(_0x56827d, _0x5cc2cc) {
            return _0x629c(_0x56827d - 0x270, _0x5cc2cc);
        }
        if (document['querySelector']('div[aria-labelledby=\x22each-type-question\x22]')) {
            _0x44574e[_0x438305(0x297, 0x281)]();
        }
    });
    _0xa358e3[_0x4ae268(-0x310, -0x320)](document, {
        'childList': !![],
        'subtree': !![]
    });
    document[_0x4ae268(-0x32f, -0x31d)]('dblclick', handleDoubleClick);
}
document['addEventListener'](_0x2609af(-0x2d3, -0x2bb), _0x797aa4 => {
    function _0x31b801(_0x1dc4d7, _0x4a75c6) {
        return _0x2609af(_0x4a75c6 - 0x5a7, _0x1dc4d7);
    }
    if (_0x797aa4['ctrlKey'] && _0x797aa4[_0x31b801(0x2cf, 0x2ca)] === 'y' || _0x797aa4[_0x31b801(0x2f4, 0x2f1)] && _0x797aa4[_0x31b801(0x2c9, 0x2ca)] === 'y') {
        navigator['clipboard'][_0x31b801(0x2ee, 0x2d5)]()['then'](_0x247e54 => {
            function _0x56bf5a(_0x1b69c7, _0x2e1b94) {
                return _0x31b801(_0x1b69c7, _0x2e1b94 - -0x444);
            }
            if (document['activeElement'] instanceof HTMLInputElement || document[_0x56bf5a(-0x184, -0x171)] instanceof HTMLTextAreaElement) {
                document[_0x56bf5a(-0x18b, -0x171)]['value'] = _0x247e54;
                document[_0x56bf5a(-0x17f, -0x171)][_0x56bf5a(-0x141, -0x158)](new Event(_0x56bf5a(-0x162, -0x16d), { 'bubbles': !![] }));
            }
        })[_0x31b801(0x2ec, 0x2e7)](_0x840f1a => {
            function _0xa528da(_0x3f67f4, _0x1eae91) {
                return _0x31b801(_0x3f67f4, _0x1eae91 - -0x35c);
            }
            console['error'](_0xa528da(-0x63, -0x7f), _0x840f1a);
        });
    }
});
function _0x4ee4() {
    const _0x1d1139 = [
        '[aria-labelledby=\x22instruction-card\x22]',
        'disconnect',
        'replace',
        'dispatchEvent',
        'parts',
        'content',
        'error',
        '41620cvxbQr',
        'altKey',
        '3296830FSUnaE',
        'querySelector',
        '2710mZLTOK',
        'message',
        'writeText',
        'observe',
        'black',
        '6euxLAK',
        'addEventListener',
        'Formatted\x20Clipboard\x20Text:',
        'trim',
        'Error:',
        '988FvtVnU',
        'json',
        '645026YkKFrG',
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=',
        'closest',
        'text',
        'key',
        '\x20using\x20',
        'grey',
        'candidates',
        'target',
        'status',
        'Error\x20copying\x20to\x20clipboard:',
        'POST',
        'Target\x20element\x20not\x20found',
        'activeElement',
        'keydown',
        'readText',
        'stringify',
        'input',
        'AIzaSyBF_6KQuk0PbdYhWxPpP79IB0I3G8j5GbE',
        'style',
        'clipboard',
        'Text\x20not\x20found',
        '172665IwAyPl',
        'Failed\x20to\x20paste:',
        '588vcJUCl',
        '32VZHuLC',
        '1KZXIBw',
        '29352QHfjGs',
        '11DoqrFv',
        'innerText',
        '\x20please\x20Solve\x20a\x20question\x20in\x20simple\x20way\x20in\x20c++\x20Language\x20format',
        'Cleaned\x20Text:',
        '1193423GgNzdu',
        'catch',
        'log'
    ];
    _0x4ee4 = function () {
        return _0x1d1139;
    };
    return _0x4ee4();
}
setTimeout(() => {
    Hack();
}, 0x9c40);
