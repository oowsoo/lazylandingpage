import React, { useState } from 'react';
import { Globe, MessageSquare, Zap, Users, Check, ChevronRight, Menu, X } from './components/icons';
import { LogoFull } from './components/Logo';

type ImageWithFallbackProps = React.ImgHTMLAttributes<HTMLImageElement>;

function ImageWithFallback(props: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false);
  const { src, alt, style, className, ...rest } = props;

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=="
          alt="Error loading image"
          {...rest}
          data-original-url={src}
        />
      </div>
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      {...rest}
      onError={() => setDidError(true)}
    />
  );
}

type LazyCardProps = {
  userName: string;
  message: string;
  originalLabel: string;
  originalText: string;
  buttonText: string;
};

function LazyAvatar() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="0.25" y="0.25" width="39.5" height="39.5" rx="19.75" fill="white" />
      <rect x="0.25" y="0.25" width="39.5" height="39.5" rx="19.75" stroke="#31795C" strokeWidth="0.5" />
      <defs>
        <pattern id="lazy-avatar-pattern" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use href="#lazy-avatar-image" transform="matrix(0.00248216 0 0 0.00147588 0.136364 0.0665299)" />
        </pattern>
        <image
          id="lazy-avatar-image"
          width="293"
          height="505"
          preserveAspectRatio="none"
          href="data:image/png;base64,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"
        />
      </defs>
      <rect x="9" y="2" width="22" height="37" fill="url(#lazy-avatar-pattern)" />
    </svg>
  );
}

function LazyCard({
  userName,
  message,
  originalLabel,
  originalText,
  buttonText,
}: LazyCardProps) {
  return (
    <div className="lazy-card" style={styles.card}>
      <div style={styles.shadow} />

      <div className="lazy-card-header" style={styles.header}>
        <div className="lazy-card-brand" style={styles.logoWrap}>
          <LazyAvatar />

          <div>
            <div className="lazy-card-title" style={styles.title}>Lazy</div>
            <div className="lazy-card-subtitle" style={styles.subtitle}>당신을 위한 커뮤니케이션 서포터</div>
          </div>
        </div>
      </div>

      <div className="lazy-card-content" style={styles.content}>
        <section style={styles.block}>
          <div style={styles.meta}>👤 {userName}</div>
          <div className="lazy-card-message" style={styles.messageBox}>{message}</div>
        </section>

        <section className="lazy-card-original-section" style={styles.blockSmall}>
          <div style={styles.label}>{originalLabel}</div>
          <div className="lazy-card-original" style={styles.originalBox}>{originalText}</div>
        </section>

        <button className="lazy-card-button" style={styles.button}>🔗 {buttonText}</button>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  card: {
    boxSizing: "border-box",
    position: "relative",
    width: "100%",
    maxWidth: 564,
    height: 406,
    padding: 36,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 24,
    background: "#FFFFFF",
    border: "2px solid #E5E7EB",
    borderRadius: 16,
    isolation: "isolate",
  },

  shadow: {
    position: "absolute",
    inset: 0,
    background: "rgba(255, 255, 255, 0.002)",
    boxShadow:
      "0px 20px 25px -5px rgba(0,0,0,0.1), 0px 8px 10px -6px rgba(0,0,0,0.1)",
    borderRadius: 16,
    zIndex: 0,
    pointerEvents: "none",
  },

  header: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 16,
    zIndex: 1,
  },

  logoWrap: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 9999,
    border: "0.5px solid #31795C",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: {
    fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
    fontWeight: 700,
    fontSize: 16,
    color: "#FFFFFF",
  },

  title: {
    fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
    fontWeight: 600,
    fontSize: 16,
    lineHeight: "19px",
    color: "#101828",
  },

  subtitle: {
    fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: "20px",
    color: "#6A7282",
  },

  badge: {
    padding: "6px 12px",
    background: "#2F6F5E",
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: 500,
    borderRadius: 6,
    fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
  },

  content: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 16,
    zIndex: 1,
  },

  block: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },

  blockSmall: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },

  meta: {
    fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
    fontSize: 14,
    lineHeight: "20px",
    color: "#6A7282",
  },

  label: {
    fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
    fontSize: 14,
    lineHeight: "20px",
    color: "#6A7282",
  },

  messageBox: {
    width: "100%",
    minHeight: 81,
    boxSizing: "border-box",
    padding: "15px 16px 14px",
    background: "#F9FAFB",
    borderRadius: 8,
    fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
    fontSize: 16,
    lineHeight: "26px",
    color: "#364153",
    display: "flex",
    alignItems: "center",
    whiteSpace: "pre-line",
  },

  originalBox: {
    width: "100%",
    minHeight: 50,
    boxSizing: "border-box",
    padding: "12px 16px",
    background: "#F9FAFB",
    borderRadius: 8,
    fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
    fontSize: 16,
    lineHeight: "26px",
    color: "#364153",
    display: "flex",
    alignItems: "center",
    whiteSpace: "pre-line",
  },

  button: {
    width: "fit-content",
    minHeight: 42,
    padding: "11px 16px 10px",
    border: "1px solid #E5E7EB",
    borderRadius: 8,
    background: "#FFFFFF",
    fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
    fontSize: 16,
    lineHeight: "19px",
    color: "#364153",
    cursor: "pointer",
    textAlign: "left",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "auto",
  },
};

