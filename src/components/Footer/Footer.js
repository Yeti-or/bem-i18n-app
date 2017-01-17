import React, {Component} from 'react';
// import './Footer.css';
// 
import i18n from './Footer.i18n';

class Footer extends Component {
    render() {
        return (
            <div>{i18n('footer', 'text')}</div>
        );
    }
}

export default Footer;
