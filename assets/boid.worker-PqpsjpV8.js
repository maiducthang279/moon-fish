(function(){"use strict";const _=(t,s,e,n)=>({x:t,y:s,width:e,height:n}),M=(t,s)=>s.x>=t.x&&s.x<=t.x+t.width&&s.y>=t.y&&s.y<=t.y+t.height,N=(t,s)=>t.x<s.x+s.width&&t.x+t.width>s.x&&t.y<s.y+s.height&&t.y+t.height>s.y,u=(t,s)=>({rect:t,capacity:s,points:[],divided:!1}),p=t=>{const{x:s,y:e,width:n,height:c}=t.rect,o=n/2,r=c/2;return{...t,divided:!0,nw:u(_(s,e,o,r),t.capacity),ne:u(_(s+o,e,o,r),t.capacity),sw:u(_(s,e+r,o,r),t.capacity),se:u(_(s+o,e+r,o,r),t.capacity)}},R=(t,s)=>M(t.rect,s)?t.points.length<t.capacity?{...t,points:[...t.points,s]}:(t.divided||(t=p(t)),{...t,nw:R(t.nw,s),ne:R(t.ne,s),sw:R(t.sw,s),se:R(t.se,s)}):t,O=(t,s)=>{const e=[];return N(t.rect,s)?t.divided?(e.push(...O(t.nw,s)),e.push(...O(t.ne,s)),e.push(...O(t.sw,s)),e.push(...O(t.se,s)),e):t.points:e},v=(t,s,e)=>{const n={...t};return n.x<-30&&(n.x=s+30),n.y<-30&&(n.y=e+30),n.x>s+30&&(n.x=-30),n.y>e+30&&(n.y=-30),n},P=(t,s,e)=>{const n=s.reduce((c,o)=>{const r=I(t,o);if(r>0&&r<200){const E=x(t,o),i=S(E,1/r);return{steer:y(c.steer,i),count:c.count+1}}return c},{steer:{x:0,y:0},count:0});if(n.count>0){const c=f(n.steer,n.count),o=S(c,4),r=x(o,t.velocity);return A(r,.0045000000000000005)}return n.steer},g=(t,s)=>{const e=s.reduce((n,c)=>{const o=I(t,c);return o>0&&o<100?{steer:y(n.steer,c.velocity),count:n.count+1}:n},{steer:{x:0,y:0},count:0});if(e.count>0){const n=f(e.steer,e.count),c=S(n,4),o=x(c,t.velocity);return A(o,.0075)}return e.steer},D=(t,s,e)=>{const n=s.reduce((c,o)=>{const r=I(t,o);return r>0&&r<200?{steer:y(c.steer,o),count:c.count+1}:c},{steer:{x:0,y:0},count:0});if(e){const c=I(t,e);c>0&&c<500&&(n.steer=y(n.steer,e),n.count+=1)}if(n.count>0){const c=f(n.steer,n.count),o=S(x(c,t),4),r=x(o,t.velocity);return A(r,.005)}return n.steer},w=(t,s,e,n,c)=>{const o=P(t,s),r=g(t,s),E=c?D(t,s,c):D(t,s),i=[o,r,E].reduce((C,B)=>y(C,B),t.acceleration),h=y(t.velocity,i),F=A(h,4),l=v(y(t,F),e,n);return{...t,x:l.x,y:l.y,velocity:F,acceleration:i}},U=(t,s,e,n)=>{const o=u({x:0,y:0,width:s,height:e},4),r=t.reduce((E,i)=>R(E,i),o);return t.map(E=>{const i=O(r,{x:E.x,y:E.y,width:200,height:200}).filter(h=>h!==E);return w(E,i,s,e,n)})},I=(t,s)=>Math.hypot(t.x-s.x,t.y-s.y),y=(t,s)=>({x:t.x+s.x,y:t.y+s.y}),x=(t,s)=>({x:t.x-s.x,y:t.y-s.y}),f=(t,s)=>({x:t.x/s,y:t.y/s}),S=(t,s)=>{const e=Math.hypot(t.x,t.y);return{x:t.x/e*s,y:t.y/e*s}},A=(t,s)=>Math.hypot(t.x,t.y)>s?S(t,s):t;self.onmessage=t=>{const{boids:s,width:e,height:n,mousePosition:c}=t.data,o=U(s,e,n,c);self.postMessage(o)}})();