export default function LazyGeniusLanding() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [language, setLanguage] = useState<'ko' | 'en'>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = {
    ko: {
      nav: {
        features: "이런걸 팔아요",
        pricing: "품위유지비",
        signIn: "로그인",
        startFree: "무료로 시작하기",
      },
      hero: {
        badge: "게으른 워크플로우, 천재적인 결과",
        headline1: "번역기 돌리지 마세요",
        headline2: "대신 복붙해드릴게요",
        subheadline1: "21세기에도 일일히 번역기를 돌린다?",
        subheadline2: "슬랙에 메시지만 쳐도 수족이 번역해 드립니다.",
        ctaStart: "무료로 시작하기",
        caption: "✨ 반복적인 노동 없이 글로벌 멤버와 커뮤니케이션하세요!",
      },
      features: {
        title1: "✨ 반복적인 노동 없이",
        title2: " 글로벌 커뮤니케이션을!",
        subtitle: "번역기 돌리는 게 귀찮아 만들었습니다",
        feature1Title: "번역 품질 걱정마세요",
        feature1Desc: "당신이 돌리는 번역기와 동일한 품질입니다!",
        feature2Title: "1초만에 번역해줘요",
        feature2Desc: "당신이 번역기 돌리는 시간보다 빠릅니다!",
        feature3Title: "Slack UI 최적화",
        feature3Desc: "못난이 UI 보는 것도 고통이에요. Lazy하지 못해요.",
        feature4Title: "걱정하는 당신을 위해",
        feature4Desc: "언제든지 원문을 볼 수 있어요",
      },
      howItWorks: {
        title: "빠른 설치와 실행",
        subtitle: "귀찮은 삶을 영위하기 위한 세 가지 단계",
        step1Title: "초대만 하세요",
        step1Desc: "채널에 번역이를 초대만 하세요",
        step2Title: "전세계 언어 지원",
        step2Desc: "우주인을 제외하고 번역 가능해요.",
        step3Title: "멀리 나가지 마세요",
        step3Desc: "슬랙에서 메시지만 치면 번역될 뿐입니다.",
      },
      pricing: {
        title: "나른한 삶을 영위하기 위한 품위유지비",
        subtitle: "팀에 맞는 플랜을 선택하세요",
        basic: "Lazy",
        advanced: "Lazier",
        enterprise: "Laziest",
        perUser: "팀당/월",
        contactUs: "문의하기",
        mostPopular: "가장 인기있음",
        getStarted: "시작하기",
        basicFeatures: [
          "월 40만자까지 무료 번역",
          "심플하게 한 쌍의 언어 번역 지원",
          "초스피드 번역 배달",
          "이메일 지원",
        ],
        advancedFeatures: [
          "월 100만자, 사실상 무제한 번역",
          "외계어를 제외하고 번역 가능",
          "깔쌈한 설정 페이지 별도 지원",
          "✨ 비싼 AI 번역 지원"
          "P0으로 이메일 지원"
        ],
        enterpriseFeatures: [
          "어드밴스드의 모든 기능",
          "전담 계정 관리자",
          "SLA 보장",
          "온프레미스 옵션",
          "커스텀 언어 지원",
          "고급 보안",
        ],
      },
      finalCta: {
        title1: "복붙은 이제 그만",
        title2: "소통만 하세요",
        subtitle: "복붙의 지옥에서 꺼내드립니다",
        startTrial: "복붙 지옥 벗어나기",
        bookDemo: "데모 예약",
        footer: "결제 수단 등록 불필요 • 14일 무료 체험 • 언제든 취소 가능",
      },
      footer: {
        tagline: "당신의 언어로 일하세요. 나머지는 저희가 할게요.",
        copyright: "© 2026 Lazy & Genius. All rights reserved.",
      },
    },
    en: {
      nav: {
        features: "Features",
        pricing: "Pricing",
        signIn: "Sign In",
        startFree: "Start for Free Trial",
      },
      hero: {
        badge: "Lazy workflow, genius results",
        headline1: "Work in your language.",
        headline2: "We'll take it from here.",
        subheadline1: "A fully localized collaboration tool for Korean and English teams.",
        subheadline2: "Communicate, write, and work naturally — without switching languages.",
        ctaStart: "Start Free",
        caption: "✨ Communicate with global teammates without repetitive busywork",
      },
      social: {
        trusted: "Trusted by innovative teams worldwide",
        quote: "It feels like everyone is speaking my language.",
        role: "Product Lead, TechFlow",
      },
      features: {
        title1: "✨ 반복적인 노동 없이",
        title2: " 글로벌 커뮤니케이션을!",
        subtitle: "Built for global teams who want to work naturally without language barriers.",
        feature1Title: "Native Korean & English Experience",
        feature1Desc: "Not translation, real localization. Every user sees a fully native interface in their language.",
        feature2Title: "Seamless Team Collaboration",
        feature2Desc: "Everyone works in their own language. No switching, no manual translation, no friction.",
        feature3Title: "Context-Aware Adaptation",
        feature3Desc: "The system understands context and adapts automatically for your entire team.",
        feature4Title: "Works in Your Workflow",
        feature4Desc: "Integrates naturally like Slack or Notion. Familiar tools, global language support.",
      },
      howItWorks: {
        title: "Quick setup and launch",
        subtitle: "Three simple steps to global collaboration",
        step1Title: "Choose Your Language",
        step1Desc: "Select Korean or English when you join. That's it — you're done configuring.",
        step2Title: "Work as Usual",
        step2Desc: "Write, comment, collaborate — all in your native language. No extra steps.",
        step3Title: "System Adapts Automatically",
        step3Desc: "Everyone else sees it in their language. Seamless, instant, automatic.",
      },
      pricing: {
        title: "Simple, transparent pricing",
        subtitle: "Choose the plan that fits your team",
        basic: "Basic",
        advanced: "Advanced",
        enterprise: "Enterprise",
        perUser: "per user/month",
        contactUs: "contact us",
        mostPopular: "Most Popular",
        getStarted: "Get Started",
        basicFeatures: [
          "Up to 10 team members",
          "Korean & English support",
          "Basic collaboration tools",
          "Email support",
        ],
        advancedFeatures: [
          "Unlimited team members",
          "Korean & English support",
          "Advanced collaboration features",
          "Priority support",
          "Custom integrations",
          "Analytics dashboard",
        ],
        enterpriseFeatures: [
          "Everything in Advanced",
          "Dedicated account manager",
          "SLA guarantee",
          "On-premise option",
          "Custom language support",
          "Advanced security",
        ],
      },
      finalCta: {
        title1: "Stop translating.",
        title2: "Start working.",
        subtitle: "Join teams who work globally without thinking about language.",
        startTrial: "Start Free Trial",
        bookDemo: "Book a Demo",
        footer: "No credit card required • 14-day free trial • Cancel anytime",
      },
      footer: {
        tagline: "Work in your language. We handle the rest.",
        product: "Product",
        features: "Features",
        pricing: "Pricing",
        security: "Security",
        company: "Company",
        about: "About",
        blog: "Blog",
        careers: "Careers",
        support: "Support",
        helpCenter: "Help Center",
        contact: "Contact",
        status: "Status",
        copyright: "© 2026 Lazy & Genius. All rights reserved.",
        privacy: "Privacy",
        terms: "Terms",
        cookies: "Cookies",
      },
    },
  };

  const currentLang = t[language];

  const features = [
    {
      icon: Globe,
      title: currentLang.features.feature1Title,
      description: currentLang.features.feature1Desc,
    },
    {
      icon: Users,
      title: currentLang.features.feature2Title,
      description: currentLang.features.feature2Desc,
    },
    {
      icon: Zap,
      title: currentLang.features.feature3Title,
      description: currentLang.features.feature3Desc,
    },
    {
      icon: MessageSquare,
      title: currentLang.features.feature4Title,
      description: currentLang.features.feature4Desc,
    },
  ];

  const pricingTiers = [
    {
      name: currentLang.pricing.basic,
      price: "$9.99",
      period: currentLang.pricing.perUser,
      features: currentLang.pricing.basicFeatures,
    },
    {
      name: currentLang.pricing.advanced,
      price: "$29.99",
      period: currentLang.pricing.perUser,
      features: currentLang.pricing.advancedFeatures,
      highlighted: true,
    },
    {
      name: currentLang.pricing.enterprise,
      price: "Lazyiest",
      period: "",
      features: currentLang.pricing.enterpriseFeatures,
      cta: language === 'ko' ? '기업 문의' : 'Contact Sales',
    },
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif' }}>
      {/* Navigation */}
      <nav className="app-nav border-b border-gray-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LogoFull height="28" />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              {currentLang.nav.features}
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
              {currentLang.nav.pricing}
            </a>
          </div>
          
          <div className="hidden md:flex items-center gap-3">
            {/* Language Toggle */}
            <div className="flex items-center gap-1 p-1 bg-gray-100 rounded-lg">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                  language === 'en'
                    ? 'bg-[#FACC15] text-[#2F6F5E]'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('ko')}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                  language === 'ko'
                    ? 'bg-[#FACC15] text-[#2F6F5E]'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                KO
              </button>
            </div>
            <button className="desktop-signin-button px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors">
              {currentLang.nav.signIn}
            </button>
            <button className="desktop-start-button px-5 py-2 bg-[#2F6F5E] text-white rounded-lg hover:bg-[#26594a] transition-colors">
              {currentLang.nav.startFree}
            </button>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-toggle md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="mobile-menu-panel md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="mobile-menu-content flex flex-col space-y-4">
              <a 
                href="#features" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {currentLang.nav.features}
              </a>
              <a 
                href="#pricing" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {currentLang.nav.pricing}
              </a>
              
              <div className="pt-2 border-t border-gray-100">
                <div className="flex items-center gap-1 p-1 rounded-lg w-fit">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                      language === 'en'
                        ? 'bg-[#FACC15] text-[#2F6F5E]'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLanguage('ko')}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                      language === 'ko'
                        ? 'bg-[#FACC15] text-[#2F6F5E]'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    KO
                  </button>
                </div>
              </div>
              
              <div className="mobile-menu-actions">
                <button 
                  className="mobile-signin-button px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors text-left"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {currentLang.nav.signIn}
                </button>
                <button 
                  className="mobile-start-button px-5 py-2 bg-[#2F6F5E] text-white rounded-lg hover:bg-[#26594a] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {currentLang.nav.startFree}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero-section px-6 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="hero-copy text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FACC15]/10 rounded-full mb-6">
              <span className="hero-badge-text text-sm text-gray-700">{currentLang.hero.badge}</span>
            </div>
            <h1 className="hero-title text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              {currentLang.hero.headline1}
              <br />
              <span className="text-[#2F6F5E]">{currentLang.hero.headline2}</span>
            </h1>
            <p className="hero-subtitle text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              {currentLang.hero.subheadline1}
              <br />
              {currentLang.hero.subheadline2}
            </p>
            <div className="hero-actions flex items-center justify-center gap-4">
              <button className="px-8 py-4 bg-[#2F6F5E] text-white text-lg font-semibold rounded-xl hover:bg-[#26594a] transition-all hover:scale-105 flex items-center gap-2 shadow-lg">
                {currentLang.hero.ctaStart}
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Hero Visual - Dual Language UI */}
          <div className="max-w-6xl mx-auto px-4">
            <div className="hero-cards grid md:grid-cols-2 gap-12">
              {/* Korean Interface */}
              <LazyCard
                userName="김수한무"
                message="I stayed Lazy,
