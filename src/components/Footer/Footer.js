import {decl} from 'bem';
// import './Footer.css';
// 
// import i18n from './Footer.i18n';
import i18n from 'b:Footer t:i18n';
// import i18n from 'bem-react-i18n-core';
//var core = require(\'bem-react-i18n-core\');

export default decl({
    block: 'Footer',
    content() {
        var count = 2;
        console.log(`${count}::${i18n('footer', 'mail', {count})}`);
        console.log(`param::${i18n('footer', 'link', {content: '42'}).join('')}`);
        return i18n('footer', 'text');
    }
});
