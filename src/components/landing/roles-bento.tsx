export function RolesBento() {
  return (
    <section className="roles-bento">
      <div className="container-x">
        <div className="roles-bento-head">
          <h2 className="roles-bento-title">
            OneAtlas gives you <span className="roles-grad">superpowers</span>
          </h2>
          <p className="roles-bento-sub">
            From idea to live product, Atlas adapts to the way you work —
            <br />
            turning every vision into something real &amp; fast.
          </p>
        </div>

        {/* Row 1: 3 columns */}
        <div className="bento-row bento-3">
          {/* Product managers */}
          <div className="bento-card">
            <h3>Product managers</h3>
            <p>Go from insight to prototype in hours and test ideas with your team before the day is over.</p>
            <div className="bento-vis bento-vis-pm">
              <div className="bv-inner">
                <div className="bv-label">Version history</div>
                <div className="bv-sub">Review changes, revert to a version.</div>
                <div className="bv-search">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  Search for a version
                </div>
                <div className="bv-tag">BOOKMARKED VERSIONS (1)</div>
                <div className="bv-version">
                  <span className="bv-dot" />
                  <div>
                    <div className="bv-vname">Landing page working</div>
                    <div className="bv-vmeta">Published · Jun 7 6:00PM (Created)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Entrepreneurs */}
          <div className="bento-card">
            <h3>Entrepreneurs</h3>
            <p>Launch a full business in days, not months. From landing page to product, all in one flow.</p>
            <div className="bento-vis bento-vis-ent">
              <div className="bv-inner">
                <div className="bv-label">Publish your project</div>
                <div className="bv-url-row">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>{" "}
                  https://dunder-mifflin.com
                </div>
                <div className="bv-url-row">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>{" "}
                  1min ago
                </div>
                <div className="bv-url-row bv-live">
                  <span className="bv-live-dot" /> Up to date
                </div>
                <div className="bv-share-label">Share it with friends and coworkers</div>
                <div className="bv-social-row">
                  <span className="bv-social">𝕏</span>
                  <span className="bv-social">in</span>
                  <span className="bv-social">⌥</span>
                </div>
                <div className="bv-update-btn">Update</div>
              </div>
            </div>
          </div>

          {/* Marketers */}
          <div className="bento-card">
            <h3>Marketers</h3>
            <p>Spin up high-performing campaign pages in hours, with SEO and hosting built in.</p>
            <div className="bento-vis bento-vis-mkt">
              <div className="bv-inner">
                <div className="bv-chart-title">Unique visitors</div>
                <div className="bv-chart-wrap">
                  <svg viewBox="0 0 200 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#635BFF" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#635BFF" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,70 C20,68 40,65 60,58 C80,50 100,42 120,30 C140,20 160,22 180,18 L200,15 L200,80 L0,80Z"
                      fill="url(#chartGrad)"
                    />
                    <path
                      d="M0,70 C20,68 40,65 60,58 C80,50 100,42 120,30 C140,20 160,22 180,18 L200,15"
                      fill="none"
                      stroke="#635BFF"
                      strokeWidth="2.5"
                    />
                    <text x="0" y="12" fontSize="9" fill="#697386">100</text>
                    <text x="0" y="30" fontSize="9" fill="#697386">80</text>
                    <text x="0" y="50" fontSize="9" fill="#697386">60</text>
                    <text x="0" y="70" fontSize="9" fill="#697386">40</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: 2 columns */}
        <div className="bento-row bento-2">
          {/* Agencies */}
          <div className="bento-card bento-card-center">
            <h3>Agencies</h3>
            <p>Multiply your impact: deliver more projects, faster, without scaling headcount.</p>
            <div className="bento-vis bento-vis-agency">
              <div className="bv-agency-cards">
                <div className="bv-agency-card dark">
                  <div className="bv-ac-sub">We craft extraordinary</div>
                  <div className="bv-ac-title">digital experiences</div>
                  <div className="bv-ac-blob" />
                </div>
                <div className="bv-agency-card blue">
                  <div className="bv-ac-title">Learn Like You Are Chatting</div>
                  <div className="bv-ac-sub">With A Smart Friend</div>
                  <div className="bv-ac-blob2" />
                </div>
                <div className="bv-agency-card light">
                  <div className="bv-ac-sub" style={{ marginBottom: 6 }}>AI Prompts</div>
                  <div className="bv-ac-count">500,000+</div>
                </div>
              </div>
            </div>
          </div>

          {/* Students & builders */}
          <div className="bento-card bento-card-center">
            <h3>Students &amp; builders</h3>
            <p>Learn by doing. Take ideas from class or side projects and turn them into fully working apps.</p>
            <div className="bento-vis bento-vis-students">
              <div className="bv-inner">
                <div className="bv-plan-label">Plan</div>
                <div className="bv-todo-list">
                  {[
                    "Analyze current project structure and dependencies",
                    "Design todo app component structure",
                    "Create todo data types and interfaces",
                    "Implement todo state management",
                  ].map((t, i) => (
                    <div key={i} className="bv-todo done">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#635BFF" strokeWidth="2.5">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="9 12 11 14 15 10" />
                      </svg>
                      {t}
                    </div>
                  ))}
                  <div className="bv-todo muted">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="9 12 11 14 15 10" />
                    </svg>
                    Create todo input component
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
