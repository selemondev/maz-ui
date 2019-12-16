(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["documentation12"],{6574:function(e,n,a){"use strict";a.r(n);var l=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"maz-btn-doc"},[a("ComponentContainer",{staticClass:"btn-container",attrs:{code:e.codeExample,language:"html"}},[a("h3",{staticClass:"mb-3"},[e._v(" Example ")]),a("MazBtnGroup",{attrs:{items:e.items},model:{value:e.btnGroupValue,callback:function(n){e.btnGroupValue=n},expression:"btnGroupValue"}}),a("MazBtnGroup",{attrs:{items:e.itemsBoolean,color:"info"},model:{value:e.btnGroupValueBoolean,callback:function(n){e.btnGroupValueBoolean=n},expression:"btnGroupValueBoolean"}}),a("MazBtnGroup",{attrs:{items:e.itemsString,rounded:"",color:"success"},model:{value:e.btnGroupValueString,callback:function(n){e.btnGroupValueString=n},expression:"btnGroupValueString"}}),a("MazBtnGroup",{attrs:{items:e.items,disabled:"",rounded:""},model:{value:e.btnGroupValue,callback:function(n){e.btnGroupValue=n},expression:"btnGroupValue"}}),a("p",[e._v("Number value : "+e._s(e.btnGroupValue))]),a("p",[e._v("Boolean value : "+e._s(e.btnGroupValueBoolean))]),a("p",[e._v("String value : "+e._s(e.btnGroupValueString||"null"))])],1)],1)},t=[],o={name:"MazBtnGroupDoc",data:function(){return{btnGroupValue:1,btnGroupValueBoolean:!1,btnGroupValueString:null,items:[{label:"Number 1",value:1},{label:"Number 2",value:2},{label:"Number 3",value:3}],itemsBoolean:[{label:"Boolean true",value:!0},{label:"Boolean false",value:!1}],itemsString:[{label:"String foo",value:"foo"},{label:"String bar",value:"bar"},{label:"String toto",value:"toto"},{label:"String tata",value:"tata"}],codeExample:"<template>\n  <MazBtnGroup\n    v-model=\"btnGroupValue\"\n    :items=\"items\"\n  />\n  <MazBtnGroup\n    v-model=\"btnGroupValueBoolean\"\n    :items=\"itemsBoolean\"\n    color=\"info\"\n  />\n  <MazBtnGroup\n    v-model=\"btnGroupValueString\"\n    :items=\"itemsString\"\n    rounded\n    color=\"success\"\n  />\n  <MazBtnGroup\n    v-model=\"btnGroupValue\"\n    :items=\"items\"\n    disabled\n    rounded\n  />\n</template>\n\nexport default {\n  data () {\n    return {\n      btnGroupValue: 1,\n      btnGroupValueBoolean: false,\n      btnGroupValueString: null,\n      items: [\n        { label: 'Number 1', value: 1 },\n        { label: 'Number 2', value: 2 },\n        { label: 'Number 3', value: 3 }\n      ],\n      itemsBoolean: [\n        { label: 'Boolean true', value: true },\n        { label: 'Boolean false', value: false }\n      ],\n      itemsString: [\n        { label: 'String foo', value: 'foo' },\n        { label: 'String bar', value: 'bar' },\n        { label: 'String toto', value: 'toto' },\n        { label: 'String tata', value: 'tata' }\n      ]\n    }\n  }\n}"}}},u=o,r=(a("df34"),a("2877")),i=Object(r["a"])(u,l,t,!1,null,"2a9774c2",null);n["default"]=i.exports},8660:function(e,n,a){},df34:function(e,n,a){"use strict";var l=a("8660"),t=a.n(l);t.a}}]);
//# sourceMappingURL=documentation12.4d9fa702.js.map