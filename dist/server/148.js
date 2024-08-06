"use strict";exports.id=148,exports.ids=[148],exports.modules={80148:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{VersionDataService:()=>VersionDataService});var rxjs__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(74785),rxjs_operators__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(10743),_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(77028),_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(32181),_cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(86786),_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(40017),_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(91365),_shared_operators__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(82656),_base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(68134),_base_patch_data__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(75467),_default_change_analyzer_service__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(84237),_request_service__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(72744),_angular_core__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(68014);let VersionDataService=(()=>{class VersionDataService2 extends _base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_4__.W{constructor(requestService,rdbService,objectCache,halService,comparator){super("versions",requestService,rdbService,objectCache,halService),this.requestService=requestService,this.rdbService=rdbService,this.objectCache=objectCache,this.halService=halService,this.comparator=comparator,this.patchData=new _base_patch_data__WEBPACK_IMPORTED_MODULE_5__.n(this.linkPath,requestService,rdbService,objectCache,halService,comparator,this.responseMsToLive,this.constructIdEndpoint)}getHistoryFromVersion(version,useCachedVersionIfAvailable=!1,reRequestOnStale=!0){return(0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_8__.hj)(version)?this.findById(version.id,useCachedVersionIfAvailable,reRequestOnStale,(0,_shared_utils_follow_link_config_model__WEBPACK_IMPORTED_MODULE_9__.s)("versionhistory")).pipe((0,_shared_operators__WEBPACK_IMPORTED_MODULE_3__.ak)(),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.nx)(res=>res.versionhistory),(0,_shared_operators__WEBPACK_IMPORTED_MODULE_3__.ak)()):rxjs__WEBPACK_IMPORTED_MODULE_11__.EMPTY}getHistoryIdFromVersion(version){return this.getHistoryFromVersion(version).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.Tj)(versionHistory=>versionHistory.id))}patch(object,operations){return this.patchData.patch(object,operations)}update(object){return this.patchData.update(object)}commitUpdates(method){this.patchData.commitUpdates(method)}createPatchFromCache(object){return this.patchData.createPatchFromCache(object)}static#_=this.\u0275fac=function(t){return new(t||VersionDataService2)(_angular_core__WEBPACK_IMPORTED_MODULE_12__.KVO(_request_service__WEBPACK_IMPORTED_MODULE_7__.B),_angular_core__WEBPACK_IMPORTED_MODULE_12__.KVO(_cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_0__.o),_angular_core__WEBPACK_IMPORTED_MODULE_12__.KVO(_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_1__.$),_angular_core__WEBPACK_IMPORTED_MODULE_12__.KVO(_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_2__.Y),_angular_core__WEBPACK_IMPORTED_MODULE_12__.KVO(_default_change_analyzer_service__WEBPACK_IMPORTED_MODULE_6__.Y))};static#_2=this.\u0275prov=_angular_core__WEBPACK_IMPORTED_MODULE_12__.jDH({token:VersionDataService2,factory:VersionDataService2.\u0275fac,providedIn:"root"})}return VersionDataService2})()}};