import * as YY from 'yymap';
import * as Cesium from 'cesium';
import Mixins from './mixins';

const maptalks = YY.getNamespace().maptalks;

class Cesium3DTileset extends maptalks.Eventable(Cesium.Cesium3DTileset) {

}
maptalks.Util.extend(Cesium3DTileset.prototype, Mixins);

export default Cesium3DTileset;
