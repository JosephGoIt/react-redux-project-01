"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[998],{1998:(e,s,a)=>{a.r(s),a.d(s,{default:()=>H});var n=a(2791),t=a(7689),r=a(4420),i=a(5985);const c=(e,s)=>{let a=7;return s<1440&&(a=6),e.length>a?`${e.slice(0,a)}...`:e},o=(e,s)=>s<1440?`${e.slice(0,5)}...`:s>=1440?`${e.slice(0,14)}`:void 0;var l=a(6441),d=a(9930),m=a(9302);const h={};var _=a(1188),x=a(3329);const u=e=>{let{item:s,handleOpenModal:a}=e;const[u,p]=(0,n.useState)(window.innerWidth),{transactionsType:j}=(0,t.UO)();(0,n.useEffect)((()=>{function e(){p(window.innerWidth)}return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);const y=(0,r.I0)(),T=(0,r.v9)(_.j);return(0,x.jsxs)("ul",{className:h.tr,children:[(0,x.jsx)("li",{className:h.td,children:c(s.category.categoryName,u)}),(0,x.jsx)("li",{className:h.td,children:c(s.comment,u)}),(0,x.jsx)("li",{className:h.td,children:o((e=>{const s=new Date(e),a=["Mo","Tu","We","Th","Fr","Sa","Su"][s.getDay()],n=s.getDate(),t=s.getMonth()+1,r=s.getFullYear();return`${a}, ${"0"===n[0]?n.substring(1):n}.${t.toString().padStart(2,"0")}.${r}`})(s.date),u)}),(0,x.jsx)("li",{className:h.td,children:s.time}),(0,x.jsxs)("li",{className:h.td,children:[s.sum," / ",T.toUpperCase()]}),(0,x.jsx)("li",{className:h.td,children:(0,x.jsxs)("div",{className:h.btnContainer,children:[(0,x.jsxs)("button",{className:h.btnTable,onClick:()=>a(s),children:[(0,x.jsx)("div",{className:h.textEdit,children:"Edit"}),(0,x.jsx)(d.JO,{name:"edit",className:h.iconEdit,size:"16"})]}),(0,x.jsxs)("button",{className:h.btnTableDel,onClick:()=>{return e=s._id,void y((0,l.Ks)(e)).unwrap().then((()=>{y((0,m.k)()),y((0,l.f1)({type:j})),i.Am.success("Transaction deleted successfully")})).catch((e=>i.Am.error("Something wrong !")));var e},children:[(0,x.jsx)(d.JO,{name:"trash-bin",className:h.iconDelete,size:"16"}),(0,x.jsx)("div",{className:h.textCont,children:(0,x.jsx)("span",{children:"Delete"})})]})]})})]},s._id)};var p=a(4337),j=a(3135),y=a(2377),T=a(9321),v=a(9554);const N="TransactionsMessage_message__sY73g",g=e=>{let{message:s}=e;return(0,x.jsx)("h2",{className:N,children:s})},f="TransactionsList_containerTable__rnVmV",w="TransactionsList_listTable__JzalU",C="TransactionsList_thead__cvmoU",S="TransactionsList_th__pmFFm",b="TransactionsList_tr__8qRgO",k="TransactionsList_tbody__7w5DG",M=()=>{const{transactionsType:e}=(0,t.UO)(),s=(0,r.I0)(),a=(0,r.v9)(j.ig),[c,o]=(0,y.d)(),d=(0,r.v9)(p.AD),h=a.filter((e=>e.category.categoryName.toLowerCase().includes(d.toLowerCase())||e.comment.toLowerCase().includes(d.toLowerCase())||e.date.includes(d)||e.time.includes(d)||e.sum.toString().includes(d))),[_,N]=(0,n.useState)({}),M=e=>{N(e),o()};return(0,x.jsxs)("div",{className:`${f} scroll scrollB `,children:[(0,x.jsxs)("div",{className:w,children:[(0,x.jsx)("div",{className:C,children:(0,x.jsxs)("ul",{className:b,children:[(0,x.jsx)("li",{className:S,children:"Category"}),(0,x.jsx)("li",{className:S,children:"Comment"}),(0,x.jsx)("li",{className:S,children:"Date"}),(0,x.jsx)("li",{className:S,children:"Time"}),(0,x.jsx)("li",{className:S,children:"Sum"}),(0,x.jsx)("li",{className:S,children:"Actions"})]},"111111")}),(0,x.jsxs)("div",{className:`${k} scroll scrollB`,children:[0===a.length&&(0,x.jsx)(g,{message:`Transaction ${e} list is empty!`}),0!==h.length&&h.map((e=>(0,x.jsx)(u,{item:e,handleOpenModal:M},e._id))),d&&0===h.length&&0!==a.length&&(0,x.jsx)(g,{message:"Nothing found by filter!"})]})]}),c&&(0,x.jsx)(T.u,{toggleModal:o,children:(0,x.jsx)(v.v,{transaction:_,onSubmitForm:a=>{s((0,l.vF)(a)).unwrap().then((()=>{s((0,m.k)()),s((0,l.f1)({type:e})),i.Am.success("Transaction edited successfully!"),o()})).catch((e=>{i.Am.error("Something went wrong!")}))}})})]})};var A=a(9513),D=a.n(A),E=a(6712),L=a(2927),U=a(904);const O={formContainer:"TransactionsSearchTools_formContainer__L1znS",formBox:"TransactionsSearchTools_formBox__6AVYx",formInput:"TransactionsSearchTools_formInput__Rh6eq",formCalendar:"TransactionsSearchTools_formCalendar__TAbGt",datePicker:"TransactionsSearchTools_datePicker__gFkLv",datepickerContainer:"TransactionsSearchTools_datepickerContainer__FHBMB","react-datepicker-wrapper":"TransactionsSearchTools_react-datepicker-wrapper__J50Bl",filterContainer:"TransactionsSearchTools_filterContainer__oF5ZW",iconSearch:"TransactionsSearchTools_iconSearch__RJ6M+",iconDate:"TransactionsSearchTools_iconDate__NhUU6"},F=e=>{let{handleOpenModal:s,type:a}=e;const t=(0,r.I0)(),i=(0,r.v9)(p.AD);(0,n.useEffect)((()=>{t((0,p.sx)())}),[a,t]);const c=(0,r.v9)(p.iY);return(0,x.jsx)("div",{className:O.formContainer,children:(0,x.jsxs)("form",{action:"",className:O.formBox,children:[(0,x.jsxs)("div",{className:O.filterContainer,children:[(0,x.jsx)("input",{value:i,onChange:e=>{t((0,p.M6)(e.target.value))},type:"text",className:O.formInput,placeholder:"Search for anything.."}),(0,x.jsx)(L.J,{name:"search",className:O.iconSearch,size:"20"})]}),(0,x.jsxs)("div",{className:O.datepickerContainer,children:[(0,x.jsx)(D(),{className:O.formCalendar,selected:c,onChange:e=>{t(e?(0,p.Mv)((0,E.WU)(e,"yyyy-MM-dd")):(0,p.Mv)((0,E.WU)(new Date,"yyyy-MM-dd")))},showPopperArrow:!1,maxDate:new Date,placeholderText:"dd/mm/yyyy"}),(0,x.jsx)(L.J,{name:"calendar",className:O.iconDate,size:"20"})]}),(0,x.jsx)(U.Y,{action:()=>{t((0,p.sx)())},type:"reset"}),(0,x.jsx)(U.Y,{className:O.addBtn,action:s})]})})};var Y=a(3986);const $="TransactionsHistory_container__yz97E",z="TransactionsHistory_historyTitle__dZMeU",B="TransactionsHistory_historyText__ECljE",I="TransactionsHistory_textContainer__YuU5U",J="TransactionsHistory_historyAmount__IEoNU",H=()=>{const{transactionsType:e}=(0,t.UO)(),s=(0,r.v9)(j.aD),a=(0,r.v9)(j.XY),c=(0,r.I0)(),o=(0,r.v9)(p.iY);let d="All Expense",h="View and manage every transaction seamlessly! Your entire financial landscape, all in one place.";"incomes"===e&&(d="All incomes",h="Track and celebrate every bit of earnings effortlessly! Gain insights into your total revenue in a snap."),(0,n.useEffect)((()=>{c(o?(0,l.f1)({type:e,date:o}):(0,l.f1)({type:e}))}),[o,c,e]);const[_,u]=(0,y.d)();return(0,x.jsxs)("div",{className:$,children:[(0,x.jsxs)("div",{className:I,children:[(0,x.jsx)("h2",{className:z,children:d}),(0,x.jsx)("p",{className:B,children:h})]}),(0,x.jsx)("div",{className:J,children:(0,x.jsx)(Y.O,{totalAllExpenses:s,totalAllIncomes:a})}),(0,x.jsx)(F,{handleOpenModal:u,type:e}),(0,x.jsx)(M,{}),_&&(0,x.jsx)(T.u,{toggleModal:u,children:(0,x.jsx)(v.v,{onSubmitForm:s=>{c((0,l.dT)(s)).unwrap().then((()=>{c((0,m.k)()),c((0,l.f1)({type:e})),u(),i.Am.success("Transaction added successfully!"),c((0,p.sx)())})).catch((e=>{i.Am.error("Something went wrong!")}))},transactionsType:e,history:e})})]})}}}]);
//# sourceMappingURL=998.a45de79e.chunk.js.map