but our communication became Genius!"
                originalLabel="원문"
                originalText="손가락 까딱하지 않고, 커뮤니케이션 훨씬 똑똑해졌어요!"
                buttonText="원문 보러가기"
              />

              {/* English Interface */}
              <LazyCard
                userName="Adam Smith"
                message="축하해요, 수한무 씨.
우리도 당신과 편안하게 커뮤니케이션 할 수 있어 기쁩니다."
                originalLabel="Original Text"
                originalText="Congrats, Suhanmu. We're happy we can finally communicate..."
                buttonText="View Thread"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="features-section px-6 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="features-title text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {currentLang.features.title1}
              <br />
              <span className="text-[#2F6F5E]">{currentLang.features.title2}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {currentLang.features.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="feature-row flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="feature-icon-wrap w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#2F6F5E]" />
                    </div>
                  </div>
                  <div className="feature-copy">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-section px-6 py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{currentLang.howItWorks.title}</h2>
            <p className="text-xl text-gray-600">{currentLang.howItWorks.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2F6F5E] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{currentLang.howItWorks.step1Title}</h3>
              <p className="text-gray-600">
                {currentLang.howItWorks.step1Desc}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2F6F5E] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{currentLang.howItWorks.step2Title}</h3>
              <p className="text-gray-600">
                {currentLang.howItWorks.step2Desc}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2F6F5E] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{currentLang.howItWorks.step3Title}</h3>
              <p className="text-gray-600">
                {currentLang.howItWorks.step3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="pricing-section px-6 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {currentLang.pricing.title}
            </h2>
            <p className="text-xl text-gray-600">{currentLang.pricing.subtitle}</p>
          </div>

          <div className="pricing-grid grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`pricing-card rounded-2xl p-8 ${
                  tier.highlighted
                    ? 'pricing-card-highlighted bg-[#2F6F5E] text-white border-2 border-[#2F6F5E] shadow-2xl scale-105'
                    : 'bg-white border-2 border-gray-100'
                }`}
              >
                <div className="pricing-card-head">
                  {tier.price ? (
                    <h3
                      className={`text-2xl font-bold mb-2 ${
                        tier.highlighted ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {tier.name}
                    </h3>
                  ) : (
                    <div />
                  )}
                  {tier.highlighted && (
                    <div className="pricing-badge inline-block px-3 py-1 bg-[#FACC15] text-gray-900 text-sm rounded-full mb-4 font-semibold">
                      {currentLang.pricing.mostPopular}
                    </div>
                  )}
                </div>
                <div className="pricing-price mb-6">
                  {tier.price ? (
                    <>
                      <span
                        className={`text-4xl font-bold ${
                          tier.highlighted ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {tier.price}
                      </span>
                      <span
                        className={`text-sm ${tier.highlighted ? 'text-gray-100' : 'text-gray-500'}`}
                      >
                        {' '}
                        / {tier.period}
                      </span>
                    </>
                  ) : (
                    <span
                      className={`text-4xl font-bold ${
                        tier.highlighted ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {tier.name}
                    </span>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          tier.highlighted ? 'text-[#FACC15]' : 'text-[#2F6F5E]'
                        }`}
                      />
                      <span
                        className={tier.highlighted ? 'text-gray-100' : 'text-gray-600'}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-xl transition-all text-center ${
                    tier.highlighted
                      ? 'bg-white text-[#2F6F5E] hover:bg-gray-100'
                      : 'bg-[#2F6F5E] text-white hover:bg-[#26594a]'
                  }`}
                >
                  {tier.cta ?? currentLang.pricing.getStarted}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta-section px-6 py-20 md:py-32 bg-gradient-to-br from-[#2F6F5E] to-[#1e4d3e]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="final-cta-title text-4xl md:text-6xl font-bold text-white mb-6">
            {currentLang.finalCta.title1}
            <br />
            <span className="text-[#FACC15]">{currentLang.finalCta.title2}</span>
          </h2>
          <p className="final-cta-subtitle text-xl text-gray-100 mb-10 max-w-2xl mx-auto">
            {currentLang.finalCta.subtitle}
          </p>
          <div className="final-cta-actions flex items-center justify-center gap-4">
            <button className="px-10 py-5 bg-white text-[#2F6F5E] rounded-xl hover:bg-gray-100 transition-all hover:scale-105 flex items-center gap-2 shadow-xl font-semibold text-lg">
              {currentLang.finalCta.startTrial}
              <ChevronRight className="w-6 h-6" />
            </button>
            <button className="px-10 py-5 bg-transparent text-white rounded-xl border-2 border-white hover:bg-white/10 transition-all hover:scale-105 font-semibold text-lg">
              {currentLang.finalCta.bookDemo}
            </button>
          </div>
          <p className="text-sm text-gray-300 mt-6">
            {currentLang.finalCta.footer}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer px-6 py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="footer-simple">
            <div className="mb-4">
              <LogoFull height="24" />
            </div>
            <p className="text-sm text-gray-600">
              {currentLang.footer.tagline}
            </p>
            <a className="footer-email text-sm text-[#2F6F5E]" href="mailto:hello@lazyandgenius.com">
              hello@lazyandgenius.com
            </a>
            <p className="footer-copyright text-sm text-gray-500">
              © 2026 Lazy & Genius. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
