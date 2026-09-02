"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE } from "@/lib/site";
import { US_STATES, QUOTE_SERVICE_TYPES, YEARS_OPTIONS, COPY } from "@/lib/content";
import { CheckCircle2, ShieldCheck, ArrowRight, Phone, Clock, Zap, MapPin } from "lucide-react";

const WEBHOOK_URL = `https://josh.jam-bot.com/social-api/api/leads/webhook/netlify?tenant=josh&site=${SITE.domain}`;

const trustItems = [
  { icon: ShieldCheck, title: COPY.quote.trustNicheTitle, desc: COPY.quote.trustNicheDesc },
  { icon: Zap, title: "~15-minute quotes", desc: "Real quotes from real markets, fast." },
  { icon: Clock, title: "2-hour claims response", desc: "When a loss hits, you reach a person." },
  { icon: MapPin, title: "All 50 states", desc: "Licensed nationwide — NPN #8608479." },
];

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: "", businessName: "", email: "", phone: "", state: "", serviceType: "", yearsInBusiness: "", message: "", "bot-field": "",
    street_address: "", city: "", zip: "", prior_year_gross_sales: "", prior_year_subcontractor_expenses: "", prior_year_employee_count: "", prior_year_employee_payroll: "", estimated_gross_sales: "", estimated_subcontractor_expenses: "", estimated_employee_count: "", estimated_employee_payroll: "", estimated_material_costs: "", subcontractors_have_insurance: "", percent_subcontractors_insured: "", coverage_for_uninsured_subcontractors: "", year_business_started: "", business_description: "", class_code_1: "", class_code_2: "", class_code_3: "", class_code_4: "", class_code_5: "", residential_vs_commercial: "", new_vs_existing_construction: "", largest_projects: "", prior_carrier_name: "", prior_policy_number: "", prior_policy_expiration: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData["bot-field"]) return;
    setSubmitting(true);
    setError("");
    try {
      await fetch(WEBHOOK_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ form_name: "quote", source: SITE.domain, ...formData }) });
      setSubmitted(true);
    } catch {
      setError(COPY.quote.errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = "w-full px-4 py-3 rounded-xl border border-adobe bg-cream/50 text-espresso placeholder-mocha/60 focus:outline-none focus:border-clay focus:ring-2 focus:ring-clay/20 transition-all text-sm";
  const labelClass = "block text-sm font-heading font-semibold text-espresso mb-1.5";

  return (
    <>
      <Navbar />
      <main>
        <section className="relative bg-warm-radial pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container-wide">
            <FadeIn className="text-center max-w-2xl mx-auto mb-12">
              <span className="pill-clay"><ShieldCheck className="h-3.5 w-3.5" /> Free quote</span>
              <h1 className="mt-5 font-heading font-extrabold text-espresso text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                {COPY.quote.h1Lead}{" "}
                <span className="bg-gradient-to-r from-clay via-clay-light to-gold-dark bg-clip-text text-transparent">{COPY.quote.h1Highlight}</span>
              </h1>
              <p className="mt-5 lead">{COPY.quote.lead}</p>
            </FadeIn>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="space-y-4">
                {trustItems.map((item) => (
                  <FadeIn key={item.title}>
                    <div className="flex gap-3 p-5 rounded-2xl bg-white border border-adobe shadow-card">
                      <span className="flex-shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-clay/10 text-clay"><item.icon className="h-5 w-5" strokeWidth={2.2} /></span>
                      <div>
                        <p className="font-heading font-bold text-espresso text-sm">{item.title}</p>
                        <p className="text-mocha text-xs leading-relaxed mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
                <FadeIn>
                  <div className="p-5 rounded-2xl bg-espresso text-cream text-center">
                    <p className="text-xs font-heading font-bold uppercase tracking-wider text-gold mb-2">Prefer to call?</p>
                    <a href={SITE.phoneHref} className="flex items-center justify-center gap-2 text-cream font-heading font-extrabold text-xl hover:text-gold-light transition-colors"><Phone className="h-5 w-5" />{SITE.phone}</a>
                    <p className="text-xs text-cream/60 mt-1">{SITE.hours}</p>
                  </div>
                </FadeIn>
              </div>

              <div className="lg:col-span-2">
                {submitted ? (
                  <FadeIn>
                    <div className="p-10 md:p-12 rounded-3xl bg-white border border-adobe shadow-card text-center">
                      <div className="w-16 h-16 rounded-full bg-sage/15 flex items-center justify-center mx-auto mb-4"><CheckCircle2 className="h-8 w-8 text-sage" /></div>
                      <h2 className="font-heading font-extrabold text-espresso text-2xl mb-3">Quote request received</h2>
                      <p className="text-mocha mb-2">Thank you! We'll review your operation and reach out within one business day with personalized quotes.</p>
                      <p className="text-sm text-mocha">Need it sooner? Call <a href={SITE.phoneHref} className="text-clay font-heading font-semibold">{SITE.phone}</a>.</p>
                      <Link href="/" className="btn-secondary mt-6 inline-flex">Back to home</Link>
                    </div>
                  </FadeIn>
                ) : (
                  <FadeIn>
                    <form name="quote" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} className="rounded-3xl bg-white border border-adobe shadow-card p-7 md:p-9 space-y-5">
                      <input type="hidden" name="form-name" value="quote" />
                      <input name="bot-field" type="hidden" value={formData["bot-field"]} onChange={handleChange} className="hidden" />

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div><label htmlFor="name" className={labelClass}>Full name *</label><input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Jane Smith" className={inputClass} /></div>
                        <div><label htmlFor="businessName" className={labelClass}>Business name *</label><input id="businessName" name="businessName" type="text" required value={formData.businessName} onChange={handleChange} placeholder={COPY.quote.businessPlaceholder} className={inputClass} /></div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div><label htmlFor="email" className={labelClass}>Email *</label><input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder={COPY.quote.emailPlaceholder} className={inputClass} /></div>
                        <div><label htmlFor="phone" className={labelClass}>Phone *</label><input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} placeholder={COPY.quote.phonePlaceholder} className={inputClass} /></div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div><label htmlFor="state" className={labelClass}>Primary state *</label>
                          <select id="state" name="state" required value={formData.state} onChange={handleChange} className={inputClass}><option value="">Select a state…</option>{US_STATES.map((s) => (<option key={s} value={s}>{s}</option>))}</select>
                        </div>
                        <div><label htmlFor="yearsInBusiness" className={labelClass}>Years in business</label>
                          <select id="yearsInBusiness" name="yearsInBusiness" value={formData.yearsInBusiness} onChange={handleChange} className={inputClass}><option value="">Select…</option>{YEARS_OPTIONS.map((y) => (<option key={y} value={y}>{y}</option>))}</select>
                        </div>
                      </div>

                      <div><label htmlFor="serviceType" className={labelClass}>What do you need? *</label>
                        <select id="serviceType" name="serviceType" required value={formData.serviceType} onChange={handleChange} className={inputClass}><option value="">Select coverage…</option>{QUOTE_SERVICE_TYPES.map((s) => (<option key={s} value={s}>{s}</option>))}</select>
                      </div>

                      <div>
                        <label htmlFor="message" className={labelClass}>Tell us about your operation <span className="text-mocha/60 font-normal">(optional)</span></label>
                        <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} placeholder={COPY.quote.messagePlaceholder} className={`${inputClass} resize-none`} />
                      </div>
                      
                      {/* complete class field set — forms-required-fields.json */}
                      <div className="pt-5 mt-1 border-t border-black/10">
                        <p className={labelClass}>Where the work happens</p>
                      </div>
                      <div>
                        <label className={labelClass}>Street address</label>
                        <input type="text" name="street_address" value={formData.street_address} onChange={(e) => setFormData({ ...formData, street_address: e.target.value })} className={inputClass} />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                        <label className={labelClass}>City</label>
                        <input type="text" name="city" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} className={inputClass} />
                      </div>
                        <div>
                        <label className={labelClass}>ZIP code</label>
                        <input type="text" name="zip" value={formData.zip} onChange={(e) => setFormData({ ...formData, zip: e.target.value })} className={inputClass} />
                      </div>
                      </div>
                      <div className="pt-5 mt-1 border-t border-black/10">
                        <p className={labelClass}>Operations</p>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                        <label className={labelClass}>Year business started</label>
                        <input type="number" name="year_business_started" value={formData.year_business_started} onChange={(e) => setFormData({ ...formData, year_business_started: e.target.value })} className={inputClass} />
                      </div>
                        <div>
                        <label className={labelClass}>Residential vs commercial split</label>
                        <input type="text" name="residential_vs_commercial" value={formData.residential_vs_commercial} onChange={(e) => setFormData({ ...formData, residential_vs_commercial: e.target.value })} className={inputClass} />
                      </div>
                      </div>
                      <div>
                        <label className={labelClass}>New construction vs existing / remodel</label>
                        <input type="text" name="new_vs_existing_construction" value={formData.new_vs_existing_construction} onChange={(e) => setFormData({ ...formData, new_vs_existing_construction: e.target.value })} className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Description of business</label>
                        <textarea name="business_description" rows={3} value={formData.business_description} onChange={(e) => setFormData({ ...formData, business_description: e.target.value })} className={inputClass} />
                      </div>
                      <div className="pt-5 mt-1 border-t border-black/10">
                        <p className={labelClass}>Class codes & split of operations</p>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                        <label className={labelClass}>Class code 1 (+ % of operations)</label>
                        <input type="text" name="class_code_1" value={formData.class_code_1} onChange={(e) => setFormData({ ...formData, class_code_1: e.target.value })} className={inputClass} />
                      </div>
                        <div>
                        <label className={labelClass}>Class code 2 (+ % of operations)</label>
                        <input type="text" name="class_code_2" value={formData.class_code_2} onChange={(e) => setFormData({ ...formData, class_code_2: e.target.value })} className={inputClass} />
                      </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                        <label className={labelClass}>Class code 3 (+ % of operations)</label>
                        <input type="text" name="class_code_3" value={formData.class_code_3} onChange={(e) => setFormData({ ...formData, class_code_3: e.target.value })} className={inputClass} />
                      </div>
                        <div>
                        <label className={labelClass}>Class code 4 (+ % of operations)</label>
                        <input type="text" name="class_code_4" value={formData.class_code_4} onChange={(e) => setFormData({ ...formData, class_code_4: e.target.value })} className={inputClass} />
                      </div>
                      </div>
                      <div>
                        <label className={labelClass}>Class code 5 (+ % of operations)</label>
                        <input type="text" name="class_code_5" value={formData.class_code_5} onChange={(e) => setFormData({ ...formData, class_code_5: e.target.value })} className={inputClass} />
                      </div>
                      <div className="pt-5 mt-1 border-t border-black/10">
                        <p className={labelClass}>Last 12 months — sales & payroll</p>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                        <label className={labelClass}>Prior year gross sales</label>
                        <input type="text" name="prior_year_gross_sales" value={formData.prior_year_gross_sales} onChange={(e) => setFormData({ ...formData, prior_year_gross_sales: e.target.value })} className={inputClass} />
                      </div>
                        <div>
                        <label className={labelClass}>Prior year subcontractor expenses</label>
                        <input type="text" name="prior_year_subcontractor_expenses" value={formData.prior_year_subcontractor_expenses} onChange={(e) => setFormData({ ...formData, prior_year_subcontractor_expenses: e.target.value })} className={inputClass} />
                      </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                        <label className={labelClass}>Prior year employee count</label>
                        <input type="number" name="prior_year_employee_count" value={formData.prior_year_employee_count} onChange={(e) => setFormData({ ...formData, prior_year_employee_count: e.target.value })} className={inputClass} />
                      </div>
                        <div>
                        <label className={labelClass}>Prior year employee payroll</label>
                        <input type="text" name="prior_year_employee_payroll" value={formData.prior_year_employee_payroll} onChange={(e) => setFormData({ ...formData, prior_year_employee_payroll: e.target.value })} className={inputClass} />
                      </div>
                      </div>
                      <div className="pt-5 mt-1 border-t border-black/10">
                        <p className={labelClass}>Next 12 months — estimated</p>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                        <label className={labelClass}>Estimated gross sales (next 12 months)</label>
                        <input type="text" name="estimated_gross_sales" value={formData.estimated_gross_sales} onChange={(e) => setFormData({ ...formData, estimated_gross_sales: e.target.value })} className={inputClass} />
                      </div>
                        <div>
                        <label className={labelClass}>Estimated subcontractor expenses (next 12 months)</label>
                        <input type="text" name="estimated_subcontractor_expenses" value={formData.estimated_subcontractor_expenses} onChange={(e) => setFormData({ ...formData, estimated_subcontractor_expenses: e.target.value })} className={inputClass} />
                      </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                        <label className={labelClass}>Estimated employee count (year total)</label>
                        <input type="number" name="estimated_employee_count" value={formData.estimated_employee_count} onChange={(e) => setFormData({ ...formData, estimated_employee_count: e.target.value })} className={inputClass} />
                      </div>
                        <div>
                        <label className={labelClass}>Estimated employee annual payroll</label>
                        <input type="text" name="estimated_employee_payroll" value={formData.estimated_employee_payroll} onChange={(e) => setFormData({ ...formData, estimated_employee_payroll: e.target.value })} className={inputClass} />
                      </div>
                      </div>
                      <div>
                        <label className={labelClass}>Estimated material costs</label>
                        <input type="text" name="estimated_material_costs" value={formData.estimated_material_costs} onChange={(e) => setFormData({ ...formData, estimated_material_costs: e.target.value })} className={inputClass} />
                      </div>
                      <div className="pt-5 mt-1 border-t border-black/10">
                        <p className={labelClass}>Subcontractors</p>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                        <label className={labelClass}>Do your subcontractors have insurance?</label>
                        <select name="subcontractors_have_insurance" value={formData.subcontractors_have_insurance} onChange={(e) => setFormData({ ...formData, subcontractors_have_insurance: e.target.value })} className={inputClass}>
                          <option value="">Select...</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                        <div>
                        <label className={labelClass}>What percent of your subcontractors have insurance?</label>
                        <input type="number" name="percent_subcontractors_insured" value={formData.percent_subcontractors_insured} onChange={(e) => setFormData({ ...formData, percent_subcontractors_insured: e.target.value })} className={inputClass} />
                      </div>
                      </div>
                      <div>
                        <label className={labelClass}>Do you need coverage for uninsured subcontractors?</label>
                        <select name="coverage_for_uninsured_subcontractors" value={formData.coverage_for_uninsured_subcontractors} onChange={(e) => setFormData({ ...formData, coverage_for_uninsured_subcontractors: e.target.value })} className={inputClass}>
                          <option value="">Select...</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                      <div className="pt-5 mt-1 border-t border-black/10">
                        <p className={labelClass}>Track record</p>
                      </div>
                      <div>
                        <label className={labelClass}>5 largest projects ever (description + dollar amount)</label>
                        <textarea name="largest_projects" rows={3} value={formData.largest_projects} onChange={(e) => setFormData({ ...formData, largest_projects: e.target.value })} placeholder="Description and dollar amount for each" className={inputClass} />
                      </div>
                      <div className="pt-5 mt-1 border-t border-black/10">
                        <p className={labelClass}>Current coverage</p>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                        <label className={labelClass}>Prior insurance carrier name</label>
                        <input type="text" name="prior_carrier_name" value={formData.prior_carrier_name} onChange={(e) => setFormData({ ...formData, prior_carrier_name: e.target.value })} className={inputClass} />
                      </div>
                        <div>
                        <label className={labelClass}>Prior policy number</label>
                        <input type="text" name="prior_policy_number" value={formData.prior_policy_number} onChange={(e) => setFormData({ ...formData, prior_policy_number: e.target.value })} className={inputClass} />
                      </div>
                      </div>
                      <div>
                        <label className={labelClass}>Prior policy expiration date</label>
                        <input type="date" name="prior_policy_expiration" value={formData.prior_policy_expiration} onChange={(e) => setFormData({ ...formData, prior_policy_expiration: e.target.value })} className={inputClass} />
                      </div>
</form>
                  </FadeIn>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
