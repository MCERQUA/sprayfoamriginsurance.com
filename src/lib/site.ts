// Centralized site data — used across nav, footer, schema, CTAs
// Spray Foam Rig Insurance — mobile rig coverage, equipment breakdown, inland marine

export const SITE = {
  name: "Spray Foam Rig Insurance",
  legalName: "Spray Foam Rig Insurance (by Contractors Choice Agency)",
  domain: "sprayfoamriginsurance.com",
  url: "https://sprayfoamriginsurance.com",
  tagline: "Insurance for Spray Foam Rigs & Equipment",
  description:
    "Specialized insurance for spray foam rigs — mobile rig coverage, equipment breakdown, inland marine for proportioners, heated hose and spray guns, business auto for rig trucks, theft protection, and replacement cost coverage. Licensed all 50 states.",
  phone: "844-967-5247",
  phoneAlt: "855-336-7189",
  phoneHref: "tel:+18449675247",
  phoneAltHref: "tel:+18553367189",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  claimsSla: "2-hour claims response",
  quoteSla: "15-minute quote turnaround",
  statesLicensed: "All 50 states",
} as const;

// Niche nouns used in headings, metadata, and component copy
export const BRAND = {
  brandShort: "Spray Foam Rig",
  brandSub: "Insurance",
  nicheShort: "spray foam rig",
  nicheShortCap: "Spray Foam Rig",
  nichePlural: "spray foam rigs",
  nichePluralCap: "Spray Foam Rigs",
  operator: "spray foam rig operation",
  operatorCap: "Spray Foam Rig Operation",
  industry: "spray foam contracting",
  industryCap: "Spray Foam Contracting",
  audience: "spray foam rig owners",
  audienceCap: "Spray Foam Rig Owners",
  ownerTitle: "spray foam contractor",
  regionPill: "Texas · Florida · National",
  serviceSuffix: "Spray Foam Rigs",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "inland-marine",
    title: "Inland Marine — Rig & Equipment",
    short: "Proportioners, hose, spray guns, and trailers",
    description:
      "Inland marine is the core of spray foam rig insurance. We schedule your proportioner, reactor, heated hose, spray guns, drum heaters, and the trailer they ride in at replacement cost — covering theft, vandalism, damage in transit, and accidental damage on the jobsite.",
    icon: "Package",
    keywords: ["spray foam rig inland marine", "proportioner insurance", "spray foam equipment coverage", "spray foam trailer insurance"],
  },
  {
    slug: "equipment-breakdown",
    title: "Equipment Breakdown",
    short: "When the proportioner fails on the job",
    description:
      "Equipment breakdown (boiler & machinery) covers what inland marine does not — internal mechanical or electrical failure of the proportioner, heated hose system, compressors, and auxiliary equipment when a motor burns out or a component fails on the job.",
    icon: "Gauge",
    keywords: ["spray foam equipment breakdown", "proportioner breakdown insurance", "spray foam mechanical failure coverage", "spray foam rig breakdown"],
  },
  {
    slug: "commercial-auto",
    title: "Business Auto — Rig Trucks",
    short: "The truck hauling your rig to every job",
    description:
      "The pickup, van, or truck hauling your spray foam rig to the job needs commercial auto — not personal auto. We place business auto for rig transport vehicles, including liability, physical damage, hired and non-owned auto, and coordinated with inland marine for the rig.",
    icon: "Truck",
    keywords: ["spray foam rig truck insurance", "spray foam commercial auto", "rig transport vehicle insurance", "spray foam truck coverage"],
  },
  {
    slug: "theft-protection",
    title: "Theft & Vandalism",
    short: "Off-trailer, off-jobsite, and in-transit theft",
    description:
      "Spray foam rig theft is one of the most common and costly equipment losses. We write theft coverage that protects your rig whether it's stolen from a jobsite, lifted off a trailer overnight, or taken from a storage yard — not just theft of the entire vehicle.",
    icon: "ShieldCheck",
    keywords: ["spray foam rig theft insurance", "proportioner theft coverage", "spray foam equipment theft", "spray foam rig vandalism insurance"],
  },
  {
    slug: "replacement-cost",
    title: "Replacement Cost Coverage",
    short: "Get paid what a new rig actually costs",
    description:
      "Many rig policies pay actual cash value — a fraction of what a new proportioner costs after depreciation. We place inland marine at replacement cost so a theft, fire, or damage claim pays what it actually takes to get a new rig back on the job.",
    icon: "Award",
    keywords: ["spray foam rig replacement cost insurance", "proportioner replacement cost", "new rig value spray foam", "spray foam equipment replacement coverage"],
  },
  {
    slug: "general-liability",
    title: "General Liability",
    short: "GL for spray foam rig operations",
    description:
      "Rig coverage doesn't exist in a vacuum. We bundle GL that covers overspray damage, third-party bodily injury, and completed-operations claims with your inland marine and auto — so your full spray foam operation is covered in one coordinated program.",
    icon: "ShieldCheck",
    keywords: ["spray foam rig GL insurance", "spray foam general liability", "spray foam rig liability", "overspray insurance spray foam rig"],
  },
  {
    slug: "workers-compensation",
    title: "Workers' Compensation",
    short: "WC for rig operators and applicators",
    description:
      "Spray foam rig operators face chemical exposure, equipment injury risk, and height exposure on every job. We place WC with class codes that fit rig operators and spray foam applicators — not generic construction codes.",
    icon: "HardHat",
    keywords: ["spray foam rig workers comp", "spray foam applicator WC", "spray foam rig operator workers compensation", "rig operator WC insurance"],
  },
  {
    slug: "contractors-pollution-liability",
    title: "Contractors Pollution Liability",
    short: "Isocyanate exposure coverage for rig crews",
    description:
      "Standard GL excludes isocyanate and chemical exposure through the pollution exclusion. Contractors pollution liability fills that gap for spray foam rig operators — covering respiratory exposure, chemical releases, and off-gassing claims that arise from rig operation.",
    icon: "Droplets",
    keywords: ["spray foam rig CPL insurance", "isocyanate insurance spray foam", "spray foam rig pollution liability", "CPL for spray foam rig operators"],
  },
] as const;

