const _0x7b61=['click','709163kziNoh','theme','removeAttribute','add','remove','47189CXjvTO','setItem','.alternate-style','.style-switcher','fa-moon','disabled','contains','title','fa-sun','610411FHSyEi','open','true','.style-switcher-toggler','querySelectorAll','classList','1152788yRNqKR','73DdXxPk','scroll','2810kjpoeV','1375847ViGRcp','body','2bOkwFX','setAttribute','.day-night','light','color','addEventListener','toggle','1095687QcWZxM','querySelector','dark','getItem','426qvFBVF'];const _0x49f1=function(_0x55f5a4,_0x36a4ab){_0x55f5a4=_0x55f5a4-0x134;let _0x7b613b=_0x7b61[_0x55f5a4];return _0x7b613b;};const _0x149a68=_0x49f1;(function(_0x36ffb7,_0x5b4dd3){const _0x32c2c6=_0x49f1;while(!![]){try{const _0x5341b8=parseInt(_0x32c2c6(0x140))+parseInt(_0x32c2c6(0x13e))*parseInt(_0x32c2c6(0x157))+parseInt(_0x32c2c6(0x13a))+parseInt(_0x32c2c6(0x158))+-parseInt(_0x32c2c6(0x14e))*parseInt(_0x32c2c6(0x15a))+parseInt(_0x32c2c6(0x154))+-parseInt(_0x32c2c6(0x155))*parseInt(_0x32c2c6(0x145));if(_0x5341b8===_0x5b4dd3)break;else _0x36ffb7['push'](_0x36ffb7['shift']());}catch(_0x205436){_0x36ffb7['push'](_0x36ffb7['shift']());}}}(_0x7b61,0xd329e));const styleSwitcherToggler=document[_0x149a68(0x13b)](_0x149a68(0x151));styleSwitcherToggler[_0x149a68(0x138)](_0x149a68(0x13f),()=>{const _0x228f1a=_0x149a68;document[_0x228f1a(0x13b)](_0x228f1a(0x148))[_0x228f1a(0x153)][_0x228f1a(0x139)](_0x228f1a(0x14f));}),window[_0x149a68(0x138)](_0x149a68(0x156),()=>{const _0x3b2927=_0x149a68;document['querySelector'](_0x3b2927(0x148))[_0x3b2927(0x153)][_0x3b2927(0x139)]('open')&&document[_0x3b2927(0x13b)]('.style-switcher')[_0x3b2927(0x153)][_0x3b2927(0x144)](_0x3b2927(0x14f));});const alternateStyles=document[_0x149a68(0x152)](_0x149a68(0x147));function setActiveStyle(_0x24683e){const _0x47e913=_0x149a68;localStorage[_0x47e913(0x146)](_0x47e913(0x137),_0x24683e),console['log'](localStorage['getItem'](_0x47e913(0x137))),changeColor();}function changeColor(){alternateStyles['forEach'](_0x5b0c73=>{const _0x328524=_0x49f1;localStorage[_0x328524(0x13d)]('color')===_0x5b0c73['getAttribute'](_0x328524(0x14c))?_0x5b0c73[_0x328524(0x142)](_0x328524(0x14a)):_0x5b0c73[_0x328524(0x134)](_0x328524(0x14a),_0x328524(0x150));});}if(localStorage['getItem'](_0x149a68(0x137))!==null)changeColor();else{}const dayNight=document[_0x149a68(0x13b)](_0x149a68(0x135));dayNight[_0x149a68(0x138)](_0x149a68(0x13f),()=>{const _0x57af20=_0x149a68;document[_0x57af20(0x159)][_0x57af20(0x153)][_0x57af20(0x139)](_0x57af20(0x13c)),document[_0x57af20(0x159)][_0x57af20(0x153)][_0x57af20(0x14b)](_0x57af20(0x13c))?localStorage['setItem'](_0x57af20(0x141),_0x57af20(0x13c)):localStorage[_0x57af20(0x146)](_0x57af20(0x141),_0x57af20(0x136));});function themeMode(){const _0x30a923=_0x149a68;localStorage[_0x30a923(0x13d)]('theme')!==null&&(localStorage[_0x30a923(0x13d)](_0x30a923(0x141))===_0x30a923(0x136)?document[_0x30a923(0x159)][_0x30a923(0x153)][_0x30a923(0x144)](_0x30a923(0x13c)):document[_0x30a923(0x159)]['classList'][_0x30a923(0x143)](_0x30a923(0x13c))),updateIcon();}themeMode();function updateIcon(){const _0x37abd3=_0x149a68;document[_0x37abd3(0x159)][_0x37abd3(0x153)][_0x37abd3(0x14b)](_0x37abd3(0x13c))?(dayNight[_0x37abd3(0x13b)]('i')[_0x37abd3(0x153)]['add']('fa-sun'),dayNight[_0x37abd3(0x13b)]('i')[_0x37abd3(0x153)]['remove'](_0x37abd3(0x149))):(dayNight[_0x37abd3(0x13b)]('i')[_0x37abd3(0x153)]['remove'](_0x37abd3(0x14d)),dayNight[_0x37abd3(0x13b)]('i')[_0x37abd3(0x153)]['add']('fa-moon'));}