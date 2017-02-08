import React from 'react';
import { declMod } from 'bem';

export default declMod(({ theme }) => theme, {
    block : 'Footer',
    mods({ theme }) {
        console.log('^__^');
        return {
            ...this.__base.apply(this, arguments),
            theme
        };
    },
    content() {
        return [
            'simple mod --> 0 ',
            <br key="br"/>,
            this.__base.apply(this, arguments)
        ];
    }
});
