import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, BarChart, Target, Sparkles, GraduationCap } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Options Basics',
    description: 'Learn the fundamentals of options trading, including basic terminology, contract types, and market mechanics.',
    level: 'Beginner',
    duration: '4 weeks',
    chapters: 12,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 2,
    title: 'Technical Analysis Mastery',
    description: 'Master the art of reading charts, identifying patterns, and using technical indicators for better trading decisions.',
    level: 'Intermediate',
    duration: '6 weeks',
    chapters: 15,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 3,
    title: 'Advanced Options Strategies',
    description: 'Explore complex options strategies including spreads, straddles, and advanced risk management techniques.',
    level: 'Advanced',
    duration: '8 weeks',
    chapters: 20,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 4,
    title: 'The Complete Options Trading Masterclass',
    description: 'A zero-to-profit roadmap that blends fundamentals, analysis, Greeks, strategies, and execution into a guided master plan.',
    level: 'All Levels',
    duration: '10 modules',
    chapters: 42,
    image: 'https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?auto=format&fit=crop&q=80&w=1000',
    anchor: '#masterclass',
  },
];

const masterclassHighlights = {
  title: 'The Complete Options Trading Masterclass: From Zero to Profit',
  objective:
    'Transform a novice with zero financial background into a competent, risk-aware options trader capable of analyzing the US Stock Market and executing profitable strategies.',
  modules: [
    {
      title: 'Module 1: The Foundation – Understanding the Arena',
      goal: 'Demystify the stock market and introduce the concept of derivatives.',
      topics: [
        'Stocks vs. Options, market players, and liquidity cycles.',
        'Call vs. Put options, contract multiplier, and premiums.',
        'Strike price, expiration, bid/ask, and options terminology.',
      ],
      interactive: 'The Lemonade Stand: Drag-and-drop insurance (puts) and coupon (calls) story.',
      quiz: [
        'If you control 5 option contracts, how many shares do you control?',
        'If you think Apple will crash, do you buy a Call or a Put?',
        'Define liquidity in your own words.',
      ],
    },
    {
      title: 'Module 2: Market Analysis – Knowing When to Strike',
      goal: 'Predict price movement using fundamental and technical analysis.',
      topics: [
        'Earnings, macro data (CPI, FOMC), and valuation basics.',
        'Candlesticks, support/resistance, and trendlines.',
        'Indicators: SMA/EMA, RSI, and volume confirmation.',
      ],
      interactive: 'Chart Doctor: Draw support, resistance, and identify the trend.',
      quiz: [
        'What does a bullish engulfing candle suggest?',
        'If RSI is above 70, is the stock overbought or oversold?',
        'How do rate hikes affect high-growth tech stocks?',
      ],
    },
    {
      title: 'Module 3: The Mechanics – Pricing & The Greeks',
      goal: 'Explain why options prices change and how Greeks drive risk.',
      topics: [
        'Moneyness (ITM/ATM/OTM) and value components.',
        'Greeks: Delta, Theta, Vega, Gamma.',
        'Implied volatility and IV crush risk.',
      ],
      interactive: 'The Time Machine: Adjust days to expiration to see premium decay.',
      quiz: [
        'If you buy an OTM option, what is its intrinsic value?',
        'Which Greek hurts option buyers most as expiration approaches?',
        'Why avoid buying calls right before earnings (IV crush)?',
      ],
    },
    {
      title: 'Module 4: Strategies – The Playbook',
      goal: 'Move from theory to execution with distinct options setups.',
      topics: [
        'Long calls/puts for directional trades.',
        'Covered calls and cash-secured puts for income.',
        'Debit and credit spreads for risk control.',
      ],
      interactive: 'Build Your Trade: Pick the correct strategy for each market scenario.',
      quiz: [
        'To execute a covered call, how many shares must you own?',
        'Which benefits if price stays flat: long call or credit spread?',
        'What is the max loss on a long call?',
      ],
    },
    {
      title: 'Module 5: Risk Management & Psychology',
      goal: 'Build discipline to survive drawdowns and avoid emotional traps.',
      topics: [
        'Position sizing, risk/reward ratios, and stop loss systems.',
        'FOMO, revenge trading, and confirmation bias.',
        'Trading plan checklists and journaling.',
      ],
      interactive: 'The Emotion Simulator: Game prompts to check emotional decisions.',
      quiz: [
        'If you have $10,000 and risk 2%, what is max loss?',
        'True/False: A 40% win rate can be profitable at 1:3 R/R.',
        'What is the primary purpose of a trading journal?',
      ],
    },
    {
      title: 'Module 6: Execution & Logistics',
      goal: 'Set up the brokerage and operational workflow for live trading.',
      topics: [
        'Broker selection, commissions, and PDT rules.',
        'Order types: market, limit, and stop-limit.',
        'Tax basics: short-term gains and wash sale rule.',
      ],
      interactive: 'Broker Sandbox: Simulate order tickets with safe defaults.',
      quiz: [
        'Why are market orders dangerous in options?',
        'What does the PDT rule require?',
        'Explain the wash sale rule in one sentence.',
      ],
    },
  ],
  masterPlan: [
    'Module 1: The Foundation',
    'Module 2: The Contract Details (The Fine Print)',
    'Module 3: Pricing & The Greeks (The Engine)',
    'Module 4: Technical Analysis (Reading the Map)',
    'Module 5: Brokerage & Execution',
    'Module 6: Risk Management (The Shield)',
    'Module 7: Volatility & Market Environment',
    'Module 8: Long Strategies (Buying)',
    'Module 9: Income Strategies (Selling/Writing)',
    'Module 10: Live Operations',
  ],
  phaseTwo: [
    {
      title: 'Module 1: The Foundation (Phase 2 Deep Dive)',
      lessons: [
        'Lesson 1.1: The Asset vs. The Bet (Stock vs. Option).',
        'Lesson 1.2: Call Options via the House Deposit analogy.',
        'Lesson 1.3: Put Options via the Car Insurance analogy.',
        'Lesson 1.4: Leverage, the 100x multiplier, and time decay.',
      ],
      visuals: [
        'Asset vs. Contract split-screen (gold bar vs. coupon).',
        'Profit slider showing capped loss on calls.',
        'Elevator buttons for Calls (up) vs. Puts (down).',
        'Ice cube time-lapse to show decay.',
      ],
      assessment: 'Module 1 Application Quiz (5 questions with answer key).',
    },
    {
      title: 'Module 2: The Contract Details (Phase 2 Deep Dive)',
      lessons: [
        'Lesson 2.1: Reading the OCC ticker symbol (AAPL 260619 C 00150000).',
        'Lesson 2.2: Rights vs. obligations (Long vs. Short).',
        'Lesson 2.3: Moneyness with a soccer goal analogy.',
        'Lesson 2.4: Payoff grid and break-even calculation.',
      ],
      visuals: [
        'Option decoder drag-and-drop for symbol parts.',
        'Buyer vs. seller split screen with risk cues.',
        'Moneyness slider with call/put toggle.',
        'Hockey-stick P&L chart with premium slider.',
      ],
      assessment: 'Module 2 Application Quiz (5 questions with answer key).',
    },
    {
      title: 'Module 3: Pricing & The Greeks (Phase 2 Deep Dive)',
      lessons: [
        'Lesson 3.1: Premium anatomy (intrinsic + extrinsic).',
        'Lesson 3.2: Delta as the speedometer + probability gauge.',
        'Lesson 3.3: Theta decay curve and the 14-day cliff.',
        'Lesson 3.4: Vega and IV crush risk.',
        'Lesson 3.5: Gamma acceleration near expiration.',
      ],
      visuals: [
        'Melting cake visual for extrinsic value decay.',
        'Drag race for Delta gears.',
        'Decay curve with warning zone.',
        'Balloon pump for IV expansion.',
      ],
      assessment: 'Module 3 Application Quiz (5 questions with answer key).',
    },
  ],
  certification: [
    'Final exam: 50-question comprehensive assessment.',
    'Graduation requirement: 10 paper trades and a trade log analysis.',
  ],
};

