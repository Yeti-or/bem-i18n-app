import inherit from 'inherit';
import decls from 'bem-react-core/dist/lib/decls';
import BaseBemReact from 'bem-react-core/dist/lib/BaseComponent';
import ClassNameBuilder from 'bem-react-core/dist/lib/ClassNameBuilder';
import simpleComponent from 'bem-react-core/dist/lib/simpleComponent';

const classBuilder = new ClassNameBuilder({
    elementSeparator : '__',
    modSeparator : '_',
    modValueSeparator : '_'
});

const BaseComponent = inherit(BaseBemReact, {
    willInit() {
      this.state = {};
    },
    genClassName() {
      const { props } = this;
      const mix = classBuilder.joinMixes(props.mix, this.mix(props));
      return classBuilder.stringify(
        this.block, this.elem, this.mods(props), mix, this.cls(props)
      );
    }
});

const customDecls = decls({}, BaseComponent, classBuilder);

export const {decl, declMod} = customDecls;
export default simpleComponent(classBuilder);