export const LOCATIONS = [
  { slug: "texas", name: "Texas", region: "Houston · Dallas · Statewide", blurb: "Texas spray foam contractors operate some of the largest rig fleets in the country. We place rig coverage for Texas operators from the Gulf Coast to the Panhandle — proportioners, hose systems, rig trucks, and theft protection for high-volume residential and commercial work." },
  { slug: "florida", name: "Florida", region: "Tampa · Orlando · Statewide", blurb: "Florida spray foam rigs face hurricane exposure and high-theft environments. We insure Florida rig operators with inland marine, theft coverage, and commercial auto — coordinated programs for the state's active residential and commercial spray foam market." },
  { slug: "southeast", name: "Southeast", region: "GA · NC · SC · AL", blurb: "Growing spray foam markets across the Southeast drive significant rig fleet activity. We insure rigs for Georgia, North Carolina, South Carolina, and Alabama contractors doing new-construction residential, commercial retrofits, and agricultural building work." },
  { slug: "midwest", name: "Midwest", region: "OH · IN · MI · IL", blurb: "Cold-climate Midwest markets keep spray foam rigs running year-round. We place inland marine, breakdown, and rig truck coverage for Ohio, Indiana, Michigan, and Illinois operators — including rigs stored over winter and equipment breakdown from cold-temperature operation." },
  { slug: "southwest", name: "Southwest", region: "AZ · NM · NV", blurb: "Desert Southwest rigs face heat exposure and UV chemical degradation. We insure spray foam rigs for Arizona, New Mexico, and Nevada contractors — with coverage built for high-temperature operation and the equipment conditions that come with desert work." },
  { slug: "mountain-west", name: "Mountain West", region: "CO · UT · ID", blurb: "Mountain West spray foam rigs operate at altitude in cold and remote conditions. We insure Colorado, Utah, and Idaho rigs with inland marine and breakdown coverage — built for cold-climate application conditions and the equipment failures they create." },
  { slug: "northeast", name: "Northeast", region: "NY · PA · NJ · New England", blurb: "Dense Northeast construction markets keep rigs on the road year-round. We insure spray foam rigs for New York, Pennsylvania, New Jersey, and New England contractors — including theft coverage in high-density urban markets and breakdown coverage for cold-climate operation." },
  { slug: "pacific-west", name: "Pacific West", region: "CA · OR · WA", blurb: "California spray foam rig operators face strict environmental regulations and high equipment values. We place compliant inland marine, GL, and CPL for West Coast rig operators — including coverage for California's strict isocyanate handling requirements." },
] as const;

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "Spray foam rig specialists", icon: "HardHat" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "2-hour claims response", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const STATS = [
  { value: 300, suffix: "+", label: "Spray foam rigs and operations insured nationwide", prefix: "" },
  { value: 20, suffix: "+", label: "Years insuring specialty contractor equipment", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 50, suffix: "", label: "States licensed & writing", prefix: "" },
] as const;

export const TESTIMONIALS = [
  { quote: "My proportioner and heated hose were stolen off the trailer overnight — a $60,000 loss. My inland marine was at ACV and paid maybe 60% of replacement cost. Spray Foam Rig Insurance put me on replacement cost and I've never looked back.", name: "Marcus T.", role: "Owner / Applicator", location: "Texas" },
  { quote: "The proportioner had a compressor failure mid-job. My property policy said 'not covered — that's a breakdown.' The equipment-breakdown endorsement paid the repair and two days of business interruption. That's why rig coverage needs both lines.", name: "Denise R.", role: "Operations Manager", location: "Florida" },
  { quote: "I thought my rig was covered under my commercial auto. It wasn't — the auto covers the truck; the equipment on the trailer needs inland marine. Found out when someone broke into my trailer. Now everything's on a scheduled inland marine at replacement cost.", name: "Kevin W.", role: "Spray Foam Contractor", location: "Ohio" },
] as const;
