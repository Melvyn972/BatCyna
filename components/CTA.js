import config from "@/config";

const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/90 to-primary-focus py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h2 className="font-bold text-3xl md:text-5xl tracking-tight mb-6 text-primary-content">
              Protect your business from evolving cyber threats
            </h2>
            <p className="text-lg opacity-90 mb-8 text-primary-content">
              Implement enterprise-grade security without the enterprise-level complexity or cost. Start securing your assets today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn btn-secondary btn-lg">
                Schedule a Demo
              </button>
              <button className="btn btn-outline btn-lg border-primary-content text-primary-content hover:bg-primary-content hover:text-primary">
                Get Started Free
              </button>
            </div>
          </div>
          
          <div className="bg-base-100 rounded-lg p-6 shadow-xl max-w-md w-full">
            <h3 className="font-bold text-xl mb-4">Security Readiness Assessment</h3>
            <p className="text-base-content/80 mb-6">Discover your organization's security posture with our free assessment tool.</p>
            
            <form className="space-y-4">
              <div>
                <input 
                  type="email" 
                  placeholder="Work Email" 
                  className="input input-bordered w-full" 
                  required
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Company Name" 
                  className="input input-bordered w-full" 
                />
              </div>
              <button type="submit" className="btn btn-primary w-full">
                Get Your Assessment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
