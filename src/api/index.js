import Api from "./api";
import ApiMock from "./apiMock";

/** Allow to switch from Api's datas to ApiMockeds' datas
 */
const useMock = false;
let exportDefault = null;
if(useMock){
    exportDefault = ApiMock
} else {
    exportDefault = Api
}

export default exportDefault