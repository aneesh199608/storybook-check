import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-D4lIrffr.js";console.log("✅ MyButton defined");let d=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"});const t=document.createElement("button");t.textContent=this.getAttribute("label")||"Click Me",t.className="my-button";const e=document.createElement("style");e.textContent=`
        .my-button {
          padding: 0.5rem 1rem;
          font-size: 1rem;
          background: #1e90ff;
          color: white;
          border: none;
          cursor: pointer;
        }
      `,this.shadowRoot.append(e,t)}static get observedAttributes(){return["label"]}attributeChangedCallback(t,e,o){t==="label"&&(this.shadowRoot.querySelector("button").textContent=o)}};customElements.define("my-button",d);const u=({label:n="Click Me",onClick:t})=>{const e=s.useRef(null);return s.useEffect(()=>{const o=e.current;return o&&t&&o.addEventListener("click",t),()=>{o&&t&&o.removeEventListener("click",t)}},[t]),i.jsx("my-button",{ref:e,label:n})};u.__docgenInfo={description:"",methods:[],displayName:"MyButton",props:{label:{defaultValue:{value:"'Click Me'",computed:!1},required:!1}}};const f={title:"Components/CrossPlatformButton",component:u},r={args:{label:"Click Me",onClick:()=>alert("Clicked!")}};var a,l,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    label: 'Click Me',
    onClick: () => alert('Clicked!')
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const y=["Primary"];export{r as Primary,y as __namedExportsOrder,f as default};
