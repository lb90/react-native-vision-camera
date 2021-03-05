(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{109:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=r.a.createContext({}),c=function(e){var t=r.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},l=function(e){var t=c(e.components);return r.a.createElement(m.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),l=c(n),u=a,d=l["".concat(p,".").concat(u)]||l[u]||O[u]||i;return n?r.a.createElement(d,b(b({ref:t},m),{},{components:n})):r.a.createElement(d,b({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=u;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,p[1]=b;for(var m=2;m<i;m++)p[m]=n[m];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return c}));var a=n(3),r=n(7),i=(n(0),n(109)),p={id:"photofile",title:"Module: PhotoFile",sidebar_label:"PhotoFile",custom_edit_url:null,hide_title:!0},b={unversionedId:"api/modules/photofile",id:"api/modules/photofile",isDocsHomePage:!1,title:"Module: PhotoFile",description:"Module: PhotoFile",source:"@site/docs/api/modules/photofile.md",slug:"/api/modules/photofile",permalink:"/react-native-vision-camera/docs/api/modules/photofile",editUrl:null,version:"current",sidebar_label:"PhotoFile",sidebar:"someSidebar",previous:{title:"Module: Code",permalink:"/react-native-vision-camera/docs/api/modules/code"},next:{title:"Module: Point",permalink:"/react-native-vision-camera/docs/api/modules/point"}},o=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Interfaces",id:"interfaces",children:[]}]},{value:"Type aliases",id:"type-aliases",children:[{value:"PhotoFile",id:"photofile",children:[]}]}],m={toc:o};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"module-photofile"},"Module: PhotoFile"),Object(i.b)("h2",{id:"table-of-contents"},"Table of contents"),Object(i.b)("h3",{id:"interfaces"},"Interfaces"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/react-native-vision-camera/docs/api/interfaces/photofile.takephotooptions"},"TakePhotoOptions"))),Object(i.b)("h2",{id:"type-aliases"},"Type aliases"),Object(i.b)("h3",{id:"photofile"},"PhotoFile"),Object(i.b)("p",null,"\u01ac ",Object(i.b)("strong",{parentName:"p"},"PhotoFile"),": ",Object(i.b)("em",{parentName:"p"},"Readonly"),"<",Object(i.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/temporaryfile#temporaryfile"},Object(i.b)("em",{parentName:"a"},"TemporaryFile"))," & { ",Object(i.b)("inlineCode",{parentName:"p"},"height"),": ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"isRawPhoto"),": ",Object(i.b)("em",{parentName:"p"},"boolean")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"metadata"),": { ",Object(i.b)("inlineCode",{parentName:"p"},"DPIHeight"),": ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"DPIWidth"),": ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"Orientation"),": ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"{Exif}"),": { ",Object(i.b)("inlineCode",{parentName:"p"},"ApertureValue"),": ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"BrightnessValue"),": ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"ColorSpace"),": ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"DateTimeDigitized"),": ",Object(i.b)("em",{parentName:"p"},"string")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"DateTimeOriginal"),": ",Object(i.b)("em",{parentName:"p"},"string")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"ExifVersion"),": ",Object(i.b)("em",{parentName:"p"},"string")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"ExposureBiasValue"),": ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"ExposureMode"),": ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"ExposureProgram"),": ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"ExposureTime"),": ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"FNumber"),": ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"Flash"),": ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"FocalLenIn35mmFilm"),": ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"FocalLength"),": ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"ISOSpeedRatings"),": ",Object(i.b)("em",{parentName:"p"},"number"),"[] ; ",Object(i.b)("inlineCode",{parentName:"p"},"LensMake"),": ",Object(i.b)("em",{parentName:"p"},"string")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"LensModel"),": ",Object(i.b)("em",{parentName:"p"},"string")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"LensSpecification"),": ",Object(i.b)("em",{parentName:"p"},"number"),"[] ; ",Object(i.b)("inlineCode",{parentName:"p"},"MeteringMode"),": ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"OffsetTime"),": ",Object(i.b)("em",{parentName:"p"},"string")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"OffsetTimeDigitized"),": ",Object(i.b)("em",{parentName:"p"},"string")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"OffsetTimeOriginal"),": ",Object(i.b)("em",{parentName:"p"},"string")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"PixelXDimension"),": ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"PixelYDimension"),": ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"SceneType"),": ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"SensingMethod"),": ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"ShutterSpeedValue"),": ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"SubjectArea"),": ",Object(i.b)("em",{parentName:"p"},"number"),"[] ; ",Object(i.b)("inlineCode",{parentName:"p"},"SubsecTimeDigitized"),": ",Object(i.b)("em",{parentName:"p"},"string")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"SubsecTimeOriginal"),": ",Object(i.b)("em",{parentName:"p"},"string")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"WhiteBalance"),": ",Object(i.b)("em",{parentName:"p"},"number"),"  } ; ",Object(i.b)("inlineCode",{parentName:"p"},"{MakerApple}?"),": ",Object(i.b)("em",{parentName:"p"},"Record"),"<string, unknown",">"," ; ",Object(i.b)("inlineCode",{parentName:"p"},"{TIFF}"),": { ",Object(i.b)("inlineCode",{parentName:"p"},"DateTime"),": ",Object(i.b)("em",{parentName:"p"},"string")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"HostComputer?"),": ",Object(i.b)("em",{parentName:"p"},"string")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"Make"),": ",Object(i.b)("em",{parentName:"p"},"string")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"Model"),": ",Object(i.b)("em",{parentName:"p"},"string")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"ResolutionUnit"),": ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"Software"),": ",Object(i.b)("em",{parentName:"p"},"string")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"XResolution"),": ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"YResolution"),": ",Object(i.b)("em",{parentName:"p"},"number"),"  }  } ; ",Object(i.b)("inlineCode",{parentName:"p"},"thumbnail?"),": ",Object(i.b)("em",{parentName:"p"},"Record"),"<string, unknown",">"," ; ",Object(i.b)("inlineCode",{parentName:"p"},"width"),": ",Object(i.b)("em",{parentName:"p"},"number"),"  }",">"),Object(i.b)("p",null,"Represents a Photo taken by the Camera written to the local filesystem."),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/928a33a/src/PhotoFile.ts#L68"},"src/PhotoFile.ts:68")))}c.isMDXComponent=!0}}]);