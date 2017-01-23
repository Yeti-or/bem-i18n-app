import {decl} from 'bem';
// import './Footer.css';
// 
import i18n from './Footer.i18n';

export default decl({
    block: 'Footer',
    content() {
        return i18n('footer', 'text');
    }
});
