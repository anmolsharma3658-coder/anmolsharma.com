// Azimuth revenue model — 11 streams. Ported verbatim from the source
// financial model (Azimuth_Revenue_Model canvas / Azimuth_Financial_Model_FINAL.xlsx).

export type ScenarioKey = "base" | "upside" | "downside";

export type ScenarioMod = {
  label: string;
  venueMult: number;
  takeRateMult: number;
  apiGrowthMult: number;
  financingAttachMult: number;
  subGrowthMult: number;
  parafinAttachMult: number;
  paymentsTakeMult: number;
};

export const SCENARIOS: Record<ScenarioKey, ScenarioMod> = {
  base: {
    label: "Base",
    venueMult: 1,
    takeRateMult: 1,
    apiGrowthMult: 1,
    financingAttachMult: 1,
    subGrowthMult: 1,
    parafinAttachMult: 1,
    paymentsTakeMult: 1,
  },
  upside: {
    label: "Upside",
    venueMult: 1.5,
    takeRateMult: 1.15,
    apiGrowthMult: 1.25,
    financingAttachMult: 1.4,
    subGrowthMult: 1.3,
    parafinAttachMult: 1.5,
    paymentsTakeMult: 1.2,
  },
  downside: {
    label: "Downside",
    venueMult: 0.5,
    takeRateMult: 0.85,
    apiGrowthMult: 0.6,
    financingAttachMult: 0.5,
    subGrowthMult: 0.7,
    parafinAttachMult: 0.5,
    paymentsTakeMult: 0.75,
  },
};

export const YEARS = ["Y1", "Y2", "Y3", "Y4", "Y5"];
export const TOTAL_US_VENUES = 165000;
const BASE_VENUES = [500, 4500, 15000, 32000, 54450];
const BASE_SHOWS = [2000, 10000, 25000, 45000, 70000];
const AVG_GUARANTEE_RAMP = [92, 75, 60, 50, 45];
const BASE_API_CALLS_BN = [2.5, 12, 32, 60, 90];
const BASE_POWER_LAW = [1.0, 1.1, 1.2, 1.3, 1.42];
const BASE_ENT_CLIENTS = [15, 60, 150, 280, 450];
const BASE_SUB_SEATS = [250, 2000, 6500, 13000, 22000];
const ARPU_RAMP = [72, 65, 58, 52, 48];
const FINANCING_ATTACH_RAMP = [0.1, 0.15, 0.2, 0.22, 0.25];
const DATA_LIC_RAMP = [500, 2000, 8000, 18000, 35000];

export const TAKE_RATE = 0.048;
const API_PRICE = 2000;
const ENT_ACV = 50;
const CAMPAIGN_ATTACH = 0.25;
const CAMPAIGN_FEE = [150, 180, 216, 259, 311];
const VENUE_AD_MONTHLY = [10, 12, 14.4, 17.28, 20.74];
export const HAAS_PER_VENUE_YR = 1.2;
const SERVICES_BASE = 500;
const SERVICES_GROWTH = 1.7;
const FINANCING_NET_YIELD = 0.08;

const PARAFIN_VENUE_ATTACH = [0.05, 0.1, 0.15, 0.2, 0.25];
const PARAFIN_VENUE_LOAN_K = 40;
const PARAFIN_ARTIST_ATTACH = [0.1, 0.15, 0.2, 0.25, 0.3];
const PARAFIN_ARTIST_LOAN_K = 20;
export const PARAFIN_REV_SHARE = 0.04;
const PARAFIN_ONGOING_PER_VENUE = 0.5;

const PAYMENTS_GMV_MULT = 1.5;
export const PAYMENTS_NET_TAKE = 0.004;

const AD_TOOL_ARTISTS = [200, 1500, 5000, 12000, 25000];
const AD_TOOL_SUB_FEE = 50;
const AD_TOOL_SPEND_PER_ARTIST_MO = 250;
const AD_TOOL_TAKE_RATE = 0.12;

const AR_LABEL_CLIENTS = [3, 12, 25, 40, 50];
const AR_LABEL_ACV = 100;
const AR_DEAL_COMMISSION_K = 25;
const AR_DEALS_PER_YEAR = [0, 5, 25, 50, 80];
const AR_OWN_PICKS_REV_K = [0, 100, 400, 1000, 2000];

export type StreamRow = {
  key: string;
  name: string;
  note: string;
  byYear: number[];
};

