"use client";
import { useState } from "react";

const FILTERS = ["All", "CRUD Apps", "Dashboards", "Admin Panels", "Workflows", "Portals"];

const ClockIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export function Templates() {
  const [active, setActive] = useState("All");

  return (
    <section className="section">
      <div className="container-x">
        <div className="templates-head">
          <div>
            <span className="eyebrow">Templates</span>
            <h2
              className="section-title"
              style={{ fontSize: "clamp(36px,4.5vw,56px)", maxWidth: 560 }}
            >
              Ship faster from a proven base
            </h2>
          </div>
          <a href="#" className="browse-link">
            Browse all templates →
          </a>
        </div>

        <div className="filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`filter ${active === f ? "active" : ""}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="templates-grid">
          {/* Sales CRM (featured) */}
          <div className="tpl-card featured">
            <div className="accent" />
            <div>
              <div className="tag-row">
                <span className="cat-tag">CRUD APPS</span>
                <span className="feat-tag">Featured</span>
              </div>
              <h3>Sales CRM</h3>
              <p>
                Track pipeline, manage contacts, and close deals faster — all in one place.
              </p>
              <div className="pill-row">
                <span className="mini-pill">Contacts</span>
                <span className="mini-pill">Pipeline</span>
                <span className="mini-pill">Deals</span>
              </div>
              <div className="meta-row">
                <span>
                  <ClockIcon />~2 min setup
                </span>
                <span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                  </svg>
                  Teams of 2–50
                </span>
              </div>
              <a className="use-btn" href="#">Use this template →</a>
            </div>
            <div className="live-preview">
              <div className="lp-label">LIVE PREVIEW</div>
              <div className="lp-title"><span className="d" />Sales CRM</div>
              <div className="lp-stat"><span>Total Pipeline</span><span className="v">$284k</span></div>
              <div className="lp-stat"><span>Deals Closing</span><span className="v">12 this month</span></div>
              <div className="lp-stat"><span>Win Rate</span><span className="v">38%</span></div>
              <div className="lp-refresh">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="23 4 23 10 17 10" />
                  <polyline points="1 20 1 14 7 14" />
                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                </svg>
                Auto-refreshes every 30 seconds
              </div>
            </div>
          </div>

          {/* Expense Approval */}
          <div className="tpl-card expense">
            <div className="accent" />
            <div className="tag-row">
              <span className="cat-tag peach">WORKFLOWS</span>
            </div>
            <h3>Expense Approval</h3>
            <p>Route expense submissions through multi-step approvals with automatic escalation.</p>
            <div className="expense-pending">
              <span className="l">Pending</span>
              <span className="r">7 requests</span>
            </div>
            <div className="meta-row" style={{ marginTop: 22, marginBottom: 0 }}>
              <span><ClockIcon />~3 min setup</span>
            </div>
          </div>
        </div>

        <div className="templates-grid-2">
          {[
            { cls: "", accent: "#FF5996", tag: "DASHBOARDS", tagCls: "coral", title: "Analytics Report", desc: "Live charts, KPI tiles, and date-range comparisons — no SQL required.", stat: "MAU", val: "42,180", time: "~1 min setup" },
            { cls: "", accent: "var(--mint)", tag: "CRUD APPS", tagCls: "mint", title: "Inventory Manager", desc: "Track SKUs, set reorder thresholds, and manage purchase orders end-to-end.", stat: "In Stock", val: "1,240 items", time: "~2 min setup" },
            { cls: "", accent: "var(--violet)", tag: "PORTALS", tagCls: "violet", title: "HR Onboarding Portal", desc: "A self-serve hub for new hires — tasks, docs, team directory, and day-one checklist.", stat: "Completion Rate", val: "94%", time: "~2 min setup" },
            { cls: "", accent: "#0A2540", tag: "ADMIN PANELS", tagCls: "", title: "User Admin Panel", desc: "Manage users, roles, and field-level permissions across your entire workspace.", stat: "Active Users", val: "348", time: "~1 min setup" },
            { cls: "", accent: "var(--sky)", tag: "CRUD APPS", tagCls: "sky", title: "Support Queue", desc: "Triage incoming tickets, assign agents, track SLAs and keep customers updated automatically.", stat: "Open Tickets", val: "23", time: "~2 min setup" },
            { cls: "", accent: "var(--gold)", tag: "ADMIN PANELS", tagCls: "gold", title: "Vendor Manager", desc: "Centralise vendor contracts, contact records, and payment schedules in one searchable view.", stat: "Active Vendors", val: "61", time: "~3 min setup" },
          ].map((c, i) => (
            <div key={i} className="tpl-card small">
              <div className="accent" style={{ background: c.accent }} />
              <div className="tag-row">
                <span className={`cat-tag ${c.tagCls}`} style={!c.tagCls ? { color: "#0A2540" } : undefined}>
                  {c.tag}
                </span>
              </div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <div className="small-stat"><span>{c.stat}</span><span className="v">{c.val}</span></div>
              <div className="meta-row" style={{ marginBottom: 0 }}>
                <span><ClockIcon />{c.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
