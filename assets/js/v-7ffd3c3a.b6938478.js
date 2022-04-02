"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[2109],{77176:(n,s,e)=>{e.r(s),e.d(s,{data:()=>a});const a={key:"v-7ffd3c3a",path:"/guide/installation/01_linux.html",title:"Linux",lang:"en-US",frontmatter:{next:"../configuration/",pageClass:"content-page"},excerpt:"",headers:[{level:2,title:"Determine location of the adapter and checking user permissions",slug:"determine-location-of-the-adapter-and-checking-user-permissions",children:[]},{level:2,title:"Installing",slug:"installing",children:[]},{level:2,title:"Configuring",slug:"configuring",children:[]},{level:2,title:"Starting Zigbee2MQTT",slug:"starting-zigbee2mqtt",children:[]},{level:2,title:"(Optional) Running as a daemon with systemctl",slug:"optional-running-as-a-daemon-with-systemctl",children:[]},{level:2,title:"(For later) Update Zigbee2MQTT to the latest version",slug:"for-later-update-zigbee2mqtt-to-the-latest-version",children:[]}],filePathRelative:"guide/installation/01_linux.md",git:{updatedTime:1648925619e3}}},13500:(n,s,e)=>{e.r(s),e.d(s,{default:()=>O});var a=e(66252);const t=(0,a._)("h1",{id:"linux",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#linux","aria-hidden":"true"},"#"),(0,a.Uk)(" Linux")],-1),l=(0,a._)("p",null,"These instructions explain how to run Zigbee2MQTT on Linux.",-1),i=(0,a._)("p",null,"For the sake of simplicity this guide assumes running on a Raspberry Pi 4 with Raspbian Stretch Lite, but it should work on any Linux machine.",-1),p=(0,a.Uk)("Before starting make sure you have an MQTT broker installed on your system. There are many tutorials available on how to do this, "),o={href:"https://randomnerdtutorials.com/how-to-install-mosquitto-broker-on-raspberry-pi/",target:"_blank",rel:"noopener noreferrer"},r=(0,a.Uk)("example"),c=(0,a.Uk)(". Mosquitto is the recommended MQTT broker but others should also work fine."),u=(0,a.uE)('<h2 id="determine-location-of-the-adapter-and-checking-user-permissions" tabindex="-1"><a class="header-anchor" href="#determine-location-of-the-adapter-and-checking-user-permissions" aria-hidden="true">#</a> Determine location of the adapter and checking user permissions</h2><p>We first need to determine the location of the adapter. Connect the adapter to your Raspberry Pi. Most of the times the location is <code>/dev/ttyACM0</code>. This can be verified by:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pi@raspberry:~ $ <span class="token function">ls</span> -l /dev/ttyACM0\ncrw-rw---- <span class="token number">1</span> root dialout <span class="token number">166</span>, <span class="token number">0</span> May <span class="token number">16</span> <span class="token number">19</span>:15 /dev/ttyACM0  <span class="token comment"># &lt;-- adapter (CC2531 in this case) on /dev/ttyACM0</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>As an alternative, the device can also be mapped by an ID. This can be handy if you have multiple serial devices connected to your Raspberry Pi. In the example below the device location is: <code>/dev/serial/by-id/usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018ED3DDF-if00</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pi@raspberry:/ $ <span class="token function">ls</span> -l /dev/serial/by-id\ntotal <span class="token number">0</span>\nlrwxrwxrwx. <span class="token number">1</span> root root <span class="token number">13</span> Oct <span class="token number">19</span> <span class="token number">19</span>:26 usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018ED3DDF-if00 -<span class="token operator">&gt;</span> <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/ttyACM0\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="installing" tabindex="-1"><a class="header-anchor" href="#installing" aria-hidden="true">#</a> Installing</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Install Node.js and required dependencies</span>\n<span class="token comment"># In Debian/Raspbian bullseye and up (11 and up), NodeJS v12.X is packaged, this is the safest method of installing NodeJS (from official repositories) for Zigbee2MQTT. Older i386 hardware can work with [unofficial-builds.nodejs.org](https://unofficial-builds.nodejs.org/download/release/v12.16.3/ e.g. Version 12.16.3 should work.</span>\n<span class="token comment"># Check https://github.com/nodesource/distributions/blob/master/README.md if you want to install a specific version from NodeJS repositories instead.</span>\n<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> -y nodejs <span class="token function">npm</span> <span class="token function">git</span> <span class="token function">make</span> g++ gcc\n\n<span class="token comment"># Verify that the correct nodejs and npm (automatically installed with nodejs)</span>\n<span class="token comment"># version has been installed</span>\n<span class="token function">node</span> --version  <span class="token comment"># Should output v10.X, v12.X, v14.X, v15.X or V16.X</span>\n<span class="token function">npm</span> --version  <span class="token comment"># Should output 6.X or 7.X</span>\n\n<span class="token comment"># Clone Zigbee2MQTT repository</span>\n<span class="token function">git</span> clone https://github.com/Koenkk/zigbee2mqtt.git\n<span class="token function">sudo</span> <span class="token function">mv</span> zigbee2mqtt /opt/zigbee2mqtt\n\n<span class="token comment"># Install dependencies (as user &quot;pi&quot;)</span>\n<span class="token builtin class-name">cd</span> /opt/zigbee2mqtt\n<span class="token function">npm</span> ci\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>If everything went correctly the output of <code>npm ci</code> is similar to (the number of packages and seconds is probably different on your device):</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>node-pre-gyp info ok\nadded <span class="token number">383</span> packages <span class="token keyword">in</span> <span class="token number">111</span>.613s\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Note that the <code>npm ci</code> produces some <code>warning</code> which can be ignored.</p><h2 id="configuring" tabindex="-1"><a class="header-anchor" href="#configuring" aria-hidden="true">#</a> Configuring</h2><p>Before we can start Zigbee2MQTT we need to edit the <code>configuration.yaml</code> file. This file contains the configuration which will be used by Zigbee2MQTT.</p><p>Open the configuration file:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">nano</span> /opt/zigbee2mqtt/data/configuration.yaml\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>For a basic configuration, the default settings are probably good. The only thing we need to change is the MQTT server url/authentication and the serial port. This can be done by changing the section below in your <code>configuration.yaml</code>.</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># MQTT settings</span>\n<span class="token key atrule">mqtt</span><span class="token punctuation">:</span>\n  <span class="token comment"># MQTT base topic for Zigbee2MQTT MQTT messages</span>\n  <span class="token key atrule">base_topic</span><span class="token punctuation">:</span> zigbee2mqtt\n  <span class="token comment"># MQTT server URL</span>\n  <span class="token key atrule">server</span><span class="token punctuation">:</span> <span class="token string">&#39;mqtt://localhost&#39;</span>\n  <span class="token comment"># MQTT server authentication, uncomment if required:</span>\n  <span class="token comment"># user: my_user</span>\n  <span class="token comment"># password: my_password</span>\n\n<span class="token comment"># Serial settings</span>\n<span class="token key atrule">serial</span><span class="token punctuation">:</span>\n  <span class="token comment"># Location of the adapter (see first step of this guide)</span>\n  <span class="token key atrule">port</span><span class="token punctuation">:</span> /dev/ttyACM0\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>It is recommended to use a custom network key. This can be done by adding the following to your <code>configuration.yaml</code>. With this Zigbee2MQTT will generate a network key on next startup.</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">advanced</span><span class="token punctuation">:</span>\n    <span class="token key atrule">network_key</span><span class="token punctuation">:</span> GENERATE\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Save the file and exit.</p><h2 id="starting-zigbee2mqtt" tabindex="-1"><a class="header-anchor" href="#starting-zigbee2mqtt" aria-hidden="true">#</a> Starting Zigbee2MQTT</h2><p>Now that we have setup everything correctly we can start Zigbee2MQTT.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /opt/zigbee2mqtt\n<span class="token function">npm</span> start\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>When started successfully, you will see something like:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Zigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:01: Logging to directory: <span class="token string">&#39;/opt/zigbee2mqtt/data/log/2019-11-09.14-04-01&#39;</span>\nZigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:01: Starting Zigbee2MQTT version <span class="token number">1.6</span>.0 <span class="token punctuation">(</span>commit <span class="token comment">#720e393)</span>\nZigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:01: Starting zigbee-herdsman<span class="token punctuation">..</span>.\nZigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:03: zigbee-herdsman started\nZigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:03: Coordinator firmware version: <span class="token string">&#39;{&quot;type&quot;:&quot;zStack30x&quot;,&quot;meta&quot;:{&quot;transportrev&quot;:2,&quot;product&quot;:2,&quot;majorrel&quot;:2,&quot;minorrel&quot;:7,&quot;maintrel&quot;:2,&quot;revision&quot;:20190425}}&#39;</span>\nZigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:03: Currently <span class="token number">0</span> devices are joined:\nZigbee2MQTT:warn  <span class="token number">2019</span>-11-09T13:04:03: <span class="token variable"><span class="token variable">`</span>permit_join<span class="token variable">`</span></span> <span class="token builtin class-name">set</span> to  <span class="token variable"><span class="token variable">`</span><span class="token boolean">true</span><span class="token variable">`</span></span> <span class="token keyword">in</span> configuration.yaml.\nZigbee2MQTT:warn  <span class="token number">2019</span>-11-09T13:04:03: Allowing new devices to join.\nZigbee2MQTT:warn  <span class="token number">2019</span>-11-09T13:04:03: Set <span class="token variable"><span class="token variable">`</span>permit_join<span class="token variable">`</span></span> to <span class="token variable"><span class="token variable">`</span><span class="token boolean">false</span><span class="token variable">`</span></span> once you joined all devices.\nZigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:03: Zigbee: allowing new devices to join.\nZigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:03: Connecting to MQTT server at mqtt://localhost\nZigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:03: Connected to MQTT server\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>Zigbee2MQTT can be stopped by pressing <code>CTRL + C</code>.</p><h2 id="optional-running-as-a-daemon-with-systemctl" tabindex="-1"><a class="header-anchor" href="#optional-running-as-a-daemon-with-systemctl" aria-hidden="true">#</a> (Optional) Running as a daemon with systemctl</h2><p>To run Zigbee2MQTT as daemon (in background) and start it automatically on boot we will run Zigbee2MQTT with systemctl.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Create a systemctl configuration file for Zigbee2MQTT</span>\n<span class="token function">sudo</span> <span class="token function">nano</span> /etc/systemd/system/zigbee2mqtt.service\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Add the following to this file:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[Unit]\nDescription=zigbee2mqtt\nAfter=network.target\n\n[Service]\nExecStart=/usr/bin/npm start\nWorkingDirectory=/opt/zigbee2mqtt\nStandardOutput=inherit\n# Or use StandardOutput=null if you don&#39;t want Zigbee2MQTT messages filling syslog, for more options see systemd.exec(5)\nStandardError=inherit\nRestart=always\nRestartSec=10s\nUser=pi\n\n[Install]\nWantedBy=multi-user.target\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>',30),b=(0,a.Uk)("If you are using a Raspberry Pi 1 or Zero AND if you followed this "),m={href:"https://gist.github.com/Koenkk/11fe6d4845f5275a2a8791d04ea223cb",target:"_blank",rel:"noopener noreferrer"},d=(0,a.Uk)("guide"),g=(0,a.Uk)(", replace "),k=(0,a._)("code",null,"ExecStart=/usr/bin/npm start",-1),h=(0,a.Uk)(" with "),f=(0,a._)("code",null,"ExecStart=/usr/local/bin/npm start",-1),v=(0,a.Uk)("."),T=(0,a.Uk)("If you are using a Raspberry Pi or a system running from a SD card, you will likely want to minimize the amount of log files written to disk. Systemd service with "),y=(0,a._)("code",null,"StandardOutput=inherit",-1),w=(0,a.Uk)(" will result in logging everything twice: once in "),q=(0,a._)("code",null,"journalctl",-1),M=(0,a.Uk)(" through the systemd unit and once from Zigbee2MQTT default logging to files under "),x=(0,a._)("code",null,"data/log",-1),Q=(0,a.Uk)(". You will likely want to keep only one of them: either use "),_=(0,a._)("code",null,"StandardOutput=null",-1),Z=(0,a.Uk)(" in the systemd unit and keep only the logs under "),z=(0,a._)("code",null,"data/log",-1),S=(0,a.Uk)(),C=(0,a._)("strong",null,"or",-1),U=(0,a.Uk)(" setting "),D={href:"https://www.zigbee2mqtt.io/guide/configuration/logging.html",target:"_blank",rel:"noopener noreferrer"},j=(0,a._)("code",null,"advanced.log_output = ['console']",-1),R=(0,a.Uk)(" in Zigbee2MQTT configuration to keep only the "),I=(0,a._)("code",null,"journalctl",-1),A=(0,a.Uk)(" logging."),E=(0,a.uE)('<p>Save the file and exit.</p><p>Verify that the configuration works:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Start Zigbee2MQTT</span>\n<span class="token function">sudo</span> systemctl start zigbee2mqtt\n\n<span class="token comment"># Show status</span>\nsystemctl status zigbee2mqtt.service\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Output should look like:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pi@raspberry:/opt/zigbee2mqtt $ systemctl status zigbee2mqtt.service\n● zigbee2mqtt.service - zigbee2mqtt\n   Loaded: loaded <span class="token punctuation">(</span>/etc/systemd/system/zigbee2mqtt.service<span class="token punctuation">;</span> disabled<span class="token punctuation">;</span> vendor preset: enabled<span class="token punctuation">)</span>\n   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Thu <span class="token number">2018</span>-06-07 <span class="token number">20</span>:27:22 BST<span class="token punctuation">;</span> 3s ago\n Main PID: <span class="token number">665</span> <span class="token punctuation">(</span>npm<span class="token punctuation">)</span>\n   CGroup: /system.slice/zigbee2mqtt.service\n           ├─665 <span class="token function">npm</span>\n           ├─678 <span class="token function">sh</span> -c <span class="token function">node</span> index.js\n           └─679 <span class="token function">node</span> index.js\n\nJun 07 <span class="token number">20</span>:27:22 raspberry systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: Started zigbee2mqtt.\nJun 07 <span class="token number">20</span>:27:23 raspberry npm<span class="token punctuation">[</span><span class="token number">665</span><span class="token punctuation">]</span>: <span class="token operator">&gt;</span> zigbee2mqtt@1.6.0 start /opt/zigbee2mqtt\nJun 07 <span class="token number">20</span>:27:23 raspberry npm<span class="token punctuation">[</span><span class="token number">665</span><span class="token punctuation">]</span>: <span class="token operator">&gt;</span> <span class="token function">node</span> index.js\nJun 07 <span class="token number">20</span>:27:24 raspberry npm<span class="token punctuation">[</span><span class="token number">665</span><span class="token punctuation">]</span>: Zigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:01: Logging to directory: <span class="token string">&#39;/opt/zigbee2mqtt/data/log/2019-11-09.14-04-01&#39;</span>\nJun 07 <span class="token number">20</span>:27:25 raspberry npm<span class="token punctuation">[</span><span class="token number">665</span><span class="token punctuation">]</span>: Zigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:01: Starting Zigbee2MQTT version <span class="token number">1.6</span>.0 <span class="token punctuation">(</span>commit <span class="token comment">#720e393)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>Now that everything works, we want systemctl to start Zigbee2MQTT automatically on boot, this can be done by executing:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> zigbee2mqtt.service\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Done! 😃</p><p>Some tips that can be handy later:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Stopping Zigbee2MQTT</span>\n<span class="token function">sudo</span> systemctl stop zigbee2mqtt\n\n<span class="token comment"># Starting Zigbee2MQTT</span>\n<span class="token function">sudo</span> systemctl start zigbee2mqtt\n\n<span class="token comment"># View the log of Zigbee2MQTT</span>\n<span class="token function">sudo</span> journalctl -u zigbee2mqtt.service -f\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="for-later-update-zigbee2mqtt-to-the-latest-version" tabindex="-1"><a class="header-anchor" href="#for-later-update-zigbee2mqtt-to-the-latest-version" aria-hidden="true">#</a> (For later) Update Zigbee2MQTT to the latest version</h2><p>To update Zigbee2MQTT to the latest version, execute:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Stop Zigbee2MQTT and go to directory</span>\n<span class="token function">sudo</span> systemctl stop zigbee2mqtt\n<span class="token builtin class-name">cd</span> /opt/zigbee2mqtt\n\n<span class="token comment"># Backup configuration</span>\n<span class="token function">cp</span> -R data data-backup\n\n<span class="token comment"># Update</span>\n<span class="token function">git</span> checkout HEAD -- npm-shrinkwrap.json\n<span class="token function">git</span> pull\n<span class="token function">npm</span> ci\n\n<span class="token comment"># Restore configuration</span>\n<span class="token function">cp</span> -R data-backup/* data\n<span class="token function">rm</span> -rf data-backup\n\n<span class="token comment"># Start Zigbee2MQTT</span>\n<span class="token function">sudo</span> systemctl start zigbee2mqtt\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>',13),L={},O=(0,e(83744).Z)(L,[["render",function(n,s){const e=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[t,l,i,(0,a._)("p",null,[p,(0,a._)("a",o,[r,(0,a.Wm)(e)]),c]),u,(0,a._)("blockquote",null,[(0,a._)("p",null,[b,(0,a._)("a",m,[d,(0,a.Wm)(e)]),g,k,h,f,v])]),(0,a._)("blockquote",null,[(0,a._)("p",null,[T,y,w,q,M,x,Q,_,Z,z,S,C,U,(0,a._)("a",D,[j,(0,a.Wm)(e)]),R,I,A])]),E],64)}]])},83744:(n,s)=>{s.Z=(n,s)=>{for(const[e,a]of s)n[e]=a;return n}}}]);