export type YearModel = {
  subscription: number;
  booking: number;
  enterpriseApi: number;
  financing: number;
  advertising: number;
  hardwareService: number;
  services: number;
  parafin: number;
  payments: number;
  adCampaignTool: number;
  arIntelligence: number;
  total: number;
  gmv: number;
  activeVenues: number;
  shows: number;
  adArtists: number;
  cogs: number;
  grossProfit: number;
  grossMargin: number;
  opex: number;
  ebitda: number;
  ebitdaMargin: number;
};

export function computeYear(
  i: number,
  s: ScenarioMod,
  takeRateOverride?: number,
  financingAttachOverride?: number,
): YearModel {
  const activeVenues = Math.round(BASE_VENUES[i] * s.venueMult);
  const subSeats = Math.round(BASE_SUB_SEATS[i] * s.subGrowthMult);
  const arpu = ARPU_RAMP[i];
  const subscription = (subSeats * arpu * 12) / 1000;

  const shows = Math.round(BASE_SHOWS[i] * s.venueMult);
  const avgGuarantee = AVG_GUARANTEE_RAMP[i];
  const gmv = shows * avgGuarantee;
  const takeRate =
    takeRateOverride !== undefined
      ? takeRateOverride
      : TAKE_RATE * s.takeRateMult;
  const booking = gmv * takeRate;

  const apiCalls = BASE_API_CALLS_BN[i] * s.apiGrowthMult * 1000;
  const apiUsage = (apiCalls * API_PRICE * BASE_POWER_LAW[i]) / 1000;
  const entClients = Math.round(BASE_ENT_CLIENTS[i] * s.apiGrowthMult);
  const entLicense = entClients * ENT_ACV;
  const slaRev = (activeVenues * 0.15 * 300 * 12) / 1000;
  const dataLicensing = DATA_LIC_RAMP[i];
  const enterpriseApi = apiUsage + entLicense + slaRev + dataLicensing;

  const financingAttach =
    financingAttachOverride !== undefined
      ? financingAttachOverride
      : FINANCING_ATTACH_RAMP[i] * s.financingAttachMult;
  const financing = gmv * financingAttach * FINANCING_NET_YIELD;

  const campaign = (shows * CAMPAIGN_ATTACH * CAMPAIGN_FEE[i]) / 1000;
  const venueAds = (activeVenues * VENUE_AD_MONTHLY[i] * 12) / 1000;
  const advertising = campaign + venueAds;

  const hardwareService = activeVenues * HAAS_PER_VENUE_YR;

  const services = SERVICES_BASE * Math.pow(SERVICES_GROWTH, i);

  const parafinVenueOrig =
    activeVenues *
    PARAFIN_VENUE_ATTACH[i] *
    s.parafinAttachMult *
    PARAFIN_VENUE_LOAN_K *
    PARAFIN_REV_SHARE;
  const parafinArtistOrig =
    shows *
    PARAFIN_ARTIST_ATTACH[i] *
    s.parafinAttachMult *
    PARAFIN_ARTIST_LOAN_K *
    PARAFIN_REV_SHARE;
  const parafinOngoing = activeVenues * PARAFIN_ONGOING_PER_VENUE;
  const parafin = parafinVenueOrig + parafinArtistOrig + parafinOngoing;

  const payments =
    gmv * PAYMENTS_GMV_MULT * PAYMENTS_NET_TAKE * s.paymentsTakeMult;

  const adArtists = Math.round(AD_TOOL_ARTISTS[i] * s.subGrowthMult);
  const adToolSubs = (adArtists * AD_TOOL_SUB_FEE * 12) / 1000;
  const adManagedCut =
    (adArtists * AD_TOOL_SPEND_PER_ARTIST_MO * 12 * AD_TOOL_TAKE_RATE) / 1000;
  const adCampaignTool = adToolSubs + adManagedCut;

  const arLabelSubs =
    Math.round(AR_LABEL_CLIENTS[i] * s.apiGrowthMult) * AR_LABEL_ACV;
  const arDealCommissions =
    AR_DEALS_PER_YEAR[i] * AR_DEAL_COMMISSION_K * s.apiGrowthMult;
  const arOwnPicks = AR_OWN_PICKS_REV_K[i];
  const arIntelligence = arLabelSubs + arDealCommissions + arOwnPicks;

  const total =
    subscription +
    booking +
    enterpriseApi +
    financing +
    advertising +
    hardwareService +
    services +
    parafin +
    payments +
    adCampaignTool +
    arIntelligence;

  const cogs = 0.06 * total + 0.01 * gmv + 700 * Math.pow(1.2, i);
  const grossProfit = total - cogs;
  const grossMargin = grossProfit / total;

  const opex =
    480 * Math.pow(1.2, i) +
    (i === 0 ? 0.22 : i === 4 ? 0.12 : 0.22 - i * 0.025) * total +
    120 * Math.pow(1.1, i) +
    0.18 * total;

  const ebitda = grossProfit - opex;
  const ebitdaMargin = ebitda / total;

  return {
    subscription,
    booking,
    enterpriseApi,
    financing,
    advertising,
    hardwareService,
    services,
    parafin,
    payments,
    adCampaignTool,
    arIntelligence,
    total,
    gmv,
    activeVenues,
    shows,
    adArtists,
    cogs,
    grossProfit,
    grossMargin,
    opex,
    ebitda,
    ebitdaMargin,
  };
}