const Courses = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive trading education designed to take you from beginner to expert.
          </p>
        </div>

        {/* Course Filters */}
        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          <button className="px-4 py-2 rounded-full bg-amber-100 text-amber-800 font-medium hover:bg-amber-200">
            All Courses
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200">
            Beginner
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200">
            Intermediate
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200">
            Advanced
          </button>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
                    {course.level}
                  </span>
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm">{course.duration}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500">
                    <BookOpen className="h-4 w-4 mr-1" />
                    <span className="text-sm">{course.chapters} Chapters</span>
                  </div>
                  {course.anchor ? (
                    <a
                      href={course.anchor}
                      className="inline-flex items-center text-amber-600 hover:text-amber-700"
                    >
                      View Curriculum
                      <BarChart className="h-4 w-4 ml-1" />
                    </a>
                  ) : (
                    <Link
                      to={`/courses/${course.id}`}
                      className="inline-flex items-center text-amber-600 hover:text-amber-700"
                    >
                      View Course
                      <BarChart className="h-4 w-4 ml-1" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <section id="masterclass" className="mt-16">
          <div className="rounded-3xl border border-amber-100 bg-gradient-to-br from-amber-50 via-white to-slate-50 p-8 shadow-lg">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800">
                  <Sparkles className="h-4 w-4" />
                  Featured Curriculum
                </div>
                <h2 className="mt-4 text-3xl font-bold text-gray-900">{masterclassHighlights.title}</h2>
                <p className="mt-4 text-lg text-gray-600">{masterclassHighlights.objective}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:max-w-lg">
                <div className="rounded-2xl border border-amber-200 bg-white p-4">
                  <div className="flex items-center gap-2 text-amber-700">
                    <Target className="h-4 w-4" />
                    <span className="text-sm font-semibold">Outcome Focused</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    Builds a risk-aware, execution-ready trader with a repeatable decision framework.
                  </p>
                </div>
                <div className="rounded-2xl border border-amber-200 bg-white p-4">
                  <div className="flex items-center gap-2 text-amber-700">
                    <GraduationCap className="h-4 w-4" />
                    <span className="text-sm font-semibold">Certification Path</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    Culminates with a 50-question final exam and paper trading requirements.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Phase 1: The Master Plan (Modules 1-10)</h3>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  {masterclassHighlights.masterPlan.map((module) => (
                    <li key={module} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                      <span>{module}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Certification & Graduation</h3>
                <ul className="mt-4 space-y-3 text-sm text-gray-600">
                  {masterclassHighlights.certification.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-xl bg-amber-50 p-4 text-sm text-amber-900">
                  Graduation is awarded after completing the final exam and submitting 10 paper trades with analysis.
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-semibold text-gray-900">Modules 1-6: Core Journey</h3>
              <div className="mt-4 grid gap-4">
                {masterclassHighlights.modules.map((module) => (
                  <details
                    key={module.title}
                    className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-gray-900">
                      <span>{module.title}</span>
                      <span className="text-amber-600 transition group-open:rotate-180">▼</span>
                    </summary>
                    <p className="mt-3 text-sm text-gray-600">{module.goal}</p>
                    <div className="mt-4 grid gap-4 lg:grid-cols-3">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">Key Topics</h4>
                        <ul className="mt-2 space-y-2 text-sm text-gray-600">
                          {module.topics.map((topic) => (
                            <li key={topic} className="flex items-start gap-2">
                              <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">Interactive Element</h4>
                        <p className="mt-2 text-sm text-gray-600">{module.interactive}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">Quiz Check</h4>
                        <ul className="mt-2 space-y-2 text-sm text-gray-600">
                          {module.quiz.map((question) => (
                            <li key={question} className="flex items-start gap-2">
                              <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                              <span>{question}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-semibold text-gray-900">Phase 2: Module Deep Dives</h3>
              <div className="mt-4 grid gap-4 lg:grid-cols-3">
                {masterclassHighlights.phaseTwo.map((module) => (
                  <div key={module.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                    <h4 className="text-lg font-semibold text-gray-900">{module.title}</h4>
                    <div className="mt-4">
                      <h5 className="text-sm font-semibold text-gray-900">Lesson Map</h5>
                      <ul className="mt-2 space-y-2 text-sm text-gray-600">
                        {module.lessons.map((lesson) => (
                          <li key={lesson} className="flex items-start gap-2">
                            <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                            <span>{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4">
                      <h5 className="text-sm font-semibold text-gray-900">Visual & Interactive Notes</h5>
                      <ul className="mt-2 space-y-2 text-sm text-gray-600">
                        {module.visuals.map((visual) => (
                          <li key={visual} className="flex items-start gap-2">
                            <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                            <span>{visual}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="mt-4 text-sm text-gray-600">{module.assessment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Courses;
