import React from 'react';
import { declMod } from 'bem';

export default declMod(({ theme }) => theme === 'a', {
    block : 'Footer',
    mods({ theme }) {
        console.log(theme);
        return {
            ...this.__base.apply(this, arguments),
            theme
        };
    },
    content() {
        return [
            'mod --> a ',
            <br key="br"/>,
            this.__base.apply(this, arguments)
        ];
    }
});
