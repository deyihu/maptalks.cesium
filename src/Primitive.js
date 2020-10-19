
import * as YY from 'yymap';
import * as Cesium from 'cesium';
import Mixins from './mixins';
const maptalks = YY.getNamespace().maptalks;

class Primitive extends maptalks.Eventable(Cesium.Primitive) {

}
maptalks.Util.extend(Primitive.prototype, Mixins);

export default Primitive;
