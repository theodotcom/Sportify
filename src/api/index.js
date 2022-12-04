import Api from "./api";
import ApiMock from "./apiMock";

const useMock = false;
let exportDefault = null;
if(useMock){
    exportDefault = ApiMock
} else {
    exportDefault = Api
}

export default exportDefault