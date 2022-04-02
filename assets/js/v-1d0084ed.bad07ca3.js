"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[6689],{56664:(t,e,i)=>{i.r(e),i.d(e,{data:()=>a});const a={key:"v-1d0084ed",path:"/devices/TS0101.html",title:"TuYa TS0101 control via MQTT",lang:"en-US",frontmatter:{title:"TuYa TS0101 control via MQTT",description:"Integrate your TuYa TS0101 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-01-31T22:24:43.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/TS0101.md",git:{updatedTime:1648925619e3}}},2459:(t,e,i)=>{i.r(e),i.d(e,{default:()=>o});const a=(0,i(66252).uE)('<h1 id="tuya-ts0101" tabindex="-1"><a class="header-anchor" href="#tuya-ts0101" aria-hidden="true">#</a> TuYa TS0101</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>TS0101</td></tr><tr><td>Vendor</td><td>TuYa</td></tr><tr><td>Description</td><td>Zigbee Socket</td></tr><tr><td>Exposes</td><td>switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/TS0101.jpg" alt="TuYa TS0101"></td></tr><tr><td>White-label</td><td>Larkkey PS080</td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',7),d={},o=(0,i(83744).Z)(d,[["render",function(t,e){return a}]])},83744:(t,e)=>{e.Z=(t,e)=>{for(const[i,a]of e)t[i]=a;return t}}}]);