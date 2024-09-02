import{B as W}from"./index-Blf4I0Sn.js";import"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";const F={title:"Components/Button",component:W,parameters:{layout:"centered",docs:{description:{component:"O componente Button é um botão customizável com diferentes variantes, tamanhos e opções adicionais como circular e desativado."}}},argTypes:{size:{control:{type:"select"},options:["small","medium","large"],description:"Define o tamanho do botão."},variant:{control:{type:"select"},options:["primary","secondary","review","approved","reproved","blank"],description:"Define a variante de cor do botão."},circle:{control:{type:"boolean"},description:"Define se o botão terá formato circular."},disabled:{control:{type:"boolean"},description:"Define se o botão estará desativado."},onClick:{action:"clicked",description:"Função de callback para o evento de clique."}},tags:["autodocs"],args:{onClick:()=>console.log("Button clicked")}},e={args:{variant:"primary",size:"medium",title:"Primary Button"}},r={args:{variant:"secondary",size:"medium",title:"Secondary Button"}},a={args:{variant:"review",size:"medium",title:"Review Button"}},t={args:{variant:"approved",size:"medium",title:"Approved Button"}},o={args:{variant:"reproved",size:"medium",title:"Reproved Button"}},s={args:{variant:"primary",size:"large",circle:!0,title:"x"}},n={args:{variant:"secondary",size:"medium",disabled:!0,title:"Disabled Button"}},i={args:{variant:"primary",size:"medium",children:"Button with Children"}};var c,d,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'medium',
    title: 'Primary Button'
  }
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,u,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    size: 'medium',
    title: 'Secondary Button'
  }
}`,...(l=(u=r.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var v,g,y;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'review',
    size: 'medium',
    title: 'Review Button'
  }
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var B,z,b;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'approved',
    size: 'medium',
    title: 'Approved Button'
  }
}`,...(b=(z=t.parameters)==null?void 0:z.docs)==null?void 0:b.source}}};var h,S,w;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'reproved',
    size: 'medium',
    title: 'Reproved Button'
  }
}`,...(w=(S=o.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var C,f,D;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'large',
    circle: true,
    title: 'x'
  }
}`,...(D=(f=s.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var R,k,x;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    size: 'medium',
    disabled: true,
    title: 'Disabled Button'
  }
}`,...(x=(k=n.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var A,P,O;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Button with Children'
  }
}`,...(O=(P=i.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};const T=["Primary","Secondary","Review","Approved","Reproved","Circle","Disabled","WithChildren"];export{t as Approved,s as Circle,n as Disabled,e as Primary,o as Reproved,a as Review,r as Secondary,i as WithChildren,T as __namedExportsOrder,F as default};
