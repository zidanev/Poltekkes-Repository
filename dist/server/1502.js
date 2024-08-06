"use strict";exports.id=1502,exports.ids=[1502],exports.modules={91502:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{OrcidQueueDataService:()=>OrcidQueueDataService});var _shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10117),_cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(86786),_cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(57699),_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(40017),_data_base_delete_data__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(43626),_data_base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(68134),_data_base_search_data__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(19399),_data_request_service__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(72744),_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(91365),_angular_core__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(68014);let OrcidQueueDataService=(()=>{class OrcidQueueDataService2 extends _data_base_identifiable_data_service__WEBPACK_IMPORTED_MODULE_4__.W{constructor(requestService,rdbService,objectCache,halService,notificationsService){super("orcidqueues",requestService,rdbService,objectCache,halService,1e4),this.requestService=requestService,this.rdbService=rdbService,this.objectCache=objectCache,this.halService=halService,this.notificationsService=notificationsService,this.searchData=new _data_base_search_data__WEBPACK_IMPORTED_MODULE_5__.X(this.linkPath,requestService,rdbService,objectCache,halService,this.responseMsToLive),this.deleteData=new _data_base_delete_data__WEBPACK_IMPORTED_MODULE_3__.I(this.linkPath,requestService,rdbService,objectCache,halService,notificationsService,this.responseMsToLive,this.constructIdEndpoint)}searchByProfileItemId(itemId,paginationOptions,useCachedVersionIfAvailable=!0,reRequestOnStale=!0){return this.searchData.searchBy("findByProfileItem",{searchParams:[new _cache_models_request_param_model__WEBPACK_IMPORTED_MODULE_8__.x("profileItemId",itemId)],elementsPerPage:paginationOptions.pageSize,currentPage:paginationOptions.currentPage},useCachedVersionIfAvailable,reRequestOnStale)}deleteById(orcidQueueId){return this.deleteData.delete(orcidQueueId.toString())}clearFindByProfileItemRequests(){this.requestService.setStaleByHrefSubstring(this.linkPath+"/search/findByProfileItem")}static#_=this.\u0275fac=function(t){return new(t||OrcidQueueDataService2)(_angular_core__WEBPACK_IMPORTED_MODULE_9__.KVO(_data_request_service__WEBPACK_IMPORTED_MODULE_6__.B),_angular_core__WEBPACK_IMPORTED_MODULE_9__.KVO(_cache_builders_remote_data_build_service__WEBPACK_IMPORTED_MODULE_1__.o),_angular_core__WEBPACK_IMPORTED_MODULE_9__.KVO(_cache_object_cache_service__WEBPACK_IMPORTED_MODULE_2__.$),_angular_core__WEBPACK_IMPORTED_MODULE_9__.KVO(_shared_hal_endpoint_service__WEBPACK_IMPORTED_MODULE_7__.Y),_angular_core__WEBPACK_IMPORTED_MODULE_9__.KVO(_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_0__.I))};static#_2=this.\u0275prov=_angular_core__WEBPACK_IMPORTED_MODULE_9__.jDH({token:OrcidQueueDataService2,factory:OrcidQueueDataService2.\u0275fac,providedIn:"root"})}return OrcidQueueDataService2})()}};