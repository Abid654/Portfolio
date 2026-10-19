import { 
  ShieldCheck, 
  Check, 
  Radio 
} from 'lucide-react';

export const ProjectPreviewGraphic = ({ visualType, className = "h-48 sm:h-56 w-full" }) => {
  if (visualType === 'workspace-dashboard') {
    return (
      <div className={`relative bg-[#0A1218] rounded-t-lg overflow-hidden border-b border-[#1A2A38] p-4 flex flex-col justify-between font-mono text-xs select-none ${className}`}>
        {/* Top window bar */}
        <div className="flex items-center justify-between pb-3 border-b border-[#1A2A38]">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#B7FF4A]/80"></div>
            <span className="text-[11px] text-[#8E9CA6] ml-2">mern-workspace // ws://localhost:5000</span>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#101A22] border border-[#1A2A38] text-[10px] text-[#B7FF4A]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF4A] animate-ping"></span>
            <span>WS: CONNECTED</span>
          </div>
        </div>

        {/* Mock dashboard layout */}
        <div className="grid grid-cols-12 gap-3 my-auto py-2">
          {/* Left mini sidebar */}
          <div className="col-span-4 bg-[#101A22] rounded p-2.5 border border-[#1A2A38] flex flex-col gap-1.5">
            <div className="text-[10px] text-[#5B6B77] uppercase tracking-wider">CHANNELS</div>
            <div className="flex items-center gap-1.5 text-[#B7FF4A] bg-[#162531] px-1.5 py-1 rounded text-[11px]">
              <span className="text-[#8E9CA6]">#</span> sprint-dev
            </div>
            <div className="flex items-center gap-1.5 text-[#8E9CA6] px-1.5 py-0.5 text-[11px]">
              <span className="text-[#5B6B77]">#</span> api-rest-auth
            </div>
            <div className="flex items-center gap-1.5 text-[#8E9CA6] px-1.5 py-0.5 text-[11px]">
              <span className="text-[#5B6B77]">#</span> mongodb-cluster
            </div>
          </div>

          {/* Right live feed */}
          <div className="col-span-8 bg-[#0D161E] rounded p-2.5 border border-[#1A2A38] flex flex-col justify-between">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-[10px] text-[#8E9CA6]">
                <span className="text-[#F4F7F5] font-semibold">authMiddleware.js</span>
                <span className="text-[#B7FF4A]">JWT VALID</span>
              </div>
              <div className="bg-[#101A22] p-1.5 rounded text-[10px] text-[#8E9CA6] border border-[#162531]">
                <code>payload = &#123; user: &quot;alex_dev&quot;, role: &quot;admin&quot; &#125;</code>
              </div>
              <div className="text-[10px] text-[#B7FF4A] flex items-center gap-1">
                <Check className="w-3 h-3" /> MongoDB aggregation query indexed in 4ms
              </div>
            </div>
          </div>
        </div>

        {/* Bottom status strip */}
        <div className="flex items-center justify-between pt-2 border-t border-[#1A2A38] text-[10px] text-[#5B6B77]">
          <span>MERN STACK // REACT 19 + EXPRESS + MONGO</span>
          <span className="text-[#8E9CA6]">SOCKET: 24 PEERS ACTIVE</span>
        </div>
      </div>
    );
  }

  if (visualType === 'database-portal') {
    return (
      <div className={`relative bg-[#0A1218] rounded-t-lg overflow-hidden border-b border-[#1A2A38] p-4 flex flex-col justify-between font-mono text-xs select-none ${className}`}>
        {/* Top window bar */}
        <div className="flex items-center justify-between pb-3 border-b border-[#1A2A38]">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#B7FF4A]/80"></div>
            <span className="text-[11px] text-[#8E9CA6] ml-2">laravel-orm // schema: mysql_prod</span>
          </div>
          <div className="px-2 py-0.5 rounded bg-[#101A22] border border-[#1A2A38] text-[10px] text-[#B7FF4A]">
            ELOQUENT ORM
          </div>
        </div>

        {/* Schema table visualization */}
        <div className="my-auto py-2">
          <div className="bg-[#0D161E] rounded border border-[#1A2A38] p-2.5">
            <div className="flex items-center justify-between pb-1.5 border-b border-[#1A2A38] text-[10px] text-[#8E9CA6]">
              <span className="text-[#F4F7F5] font-bold">TABLE: transactions</span>
              <span className="text-[#B7FF4A]">INNODB // UTF8MB4</span>
            </div>
            <div className="grid grid-cols-4 gap-1 py-1 text-[10px] text-[#5B6B77] border-b border-[#162531]">
              <span>FIELD</span>
              <span>TYPE</span>
              <span>INDEX</span>
              <span className="text-right">RELATION</span>
            </div>
            <div className="grid grid-cols-4 gap-1 py-0.5 text-[10px] text-[#F4F7F5]">
              <span className="text-[#B7FF4A]">id</span>
              <span>BIGINT</span>
              <span className="text-[#8E9CA6]">PRIMARY</span>
              <span className="text-right text-[#8E9CA6]">-</span>
            </div>
            <div className="grid grid-cols-4 gap-1 py-0.5 text-[10px] text-[#F4F7F5]">
              <span>client_id</span>
              <span>INT</span>
              <span className="text-[#8E9CA6]">FK_INDEX</span>
              <span className="text-right text-[#B7FF4A]">belongsTo(User)</span>
            </div>
            <div className="grid grid-cols-4 gap-1 py-0.5 text-[10px] text-[#F4F7F5]">
              <span>amount</span>
              <span>DECIMAL</span>
              <span className="text-[#8E9CA6]">-</span>
              <span className="text-right text-[#8E9CA6]">not null</span>
            </div>
          </div>
        </div>

        {/* Bottom query execution preview */}
        <div className="flex items-center justify-between pt-2 border-t border-[#1A2A38] text-[10px] text-[#5B6B77]">
          <span>PHP 8.2 // LARAVEL 11</span>
          <span className="text-[#B7FF4A]">QUERY TIME: 1.2ms (EAGER LOADED)</span>
        </div>
      </div>
    );
  }

  if (visualType === 'analytics-ui') {
    return (
      <div className={`relative bg-[#0A1218] rounded-t-lg overflow-hidden border-b border-[#1A2A38] p-4 flex flex-col justify-between font-mono text-xs select-none ${className}`}>
        {/* Top window bar */}
        <div className="flex items-center justify-between pb-3 border-b border-[#1A2A38]">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#B7FF4A]/80"></div>
            <span className="text-[11px] text-[#8E9CA6] ml-2">redux-devtools // state.dispatch()</span>
          </div>
          <div className="px-2 py-0.5 rounded bg-[#101A22] border border-[#1A2A38] text-[10px] text-[#B7FF4A]">
            REACT 19 + RTK
          </div>
        </div>

        {/* Action stream and state bars */}
        <div className="my-auto py-2 grid grid-cols-12 gap-3">
          <div className="col-span-6 bg-[#0D161E] rounded p-2 border border-[#1A2A38] space-y-1">
            <div className="text-[10px] text-[#5B6B77]">ACTION LOG</div>
            <div className="text-[10px] text-[#B7FF4A] bg-[#162531] p-1 rounded">@projects/setFilter(&apos;all&apos;)</div>
            <div className="text-[10px] text-[#8E9CA6] p-0.5">@metrics/updateInterval</div>
            <div className="text-[10px] text-[#8E9CA6] p-0.5">@auth/verifySession</div>
          </div>
          <div className="col-span-6 bg-[#0D161E] rounded p-2 border border-[#1A2A38] flex flex-col justify-between">
            <div className="text-[10px] text-[#8E9CA6] flex justify-between">
              <span>STORE SLICES</span>
              <span className="text-[#B7FF4A]">4 SYNCED</span>
            </div>
            <div className="space-y-1.5 my-1">
              <div className="w-full bg-[#1A2A38] h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#B7FF4A] h-full w-[78%]"></div>
              </div>
              <div className="w-full bg-[#1A2A38] h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#B7FF4A] h-full w-[52%]"></div>
              </div>
            </div>
            <div className="text-[9px] text-[#5B6B77]">IMMUTABLE STATE UPDATES</div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-[#1A2A38] text-[10px] text-[#5B6B77]">
          <span>TAILWIND CSS COMPONENT HIERARCHY</span>
          <span className="text-[#8E9CA6]">ZERO PROP DRILLING</span>
        </div>
      </div>
    );
  }

  if (visualType === 'websocket-feed') {
    return (
      <div className={`relative bg-[#0A1218] rounded-t-lg overflow-hidden border-b border-[#1A2A38] p-4 flex flex-col justify-between font-mono text-xs select-none ${className}`}>
        {/* Top window bar */}
        <div className="flex items-center justify-between pb-3 border-b border-[#1A2A38]">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#B7FF4A]/80"></div>
            <span className="text-[11px] text-[#8E9CA6] ml-2">node.js // socket-server:8080</span>
          </div>
          <div className="px-2 py-0.5 rounded bg-[#101A22] border border-[#1A2A38] text-[10px] text-[#B7FF4A] flex items-center gap-1">
            <Radio className="w-2.5 h-2.5 animate-pulse" />
            <span>PING: 11ms</span>
          </div>
        </div>

        {/* Live socket traffic stream */}
        <div className="my-auto py-2 bg-[#0D161E] rounded p-2.5 border border-[#1A2A38] space-y-1">
          <div className="flex items-center justify-between text-[10px]">
            <span className="text-[#8E9CA6]">&gt; [SOCKET] connection received</span>
            <span className="text-[#5B6B77]">12:59:12.44</span>
          </div>
          <div className="flex items-center justify-between text-[10px]">
            <span className="text-[#B7FF4A]">&lt; [EMIT] event: &quot;message:broadcast&quot;</span>
            <span className="text-[#B7FF4A]">ACK: OK</span>
          </div>
          <div className="bg-[#101A22] p-1.5 rounded text-[10px] text-[#8E9CA6] border border-[#162531]">
            <code>&#123; &quot;channelId&quot;: &quot;general&quot;, &quot;sender&quot;: &quot;usr_409&quot;, &quot;delivery&quot;: &quot;instant&quot; &#125;</code>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-[#1A2A38] text-[10px] text-[#5B6B77]">
          <span>EXPRESS REST API BACKUP MOUNTED</span>
          <span className="text-[#B7FF4A]">STATUS: 200 OK</span>
        </div>
      </div>
    );
  }

  if (visualType === 'wordpress-site') {
    return (
      <div className={`relative bg-[#0A1218] rounded-t-lg overflow-hidden border-b border-[#1A2A38] p-4 flex flex-col justify-between font-mono text-xs select-none ${className}`}>
        {/* Top window bar */}
        <div className="flex items-center justify-between pb-3 border-b border-[#1A2A38]">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#B7FF4A]/80"></div>
            <span className="text-[11px] text-[#8E9CA6] ml-2">cms-engine // elementor.builder</span>
          </div>
          <div className="px-2 py-0.5 rounded bg-[#101A22] border border-[#1A2A38] text-[10px] text-[#B7FF4A]">
            SEO: 99 / 100
          </div>
        </div>

        {/* CMS layout visual */}
        <div className="my-auto py-2 grid grid-cols-12 gap-2">
          <div className="col-span-3 bg-[#101A22] rounded p-2 border border-[#1A2A38] flex flex-col justify-between text-[10px]">
            <span className="text-[#8E9CA6]">NAVBAR</span>
            <div className="w-full bg-[#1A2A38] h-2 rounded"></div>
            <div className="w-2/3 bg-[#1A2A38] h-2 rounded"></div>
          </div>
          <div className="col-span-9 bg-[#0D161E] rounded p-2.5 border border-[#1A2A38] space-y-1.5">
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-[#F4F7F5] font-bold">HERO SECTION</span>
              <span className="text-[#B7FF4A]">H1 SEMANTIC TAG</span>
            </div>
            <div className="w-full bg-[#162531] h-3 rounded"></div>
            <div className="flex gap-2">
              <div className="w-16 bg-[#B7FF4A]/40 h-3 rounded"></div>
              <div className="w-20 bg-[#1A2A38] h-3 rounded"></div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-[#1A2A38] text-[10px] text-[#5B6B77]">
          <span>WORDPRESS 6.x + PHP 8 + ELEMENTOR</span>
          <span className="text-[#8E9CA6]">MOBILE AUDIT PASSED</span>
        </div>
      </div>
    );
  }

  // Default: auth-service & Postman API QA runner
  return (
    <div className={`relative bg-[#0A1218] rounded-t-lg overflow-hidden border-b border-[#1A2A38] p-4 flex flex-col justify-between font-mono text-xs select-none ${className}`}>
      {/* Top window bar */}
      <div className="flex items-center justify-between pb-3 border-b border-[#1A2A38]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#B7FF4A]/80"></div>
          <span className="text-[11px] text-[#8E9CA6] ml-2">postman-suite // POST /api/v1/auth/login</span>
        </div>
        <div className="px-2 py-0.5 rounded bg-[#101A22] border border-[#1A2A38] text-[10px] text-[#B7FF4A] flex items-center gap-1">
          <ShieldCheck className="w-3 h-3" />
          <span>QA PASS</span>
        </div>
      </div>

      {/* Response preview */}
      <div className="my-auto py-2 bg-[#0D161E] rounded p-2.5 border border-[#1A2A38] space-y-1">
        <div className="flex items-center justify-between text-[10px]">
          <span className="text-[#B7FF4A] font-bold">200 OK</span>
          <span className="text-[#8E9CA6]">Latency: 28ms</span>
          <span className="text-[#5B6B77]">Size: 1.1 KB</span>
        </div>
        <div className="bg-[#101A22] p-1.5 rounded text-[10px] text-[#8E9CA6] border border-[#162531]">
          <code>Authorization: Bearer eyJhbGciOiJIUzI1Ni...</code>
        </div>
        <div className="text-[10px] text-[#B7FF4A] flex items-center gap-1">
          <Check className="w-3 h-3" /> Manual QA Test 14/14: NoSQL injection sanitized
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-[#1A2A38] text-[10px] text-[#5B6B77]">
        <span>EXPRESS ROUTE GUARDS + POSTMAN RUNNER</span>
        <span className="text-[#8E9CA6]">ALL ASSERTIONS GREEN</span>
      </div>
    </div>
  );
};

export default ProjectPreviewGraphic;
