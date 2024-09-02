import{M}from"./index-QociIg_t.js";import"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";import"./index-Blf4I0Sn.js";const q={title:"Components/Modal",component:M,parameters:{layout:"centered",docs:{description:{component:"O componente Modal é uma janela de diálogo customizável que pode conter qualquer tipo de conteúdo. Ele oferece suporte a títulos, botões de fechamento e backdrops opcionais."}}},argTypes:{isOpen:{control:{type:"boolean"},description:"Controla se o modal está aberto ou fechado."},title:{control:{type:"text"},description:"Define o título do modal."},hasBackdrop:{control:{type:"boolean"},description:"Controla se o backdrop (fundo escurecido) é exibido."},onClose:{action:"closed",description:"Função de callback para fechar o modal."},contentClass:{control:{type:"text"},description:"Classe CSS personalizada para estilizar o conteúdo do modal."},children:{control:"text",description:"Conteúdo a ser exibido dentro do modal."}},args:{isOpen:!0,hasBackdrop:!0}},o={args:{title:"Modal Title"}},e={args:{title:void 0}},t={args:{title:"Modal Sem Backdrop",hasBackdrop:!1}},a={args:{title:"Modal com Conteúdo Customizado",contentClass:"bg-blue-100"}},r={args:{title:"Modal com Conteúdo Longo"}};var n,s,i;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    title: 'Modal Title'
    // children: 123,
  }
}`,...(i=(s=o.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var d,c,l;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: undefined
    // children: <div>Modal sem título.</div>,
  }
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,u,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: 'Modal Sem Backdrop',
    hasBackdrop: false
    // children: <div>Conteúdo do modal sem fundo escurecido.</div>,
  }
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,C,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'Modal com Conteúdo Customizado',
    // children: (
    //   <div>
    //     <p>Este modal tem um conteúdo personalizado.</p>
    //     <Button variant="primary" title="Fechar" />
    //   </div>
    // ),
    contentClass: 'bg-blue-100'
  }
}`,...(h=(C=a.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var f,b,v;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: 'Modal com Conteúdo Longo'
    // children: (
    //   <div>
    //     <p>
    //       {\`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    //       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    //       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\`.repeat(10)}
    //     </p>
    //   </div>
    // ),
  }
}`,...(v=(b=r.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const y=["Default","WithoutTitle","WithoutBackdrop","CustomContent","LongContent"];export{a as CustomContent,o as Default,r as LongContent,t as WithoutBackdrop,e as WithoutTitle,y as __namedExportsOrder,q as default};
