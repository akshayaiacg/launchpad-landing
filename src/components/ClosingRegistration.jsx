import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import { Send, CheckCircle2, ShieldCheck, Sparkles, AlertCircle, Phone, Mail, MapPin } from 'lucide-react';

export default function ClosingRegistration({ selectedRouteId }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    qualification: 'Class 12th / 10+2',
    admissionRoute: selectedRouteId === 'route-b' ? 'Route B (2-Week Workshop)' : 'Route A (Direct Portfolio & Interview)',
    preferredTrack: 'J-Anime Pro (2-Year Advanced Residential)',
    portfolioLink: '',
    city: '',
    notes: '',
    agreedToTerms: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Update selected route if passed from parent
  React.useEffect(() => {
    if (selectedRouteId) {
      setFormData(prev => ({
        ...prev,
        admissionRoute: selectedRouteId === 'route-b' ? 'Route B (2-Week Workshop)' : 'Route A (Direct Portfolio & Interview)'
      }));
    }
  }, [selectedRouteId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error for field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your full name';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+-\s]{8,16}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please provide a valid telephone number';
    }
    if (!formData.city.trim()) newErrors.city = 'Please enter your current city';
    if (!formData.agreedToTerms) newErrors.agreedToTerms = 'You must confirm residential interest and accuracy';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate client-side submission with realistic response time
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      qualification: 'Class 12th / 10+2',
      admissionRoute: 'Route A (Direct Portfolio & Interview)',
      preferredTrack: 'J-Anime Pro (2-Year Advanced Residential)',
      portfolioLink: '',
      city: '',
      notes: '',
      agreedToTerms: false
    });
  };

  return (
    <section 
      id="register" 
      className="py-20 md:py-28 bg-gradient-to-b from-[#090e1c] via-[#060a14] to-[#04060c] text-white relative overflow-hidden"
      aria-label="Registration and Admissions Application"
    >
      {/* Background Japanese Watermark */}
      <div 
        aria-hidden="true" 
        className="absolute top-10 right-10 font-serif text-8xl lg:text-[14rem] font-black text-white/[0.02] pointer-events-none select-none"
      >
        登録
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          badge="Admissions Open • Autumn Cohort"
          kanji="出願受付"
          title="Begin Your Journey to Tokyo's Animation Studios"
          subtitle="Submit your candidate details to schedule a portfolio review, receive the detailed program prospectus, and reserve an assessment slot."
          light={false}
        />

        <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#0f172a] to-[#090e1c] rounded-3xl border border-white/15 p-6 sm:p-10 shadow-2xl relative">
          
          {/* Top urgency banner */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-red-950/40 border border-red-500/30 mb-8 text-xs font-mono">
            <span className="flex items-center gap-2 text-red-300 font-bold">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              Limited Residential Cohort: Capped at 35 Artists
            </span>
            <span className="text-amber-300">
              Kyoto Seika Collaboration Standards
            </span>
          </div>

          {/* Success State View */}
          {isSubmitted ? (
            <div className="py-12 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mb-5 animate-bounce">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30 mb-2">
                Application Received Successfully
              </span>

              <h3 className="text-2xl sm:text-3xl font-black text-white mt-2">
                Welcome to J-Anime Pro, {formData.fullName}!
              </h3>

              <p className="text-sm text-slate-300 max-w-lg mt-3 leading-relaxed">
                Our admissions committee has received your registration for <strong className="text-white">{formData.admissionRoute}</strong> under the <strong className="text-white">{formData.preferredTrack}</strong>.
              </p>

              <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 max-w-md text-left space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Your application packet & curriculum syllabus have been routed to: <strong>{formData.email}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>An admissions counselor will contact you via WhatsApp / Phone at: <strong>{formData.phone}</strong> within 24 hours.</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold uppercase tracking-wider text-white transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>

              <div className="mt-6 text-[11px] text-slate-500 font-mono">
                * Note: This is an accessible front-end demonstration form with local validation. No real data has been sent to an external server.
              </div>
            </div>
          ) : (
            /* Active Accessible Form */
            <form onSubmit={handleSubmit} noValidate>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-2">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Vikramaditya Sharma"
                    className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors ${
                      errors.fullName ? 'border-red-500 bg-red-950/20' : 'border-white/15'
                    }`}
                    aria-required="true"
                    aria-invalid={!!errors.fullName}
                  />
                  {errors.fullName && (
                    <span className="text-xs text-red-400 flex items-center gap-1 mt-1.5 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.fullName}
                    </span>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-2">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. artist@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors ${
                      errors.email ? 'border-red-500 bg-red-950/20' : 'border-white/15'
                    }`}
                    aria-required="true"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <span className="text-xs text-red-400 flex items-center gap-1 mt-1.5 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-2">
                    Phone / WhatsApp Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210"
                    className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors ${
                      errors.phone ? 'border-red-500 bg-red-950/20' : 'border-white/15'
                    }`}
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && (
                    <span className="text-xs text-red-400 flex items-center gap-1 mt-1.5 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.phone}
                    </span>
                  )}
                </div>

                {/* Current City & State */}
                <div>
                  <label htmlFor="city" className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-2">
                    Current City & State <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Hyderabad, Telangana"
                    className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors ${
                      errors.city ? 'border-red-500 bg-red-950/20' : 'border-white/15'
                    }`}
                    aria-required="true"
                    aria-invalid={!!errors.city}
                  />
                  {errors.city && (
                    <span className="text-xs text-red-400 flex items-center gap-1 mt-1.5 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.city}
                    </span>
                  )}
                </div>

                {/* Qualification */}
                <div>
                  <label htmlFor="qualification" className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-2">
                    Current Educational Level
                  </label>
                  <select
                    id="qualification"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="Class 10th (Completed/Appearing)">Class 10th (Completed/Appearing)</option>
                    <option value="Class 12th / 10+2">Class 12th / 10+2 (Arts / Science / Commerce)</option>
                    <option value="Undergraduate Student">Currently in Undergraduate College</option>
                    <option value="Fine Arts / Design Diploma">Fine Arts / Design Diploma</option>
                    <option value="Degree Graduate">College Degree Graduate (Any Discipline)</option>
                    <option value="Working Professional / Switcher">Working Professional / Career Switcher</option>
                  </select>
                </div>

                {/* Admission Route */}
                <div>
                  <label htmlFor="admissionRoute" className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-2">
                    Preferred Admission Route
                  </label>
                  <select
                    id="admissionRoute"
                    name="admissionRoute"
                    value={formData.admissionRoute}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="Route A (Direct Portfolio & Interview)">Route A: Direct Portfolio & Interview (Fast-Track)</option>
                    <option value="Route B (2-Week Workshop)">Route B: 2-Week Foundation & Diagnostic Workshop</option>
                  </select>
                </div>

                {/* Program Track */}
                <div className="md:col-span-2">
                  <label htmlFor="preferredTrack" className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-2">
                    Program Track of Interest
                  </label>
                  <select
                    id="preferredTrack"
                    name="preferredTrack"
                    value={formData.preferredTrack}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="J-Anime Pro (2-Year Advanced Residential)">J-Anime Pro: 2-Year Intensive Residential Diploma & Tokyo Pathway</option>
                    <option value="J-Anime Grad (3+1 Year Bachelors)">J-Anime Grad: 3+1 Year Formal Bachelor's Degree in Animation</option>
                    <option value="Japan FuturePath (2-Year Intermediate)">Japan FuturePath: 2-Year Intermediate (After 10th Grade)</option>
                  </select>
                </div>

                {/* Portfolio / Google Drive Link */}
                <div className="md:col-span-2">
                  <label htmlFor="portfolioLink" className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-2">
                    Portfolio / Sketch Drive Link (Optional)
                  </label>
                  <input
                    type="url"
                    id="portfolioLink"
                    name="portfolioLink"
                    value={formData.portfolioLink}
                    onChange={handleChange}
                    placeholder="https://drive.google.com/... or ArtStation link (if applying for Route A)"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <span className="text-[11px] text-slate-400 mt-1 block">
                    Ensure link permissions are set to "Anyone with the link can view". If applying via Route B, you can leave this blank.
                  </span>
                </div>

                {/* Notes & Questions */}
                <div className="md:col-span-2">
                  <label htmlFor="notes" className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-2">
                    Questions or Creative Background Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Tell us about your favorite anime styles, artistic influences, or specific questions about the residential campus..."
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

              </div>

              {/* Terms Checkbox */}
              <div className="mb-8">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreedToTerms"
                    checked={formData.agreedToTerms}
                    onChange={handleChange}
                    className="w-4 h-4 rounded border-white/20 bg-black/40 text-red-600 focus:ring-red-500 mt-1 shrink-0"
                  />
                  <span className="text-xs text-slate-300 leading-snug">
                    I understand that J-Anime Pro is a full-time residential program in Hyderabad, and I agree to be contacted by the admissions team regarding assessment dates, syllabus, and portfolio screening. <span className="text-red-400">*</span>
                  </span>
                </label>
                {errors.agreedToTerms && (
                  <span className="text-xs text-red-400 flex items-center gap-1 mt-1.5 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.agreedToTerms}
                  </span>
                )}
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl text-base font-bold uppercase tracking-wider bg-gradient-to-r from-red-600 via-rose-600 to-[#e63946] text-white shadow-xl shadow-red-600/30 hover:shadow-red-600/50 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Processing Application...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Candidate Registration</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Your privacy is protected. No spam. Client-side verified validation.</span>
              </div>

            </form>
          )}

        </div>

        {/* Contact details footer pill */}
        <div className="mt-12 max-w-2xl mx-auto flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-red-400" />
            <span>Admissions Desk: +91 (040) 2311-IACG</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-red-400" />
            <span>anime-admissions@iacg.co.in</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-red-400" />
            <span>Madhapur & Dilsukhnagar, Hyderabad</span>
          </div>
        </div>

      </div>
    </section>
  );
}
