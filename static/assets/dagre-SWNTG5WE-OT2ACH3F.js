import{a as H,b as j,c as V,d as q,e as z}from"./chunk-BOD4ZWPQ.js";import{c as R,e as T,f as M,h as F,i as U,j as Y,k}from"./chunk-24CS6DUF.js";import"./chunk-YJYNUSAM.js";import{a as G}from"./chunk-5JJWRCP3.js";import"./chunk-E34HJRR4.js";import"./chunk-MCENFELV.js";import{a as Q}from"./chunk-RVGDP346.js";import{a as D}from"./chunk-6IOWLTMD.js";import"./chunk-HFFTYNMA.js";import"./chunk-XHGORZV2.js";import{Z as A,h as p,j as r}from"./chunk-3QLLRM5L.js";import{D as S,e as K,s as _}from"./chunk-WYMAA4MH.js";import"./chunk-SISR4MA5.js";import"./chunk-24JW6VB3.js";import{a as P,b as B}from"./chunk-MGYUK2XN.js";function b(e){var t={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:ie(e),edges:re(e)};return S(e.graph())||(t.value=K(e.graph())),t}function ie(e){return _(e.nodes(),function(t){var n=e.node(t),o=e.parent(t),c={v:t};return S(n)||(c.value=n),S(o)||(c.parent=o),c})}function re(e){return _(e.edges(),function(t){var n=e.edge(t),o={v:t.v,w:t.w};return S(t.name)||(o.name=t.name),S(n)||(o.value=n),o})}var f=new Map,y=new Map,$=new Map,oe=p(()=>{y.clear(),$.clear(),f.clear()},"clear"),O=p((e,t)=>{let n=y.get(t)||[];return r.trace("In isDescendant",t," ",e," = ",n.includes(e)),n.includes(e)},"isDescendant"),ae=p((e,t)=>{let n=y.get(t)||[];return r.info("Descendants of ",t," is ",n),r.info("Edge is ",e),e.v===t||e.w===t?!1:n?n.includes(e.v)||O(e.v,t)||O(e.w,t)||n.includes(e.w):(r.debug("Tilt, ",t,",not in descendants"),!1)},"edgeInCluster"),L=p((e,t,n,o)=>{r.warn("Copying children of ",e,"root",o,"data",t.node(e),o);let c=t.children(e)||[];e!==o&&c.push(e),r.warn("Copying (nodes) clusterId",e,"nodes",c),c.forEach(a=>{if(t.children(a).length>0)L(a,t,n,o);else{let s=t.node(a);r.info("cp ",a," to ",o," with parent ",e),n.setNode(a,s),o!==t.parent(a)&&(r.warn("Setting parent",a,t.parent(a)),n.setParent(a,t.parent(a))),e!==o&&a!==e?(r.debug("Setting parent",a,e),n.setParent(a,e)):(r.info("In copy ",e,"root",o,"data",t.node(e),o),r.debug("Not Setting parent for node=",a,"cluster!==rootId",e!==o,"node!==clusterId",a!==e));let u=t.edges(a);r.debug("Copying Edges",u),u.forEach(l=>{r.info("Edge",l);let v=t.edge(l.v,l.w,l.name);r.info("Edge data",v,o);try{ae(l,o)?(r.info("Copying as ",l.v,l.w,v,l.name),n.setEdge(l.v,l.w,v,l.name),r.info("newGraph edges ",n.edges(),n.edge(n.edges()[0]))):r.info("Skipping copy of edge ",l.v,"-->",l.w," rootId: ",o," clusterId:",e)}catch(C){r.error(C)}})}r.debug("Removing node",a),t.removeNode(a)})},"copy"),I=p((e,t)=>{let n=t.children(e),o=[...n];for(let c of n)$.set(c,e),o=[...o,...I(c,t)];return o},"extractDescendants"),ce=p((e,t,n)=>{let o=e.edges().filter(l=>l.v===t||l.w===t),c=e.edges().filter(l=>l.v===n||l.w===n),a=o.map(l=>({v:l.v===t?n:l.v,w:l.w===t?t:l.w})),s=c.map(l=>({v:l.v,w:l.w}));return a.filter(l=>s.some(v=>l.v===v.v&&l.w===v.w))},"findCommonEdges"),J=p((e,t,n)=>{let o=t.children(e);if(r.trace("Searching children of id ",e,o),o.length<1)return e;let c;for(let a of o){let s=J(a,t,n),u=ce(t,n,s);if(s)if(u.length>0)c=s;else return s}return c},"findNonClusterChild"),Z=p(e=>!f.has(e)||!f.get(e).externalConnections?e:f.has(e)?f.get(e).id:e,"getAnchorId"),de=p((e,t)=>{if(!e||t>10){r.debug("Opting out, no graph ");return}else r.debug("Opting in, graph ");e.nodes().forEach(function(n){e.children(n).length>0&&(r.warn("Cluster identified",n," Replacement id in edges: ",J(n,e,n)),y.set(n,I(n,e)),f.set(n,{id:J(n,e,n),clusterData:e.node(n)}))}),e.nodes().forEach(function(n){let o=e.children(n),c=e.edges();o.length>0?(r.debug("Cluster identified",n,y),c.forEach(a=>{let s=O(a.v,n),u=O(a.w,n);s^u&&(r.warn("Edge: ",a," leaves cluster ",n),r.warn("Descendants of XXX ",n,": ",y.get(n)),f.get(n).externalConnections=!0)})):r.debug("Not a cluster ",n,y)});for(let n of f.keys()){let o=f.get(n).id,c=e.parent(o);c!==n&&f.has(c)&&!f.get(c).externalConnections&&(f.get(n).id=c)}e.edges().forEach(function(n){let o=e.edge(n);r.warn("Edge "+n.v+" -> "+n.w+": "+JSON.stringify(n)),r.warn("Edge "+n.v+" -> "+n.w+": "+JSON.stringify(e.edge(n)));let c=n.v,a=n.w;if(r.warn("Fix XXX",f,"ids:",n.v,n.w,"Translating: ",f.get(n.v)," --- ",f.get(n.w)),f.get(n.v)||f.get(n.w)){if(r.warn("Fixing and trying - removing XXX",n.v,n.w,n.name),c=Z(n.v),a=Z(n.w),e.removeEdge(n.v,n.w,n.name),c!==n.v){let s=e.parent(c);f.get(s).externalConnections=!0,o.fromCluster=n.v}if(a!==n.w){let s=e.parent(a);f.get(s).externalConnections=!0,o.toCluster=n.w}r.warn("Fix Replacing with XXX",c,a,n.name),e.setEdge(c,a,o,n.name)}}),r.warn("Adjusted Graph",b(e)),ee(e,0),r.trace(f)},"adjustClustersAndEdges"),ee=p((e,t)=>{var c,a;if(r.warn("extractor - ",t,b(e),e.children("D")),t>10){r.error("Bailing out");return}let n=e.nodes(),o=!1;for(let s of n){let u=e.children(s);o=o||u.length>0}if(!o){r.debug("Done, no node has children",e.nodes());return}r.debug("Nodes = ",n,t);for(let s of n)if(r.debug("Extracting node",s,f,f.has(s)&&!f.get(s).externalConnections,!e.parent(s),e.node(s),e.children("D")," Depth ",t),!f.has(s))r.debug("Not a cluster",s,t);else if(!f.get(s).externalConnections&&e.children(s)&&e.children(s).length>0){r.warn("Cluster without external connections, without a parent and with children",s,t);let l=e.graph().rankdir==="TB"?"LR":"TB";(a=(c=f.get(s))==null?void 0:c.clusterData)!=null&&a.dir&&(l=f.get(s).clusterData.dir,r.warn("Fixing dir",f.get(s).clusterData.dir,l));let v=new D({multigraph:!0,compound:!0}).setGraph({rankdir:l,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});r.warn("Old graph before copy",b(e)),L(s,e,v,s),e.setNode(s,{clusterNode:!0,id:s,clusterData:f.get(s).clusterData,label:f.get(s).label,graph:v}),r.warn("New graph after copy node: (",s,")",b(v)),r.debug("Old graph after copy",b(e))}else r.warn("Cluster ** ",s," **not meeting the criteria !externalConnections:",!f.get(s).externalConnections," no parent: ",!e.parent(s)," children ",e.children(s)&&e.children(s).length>0,e.children("D"),t),r.debug(f);n=e.nodes(),r.warn("New list of nodes",n);for(let s of n){let u=e.node(s);r.warn(" Now next level",s,u),u!=null&&u.clusterNode&&ee(u.graph,t+1)}},"extractor"),ne=p((e,t)=>{if(t.length===0)return[];let n=Object.assign([],t);return t.forEach(o=>{let c=e.children(o),a=ne(e,c);n=[...n,...a]}),n},"sorter"),le=p(e=>ne(e,e.children()),"sortNodesByHierarchy"),te=p(async(e,t,n,o,c,a)=>{r.warn("Graph in recursive render:XAX",b(t),c);let s=t.graph().rankdir;r.trace("Dir in recursive render - dir:",s);let u=e.insert("g").attr("class","root");t.nodes()?r.info("Recursive render XXX",t.nodes()):r.info("No nodes found for",t),t.edges().length>0&&r.info("Recursive edges",t.edge(t.edges()[0]));let l=u.insert("g").attr("class","clusters"),v=u.insert("g").attr("class","edgePaths"),C=u.insert("g").attr("class","edgeLabels"),g=u.insert("g").attr("class","nodes");await Promise.all(t.nodes().map(async function(d){let i=t.node(d);if(c!==void 0){let m=JSON.parse(JSON.stringify(c.clusterData));r.trace(`Setting data for parent cluster XXX
 Node.id = `,d,`
 data=`,m.height,`
Parent cluster`,c.height),t.setNode(c.id,m),t.parent(d)||(r.trace("Setting parent",d,c.id),t.setParent(d,c.id,m))}if(r.info("(Insert) Node XXX"+d+": "+JSON.stringify(t.node(d))),i!=null&&i.clusterNode){r.info("Cluster identified XBX",d,i.width,t.node(d));let{ranksep:m,nodesep:h}=t.graph();i.graph.setGraph(B(P({},i.graph.graph()),{ranksep:m+25,nodesep:h}));let N=await te(g,i.graph,n,o,t.node(d),a),x=N.elem;R(i,x),i.diff=N.diff||0,r.info("New compound node after recursive render XAX",d,"width",i.width,"height",i.height),U(x,i)}else t.children(d).length>0?(r.trace("Cluster - the non recursive path XBX",d,i.id,i,i.width,"Graph:",t),r.trace(J(i.id,t)),f.set(i.id,{id:J(i.id,t),node:i})):(r.trace("Node - the non recursive path XAX",d,g,t.node(d),s),await F(g,t.node(d),{config:a,dir:s}))})),await p(async()=>{let d=t.edges().map(async function(i){let m=t.edge(i.v,i.w,i.name);r.info("Edge "+i.v+" -> "+i.w+": "+JSON.stringify(i)),r.info("Edge "+i.v+" -> "+i.w+": ",i," ",JSON.stringify(t.edge(i))),r.info("Fix",f,"ids:",i.v,i.w,"Translating: ",f.get(i.v),f.get(i.w)),await j(C,m)});await Promise.all(d)},"processEdges")(),r.info("Graph before layout:",JSON.stringify(b(t))),r.info("############################################# XXX"),r.info("###                Layout                 ### XXX"),r.info("############################################# XXX"),Q(t),r.info("Graph after layout:",JSON.stringify(b(t)));let E=0,{subGraphTitleTotalMargin:X}=G(a);return await Promise.all(le(t).map(async function(d){var m;let i=t.node(d);if(r.info("Position XBX => "+d+": ("+i.x,","+i.y,") width: ",i.width," height: ",i.height),i!=null&&i.clusterNode)i.y+=X,r.info("A tainted cluster node XBX1",d,i.id,i.width,i.height,i.x,i.y,t.parent(d)),f.get(i.id).node=i,k(i);else if(t.children(d).length>0){r.info("A pure cluster node XBX1",d,i.id,i.x,i.y,i.width,i.height,t.parent(d)),i.height+=X,t.node(i.parentId);let h=(i==null?void 0:i.padding)/2||0,N=((m=i==null?void 0:i.labelBBox)==null?void 0:m.height)||0,x=N-h||0;r.debug("OffsetY",x,"labelHeight",N,"halfPadding",h),await T(l,i),f.get(i.id).node=i}else{let h=t.node(i.parentId);i.y+=X/2,r.info("A regular node XBX1 - using the padding",i.id,"parent",i.parentId,i.width,i.height,i.x,i.y,"offsetY",i.offsetY,"parent",h,h==null?void 0:h.offsetY,i),k(i)}})),t.edges().forEach(function(d){let i=t.edge(d);r.info("Edge "+d.v+" -> "+d.w+": "+JSON.stringify(i),i),i.points.forEach(x=>x.y+=X/2);let m=t.node(d.v);var h=t.node(d.w);let N=q(v,i,f,n,m,h,o);V(i,N)}),t.nodes().forEach(function(d){let i=t.node(d);r.info(d,i.type,i.diff),i.isGroup&&(E=i.diff)}),r.warn("Returning from recursive render XAX",u,E),{elem:u,diff:E}},"recursiveRender"),ye=p(async(e,t)=>{var a,s,u,l,v,C;let n=new D({multigraph:!0,compound:!0}).setGraph({rankdir:e.direction,nodesep:((a=e.config)==null?void 0:a.nodeSpacing)||((u=(s=e.config)==null?void 0:s.flowchart)==null?void 0:u.nodeSpacing)||e.nodeSpacing,ranksep:((l=e.config)==null?void 0:l.rankSpacing)||((C=(v=e.config)==null?void 0:v.flowchart)==null?void 0:C.rankSpacing)||e.rankSpacing,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),o=t.select("g");z(o,e.markers,e.type,e.diagramId),Y(),H(),M(),oe(),e.nodes.forEach(g=>{n.setNode(g.id,P({},g)),g.parentId&&n.setParent(g.id,g.parentId)}),r.debug("Edges:",e.edges),e.edges.forEach(g=>{if(g.start===g.end){let w=g.start,E=w+"---"+w+"---1",X=w+"---"+w+"---2",d=n.node(w);n.setNode(E,{domId:E,id:E,parentId:d.parentId,labelStyle:"",label:"",padding:0,shape:"labelRect",style:"",width:10,height:10}),n.setParent(E,d.parentId),n.setNode(X,{domId:X,id:X,parentId:d.parentId,labelStyle:"",padding:0,shape:"labelRect",label:"",style:"",width:10,height:10}),n.setParent(X,d.parentId);let i=structuredClone(g),m=structuredClone(g),h=structuredClone(g);i.label="",i.arrowTypeEnd="none",i.id=w+"-cyclic-special-1",m.arrowTypeEnd="none",m.id=w+"-cyclic-special-mid",h.label="",d.isGroup&&(i.fromCluster=w,h.toCluster=w),h.id=w+"-cyclic-special-2",n.setEdge(w,E,i,w+"-cyclic-special-0"),n.setEdge(E,X,m,w+"-cyclic-special-1"),n.setEdge(X,w,h,w+"-cyc<lic-special-2")}else n.setEdge(g.start,g.end,P({},g),g.id)}),r.warn("Graph at first:",JSON.stringify(b(n))),de(n),r.warn("Graph after XAX:",JSON.stringify(b(n)));let c=A();await te(o,n,e.type,e.diagramId,void 0,c)},"render");export{ye as render};