export function buildModel(s: ScenarioMod): {
  years: YearModel[];
  streams: StreamRow[];
} {
  const years: YearModel[] = YEARS.map((_, i) => computeYear(i, s));

  const streams: StreamRow[] = [
    {
      key: "subscription",
      name: "Venue & Marketplace SaaS",
      note: "Municipal venues · promoters · labels · agency seats. Compass / Elevation / Meridian tiers.",
      byYear: years.map((y) => y.subscription),
    },
    {
      key: "booking",
      name: "Booking Take-Rate",
      note: "4.8% of gross guarantees facilitated through Azimuth's venue-first routing engine.",
      byYear: years.map((y) => y.booking),
    },
    {
      key: "enterpriseApi",
      name: "Enterprise API & Data Licensing",
      note: "Airplay/DMA audience dataset + venue intel reports + sync referrals. Labels, CMOs, rights orgs.",
      byYear: years.map((y) => y.enterpriseApi),
    },
    {
      key: "financing",
      name: "Artist Guarantee Financing",
      note: "Pre-production + guarantee advances from Azimuth's own vehicle. Net yield on capital deployed.",
      byYear: years.map((y) => y.financing),
    },
    {
      key: "parafin",
      name: "Parafin Embedded Capital",
      note: "Working capital loans to venues + artist advances originated via Parafin. Rev share on principal + ongoing platform fee.",
      byYear: years.map((y) => y.parafin),
    },
    {
      key: "payments",
      name: "Embedded Payments (Stripe Connect)",
      note: "Azimuth runs booking + ticketing money flow. ~40 bps net on GMV processed; scales linearly with every booked dollar.",
      byYear: years.map((y) => y.payments),
    },
    {
      key: "adCampaignTool",
      name: "Smart Ad Campaigns (post-ToneDen)",
      note: "$50/mo artist subscription + 12% cut on managed Meta/TikTok/Spotify spend. Fills the ToneDen vacuum with venue-grounded targeting no DSP can replicate.",
      byYear: years.map((y) => y.adCampaignTool),
    },
    {
      key: "arIntelligence",
      name: "A&R Intelligence & Artist Picks",
      note: "Label A&R subscriptions + per-deal commission on Azimuth-sourced signings + royalty/equity on in-house artist picks driven by airplay traction.",
      byYear: years.map((y) => y.arIntelligence),
    },
    {
      key: "advertising",
      name: "Advertising & Campaigns",
      note: "Artist-targeted campaigns + programmatic venue ad network keyed on verified DMA demand.",
      byYear: years.map((y) => y.advertising),
    },
    {
      key: "hardwareService",
      name: "Hardware-as-a-Service",
      note: "Recurring device maintenance + data fee on ESP32/Silicon Labs capture nodes.",
      byYear: years.map((y) => y.hardwareService),
    },
    {
      key: "services",
      name: "Services & Partnerships",
      note: "CVB/municipality consulting, sponsorship matching, insurance brokerage.",
      byYear: years.map((y) => y.services),
    },
  ];

  return { years, streams };
}

export const TAKE_AXIS = [0.035, 0.042, 0.048, 0.055, 0.065];
export const FIN_ATTACH_AXIS = [0.1, 0.17, 0.25, 0.33, 0.4];

export function sensitivityGrid(s: ScenarioMod): number[][] {
  return TAKE_AXIS.map((tr) =>
    FIN_ATTACH_AXIS.map((fa) => computeYear(4, s, tr, fa).total),
  );
}

export function fmt$K(n: number): string {
  if (n >= 1000) return `$${(n / 1000).toFixed(1)}M`;
  return `$${Math.round(n).toLocaleString()}K`;
}

export function fmt$M(n: number): string {
  return `$${(n / 1000).toFixed(1)}M`;
}

export function pct(n: number): string {
  return `${(n * 100).toFixed(0)}%`;
}

export function pct1(n: number): string {
  return `${(n * 100).toFixed(1)}%`;
}
