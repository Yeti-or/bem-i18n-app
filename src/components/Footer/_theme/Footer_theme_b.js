import React from 'react';
import { declMod } from 'bem';

export default declMod(({ theme }) => theme, {
    block : 'Footer',
    mods({ theme }) {
        console.log('^__^ -- b');
        return {
            ...this.__base.apply(this, arguments),
            theme
        };
    },
    content() {
        return [
            'mod --> b ',
            <br key="br"/>,
            this.__base.apply(this, arguments)
        ];
    }
});
