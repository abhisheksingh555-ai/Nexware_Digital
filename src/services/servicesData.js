import webImg from "../images/srv-web.webp";
import mktImg from "../images/srv-marketing.webp";
import adsImg from "../images/srv-ads.webp";
import uiuxImg from "../images/srv-uiux.webp";
import customImg from "../images/srv-custom.webp";
import cloudImg from "../images/srv-cloud.webp";
import aiImg from "../images/srv-ai.webp";
import consultImg from "../images/srv-consulting.webp";
import securityImg from "../images/srv-security.webp";

export const servicesData = {
  'services-web-app': {
    title: "Web App Development",
    icon: webImg,
    tagline: "High-performance web solutions built to scale.",
    description: "We architect robust, secure, and lightning-fast web applications. From complex SPAs to enterprise PWAs, our builds are designed for high conversion and seamless performance.",
    features: ["Custom React/Next.js Architectures", "High-Concurrency Backend APIs", "Serverless Integration", "Database Optimization"],
    metric: "45% faster load times for enterprise clients."
  },
  'services-digital-marketing': {
    title: "Digital Marketing",
    icon: mktImg,
    tagline: "Data-backed growth to capture your market share.",
    description: "Move beyond vanity metrics. We deploy full-funnel marketing strategies that blend precision targeting with high-intent content to drive measurable revenue growth.",
    features: ["Omni-channel SEO Strategy", "Content Lifecycle Management", "Growth Hacking Frameworks", "Marketing Automation"],
    metric: "3x average increase in qualified leads."
  },
  'services-google-ads': {
    title: "Google Ads Management",
    icon: adsImg,
    tagline: "Turn your ad spend into predictable ROI.",
    description: "Stop bleeding budget on unqualified clicks. We manage hyper-targeted PPC campaigns with rigorous A/B testing and negative-keyword refinement to maximize your ROAS.",
    features: ["Advanced Audience Targeting", "Dynamic Search/Display Ads", "Conversion Pixel Tracking", "Weekly ROI Reporting"],
    metric: "40% reduction in Customer Acquisition Cost."
  },
  'services-design': {
    title: "UI/UX Product Design",
    icon: uiuxImg,
    tagline: "User-centric design that converts visitors to users.",
    description: "We bridge the gap between business goals and user needs. Our design process focuses on intuitive navigation, accessibility, and high-fidelity aesthetics.",
    features: ["Interactive Prototyping", "Design System Engineering", "User Journey Mapping", "Usability Heuristic Reviews"],
    metric: "94% average user satisfaction rating."
  },
  'services-custom': {
    title: "Custom Software Development",
    icon: customImg,
    tagline: "Bespoke engineering for unique business challenges.",
    description: "When commercial software fails to meet your specific workflows, we build custom solutions that automate, integrate, and streamline your operations.",
    features: ["Legacy Systems Refactoring", "Microservices Migration", "Automated QA/CI-CD Pipelines", "Bespoke API Development"],
    metric: "80% operational task automation."
  },
  'services-cloud': {
    title: "Cloud Architecture",
    icon: cloudImg,
    tagline: "Global-scale cloud infrastructure, secured and optimized.",
    description: "Migrate from fragile legacy servers to elastic, containerized cloud environments. We specialize in AWS/Azure deployments that never go down.",
    features: ["Terraform/IaC Provisioning", "Kubernetes Orchestration", "Zero-Downtime Migration", "Cost-Optimization Audits"],
    metric: "60% reduction in hosting overheads."
  },
  'services-ai': {
    title: "AI & Machine Learning",
    icon: aiImg,
    tagline: "Deploy intelligent automation at the core of your business.",
    description: "From custom LLM fine-tuning to predictive analytics, we turn your raw data into a competitive advantage with advanced artificial intelligence.",
    features: ["NLP & Generative AI Agents", "Predictive Analytics Modeling", "Computer Vision Pipelines", "AI Infrastructure Setup"],
    metric: "75% reduction in support queue volume."
  },
  'services-consulting': {
    title: "IT Strategy Consulting",
    icon: consultImg,
    tagline: "Clarity, roadmaps, and technical leadership.",
    description: "Align your technology roadmap with your bottom line. We provide the technical oversight to prevent debt and accelerate your time-to-market.",
    features: ["Technical Debt Assessments", "Vendor & Tech Stack Audits", "CTO-as-a-Service", "Scaling Roadmaps"],
    metric: "Projects delivered 3 months ahead of schedule."
  },
  'services-security': {
    title: "Cyber Security Solutions",
    icon: securityImg,
    tagline: "Fortify your digital assets against evolving threats.",
    description: "Don't leave your infrastructure exposed. We implement proactive security layers, compliance readiness, and continuous monitoring to protect your data.",
    features: ["Vulnerability Assessment", "SOC2/GDPR Compliance Prep", "IAM & Zero-Trust Security", "24/7 Security Monitoring"],
    metric: "100% pass rate in client security audits."
  }
};

// Create a simple array for your Navigation/Selector component
export const serviceLinks = Object.entries(servicesData).map(([id, data]) => ({
  label: data.title,
  id: id
}));